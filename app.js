let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

// CLASSIC
const domains1 = [];

for(var i = 0; i < pronoun.length; i++) {
     for(var j = 0; j < adj.length; j++) {
        for(var k = 0; k < noun.length; k++) {
            domains.push(`${pronoun[i]}${adj[j]}${noun[k]}`);
        }
    }
};

// console.log('domains1', domains1);

// MAP
const domains2 = pronoun.flatMap(a => adj.flatMap(b => noun.map(c => `${a}${b}${c}`)));

// console.log('domains2', domains2);

// RECURSIVE
let extension = ['.com', '.eu', '.me', '.us'];

const combine = ([first, ...[second, ...rest]]) => {
    if (!second) {
        return first;
    }

    const combined = first.flatMap((a) => second.map((b) => `${a}${b}`));

    return combine([combined, ...rest]);
}

const domains3 = combine([pronoun, adj, noun, extension]);

console.log('domains3', domains3);
