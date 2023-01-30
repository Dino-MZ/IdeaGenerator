// TODO: Improve this

//#region Arrays

//#region Hero
const heroType = ["a Dinosaur", "a Truck", "a Dragon", "a Ghost", "a Monster", "a Superhero", 
                "a Mummy", "a Snake", "a Rat", "a Mouse", "a Rabbit", "an Alien", "a Robot", 
                "a Zombie","a Polar Bear","a Spider","a Skeleton", "a Knight", "a Pirate", 
                "a Cyborg", "a Giant", "a Golem", "a Dwarf", "a Clown", "a Shape-shifter",
                "a Scientist", "a Time traveler", "a Soldier", "a Detective", "a Ninja",
                "a Samurai", "a Spy", "a Police officer", "a Doctor", "an Ant", "an Assassin"];

const heroName = ["Aria","Bryson","Cypher","Dax","Echo","Finn","Gia","Huxley","Iris","Jagger",
                "Kai","Landon","Mya","Nova","Odin","Phantom","Qin","Raze","Sage","Tron",
                "Ulm","Vex","Waverly","Xander","Yara","Aurora","Blaze","Celeste","Delta",
                "Elysium","Fury","Raven","Harmony","Ion","Jupiter","Krypton","Lunar","Mystic",
                "Neon","Omega","Phoenix","Quantum","Revenant","Siren","Vortex","Whisper"];

const heroAdj = ["mysterious","sneaky","vengeful","powerful","cunning","deceitful","loyal",
                "brave","fierce","gentle","clever","intelligent","weak","crazy","dark","light",
                "good","evil","moral","immoral","caring","empathetic","apathetic","angry","sad",
                "happy","jealous","envious","greedy","glamorous","elegant","rugged","handsome",
                "beautiful","ugly","scarred","tainted","pure","naive","wealthy","poor","wise",
                "ignorant","optimistic","pessimistic","patient","impatient","quick","strong",
                "calm","anxious","trustworthy","untrustworthy","confident","insecure",];

const heroVerb = ["are exploring", "are defending","are living in","live in", "explore"];
//#endregion

//#region Setting
const setting = ["an alien planet", "an abandoned city", "a destopian world", "a rural village",
                 "a gladiator staduim","a pirate ship","a underwater city","a small island",
                "a space station in deep space","the north pole", "futuristic city", "underground caverns"];
//#endregion

//#region Enemy
const villan = ["Gaint book", "Ant colony", "Gorrila with a large hat", "army of Penguins",
                "Mech Shark","Flying tree","Bee","Scorpion", 
                "Dinosaur", "Truck", "Dragon", "Ghost", "Monster", "Superhero", 
                "Mummy", "Snake", "Rat", "Mouse", "Rabbit", "Alien", "Robot", 
                "Zombie","Polar Bear","Spider","Skeleton", "Knight", "Pirate", 
                "Cyborg", "Giant", "Golem", "Dwarf", "Clown", "Shape-shifter",
                "Scientist", "Time traveler", "Soldier", "Detective", "Ninja",
                "Samurai", "a Spy", "a Police officer", "Doctor", "Assassin"];

const villanAdj =  ["a fast","a small","a large","a slow","a powerful","an intelligent","a loud",
                    "a stupid","a destructive", "a mysterious","a sneaky","a vengeful","a cunning",
                    "a deceitful", "a jealous","an envious","a greedy","an untrustworthy", "an evil"];


const villanVerb = ["is being invaded", "is ruled", "is dominated", "has just been conquered", "has been seiged"]; 

//#endregion

const gameGenre = ["horror", "FPS", "action", "puzzle", "platformer", "tower defense"];
const gamePace = ["face-paced", "slow-paced"];

const type = ["Game", "Story"];

//#endregion

//#region Returners

 function GetRandomWord(array) {
    let randonNum = Math.floor(Math.random() * array.length);
    return array[randonNum];
};

function GetOneWordOrNone(array, prefix, suffix, chance) {
    let randonNum = Math.random();

    if(chance > randonNum) {
       return prefix + GetRandomWord(array) + suffix;
    }
    else {
        return "";
    }

};

function GetMultipleWordsOrLess(array, prefix, betweenWords, suffix, chance, maxWords) {
    let wordList = [];

    for(i = 0; i < maxWords; i++) {
        word = GetOneWordOrNone(array,"", "", chance);

        if(word != "") wordList.push(word);
    }

    if(wordList.length == 0) {
        return "";
    }
    else {
        words = "";
        for(i=0; i < wordList.length; i++) {
            if(i + 1 == wordList.length) {
                words += wordList[i];
            }
            else {
                words += wordList[i] + betweenWords;
            }
        }

        return prefix + words + suffix;
    }
};

//#endregion

//#region Generate Functions

function GenerateIdeaType() {
    document.getElementById("type").innerHTML = "A " + GetRandomWord(type) + " about";
};

function GenerateGenre() {

};

function GenerateHero() {
    document.getElementById("heroSpecial").innerHTML = GetRandomWord(heroType);
    document.getElementById("heroDesc").innerHTML = GetOneWordOrNone(heroName, " named ", "", 1) 
                            + GetMultipleWordsOrLess(heroAdj, ", who is ", " and ", "", 0.25, 3) + ", where they";
    document.getElementById("heroVerb").innerHTML = GetOneWordOrNone(heroVerb, "", "", 1);
};

function GenerateSetting() {
    document.getElementById("setting").innerHTML = GetRandomWord(setting);
}

function GenerateVillan() {
    document.getElementById("villan").innerHTML = GetOneWordOrNone(villanVerb, " that ", " by ", 1) 
                            + GetRandomWord(villanAdj);

    document.getElementById("villanSpecial").innerHTML = GetRandomWord(villan);
}

//#endregion

function GenerateIdea() {
    GenerateIdeaType();
    GenerateHero();
    GenerateSetting();
    GenerateVillan();
} 

function OnHover(id){
    document.getElementById(id).style.color = '#ffd633';
}

function OnLeave(id){
    document.getElementById(id).style.color = '#fcfffb';
}