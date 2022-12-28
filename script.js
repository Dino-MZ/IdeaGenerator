// TODO: Improve this

var heroType = ["a dinosaur ", "a truck ", "a rabbit ", "an alien ", "a robot ", "a shape ","a Polar bear ","a spider ","a skeleton "];
var heroName = ["Dino ","Billy ","Qlop ","Mobasno ","Gargonzolan ","Eusebio ","Dewitt ","Eugenio ","Kozlowski ","Hyman ","Mckinnon ","Bernardo ","Alphonse ","BigMak "];
var heroAdj = ["fast ","weak ","small ","humongous ","slow ","powerful ","Intelligent ","sneaky ","loud ","stupid ","destructive ","peaceful "];
var places = ["an alien planet ", "an abandoned city ", " a destopian world ", "a hidden village ", "a gladiator staduim ","a pirate ship ","a underwater city ","a small island ","deep space ","the north pole "];
var enemy = ["gaint book ", "tow truck ", "ant colony ", "gorrila with a large hat ", "penguin army ","sharks with mech suits ","council of flying trees ","species of invasive bees ","group of hairy scorpions "];
var enemyAdj =  ["a fast ","a small ","a large ","a slow ","a powerful ","an intelligent ","a loud ","a stupid ","a destructive ",];
var heroVerb = ["lives in ", "explores ", "is a rebel in ", "defends ","invading ","destroys ","runs away to ","battles in "];
var enemyVerb = ["is being invaded ", "is ruled ", "is dominated ", "has just been conquered ", "has been seiged "]; 
var typeAdj = ["horror ", "FPS ", "action ", "puzzle ", "platformer ", "tower defense "];
var pace = ["face-paced ", "slow-paced ", "", ""];
var Type = ["game "];


// returns a random index in an array
 function Ran(Array) {
    var randonNum = Math.floor(Math.random() * Array.length);
    return randonNum;
};

// Using getElementById I will change the <div> with the txtGen id to generate a random idea
function GenerateIdea() {
    document.getElementById("txtGen").innerHTML = "A " + pace[Ran(pace)] + typeAdj[Ran(typeAdj)] + Type + "about " + heroType[Ran(heroType)] + "named " + heroName[Ran(heroName)] + "who is " + heroAdj[Ran(heroAdj)] + "and " + heroVerb[Ran(heroVerb)] + places[Ran(places)] + "which " + enemyVerb[Ran(enemyVerb)] + "by " + enemyAdj[Ran(enemyAdj)] + enemy[Ran(enemy)];
}         