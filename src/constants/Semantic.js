export default class Semantic
{
    constructor()
    {
        this.uses = [
            'Some words resemble the Spanish language but they differ in meaning. These words are called false cognates.',
            'Look for another word; this one does not fit with the correct meaning.',
            'Avoid redundancy in meaning.',
            'USE OF CONNECTORS. Pay attention to the function of the connector used.',
            'Make use of prefixes since they carry a specific meaning.',
            'Pay attention to the correct suffix. Here, there are some examples.',
            'Be careful when using adjectives ending in ED / ING because they totally change the meaning of your sentence.',
            "Another and other are used in different ways. Other is an adjective meaning 'different' and it is used with both, singular and plural nouns; another expresses quantity, something extra or additional and it is used with singular nouns only.",
            'Coherence is the unifying element in good writing. It is what gives a piece of writing its flow. When writing lacks coherence, the reader is forced to stop and reread. Organize your ideas, please.',
            'Be careful with the use of phrasal verbs (a combination of a verb and preposition, a verb and an adverb, or a verb with both an adverb and a preposition); they can totally change the meaning of your sentence.',
        ];
            
        this.examples = [
            'Actually, depression is becoming a huge problem in our society.',
            'I lost the exam.',
            'If all of us cooperate together, we will succeed.',
            'I am tired and I want to continue studying.',
            'This is not finished',
            'This does not have an end.',
            '(if you want to say someone is ashamed) Steve is embarrassing.',
            'Have the another cup of tea, not this cup.',
            'What is your name? I live in Armenia.',
            "Don't work out. Work inside the house!",
        ];
            
        this.corrections = [
            'Nowadays, depression is becoming a huge problem in our society.',
            'I failed the exam.',
            'If all of us cooperate (or work together), we will succeed.',
            'I am tired but I want to continue studying.',
            'This is unfinished',
            'This is endless.',
            '(if you want to say someone is ashamed) Steve is embarrassed.',
            'Have the other cup of tea, not this cup.',
            "What is your name? I'm jesus.",
            "Don't work outside; work inside the house!",
        ];
            
        this.notes = [
            'Actually means in fact, truly.\n'+
            'Some synonyms or close words you can use instead of nowadays are: currently, recently, in recent times, today, lately, now.\n',
            'null',
            'In this sentence, the words cooperate and together have been used; but these words convey the same meaning.',
            'CONNECTORS:\n'+
            'ADDING\n'+
            'And/as well as/Besides, / Moreover, / Furthermore,/What is more, / In addition, not only, but also / , as well / , too/\n'+
            'another point is\n'+
            'CONTRASTING\n'+
            'But /However,/ Nevertheless,/ Although / Even though / Even if, /though/\n'+
            'Despite / in spite of/ On the contrary,/on the one hand/on the other hand,/whereas/while/In contrast, /Neither…nor/\n'+
            'Otherwise\n'+
            'EXPRESSING CAUSE AND RESULT\n'+
            'Because /As / Since/ so / Therefore,/ As a result,/This is why,/Consequently,/For this reason,/ due to / owing to / because of\n'+
            'NARRATING\n'+
            'First (of all) / At first / Firstly/ To begin with, / In the first place, /At the beginning / In the beginning/secondly,/thirdly,/then / later / next/Before/ After/  After that / afterwards/immediately/Once/Suddenly/ As soon as/Finally/Eventually/until/ At the end\n'+
            'EXPRESSING PURPOSE / OPINION\n'+
            '/ in order to/ in order that / so that/I would say that/In my opinion,/I (don’t) think (that)/I (don’t) believe (that)/Personally,/From my point of view, / In my view,/As far as … /is concerned/As regards/ As far as I can see/\n'+
            'CONCLUDING\n'+
            'All in all/In conclusion,/On the whole/To sum up,/Lastly,/In short,/\n'+
            'GIVING EXAMPLES / EXCEPTING\n'+
            'For example/for instance/such as/ Apart from,/With the exception of/ Take the case of\n'+
            'AGREEING / DISAGREEING\n'+
            'I agree with/to\n'+
            'I don’t agree with/to\n'+
            '/ I disagree with/to\n'+
            'I’m in favor of\n'+
            'CLARIFYING\n'+
            'I mean (that)/That is to say,/In other words\n',
            'Nota: Prefixes:\n'+
            'Prefix\n'+
            'Meaning\n'+
            'Example\n'+
            'a-, an-\n'+
            'Without\n'+
            'Amoral\n'+
            'ante-\n'+
            'Before\n'+
            'Antecedent\n'+
            'anti-\n'+
            'Against\n'+
            'Anticlímax\n'+
            'auto-\n'+
            'Self\n'+
            'Autopilot\n'+
            'circum-\n'+
            'Around\n'+
            'Circumvent\n'+
            'co-\n'+
            'With\n'+
            'Copilot\n'+
            'com-, con-\n'+
            'With\n'+
            'companion, contact\n'+
            'contra-\n'+
            'Against\n'+
            'Contradict\n'+
            'de-\n'+
            'off, away from\n'+
            'Devalue\n'+
            'dis-\n'+
            'Not\n'+
            'Disappear\n'+
            'en-\n'+
            'put into\n'+
            'Enclose\n'+
            'ex-\n'+
            'out of, former\n'+
            'extract, ex-president\n'+
            'extra-\n'+
            'beyond, more tan\n'+
            'Extracurricular\n'+
            'hetero-\n'+
            'Different\n'+
            'Heterosexual\n'+
            'homo-\n'+
            'Same\n'+
            'Homonym\n'+
            'hyper-\n'+
            'over, more\n'+
            'Hyperactive\n'+
            'il-, im-, in-, ir-\n'+
            'not, without\n'+
            'illegal, immoral, inconsiderate, irresponsible\n'+
            'in-\n'+
            'Into\n'+
            'Insert\n'+
            'inter-\n'+
            'Between\n'+
            'Intersect\n'+
            'intra-\n'+
            'Between\n'+
            'Intravenous\n'+
            'macro-\n'+
            'Large\n'+
            'Macroeconomics\n'+
            'micro-\n'+
            'Small\n'+
            'Microscope\n'+
            'mono-\n'+
            'One\n'+
            'Monocle\n'+
            'non-\n'+
            'not, without\n'+
            'Nonentity\n'+
            'omni-\n'+
            'all, every\n'+
            'Omniscient\n'+
            'post-\n'+
            'After\n'+
            'Postmortem\n'+
            'pre-, pro-\n'+
            'before, forward\n'+
            'precede, Project\n'+
            'sub-\n'+
            'Under\n'+
            'Submarine\n'+
            'syn-\n'+
            'same time\n'+
            'Synchronize\n'+
            'trans-\n'+
            'Across\n'+
            'Transmit\n'+
            'tri-\n'+
            'Three\n'+
            'Tricycle\n'+
            'un-\n'+
            'Not\n'+
            'Unfinished\n'+
            'uni-\n'+
            'One\n'+
            'Unicorn\n',
            'Suffixes:\n'+
            'Noun Suffixes\n'+
            'Suffix\n'+
            'Meaning\n'+
            'Example\n'+
            '-acy\n'+
            'state or quality\n'+
            'Privacy\n'+
            '-al\n'+
            'act or process of\n'+
            'Refusal\n'+
            '-ance, -ence\n'+
            'state or quality of\n'+
            'maintenance, eminence\n'+
            '-dom\n'+
            'place or state of being\n'+
            'freedom, kingdom\n'+
            '-er, -or\n'+
            'one who\n'+
            'trainer, protector\n'+
            '-ism\n'+
            'doctrine, belief\n'+
            'Communism\n'+
            '-ist\n'+
            'one who\n'+
            'Chemist\n'+
            '-ity, -ty\n'+
            'quality of\n'+
            'Veracity\n'+
            '-ment\n'+
            'condition of\n'+
            'Argument\n'+
            '-ness\n'+
            'state of being\n'+
            'Heaviness\n'+
            '-ship\n'+
            'position held\n'+
            'Fellowship\n'+
            '-sion, -tion\n'+
            'state of being\n'+
            'concession, transition\n'+
            '-ate\n'+
            'Become\n'+
            'Eradicate\n'+
            '-en\n'+
            'Become\n'+
            'Enlighten\n'+
            '-ify, -fy\n'+
            'make or become\n'+
            'Terrify\n'+
            '-ize, -ise\n'+
            'Become\n'+
            'Civilize\n',
            'Adjectives ending in -ed describe emotions while adjectives ending in -ing describe a characteristic of something or someone.',
            'null',
            'null',
            'Work out means to exercise.',
        ];               
    }

    getUses = () =>
    {
        return this.uses;
    }

    getExamples = () =>
    {
        return this.examples;
    }

    getCorrections = () =>
    {
        return this.corrections;
    }

    getNotes = () =>
    {
        return this.notes;
    }

    getSize = () =>
    {
        return this.uses.length;
    }
}