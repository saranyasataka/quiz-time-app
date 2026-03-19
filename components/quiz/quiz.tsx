"use client"

import { useState, useCallback, useMemo } from "react"
import { 
  quizQuestions, 
  generateMixedQuiz, 
  categories,
  difficulties,
  type Question,
  type Difficulty
} from "@/lib/quiz-data"
import { StartScreen } from "./start-screen"
import { CategorySelector } from "./category-selector"
import { DifficultySelector } from "./difficulty-selector"
import { QuizCard } from "./quiz-card"
import { ResultsScreen } from "./results-screen"
import { ProgressBar } from "./progress-bar"
import { AddQuizForm } from "./add-quiz-form"

type QuizState = "start" | "category" | "difficulty" | "playing" | "results" | "add"

export function Quiz() {
  const [state, setState] = useState<QuizState>("start")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedDifficulties, setSelectedDifficulties] = useState<Difficulty[]>([])
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([])
  const [customQuestions, setCustomQuestions] = useState<Question[]>([])

  // Combine default and custom questions
  const allQuestions = useMemo(() => {
    return [...quizQuestions, ...customQuestions]
  }, [customQuestions])

  const handleSelectCategory = useCallback(() => {
    setState("category")
  }, [])

  const handleQuickPlay = useCallback(() => {
    const questions = generateMixedQuiz(10, ["easy", "moderate", "hard"])
    setCurrentQuestions(questions)
    setState("playing")
    setCurrentQuestion(0)
    setScore(0)
  }, [])

  const handleAddQuestion = useCallback(() => {
    setState("add")
  }, [])

  const handleToggleCategory = useCallback((categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }, [])

  const handleSelectAll = useCallback(() => {
    if (selectedCategories.length === categories.length) {
      setSelectedCategories([])
    } else {
      setSelectedCategories(categories.map(c => c.id))
    }
  }, [selectedCategories.length])

  const handleContinueToDifficulty = useCallback(() => {
    setState("difficulty")
  }, [])

  const handleToggleDifficulty = useCallback((difficulty: Difficulty) => {
    setSelectedDifficulties(prev => 
      prev.includes(difficulty)
        ? prev.filter(d => d !== difficulty)
        : [...prev, difficulty]
    )
  }, [])

  const handleBackFromDifficulty = useCallback(() => {
    setState("category")
  }, [])

  const handleStartCategoryQuiz = useCallback(() => {
    // Map category IDs to names for filtering
    const categoryNames = selectedCategories.map(id => 
      categories.find(c => c.id === id)?.name || ""
    ).filter(Boolean)
    
    // Generate questions from all questions (including custom)
    const questions: Question[] = []
    categoryNames.forEach(category => {
      const categoryQuestions = allQuestions.filter(
        q => q.category.toLowerCase() === category.toLowerCase() &&
        selectedDifficulties.includes(q.difficulty)
      )
      // Shuffle and take up to 4 per category
      const shuffled = [...categoryQuestions].sort(() => Math.random() - 0.5)
      questions.push(...shuffled.slice(0, 4))
    })
    
    // Shuffle all questions
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5)
    
    setCurrentQuestions(shuffledQuestions)
    setState("playing")
    setCurrentQuestion(0)
    setScore(0)
  }, [selectedCategories, selectedDifficulties, allQuestions])

  const handleAnswer = useCallback((isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prev => prev + 1)
    }

    if (currentQuestion + 1 < currentQuestions.length) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      setState("results")
    }
  }, [currentQuestion, currentQuestions.length])

  const handleRestart = useCallback(() => {
    // Regenerate questions with same categories and difficulties
    if (selectedCategories.length > 0) {
      handleStartCategoryQuiz()
    } else {
      handleQuickPlay()
    }
  }, [selectedCategories, handleStartCategoryQuiz, handleQuickPlay])

  const handleNewQuiz = useCallback(() => {
    setState("category")
    setSelectedCategories([])
    setSelectedDifficulties([])
    setCurrentQuestion(0)
    setScore(0)
  }, [])

  const handleHome = useCallback(() => {
    setState("start")
    setSelectedCategories([])
    setSelectedDifficulties([])
    setCurrentQuestion(0)
    setScore(0)
  }, [])

  const handleAddNewQuestion = useCallback((question: Omit<Question, "id">) => {
    const newQuestion: Question = {
      ...question,
      id: allQuestions.length + 1,
    }
    setCustomQuestions(prev => [...prev, newQuestion])
  }, [allQuestions.length])

  const handleBackFromCategory = useCallback(() => {
    setState("start")
  }, [])

  const handleBackFromAdd = useCallback(() => {
    setState("start")
  }, [])

  // Get difficulty badge color
  const getDifficultyColor = (difficulty: Difficulty) => {
    switch (difficulty) {
      case "easy": return "bg-emerald-500/10 text-emerald-600"
      case "moderate": return "bg-amber-500/10 text-amber-600"
      case "hard": return "bg-red-500/10 text-red-600"
      default: return "bg-secondary text-secondary-foreground"
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Header for playing state */}
        {state === "playing" && currentQuestions.length > 0 && (
          <div className="max-w-2xl mx-auto mb-8">
            <ProgressBar current={currentQuestion + 1} total={currentQuestions.length} />
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-muted-foreground">
                Score: <span className="font-semibold text-foreground">{score}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 text-xs rounded-full capitalize ${getDifficultyColor(currentQuestions[currentQuestion]?.difficulty)}`}>
                  {currentQuestions[currentQuestion]?.difficulty}
                </span>
                <span className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">
                  {currentQuestions[currentQuestion]?.category}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="flex items-center justify-center min-h-[70vh]">
          {state === "start" && (
            <StartScreen
              totalQuestions={allQuestions.length}
              customQuestionCount={customQuestions.length}
              onSelectCategory={handleSelectCategory}
              onQuickPlay={handleQuickPlay}
              onAddQuestion={handleAddQuestion}
            />
          )}

          {state === "category" && (
            <CategorySelector
              selectedCategories={selectedCategories}
              onToggleCategory={handleToggleCategory}
              onStartQuiz={handleContinueToDifficulty}
              onSelectAll={handleSelectAll}
              onBack={handleBackFromCategory}
            />
          )}

          {state === "difficulty" && (
            <DifficultySelector
              selectedDifficulties={selectedDifficulties}
              onToggleDifficulty={handleToggleDifficulty}
              onContinue={handleStartCategoryQuiz}
              onBack={handleBackFromDifficulty}
            />
          )}

          {state === "add" && (
            <AddQuizForm
              onBack={handleBackFromAdd}
              onAddQuestion={handleAddNewQuestion}
            />
          )}

          {state === "playing" && currentQuestions.length > 0 && (
            <QuizCard
              key={currentQuestion}
              question={currentQuestions[currentQuestion]}
              currentIndex={currentQuestion}
              totalQuestions={currentQuestions.length}
              onAnswer={handleAnswer}
            />
          )}

          {state === "results" && (
            <ResultsScreen
              score={score}
              totalQuestions={currentQuestions.length}
              onRestart={handleRestart}
              onHome={handleHome}
              onNewQuiz={handleNewQuiz}
            />
          )}
        </div>
      </div>
    </main>
  )
}
