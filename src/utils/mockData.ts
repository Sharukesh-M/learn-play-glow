
import { Quiz, QuestionType } from "../types/quiz";

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
      options: [
        "Steve Jobs",
        "Bill Gates",
        "Mark Zuckerberg",
        "Jeff Bezos"
      ],
      correctOption: 1,
      explanation: "Microsoft was founded by Bill Gates and Paul Allen in Albuquerque, New Mexico, in 1975. Bill Gates served as CEO until 2000 and remained chairman of the board until 2014. He is known for his philanthropic work through the Bill & Melinda Gates Foundation."
    },
    {
      question: "What is the chemical symbol for gold?",
      options: [
        "Go",
        "Au",
        "Ag",
        "Gd"
      ],
      correctOption: 1,
      explanation: "The chemical symbol for gold is Au, which comes from the Latin word 'aurum,' meaning 'shining dawn' or 'glow of sunrise.' Gold is a precious metal with the atomic number 79 in the periodic table."
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: [
        "Venus",
        "Mars",
        "Jupiter",
        "Saturn"
      ],
      correctOption: 1,
      explanation: "Mars is known as the Red Planet due to the reddish appearance of its surface, which is caused by iron oxide (rust) prevalent on its surface. It is the fourth planet from the Sun in our solar system."
    },
    {
      question: "Who was the first person to step on the Moon?",
      options: [
        "Yuri Gagarin",
        "Neil Armstrong",
        "Buzz Aldrin",
        "John Glenn"
      ],
      correctOption: 1,
      explanation: "Neil Armstrong was the first person to step on the Moon on July 20, 1969, during NASA's Apollo 11 mission. As he stepped onto the lunar surface, he famously said, 'That's one small step for [a] man, one giant leap for mankind.'"
    }
  ],
  "Computer Science": [
    {
      question: "What is an algorithm?",
      options: [
        "A programming language",
        "A step-by-step procedure for solving a problem or accomplishing a task",
        "A type of computer hardware",
        "A mathematical equation"
      ],
      correctOption: 1,
      explanation: "An algorithm is a step-by-step procedure or set of rules for solving a problem or accomplishing a task. In computer science, algorithms are used for tasks such as data processing, calculations, and automated reasoning."
    },
    {
      question: "What is the difference between RAM and ROM?",
      options: [
        "RAM is for storage, ROM is for processing",
        "RAM is volatile memory (temporary) while ROM is non-volatile memory (permanent)",
        "RAM is slower than ROM",
        "There is no difference, they are synonyms"
      ],
      correctOption: 1,
      explanation: "RAM (Random Access Memory) is volatile memory that temporarily stores data that the computer is actively using. When the computer is turned off, RAM data is lost. ROM (Read-Only Memory) is non-volatile memory that permanently stores instructions needed at startup. Its contents remain even when power is turned off."
    },
    {
      question: "What does CPU stand for?",
      options: [
        "Central Processing Unit",
        "Computer Personal Unit",
        "Central Program Utility",
        "Centralized Processing Utility"
      ],
      correctOption: 0,
      explanation: "CPU stands for Central Processing Unit. It is the primary component of a computer that performs most of the processing inside a computer. It functions as the 'brain' of the computer, executing instructions and processing data."
    },
    {
      question: "What is a database?",
      options: [
        "A type of spreadsheet program",
        "An organized collection of structured information or data typically stored electronically in a computer system",
        "A programming language used for web development",
        "A hardware component that stores temporary data"
      ],
      correctOption: 1,
      explanation: "A database is an organized collection of structured information or data, typically stored electronically in a computer system. Databases are managed using database management systems (DBMS) and are designed to efficiently store, retrieve, and manage data."
    },
    {
      question: "What is object-oriented programming?",
      options: [
        "A programming paradigm focused on mathematical functions",
        "A programming paradigm based on 'objects' which contain data and code",
        "A type of low-level programming similar to assembly language",
        "A method of programming that focuses only on the sequence of instructions"
      ],
      correctOption: 1,
      explanation: "Object-oriented programming (OOP) is a programming paradigm based on the concept of 'objects', which can contain data and code. The data is in the form of fields (attributes), and the code is in the form of procedures (methods). Key principles include encapsulation, inheritance, and polymorphism."
    },
    {
      question: "What is a firewall in computer security?",
      options: [
        "A physical barrier that prevents computer theft",
        "A network security system that monitors and controls incoming and outgoing network traffic",
        "A backup system for data protection",
        "Software that speeds up internet connection"
      ],
      correctOption: 1,
      explanation: "A firewall is a network security device or software that monitors and filters incoming and outgoing network traffic based on predetermined security rules. Its primary purpose is to establish a barrier between a trusted internal network and untrusted external networks (like the Internet)."
    },
    {
      question: "What is cloud computing?",
      options: [
        "Computing that takes place in environments with high humidity",
        "The delivery of computing services over the internet ('the cloud')",
        "A type of computing that uses only wireless devices",
        "Computing that focuses on weather prediction"
      ],
      correctOption: 1,
      explanation: "Cloud computing is the delivery of different services through the Internet, including data storage, servers, databases, networking, and software. Instead of keeping files on a proprietary hard drive or local storage device, cloud-based storage makes it possible to save them to a remote database."
    },
    {
      question: "What is a bug in programming?",
      options: [
        "A feature added to a program",
        "An error, flaw, or fault in a computer program that causes it to produce an incorrect or unexpected result",
        "A type of computer virus",
        "A slang term for a fast algorithm"
      ],
      correctOption: 1,
      explanation: "In programming, a bug is an error, flaw, or fault in a computer program that causes it to produce an incorrect or unexpected result, or to behave in unintended ways. The process of finding and fixing bugs is called debugging."
    },
    {
      question: "What is machine learning?",
      options: [
        "The process of teaching computers to follow explicit instructions",
        "A field of AI that enables computers to learn from data and improve from experience without being explicitly programmed",
        "The maintenance and repair of computer hardware",
        "The process of building physical robots"
      ],
      correctOption: 1,
      explanation: "Machine learning is a field of artificial intelligence (AI) that focuses on building systems that learn from data. Instead of explicitly programming a computer to perform a task, the computer uses algorithms and statistical models to analyze patterns in data and make decisions with minimal human intervention."
    },
    {
      question: "What is HTML used for?",
      options: [
        "Creating databases",
        "Creating and structuring the content of web pages",
        "Programming computer hardware",
        "Securing computer networks"
      ],
      correctOption: 1,
      explanation: "HTML (HyperText Markup Language) is the standard markup language used to create and structure content on the World Wide Web. It defines the meaning and structure of web content, using elements (tags) to label pieces of content such as headings, paragraphs, images, links, etc."
    }
  ],
  "Economics": [
    {
      question: "What is inflation?",
      options: [
        "A decrease in the general price level of goods and services",
        "An increase in the general price level of goods and services over time",
        "A measure of unemployment in an economy",
        "The total value of goods and services produced by a country"
      ],
      correctOption: 1,
      explanation: "Inflation is a sustained increase in the general price level of goods and services in an economy over a period of time. When the general price level rises, each unit of currency buys fewer goods and services, effectively decreasing the purchasing power of money."
    },
    {
      question: "What is GDP?",
      options: [
        "Global Defense Protocol",
        "Gross Domestic Product - the total value of goods and services produced within a country in a specific time period",
        "General Development Plan",
        "Government Debt Payment"
      ],
      correctOption: 1,
      explanation: "GDP (Gross Domestic Product) is the total monetary or market value of all the finished goods and services produced within a country's borders in a specific time period. It serves as a comprehensive scorecard of a country's economic health."
    },
    {
      question: "What is the law of supply and demand?",
      options: [
        "A legal framework governing international trade",
        "An economic principle that describes how the price of a good or service is determined by the interaction of supply and demand",
        "A tax regulation for businesses",
        "A formula for calculating economic growth"
      ],
      correctOption: 1,
      explanation: "The law of supply and demand is a fundamental economic principle that explains the relationship between sellers and buyers of a resource. According to this law, prices will rise when demand exceeds supply and fall when supply exceeds demand, eventually reaching an equilibrium point."
    },
    {
      question: "What is a recession?",
      options: [
        "A period of substantial economic growth",
        "A significant decline in economic activity spread across the economy, lasting more than a few months",
        "The process of introducing a new currency",
        "A government policy to increase taxes"
      ],
      correctOption: 1,
      explanation: "A recession is a significant, widespread, and prolonged downturn in economic activity. Technically, it is defined as two consecutive quarters of negative economic growth, as measured by a country's GDP. Recessions are characterized by high unemployment, declining average incomes, and falling retail sales."
    },
    {
      question: "What is fiscal policy?",
      options: [
        "Policies related to international trade",
        "The use of government spending and taxation to influence the economy",
        "Policies set by central banks regarding interest rates",
        "Regulations for the stock market"
      ],
      correctOption: 1,
      explanation: "Fiscal policy refers to the use of government spending and tax policies to influence economic conditions. It is distinguished from monetary policy, which is primarily concerned with the management of interest rates and the total supply of money in circulation, typically conducted by central banks."
    },
    {
      question: "What is a market economy?",
      options: [
        "An economy where all decisions are made by the government",
        "An economic system in which decisions about production, investment, and distribution are based on supply and demand, with prices determined in a free price system",
        "An economy based solely on agriculture",
        "An economy that only trades internationally"
      ],
      correctOption: 1,
      explanation: "A market economy is an economic system in which economic decisions and the pricing of goods and services are guided by the interactions of citizens and businesses. There is little government intervention or central planning. Pure market economies rarely exist, as almost all economies combine elements of both market and command economic systems."
    },
    {
      question: "What are opportunity costs?",
      options: [
        "The cost of starting a new business",
        "The value of the next-best alternative that must be foregone when making a choice",
        "The cost of marketing a product",
        "The cost of borrowing money from a bank"
      ],
      correctOption: 1,
      explanation: "Opportunity cost is the value of the next-best alternative that must be given up when making a choice. It represents the benefits you could have received by taking an alternative action. Understanding opportunity cost is crucial for making efficient economic decisions."
    },
    {
      question: "What is economic growth?",
      options: [
        "The increase in tax revenue collected by the government",
        "An increase in the production of goods and services over a period of time",
        "The expansion of a company into new markets",
        "The increase in a country's population"
      ],
      correctOption: 1,
      explanation: "Economic growth is an increase in the production of economic goods and services, compared from one period of time to another. It can be measured in nominal or real (adjusted for inflation) terms. Traditionally, economic growth is measured as the percent rate of increase in real GDP."
    },
    {
      question: "What is a monopoly?",
      options: [
        "A market structure where many firms compete with each other",
        "A market structure characterized by a single seller who dominates the market",
        "A business that operates internationally",
        "A government-owned business"
      ],
      correctOption: 1,
      explanation: "A monopoly is a market structure characterized by a single seller who dominates the market for a particular good or service. This seller faces little or no competition and has significant market power to set prices. Pure monopolies are rare in most modern economies due to antitrust regulations."
    },
    {
      question: "What is globalization in economics?",
      options: [
        "The study of global warming effects on economies",
        "The increasing interdependence of economies around the world through cross-border movement of goods, services, technology, and capital",
        "The establishment of global monetary policies by the World Bank",
        "The process of all countries adopting the same currency"
      ],
      correctOption: 1,
      explanation: "Globalization in economics refers to the increasing economic integration and interdependence of national, regional, and local economies across the world through the intensification of cross-border movement of goods, services, technologies, and capital. It has led to greater international trade, outsourcing, and cultural exchange."
    }
  ],
  "Current Affairs": [
    {
      question: "What is climate change?",
      options: [
        "Daily changes in weather patterns",
        "Long-term shifts in temperatures and weather patterns primarily caused by human activities, especially the burning of fossil fuels",
        "The study of cloud formations",
        "Seasonal changes in temperature"
      ],
      correctOption: 1,
      explanation: "Climate change refers to long-term shifts in temperatures and weather patterns. These changes may be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels like coal, oil, and gas, which produces heat-trapping gases."
    },
    {
      question: "What is sustainable development?",
      options: [
        "Economic development that focuses only on short-term profits",
        "Development that meets the needs of the present without compromising the ability of future generations to meet their own needs",
        "Development of artificial intelligence technologies",
        "A development model used only in developed countries"
      ],
      correctOption: 1,
      explanation: "Sustainable development is development that meets the needs of the present without compromising the ability of future generations to meet their own needs. It encompasses three dimensions: economic development, social inclusion, and environmental sustainability."
    },
    {
      question: "What is digital privacy?",
      options: [
        "Using digital technology in private spaces",
        "The protection of personal information that is collected, stored, and used digitally",
        "Privacy settings on digital devices",
        "Keeping digital devices hidden from public view"
      ],
      correctOption: 1,
      explanation: "Digital privacy refers to the protection of an individual's personal information that is collected, stored, and shared in digital format. It covers issues such as data protection, consent for data collection, security of personal information, and the right to privacy in digital communications."
    },
    {
      question: "What is artificial intelligence?",
      options: [
        "Robots with human-like bodies",
        "The simulation of human intelligence processes by machines, especially computer systems",
        "Virtual reality technology",
        "Advanced calculator systems"
      ],
      correctOption: 1,
      explanation: "Artificial Intelligence (AI) refers to systems or machines that mimic human intelligence to perform tasks and can iteratively improve themselves based on the information they collect. AI encompasses various technologies including machine learning, natural language processing, computer vision, and robotics."
    },
    {
      question: "What is cryptocurrency?",
      options: [
        "Traditional currency that is very secure",
        "A digital or virtual currency that uses cryptography for security and operates on a decentralized network called blockchain",
        "Currency used exclusively for online gaming",
        "Currency backed by precious metals"
      ],
      correctOption: 1,
      explanation: "Cryptocurrency is a digital or virtual currency that is secured by cryptography, making it nearly impossible to counterfeit. Many cryptocurrencies operate on decentralized networks based on blockchain technology. They are generally not issued by any central authority, rendering them theoretically immune to government interference or manipulation."
    },
    {
      question: "What is renewable energy?",
      options: [
        "Energy that gets recycled after use",
        "Energy collected from renewable resources that are naturally replenished on a human timescale, such as sunlight, wind, rain, tides, waves, and geothermal heat",
        "Energy used only for renewable products",
        "Energy that is very expensive"
      ],
      correctOption: 1,
      explanation: "Renewable energy is energy derived from natural sources that are replenished at a higher rate than they are consumed. Common sources of renewable energy include solar, wind, hydro, tidal, geothermal, and biomass energy. Renewable energy is an important component of sustainable development and climate change mitigation."
    },
    {
      question: "What is big data?",
      options: [
        "Data that is physically large",
        "Extremely large data sets that may be analyzed computationally to reveal patterns, trends, and associations",
        "Data that is important for national security",
        "Data stored in large computers"
      ],
      correctOption: 1,
      explanation: "Big data refers to extremely large and complex data sets that traditional data processing software cannot deal with. It often involves data with greater variety arriving in increasing volumes and with more velocity. This data requires new processing methods to enable enhanced decision making, insight discovery, and process optimization."
    },
    {
      question: "What is the gig economy?",
      options: [
        "An economy based on musical performances",
        "A labor market characterized by the prevalence of short-term contracts or freelance work as opposed to permanent jobs",
        "An economy based on large corporations",
        "An economy that operates only online"
      ],
      correctOption: 1,
      explanation: "The gig economy is a labor market characterized by the prevalence of short-term contracts or freelance work as opposed to permanent jobs. Workers in a gig economy are often classified as independent contractors and typically take on temporary or flexible jobs. Examples include ride-sharing drivers, freelance writers, and food delivery workers."
    },
    {
      question: "What is social media?",
      options: [
        "Media that is funded by social organizations",
        "Interactive technologies that allow the creation or sharing of information, ideas, career interests, and other forms of expression via virtual communities and networks",
        "Media that is only accessible to certain social classes",
        "Media created by social scientists"
      ],
      correctOption: 1,
      explanation: "Social media refers to interactive digital technologies that facilitate the creation and sharing of information, ideas, interests, and other forms of expression through virtual communities and networks. Examples include Facebook, Twitter, Instagram, and LinkedIn. Social media has profoundly changed how people communicate and access information."
    },
    {
      question: "What is cybersecurity?",
      options: [
        "Security measures for physical computers",
        "The practice of protecting systems, networks, and programs from digital attacks, damage, or unauthorized access",
        "Security for cyber cafes",
        "Insurance for digital devices"
      ],
      correctOption: 1,
      explanation: "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These attacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes. Implementing effective cybersecurity measures is challenging because attackers are becoming more innovative."
    }
  ]
};

// Function to generate a set of questions from a specific subject
function generateSubjectQuestions(subject, count = 10) {
  const subjectData = SUBJECT_QUESTIONS[subject];
  if (!subjectData) return [];
  
  // Shuffle the questions and take the requested count
  const shuffled = [...subjectData].sort(() => Math.random() - 0.5);
  const selectedQuestions = shuffled.slice(0, Math.min(count, subjectData.length));
  
  return selectedQuestions.map((q, index) => {
    const questionType = Math.random() > 0.8 ? 'fill-blank' : 'multiple-choice';
    const answers = questionType === 'multiple-choice' 
      ? q.options.map((option, optIndex) => ({
          id: String.fromCharCode(97 + optIndex),
          text: option,
          isCorrect: optIndex === q.correctOption
        }))
      : [{ id: 'a', text: q.options[q.correctOption], isCorrect: true }];
    
    return {
      id: `${subject.toLowerCase().replace(/\s+/g, '-')}-q${index}`,
      type: questionType,
      text: q.question,
      points: Math.floor(Math.random() * 3 + 1) * 100,
      timeLimit: Math.floor(Math.random() * 3 + 1) * 15,
      answers: answers,
      explanation: q.explanation
    };
  });
}

// Generate randomized questions for a given category
function generateRandomizedQuestions(category, count) {
  // Map general categories to specific subjects
  const categoryToSubject = {
    "Science": ["Physics", "Chemistry", "Biology"],
    "Math": ["Math"],
    "History": ["History"],
    "Geography": ["General Knowledge"],
    "Technology": ["Computer Science"],
    "General Knowledge": ["General Knowledge"],
    "Physics": ["Physics"],
    "Chemistry": ["Chemistry"],
    "Biology": ["Biology"],
    "Computer Science": ["Computer Science"],
    "Economics": ["Economics"],
    "Current Affairs": ["Current Affairs"]
  };

  const subjects = categoryToSubject[category] || ["General Knowledge"];
  const subject = subjects[Math.floor(Math.random() * subjects.length)];
  
  return generateSubjectQuestions(subject, count);
}

// Generate mock quizzes with more realistic subject-based questions
export const generateMockQuizzes = (): Quiz[] => {
  return [
    {
      id: "1",
      title: "Basic Science Quiz",
      description: "Test your knowledge of fundamental scientific concepts",
      category: "Science",
      difficulty: "easy",
      createdBy: "Science Teacher",
      createdAt: new Date(2023, 4, 15).toISOString(),
      timesPlayed: 1245,
      averageScore: 78,
      tags: ["Science", "K-12", "Educational"],
      questions: generateSubjectQuestions("Physics", 5).concat(generateSubjectQuestions("Chemistry", 5)),
      isPublic: true,
      thumbnailColor: "from-purple-500 to-indigo-500"
    },
    {
      id: "2",
      title: "World History Trivia",
      description: "Challenge yourself with these world history questions",
      category: "History",
      difficulty: "medium",
      createdBy: "History Buff",
      createdAt: new Date(2023, 5, 22).toISOString(),
      timesPlayed: 873,
      averageScore: 65,
      tags: ["History", "Educational", "Trivia"],
      questions: generateSubjectQuestions("History", 8),
      isPublic: true,
      thumbnailColor: "from-amber-500 to-red-500"
    },
    {
      id: "3",
      title: "Math Challenge",
      description: "Put your mathematical skills to the test",
      category: "Math",
      difficulty: "hard",
      createdBy: "Math Professor",
      createdAt: new Date(2023, 6, 10).toISOString(),
      timesPlayed: 562,
      averageScore: 52,
      tags: ["Math", "Challenge", "Educational"],
      questions: generateSubjectQuestions("Math", 10),
      isPublic: true,
      thumbnailColor: "from-blue-500 to-cyan-500"
    },
    {
      id: "4",
      title: "General Knowledge Quiz",
      description: "How well do you know facts about the world?",
      category: "General Knowledge",
      difficulty: "easy",
      createdBy: "Quiz Master",
      createdAt: new Date(2023, 7, 5).toISOString(),
      timesPlayed: 2341,
      averageScore: 81,
      tags: ["General Knowledge", "Fun", "Trivia"],
      questions: generateSubjectQuestions("General Knowledge", 10),
      isPublic: true,
      thumbnailColor: "from-pink-500 to-rose-500"
    },
    {
      id: "5",
      title: "Geography Quiz",
      description: "Test your knowledge of world geography",
      category: "Geography",
      difficulty: "medium",
      createdBy: "Globe Trotter",
      createdAt: new Date(2023, 8, 12).toISOString(),
      timesPlayed: 945,
      averageScore: 68,
      tags: ["Geography", "Educational", "K-12"],
      questions: generateSubjectQuestions("General Knowledge", 7),
      isPublic: true,
      thumbnailColor: "from-green-500 to-emerald-500"
    },
    {
      id: "6",
      title: "Tech Knowledge Test",
      description: "Are you up to date with the latest technology?",
      category: "Technology",
      difficulty: "medium",
      createdBy: "Tech Geek",
      createdAt: new Date(2023, 9, 8).toISOString(),
      timesPlayed: 789,
      averageScore: 72,
      tags: ["Technology", "Professional", "Educational"],
      questions: generateSubjectQuestions("Computer Science", 9),
      isPublic: true,
      thumbnailColor: "from-violet-500 to-purple-500"
    },
    // Entrance exam quizzes
    {
      id: "7",
      title: "JEE Physics Practice",
      description: "Prepare for JEE with these physics questions",
      category: "Physics",
      difficulty: "hard",
      createdBy: "JEE Coach",
      createdAt: new Date(2023, 10, 5).toISOString(),
      timesPlayed: 1826,
      averageScore: 58,
      tags: ["Physics", "JEE", "Educational"],
      questions: generateSubjectQuestions("Physics", 10),
      isPublic: true,
      thumbnailColor: "from-blue-600 to-indigo-600"
    },
    {
      id: "8",
      title: "NEET Biology Concepts",
      description: "Essential biology concepts for NEET preparation",
      category: "Biology",
      difficulty: "hard",
      createdBy: "NEET Mentor",
      createdAt: new Date(2023, 9, 15).toISOString(),
      timesPlayed: 1542,
      averageScore: 62,
      tags: ["Biology", "NEET", "Educational"],
      questions: generateSubjectQuestions("Biology", 10),
      isPublic: true,
      thumbnailColor: "from-green-600 to-teal-600"
    },
    {
      id: "9",
      title: "UPSC General Knowledge",
      description: "Test your general knowledge for UPSC preparation",
      category: "General Knowledge",
      difficulty: "medium",
      createdBy: "UPSC Explorer",
      createdAt: new Date(2023, 11, 3).toISOString(),
      timesPlayed: 2103,
      averageScore: 64,
      tags: ["General Knowledge", "UPSC", "Current Affairs"],
      questions: generateSubjectQuestions("General Knowledge", 5).concat(generateSubjectQuestions("Current Affairs", 5)),
      isPublic: true,
      thumbnailColor: "from-yellow-500 to-amber-500"
    },
    {
      id: "10",
      title: "CAT Quantitative Aptitude",
      description: "Sharpen your quantitative skills for CAT exam",
      category: "Math",
      difficulty: "hard",
      createdBy: "MBA Prep",
      createdAt: new Date(2023, 8, 22).toISOString(),
      timesPlayed: 1320,
      averageScore: 56,
      tags: ["Math", "CAT", "Aptitude"],
      questions: generateSubjectQuestions("Math", 10),
      isPublic: true,
      thumbnailColor: "from-purple-600 to-pink-600"
    },
    // Additional specialized quizzes
    {
      id: "11",
      title: "Chemistry for NEET",
      description: "Master chemistry concepts for NEET exam",
      category: "Chemistry",
      difficulty: "hard",
      createdBy: "Chemistry Professor",
      createdAt: new Date(2023, 7, 14).toISOString(),
      timesPlayed: 1185,
      averageScore: 59,
      tags: ["Chemistry", "NEET", "Science"],
      questions: generateSubjectQuestions("Chemistry", 10),
      isPublic: true,
      thumbnailColor: "from-red-500 to-orange-500"
    },
    {
      id: "12",
      title: "Computer Science Fundamentals",
      description: "Test your knowledge of CS basics for GATE preparation",
      category: "Computer Science",
      difficulty: "medium",
      createdBy: "CS Instructor",
      createdAt: new Date(2023, 6, 20).toISOString(),
      timesPlayed: 957,
      averageScore: 72,
      tags: ["Computer Science", "GATE", "Technology"],
      questions: generateSubjectQuestions("Computer Science", 10),
      isPublic: true,
      thumbnailColor: "from-blue-500 to-indigo-500"
    },
    {
      id: "13",
      title: "Economics for Competitive Exams",
      description: "Important economic concepts for various entrance exams",
      category: "Economics",
      difficulty: "medium",
      createdBy: "Economics Professor",
      createdAt: new Date(2023, 5, 8).toISOString(),
      timesPlayed: 752,
      averageScore: 65,
      tags: ["Economics", "UPSC", "CAT"],
      questions: generateSubjectQuestions("Economics", 10),
      isPublic: true,
      thumbnailColor: "from-green-500 to-emerald-500"
    },
    {
      id: "14",
      title: "Current Affairs 2023",
      description: "Stay updated with important recent events for competitive exams",
      category: "Current Affairs",
      difficulty: "medium",
      createdBy: "Current Affairs Expert",
      createdAt: new Date(2023, 10, 10).toISOString(),
      timesPlayed: 1893,
      averageScore: 61,
      tags: ["Current Affairs", "UPSC", "General Knowledge"],
      questions: generateSubjectQuestions("Current Affairs", 10),
      isPublic: true,
      thumbnailColor: "from-blue-400 to-purple-400"
    },
    {
      id: "15",
      title: "JEE Mathematics Advanced",
      description: "Challenging math problems for JEE Advanced preparation",
      category: "Math",
      difficulty: "hard",
      createdBy: "JEE Math Expert",
      createdAt: new Date(2023, 9, 25).toISOString(),
      timesPlayed: 1247,
      averageScore: 48,
      tags: ["Math", "JEE", "Advanced"],
      questions: generateSubjectQuestions("Math", 10),
      isPublic: true,
      thumbnailColor: "from-purple-500 to-pink-500"
    }
  ];
};

export const generateMockLeaderboard = () => {
  const leaderboard = [];
  const usernames = [
    "QuizMaster123", "BrainiacLearner", "KnowledgeSeeker", "QuizWhiz", 
    "TriviaStar", "LearningHero", "WisdomChaser", "SmartCookie", 
    "QuizChamp", "GeniusLearner"
  ];
  
  for (let i = 0; i < 10; i++) {
    leaderboard.push({
      userId: `user-${i + 1}`,
      username: usernames[i],
      score: Math.floor(Math.random() * 5000) + 5000,
      position: i + 1,
      completedAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString()
    });
  }
  
  // Sort by score descending
  return leaderboard.sort((a, b) => b.score - a.score);
};
