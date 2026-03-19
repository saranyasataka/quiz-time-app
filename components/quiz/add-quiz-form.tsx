"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { categories, difficulties, type Question, type Difficulty } from "@/lib/quiz-data"
import { ArrowLeft, Plus, Check } from "lucide-react"

interface AddQuizFormProps {
  onBack: () => void
  onAddQuestion: (question: Omit<Question, "id">) => void
}

export function AddQuizForm({ onBack, onAddQuestion }: AddQuizFormProps) {
  const [question, setQuestion] = useState("")
  const [options, setOptions] = useState(["", "", "", ""])
  const [correctAnswer, setCorrectAnswer] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(null)
  const [explanation, setExplanation] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options]
    newOptions[index] = value
    setOptions(newOptions)
  }

  const handleSubmit = () => {
    if (!question || options.some(o => !o) || correctAnswer === null || !selectedCategory || !selectedDifficulty || !explanation) {
      return
    }

    onAddQuestion({
      question,
      options,
      correctAnswer,
      category: selectedCategory,
      difficulty: selectedDifficulty,
      explanation,
    })

    // Reset form
    setQuestion("")
    setOptions(["", "", "", ""])
    setCorrectAnswer(null)
    setSelectedCategory("")
    setSelectedDifficulty(null)
    setExplanation("")
    
    // Show success message
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 2000)
  }

  const isValid = question && 
    options.every(o => o.trim()) && 
    correctAnswer !== null && 
    selectedCategory &&
    selectedDifficulty &&
    explanation.trim()

  const getDifficultyColor = (diffId: Difficulty) => {
    switch (diffId) {
      case "easy": return "bg-emerald-500 text-white"
      case "moderate": return "bg-amber-500 text-white"
      case "hard": return "bg-red-500 text-white"
      default: return "bg-secondary text-secondary-foreground"
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="shrink-0"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Add New Question
          </h2>
          <p className="text-muted-foreground">
            Create your own quiz questions
          </p>
        </div>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="mb-6 p-4 bg-success/10 border border-success/30 rounded-xl flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center">
            <Check className="w-4 h-4 text-success-foreground" />
          </div>
          <span className="text-foreground font-medium">Question added successfully!</span>
        </div>
      )}

      {/* Form */}
      <div className="space-y-6">
        {/* Question */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Question
          </label>
          <Input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter your question..."
            className="rounded-xl py-6 text-base"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Category
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name)}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-medium transition-all",
                  selectedCategory === cat.name
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Difficulty Level
          </label>
          <div className="flex gap-3">
            {difficulties.map((diff) => (
              <button
                key={diff.id}
                onClick={() => setSelectedDifficulty(diff.id)}
                className={cn(
                  "flex-1 px-4 py-3 rounded-xl text-sm font-medium transition-all border-2",
                  selectedDifficulty === diff.id
                    ? `${getDifficultyColor(diff.id)} border-transparent`
                    : "bg-card text-foreground border-border hover:border-primary/50"
                )}
              >
                {diff.name}
              </button>
            ))}
          </div>
        </div>

        {/* Answer Options */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Answer Options
          </label>
          <p className="text-sm text-muted-foreground mb-3">
            Click the circle to mark the correct answer
          </p>
          <div className="space-y-3">
            {options.map((option, index) => (
              <div key={index} className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setCorrectAnswer(index)}
                  className={cn(
                    "w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 transition-all",
                    correctAnswer === index
                      ? "border-success bg-success"
                      : "border-border hover:border-primary"
                  )}
                >
                  {correctAnswer === index && (
                    <Check className="w-4 h-4 text-success-foreground" />
                  )}
                </button>
                <Input
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  placeholder={`Option ${index + 1}`}
                  className="rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Explanation */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Explanation
          </label>
          <p className="text-sm text-muted-foreground mb-3">
            Explain why the correct answer is right. This helps users learn when they get it wrong.
          </p>
          <textarea
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            placeholder="Provide a clear explanation of the answer..."
            className="w-full min-h-[120px] p-4 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 resize-none"
          />
        </div>

        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          size="lg"
          className="w-full text-lg py-6 rounded-xl"
          disabled={!isValid}
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Question
        </Button>
      </div>
    </div>
  )
}
