export default class Syntactic {
    constructor() {
        this.uses = [
            'Be careful when using in order to plus a negation.',
            'The –ing form can be used like a noun or be part of a “noun phrase”.',
            'You use the verb with –ing after the prepositions in, at, with, of, for, about, also',
            'Agreement: pay attention to the conjugation of the verbs; the object pronouns which replace the subject pronouns are also important.',
            'Spelling problem.',
            'Correct the demonstrative: that (singular-far) / those(plural-far) / this (singular-close) / these (plural-close)',
            'Pay attention to parallel structure.',
            'A semicolon is most commonly used to link (in a single sentence) two independent clauses that are closely related in thought.',
            'The exclamation and question marks are different from Spanish; they always go just at the end of the sentence.',
            'Use indentation in each paragraph. It is an empty space to signal the beginning of a paragraph.',
            'When you do not have a specific pronoun, use it to have a complete and appropriate sentence.',
            'Do not use the definite article THE with general words, names of people, means of transportation, institutions, names of countries in singular, among others.',
            'Use of "of": When something is composed or made up of something else.',
            'Use of "in": When explaining how something works.',
            'The thesis statement (also called the central idea or the topic sentence in case of paragraphs) should be expressed in a complete sentence; since it makes a statement, it should not be written as a question.',
            'The conclusion can restate (briefly) the main points discussed in your paragraph or essay. To do so, you can paraphrase. A conclusion should not, however, bring up a new topic.',
            'To cite, follow this pattern: (Last name, year: page).',
            'Look at the correct prepositions used with some verbs. Correct your own verb with the appropriate preposition.',
            'Do not use quotation marks with quoted material that is more than three lines in length; In this situation, leave a blank line above and below the quoted material. Single space the long quotation. Quotation marks are not used. Use Italics.',
            'Use quotations to name something which does not have English translation.',
            'Remember: adjectives are never pluralized.',
            'It does not matter if you have one, two or more than three adjectives in a single sentence; they always go before the noun.',
            'Use the verb agree and the noun agreement differently.',
            'The correct expression is: Most of the people/ the majority of people. Most of the cases/ in most cases',
            'After because we use a clause; after because of we use a noun or pronoun.',
            'Be careful with the plural of some nouns.',
            'There is missing a complement.',
            'The word advice is never pluralized.',
            'Avoid exact translation from the Spanish language in regards to expressing possession.',
            'Avoid long sentences. Instead, make use of connectors and punctuation marks to avoid misunderstandings or incoherent sentences.',
            'Uses of commas.',
            'Rules to develop a topic sentence. A topic sentence is generally written at the beginning of the paragraph, it should contain a topic and a controlling idea.',
            'Word order. Pay attention to sentence structure. Sometimes, the word is not located in the correct position.',
            'A paragraph consists of several sentences that are grouped together. It should be a unity. Do not leave space between them.',
            'Relative clauses.\n'+
            'Pay attention to the correct relative clause used in your sentence.\n'+
            '-	who: people\n'+
            '-	which: things\n'+
            '-	whose: to express possession (people)\n'+
            '-	that: things and people\n',
            'The words somebody (someone), nobody (no one), everybody (everyone), everything, anyone (anybody) are conjugated as in the third person.',
            'Use of synonyms.\n'+
            'Use a different word so that your paragraph does not seem redundant.\n',
            'Use of colon\n'+
            'Use a colon instead of a semicolon between two sentences when the second sentence explains or illustrates the first one\n',
            'Omit some words; they are not necessary in your sentence.',
            'Capitalization',
            'Use a period [ . ] at the end of a sentence that makes a statement.',
            'There is a missing word in your sentence.',
            'Do not put period to your title.',
            'We use etc. after a list more than 3 elements.',
            'Wrong subject in the dependent clause.',
            'Wrong use of tenses.',
            'When using modals, do not conjugate the verb you use after it.',
            'Use bare infinitives after the modal verbs. (except for HAVE TO, OUGHT TO)',
            'Use of indefinite articles. When using indefinite articles, pay attention to the first letter of the noun you use next. If the noun starts with a vowel, use An; if it starts with a consonant use A.',
            'The difference between the definite and indefinite articles is the difference between talking about a specific apple, or any old apple at all. Take also into account the quantity.',
            'When using the word EXIST, use the word THERE before it.',
            'Be careful with the use of superlatives (-est) and comparatives (er). When a word is more than 2 syllabus you add (MOST/MORE); in one-syllable word we use (EST/ER), but not both at the same time.',
        ];
            
        this.examples = [
            'I left home early in order to not to be late for the appointment.',
            'Smoke is forbidden. Speak to an audience is always stressful.',
            'After to hang out with my friends, I went to my house.\n'+
            'She is here for plan the party.\n',
            'The invention of perfection create lots of stereotypes.\n'+
            'children should talk to her parents\n',
            'Beggining',
            'This customs are very remarkable.',
            'I like swimming, studying and to listen to music.',
            'Some people write with a word processor, others write with a pen or pencil.',
            '¿are you happy? (Spanish)\n'+
            '¡I’m tired! (Spanish)\n',
            'One day when I was at home, my parents began to cry.',
            'Consists on doing a nice job',
            'The life is too short.',
            'The story consists in six parts.',
            'Meditation consists of attentive watchfulness.',
            'My fear of the dark.',
            'There are, of course, many more things to visit while you are in Mexico.',
            '(A. Burges 2007: 45).',
            'This decision depends in you',
            'The author of Touched, Jane Straus, wrote in the first chapter: "Georgia went back to her bed and stared at the intricate patterns of burned moth wings in the translucent glass of the overhead light".',
            'When I was in Tolima, I used to eat tamales all the time.',
            'The girls are beautifuls.\n'+
            'they are very differents.\n',
            'I have a blue plastic old car.',
            'I am agree with you.',
            'The most of the people are taking on line classes.',
            'The river overflowed its banks because it rained.',
            'Cats have seven lifes.',
            'There are three easy steps to lose.',
            'I have lots of advices to tell you.',
            'This is the life of my son.',
            'When I was a child my parents tried to control me all the time because I was a really bad boy and that is why my adulthood has been represented with numerous psychological problems that do not allow me to become in an independent person.',
            'Yes I do need that report.\n'+
            "Well I never thought I'd live to see the day.\n"+
            'I have painted the entire house but he is still working on sanding the doors. I paint and he writes.\n'+
            'She cannot meet on Friday because of schedule conflicts and deadlines.\n'+
            'On the one hand Odysseus loves Penelope and wants to return to her.\n'+
            'His love of fame and adventure however overshadows his love for his wife.\n',
            'Drinking coffee.',
            'I yesterday wrote a letter.',
            'My hometown is famous for several amazing natural features.\n'+
            'First, it is noted for the Wheaton River, which is very wide and beautiful.\n'+
            'Also, on the other side of the town is Wheaton Hill, which is unusual because it is very steep.\n',
            'I told you about the woman which lives next door.\n'+
            'Do you see the shoe where is on the roof?\n'+
            'Do you know the boy which mother is a nurse?\n'+
            'I don’t like the table who stands in the kitchen.\n',
            'Nobody want coffee.\n'+
            'Everybody are invited.\n',
            "The classes are sometimes very boring; these classes represent a bad teacher's methodology.",
            'My biggest dream; having a nice wife.',
            'In making mistakes is a huge disadvantage',
            'The united states is my favorite country.',
            'Technology creates more dependent people everyday',
            'You must the next steps.',
            'Types of students.',
            'I like eating pizza, hamburger, etc.',
            'When a person has eating disorders, it may suffer a lot of problems.',
            'We generally take the first product we found on the shelf.',
            'We could bought more food later.',
            'A tiger can to run as fast as a car.',
            'Give me a apple.\n'+
            'I have an car.\n',
            'Give me an apples.',
            'Exist many types of friends.',
            'You are more shorter than me.',
        ];
            
        this.corrections = [
            'I left home early in order not to be late for the appointment.',
            'Smoking is forbidden. Speaking to an audience is always stressful.',
            'After hanging out with my friends, I went to my house.\n'+
            'She is here for planning the party.\n',
            'The invention of perfection creates lots of stereotypes.\n'+
            'children should talk to their parents.\n',
            'Beginning',
            'These customs are very remarkable.',
            'I like swimming, studying and listening to music.',
            'Some people write with a word processor; others write with a pen or pencil.',
            'Are you happy? (English)\n'+
            'I’m tired! (English)\n',
            '        One day when I was at home,\n'+
            'my parents began to cry.\n',
            'It consists on doing a nice job.',
            'Life is too short.',
            'The story consists of six parts.',
            'Meditation consists in attentive watchfulness.',
            'My fear of the dark has made my life miserable.',
            'There are, of course, many more things to visit while you are in Mexico, but the beact at Progreso, the Aztec ruin, and the famous monument represent some of the more significant and beautiful sights to see, When you go to Mexico, visit these sights and you will be graranteed a fond memory after you go home.',
            '(Burges, 2007: 45).',
            'This decision depends on you',
            'The author of Touched, Jane Straus, wrote in the first chapter: <I>Georgia went back to her bed and stared at the intricate patterns of burned moth wings in the translucent glass of the overhead light</I>.',
            'When I was in Tolima, I used to eat “tamales” all the time.',
            'The girls are beautiful.\n'+
            'they are very different.\n',
            'I have an old blue plastic car.',
            'I am in agreement with you.\n'+
            'I agree with you.\n',
            'Most of the people are taking on line classes.',
            'The river overflowed its banks because of the rain.',
            'Cats have seven lives.',
            'There are three easy steps to lose weight; to lose money.',
            'I have lots of advice to tell you.',
            'This is my son’s life.',
            'When I was a child, my parents tried to control me all the time since I was a really bad boy. For that reason, my adulthood has been represented with numerous psychological problems that do not allow me to become in an independent person.',
            'Yes, I do need that report.\n'+
            "Well, I never thought I'd live to see the day.\n"+
            'I have painted the entire house, but he is still working on sanding the doors. I paint and he writes.\n'+
            'She cannot meet on Friday, because of schedule conflicts and deadlines.\n'+
            'On the one hand, Odysseus loves Penelope and wants to return to her.\n'+
            'His love of fame and adventure, however, overshadows his love for his wife.\n',
            'Drinking coffee could be hazardous for health.',
            'I wrote a letter yesterday.',
            'My hometown is famous for several amazing natural features.  First, it is noted for the Wheaton River, which is very wide and beautiful. Also, on the other side of the town is Wheaton Hill, which is unusual because it is very steep.',
            'I told you about the woman who lives next door.\n'+
            'Do you see the shoe which is on the roof?\n'+
            'Do you know the boy whose mother is a nurse?\n'+
            'I don’t like the table that stands in the kitchen.\n',
            'Nobody wants coffee.\n'+
            'Everybody is invited.\n',
            "The classes are sometimes very boring; these lessons represent a bad teacher's methodology.",
            'My biggest dream: having a nice wife.',
            'Making mistakes is a huge disadvantage',
            'The United States is my favorite country.',
            'Technology creates more dependent people everyday.',
            'You must follow the next steps.',
            'Types of students',
            'I like eating pizza, hamburger, hotdog, etc.',
            'When a person has eating disorders, he/she may suffer a lot of problems.',
            'We generally take the first product we find on the shelf.',
            'We could buy more food later.',
            'A tiger can run as fast as a car.',
            'Give me an apple.\n'+
            'I have a car.\n',
            'Give me some apples.',
            'There exist many types of friends.',
            'You are shorter than me.',
        ];
            
        this.notes = [
            'null',
            'null',
            'LIST OF PREPOSITIONS:\n'+
            '-	About\n'+
            '-	After\n'+
            '-	Against\n'+
            '-	Apart from\n'+
            '-	At\n'+
            '-	Before\n'+
            '-	Besides\n'+
            '-	By\n'+
            '-	For\n'+
            '-	In\n'+
            '-	In Spite of\n'+
            '-	Instead of\n'+
            '-	Of\n'+
            '-	On\n'+
            '-	With\n'+
            '-	Without\n',
            'null',
            'null',
            'null',
            'null',
            'null',
            'null',
            'null',
            'null',
            'null',
            'null',
            'null',
            'null',
            'Some ways to conclude a paragraph or an essay include:\n'+
            'End with a call to action; that is to say, asking the reader to do something.\n'+
            'End with a final point: it ties together all the ideas in your essay; it provides the reader with the sense that the entire essay has been leading up to this final point.\n'+
            'End with a question: by ending with a question, you leave the reader with a final problem that you wish him or her to think about.\n',
            'null',
            'These are some common prepositions that students tend to confuse:\n'+
            '-	Agree	With\n'+
            '-	Ask  For\n'+
            '-	Accuse	Of\n'+
            '-	Base	On\n'+
            '-	Begin 	With\n'+
            '-	Benefit	From\n'+
            '-	Believe	In\n'+
            '-	Compare	With/to\n'+
            '-	complain	About\n'+
            '-	compose	Of\n'+
            '-	depend	On\n'+
            '-	differ	From\n'+
            '-	dream	Of/about\n'+
            '-	excuse	For\n'+
            '-	explain	To\n'+
            '-	forget	About\n'+
            '-	react	Against/to\n'+
            '-	rely	On\n'+
            '-	refer	To\n'+
            '-	Recover 	From\n'+
            '-	suffer	From\n'+
            '-	result	In\n'+
            '-	Specialize	In\n'+
            '-	speak	To\n'+
            '-	according	To\n',
            'null',
            'null',
            'null',
            'The only thing that matters is that you organize adjectives appropriately.\n'+
            'Follow this pattern:\n'+
            '• Opinion: interesting, boring\n'+
            '• Dimension (size): big, small\n'+
            '• Age: new, modern.\n'+
            '• Shape: square, oval.\n'+
            '• Color: blue, green.\n'+
            '• Origin (nationalities): Chinese\n'+
            '• Material: plastic, golden.\n',
            'null',
            'null',
            'null',
            'SOME IMPORTANT IRREGULAR PLURALS TO REMEMBER:\n'+
            '-	child = children\n'+
            '-	woman = women\n'+
            '-	man = men\n'+
            '-	person = people\n'+
            '-	goose = geese\n'+
            '-	mouse = mice\n'+
            '-	fish= fish\n'+
            '-	sheep= sheep\n'+
            '• Some rules to rememeber\n'+
            'With words that end in a consonant and a Y, change the Y to an I and add ES just if the Y is preceded by a consonant.\n'+
            'EXAMPLE: baby = babies BUT galley = galleys\n'+
            '• Plurals of words that end in -f or -fe\n'+
            'usually change the f sound to a v sound and add s or -es.\n'+
            '-	knife = knives\n'+
            '-	leaf = leaves\n'+
            '-	hoof = hooves\n'+
            '-	life = lives\n'+
            '-	self = selves\n'+
            '-	elf = elves\n',
            'null',
            'null',
            'null',
            'null',
            'Use a comma when beginning sentences with introductory words such as well, now, both or yes.\n'+
            'Use a comma to separate two strong clauses joined by a coordinating conjunction--and, or, but, for, nor. You can omit the comma if the clauses are both short.\n'+
            'When the information in the clause is not necessary to complete your main idea, insert a comma to separate it from the rest of the sentence.\n'+
            'Use a comma or commas with transitional expressions (however, therefore, moreover, for example, on the other hand, in fact, so etc.)\n',
            'null',
            'null',
            'null',
            'null',
            'null',
            'null',
            'null',
            'Types of relative clauses:\n'+
            '1. Defining clauses (Restrictive clauses)\n'+
            'A defining (restrictive) clause is one that is essential to the sense of the sentence.\n'+
            'My house that has a blue door needs painting.\n'+
            'Here the blue door is a defining characteristic, it helps to distinguish that house from my other houses.\n'+
            'Defining clauses or phrases are not separated off with commas. A restrictive clause or phrase is essential to the meaning of the sentence;\n'+
            'it defines the word it modifies by ›restricting‹ its meaning. Eliminating a restrictive element from a sentence changes its meaning dramatically.\n'+
            '2. Non-defining clauses (Non-restrictive clauses)\n'+
            'A non-defining (non-restrictive) clause is one that can be regarded as parenthetical:\n'+
            'My house, which has a blue door, needs painting.\n'+
            'My car, which I have had since I was a teenager, was stolen last night.\n'+
            'She gave me her number, which I wrote on a piece of paper.\n'+
            'His dad, who is 78, goes for a 5 mile walk everyday.\n'+
            'Use commas to set off non-defining elements, which contribute to, but do not determine, the meaning of the sentence.\n'+
            'These elements may be clauses (groups of words that contain a subject and a verb) or\n'+
            'phrases (groups of words that do not contain both a subject and a verb).\n'+
            'Tip:\n'+
            'Note that defining (restrictive) and non-defining (non-restrictive) clauses must be introduced by the appropriate relative pronoun (who, which, that, whose).\n'+
            'Defining (restrictive) clauses should NEVER be set off with commas and non-defining (non-restrictive) clauses ALWAYS should.\n'+
            'NEVER use “that” with a non-defining clause.\n',
            'Capitalize the pronoun I.\n'+
            'Capitalize the first letter of the first word of each sentence.\n'+
            'Capitalize the first letter of names of people, organizations, and places.\n'+
            'Capitalize the first letter of adjectives that are made from the names of people and places.\n'+
            'Capitalize initials\n'+
            'Capitalize the first letter of directions only when they are used to designate actual places, not when they point in a direction.\n'+
            'Capitalize the first letter of the names of months and the days of the week.\n'+
            "Capitalize the official title of a person (including abbreviations), but only when you use it with the person's name.\n"+
            'Capitalize words used as names or parts of names.\n'+
            'Capitalize the first letter of important words in a title of a book, magazine, story, essay, etc.\n'+
            'Capitalize historical events and documents.\n'+
            'Capitalize the name of languages, races, nationalities, and religions.\n'+
            'Capitalize acronyms. (An acronym is a word formed by the first, or first few, letters of words in a long name of an organization.)\n',
            'null',
            'null',
            'null',
            'null',
            'null',
            'null',
            'null',
            'null',
            'null',
            'null',
            'null',
            'null',
        ];            
    }

    getUses = () => {
        return this.uses;
    }

    getExamples = () => {
        return this.examples;
    }

    getCorrections = () => {
        return this.corrections;
    }

    getNotes = () => {
        return this.notes;
    }

    getSize = () => {
        return this.uses.length;
    }
}