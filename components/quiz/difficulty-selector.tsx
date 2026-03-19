"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { difficulties, type Difficulty } from "@/lib/quiz-data"
import { ArrowLeft, ArrowRight, Smile, Meh, Flame, Check } from "lucide-react"

interface DifficultySelectorProps {
  selectedDifficulties: Difficulty[]
  onToggleDifficulty: (difficulty: Difficulty) => void
  onContinue: () => void
  onBack: () => void
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  smile: Smile,
  meh: Meh,
  flame: Flame,
}

export function DifficultySelector({
  selectedDifficulties,
  onToggleDifficulty,
  onContinue,
  onBack,
}: DifficultySelectorProps) {
  return (
    <div className="w-full max-w-xl mx-auto">
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
            Select Difficulty
          </h2>
          <p className="text-muted-foreground">
            Choose your challenge level
          </p>
        </div>
      </div>

      {/* Difficulty Options */}
      <div className="flex flex-col gap-4 mb-8">
        {difficulties.map((diff) => {
          const Icon = iconMap[diff.icon]
          const isSelected = selectedDifficulties.includes(diff.id)
          
          return (
            <button
              key={diff.id}
              onClick={() => onToggleDifficulty(diff.id)}
              className={cn(
                "relative flex items-center gap-5 p-5 rounded-xl border-2 transition-all text-left",
                "hover:border-primary/50 hover:bg-primary/5",
                isSelected 
                  ? "border-primary bg-primary/5" 
                  : "border-border bg-card"
              )}
            >
              {isSelected && (
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
              )}
              
              <div className={cn(
                "w-14 h-14 rounded-xl flex items-center justify-center shrink-0",
                diff.color
              )}>
                {Icon && <Icon className="w-7 h-7 text-white" />}
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {diff.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {diff.description}
                </p>
              </div>
            </button>
          )
        })}
      </div>

      {/* Tip */}
      <div className="bg-secondary/50 rounded-xl p-4 mb-6">
        <p className="text-sm text-muted-foreground text-center">
          Select one or more difficulty levels. Questions will be mixed from your selection.
        </p>
      </div>

      {/* Continue Button */}
      <Button
        onClick={onContinue}
        size="lg"
        className="w-full text-lg py-6 rounded-xl"
        disabled={selectedDifficulties.length === 0}
      >
        Continue
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </div>
  )
}
