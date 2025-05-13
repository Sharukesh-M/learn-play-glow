import { Quiz, QuestionType, Question, LeaderboardEntry } from "../types/quiz";

// Updated categories to include entrance exam subjects
export const CATEGORIES = [
  "Science", "Math", "History", "Geography", "Language", 
  "Technology", "Sports", "Entertainment", "Art", "Literature",
  "Physics", "Chemistry", "Biology", "Computer Science", "Economics",
  "General Knowledge", "Aptitude", "Reasoning", "English", "Current Affairs"
];

// Updated tags to include exam types
export const TAGS = [
  "K-12", "College", "Professional", "Trivia", "Fun",
  "Science", "Math", "History", "Geography", "Language",
  "Technology", "Sports", "Entertainment", "Art", "Literature",
  "UPSC", "NEET", "JEE", "CAT", "IELTS", "GATE", "GRE", "GMAT"
];

// Updated with exam subcategories
export const EXAM_QUESTION_BANKS = {
  "UPSC": ["History", "Geography", "Economics", "Current Affairs", "General Knowledge"],
  "NEET": ["Biology", "Physics", "Chemistry"],
  "JEE": ["Physics", "Chemistry", "Math"],
  "CAT": ["Quantitative Aptitude", "Verbal Ability", "Logical Reasoning", "Data Interpretation"],
  "IELTS": ["Reading", "Writing", "Speaking", "Listening"],
  "GATE": ["Computer Science", "Electronics", "Mechanical", "Civil", "Electrical"]
};

// Extended subject question banks with detailed questions and explanations
const SUBJECT_QUESTIONS = {
  "Physics": [
    {
      question: "What is Newton's First Law of Motion?",
      options: [
        "An object at rest stays at rest, and an object in motion stays in motion unless acted upon by an external force.",
        "Force equals mass times acceleration.",
        "For every action, there is an equal and opposite reaction.",
        "Energy cannot be created or destroyed, only transformed."
      ],
      correctOption: 0,
      explanation: "Newton's First Law, also known as the Law of Inertia, states that an object will remain at rest or in uniform motion in a straight line unless acted upon by an external force. This demonstrates the concept of inertia - objects resist changes to their state of motion."
    },
    {
      question: "What is the formula for calculating electric potential energy?",
      options: [
        "E = mc²",
        "E = kq₁q₂/r",
        "E = ½mv²",
        "E = mgh"
      ],
      correctOption: 1,
      explanation: "The electric potential energy between two point charges is calculated using E = kq₁q₂/r, where k is Coulomb's constant, q₁ and q₂ are the charges, and r is the distance between them."
    },
    {
      question: "Which of the following is NOT a vector quantity?",
      options: [
        "Velocity",
        "Acceleration",
        "Mass",
        "Force"
      ],
      correctOption: 2,
      explanation: "Mass is a scalar quantity as it only has magnitude but no direction. Velocity, acceleration, and force are all vector quantities as they have both magnitude and direction."
    },
    {
      question: "What does the Doppler effect describe?",
      options: [
        "The change in wavelength of light due to gravity",
        "The observed change in frequency of a wave when the source and observer are in relative motion",
        "The reflection of light off smooth surfaces",
        "The bending of light as it passes through different mediums"
      ],
      correctOption: 1,
      explanation: "The Doppler effect describes the change in frequency of a wave in relation to an observer who is moving relative to the wave source. This explains why the sound of an approaching vehicle seems higher in pitch and lowers as it moves away."
    },
    {
      question: "What is Faraday's law of electromagnetic induction?",
      options: [
        "The induced electromotive force is directly proportional to the rate of change of magnetic flux",
        "Electric and magnetic fields propagate as waves at the speed of light",
        "Like charges repel, unlike charges attract",
        "Energy cannot be created or destroyed in an isolated system"
      ],
      correctOption: 0,
      explanation: "Faraday's law states that the induced electromotive force (emf) in a closed circuit is directly proportional to the rate of change of magnetic flux through the circuit. This is the principle behind electric generators."
    },
    {
      question: "What is the SI unit of pressure?",
      options: [
        "Newton",
        "Pascal",
        "Joule",
        "Watt"
      ],
      correctOption: 1,
      explanation: "The SI unit of pressure is the pascal (Pa), which is equivalent to one newton per square meter (N/m²). It is named after the physicist Blaise Pascal."
    },
    {
      question: "What is the photoelectric effect?",
      options: [
        "The production of electric current in a material when exposed to light",
        "The emission of electrons when light hits a material",
        "The reflection of light from a shiny surface",
        "The production of light when an electric current passes through a material"
      ],
      correctOption: 1,
      explanation: "The photoelectric effect is the emission of electrons when light hits a material. This phenomenon was explained by Albert Einstein in 1905 and provided evidence for the particle nature of light (photons)."
    },
    {
      question: "Which law states that pressure and volume are inversely proportional at constant temperature?",
      options: [
        "Charles's Law",
        "Avogadro's Law",
        "Boyle's Law",
        "Gay-Lussac's Law"
      ],
      correctOption: 2,
      explanation: "Boyle's Law states that the pressure of a gas is inversely proportional to its volume at constant temperature. Mathematically, it is expressed as P₁V₁ = P₂V₂."
    },
    {
      question: "What is the principle of conservation of energy?",
      options: [
        "Energy cannot be created or destroyed, only transformed from one form to another",
        "Energy is always lost in any physical process",
        "The total momentum of an isolated system remains constant",
        "Force equals mass times acceleration"
      ],
      correctOption: 0,
      explanation: "The principle of conservation of energy states that energy cannot be created or destroyed, only converted from one form to another. The total energy of an isolated system remains constant over time."
    },
    {
      question: "What is Bernoulli's principle?",
      options: [
        "Fluid pressure increases as fluid velocity increases",
        "An increase in the speed of a fluid occurs simultaneously with a decrease in pressure",
        "The buoyant force on an object is equal to the weight of the fluid displaced by the object",
        "Heat always flows from hot to cold"
      ],
      correctOption: 1,
      explanation: "Bernoulli's principle states that as the speed of a moving fluid increases, the pressure within the fluid decreases. This principle explains the lift generated by aircraft wings and the curve of a baseball."
    }
  ],
  "Chemistry": [
    {
      question: "What is the periodic law?",
      options: [
        "All elements are composed of atoms",
        "The properties of elements are periodic functions of their atomic numbers",
        "Matter can neither be created nor destroyed",
        "Every action has an equal and opposite reaction"
      ],
      correctOption: 1,
      explanation: "The periodic law, formulated by Dmitri Mendeleev and later revised by Henry Moseley, states that the physical and chemical properties of elements are periodic functions of their atomic numbers. This is the foundation of the periodic table."
    },
    {
      question: "What is the pH of a neutral solution at 25°C?",
      options: [
        "0",
        "7",
        "14",
        "1"
      ],
      correctOption: 1,
      explanation: "A neutral solution has a pH of 7 at 25°C. Solutions with a pH less than 7 are acidic, while solutions with a pH greater than 7 are basic or alkaline."
    },
    {
      question: "Which of the following is NOT a type of chemical bond?",
      options: [
        "Ionic bond",
        "Covalent bond",
        "Metallic bond",
        "Gravitational bond"
      ],
      correctOption: 3,
      explanation: "Gravitational bond is not a type of chemical bond. The three primary types of chemical bonds are ionic bonds (electron transfer), covalent bonds (electron sharing), and metallic bonds (electron delocalization)."
    },
    {
      question: "What is Le Chatelier's principle?",
      options: [
        "Energy cannot be created or destroyed",
        "When a system at equilibrium is subjected to a change, the system will shift to counteract that change",
        "The amount of energy in a reaction is constant",
        "The rate of a reaction doubles with every 10°C increase in temperature"
      ],
      correctOption: 1,
      explanation: "Le Chatelier's principle states that if a dynamic equilibrium is disturbed by changing the conditions (concentration, temperature, pressure), the position of equilibrium shifts to counteract the change and restore equilibrium."
    },
    {
      question: "What is the difference between organic and inorganic compounds?",
      options: [
        "Organic compounds are always found in living organisms",
        "Inorganic compounds always contain metals",
        "Organic compounds contain carbon-hydrogen bonds, while inorganic compounds typically do not",
        "Organic compounds are synthetic, while inorganic compounds are natural"
      ],
      correctOption: 2,
      explanation: "The key difference is that organic compounds contain carbon-hydrogen bonds, while inorganic compounds typically do not. Organic chemistry is the study of carbon compounds, particularly those containing C-H bonds."
    },
    {
      question: "What is a redox reaction?",
      options: [
        "A reaction that only occurs in acidic solutions",
        "A reaction involving the exchange of protons",
        "A reaction involving the transfer of electrons between reactants",
        "A reaction that occurs at high temperatures"
      ],
      correctOption: 2,
      explanation: "A redox (reduction-oxidation) reaction involves the transfer of electrons between reactants. Oxidation is the loss of electrons, while reduction is the gain of electrons."
    },
    {
      question: "What is the octet rule?",
      options: [
        "Atoms tend to gain or lose electrons to achieve an outer shell with 8 electrons",
        "Elements in the 8th group of the periodic table are inert",
        "Chemical reactions always involve 8 electrons",
        "There are 8 types of chemical bonds"
      ],
      correctOption: 0,
      explanation: "The octet rule states that atoms tend to gain, lose, or share electrons to achieve a stable electron configuration with 8 electrons in their outer shell (similar to noble gases). This helps explain chemical bonding."
    },
    {
      question: "What is an isomer?",
      options: [
        "A molecule with the same molecular formula but different structural arrangement as another molecule",
        "A molecule with a different molecular formula but similar properties to another molecule",
        "A molecule that contains isotopes",
        "A molecule that can conduct electricity"
      ],
      correctOption: 0,
      explanation: "Isomers are molecules that have the same molecular formula but different structural arrangements of atoms. This results in different physical and chemical properties despite having identical atomic compositions."
    },
    {
      question: "What is the Aufbau principle?",
      options: [
        "Electrons always pair with opposite spins when possible",
        "No two electrons can have the same set of quantum numbers",
        "Electrons fill orbitals from lowest energy level to highest",
        "Electrons in the same orbital must have parallel spins"
      ],
      correctOption: 2,
      explanation: "The Aufbau principle (German for 'building up') states that electrons fill atomic orbitals of increasing energy levels. This helps explain the electron configuration of atoms in the periodic table."
    },
    {
      question: "What is a catalyst?",
      options: [
        "A substance that increases the energy required for a reaction",
        "A substance that combines with the product of a reaction",
        "A substance that increases the rate of a reaction without being consumed",
        "A substance that prevents a reaction from occurring"
      ],
      correctOption: 2,
      explanation: "A catalyst is a substance that increases the rate of a chemical reaction by lowering the activation energy, without being consumed in the process. Catalysts work by providing an alternative reaction pathway."
    }
  ],
  "Biology": [
    {
      question: "What is photosynthesis?",
      options: [
        "The process by which plants break down glucose for energy",
        "The process by which plants convert light energy into chemical energy, producing glucose and oxygen",
        "The process by which plants take in oxygen and release carbon dioxide",
        "The process by which plants absorb water from the soil"
      ],
      correctOption: 1,
      explanation: "Photosynthesis is the process by which green plants and some other organisms convert light energy from the sun into chemical energy stored in glucose. The simplified equation is: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ (glucose) + 6O₂."
    },
    {
      question: "What is the function of mitochondria?",
      options: [
        "Protein synthesis",
        "Cellular respiration and ATP production",
        "Storage of genetic material",
        "Digestion of cellular waste"
      ],
      correctOption: 1,
      explanation: "Mitochondria are often called the 'powerhouses of the cell' because they generate most of the cell's supply of adenosine triphosphate (ATP) through cellular respiration. ATP is the energy currency of cells."
    },
    {
      question: "What is the structure of DNA?",
      options: [
        "Single helix",
        "Double helix",
        "Triple helix",
        "Straight chain"
      ],
      correctOption: 1,
      explanation: "DNA (deoxyribonucleic acid) has a double helix structure, as discovered by James Watson and Francis Crick in 1953. The two strands are connected by hydrogen bonds between complementary base pairs: adenine with thymine, and guanine with cytosine."
    },
    {
      question: "What is natural selection?",
      options: [
        "The process by which organisms evolve to meet their needs",
        "The process by which organisms that are better adapted to their environment tend to survive and produce more offspring",
        "The process by which species become extinct",
        "The process by which plants grow toward light"
      ],
      correctOption: 1,
      explanation: "Natural selection is the process through which populations of living organisms adapt and change. Individuals with heritable traits better suited to the environment are more likely to survive, reproduce, and pass on their genes to the next generation."
    },
    {
      question: "What is homeostasis?",
      options: [
        "The maintenance of a stable internal environment despite changes in the external environment",
        "The process of cell division",
        "The development of an organism from a fertilized egg",
        "The classification of organisms into groups"
      ],
      correctOption: 0,
      explanation: "Homeostasis is the tendency of biological systems to maintain relatively stable internal conditions even while dealing with external changes. Examples include the regulation of body temperature, blood pH, and glucose levels."
    },
    {
      question: "What is the difference between arteries and veins?",
      options: [
        "Arteries carry oxygenated blood, veins carry deoxygenated blood",
        "Arteries carry blood away from the heart, veins carry blood to the heart",
        "Arteries have valves, veins do not",
        "Arteries are only found in mammals, veins are found in all vertebrates"
      ],
      correctOption: 1,
      explanation: "The main difference is their direction of blood flow: arteries carry blood away from the heart to the body tissues, while veins carry blood from the body tissues back to the heart. This is true regardless of oxygen content."
    },
    {
      question: "What is the process of mitosis?",
      options: [
        "The production of gametes with half the chromosome number",
        "The cell division process that results in two identical daughter cells",
        "The fertilization of an egg by a sperm",
        "The differentiation of cells into specialized tissues"
      ],
      correctOption: 1,
      explanation: "Mitosis is a type of cell division in which one cell divides into two genetically identical daughter cells. It is essential for growth, development, and tissue repair in multicellular organisms."
    },
    {
      question: "What is the role of enzymes in digestion?",
      options: [
        "They absorb nutrients from food",
        "They transport nutrients in the bloodstream",
        "They act as biological catalysts that speed up the breakdown of large food molecules",
        "They provide energy for the digestive process"
      ],
      correctOption: 2,
      explanation: "Enzymes are biological catalysts that accelerate chemical reactions in the body without being consumed. In digestion, enzymes such as amylase, protease, and lipase break down complex food molecules (carbohydrates, proteins, and fats) into smaller molecules that can be absorbed."
    },
    {
      question: "What is cellular respiration?",
      options: [
        "The process by which cells take in oxygen and release carbon dioxide",
        "The metabolic process that converts glucose into energy in the form of ATP",
        "The process by which plants make their own food",
        "The exchange of gases between an organism and its environment"
      ],
      correctOption: 1,
      explanation: "Cellular respiration is the metabolic process by which cells convert glucose and oxygen into ATP (energy), carbon dioxide, and water. The simplified equation is: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP (energy)."
    },
    {
      question: "What is gene expression?",
      options: [
        "The transfer of genes from one organism to another",
        "The process by which genetic instructions are used to synthesize gene products (proteins or RNA)",
        "The mutation of genes due to environmental factors",
        "The exchange of genetic material during reproduction"
      ],
      correctOption: 1,
      explanation: "Gene expression is the process by which the information encoded in a gene is used to synthesize a functional gene product, typically a protein. The process involves transcription (DNA to RNA) and translation (RNA to protein)."
    }
  ],
  "Math": [
    {
      question: "What is the Pythagorean theorem?",
      options: [
        "The sum of all angles in a triangle is 180 degrees",
        "In a right triangle, the square of the length of the hypotenuse equals the sum of the squares of the lengths of the other two sides",
        "The area of a circle equals πr²",
        "Two triangles are similar if their corresponding angles are equal"
      ],
      correctOption: 1,
      explanation: "The Pythagorean theorem states that in a right triangle, the square of the length of the hypotenuse (c) equals the sum of squares of the lengths of the other two sides (a and b). It is written as: a² + b² = c²."
    },
    {
      question: "What is a prime number?",
      options: [
        "A number that is divisible by all numbers less than itself",
        "A number that is divisible only by 1 and itself",
        "A number that can be expressed as a fraction",
        "A number that is divisible by 2"
      ],
      correctOption: 1,
      explanation: "A prime number is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers. Examples include 2, 3, 5, 7, 11, etc. A prime number has exactly two distinct positive divisors: 1 and itself."
    },
    {
      question: "What is the definition of a logarithm?",
      options: [
        "The process of finding the roots of a polynomial equation",
        "The inverse operation of exponentiation",
        "The process of finding the derivative of a function",
        "The ratio of the opposite side to the hypotenuse in a right triangle"
      ],
      correctOption: 1,
      explanation: "A logarithm is the inverse operation of exponentiation. If y = bˣ, then x = log_b(y), which is read as 'the logarithm of y with base b equals x.' Logarithms are useful for solving exponential equations and modeling certain types of growth."
    },
    {
      question: "What is the formula for the area of a circle?",
      options: [
        "A = 2πr",
        "A = πr²",
        "A = 4πr²",
        "A = πd"
      ],
      correctOption: 1,
      explanation: "The area of a circle is calculated using the formula A = πr², where r is the radius of the circle and π (pi) is approximately equal to 3.14159. This formula represents the amount of space enclosed by the circle."
    },
    {
      question: "What is the difference between permutation and combination?",
      options: [
        "Permutations involve addition, combinations involve multiplication",
        "Permutations consider the order of elements, combinations do not",
        "Permutations are used for probabilities, combinations are used for statistics",
        "There is no difference, they are synonyms"
      ],
      correctOption: 1,
      explanation: "The key difference is that permutations take into account the order of elements, while combinations do not. For example, when selecting a team (combination), the order doesn't matter, but when ranking winners (permutation), the order is important."
    },
    {
      question: "What is a polynomial equation?",
      options: [
        "An equation with multiple variables",
        "An equation involving only functions like sine and cosine",
        "An equation of the form P(x) = 0, where P(x) is a polynomial",
        "An equation with no solution"
      ],
      correctOption: 2,
      explanation: "A polynomial equation is an equation of the form P(x) = 0, where P(x) is a polynomial expression (a sum of terms, each term consisting of a constant multiplied by a variable raised to a non-negative integer power). Examples include x² - 5x + 6 = 0."
    },
    {
      question: "What is integration in calculus?",
      options: [
        "The process of finding the rate of change of a function",
        "The process of finding the area under a curve",
        "The process of finding the maximum and minimum values of a function",
        "The process of finding the intersection of two functions"
      ],
      correctOption: 1,
      explanation: "Integration is a fundamental concept in calculus that represents the process of finding the area under a curve. It is the reverse process of differentiation. The definite integral of a function provides the accumulated effect of the function over an interval."
    },
    {
      question: "What is the concept of probability?",
      options: [
        "The study of data collection and analysis",
        "The likelihood of an event occurring",
        "The study of shapes and their properties",
        "The study of numbers and their operations"
      ],
      correctOption: 1,
      explanation: "Probability is a measure of the likelihood that an event will occur. It is quantified as a number between 0 and 1, where 0 indicates impossibility and 1 indicates certainty. Probability theory provides the mathematical foundation for statistics."
    },
    {
      question: "What is a complex number?",
      options: [
        "A number that is rational",
        "A number that can be expressed as a + bi, where a and b are real numbers and i is the imaginary unit",
        "A number that is very large",
        "A number that can be expressed as a fraction"
      ],
      correctOption: 1,
      explanation: "A complex number is a number that can be expressed in the form a + bi, where a and b are real numbers and i is the imaginary unit, satisfying i² = -1. Complex numbers extend the concept of the one-dimensional number line to the two-dimensional complex plane."
    },
    {
      question: "What is the concept of matrices?",
      options: [
        "A way to solve quadratic equations",
        "A rectangular array of numbers, symbols, or expressions arranged in rows and columns",
        "A type of triangle with equal sides",
        "A formula for finding the area of a rectangle"
      ],
      correctOption: 1,
      explanation: "Matrices are rectangular arrays of numbers, symbols, or expressions arranged in rows and columns. They are used in linear algebra to represent linear transformations, solve systems of linear equations, and model various real-world phenomena."
    }
  ],
  "History": [
    {
      question: "What were the main causes of World War I?",
      options: [
        "Economic competition between the US and USSR",
        "Nationalism, militarism, imperialism, and alliance systems",
        "The assassination of US President John F. Kennedy",
        "The Great Depression"
      ],
      correctOption: 1,
      explanation: "The main causes of World War I (1914-1918) are often summarized as MAIN: Militarism (arms race), Alliances (complex treaty systems), Imperialism (competition for colonies), and Nationalism (promotion of national interests). The assassination of Archduke Franz Ferdinand was the immediate trigger."
    },
    {
      question: "Who was Alexander the Great?",
      options: [
        "A Roman Emperor who converted to Christianity",
        "A Macedonian king who created one of the largest empires of the ancient world",
        "An Egyptian pharaoh who built the Great Pyramid",
        "A Greek philosopher who was Aristotle's teacher"
      ],
      correctOption: 1,
      explanation: "Alexander the Great (356-323 BCE) was the king of the ancient Greek kingdom of Macedon. By the age of 30, he had created one of the largest empires of the ancient world, stretching from Greece to northwestern India. He was undefeated in battle and is considered one of history's most successful military commanders."
    },
    {
      question: "What was the Renaissance?",
      options: [
        "An economic depression in Europe during the 18th century",
        "A cultural movement emphasizing the revival of learning, art, and humanism that began in Italy in the 14th century",
        "A period of global warming during the Middle Ages",
        "A religious movement led by Martin Luther"
      ],
      correctOption: 1,
      explanation: "The Renaissance was a cultural movement that began in Italy in the 14th century and spread throughout Europe, marking the transition from the Middle Ages to modernity. It was characterized by a revival of classical learning, renewed interest in human achievement, and new developments in art, architecture, science, and literature."
    },
    {
      question: "What was the Industrial Revolution?",
      options: [
        "A political revolution in France that overthrew the monarchy",
        "The transition from agricultural to industrial economies, featuring new manufacturing processes and machinery",
        "A religious movement in medieval Europe",
        "A military conflict between Great Britain and its American colonies"
      ],
      correctOption: 1,
      explanation: "The Industrial Revolution was the transition to new manufacturing processes in Europe and the United States, from about 1760 to 1840. This transition included going from hand production methods to machines, new chemical manufacturing, steam power, water power, and the rise of the mechanized factory system."
    },
    {
      question: "What led to the fall of the Roman Empire?",
      options: [
        "A single decisive battle against Carthage",
        "A combination of factors including invasions, economic problems, overexpansion, military spending, and government corruption",
        "The assassination of Julius Caesar",
        "The eruption of Mount Vesuvius"
      ],
      correctOption: 1,
      explanation: "The fall of the Western Roman Empire in 476 CE was caused by a combination of factors, including: invasions by Barbarian tribes, economic troubles, overreliance on slave labor, overexpansion and military spending, corruption and political instability, and the rise of the Eastern (Byzantine) Empire."
    },
    {
      question: "Who was Mahatma Gandhi?",
      options: [
        "The first Prime Minister of India",
        "An Indian nationalist leader who employed nonviolent civil disobedience to lead India to independence",
        "A Chinese revolutionary who founded the People's Republic of China",
        "The Emperor of Japan during World War II"
      ],
      correctOption: 1,
      explanation: "Mahatma Gandhi (1869-1948) was an Indian lawyer, anti-colonial nationalist, and political ethicist who employed nonviolent resistance to lead the successful campaign for India's independence from British rule. His methods inspired civil rights movements worldwide."
    },
    {
      question: "What was the Cold War?",
      options: [
        "A military conflict between the United States and China",
        "A state of geopolitical tension and competition between the United States/Western bloc and the Soviet Union/Eastern bloc",
        "A war fought in the Arctic region during World War II",
        "A trade war between Japan and the United States in the 1980s"
      ],
      correctOption: 1,
      explanation: "The Cold War (1947-1991) was a period of geopolitical tension between the United States and its Western allies versus the Soviet Union and its Eastern allies. It was characterized by proxy wars, an arms race, ideological competition, and economic competition, without direct large-scale fighting between the two superpowers."
    },
    {
      question: "What was the significance of the French Revolution?",
      options: [
        "It established France as the dominant power in Europe",
        "It overthrew the French monarchy, ended feudalism, and promoted the principles of liberty, equality, and fraternity",
        "It led to the unification of France and Germany",
        "It established Catholicism as the state religion of France"
      ],
      correctOption: 1,
      explanation: "The French Revolution (1789-1799) was a period of radical social and political upheaval in France. It overthrew the monarchy, established a republic, catalyzed violent periods of political turmoil, and finally culminated in a dictatorship under Napoleon. It promoted the principles of liberty, equality, and fraternity and had a profound influence on modern political thought."
    },
    {
      question: "Who were key figures in the American Civil Rights Movement?",
      options: [
        "Andrew Jackson, James Monroe, and John Quincy Adams",
        "Martin Luther King Jr., Rosa Parks, Malcolm X, and Thurgood Marshall",
        "George Washington, Thomas Jefferson, and Benjamin Franklin",
        "Ulysses S. Grant, Robert E. Lee, and Abraham Lincoln"
      ],
      correctOption: 1,
      explanation: "Key figures in the American Civil Rights Movement (1954-1968) included Martin Luther King Jr. (leader who advocated nonviolent resistance), Rosa Parks (whose refusal to give up her bus seat sparked the Montgomery Bus Boycott), Malcolm X (who advocated for Black empowerment), and Thurgood Marshall (who successfully argued Brown v. Board of Education and later became the first Black Supreme Court Justice)."
    },
    {
      question: "What was the significance of the Silk Road?",
      options: [
        "It was a railroad connecting Europe and Asia built in the 19th century",
        "It was a network of trade routes connecting East and West, facilitating cultural, commercial, and technological exchange",
        "It was a diplomatic alliance between China and Rome",
        "It was a road made of silk that connected ancient cities"
      ],
      correctOption: 1,
      explanation: "The Silk Road was a network of trade routes connecting the East (China) and the West (Europe and the Middle East) from the 2nd century BCE to the 18th century CE. It facilitated the exchange of goods (particularly silk), but also culture, religion, philosophy, technology, language, science, and architecture across Eurasia."
    }
  ],
  "General Knowledge": [
    {
      question: "What is the capital of Australia?",
      options: [
        "Sydney",
        "Canberra",
        "Melbourne",
        "Perth"
      ],
      correctOption: 1,
      explanation: "Canberra is the capital city of Australia. It was created in 1908 as a compromise between Sydney and Melbourne, which both wanted to be the capital. Canberra is a planned city designed by American architect Walter Burley Griffin."
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: [
        "Ernest Hemingway",
        "Harper Lee",
        "Mark Twain",
        "F. Scott Fitzgerald"
      ],
      correctOption: 1,
      explanation: "To Kill a Mockingbird was written by Harper Lee and published in 1960. It won the Pulitzer Prize and has become a classic of modern American literature, addressing issues of racism and moral growth in the American South."
    },
    {
      question: "Which is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Pacific Ocean",
        "Indian Ocean",
        "Arctic Ocean"
      ],
      correctOption: 1,
      explanation: "The Pacific Ocean is the largest and deepest ocean on Earth, covering more than 30% of the Earth's surface. It extends from the Arctic Ocean in the north to the Southern Ocean in the south and is bounded by Asia and Australia in the west and the Americas in the east."
    },
    {
      question: "What is the currency of Japan?",
      options: [
        "Yuan",
        "Yen",
        "Won",
        "Ringgit"
      ],
      correctOption: 1,
      explanation: "The Japanese Yen (¥) is the official currency of Japan. It is the third most traded currency in the foreign exchange market after the United States dollar and the Euro."
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Michelangelo"
      ],
      correctOption: 1,
      explanation: "The Mona Lisa was painted by Leonardo da Vinci in the early 16th century (circa 1503-1506). It is one of the most famous paintings in the world and is housed at the Louvre Museum in Paris, France."
    },
    {
      question: "What is the tallest mountain in the world?",
      options: [
        "K2",
        "Mount Everest",
        "Mount Kilimanjaro",
        "Mount McKinley (Denali)"
      ],
      correctOption: 1,
      explanation: "Mount Everest, located in the Mahalangur Himal sub-range of the Himalayas, is Earth's highest mountain above sea level at 29,032 feet (8,849 meters). It sits on the border between Nepal and Tibet, an autonomous region of China."
    },
    {
      question: "Who is the founder of Microsoft?",
