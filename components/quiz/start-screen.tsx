"use client"

import { Button } from "@/components/ui/button"
import { Brain, Sparkles, Clock, Trophy, Plus, Shuffle } from "lucide-react"
import { categories } from "@/lib/quiz-data"

interface StartScreenProps {
  totalQuestions: number
  customQuestionCount: number
  onSelectCategory: () => void
  onQuickPlay: () => void
  onAddQuestion: () => void
}

export function StartScreen({ 
  totalQuestions, 
  customQuestionCount,
  onSelectCategory, 
  onQuickPlay,
  onAddQuestion
}: StartScreenProps) {
  return (
    <div className="w-full max-w-md mx-auto text-center">
      {/* Logo/Icon */}
      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary flex items-center justify-center">
        <Brain className="w-10 h-10 text-primary-foreground" />
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 text-balance">
        QuizTime
      </h1>
      <p className="text-lg text-muted-foreground mb-8 text-pretty">
        Test your knowledge with fun trivia questions!
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="bg-card border border-border rounded-xl p-4">
          <Sparkles className="w-6 h-6 text-primary mx-auto mb-2" />
          <p className="text-2xl font-bold text-foreground">{totalQuestions}</p>
          <p className="text-xs text-muted-foreground">Questions</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
          <p className="text-2xl font-bold text-foreground">{categories.length}</p>
          <p className="text-xs text-muted-foreground">Categories</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <Trophy className="w-6 h-6 text-primary mx-auto mb-2" />
          <p className="text-2xl font-bold text-foreground">{customQuestionCount}</p>
          <p className="text-xs text-muted-foreground">Custom</p>
        </div>
      </div>

      {/* Categories Preview */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {categories.map((category) => (
          <span
            key={category.id}
            className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
          >
            {category.name}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          onClick={onSelectCategory}
          size="lg"
          className="w-full text-lg py-6 rounded-xl"
        >
          Select Categories
        </Button>
        
        <div className="grid grid-cols-2 gap-3">
          <Button
            onClick={onQuickPlay}
            variant="outline"
            size="lg"
            className="text-base py-5 rounded-xl"
          >
            <Shuffle className="w-4 h-4 mr-2" />
            Quick Play
          </Button>
          <Button
            onClick={onAddQuestion}
            variant="outline"
            size="lg"
            className="text-base py-5 rounded-xl"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Quiz
          </Button>
        </div>
      </div>
    </div>
  )
}
