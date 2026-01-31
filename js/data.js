const languageData = {

  /* ========================= GERMAN ========================= */

  german: {
    A1: {
      vocabulary: {
        greetings: [
          { target: "Hallo", translation: "Hello" },
          { target: "Guten Morgen", translation: "Good morning" },
          { target: "Guten Tag", translation: "Good day" },
          { target: "Guten Abend", translation: "Good evening" },
          { target: "Gute Nacht", translation: "Good night" },
          { target: "Tschüss", translation: "Bye" },
          { target: "Auf Wiedersehen", translation: "Goodbye" },
          { target: "Danke", translation: "Thank you" },
          { target: "Danke schön", translation: "Thank you very much" },
          { target: "Bitte", translation: "Please / You're welcome" },
          { target: "Entschuldigung", translation: "Excuse me / Sorry" },
          { target: "Wie geht es dir?", translation: "How are you? (informal)" },
          { target: "Wie geht es Ihnen?", translation: "How are you? (formal)" },
          { target: "Mir geht es gut", translation: "I am fine" },
          { target: "Sehr gut", translation: "Very good" },
          { target: "Es tut mir leid", translation: "I'm sorry" },
          { target: "Ja", translation: "Yes" },
          { target: "Nein", translation: "No" },
          { target: "Vielleicht", translation: "Maybe" }
        ],
        family: [
          { target: "die Mutter", translation: "mother" },
          { target: "der Vater", translation: "father" },
          { target: "die Schwester", translation: "sister" },
          { target: "der Bruder", translation: "brother" },
          { target: "die Eltern", translation: "parents" },
          { target: "das Kind", translation: "child" },
          { target: "die Kinder", translation: "children" },
          { target: "der Sohn", translation: "son" },
          { target: "die Tochter", translation: "daughter" },
          { target: "die Großmutter", translation: "grandmother" },
          { target: "der Großvater", translation: "grandfather" },
          { target: "die Großeltern", translation: "grandparents" },
          { target: "die Familie", translation: "family" },
          { target: "der Mann", translation: "man / husband" },
          { target: "die Frau", translation: "woman / wife" }
        ],
        food: [
          { target: "das Brot", translation: "bread" },
          { target: "das Wasser", translation: "water" },
          { target: "der Kaffee", translation: "coffee" },
          { target: "der Tee", translation: "tea" },
          { target: "die Milch", translation: "milk" },
          { target: "der Käse", translation: "cheese" },
          { target: "die Butter", translation: "butter" },
          { target: "das Ei", translation: "egg" },
          { target: "der Apfel", translation: "apple" },
          { target: "die Banane", translation: "banana" },
          { target: "das Fleisch", translation: "meat" },
          { target: "der Fisch", translation: "fish" },
          { target: "der Zucker", translation: "sugar" },
          { target: "das Salz", translation: "salt" },
          { target: "der Reis", translation: "rice" }
        ],
        numbers: [
          { target: "null", translation: "zero" },
          { target: "eins", translation: "one" },
          { target: "zwei", translation: "two" },
          { target: "drei", translation: "three" },
          { target: "vier", translation: "four" },
          { target: "fünf", translation: "five" },
          { target: "sechs", translation: "six" },
          { target: "sieben", translation: "seven" },
          { target: "acht", translation: "eight" },
          { target: "neun", translation: "nine" },
          { target: "zehn", translation: "ten" },
          { target: "zwanzig", translation: "twenty" },
          { target: "hundert", translation: "hundred" }
        ],
        colors: [
          { target: "rot", translation: "red" },
          { target: "blau", translation: "blue" },
          { target: "grün", translation: "green" },
          { target: "gelb", translation: "yellow" },
          { target: "schwarz", translation: "black" },
          { target: "weiß", translation: "white" },
          { target: "grau", translation: "gray" },
          { target: "braun", translation: "brown" }
        ],
        travel: [
          { target: "der Bahnhof", translation: "train station" },
          { target: "der Flughafen", translation: "airport" },
          { target: "das Ticket", translation: "ticket" },
          { target: "der Zug", translation: "train" },
          { target: "das Auto", translation: "car" },
          { target: "der Bus", translation: "bus" },
          { target: "das Hotel", translation: "hotel" },
          { target: "die Straße", translation: "street" },
          { target: "die Stadt", translation: "city" },
          { target: "das Land", translation: "country" },
          { target: "links", translation: "left" },
          { target: "rechts", translation: "right" },
          { target: "geradeaus", translation: "straight ahead" }
        ],
        routine: [
          { target: "aufstehen", translation: "to wake up" },
          { target: "arbeiten", translation: "to work" },
          { target: "lernen", translation: "to study" },
          { target: "essen", translation: "to eat" },
          { target: "trinken", translation: "to drink" },
          { target: "schlafen", translation: "to sleep" },
          { target: "gehen", translation: "to go" },
          { target: "kommen", translation: "to come" },
          { target: "machen", translation: "to do / to make" },
          { target: "haben", translation: "to have" },
          { target: "sein", translation: "to be" },
          { target: "sprechen", translation: "to speak" },
          { target: "lesen", translation: "to read" },
          { target: "schreiben", translation: "to write" }
        ],
        time: [
          { target: "heute", translation: "today" },
          { target: "gestern", translation: "yesterday" },
          { target: "morgen", translation: "tomorrow" },
          { target: "die Woche", translation: "week" },
          { target: "der Monat", translation: "month" },
          { target: "das Jahr", translation: "year" },
          { target: "die Stunde", translation: "hour" },
          { target: "die Minute", translation: "minute" }
        ]
      },

      grammar: {
        articles: "German has three genders: masculine (der), feminine (die), and neuter (das). The plural for all genders is 'die'. Example: der Mann (the man), die Frau (the woman), das Kind (the child), die Kinder (the children).",
        pronouns: "Personal pronouns: ich (I), du (you-informal), er (he), sie (she), es (it), wir (we), ihr (you-plural), sie/Sie (they/you-formal). Example: Ich bin Student. Du bist nett.",
        structure: "In German, the verb is always in the second position in a statement. Example: Ich lerne Deutsch. Heute lerne ich Deutsch. The subject and verb can switch positions.",
        questions: "W-questions begin with question words: Wer (who), Was (what), Wo (where), Wann (when), Warum (why), Wie (how). Example: Wo ist der Bahnhof? Wann kommst du?",
        prepositions: "Common prepositions: in (in), auf (on), unter (under), neben (next to), mit (with), zu (to), von (from). Example: Ich bin in der Schule. Das Buch ist auf dem Tisch.",
        wordOrder: "Basic sentence structure: Subject + Verb + Object. Example: Ich trinke Wasser. (I drink water). Time phrases often come before place.",
        negation: "Use 'nicht' to negate verbs and 'kein' to negate nouns. Example: Ich spreche nicht Englisch. Ich habe kein Auto."
      },

      tenses: {
        present: "Ich lerne Deutsch. (I learn/am learning German.) | Du arbeitest heute. (You work today.) | Er spricht gut. (He speaks well.)",
        past: "Ich lernte Deutsch. (I learned German.) - This is simple past, less common in spoken German.",
        perfect: "Ich habe Deutsch gelernt. (I have learned German.) - Most common past tense in conversation. | Ich bin nach Berlin gefahren. (I went to Berlin.)",
        future: "Ich werde Deutsch lernen. (I will learn German.) | Wir werden morgen kommen. (We will come tomorrow.)"
      },

      phrases: [
        { target: "Ich heiße...", translation: "My name is..." },
        { target: "Ich komme aus...", translation: "I come from..." },
        { target: "Ich wohne in...", translation: "I live in..." },
        { target: "Wie viel kostet das?", translation: "How much does this cost?" },
        { target: "Wo ist...?", translation: "Where is...?" },
        { target: "Ich verstehe nicht", translation: "I don't understand" },
        { target: "Sprechen Sie Englisch?", translation: "Do you speak English?" }
      ]
    },

    A2: {
      vocabulary: {
        greetings: [
          { target: "Schön dich zu sehen", translation: "Nice to see you" },
          { target: "Bis bald", translation: "See you soon" },
          { target: "Bis morgen", translation: "See you tomorrow" },
          { target: "Schönes Wochenende", translation: "Have a nice weekend" },
          { target: "Viel Glück", translation: "Good luck" },
          { target: "Herzlich willkommen", translation: "Welcome" },
          { target: "Frohe Weihnachten", translation: "Merry Christmas" },
          { target: "Frohes neues Jahr", translation: "Happy New Year" }
        ],
        family: [
          { target: "der Onkel", translation: "uncle" },
          { target: "die Tante", translation: "aunt" },
          { target: "der Cousin", translation: "cousin (male)" },
          { target: "die Cousine", translation: "cousin (female)" },
          { target: "der Neffe", translation: "nephew" },
          { target: "die Nichte", translation: "niece" },
          { target: "der Enkel", translation: "grandson" },
          { target: "die Enkelin", translation: "granddaughter" },
          { target: "verheiratet", translation: "married" },
          { target: "ledig", translation: "single" }
        ],
        food: [
          { target: "das Gemüse", translation: "vegetables" },
          { target: "das Obst", translation: "fruit" },
          { target: "die Tomate", translation: "tomato" },
          { target: "die Kartoffel", translation: "potato" },
          { target: "das Hähnchen", translation: "chicken" },
          { target: "die Wurst", translation: "sausage" },
          { target: "die Suppe", translation: "soup" },
          { target: "der Salat", translation: "salad" },
          { target: "das Dessert", translation: "dessert" },
          { target: "die Schokolade", translation: "chocolate" },
          { target: "lecker", translation: "delicious" },
          { target: "frisch", translation: "fresh" }
        ],
        travel: [
          { target: "reisen", translation: "to travel" },
          { target: "buchen", translation: "to book" },
          { target: "die Reise", translation: "trip / journey" },
          { target: "der Urlaub", translation: "vacation" },
          { target: "das Gepäck", translation: "luggage" },
          { target: "der Koffer", translation: "suitcase" },
          { target: "die Fahrkarte", translation: "ticket (for transport)" },
          { target: "abfahren", translation: "to depart" },
          { target: "ankommen", translation: "to arrive" },
          { target: "umsteigen", translation: "to change (trains/buses)" },
          { target: "die Unterkunft", translation: "accommodation" }
        ],
        routine: [
          { target: "fernsehen", translation: "to watch TV" },
          { target: "einkaufen", translation: "to shop" },
          { target: "putzen", translation: "to clean" },
          { target: "kochen", translation: "to cook" },
          { target: "spazieren gehen", translation: "to go for a walk" },
          { target: "Sport treiben", translation: "to do sports" },
          { target: "sich duschen", translation: "to shower" },
          { target: "sich anziehen", translation: "to get dressed" },
          { target: "frühstücken", translation: "to have breakfast" },
          { target: "aufräumen", translation: "to tidy up" }
        ],
        work: [
          { target: "der Beruf", translation: "profession" },
          { target: "der Lehrer", translation: "teacher (male)" },
          { target: "die Lehrerin", translation: "teacher (female)" },
          { target: "der Arzt", translation: "doctor (male)" },
          { target: "die Ärztin", translation: "doctor (female)" },
          { target: "das Büro", translation: "office" },
          { target: "die Firma", translation: "company" },
          { target: "der Kollege", translation: "colleague (male)" },
          { target: "die Kollegin", translation: "colleague (female)" }
        ],
        weather: [
          { target: "das Wetter", translation: "weather" },
          { target: "die Sonne", translation: "sun" },
          { target: "der Regen", translation: "rain" },
          { target: "der Schnee", translation: "snow" },
          { target: "der Wind", translation: "wind" },
          { target: "warm", translation: "warm" },
          { target: "kalt", translation: "cold" },
          { target: "heiß", translation: "hot" }
        ]
      },

      grammar: {
        articles: "Accusative case: den (masculine), die (feminine), das (neuter), die (plural). Dative case: dem (masculine/neuter), der (feminine), den (plural). Example: Ich sehe den Mann (accusative). Ich gebe dem Mann das Buch (dative).",
        pronouns: "Possessive pronouns: mein (my), dein (your), sein (his), ihr (her), unser (our), euer (your-plural), ihr/Ihr (their/your-formal). They must match gender and case. Example: mein Vater, meine Mutter, mein Kind.",
        structure: "Separable verbs: prefix goes to the end in present tense. Example: aufstehen → Ich stehe um 7 Uhr auf. (I get up at 7 o'clock). Common separable verbs: anfangen (to start), mitkommen (to come along), zurückkommen (to come back).",
        questions: "Yes/No questions start with the verb. Example: Kommst du morgen? (Are you coming tomorrow?) Hast du Zeit? (Do you have time?) In subordinate clauses, the verb goes to the end.",
        prepositions: "Two-way prepositions (can take accusative or dative): an, auf, hinter, in, neben, über, unter, vor, zwischen. Use accusative for movement, dative for location. Example: Ich gehe in die Schule (accusative - movement). Ich bin in der Schule (dative - location).",
        modalVerbs: "Modal verbs: können (can), müssen (must), wollen (want to), sollen (should), dürfen (may), mögen (like). Structure: modal verb + infinitive at end. Example: Ich kann Deutsch sprechen. Du musst lernen.",
        comparatives: "Comparative: add -er. Superlative: add -ste/-sten. Example: klein (small), kleiner (smaller), am kleinsten (smallest). Irregular: gut (good), besser (better), am besten (best)."
      },

      tenses: {
        present: "Er arbeitet heute. (He works today.) | Sie kauft ein. (She shops.) | Wir fahren nach Berlin. (We drive to Berlin.)",
        past: "Er arbeitete gestern. (He worked yesterday.) - Simple past, mainly used in writing.",
        perfect: "Er hat gearbeitet. (He has worked.) | Ich bin gestern angekommen. (I arrived yesterday.) - Use 'sein' with verbs of movement and change.",
        future: "Er wird arbeiten. (He will work.) | Ich werde morgen einkaufen gehen. (I will go shopping tomorrow.) | Sie wird nächste Woche reisen. (She will travel next week.)"
      },

      phrases: [
        { target: "Kannst du mir helfen?", translation: "Can you help me?" },
        { target: "Ich hätte gern...", translation: "I would like..." },
        { target: "Es macht nichts", translation: "It doesn't matter" },
        { target: "Viel Spaß!", translation: "Have fun!" },
        { target: "Gute Besserung!", translation: "Get well soon!" },
        { target: "Was meinst du?", translation: "What do you think?" },
        { target: "Ich bin einverstanden", translation: "I agree" },
        { target: "Das stimmt", translation: "That's correct" }
      ]
    },

    B1: {
      vocabulary: {
        greetings: [
          { target: "Lange nicht gesehen", translation: "Long time no see" },
          { target: "Wie geht's dir denn so?", translation: "How have you been?" },
          { target: "Freut mich, Sie kennenzulernen", translation: "Pleased to meet you (formal)" },
          { target: "Grüß dich!", translation: "Greetings! (informal)" }
        ],
        family: [
          { target: "der Schwager", translation: "brother-in-law" },
          { target: "die Schwägerin", translation: "sister-in-law" },
          { target: "der Schwiegervater", translation: "father-in-law" },
          { target: "die Schwiegermutter", translation: "mother-in-law" },
          { target: "die Verwandten", translation: "relatives" },
          { target: "der Stammbaum", translation: "family tree" }
        ],
        food: [
          { target: "das Gericht", translation: "dish" },
          { target: "die Hauptspeise", translation: "main course" },
          { target: "die Vorspeise", translation: "appetizer" },
          { target: "die Beilage", translation: "side dish" },
          { target: "die Zutat", translation: "ingredient" },
          { target: "das Rezept", translation: "recipe" },
          { target: "scharf", translation: "spicy" },
          { target: "mild", translation: "mild" },
          { target: "vegetarisch", translation: "vegetarian" },
          { target: "biologisch", translation: "organic" }
        ],
        travel: [
          { target: "der Ausflug", translation: "excursion" },
          { target: "die Rundreise", translation: "round trip" },
          { target: "die Sehenswürdigkeit", translation: "sight / attraction" },
          { target: "die Grenze", translation: "border" },
          { target: "der Pass", translation: "passport" },
          { target: "das Visum", translation: "visa" },
          { target: "die Verspätung", translation: "delay" },
          { target: "stornieren", translation: "to cancel" },
          { target: "verschieben", translation: "to postpone" }
        ],
        routine: [
          { target: "sich entspannen", translation: "to relax" },
          { target: "sich beeilen", translation: "to hurry" },
          { target: "sich vorbereiten", translation: "to prepare oneself" },
          { target: "sich entscheiden", translation: "to decide" },
          { target: "sich treffen", translation: "to meet up" },
          { target: "sich unterhalten", translation: "to converse" }
        ],
        emotions: [
          { target: "glücklich", translation: "happy" },
          { target: "traurig", translation: "sad" },
          { target: "ängstlich", translation: "anxious" },
          { target: "aufgeregt", translation: "excited" },
          { target: "enttäuscht", translation: "disappointed" },
          { target: "stolz", translation: "proud" },
          { target: "erleichtert", translation: "relieved" },
          { target: "überrascht", translation: "surprised" }
        ],
        abstract: [
          { target: "die Meinung", translation: "opinion" },
          { target: "die Erfahrung", translation: "experience" },
          { target: "die Entscheidung", translation: "decision" },
          { target: "die Möglichkeit", translation: "possibility" },
          { target: "die Gelegenheit", translation: "opportunity" },
          { target: "der Unterschied", translation: "difference" },
          { target: "die Ähnlichkeit", translation: "similarity" }
        ]
      },

      grammar: {
        articles: "Genitive case shows possession: des (masculine/neuter), der (feminine/plural). Example: Das Auto des Mannes (The man's car). Der Name der Frau (The woman's name). Common genitive prepositions: wegen (because of), trotz (despite), während (during), statt (instead of).",
        pronouns: "Relative pronouns introduce subordinate clauses: der, die, das (who, which, that). They match the gender and number of the noun they refer to. Example: Der Mann, der dort steht (The man who stands there). Die Frau, die ich kenne (The woman whom I know).",
        structure: "Subordinate clauses send the verb to the end. Conjunctions: dass (that), weil (because), obwohl (although), wenn (if/when), als (when - past). Example: Ich weiß, dass er morgen kommt. Ich lerne Deutsch, weil es wichtig ist.",
        questions: "Indirect questions: verb goes to end. Example: Ich weiß nicht, wo er wohnt. (I don't know where he lives.) Kannst du mir sagen, wann der Zug kommt? (Can you tell me when the train comes?)",
        prepositions: "Genitive prepositions: wegen (because of), trotz (despite), während (during), innerhalb (within), außerhalb (outside of). Example: Wegen des Regens bleibe ich zu Hause. (Because of the rain, I'm staying home.) Trotz der Kälte gehe ich spazieren.",
        passiveVoice: "Passive: werden + past participle. Present: Das Haus wird gebaut. (The house is being built.) Past: Das Haus wurde gebaut. (The house was built.) Perfect: Das Haus ist gebaut worden.",
        subjunctive: "Konjunktiv II (would/could): ich würde, du würdest, er/sie/es würde, wir würden. Example: Ich würde gern nach Deutschland reisen. (I would like to travel to Germany.) Common irregular forms: wäre (would be), hätte (would have), könnte (could), sollte (should)."
      },

      tenses: {
        present: "Ich verstehe den Text. (I understand the text.) | Er arbeitet seit drei Jahren hier. (He has been working here for three years.)",
        past: "Ich verstand den Text. (I understood the text.) - Simple past, used more in B1 level writing.",
        perfect: "Ich habe den Text verstanden. (I have understood the text.) | Sie ist schon nach Hause gegangen. (She has already gone home.)",
        future: "Ich werde den Text verstehen. (I will understand the text.) | Er wird nächstes Jahr studieren. (He will study next year.)",
        pluperfect: "Ich hatte den Text schon verstanden, bevor du kamst. (I had already understood the text before you came.) | Nachdem sie gegessen hatte, ging sie spazieren."
      },

      phrases: [
        { target: "Meiner Meinung nach...", translation: "In my opinion..." },
        { target: "Ich bin der Ansicht, dass...", translation: "I am of the opinion that..." },
        { target: "Einerseits... andererseits...", translation: "On one hand... on the other hand..." },
        { target: "Es hängt davon ab", translation: "It depends" },
        { target: "Im Gegensatz zu...", translation: "In contrast to..." },
        { target: "Das kommt darauf an", translation: "That depends" },
        { target: "Soweit ich weiß", translation: "As far as I know" },
        { target: "Es lohnt sich", translation: "It's worth it" }
      ]
    }
  },

  /* ========================= FRENCH ========================= */

  french: {
    A1: {
      vocabulary: {
        greetings: [
          { target: "Bonjour", translation: "Hello / Good morning" },
          { target: "Bonsoir", translation: "Good evening" },
          { target: "Bonne nuit", translation: "Good night" },
          { target: "Salut", translation: "Hi / Bye (informal)" },
          { target: "Au revoir", translation: "Goodbye" },
          { target: "Merci", translation: "Thank you" },
          { target: "Merci beaucoup", translation: "Thank you very much" },
          { target: "De rien", translation: "You're welcome" },
          { target: "S'il vous plaît", translation: "Please (formal)" },
          { target: "S'il te plaît", translation: "Please (informal)" },
          { target: "Excusez-moi", translation: "Excuse me (formal)" },
          { target: "Pardon", translation: "Sorry" },
          { target: "Comment allez-vous?", translation: "How are you? (formal)" },
          { target: "Comment vas-tu?", translation: "How are you? (informal)" },
          { target: "Ça va?", translation: "How are you? (casual)" },
          { target: "Ça va bien", translation: "I'm fine" },
          { target: "Oui", translation: "Yes" },
          { target: "Non", translation: "No" },
          { target: "Peut-être", translation: "Maybe" }
        ],
        family: [
          { target: "la mère", translation: "mother" },
          { target: "le père", translation: "father" },
          { target: "la sœur", translation: "sister" },
          { target: "le frère", translation: "brother" },
          { target: "les parents", translation: "parents" },
          { target: "l'enfant", translation: "child" },
          { target: "les enfants", translation: "children" },
          { target: "le fils", translation: "son" },
          { target: "la fille", translation: "daughter" },
          { target: "la grand-mère", translation: "grandmother" },
          { target: "le grand-père", translation: "grandfather" },
          { target: "les grands-parents", translation: "grandparents" },
          { target: "la famille", translation: "family" },
          { target: "le mari", translation: "husband" },
          { target: "la femme", translation: "wife" }
        ],
        food: [
          { target: "le pain", translation: "bread" },
          { target: "l'eau", translation: "water" },
          { target: "le café", translation: "coffee" },
          { target: "le thé", translation: "tea" },
          { target: "le lait", translation: "milk" },
          { target: "le fromage", translation: "cheese" },
          { target: "le beurre", translation: "butter" },
          { target: "l'œuf", translation: "egg" },
          { target: "la pomme", translation: "apple" },
          { target: "la banane", translation: "banana" },
          { target: "la viande", translation: "meat" },
          { target: "le poisson", translation: "fish" },
          { target: "le sucre", translation: "sugar" },
          { target: "le sel", translation: "salt" },
          { target: "le riz", translation: "rice" }
        ],
        numbers: [
          { target: "zéro", translation: "zero" },
          { target: "un", translation: "one" },
          { target: "deux", translation: "two" },
          { target: "trois", translation: "three" },
          { target: "quatre", translation: "four" },
          { target: "cinq", translation: "five" },
          { target: "six", translation: "six" },
          { target: "sept", translation: "seven" },
          { target: "huit", translation: "eight" },
          { target: "neuf", translation: "nine" },
          { target: "dix", translation: "ten" },
          { target: "vingt", translation: "twenty" },
          { target: "cent", translation: "hundred" }
        ],
        colors: [
          { target: "rouge", translation: "red" },
          { target: "bleu", translation: "blue" },
          { target: "vert", translation: "green" },
          { target: "jaune", translation: "yellow" },
          { target: "noir", translation: "black" },
          { target: "blanc", translation: "white" },
          { target: "gris", translation: "gray" },
          { target: "marron", translation: "brown" }
        ],
        travel: [
          { target: "la gare", translation: "train station" },
          { target: "l'aéroport", translation: "airport" },
          { target: "le billet", translation: "ticket" },
          { target: "le train", translation: "train" },
          { target: "la voiture", translation: "car" },
          { target: "le bus", translation: "bus" },
          { target: "l'hôtel", translation: "hotel" },
          { target: "la rue", translation: "street" },
          { target: "la ville", translation: "city" },
          { target: "le pays", translation: "country" },
          { target: "à gauche", translation: "left" },
          { target: "à droite", translation: "right" },
          { target: "tout droit", translation: "straight ahead" }
        ],
        routine: [
          { target: "travailler", translation: "to work" },
          { target: "étudier", translation: "to study" },
          { target: "manger", translation: "to eat" },
          { target: "boire", translation: "to drink" },
          { target: "dormir", translation: "to sleep" },
          { target: "aller", translation: "to go" },
          { target: "venir", translation: "to come" },
          { target: "faire", translation: "to do / to make" },
          { target: "avoir", translation: "to have" },
          { target: "être", translation: "to be" },
          { target: "parler", translation: "to speak" },
          { target: "lire", translation: "to read" },
          { target: "écrire", translation: "to write" }
        ],
        time: [
          { target: "aujourd'hui", translation: "today" },
          { target: "hier", translation: "yesterday" },
          { target: "demain", translation: "tomorrow" },
          { target: "la semaine", translation: "week" },
          { target: "le mois", translation: "month" },
          { target: "l'année", translation: "year" },
          { target: "l'heure", translation: "hour" },
          { target: "la minute", translation: "minute" }
        ]
      },

      grammar: {
        articles: "Definite articles: le (masculine), la (feminine), l' (before vowel), les (plural). Indefinite articles: un (masculine), une (feminine), des (plural). Example: le garçon (the boy), la fille (the girl), les enfants (the children), un livre (a book), une table (a table).",
        pronouns: "Subject pronouns: je (I), tu (you-informal), il (he), elle (she), nous (we), vous (you-formal/plural), ils (they-masculine), elles (they-feminine). Example: Je suis étudiant. Tu es français. Il est grand.",
        structure: "Basic sentence structure: Subject + Verb + Object. Example: Je parle français. (I speak French.) Marie mange une pomme. (Marie eats an apple.) Word order is generally more fixed than in German.",
        questions: "Questions with est-ce que: Est-ce que tu parles français? (Do you speak French?) Question words: Où (where), Quand (when), Pourquoi (why), Comment (how), Qui (who), Que/Quoi (what). Example: Où est la gare?",
        prepositions: "Common prepositions: à (to, at), de (of, from), avec (with), pour (for), dans (in), sur (on), sous (under). Contractions: à + le = au, à + les = aux, de + le = du, de + les = des. Example: Je vais au cinéma. (I'm going to the cinema.)",
        verbConjugation: "Regular -er verbs (parler): je parle, tu parles, il/elle parle, nous parlons, vous parlez, ils/elles parlent. Regular -ir verbs (finir): je finis, tu finis, il/elle finit, nous finissons, vous finissez, ils/elles finissent.",
        negation: "Use ne...pas around the verb. Example: Je ne parle pas anglais. (I don't speak English.) Je n'ai pas de voiture. (I don't have a car.) In spoken French, 'ne' is often dropped."
      },

      tenses: {
        present: "Je parle français. (I speak French.) | Tu manges une pomme. (You eat an apple.) | Il travaille ici. (He works here.)",
        past: "J'ai parlé français. (I spoke French.) - Passé composé is the most common past tense in conversation.",
        perfect: "J'ai parlé français. (I have spoken French.) | Je suis allé à Paris. (I went to Paris.) - Use être with movement verbs.",
        future: "Je parlerai français. (I will speak French.) | Nous irons à Paris. (We will go to Paris.) | Near future: Je vais parler. (I'm going to speak.)"
      },

      phrases: [
        { target: "Je m'appelle...", translation: "My name is..." },
        { target: "Je viens de...", translation: "I come from..." },
        { target: "J'habite à...", translation: "I live in..." },
        { target: "Combien ça coûte?", translation: "How much does it cost?" },
        { target: "Où est...?", translation: "Where is...?" },
        { target: "Je ne comprends pas", translation: "I don't understand" },
        { target: "Parlez-vous anglais?", translation: "Do you speak English?" }
      ]
    },

    A2: {
      vocabulary: {
        greetings: [
          { target: "Enchanté(e)", translation: "Pleased to meet you" },
          { target: "Ça va?", translation: "How's it going?" },
          { target: "À bientôt", translation: "See you soon" },
          { target: "À demain", translation: "See you tomorrow" },
          { target: "Bon week-end", translation: "Have a nice weekend" },
          { target: "Bonne chance", translation: "Good luck" },
          { target: "Bienvenue", translation: "Welcome" },
          { target: "Joyeux Noël", translation: "Merry Christmas" },
          { target: "Bonne année", translation: "Happy New Year" }
        ],
        family: [
          { target: "le cousin", translation: "cousin (male)" },
          { target: "la cousine", translation: "cousin (female)" },
          { target: "la tante", translation: "aunt" },
          { target: "l'oncle", translation: "uncle" },
          { target: "le neveu", translation: "nephew" },
          { target: "la nièce", translation: "niece" },
          { target: "le petit-fils", translation: "grandson" },
          { target: "la petite-fille", translation: "granddaughter" },
          { target: "marié(e)", translation: "married" },
          { target: "célibataire", translation: "single" }
        ],
        food: [
          { target: "les légumes", translation: "vegetables" },
          { target: "les fruits", translation: "fruits" },
          { target: "le fromage", translation: "cheese" },
          { target: "la tomate", translation: "tomato" },
          { target: "la pomme de terre", translation: "potato" },
          { target: "le poulet", translation: "chicken" },
          { target: "la saucisse", translation: "sausage" },
          { target: "la soupe", translation: "soup" },
          { target: "la salade", translation: "salad" },
          { target: "le dessert", translation: "dessert" },
          { target: "le chocolat", translation: "chocolate" },
          { target: "délicieux", translation: "delicious" },
          { target: "frais", translation: "fresh" }
        ],
        travel: [
          { target: "réserver", translation: "to book" },
          { target: "voyager", translation: "to travel" },
          { target: "le billet", translation: "ticket" },
          { target: "le voyage", translation: "trip / journey" },
          { target: "les vacances", translation: "vacation" },
          { target: "les bagages", translation: "luggage" },
          { target: "la valise", translation: "suitcase" },
          { target: "partir", translation: "to leave / depart" },
          { target: "arriver", translation: "to arrive" },
          { target: "le logement", translation: "accommodation" },
          { target: "la chambre", translation: "room" }
        ],
        routine: [
          { target: "se lever", translation: "to wake up / get up" },
          { target: "faire les courses", translation: "to do shopping" },
          { target: "regarder la télé", translation: "to watch TV" },
          { target: "nettoyer", translation: "to clean" },
          { target: "cuisiner", translation: "to cook" },
          { target: "se promener", translation: "to go for a walk" },
          { target: "faire du sport", translation: "to do sports" },
          { target: "se doucher", translation: "to shower" },
          { target: "s'habiller", translation: "to get dressed" },
          { target: "prendre le petit-déjeuner", translation: "to have breakfast" }
        ],
        work: [
          { target: "le métier", translation: "profession" },
          { target: "le professeur", translation: "teacher" },
          { target: "le médecin", translation: "doctor" },
          { target: "l'infirmier/l'infirmière", translation: "nurse" },
          { target: "le bureau", translation: "office" },
          { target: "l'entreprise", translation: "company" },
          { target: "le collègue", translation: "colleague" },
          { target: "le patron", translation: "boss" }
        ],
        weather: [
          { target: "le temps", translation: "weather" },
          { target: "le soleil", translation: "sun" },
          { target: "la pluie", translation: "rain" },
          { target: "la neige", translation: "snow" },
          { target: "le vent", translation: "wind" },
          { target: "chaud", translation: "hot / warm" },
          { target: "froid", translation: "cold" },
          { target: "Il fait beau", translation: "The weather is nice" },
          { target: "Il pleut", translation: "It's raining" }
        ]
      },

      grammar: {
        articles: "Partitive articles (some/any): du (masculine), de la (feminine), de l' (before vowel), des (plural). Example: Je mange du pain. (I eat some bread.) Elle boit de l'eau. (She drinks some water.) After negation: Je ne mange pas de pain.",
        pronouns: "Possessive adjectives: mon/ma/mes (my), ton/ta/tes (your), son/sa/ses (his/her), notre/nos (our), votre/vos (your-formal), leur/leurs (their). They agree with the possessed object. Example: mon père, ma mère, mes parents.",
        structure: "Reflexive verbs use reflexive pronouns: me, te, se, nous, vous, se. Example: Je me lave. (I wash myself.) Tu te lèves. (You get up.) Ils se parlent. (They talk to each other.)",
        questions: "Inversion: verb and subject pronoun switch places. Example: Parles-tu français? (Do you speak French?) Où vas-tu? (Where are you going?) With third person: Mange-t-il? (Does he eat?) - 't' added for pronunciation.",
        prepositions: "Prepositions: chez (at someone's place), pour (for), sans (without), vers (toward), depuis (since/for). Example: Je vais chez Marie. (I'm going to Marie's place.) J'habite ici depuis 5 ans. (I've lived here for 5 years.)",
        comparatives: "Comparative: plus...que (more...than), moins...que (less...than), aussi...que (as...as). Superlative: le/la plus (the most), le/la moins (the least). Example: Paris est plus grand que Lyon. C'est la plus belle ville.",
        pronounObjects: "Direct object pronouns: me, te, le/la, nous, vous, les. Indirect: me, te, lui, nous, vous, leur. Placement: before verb. Example: Je le vois. (I see him.) Je lui parle. (I speak to him/her.)"
      },

      tenses: {
        present: "Je me lève tôt. (I get up early.) | Nous allons au cinéma. (We go to the cinema.) | Elle fait ses devoirs. (She does her homework.)",
        past: "Je me suis levé tôt. (I got up early.) | Nous sommes allés au cinéma. (We went to the cinema.) - Passé composé with reflexive verbs uses être.",
        perfect: "J'ai fini le travail. (I have finished the work.) | Ils ont mangé au restaurant. (They ate at the restaurant.)",
        future: "Je vais voyager demain. (I'm going to travel tomorrow.) - Near future (aller + infinitive) | Je voyagerai l'année prochaine. (I will travel next year.) - Simple future."
      },

      phrases: [
        { target: "Pouvez-vous m'aider?", translation: "Can you help me?" },
        { target: "Je voudrais...", translation: "I would like..." },
        { target: "Ce n'est pas grave", translation: "It doesn't matter" },
        { target: "Amusez-vous bien!", translation: "Have fun!" },
        { target: "Bon rétablissement!", translation: "Get well soon!" },
        { target: "Qu'en penses-tu?", translation: "What do you think?" },
        { target: "Je suis d'accord", translation: "I agree" },
        { target: "C'est vrai", translation: "That's true" }
      ]
    },

    B1: {
      vocabulary: {
        greetings: [
          { target: "Ça fait longtemps", translation: "Long time no see" },
          { target: "Comment ça se passe?", translation: "How's it going?" },
          { target: "Ravi(e) de vous rencontrer", translation: "Delighted to meet you" },
          { target: "Félicitations!", translation: "Congratulations!" }
        ],
        family: [
          { target: "le beau-frère", translation: "brother-in-law" },
          { target: "la belle-sœur", translation: "sister-in-law" },
          { target: "le beau-père", translation: "father-in-law / stepfather" },
          { target: "la belle-mère", translation: "mother-in-law / stepmother" },
          { target: "les proches", translation: "close relatives" },
          { target: "l'arbre généalogique", translation: "family tree" }
        ],
        food: [
          { target: "le plat", translation: "dish" },
          { target: "le plat principal", translation: "main course" },
          { target: "l'entrée", translation: "appetizer / starter" },
          { target: "l'accompagnement", translation: "side dish" },
          { target: "l'ingrédient", translation: "ingredient" },
          { target: "la recette", translation: "recipe" },
          { target: "épicé", translation: "spicy" },
          { target: "doux", translation: "mild / sweet" },
          { target: "végétarien", translation: "vegetarian" },
          { target: "bio", translation: "organic" }
        ],
        travel: [
          { target: "le retard", translation: "delay" },
          { target: "l'excursion", translation: "excursion" },
          { target: "le circuit", translation: "tour / round trip" },
          { target: "le monument", translation: "monument" },
          { target: "la frontière", translation: "border" },
          { target: "le passeport", translation: "passport" },
          { target: "le visa", translation: "visa" },
          { target: "annuler", translation: "to cancel" },
          { target: "reporter", translation: "to postpone" },
          { target: "la destination", translation: "destination" }
        ],
        routine: [
          { target: "se détendre", translation: "to relax" },
          { target: "se dépêcher", translation: "to hurry" },
          { target: "se préparer", translation: "to prepare oneself" },
          { target: "se décider", translation: "to make up one's mind" },
          { target: "se retrouver", translation: "to meet up" },
          { target: "discuter", translation: "to discuss / chat" }
        ],
        emotions: [
          { target: "heureux/heureuse", translation: "happy" },
          { target: "triste", translation: "sad" },
          { target: "anxieux/anxieuse", translation: "anxious" },
          { target: "excité(e)", translation: "excited" },
          { target: "déçu(e)", translation: "disappointed" },
          { target: "fier/fière", translation: "proud" },
          { target: "soulagé(e)", translation: "relieved" },
          { target: "surpris(e)", translation: "surprised" }
        ],
        abstract: [
          { target: "l'opinion", translation: "opinion" },
          { target: "l'expérience", translation: "experience" },
          { target: "la décision", translation: "decision" },
          { target: "la possibilité", translation: "possibility" },
          { target: "l'occasion", translation: "opportunity" },
          { target: "la différence", translation: "difference" },
          { target: "la ressemblance", translation: "similarity" }
        ]
      },

      grammar: {
        articles: "Definite vs indefinite article usage: Use definite articles (le, la, les) for general statements and preferences. Example: J'aime le chocolat. (I like chocolate - in general.) Use indefinite/partitive for specific quantities. Omission of articles with professions: Il est médecin. (He is a doctor.)",
        pronouns: "Relative pronouns introduce subordinate clauses: qui (who, which - subject), que (whom, which - object), dont (whose, of which), où (where, when). Example: La femme qui parle est ma mère. (The woman who is speaking is my mother.) Le livre que je lis est intéressant.",
        structure: "Subordinate clauses with conjunctions: que (that), parce que (because), bien que (although - requires subjunctive), si (if), quand (when). Verb placement varies. Example: Je pense qu'il viendra. (I think that he will come.) Je reste chez moi parce qu'il pleut.",
        questions: "Indirect questions: Question word + subject + verb. Example: Je ne sais pas où il habite. (I don't know where he lives.) Peux-tu me dire quand le train arrive? (Can you tell me when the train arrives?)",
        prepositions: "Complex prepositions: malgré (despite), pendant (during), depuis (since/for), grâce à (thanks to), à cause de (because of). Example: Malgré la pluie, je sors. (Despite the rain, I'm going out.) Je travaille ici depuis 3 ans.",
        subjunctive: "Subjunctive mood (le subjonctif) is used after expressions of desire, doubt, emotion: il faut que, je veux que, je doute que, bien que. Formation: que + stem from ils form + endings (-e, -es, -e, -ions, -iez, -ent). Example: Il faut que tu viennes. (You must come.)",
        conditionalMood: "Conditional (le conditionnel) expresses hypothetical situations, politeness: Future stem + imperfect endings. Example: Je voudrais un café. (I would like a coffee.) Si j'avais de l'argent, j'achèterais une maison. (If I had money, I would buy a house.)"
      },

      tenses: {
        present: "Je comprends le texte. (I understand the text.) | Nous travaillons ensemble depuis 5 ans. (We've been working together for 5 years.)",
        past: "Je comprenais le texte. (I understood/was understanding the text.) - Imparfait for ongoing past actions or descriptions.",
        perfect: "J'ai compris le texte. (I understood the text.) | Elle est partie hier. (She left yesterday.) - Passé composé for completed actions.",
        future: "Je comprendrai le texte. (I will understand the text.) | Nous partirons demain. (We will leave tomorrow.) - Simple future.",
        pluperfect: "J'avais compris le texte avant l'examen. (I had understood the text before the exam.) | Quand je suis arrivé, ils étaient déjà partis. (When I arrived, they had already left.)"
      },

      phrases: [
        { target: "À mon avis...", translation: "In my opinion..." },
        { target: "Je pense que...", translation: "I think that..." },
        { target: "D'une part... d'autre part...", translation: "On one hand... on the other hand..." },
        { target: "Ça dépend", translation: "It depends" },
        { target: "Par rapport à...", translation: "Compared to..." },
        { target: "Autant que je sache", translation: "As far as I know" },
        { target: "Ça vaut la peine", translation: "It's worth it" },
        { target: "En tout cas", translation: "In any case" }
      ]
    }
  },

  /* ========================= ITALIAN ========================= */

  italian: {
    A1: {
      vocabulary: {
        greetings: [
          { target: "Ciao", translation: "Hi / Bye (informal)" },
          { target: "Buongiorno", translation: "Good morning / Good day" },
          { target: "Buonasera", translation: "Good evening" },
          { target: "Buonanotte", translation: "Good night" },
          { target: "Arrivederci", translation: "Goodbye (formal)" },
          { target: "Grazie", translation: "Thank you" },
          { target: "Grazie mille", translation: "Thank you very much" },
          { target: "Prego", translation: "You're welcome / Please" },
          { target: "Per favore", translation: "Please" },
          { target: "Scusa", translation: "Excuse me / Sorry (informal)" },
          { target: "Scusi", translation: "Excuse me / Sorry (formal)" },
          { target: "Come stai?", translation: "How are you? (informal)" },
          { target: "Come sta?", translation: "How are you? (formal)" },
          { target: "Sto bene", translation: "I'm fine" },
          { target: "Molto bene", translation: "Very well" },
          { target: "Mi dispiace", translation: "I'm sorry" },
          { target: "Sì", translation: "Yes" },
          { target: "No", translation: "No" },
          { target: "Forse", translation: "Maybe" }
        ],
        family: [
          { target: "la madre", translation: "mother" },
          { target: "il padre", translation: "father" },
          { target: "la sorella", translation: "sister" },
          { target: "il fratello", translation: "brother" },
          { target: "i genitori", translation: "parents" },
          { target: "il bambino/la bambina", translation: "child" },
          { target: "i bambini", translation: "children" },
          { target: "il figlio", translation: "son" },
          { target: "la figlia", translation: "daughter" },
          { target: "la nonna", translation: "grandmother" },
          { target: "il nonno", translation: "grandfather" },
          { target: "i nonni", translation: "grandparents" },
          { target: "la famiglia", translation: "family" },
          { target: "il marito", translation: "husband" },
          { target: "la moglie", translation: "wife" }
        ],
        food: [
          { target: "il pane", translation: "bread" },
          { target: "l'acqua", translation: "water" },
          { target: "il caffè", translation: "coffee" },
          { target: "il tè", translation: "tea" },
          { target: "il latte", translation: "milk" },
          { target: "il formaggio", translation: "cheese" },
          { target: "il burro", translation: "butter" },
          { target: "l'uovo", translation: "egg" },
          { target: "la mela", translation: "apple" },
          { target: "la banana", translation: "banana" },
          { target: "la carne", translation: "meat" },
          { target: "il pesce", translation: "fish" },
          { target: "lo zucchero", translation: "sugar" },
          { target: "il sale", translation: "salt" },
          { target: "il riso", translation: "rice" }
        ],
        numbers: [
          { target: "zero", translation: "zero" },
          { target: "uno", translation: "one" },
          { target: "due", translation: "two" },
          { target: "tre", translation: "three" },
          { target: "quattro", translation: "four" },
          { target: "cinque", translation: "five" },
          { target: "sei", translation: "six" },
          { target: "sette", translation: "seven" },
          { target: "otto", translation: "eight" },
          { target: "nove", translation: "nine" },
          { target: "dieci", translation: "ten" },
          { target: "venti", translation: "twenty" },
          { target: "cento", translation: "hundred" }
        ],
        colors: [
          { target: "rosso", translation: "red" },
          { target: "blu", translation: "blue" },
          { target: "verde", translation: "green" },
          { target: "giallo", translation: "yellow" },
          { target: "nero", translation: "black" },
          { target: "bianco", translation: "white" },
          { target: "grigio", translation: "gray" },
          { target: "marrone", translation: "brown" }
        ],
        travel: [
          { target: "la stazione", translation: "train station" },
          { target: "l'aeroporto", translation: "airport" },
          { target: "il biglietto", translation: "ticket" },
          { target: "il treno", translation: "train" },
          { target: "la macchina", translation: "car" },
          { target: "l'autobus", translation: "bus" },
          { target: "l'albergo", translation: "hotel" },
          { target: "la strada", translation: "street / road" },
          { target: "la città", translation: "city" },
          { target: "il paese", translation: "country / town" },
          { target: "a sinistra", translation: "left" },
          { target: "a destra", translation: "right" },
          { target: "dritto", translation: "straight ahead" }
        ],
        routine: [
          { target: "lavorare", translation: "to work" },
          { target: "studiare", translation: "to study" },
          { target: "mangiare", translation: "to eat" },
          { target: "bere", translation: "to drink" },
          { target: "dormire", translation: "to sleep" },
          { target: "andare", translation: "to go" },
          { target: "venire", translation: "to come" },
          { target: "fare", translation: "to do / to make" },
          { target: "avere", translation: "to have" },
          { target: "essere", translation: "to be" },
          { target: "parlare", translation: "to speak" },
          { target: "leggere", translation: "to read" },
          { target: "scrivere", translation: "to write" }
        ],
        time: [
          { target: "oggi", translation: "today" },
          { target: "ieri", translation: "yesterday" },
          { target: "domani", translation: "tomorrow" },
          { target: "la settimana", translation: "week" },
          { target: "il mese", translation: "month" },
          { target: "l'anno", translation: "year" },
          { target: "l'ora", translation: "hour" },
          { target: "il minuto", translation: "minute" }
        ]
      },

      grammar: {
        articles: "Definite articles: il (masculine singular), la (feminine singular), lo (masculine before s+consonant, z, etc.), l' (before vowels), i (masculine plural), le (feminine plural), gli (masculine plural before vowels/special consonants). Indefinite: un, uno, una, un'. Example: il ragazzo, la ragazza, lo studente, gli studenti.",
        pronouns: "Subject pronouns: io (I), tu (you-informal), lui (he), lei (she), noi (we), voi (you-plural), loro (they). Often omitted as verb endings indicate the subject. Example: Io sono italiano. Parlo italiano. (subject pronoun optional)",
        structure: "Basic sentence structure: Subject + Verb + Object. Example: Io parlo italiano. (I speak Italian.) Maria mangia una mela. (Maria eats an apple.) Word order is flexible but SVO is most common.",
        questions: "Questions can be formed with rising intonation (no word change) or with question words: Chi (who), Che/Cosa (what), Dove (where), Quando (when), Perché (why), Come (how), Quanto (how much/many). Example: Parli italiano? Dove vai?",
        prepositions: "Common prepositions: a (to, at), di (of, from), da (from, by), in (in), con (with), su (on), per (for). Combined with articles: di+il=del, a+il=al, in+il=nel, su+il=sul. Example: Vado al cinema. Vengo da Roma.",
        verbConjugation: "Regular -are verbs (parlare): io parlo, tu parli, lui/lei parla, noi parliamo, voi parlate, loro parlano. -ere verbs (credere): credo, credi, crede, crediamo, credete, credono. -ire verbs (dormire): dormo, dormi, dorme, dormiamo, dormite, dormono.",
        negation: "Simply add 'non' before the verb. Example: Non parlo inglese. (I don't speak English.) Non ho una macchina. (I don't have a car.) Very straightforward compared to other languages."
      },

      tenses: {
        present: "Io parlo italiano. (I speak Italian.) | Tu mangi una mela. (You eat an apple.) | Lui lavora qui. (He works here.)",
        past: "Ho parlato italiano. (I spoke Italian.) - Passato prossimo is most common for conversation.",
        perfect: "Ho parlato italiano. (I have spoken Italian.) | Sono andato a Roma. (I went to Rome.) - Use essere with movement/change verbs.",
        future: "Parlerò italiano. (I will speak French.) | Andremo a Milano. (We will go to Milan.) | Informal future: Vado a parlare. (I'm going to speak.)"
      },

      phrases: [
        { target: "Mi chiamo...", translation: "My name is..." },
        { target: "Vengo da...", translation: "I come from..." },
        { target: "Abito a...", translation: "I live in..." },
        { target: "Quanto costa?", translation: "How much does it cost?" },
        { target: "Dov'è...?", translation: "Where is...?" },
        { target: "Non capisco", translation: "I don't understand" },
        { target: "Parla inglese?", translation: "Do you speak English?" }
      ]
    },

    A2: {
      vocabulary: {
        greetings: [
          { target: "Piacere", translation: "Pleased to meet you" },
          { target: "Come va?", translation: "How's it going?" },
          { target: "A presto", translation: "See you soon" },
          { target: "A domani", translation: "See you tomorrow" },
          { target: "Buon fine settimana", translation: "Have a nice weekend" },
          { target: "In bocca al lupo", translation: "Good luck" },
          { target: "Benvenuto/a", translation: "Welcome" },
          { target: "Buon Natale", translation: "Merry Christmas" },
          { target: "Buon anno", translation: "Happy New Year" }
        ],
        family: [
          { target: "il cugino", translation: "cousin (male)" },
          { target: "la cugina", translation: "cousin (female)" },
          { target: "la zia", translation: "aunt" },
          { target: "lo zio", translation: "uncle" },
          { target: "il nipote", translation: "nephew / grandson" },
          { target: "la nipote", translation: "niece / granddaughter" },
          { target: "sposato/a", translation: "married" },
          { target: "single", translation: "single" },
          { target: "divorziato/a", translation: "divorced" }
        ],
        food: [
          { target: "la verdura", translation: "vegetables" },
          { target: "la frutta", translation: "fruit" },
          { target: "il formaggio", translation: "cheese" },
          { target: "il pomodoro", translation: "tomato" },
          { target: "la patata", translation: "potato" },
          { target: "il pollo", translation: "chicken" },
          { target: "la salsiccia", translation: "sausage" },
          { target: "la minestra", translation: "soup" },
          { target: "l'insalata", translation: "salad" },
          { target: "il dolce", translation: "dessert / sweet" },
          { target: "la cioccolata", translation: "chocolate" },
          { target: "delizioso", translation: "delicious" },
          { target: "fresco", translation: "fresh" }
        ],
        travel: [
          { target: "prenotare", translation: "to book" },
          { target: "viaggiare", translation: "to travel" },
          { target: "il biglietto", translation: "ticket" },
          { target: "il viaggio", translation: "trip / journey" },
          { target: "le vacanze", translation: "vacation / holidays" },
          { target: "i bagagli", translation: "luggage" },
          { target: "la valigia", translation: "suitcase" },
          { target: "partire", translation: "to leave / depart" },
          { target: "arrivare", translation: "to arrive" },
          { target: "l'alloggio", translation: "accommodation" },
          { target: "la camera", translation: "room" }
        ],
        routine: [
          { target: "alzarsi", translation: "to wake up / get up" },
          { target: "fare la spesa", translation: "to do grocery shopping" },
          { target: "guardare la TV", translation: "to watch TV" },
          { target: "pulire", translation: "to clean" },
          { target: "cucinare", translation: "to cook" },
          { target: "passeggiare", translation: "to take a walk" },
          { target: "fare sport", translation: "to do sports" },
          { target: "farsi la doccia", translation: "to take a shower" },
          { target: "vestirsi", translation: "to get dressed" },
          { target: "fare colazione", translation: "to have breakfast" }
        ],
        work: [
          { target: "il lavoro", translation: "job / work" },
          { target: "l'insegnante", translation: "teacher" },
          { target: "il medico", translation: "doctor" },
          { target: "l'infermiere/a", translation: "nurse" },
          { target: "l'ufficio", translation: "office" },
          { target: "l'azienda", translation: "company" },
          { target: "il collega", translation: "colleague" },
          { target: "il capo", translation: "boss" }
        ],
        weather: [
          { target: "il tempo", translation: "weather" },
          { target: "il sole", translation: "sun" },
          { target: "la pioggia", translation: "rain" },
          { target: "la neve", translation: "snow" },
          { target: "il vento", translation: "wind" },
          { target: "caldo", translation: "hot / warm" },
          { target: "freddo", translation: "cold" },
          { target: "Fa bel tempo", translation: "The weather is nice" },
          { target: "Piove", translation: "It's raining" }
        ]
      },

      grammar: {
        articles: "Preposizioni articolate (combined prepositions and articles): di+il=del, a+il=al, da+il=dal, in+il=nel, su+il=sul. All combinations exist for all articles. Example: Vengo dal mercato. (I'm coming from the market.) Vado alla stazione. (I'm going to the station.)",
        pronouns: "Possessive adjectives: mio/a/i/e (my), tuo/a/i/e (your), suo/a/i/e (his/her), nostro/a/i/e (our), vostro/a/i/e (your-plural), loro (their). They agree with the possessed object. Example: il mio libro, la mia casa, i miei amici. Exception: no article with singular family members: mio padre.",
        structure: "Reflexive verbs use reflexive pronouns: mi, ti, si, ci, vi, si. Example: Mi alzo alle 7. (I get up at 7.) Ti lavi. (You wash yourself.) Si chiamano. (They call each other.) Common reflexive verbs: svegliarsi, lavarsi, vestirsi.",
        questions: "Question words and structures: Dove (where), Quando (when), Perché (why), Come (how), Quanto (how much/many), Quale (which). Example: Dove vai? (Where are you going?) Quando parti? (When are you leaving?) Perché studi italiano? (Why do you study Italian?)",
        prepositions: "Important prepositions: tra/fra (between, among), senza (without), verso (toward), fino a (until, up to), durante (during). Example: Torno tra un'ora. (I'll be back in an hour.) Lavoro fino alle 5. (I work until 5.) Vado verso il centro.",
        comparatives: "Comparative: più...di (more...than), meno...di (less...than), così/tanto...come/quanto (as...as). Superlative: il/la più (the most), il/la meno (the least). Example: Roma è più grande di Firenze. È la città più bella d'Italia.",
        directPronouns: "Direct object pronouns: mi (me), ti (you), lo/la (him/her/it), ci (us), vi (you-plural), li/le (them). Placed before conjugated verb. Example: Lo vedo. (I see him.) La compro. (I buy it.) With infinitives: Voglio vederlo. (I want to see him.)"
      },

      tenses: {
        present: "Mi alzo presto. (I get up early.) | Andiamo al cinema. (We go to the cinema.) | Fa i compiti. (He/She does homework.)",
        past: "Mi sono alzato presto. (I got up early.) | Siamo andati al cinema. (We went to the cinema.) - Passato prossimo with reflexive verbs uses essere.",
        perfect: "Ho finito il lavoro. (I have finished the work.) | Hanno mangiato al ristorante. (They ate at the restaurant.)",
        future: "Viaggerò domani. (I will travel tomorrow.) - Simple future | Sto per partire. (I'm about to leave.) - Immediate future with stare per + infinitive."
      },

      phrases: [
        { target: "Puoi aiutarmi?", translation: "Can you help me?" },
        { target: "Vorrei...", translation: "I would like..." },
        { target: "Non importa", translation: "It doesn't matter" },
        { target: "Divertiti!", translation: "Have fun!" },
        { target: "Guarisci presto!", translation: "Get well soon!" },
        { target: "Cosa ne pensi?", translation: "What do you think?" },
        { target: "Sono d'accordo", translation: "I agree" },
        { target: "È vero", translation: "That's true" }
      ]
    },

    B1: {
      vocabulary: {
        greetings: [
          { target: "È passato tanto tempo", translation: "Long time no see" },
          { target: "Come te la passi?", translation: "How have you been?" },
          { target: "Lieto/a di conoscerla", translation: "Pleased to meet you (formal)" },
          { target: "Complimenti!", translation: "Congratulations!" }
        ],
        family: [
          { target: "il cognato", translation: "brother-in-law" },
          { target: "la cognata", translation: "sister-in-law" },
          { target: "il suocero", translation: "father-in-law" },
          { target: "la suocera", translation: "mother-in-law" },
          { target: "i parenti", translation: "relatives" },
          { target: "l'albero genealogico", translation: "family tree" }
        ],
        food: [
          { target: "il piatto", translation: "dish / plate" },
          { target: "la portata principale", translation: "main course" },
          { target: "l'antipasto", translation: "appetizer / starter" },
          { target: "il contorno", translation: "side dish" },
          { target: "l'ingrediente", translation: "ingredient" },
          { target: "la ricetta", translation: "recipe" },
          { target: "piccante", translation: "spicy" },
          { target: "dolce", translation: "sweet" },
          { target: "vegetariano", translation: "vegetarian" },
          { target: "biologico", translation: "organic" }
        ],
        travel: [
          { target: "il ritardo", translation: "delay" },
          { target: "l'escursione", translation: "excursion" },
          { target: "il giro turistico", translation: "tour" },
          { target: "il monumento", translation: "monument" },
          { target: "il confine", translation: "border" },
          { target: "il passaporto", translation: "passport" },
          { target: "il visto", translation: "visa" },
          { target: "cancellare", translation: "to cancel" },
          { target: "rimandare", translation: "to postpone" },
          { target: "la destinazione", translation: "destination" }
        ],
        routine: [
          { target: "rilassarsi", translation: "to relax" },
          { target: "sbrigarsi", translation: "to hurry" },
          { target: "prepararsi", translation: "to prepare oneself" },
          { target: "decidersi", translation: "to make up one's mind" },
          { target: "incontrarsi", translation: "to meet up" },
          { target: "chiacchierare", translation: "to chat" }
        ],
        emotions: [
          { target: "felice", translation: "happy" },
          { target: "triste", translation: "sad" },
          { target: "ansioso/a", translation: "anxious" },
          { target: "emozionato/a", translation: "excited / moved" },
          { target: "deluso/a", translation: "disappointed" },
          { target: "orgoglioso/a", translation: "proud" },
          { target: "sollevato/a", translation: "relieved" },
          { target: "sorpreso/a", translation: "surprised" }
        ],
        abstract: [
          { target: "l'opinione", translation: "opinion" },
          { target: "l'esperienza", translation: "experience" },
          { target: "la decisione", translation: "decision" },
          { target: "la possibilità", translation: "possibility" },
          { target: "l'occasione", translation: "opportunity" },
          { target: "la differenza", translation: "difference" },
          { target: "la somiglianza", translation: "similarity" }
        ]
      },

      grammar: {
        articles: "Article usage and omission: Omit articles with professions after essere. Example: Sono medico. (I am a doctor.) BUT with adjectives: Sono un bravo medico. Use articles with abstract nouns and general statements: La vita è bella. (Life is beautiful.) L'amore è importante.",
        pronouns: "Relative pronouns introduce subordinate clauses: che (who, which, that - subject/object), cui (whom, which - after prepositions), il quale/la quale/i quali/le quali (more formal). Example: La donna che parla è mia madre. L'uomo di cui parlo è mio padre. (The man about whom I'm speaking...)",
        structure: "Subordinate clauses with various conjunctions: che (that), perché (because), sebbene/benché (although - requires subjunctive), se (if), quando (when). Example: Penso che verrà. (I think he'll come.) Resto a casa perché piove. (I stay home because it's raining.)",
        questions: "Indirect questions: Question word + subject + verb (no inversion). Example: Non so dove abita. (I don't know where he lives.) Puoi dirmi quando arriva il treno? (Can you tell me when the train arrives?) Mi chiedo perché sia partito.",
        prepositions: "Advanced prepositions: durante (during), nonostante (despite), invece di (instead of), prima di (before), dopo (after). Example: Nonostante la pioggia, sono uscito. (Despite the rain, I went out.) Prima di mangiare, mi lavo le mani.",
        subjunctive: "Congiuntivo (subjunctive mood) used after verbs of opinion, doubt, desire, emotion: penso che, credo che, voglio che, dubito che, è importante che. Present subjunctive: change final vowel. Example: Penso che lui sia italiano. (I think he is Italian.) Voglio che tu venga. (I want you to come.)",
        conditional: "Condizionale (conditional mood) for hypothetical situations and polite requests: Add endings to infinitive stem. Example: Vorrei un caffè. (I would like a coffee.) Se avessi soldi, comprerei una casa. (If I had money, I would buy a house.)"
      },

      tenses: {
        present: "Capisco il testo. (I understand the text.) | Lavoriamo insieme da 5 anni. (We've been working together for 5 years.)",
        past: "Capivo il testo. (I understood/was understanding the text.) - Imperfetto for ongoing past actions or descriptions.",
        perfect: "Ho capito il testo. (I understood the text.) | È partita ieri. (She left yesterday.) - Passato prossimo for completed actions.",
        future: "Capirò il testo. (I will understand the text.) | Partiremo domani. (We will leave tomorrow.) - Futuro semplice.",
        pluperfect: "Avevo capito il testo prima dell'esame. (I had understood the text before the exam.) | Quando sono arrivato, erano già partiti. (When I arrived, they had already left.) - Trapassato prossimo."
      },

      phrases: [
        { target: "Secondo me...", translation: "In my opinion..." },
        { target: "Penso che...", translation: "I think that..." },
        { target: "Da una parte... dall'altra...", translation: "On one hand... on the other hand..." },
        { target: "Dipende", translation: "It depends" },
        { target: "Rispetto a...", translation: "Compared to..." },
        { target: "Per quanto ne so", translation: "As far as I know" },
        { target: "Ne vale la pena", translation: "It's worth it" },
        { target: "In ogni caso", translation: "In any case" }
      ]
    }
  }
};

// Make it available globally
if (typeof window !== 'undefined') {
  window.languageData = languageData;
}

// For Node.js environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = languageData;
}
