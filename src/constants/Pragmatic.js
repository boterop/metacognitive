export default class Pragmatic
{
    constructor()
    {
        this.uses = [
            'Avoid contractions; they are informal in academic writing.',
            'The title is the first thing the readers look at. Thus, make sure you call their attention so that they are eager to read your ideas.',
            'Pay attention to the audience you are writing to; the level of formality changes.',
            'Use the correct pronoun (first, second, third) depending on the type of text you are writing.',
            'Expository texts. The main objetive of expository texts is presenting information. We usually do not express our opinion. It should be objetive.',
        ];
            
        this.examples = [
            'It doesn´t matter',
            'My worst day',
            '(when writing to your boss) Hi jhon! What’s up?',
            'We need to do something to avoid plagiarism. (argumentative essay)',
            "I don't agree with euthanasia.",
        ];
            
        this.corrections = [
            'It does not matter',
            'The day when I almost die',
            '(when writing to your boss) Good afternoon Mr. Jhonson, how are you?',
            'Students need to do something to avoid plagiarism. (argumentative essay)',
            'Euthanasia is a global phenomenon nowadays',
        ];
            
        this.notes = [
            'null',
            'null',
            'null',
            'null',
            'null',
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