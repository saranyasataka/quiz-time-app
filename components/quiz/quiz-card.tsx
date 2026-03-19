"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import type { Question, Difficulty } from "@/lib/quiz-data"
import { CheckCircle2, XCircle, Lightbulb, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface QuizCardProps {
  question: Question
  currentIndex: number
  totalQuestions: number
  onAnswer: (isCorrect: boolean) => void
}

const getDifficultyStyles = (difficulty: Difficulty) => {
  switch (difficulty) {
    case "easy": return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
    case "moderate": return "bg-amber-500/10 text-amber-600 border-amber-500/20"
    case "hard": return "bg-red-500/10 text-red-600 border-red-500/20"
    default: return "bg-secondary text-secondary-foreground"
  }
}

export function QuizCard({ question, currentIndex, totalQuestions, onAnswer }: QuizCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [hasAnswered, setHasAnswered] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)

  const isCorrect = selectedAnswer === question.correctAnswer

  const handleOptionClick = (index: number) => {
    if (hasAnswered) return
    
    setSelectedAnswer(index)
    setHasAnswered(true)
    setShowExplanation(true)
  }

  const handleContinue = () => {
    onAnswer(isCorrect)
    setSelectedAnswer(null)
    setHasAnswered(false)
    setShowExplanation(false)
  }

  const getOptionStyle = (index: number) => {
    if (!hasAnswered) {
      return "bg-card hover:bg-secondary border-border hover:border-primary/50"
    }
    
    if (index === question.correctAnswer) {
      return "bg-success/10 border-success text-success"
    }
    
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return "bg-destructive/10 border-destructive text-destructive"
    }
    
    return "bg-card border-border opacity-50"
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Category & Difficulty Badges */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
            {question.category}
          </span>
          <span className={cn(
            "px-3 py-1 text-xs font-medium rounded-full capitalize border",
            getDifficultyStyles(question.difficulty)
          )}>
            {question.difficulty}
          </span>
        </div>
        <span className="text-sm text-muted-foreground">
          Question {currentIndex + 1} of {totalQuestions}
        </span>
      </div>

      {/* Question */}
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 leading-relaxed text-balance">
        {question.question}
      </h2>

      {/* Options */}
      <div className="flex flex-col gap-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            disabled={hasAnswered}
            className={cn(
              "w-full p-4 md:p-5 text-left rounded-xl border-2 transition-all duration-200",
              "flex items-center justify-between gap-4",
              "font-medium text-base md:text-lg",
              getOptionStyle(index),
              !hasAnswered && "cursor-pointer active:scale-[0.98]"
            )}
          >
            <div className="flex items-center gap-4">
              <span className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0",
                "bg-secondary text-secondary-foreground",
                hasAnswered && index === question.correctAnswer && "bg-success text-success-foreground",
                hasAnswered && index === selectedAnswer && index !== question.correctAnswer && "bg-destructive text-destructive-foreground"
              )}>
                {String.fromCharCode(65 + index)}
              </span>
              <span>{option}</span>
            </div>
            
            {hasAnswered && index === question.correctAnswer && (
              <CheckCircle2 className="w-6 h-6 text-success shrink-0" />
            )}
            {hasAnswered && index === selectedAnswer && index !== question.correctAnswer && (
              <XCircle className="w-6 h-6 text-destructive shrink-0" />
            )}
          </button>
        ))}
      </div>

      {/* Explanation Section */}
      {showExplanation && (
        <div className={cn(
          "mt-6 p-5 rounded-xl border-2 animate-in fade-in slide-in-from-bottom-4 duration-300",
          isCorrect 
            ? "bg-success/5 border-success/30" 
            : "bg-amber-500/5 border-amber-500/30"
        )}>
          {/* Result Header */}
          <div className="flex items-center gap-3 mb-3">
            {isCorrect ? (
              <>
                <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="font-semibold text-success">Correct!</p>
                  <p className="text-sm text-muted-foreground">Great job!</p>
                </div>
              </>
            ) : (
              <>
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="font-semibold text-amber-600">Not quite right</p>
                  <p className="text-sm text-muted-foreground">
                    The correct answer was: <span className="font-medium text-foreground">{question.options[question.correctAnswer]}</span>
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Explanation Text */}
          <div className="mt-4 pt-4 border-t border-border/50">
            <p className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              Learn why:
            </p>
            <p className="text-sm text-foreground leading-relaxed">
              {question.explanation}
            </p>
          </div>

          {/* Continue Button */}
          <Button 
            onClick={handleContinue} 
            className="w-full mt-5"
            size="lg"
          >
            {currentIndex + 1 === totalQuestions ? "See Results" : "Next Question"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      )}
    </div>
  )
}
