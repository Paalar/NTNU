/* Part 2 */
console.log('PART 2')

for (i = 1; i < 21; i++) {  //starts the for loop with the variable i = 1, it stops at 21, for every loop it adds 1 (++)
  console.log(i); // prints every i value.
}

/* Part 3 */
console.log('PART 3')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (const a of numbers){ // a normal for loop won't work because the list is a const not var.
  if (a % 3 == 0 && a % 5 == 0) { // checks if a (a number in the list numbers) can be both divided with 3 and 5.
  console.log("eplekake");  // prints eplekake (only number 15 works)
} else if (a % 3 == 0){ // if not above it checks if it is only divisble by 3.
  console.log("eple"); // prints eple, only 3, 6, 9, 12, 18 works.
} else if (a % 5 == 0){ //if not 3 then it checks if it is divisble by 5.
  console.log("kake"); // prints kake, only 5, 10, 15, 20 works.
} else { // if not any of the above
  console.log(a); // it will print the number instead, 1, 2, 4, 7, 8, 11, 13, 14, 16, 17, 19
}
}
/* Part 4 */


document.getElementById("title").innerHTML = "Hello Javascript";
// goes into the html document where it is connected to by the <script></script> and finds the id "title".
//by using .innerHTML you can change what the id title display to whatever you want, in this case it is "Hello Javascript".

/* Part 5 */
function changeDisplay(){
  document.getElementById("magic").style.display = "none";
// creates a function, changeDisplay, when it is called (in html it is called by onclick="changeDisplay" which means when the button is pressed it will be called)
//it will change the id "magic" to "none" which doesn't exist. Removed from the site basically. which is why everything below the box is pushed up.
}

function changeVisibility(){
  document.getElementById("magic").style.display = "block";
  document.getElementById("magic").style.visibility = "hidden";
//when this function is called, same way was changeDisplay, but different button.
// changes the id magic to block and hidden. Which means it's still there, just invisible.
}

function reset(){
  document.getElementById("magic").style.display = "block";
  document.getElementById("magic").style.visibility = "visible";
// when this function is called like the others, it will change box id "magic" back to its default status which is diplay block and visibility visible.
// which is reseting everything.
}

/* Part 6 */
const technologies = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'Python',
  'Java',
  'AJAX',
  'JSON',
  'React',
  'Angular',
  'Bootstrap',
  'Node.js'
];

function createList() { // creates a function, and when it is called it will execute:
  var list = document.createElement("ul"); //starts by creating another unordered list
  for (const b of technologies){ //goes through every constant b in the list technologies
    var item = document.createElement("li"); //for every b it will create another list element in the html document
    item.appendChild(document.createTextNode(b)); // inside every <li></li> it will create a text which will be b. first will be <li>HTML5</li> then <li>CSS3</li> and so on
    list.appendChild(item); // for every <li>b</li> the for loop creates it will add it to the <ul></ul>. which will look something like <ul><li>b</li><li>b1</li> and so on with the rest of the lists </ul>
  }
  return list; // here it returns the variable list which consits of everything that has gone trhough the for loop.
}

document.getElementById("tech").appendChild(createList()); //here it executes the function in the id "tech". and adds the returned variabe list into the id "tech". which is the unordered list with all the list items inside it.
