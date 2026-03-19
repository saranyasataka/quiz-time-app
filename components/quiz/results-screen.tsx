"use client"

import { Button } from "@/components/ui/button"
import { Trophy, RotateCcw, Star, Home, Shuffle } from "lucide-react"
import { cn } from "@/lib/utils"

interface ResultsScreenProps {
  score: number
  totalQuestions: number
  onRestart: () => void
  onHome: () => void
  onNewQuiz: () => void
}

export function ResultsScreen({ 
  score, 
  totalQuestions, 
  onRestart, 
  onHome,
  onNewQuiz 
}: ResultsScreenProps) {
  const percentage = Math.round((score / totalQuestions) * 100)
  
  const getMessage = () => {
    if (percentage === 100) return { title: "Perfect Score!", subtitle: "You're a genius!" }
    if (percentage >= 80) return { title: "Excellent!", subtitle: "You really know your stuff!" }
    if (percentage >= 60) return { title: "Good Job!", subtitle: "You did pretty well!" }
    if (percentage >= 40) return { title: "Not Bad!", subtitle: "Room for improvement!" }
    return { title: "Keep Trying!", subtitle: "Practice makes perfect!" }
  }

  const { title, subtitle } = getMessage()

  return (
    <div className="w-full max-w-md mx-auto text-center">
      {/* Trophy Icon */}
      <div className={cn(
        "w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center",
        percentage >= 60 ? "bg-success/10" : "bg-primary/10"
      )}>
        <Trophy className={cn(
          "w-12 h-12",
          percentage >= 60 ? "text-success" : "text-primary"
        )} />
      </div>

      {/* Message */}
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
        {title}
      </h2>
      <p className="text-lg text-muted-foreground mb-8">
        {subtitle}
      </p>

      {/* Score Display */}
      <div className="bg-card border border-border rounded-2xl p-8 mb-8">
        <div className="text-6xl md:text-7xl font-bold text-primary mb-2">
          {score}/{totalQuestions}
        </div>
        <p className="text-muted-foreground text-lg">
          Correct Answers
        </p>
        
        {/* Stars */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-8 h-8 transition-colors",
                i < Math.ceil(percentage / 20) 
                  ? "text-yellow-400 fill-yellow-400" 
                  : "text-muted"
              )}
            />
          ))}
        </div>
      </div>

      {/* Percentage Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Score</span>
          <span>{percentage}%</span>
        </div>
        <div className="h-3 bg-secondary rounded-full overflow-hidden">
          <div
            className={cn(
              "h-full rounded-full transition-all duration-1000 ease-out",
              percentage >= 60 ? "bg-success" : "bg-primary"
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          onClick={onRestart}
          size="lg"
          className="w-full text-lg py-6 rounded-xl"
        >
          <RotateCcw className="w-5 h-5 mr-2" />
          Play Again
        </Button>
        
        <div className="grid grid-cols-2 gap-3">
          <Button
            onClick={onNewQuiz}
            variant="outline"
            size="lg"
            className="py-5 rounded-xl"
          >
            <Shuffle className="w-4 h-4 mr-2" />
            New Quiz
          </Button>
          <Button
            onClick={onHome}
            variant="outline"
            size="lg"
            className="py-5 rounded-xl"
          >
            <Home className="w-4 h-4 mr-2" />
            Home
          </Button>
        </div>
      </div>
    </div>
  )
}
