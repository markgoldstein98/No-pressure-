let beatles = ["Paul", "John", "Ringo",];
console.log(beatles);

let days= ["Monday","Tuesday", "Wednesday","Thursday"];
console.log(days.length);

console.log(days[3]);
console.log(days[1] [0]) // itt megmutatja az 1. indexnek (Tuesday) a 0.-dik betüjét ami a t

days[2]= "Saturday";
console.log(days);

days[1] = "Sunday";
console.log(days);

beatles[3]="George";
console.log(beatles)

// push- új ember hozzáadása
let movieLine= ["Tom", "nancy"];
movieLine.push("Jack");
console.log(movieLine)

// pop- töröl egy emebert a végéről

movieLine.pop();
console.log(movieLine)

let barbell = [];
barbell.push(32);
barbell.push(21);
barbell.push(11);
barbell.push(22);
barbell.push(32);
barbell.pop();
console.log(barbell);

// shift-elejéről törli a element
barbell.shift();
console.log(barbell);

// unshift az elejére illetszti be az embert
barbell.unshift(45);
barbell.unshift(55);
console.log(barbell);

// concat method 
let list1= ["banana", "oil", "butter"];
let list2= ["apple", "sugar", "orange"];

let list3= list1.concat(list2);
console.log(list3);

// slice azokat az elemeket fogja kiválasztani, amik az adott indexek megjelőlésével kiválasztunk, de az end a második szám +1-el kell nagyobbnak lennie mint amit akarunk, hogy végződjön az új tömbünk.
let cool = list3.slice(3,6)
console.log(cool)

// Splice- Ugyan olyan mint a slice, csak törölhetsz, illetve kicserélheted valamelyik létező elemet, illetve hozzáadhatsz.

let color= ["red", "orange","yellow", "green", "blue", "indigo","violet"];
console.log(color)
color.splice(5,1,"purple"); // első szám az INDEX-szám, második hogy hány dolgot törölsz, ha a szám 0 akkor hozzáadsz, és nem módosítasz, a string pedig amit föl akarsz vinni az arayba
console.log(color)


// DO NOT TOUCH!!! (please)
const airplaneSeats = [
  ['Ruth', 'Anthony', 'Stevie'],
  ['Amelia', 'Pedro', 'Maya'],
  ['Xavier', 'Ananya', 'Luis'],
  ['Luke', null, 'Deniz'],
  ['Rin', 'Sakura', 'Francisco']
];

// YOUR CODE GOES BELOW THIS LINE:

airplaneSeats[3] [1] ="Hugo";