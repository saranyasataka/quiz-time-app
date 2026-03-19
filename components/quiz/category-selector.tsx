"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { categories, educationLevels, getCategoriesByLevel, type Category, type EducationLevel } from "@/lib/quiz-data"
import { 
  Globe, 
  FlaskConical, 
  Palette, 
  Landmark, 
  Trophy, 
  Calculator,
  Shuffle,
  ArrowLeft,
  ArrowRight,
  Check,
  Code,
  Brain,
  Cpu,
  BookOpen,
  Leaf,
  Shapes,
  Lightbulb,
  Variable,
  Dna,
  Map,
  Pen,
  Triangle,
  Atom,
  Microscope,
  BookMarked,
  Scroll,
  TrendingUp,
  Sigma,
  BarChart,
  Briefcase,
  Glasses,
  FlaskRound,
  GraduationCap,
  School,
  Building,
  Baby
} from "lucide-react"
import { useState } from "react"

interface CategorySelectorProps {
  selectedCategories: string[]
  onToggleCategory: (categoryId: string) => void
  onStartQuiz: () => void
  onSelectAll: () => void
  onBack: () => void
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  globe: Globe,
  "flask-conical": FlaskConical,
  palette: Palette,
  landmark: Landmark,
  trophy: Trophy,
  calculator: Calculator,
  code: Code,
  brain: Brain,
  cpu: Cpu,
  "book-open": BookOpen,
  leaf: Leaf,
  shapes: Shapes,
  lightbulb: Lightbulb,
  variable: Variable,
  dna: Dna,
  map: Map,
  pen: Pen,
  "function-square": Variable,
  triangle: Triangle,
  atom: Atom,
  microscope: Microscope,
  "book-marked": BookMarked,
  scroll: Scroll,
  "trending-up": TrendingUp,
  sigma: Sigma,
  "bar-chart": BarChart,
  briefcase: Briefcase,
  glasses: Glasses,
  "flask-round": FlaskRound,
}

const levelIconMap: Record<EducationLevel, React.ComponentType<{ className?: string }>> = {
  primary: Baby,
  middle: School,
  high: GraduationCap,
  college: Building,
}

export function CategorySelector({
  selectedCategories,
  onToggleCategory,
  onStartQuiz,
  onSelectAll,
  onBack,
}: CategorySelectorProps) {
  const [expandedLevels, setExpandedLevels] = useState<EducationLevel[]>(["primary", "middle", "high", "college"])
  
  const allSelected = selectedCategories.length === categories.length

  const toggleLevel = (level: EducationLevel) => {
    setExpandedLevels(prev => 
      prev.includes(level) 
        ? prev.filter(l => l !== level)
        : [...prev, level]
    )
  }

  const selectAllInLevel = (level: EducationLevel) => {
    const levelCategories = getCategoriesByLevel(level)
    const levelCategoryIds = levelCategories.map(c => c.id)
    const allLevelSelected = levelCategoryIds.every(id => selectedCategories.includes(id))
    
    if (allLevelSelected) {
      // Deselect all in this level
      levelCategoryIds.forEach(id => {
        if (selectedCategories.includes(id)) {
          onToggleCategory(id)
        }
      })
    } else {
      // Select all in this level
      levelCategoryIds.forEach(id => {
        if (!selectedCategories.includes(id)) {
          onToggleCategory(id)
        }
      })
    }
  }

  const renderCategoryCard = (category: Category) => {
    const Icon = iconMap[category.icon]
    const isSelected = selectedCategories.includes(category.id)
    
    return (
      <button
        key={category.id}
        onClick={() => onToggleCategory(category.id)}
        className={cn(
          "relative flex items-start gap-3 p-3 rounded-xl border-2 transition-all text-left",
          "hover:border-primary/50 hover:bg-primary/5",
          isSelected 
            ? "border-primary bg-primary/5" 
            : "border-border bg-card"
        )}
      >
        {isSelected && (
          <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
            <Check className="w-3 h-3 text-primary-foreground" />
          </div>
        )}
        
        <div className={cn(
          "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
          category.color
        )}>
          {Icon && <Icon className="w-5 h-5 text-white" />}
        </div>
        
        <div className="flex-1 min-w-0 pr-6">
          <h4 className="font-medium text-foreground text-sm">
            {category.name}
          </h4>
          <p className="text-xs text-muted-foreground line-clamp-1">
            {category.description}
          </p>
        </div>
      </button>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
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
            Choose Your Subjects
          </h2>
          <p className="text-muted-foreground text-sm">
            Select topics from any education level
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3 mb-6">
        <Button
          variant={allSelected ? "default" : "outline"}
          onClick={onSelectAll}
          className="rounded-xl"
          size="sm"
        >
          <Shuffle className="w-4 h-4 mr-2" />
          {allSelected ? "All Selected" : "Select All"}
        </Button>
        <div className="flex-1" />
        <span className="flex items-center text-sm text-muted-foreground">
          {selectedCategories.length} / {categories.length} subjects
        </span>
      </div>

      {/* Education Levels */}
      <div className="space-y-4 mb-8">
        {educationLevels.map((level) => {
          const LevelIcon = levelIconMap[level.id]
          const levelCategories = getCategoriesByLevel(level.id)
          const selectedInLevel = levelCategories.filter(c => selectedCategories.includes(c.id)).length
          const isExpanded = expandedLevels.includes(level.id)
          const allLevelSelected = selectedInLevel === levelCategories.length

          return (
            <div key={level.id} className="border border-border rounded-2xl overflow-hidden bg-card">
              {/* Level Header */}
              <button
                onClick={() => toggleLevel(level.id)}
                className="w-full flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors"
              >
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center",
                  level.color
                )}>
                  <LevelIcon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-foreground">{level.name}</h3>
                  <p className="text-sm text-muted-foreground">{level.ageRange} - {level.description}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">
                    {selectedInLevel}/{levelCategories.length}
                  </span>
                  <div className={cn(
                    "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-transform",
                    isExpanded ? "rotate-90" : ""
                  )}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {/* Level Categories */}
              {isExpanded && (
                <div className="px-4 pb-4">
                  <div className="flex items-center justify-between mb-3 pt-2 border-t border-border">
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">
                      {levelCategories.length} subjects available
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        selectAllInLevel(level.id)
                      }}
                      className="text-xs h-7"
                    >
                      {allLevelSelected ? "Deselect All" : "Select All"}
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {levelCategories.map(renderCategoryCard)}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Continue Button */}
      <Button
        onClick={onStartQuiz}
        size="lg"
        className="w-full text-lg py-6 rounded-xl"
        disabled={selectedCategories.length === 0}
      >
        Continue ({selectedCategories.length} {selectedCategories.length === 1 ? 'subject' : 'subjects'})
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </div>
  )
}
