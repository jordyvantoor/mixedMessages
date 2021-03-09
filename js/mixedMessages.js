/* 5 basic sentence structures:

1. Subject-Verb (S-V)
2. Subject-Verb-Object (S-V-O)
3. Subject-Verb-Adjective (S-V-Adj)
4. Subject-Verb-Adverb (S-V-Adv)
5. Subject-Verb-Noun (S-V-N)

*/

const subjects = [
    'the dog',
    'simon',
    'erin',
    'the boy',
    'he',
    'she',
    'david',
    'anaiah',
    'yesha',
    'the bird',
    'my daddy', 
    'the girl'
];

const verbs = [
    'plays',
    'laughs',
    'sleeps',
    'bathes',
    'eats',
    'throws',
    'is',
    'flies'
];

const objects = [
    'the dog',
    'apples',
    'the ball'
];

const adjectives = [
    'beautiful',
    'nice',
    'angry'
];

const adverbs = [
    'loudly',
    'high',
    'everywhere'
];

nouns = [
    'the principal',
    'a fisherman',
    'a student'
];

const getRandomWord = words => {
    const randomIndex = Math.floor(Math.random() * words.length)
    return words[randomIndex]
}

const capitalize = string => {
    return string[0].toUpperCase() + string.slice(1)
}

const generateMessage = function() {   
    // get random words to compose a sentence
    const subject = getRandomWord(subjects);
    const verb = getRandomWord(verbs);
    const object = getRandomWord(objects);
    const adjective = getRandomWord(adjectives);
    const adverb = getRandomWord(adverbs);
    const noun = getRandomWord(nouns);

    // randomly choose one of the 5 basic sentence structures
    const randomSentenceStructure = Math.floor(Math.random() * 5) + 1;

    // return a sentence based on the selects sentence structure
    switch (randomSentenceStructure) {
        case 1: // Subject-Verb (S-V)
            return capitalize(`${subject} ${verb}.`);
            break;
        case 2: // Subject-Verb-Object (S-V-O)
            return capitalize(`${subject} ${verb} ${object}.`);
            break;
        case 3: // Subject-Verb-Adjective (S-V-Adj)
            return capitalize(`${subject} ${verb} ${adjective}.`);
            break;
        case 4: // Subject-Verb-Adverb (S-V-Adv)
            return capitalize(`${subject} ${verb} ${adverb}.`);
            break;
        case 5: // Subject-Verb-Noun (S-V-N)
           return capitalize(`${subject} ${verb} ${noun}.`);
            break;
        default:
            return 'This was supposed to be a random message';
            break;
    }
}

var messageElement = document.getElementById('randomMessage');
messageElement.textContent = generateMessage();