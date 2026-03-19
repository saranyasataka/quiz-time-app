export type Difficulty = "easy" | "moderate" | "hard"
export type EducationLevel = "primary" | "middle" | "high" | "college"

export interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  category: string
  difficulty: Difficulty
  explanation: string
}

export interface Category {
  id: string
  name: string
  icon: string
  color: string
  description: string
  level: EducationLevel
}

export interface DifficultyInfo {
  id: Difficulty
  name: string
  description: string
  color: string
  icon: string
}

export interface EducationLevelInfo {
  id: EducationLevel
  name: string
  ageRange: string
  description: string
  color: string
}

export const educationLevels: EducationLevelInfo[] = [
  { id: "primary", name: "Primary School", ageRange: "Ages 5-11", description: "Foundational learning for young minds", color: "bg-emerald-500" },
  { id: "middle", name: "Middle School", ageRange: "Ages 11-14", description: "Building on basics with more depth", color: "bg-blue-500" },
  { id: "high", name: "High School", ageRange: "Ages 14-18", description: "Advanced concepts and preparation", color: "bg-purple-500" },
  { id: "college", name: "College & Beyond", ageRange: "Ages 18+", description: "University level and professional skills", color: "bg-amber-500" },
]

export const difficulties: DifficultyInfo[] = [
  { id: "easy", name: "Easy", description: "Perfect for beginners", color: "bg-emerald-500", icon: "smile" },
  { id: "moderate", name: "Moderate", description: "A balanced challenge", color: "bg-amber-500", icon: "meh" },
  { id: "hard", name: "Hard", description: "For experts only", color: "bg-red-500", icon: "flame" },
]

export const categories: Category[] = [
  // Primary School Categories
  { id: "basic-math", name: "Basic Math", icon: "calculator", color: "bg-emerald-500", description: "Addition, subtraction, multiplication & division", level: "primary" },
  { id: "phonics", name: "Phonics & Reading", icon: "book-open", color: "bg-pink-500", description: "Letters, sounds & early reading skills", level: "primary" },
  { id: "basic-science", name: "Nature & Science", icon: "leaf", color: "bg-green-500", description: "Plants, animals & the natural world", level: "primary" },
  { id: "shapes-colors", name: "Shapes & Colors", icon: "shapes", color: "bg-violet-500", description: "Geometry basics and visual learning", level: "primary" },
  { id: "general-knowledge", name: "General Knowledge", icon: "lightbulb", color: "bg-yellow-500", description: "Fun facts about the world", level: "primary" },
  
  // Middle School Categories
  { id: "pre-algebra", name: "Pre-Algebra", icon: "variable", color: "bg-blue-500", description: "Variables, equations & early algebra", level: "middle" },
  { id: "life-science", name: "Life Science", icon: "dna", color: "bg-teal-500", description: "Biology, cells & living organisms", level: "middle" },
  { id: "earth-science", name: "Earth Science", icon: "globe", color: "bg-cyan-500", description: "Geology, weather & our planet", level: "middle" },
  { id: "world-history", name: "World History", icon: "landmark", color: "bg-amber-500", description: "Ancient civilizations & historical events", level: "middle" },
  { id: "grammar", name: "Grammar & Writing", icon: "pen", color: "bg-rose-500", description: "Sentence structure & composition", level: "middle" },
  { id: "geography", name: "Geography", icon: "map", color: "bg-indigo-500", description: "Countries, capitals & physical features", level: "middle" },
  
  // High School Categories
  { id: "algebra", name: "Algebra", icon: "function-square", color: "bg-purple-500", description: "Functions, polynomials & equations", level: "high" },
  { id: "geometry", name: "Geometry", icon: "triangle", color: "bg-blue-600", description: "Proofs, theorems & spatial reasoning", level: "high" },
  { id: "physics", name: "Physics", icon: "atom", color: "bg-orange-500", description: "Motion, forces & energy", level: "high" },
  { id: "chemistry", name: "Chemistry", icon: "flask-conical", color: "bg-emerald-600", description: "Elements, reactions & molecular structures", level: "high" },
  { id: "biology", name: "Biology", icon: "microscope", color: "bg-green-600", description: "Genetics, ecology & human body", level: "high" },
  { id: "literature", name: "Literature", icon: "book-marked", color: "bg-red-500", description: "Classic works & literary analysis", level: "high" },
  { id: "history", name: "Modern History", icon: "scroll", color: "bg-yellow-600", description: "World wars, revolutions & modern era", level: "high" },
  { id: "economics-basic", name: "Economics Basics", icon: "trending-up", color: "bg-lime-600", description: "Supply, demand & market principles", level: "high" },
  
  // College & Professional Categories
  { id: "calculus", name: "Calculus", icon: "sigma", color: "bg-violet-600", description: "Derivatives, integrals & limits", level: "college" },
  { id: "statistics", name: "Statistics", icon: "bar-chart", color: "bg-sky-500", description: "Probability, distributions & data analysis", level: "college" },
  { id: "programming", name: "Programming", icon: "code", color: "bg-cyan-600", description: "Coding concepts & languages", level: "college" },
  { id: "computer-science", name: "Computer Science", icon: "cpu", color: "bg-slate-600", description: "Algorithms, data structures & systems", level: "college" },
  { id: "psychology", name: "Psychology", icon: "brain", color: "bg-pink-600", description: "Human behavior & mental processes", level: "college" },
  { id: "business", name: "Business & Management", icon: "briefcase", color: "bg-amber-600", description: "Marketing, finance & strategy", level: "college" },
  { id: "philosophy", name: "Philosophy", icon: "glasses", color: "bg-stone-600", description: "Logic, ethics & critical thinking", level: "college" },
  { id: "advanced-science", name: "Advanced Science", icon: "flask-round", color: "bg-teal-600", description: "Research methods & scientific theories", level: "college" },
]

// Helper function to get categories by level
export const getCategoriesByLevel = (level: EducationLevel): Category[] => {
  return categories.filter(c => c.level === level)
}

export const quizQuestions: Question[] = [
  // ==================== PRIMARY SCHOOL ====================
  
  // Basic Math - Primary
  { id: 1, question: "What is 5 + 3?", options: ["6", "7", "8", "9"], correctAnswer: 2, category: "Basic Math", difficulty: "easy", explanation: "5 + 3 = 8. When adding, you can count up from 5: six, seven, eight. You can also use your fingers or draw objects to help count." },
  { id: 2, question: "What is 10 - 4?", options: ["4", "5", "6", "7"], correctAnswer: 2, category: "Basic Math", difficulty: "easy", explanation: "10 - 4 = 6. Subtraction means taking away. Start with 10 and take away 4: 10, 9, 8, 7, 6. The answer is 6." },
  { id: 3, question: "What is 3 x 4?", options: ["7", "10", "12", "14"], correctAnswer: 2, category: "Basic Math", difficulty: "easy", explanation: "3 x 4 = 12. Multiplication is repeated addition: 4 + 4 + 4 = 12, or 3 + 3 + 3 + 3 = 12. Think of 3 groups of 4 objects." },
  { id: 4, question: "Which number is the smallest: 15, 9, 23, 11?", options: ["15", "9", "23", "11"], correctAnswer: 1, category: "Basic Math", difficulty: "easy", explanation: "9 is the smallest number. When comparing numbers, look at how many tens and ones each has. 9 has no tens and 9 ones, while all others have at least one ten." },
  { id: 5, question: "What is 12 ÷ 3?", options: ["2", "3", "4", "5"], correctAnswer: 2, category: "Basic Math", difficulty: "moderate", explanation: "12 ÷ 3 = 4. Division means sharing equally. If you share 12 cookies among 3 friends, each gets 4 cookies. You can check: 4 x 3 = 12." },
  { id: 6, question: "What comes next: 2, 4, 6, 8, __?", options: ["9", "10", "11", "12"], correctAnswer: 1, category: "Basic Math", difficulty: "moderate", explanation: "The answer is 10. This is counting by 2s (skip counting). Each number is 2 more than the one before: 8 + 2 = 10." },
  
  // Phonics & Reading - Primary  
  { id: 7, question: "Which word rhymes with 'cat'?", options: ["Dog", "Hat", "Cup", "Red"], correctAnswer: 1, category: "Phonics & Reading", difficulty: "easy", explanation: "Hat rhymes with cat. Rhyming words have the same ending sound. Cat and hat both end with the '-at' sound." },
  { id: 8, question: "Which letter makes the 'sss' sound?", options: ["B", "S", "T", "M"], correctAnswer: 1, category: "Phonics & Reading", difficulty: "easy", explanation: "The letter S makes the 'sss' sound, like in 'snake', 'sun', and 'sit'. This is called the hissing sound." },
  { id: 9, question: "What is the first letter in the word 'APPLE'?", options: ["P", "L", "E", "A"], correctAnswer: 3, category: "Phonics & Reading", difficulty: "easy", explanation: "A is the first letter in APPLE. The first letter is the one at the beginning of the word. A-P-P-L-E." },
  { id: 10, question: "Which word means the opposite of 'big'?", options: ["Huge", "Large", "Small", "Tall"], correctAnswer: 2, category: "Phonics & Reading", difficulty: "moderate", explanation: "Small is the opposite of big. Opposite words (antonyms) have different meanings. Big means large in size, small means little in size." },
  
  // Nature & Science - Primary
  { id: 11, question: "How many legs does a spider have?", options: ["4", "6", "8", "10"], correctAnswer: 2, category: "Nature & Science", difficulty: "easy", explanation: "Spiders have 8 legs. This is how we know spiders are arachnids, not insects. Insects have 6 legs, but spiders have 8!" },
  { id: 12, question: "What do plants need to grow?", options: ["Only water", "Water, sunlight, and air", "Only sunlight", "Only soil"], correctAnswer: 1, category: "Nature & Science", difficulty: "easy", explanation: "Plants need water, sunlight, and air to grow. Water helps carry nutrients, sunlight provides energy for making food, and air gives them carbon dioxide." },
  { id: 13, question: "Which animal says 'moo'?", options: ["Pig", "Sheep", "Cow", "Horse"], correctAnswer: 2, category: "Nature & Science", difficulty: "easy", explanation: "A cow says 'moo'. Different animals make different sounds: pigs oink, sheep baa, and horses neigh." },
  { id: 14, question: "What season comes after winter?", options: ["Summer", "Fall", "Spring", "Winter"], correctAnswer: 2, category: "Nature & Science", difficulty: "easy", explanation: "Spring comes after winter. The seasons go in order: winter, spring, summer, fall (autumn), then back to winter again." },
  { id: 15, question: "Where does the sun rise?", options: ["North", "South", "East", "West"], correctAnswer: 2, category: "Nature & Science", difficulty: "moderate", explanation: "The sun rises in the East and sets in the West. This happens because Earth rotates from west to east." },
  
  // Shapes & Colors - Primary
  { id: 16, question: "How many sides does a triangle have?", options: ["2", "3", "4", "5"], correctAnswer: 1, category: "Shapes & Colors", difficulty: "easy", explanation: "A triangle has 3 sides. 'Tri' means three! Triangles also have 3 corners (vertices) and 3 angles." },
  { id: 17, question: "What color do you get when you mix red and yellow?", options: ["Purple", "Green", "Orange", "Brown"], correctAnswer: 2, category: "Shapes & Colors", difficulty: "easy", explanation: "Red + Yellow = Orange. These are primary colors (red, yellow, blue) that mix to make secondary colors (orange, green, purple)." },
  { id: 18, question: "Which shape has 4 equal sides?", options: ["Rectangle", "Triangle", "Square", "Circle"], correctAnswer: 2, category: "Shapes & Colors", difficulty: "easy", explanation: "A square has 4 equal sides. All sides are the same length, and all corners are right angles (90 degrees)." },
  { id: 19, question: "What color are most bananas when ripe?", options: ["Red", "Green", "Yellow", "Blue"], correctAnswer: 2, category: "Shapes & Colors", difficulty: "easy", explanation: "Ripe bananas are yellow. They start green and turn yellow as they ripen. Very ripe bananas get brown spots." },
  
  // General Knowledge - Primary
  { id: 20, question: "How many days are in a week?", options: ["5", "6", "7", "8"], correctAnswer: 2, category: "General Knowledge", difficulty: "easy", explanation: "There are 7 days in a week: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, and Saturday." },
  { id: 21, question: "What is the name of our planet?", options: ["Mars", "Jupiter", "Earth", "Venus"], correctAnswer: 2, category: "General Knowledge", difficulty: "easy", explanation: "Our planet is called Earth. It's the third planet from the Sun and the only planet we know that has life." },
  { id: 22, question: "How many months are in a year?", options: ["10", "11", "12", "13"], correctAnswer: 2, category: "General Knowledge", difficulty: "easy", explanation: "There are 12 months in a year: January, February, March, April, May, June, July, August, September, October, November, December." },
  
  // ==================== MIDDLE SCHOOL ====================
  
  // Pre-Algebra - Middle
  { id: 23, question: "If x + 5 = 12, what is x?", options: ["5", "6", "7", "8"], correctAnswer: 2, category: "Pre-Algebra", difficulty: "easy", explanation: "x = 7. To find x, subtract 5 from both sides: x + 5 - 5 = 12 - 5, so x = 7. Check: 7 + 5 = 12." },
  { id: 24, question: "What is the value of 3²?", options: ["6", "9", "12", "27"], correctAnswer: 1, category: "Pre-Algebra", difficulty: "easy", explanation: "3² = 3 x 3 = 9. The small 2 (exponent) means multiply 3 by itself. This is called 'three squared'." },
  { id: 25, question: "Simplify: 2(x + 3)", options: ["2x + 3", "2x + 6", "x + 6", "2x + 5"], correctAnswer: 1, category: "Pre-Algebra", difficulty: "moderate", explanation: "2(x + 3) = 2x + 6. Use the distributive property: multiply 2 by both terms inside the parentheses: 2×x + 2×3 = 2x + 6." },
  { id: 26, question: "What is 25% of 80?", options: ["15", "20", "25", "30"], correctAnswer: 1, category: "Pre-Algebra", difficulty: "moderate", explanation: "25% of 80 = 20. 25% means 25/100 or 1/4. So 80 ÷ 4 = 20. You can also calculate 0.25 × 80 = 20." },
  { id: 27, question: "What is the absolute value of -8?", options: ["-8", "0", "8", "16"], correctAnswer: 2, category: "Pre-Algebra", difficulty: "moderate", explanation: "The absolute value of -8 is 8. Absolute value is the distance from zero on a number line, which is always positive. |-8| = 8." },
  { id: 28, question: "Solve: 3x - 7 = 14", options: ["x = 3", "x = 5", "x = 7", "x = 9"], correctAnswer: 2, category: "Pre-Algebra", difficulty: "hard", explanation: "x = 7. First, add 7 to both sides: 3x = 21. Then divide both sides by 3: x = 7. Check: 3(7) - 7 = 21 - 7 = 14." },
  
  // Life Science - Middle
  { id: 29, question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Cell membrane"], correctAnswer: 1, category: "Life Science", difficulty: "easy", explanation: "Mitochondria are called the 'powerhouse of the cell' because they produce ATP (energy) through cellular respiration. They convert nutrients into usable energy." },
  { id: 30, question: "What carries genetic information in cells?", options: ["RNA only", "Proteins", "DNA", "Cell wall"], correctAnswer: 2, category: "Life Science", difficulty: "easy", explanation: "DNA (Deoxyribonucleic Acid) carries genetic information. It contains the instructions for making proteins and determines inherited traits like eye color and height." },
  { id: 31, question: "What process do plants use to make food?", options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"], correctAnswer: 1, category: "Life Science", difficulty: "easy", explanation: "Photosynthesis is how plants make food. They use sunlight, water, and carbon dioxide to produce glucose (sugar) and oxygen. The equation: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂." },
  { id: 32, question: "Which organ system includes the heart?", options: ["Digestive", "Respiratory", "Circulatory", "Nervous"], correctAnswer: 2, category: "Life Science", difficulty: "moderate", explanation: "The heart is part of the circulatory system, which pumps blood throughout your body. It includes the heart, blood vessels (arteries, veins, capillaries), and blood." },
  { id: 33, question: "What is the basic unit of life?", options: ["Atom", "Molecule", "Cell", "Tissue"], correctAnswer: 2, category: "Life Science", difficulty: "moderate", explanation: "The cell is the basic unit of life. All living things are made of one or more cells. Cells perform life functions like obtaining energy, growing, and reproducing." },
  
  // Earth Science - Middle
  { id: 34, question: "What are the three types of rocks?", options: ["Hard, soft, medium", "Igneous, sedimentary, metamorphic", "Big, small, tiny", "Hot, cold, warm"], correctAnswer: 1, category: "Earth Science", difficulty: "easy", explanation: "The three rock types are igneous (formed from cooled magma), sedimentary (formed from compressed layers), and metamorphic (formed when existing rocks change due to heat/pressure)." },
  { id: 35, question: "What causes Earth's seasons?", options: ["Distance from sun", "Earth's tilted axis", "The moon", "Ocean currents"], correctAnswer: 1, category: "Earth Science", difficulty: "moderate", explanation: "Earth's tilted axis (23.5°) causes seasons. As Earth orbits the sun, different parts receive more direct sunlight at different times, creating summer and winter." },
  { id: 36, question: "What layer of Earth do we live on?", options: ["Core", "Mantle", "Crust", "Outer core"], correctAnswer: 2, category: "Earth Science", difficulty: "easy", explanation: "We live on Earth's crust, the thin outer layer. It's like the skin of an apple compared to the whole apple. The crust is divided into tectonic plates." },
  { id: 37, question: "What causes earthquakes?", options: ["Wind", "Rain", "Tectonic plate movement", "Volcanoes only"], correctAnswer: 2, category: "Earth Science", difficulty: "moderate", explanation: "Earthquakes are caused by tectonic plate movement. When plates push, pull, or slide past each other, stress builds up and releases suddenly as seismic waves." },
  
  // World History - Middle
  { id: 38, question: "Who built the pyramids of Giza?", options: ["Romans", "Greeks", "Ancient Egyptians", "Persians"], correctAnswer: 2, category: "World History", difficulty: "easy", explanation: "Ancient Egyptians built the pyramids of Giza around 2560 BCE as tombs for pharaohs. The Great Pyramid was the tallest structure in the world for over 3,800 years." },
  { id: 39, question: "What ancient civilization invented democracy?", options: ["Rome", "Egypt", "Greece", "China"], correctAnswer: 2, category: "World History", difficulty: "moderate", explanation: "Ancient Greece invented democracy in Athens around 500 BCE. 'Democracy' comes from Greek words meaning 'rule by the people'. Citizens could vote on laws directly." },
  { id: 40, question: "What was the Silk Road?", options: ["A type of fabric", "An ancient trade route", "A Roman highway", "A river in China"], correctAnswer: 1, category: "World History", difficulty: "moderate", explanation: "The Silk Road was an ancient network of trade routes connecting East and West, from China to the Mediterranean. It was named after the silk trade but carried many goods and ideas." },
  
  // Grammar & Writing - Middle
  { id: 41, question: "What is a noun?", options: ["An action word", "A describing word", "A person, place, or thing", "A connecting word"], correctAnswer: 2, category: "Grammar & Writing", difficulty: "easy", explanation: "A noun is a word that represents a person (teacher), place (school), thing (book), or idea (freedom). Nouns are the naming words in a sentence." },
  { id: 42, question: "Which sentence is correct?", options: ["Him and me went.", "He and I went.", "Me and him went.", "I and he went."], correctAnswer: 1, category: "Grammar & Writing", difficulty: "moderate", explanation: "'He and I went' is correct. Use subject pronouns (I, he, she, we, they) when the pronoun is doing the action. 'He went' and 'I went' are both correct, so 'He and I went' is correct." },
  { id: 43, question: "What type of sentence asks a question?", options: ["Declarative", "Imperative", "Exclamatory", "Interrogative"], correctAnswer: 3, category: "Grammar & Writing", difficulty: "moderate", explanation: "An interrogative sentence asks a question and ends with a question mark. Declarative states a fact, imperative gives a command, and exclamatory shows strong emotion." },
  { id: 44, question: "What is the past tense of 'run'?", options: ["Runned", "Running", "Ran", "Runs"], correctAnswer: 2, category: "Grammar & Writing", difficulty: "easy", explanation: "'Ran' is the past tense of 'run'. It's an irregular verb - it doesn't follow the usual '-ed' pattern. Other irregular verbs: go→went, eat→ate, see→saw." },
  
  // Geography - Middle
  { id: 45, question: "What is the largest continent?", options: ["Africa", "North America", "Europe", "Asia"], correctAnswer: 3, category: "Geography", difficulty: "easy", explanation: "Asia is the largest continent, covering about 30% of Earth's land area. It's home to over 4.7 billion people - about 60% of the world's population." },
  { id: 46, question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Mississippi", "Yangtze"], correctAnswer: 1, category: "Geography", difficulty: "moderate", explanation: "The Nile River is the longest at about 6,650 km (4,130 miles), flowing through 11 African countries. The Amazon is a close second and carries more water." },
  { id: 47, question: "What is the capital of Japan?", options: ["Seoul", "Beijing", "Tokyo", "Bangkok"], correctAnswer: 2, category: "Geography", difficulty: "easy", explanation: "Tokyo is the capital of Japan and one of the world's largest cities. It has a population of about 14 million in the city proper and 37 million in the greater metropolitan area." },
  { id: 48, question: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correctAnswer: 3, category: "Geography", difficulty: "easy", explanation: "The Pacific Ocean is the largest ocean, covering about 165 million square kilometers - more than all the land on Earth combined. It's also the deepest ocean." },
  
  // ==================== HIGH SCHOOL ====================
  
  // Algebra - High School
  { id: 49, question: "Factor: x² - 9", options: ["(x-3)²", "(x+3)²", "(x-3)(x+3)", "(x-9)(x+1)"], correctAnswer: 2, category: "Algebra", difficulty: "moderate", explanation: "x² - 9 = (x-3)(x+3). This is a 'difference of squares' pattern: a² - b² = (a-b)(a+b). Here, x² - 9 = x² - 3² = (x-3)(x+3)." },
  { id: 50, question: "What is the slope of y = 3x + 5?", options: ["3", "5", "8", "15"], correctAnswer: 0, category: "Algebra", difficulty: "easy", explanation: "The slope is 3. In y = mx + b form, m is the slope and b is the y-intercept. Here m = 3, so the line rises 3 units for every 1 unit it moves right." },
  { id: 51, question: "Solve: x² = 49", options: ["x = 7", "x = -7", "x = ±7", "x = 49"], correctAnswer: 2, category: "Algebra", difficulty: "moderate", explanation: "x = ±7 (both 7 and -7). When solving x² = 49, we take the square root of both sides: x = ±√49 = ±7. Both 7² and (-7)² equal 49." },
  { id: 52, question: "Simplify: (x³)(x⁴)", options: ["x⁷", "x¹²", "x⁴³", "2x⁷"], correctAnswer: 0, category: "Algebra", difficulty: "moderate", explanation: "(x³)(x⁴) = x⁷. When multiplying powers with the same base, add the exponents: 3 + 4 = 7. This is the product rule of exponents." },
  
  // Geometry - High School
  { id: 53, question: "What is the Pythagorean theorem?", options: ["a + b = c", "a² + b² = c²", "a × b = c", "a² - b² = c²"], correctAnswer: 1, category: "Geometry", difficulty: "easy", explanation: "The Pythagorean theorem is a² + b² = c², where a and b are the legs of a right triangle and c is the hypotenuse (longest side opposite the right angle)." },
  { id: 54, question: "What is the area formula for a circle?", options: ["πd", "2πr", "πr²", "4πr²"], correctAnswer: 2, category: "Geometry", difficulty: "easy", explanation: "The area of a circle is πr². π (pi) ≈ 3.14159, and r is the radius. For example, a circle with radius 5 has area π(5)² = 25π ≈ 78.54 square units." },
  { id: 55, question: "How many degrees are in a straight angle?", options: ["90°", "180°", "270°", "360°"], correctAnswer: 1, category: "Geometry", difficulty: "easy", explanation: "A straight angle is 180°. It forms a straight line. A right angle is 90°, and a full rotation (circle) is 360°." },
  { id: 56, question: "What is the sum of interior angles in a pentagon?", options: ["360°", "450°", "540°", "720°"], correctAnswer: 2, category: "Geometry", difficulty: "hard", explanation: "A pentagon has interior angles summing to 540°. The formula is (n-2) × 180° where n = number of sides. For a pentagon: (5-2) × 180° = 3 × 180° = 540°." },
  
  // Physics - High School
  { id: 57, question: "What is Newton's First Law also called?", options: ["Law of Acceleration", "Law of Inertia", "Law of Reaction", "Law of Gravity"], correctAnswer: 1, category: "Physics", difficulty: "easy", explanation: "Newton's First Law is the Law of Inertia: an object at rest stays at rest, and an object in motion stays in motion unless acted upon by an external force. Inertia is resistance to change in motion." },
  { id: 58, question: "What is the SI unit of force?", options: ["Joule", "Watt", "Newton", "Pascal"], correctAnswer: 2, category: "Physics", difficulty: "easy", explanation: "The Newton (N) is the SI unit of force. One Newton is the force needed to accelerate 1 kg of mass at 1 m/s². It's named after Sir Isaac Newton." },
  { id: 59, question: "What is the formula for kinetic energy?", options: ["mgh", "½mv²", "Fd", "ma"], correctAnswer: 1, category: "Physics", difficulty: "moderate", explanation: "Kinetic energy = ½mv², where m is mass and v is velocity. It's the energy an object has due to its motion. Double the velocity, quadruple the kinetic energy." },
  { id: 60, question: "What is the speed of light in a vacuum?", options: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10¹² m/s"], correctAnswer: 1, category: "Physics", difficulty: "moderate", explanation: "The speed of light in vacuum is approximately 3 × 10⁸ m/s (or about 300,000 km/s). It's the fastest speed possible and is constant regardless of the observer's motion." },
  
  // Chemistry - High School
  { id: 61, question: "What is the atomic number of Carbon?", options: ["4", "6", "8", "12"], correctAnswer: 1, category: "Chemistry", difficulty: "easy", explanation: "Carbon's atomic number is 6, meaning it has 6 protons. The atomic number defines the element. Carbon-12 (most common isotope) also has 6 neutrons, giving atomic mass 12." },
  { id: 62, question: "What is H₂O commonly known as?", options: ["Hydrogen peroxide", "Water", "Hydrochloric acid", "Ammonia"], correctAnswer: 1, category: "Chemistry", difficulty: "easy", explanation: "H₂O is water. The formula shows 2 hydrogen atoms bonded to 1 oxygen atom. H₂O₂ is hydrogen peroxide, HCl is hydrochloric acid, and NH₃ is ammonia." },
  { id: 63, question: "What type of bond shares electrons?", options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"], correctAnswer: 1, category: "Chemistry", difficulty: "moderate", explanation: "A covalent bond shares electrons between atoms. In contrast, ionic bonds transfer electrons, metallic bonds have a 'sea' of shared electrons, and hydrogen bonds are weak attractions." },
  { id: 64, question: "What is the pH of a neutral solution?", options: ["0", "5", "7", "14"], correctAnswer: 2, category: "Chemistry", difficulty: "moderate", explanation: "A neutral solution has pH 7. The pH scale runs from 0-14. Below 7 is acidic (like lemon juice), above 7 is basic/alkaline (like soap). Pure water has pH 7." },
  
  // Biology - High School
  { id: 65, question: "What is the process of cell division called?", options: ["Photosynthesis", "Mitosis", "Respiration", "Osmosis"], correctAnswer: 1, category: "Biology", difficulty: "easy", explanation: "Mitosis is cell division that produces two identical daughter cells. It's how organisms grow and repair tissue. Meiosis is different - it produces sex cells with half the chromosomes." },
  { id: 66, question: "What carries oxygen in blood?", options: ["White blood cells", "Platelets", "Plasma", "Red blood cells"], correctAnswer: 3, category: "Biology", difficulty: "easy", explanation: "Red blood cells (erythrocytes) carry oxygen using hemoglobin, an iron-containing protein. They're shaped like discs to maximize surface area for oxygen exchange." },
  { id: 67, question: "What is the double helix structure?", options: ["Protein shape", "DNA shape", "Cell membrane", "RNA shape"], correctAnswer: 1, category: "Biology", difficulty: "moderate", explanation: "DNA has a double helix structure - two strands twisted around each other like a spiral staircase. This was discovered by Watson and Crick in 1953." },
  { id: 68, question: "What organelle controls the cell?", options: ["Ribosome", "Nucleus", "Mitochondria", "Golgi body"], correctAnswer: 1, category: "Biology", difficulty: "easy", explanation: "The nucleus is the control center of the cell. It contains DNA (genetic instructions) and controls cell activities like growth, metabolism, and reproduction." },
  
  // Literature - High School
  { id: 69, question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"], correctAnswer: 2, category: "Literature", difficulty: "easy", explanation: "William Shakespeare wrote Romeo and Juliet around 1594-1596. It's a tragedy about two young lovers from feuding families in Verona, Italy." },
  { id: 70, question: "What is a metaphor?", options: ["Comparison using 'like' or 'as'", "Direct comparison without 'like' or 'as'", "Exaggeration", "Giving human traits to objects"], correctAnswer: 1, category: "Literature", difficulty: "moderate", explanation: "A metaphor is a direct comparison without using 'like' or 'as'. Example: 'Life is a journey.' A simile uses 'like' or 'as': 'Life is like a journey.'" },
  { id: 71, question: "What is the main character in a story called?", options: ["Antagonist", "Protagonist", "Narrator", "Foil"], correctAnswer: 1, category: "Literature", difficulty: "easy", explanation: "The protagonist is the main character. The antagonist opposes them. The narrator tells the story. A foil is a character who contrasts with another to highlight certain qualities." },
  
  // Modern History - High School
  { id: 72, question: "When did World War II end?", options: ["1943", "1944", "1945", "1946"], correctAnswer: 2, category: "Modern History", difficulty: "easy", explanation: "World War II ended in 1945. Germany surrendered in May (V-E Day), and Japan surrendered in September after atomic bombs were dropped on Hiroshima and Nagasaki." },
  { id: 73, question: "Who was the first person to walk on the moon?", options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"], correctAnswer: 1, category: "Modern History", difficulty: "easy", explanation: "Neil Armstrong was first to walk on the moon on July 20, 1969, during Apollo 11. His famous words: 'That's one small step for man, one giant leap for mankind.'" },
  { id: 74, question: "When did the Berlin Wall fall?", options: ["1987", "1989", "1991", "1993"], correctAnswer: 1, category: "Modern History", difficulty: "moderate", explanation: "The Berlin Wall fell on November 9, 1989. It had divided East and West Berlin since 1961. Its fall symbolized the end of the Cold War and led to German reunification in 1990." },
  
  // Economics Basics - High School
  { id: 75, question: "What happens when demand exceeds supply?", options: ["Prices fall", "Prices rise", "Prices stay same", "Supply increases automatically"], correctAnswer: 1, category: "Economics Basics", difficulty: "easy", explanation: "When demand exceeds supply, prices rise. This is basic supply and demand: when more people want something than is available, sellers can charge more. This encourages more production." },
  { id: 76, question: "What is GDP?", options: ["Government Domestic Product", "Gross Domestic Product", "General Development Plan", "Global Dollar Price"], correctAnswer: 1, category: "Economics Basics", difficulty: "moderate", explanation: "GDP stands for Gross Domestic Product - the total value of all goods and services produced in a country during a specific time period. It's a key measure of economic health." },
  { id: 77, question: "What is inflation?", options: ["Decrease in prices", "Increase in general price levels", "Economic growth", "Interest rate"], correctAnswer: 1, category: "Economics Basics", difficulty: "moderate", explanation: "Inflation is the general increase in prices over time, reducing purchasing power. If inflation is 3%, something that cost $100 last year costs $103 now. Central banks try to keep it stable." },
  
  // ==================== COLLEGE & PROFESSIONAL ====================
  
  // Calculus - College
  { id: 78, question: "What is the derivative of x³?", options: ["x²", "3x²", "3x³", "x⁴"], correctAnswer: 1, category: "Calculus", difficulty: "easy", explanation: "The derivative of x³ is 3x². Use the power rule: bring down the exponent and reduce it by 1. d/dx(xⁿ) = nxⁿ⁻¹. So d/dx(x³) = 3x³⁻¹ = 3x²." },
  { id: 79, question: "What is the integral of 2x?", options: ["x²", "x² + C", "2x²", "2x² + C"], correctAnswer: 1, category: "Calculus", difficulty: "easy", explanation: "∫2x dx = x² + C. Integration is the reverse of differentiation. Add 1 to the power and divide by the new power. Don't forget the constant C for indefinite integrals." },
  { id: 80, question: "What is lim(x→0) sin(x)/x?", options: ["0", "1", "∞", "Undefined"], correctAnswer: 1, category: "Calculus", difficulty: "hard", explanation: "lim(x→0) sin(x)/x = 1. This is a famous limit, provable using L'Hôpital's Rule or the squeeze theorem. It's fundamental in calculus and appears in many applications." },
  { id: 81, question: "What does the second derivative tell us?", options: ["Slope", "Area", "Concavity", "Volume"], correctAnswer: 2, category: "Calculus", difficulty: "moderate", explanation: "The second derivative tells us about concavity (how the curve bends). If f''(x) > 0, the function is concave up (smile shape). If f''(x) < 0, it's concave down (frown shape)." },
  
  // Statistics - College
  { id: 82, question: "What is the mean of 2, 4, 6, 8, 10?", options: ["4", "5", "6", "8"], correctAnswer: 2, category: "Statistics", difficulty: "easy", explanation: "Mean = sum ÷ count = (2+4+6+8+10)/5 = 30/5 = 6. The mean is the average. It's calculated by adding all values and dividing by the number of values." },
  { id: 83, question: "What is standard deviation a measure of?", options: ["Central tendency", "Spread/dispersion", "Sample size", "Probability"], correctAnswer: 1, category: "Statistics", difficulty: "moderate", explanation: "Standard deviation measures spread or dispersion - how far data points are from the mean. A high standard deviation means data is spread out; low means data is clustered near the mean." },
  { id: 84, question: "What is a p-value?", options: ["Probability of the hypothesis being true", "Probability of getting results as extreme, if null hypothesis is true", "Population parameter", "Percentage value"], correctAnswer: 1, category: "Statistics", difficulty: "hard", explanation: "A p-value is the probability of obtaining results at least as extreme as observed, assuming the null hypothesis is true. If p < 0.05, we typically reject the null hypothesis." },
  { id: 85, question: "What is the median?", options: ["Most common value", "Average value", "Middle value when ordered", "Range of values"], correctAnswer: 2, category: "Statistics", difficulty: "easy", explanation: "The median is the middle value when data is ordered. For odd counts, it's the center number. For even counts, it's the average of the two middle numbers. It's less affected by outliers than the mean." },
  
  // Programming - College
  { id: 86, question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink Text Management Language"], correctAnswer: 0, category: "Programming", difficulty: "easy", explanation: "HTML stands for Hyper Text Markup Language. It's the standard markup language for creating web pages. 'Hyper Text' refers to links between pages, 'Markup Language' means it uses tags to structure content." },
  { id: 87, question: "What is the time complexity of binary search?", options: ["O(n)", "O(n²)", "O(log n)", "O(1)"], correctAnswer: 2, category: "Programming", difficulty: "moderate", explanation: "Binary search has O(log n) time complexity because it halves the search space with each comparison. For 1,000 items, it needs at most ~10 comparisons (log₂1000 ≈ 10)." },
  { id: 88, question: "Which data structure uses LIFO?", options: ["Queue", "Stack", "Array", "Linked List"], correctAnswer: 1, category: "Programming", difficulty: "moderate", explanation: "A Stack uses LIFO (Last In First Out) - like a stack of plates. The last item added is the first removed. Think of 'undo': the last action is undone first." },
  { id: 89, question: "What does API stand for?", options: ["Application Programming Interface", "Automated Program Integration", "Application Process Interface", "Advanced Programming Integration"], correctAnswer: 0, category: "Programming", difficulty: "easy", explanation: "API stands for Application Programming Interface. It's a set of rules that allows different software applications to communicate. APIs define how components should interact." },
  
  // Computer Science - College
  { id: 90, question: "What is Big O notation used for?", options: ["Memory allocation", "Describing algorithm efficiency", "Error handling", "Code formatting"], correctAnswer: 1, category: "Computer Science", difficulty: "moderate", explanation: "Big O notation describes algorithm efficiency - how runtime or space grows as input size increases. O(n) means linear growth, O(n²) means quadratic, O(log n) means logarithmic." },
  { id: 91, question: "What is recursion?", options: ["Looping through arrays", "A function calling itself", "Error handling", "Memory management"], correctAnswer: 1, category: "Computer Science", difficulty: "moderate", explanation: "Recursion is when a function calls itself to solve a problem by breaking it into smaller sub-problems. It needs a base case to stop. Example: factorial(n) = n × factorial(n-1)." },
  { id: 92, question: "What layer of OSI handles routing?", options: ["Data Link", "Transport", "Network", "Session"], correctAnswer: 2, category: "Computer Science", difficulty: "hard", explanation: "The Network Layer (Layer 3) handles routing - finding the best path for data packets. It uses IP addresses. Data Link handles physical addressing (MAC), Transport handles end-to-end communication (TCP/UDP)." },
  
  // Psychology - College
  { id: 93, question: "Who is considered the father of psychoanalysis?", options: ["B.F. Skinner", "Sigmund Freud", "Carl Jung", "Ivan Pavlov"], correctAnswer: 1, category: "Psychology", difficulty: "easy", explanation: "Sigmund Freud is the father of psychoanalysis. He developed theories about the unconscious mind, dreams, and the id/ego/superego model. His work influenced psychology, therapy, and culture." },
  { id: 94, question: "What is classical conditioning?", options: ["Learning through rewards", "Learning through association", "Learning through observation", "Learning through trial and error"], correctAnswer: 1, category: "Psychology", difficulty: "moderate", explanation: "Classical conditioning is learning through association, discovered by Pavlov. A neutral stimulus (bell) paired with a natural stimulus (food) eventually triggers a conditioned response (salivation to bell alone)." },
  { id: 95, question: "What is cognitive dissonance?", options: ["Memory loss", "Mental disorder", "Discomfort from conflicting beliefs", "Learning disability"], correctAnswer: 2, category: "Psychology", difficulty: "moderate", explanation: "Cognitive dissonance is the mental discomfort when holding conflicting beliefs or when behavior contradicts beliefs. People typically change their beliefs or behavior to reduce this discomfort." },
  
  // Business & Management - College
  { id: 96, question: "What are the 4 P's of marketing?", options: ["Price, Product, Place, Promotion", "People, Process, Physical, Profit", "Plan, Produce, Promote, Price", "Product, Profit, Place, People"], correctAnswer: 0, category: "Business & Management", difficulty: "easy", explanation: "The 4 P's are Product (what you sell), Price (cost to customer), Place (where you sell), and Promotion (how you advertise). This marketing mix framework helps plan marketing strategy." },
  { id: 97, question: "What is ROI?", options: ["Rate of Interest", "Return on Investment", "Revenue Over Income", "Risk of Inflation"], correctAnswer: 1, category: "Business & Management", difficulty: "easy", explanation: "ROI means Return on Investment - a measure of profitability. It's calculated as (Gain - Cost) / Cost × 100%. An ROI of 20% means you earned 20% profit on your investment." },
  { id: 98, question: "What is SWOT analysis?", options: ["Sales, Work, Operations, Time", "Strengths, Weaknesses, Opportunities, Threats", "Strategy, Workforce, Output, Trends", "Structure, Workflow, Organization, Technology"], correctAnswer: 1, category: "Business & Management", difficulty: "moderate", explanation: "SWOT stands for Strengths, Weaknesses (internal factors), Opportunities, Threats (external factors). It's a strategic planning tool to evaluate a business or project's position." },
  
  // Philosophy - College
  { id: 99, question: "What does 'cogito ergo sum' mean?", options: ["Knowledge is power", "I think, therefore I am", "The ends justify the means", "Know thyself"], correctAnswer: 1, category: "Philosophy", difficulty: "moderate", explanation: "'Cogito ergo sum' is Latin for 'I think, therefore I am.' Philosopher René Descartes used this as a foundational certainty - even if everything else can be doubted, the act of doubting proves you exist." },
  { id: 100, question: "What is ethics the study of?", options: ["Logic and reasoning", "Beauty and art", "Right and wrong conduct", "Knowledge and truth"], correctAnswer: 2, category: "Philosophy", difficulty: "easy", explanation: "Ethics is the study of right and wrong conduct - moral principles that govern behavior. It asks questions like 'What should I do?' and 'What makes an action good or bad?'" },
  { id: 101, question: "Who wrote 'The Republic'?", options: ["Aristotle", "Socrates", "Plato", "Epicurus"], correctAnswer: 2, category: "Philosophy", difficulty: "moderate", explanation: "Plato wrote 'The Republic' around 375 BCE. It explores justice, the ideal state, and includes the famous Allegory of the Cave. Socrates is the main character (Plato's teacher), but Plato wrote it." },
  
  // Advanced Science - College
  { id: 102, question: "What is the scientific method's first step?", options: ["Hypothesis", "Observation/Question", "Experiment", "Conclusion"], correctAnswer: 1, category: "Advanced Science", difficulty: "easy", explanation: "The scientific method starts with observation or a question. Then: form hypothesis, experiment, analyze data, draw conclusions, communicate results. Observation sparks the inquiry that drives science." },
  { id: 103, question: "What is a control group?", options: ["Group that receives treatment", "Group used for comparison with no treatment", "Group that designs the experiment", "Group that analyzes results"], correctAnswer: 1, category: "Advanced Science", difficulty: "moderate", explanation: "A control group receives no treatment or a placebo, serving as a baseline for comparison. By comparing the experimental group (with treatment) to the control, we can determine if the treatment had an effect." },
  { id: 104, question: "What is peer review?", options: ["Students grading each other", "Experts evaluating research before publication", "Public opinion polls", "Government review of research"], correctAnswer: 1, category: "Advanced Science", difficulty: "moderate", explanation: "Peer review is when experts in a field evaluate research before publication. They check methodology, validity, and significance. It's crucial for maintaining scientific quality and credibility." },
]

// Generate a mixed quiz from selected categories and difficulties
export const generateMixedQuiz = (
  count: number = 10,
  difficulties: Difficulty[] = ["easy", "moderate", "hard"],
  categoryIds?: string[],
  customQuestions: Question[] = []
): Question[] => {
  const allQuestions = [...quizQuestions, ...customQuestions]
  
  let filteredQuestions = allQuestions.filter(q => 
    difficulties.includes(q.difficulty)
  )
  
  if (categoryIds && categoryIds.length > 0) {
    const categoryNames = categoryIds.map(id => 
      categories.find(c => c.id === id)?.name || ""
    ).filter(Boolean)
    
    filteredQuestions = filteredQuestions.filter(q =>
      categoryNames.some(name => 
        q.category.toLowerCase() === name.toLowerCase()
      )
    )
  }
  
  // Shuffle and take requested count
  const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
