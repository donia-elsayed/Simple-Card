const webDesigner = {
  name: "YOUR NAME",
  yearsAlive: [1992, 2021],
  imgSrc: "user-f.jpg",
  skills: ["Photoshop", "HTML", "CSS", "JS"],
  diet: {
    food: "Indomi",
    drinks: ["Coffee", "Nescafe", "tea", "water"],
  },
}

//write your name instead of the YOUR NAME placeholder
webDesigner.name = "Donia Elsayed";
/*write a getAge function that takes the years alive array and returns your age,
 save the value you return in a const of name age*/
const age = getAge();
function getAge() {
  myAge = webDesigner.yearsAlive;
  [start, end] = myAge;
  return end - start;
}
/*Divide the skills into designSkills and developmentskills using ES6*/
const [designSkills, ...developmentskills] = webDesigner.skills;

/*add Those extra skills to the developmentskills array ['ES6', 'ES2015'] and add all of them into a new updatedDevSkills const*/
const updatedDevSkills = [...developmentskills,...['ES6', 'ES2015']];

/*destructure the diet object and using new ES6 write a function that returns drinks that contain the letter t and save the returned values in a variable ‘tDrinks’ */
const { food,drinks } = webDesigner.diet;
const tDrinks=[];
function getDrinks(drinks) {
  drinks = webDesigner.diet.drinks;
  for (item of drinks) {
    if (item.includes('t')) tDrinks.push(item);
  }
  return tDrinks;
}

var myCard = document.getElementById("mycard");
myCard.innerHTML = buildID();
function buildID () {
  const userID = `
  <div class="inner-container">
    <img src="${webDesigner.imgSrc}" alt="">
    <div class="info">
      <h1>${webDesigner.name}</h1>
      <p><span class="text-grey">Age:</span> ${age}</p>
      <p><span class="text-grey">Design Skills:</span>${designSkills}</p>
      <p><span class="text-grey">Dev Skills:</span>${updatedDevSkills}</p>
      <p><span class="text-grey">Food:</span>${food}</p>
      <p><span class="text-grey">Drinks:</span>${getDrinks(drinks)}</p>
    </div>
  </div>
  `;
  return userID
}
