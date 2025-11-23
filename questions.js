// CEFR English Test Questions Database
// Each question includes the question text, options, correct answer index, and explanations

const questionsDatabase = {
    A1: [
        {
            question: "Choose the correct answer: Jane, mum's leaving really early tomorrow, so could you wake me at 7am when you leave for work? I mustn't be late for college again.",
            options: [
                "Tom wants to persuade Jane to take him to college tomorrow morning.",
                "Tom would like Jane to do him a favour tomorrow morning.",
                "Tom is reminding Jane they have to get up early tomorrow morning."
            ],
            correct: 1,
            explanation: "Tom is asking Jane for a favor - to wake him up at 7am.",
            topic: "reading comprehension"
        },
        {
            question: "Jack ________ at the Sea Green Hotel this week. You can call him there.",
            options: ["stays", "are stay", "is staying"],
            correct: 2,
            explanation: "We use present continuous 'is staying' for temporary situations happening now.",
            topic: "present continuous"
        },
        {
            question: "Excuse me. _________ work here?",
            options: ["Are you", "Do you", "Does you"],
            correct: 1,
            explanation: "We use 'Do you' for questions with action verbs in present simple.",
            topic: "question formation"
        },
        {
            question: "The Natural History Museum - I've learned a huge amount about animals and plants ................time I've visited.",
            options: ["every", "little", "not so many"],
            correct: 0,
            explanation: "'Every time' means each time I visited.",
            topic: "frequency expressions"
        }
    ],
    A2: [
        {
            question: "I hope ................ are well. I'm having a great holiday here in Thailand.",
            options: ["He", "She", "You"],
            correct: 2,
            explanation: "'You' is correct when writing to someone directly.",
            topic: "personal pronouns"
        },
        {
            question: "William Perkin was born in London in 1838. But it was the ............... of chemistry that really interested him.",
            options: ["Class", "Subject", "Course"],
            correct: 1,
            explanation: "'Subject' refers to an area of study like chemistry.",
            topic: "vocabulary - education"
        },
        {
            question: "There's a popular idea that artists are not supposed to be into sport, but mountain biking gets me out of my studio, and into the ....................",
            options: ["day", "countryside", "street"],
            correct: 1,
            explanation: "Mountain biking typically takes place in the countryside.",
            topic: "vocabulary - places"
        },
        {
            question: "WIN A CAR (competition) Entries will only be accepted from people who are at least eighteen.",
            options: [
                "The competition is open to people over a certain age.",
                "There is a maximum age limit for this competition.",
                "Only eighteen-year-olds are allowed to enter this competition."
            ],
            correct: 0,
            explanation: "'At least eighteen' means 18 or older, so it's open to people over a certain age.",
            topic: "reading comprehension"
        }
    ],
    B1: [
        {
            question: "After years studying North America's black bears, wildlife biologist Luke Robertson felt no closer to understanding the creatures. He realised that he had to ............ their trust.",
            options: ["catch", "win", "achieve", "receive"],
            correct: 1,
            explanation: "We 'win' someone's trust means to gain their confidence.",
            topic: "vocabulary - collocations"
        },
        {
            question: "Don't put your cup on the ...... of the table – someone will knock it off.",
            options: ["outside", "edge", "boundary", "border"],
            correct: 1,
            explanation: "The 'edge' of a table is the outer limit or border.",
            topic: "vocabulary - parts of objects"
        },
        {
            question: "Once the plane is in the air, you can ...... your seat belts if you wish.",
            options: ["undress", "unfasten", "unlock"],
            correct: 1,
            explanation: "We 'unfasten' seat belts - to release or undo them.",
            topic: "vocabulary - actions"
        },
        {
            question: "When I realised I had dropped my gloves, I decided to ...... my steps.",
            options: ["retrace", "regress", "resume", "return"],
            correct: 0,
            explanation: "To 'retrace your steps' means to go back the same way you came.",
            topic: "phrasal verbs and expressions"
        }
    ],
    B2: [
        {
            question: "Anne's house is somewhere in the ...... of the railway station.",
            options: ["district", "vicinity", "near to"],
            correct: 1,
            explanation: "'In the vicinity of' means near or close to a place.",
            topic: "vocabulary - location"
        },
        {
            question: "Although there is a lack of clear evidence, people have come up with various theories about the origins of language. One recent theory is that human beings have evolved in ............ a way that we are programmed for language from the moment of birth.",
            options: ["this", "such", "that"],
            correct: 1,
            explanation: "'In such a way' is the correct phrase to describe manner or method.",
            topic: "advanced grammar structures"
        },
        {
            question: "What are the abilities that a professional sports person needs? To guarantee that opponents can be............ , speed, stamina and agility are essential.",
            options: ["given", "challenged", "overcome"],
            correct: 2,
            explanation: "Athletes need abilities to 'overcome' their opponents - to defeat them.",
            topic: "vocabulary - competition"
        },
        {
            question: "Reading: We live on the island of Hale. Most of the time you wouldn't know we're on an island because the river mouth between us and the mainland is just a vast stretch of tall grasses and brown mud. But when there's a high tide and the water rises... What is Caitlin's main point?",
            options: [
                "It can be dangerous to try to cross from the mainland.",
                "It is much smaller than it looks from the mainland.", 
                "It is only completely cut off at certain times.",
                "It can be a difficult place for people to live in."
            ],
            correct: 2,
            explanation: "The island is only cut off when there's high tide - at certain times.",
            topic: "reading comprehension"
        }
    ],
    C1: [
        {
            question: "Reading comprehension: 'It's my first time driving to Chelsea's training ground and I turn off slightly too early at the London University playing fields. Had he accepted football's rejections in his early teenage years, it is exactly the sort of ground Duncan Williams would have found himself running around on at weekends.' Which statement best describes the text?",
            options: [
                "It says that Duncan sometimes seems much more mature than he really is",
                "It states how surprised the writer was at Duncan's early difficulties", 
                "It says that Duncan is on course to reach a high point in his profession"
            ],
            correct: 2,
            explanation: "The text implies Duncan overcame early rejections and is now at a professional training ground, suggesting he's reaching high points in his career.",
            topic: "advanced reading comprehension"
        },
        {
            question: "Reading: 'On my living-room wall I have a painting of a wildcat by John Holmes of which I am extremely fond. It depicts a snarling, spitting animal, teeth bared and back arched: a taut coiled spring ready to unleash some unknown fury.' Which could be a continuation?",
            options: [
                "It is a typical image most folk have of the beast, but it is very much a false one, for the wildcat is little more than a bigger version of the domestic cat.",
                "As the animals emerge, their curiosity is aroused by every movement and rustle in the vegetation.",
                "The results, which are expected shortly, will be fascinating."
            ],
            correct: 0,
            explanation: "This continuation contrasts the fierce image in the painting with the reality of wildcats being similar to domestic cats.",
            topic: "text coherence and development"
        },
        {
            question: "The company's profits have been declining _____ for the past three years.",
            options: ["steadily", "steady", "steadiness", "steadied"],
            correct: 0,
            explanation: "'Steadily' is the adverb form needed to modify the verb 'declining'.",
            topic: "adverb usage"
        },
        {
            question: "_____ to the weather forecast, it should be sunny tomorrow.",
            options: ["According", "Regarding", "Concerning", "Relating"],
            correct: 0,
            explanation: "'According to' is used to cite a source of information.",
            topic: "formal linking expressions"
        }
    ],
    C2: [
        {
            question: "The evidence was _____ circumstantial to warrant a conviction.",
            options: ["too", "so", "such", "very"],
            correct: 0,
            explanation: "'Too' + adjective + to + infinitive expresses excessive degree.",
            topic: "intensifiers with infinitive"
        },
        {
            question: "Little _____ that this decision would change everything.",
            options: ["did I know", "I knew", "I did know", "knew I"],
            correct: 0,
            explanation: "After 'little' at the beginning, we use inversion: auxiliary + subject + main verb.",
            topic: "negative inversion"
        },
        {
            question: "The negotiations have reached an _____, with neither side willing to compromise.",
            options: ["impasse", "agreement", "understanding", "consensus"],
            correct: 0,
            explanation: "'Impasse' means a deadlock where no progress can be made.",
            topic: "advanced vocabulary"
        },
        {
            question: "_____ the complexity of the issue, a simple solution seems unlikely.",
            options: ["Given", "Giving", "Give", "To give"],
            correct: 0,
            explanation: "'Given' here means 'considering' or 'taking into account'.",
            topic: "participle clauses"
        }
    ]
};

// CEFR Level Descriptions
const levelDescriptions = {
    A1: {
        name: "Principiante",
        description: "Riesci a comprendere e utilizzare espressioni familiari di uso quotidiano e frasi molto semplici. Sai presentare te stesso e gli altri e puoi fare e rispondere a domande su dettagli personali.",
        nextSteps: [
            "Impara il vocabolario di base per situazioni quotidiane",
            "Esercitati regolarmente con il presente semplice",
            "Concentrati sulla pronuncia delle parole comuni",
            "Costruisci fiducia nelle conversazioni di base"
        ]
    },
    A2: {
        name: "Elementare",
        description: "Riesci a comprendere frasi ed espressioni di uso frequente relative ad ambiti di immediata rilevanza. Sai comunicare in attività semplici e di routine.",
        nextSteps: [
            "Studia le forme e l'uso del passato",
            "Impara gli aggettivi comparativi e superlativi",
            "Esercitati a descrivere eventi passati",
            "Espandi il vocabolario per hobby e interessi"
        ]
    },
    B1: {
        name: "Intermedio",
        description: "Riesci a comprendere i punti essenziali di messaggi chiari su argomenti familiari. Sai gestire la maggior parte delle situazioni che si possono presentare viaggiando in zone dove si parla la lingua.",
        nextSteps: [
            "Padroneggia le frasi condizionali",
            "Studia le costruzioni passive",
            "Esercitati ad esprimere opinioni e preferenze",
            "Impara i phrasal verbs e gli idiomi"
        ]
    },
    B2: {
        name: "Intermedio Superiore",
        description: "Riesci a comprendere le idee principali di testi complessi su argomenti sia concreti che astratti. Sai interagire con un grado di fluenza e spontaneità.",
        nextSteps: [
            "Perfeziona l'uso dei tempi verbali avanzati",
            "Studia i registri formali e informali",
            "Esercitati con strutture frasali complesse",
            "Sviluppa il vocabolario accademico e professionale"
        ]
    },
    C1: {
        name: "Avanzato",
        description: "Riesci a comprendere un'ampia gamma di testi impegnativi e più lunghi. Sai esprimerti in modo fluente e spontaneo senza dover cercare troppo le espressioni.",
        nextSteps: [
            "Affina l'uso sfumato del linguaggio",
            "Padroneggia le strutture grammaticali avanzate",
            "Sviluppa un vocabolario sofisticato",
            "Esercitati nella scrittura e nel parlato formale"
        ]
    },
    C2: {
        name: "Competente",
        description: "Riesci a comprendere con facilità praticamente tutto ciò che senti o leggi. Sai riassumere informazioni da diverse fonti parlate e scritte, ricostruendo argomentazioni in modo coerente.",
        nextSteps: [
            "Mantieni la lingua attraverso l'uso regolare",
            "Esplora aree di vocabolario specializzato",
            "Esercitati nella scrittura creativa e accademica",
            "Interagisci con contenuti complessi di livello madrelingua"
        ]
    }
};

// Improvement suggestions based on common error patterns
const improvementSuggestions = {
    "verb 'to be'": "Review the forms of 'to be' (am, is, are) and practice with different subjects",
    "present simple third person": "Remember to add 's' or 'es' to verbs with he/she/it in present simple",
    "past simple": "Study irregular verb forms and practice past simple tense formation",
    "comparative adjectives": "Learn the rules for forming comparatives: -er for short adjectives, more + adjective for long ones",
    "past tense of 'to be'": "Practice using 'was' with singular subjects and 'were' with plural subjects",
    "present perfect": "Study the structure 'have/has + past participle' and when to use present perfect",
    "second conditional": "Practice the pattern: If + past simple, would + base verb",
    "passive voice": "Learn when and how to use passive constructions: be + past participle",
    "past perfect": "Study the form 'had + past participle' for actions before other past actions",
    "wish + could": "Practice expressing wishes about abilities: 'I wish I could...'",
    "contrast linking words": "Study the difference between 'despite' + noun and 'although' + clause",
    "future perfect": "Learn 'will have + past participle' for completed future actions",
    "subjunctive after insist": "After verbs like 'insist', 'suggest', 'recommend', use the base form of the verb",
    "would rather + past perfect": "Use 'would rather + past perfect' to express regret about past actions",
    "advanced collocations": "Study common word partnerships and fixed expressions",
    "formal linking expressions": "Learn formal connectors for academic and professional writing",
    "adverb usage": "Practice choosing between adjective and adverb forms",
    "inverted conditionals": "Study formal conditional structures with inversion",
    "intensifiers with infinitive": "Learn patterns like 'too + adjective + to + infinitive'",
    "negative inversion": "Practice inversion after negative words like 'little', 'hardly', 'never'",
    "advanced vocabulary": "Build vocabulary through reading and exposure to formal texts",
    "participle clauses": "Study how to use participles to connect ideas concisely"
};
