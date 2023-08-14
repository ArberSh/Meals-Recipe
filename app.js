// const input = document.querySelector("#input");
// const input1 = document.querySelector("#input1");

// async function main() {
//   const response = await fetch(
//     `https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value || input1.value}`);
  
//     const data = await response.json();
//   const mealWrapper = document.querySelector(".Meal--wrapper");
//   let meal = data.meals;
//   if (input.value.trim() === '' || !meal) {
//     console.log("SHKRUJE R DREQ");
//   } 
//   else {

//   }

//   mealWrapper.innerHTML = meal
//     .map((element) => {
//       return `<a class="Meal-Link" href="#"><div id="sup">
//     <img src="${element.strMealThumb}" alt="">
//     <div class="textCenter">
//     <h1>${element.strMeal}</h1>
//     </div>
//     </div>
//     </a>`;
//     })
//     .join("");
// }

// function button1(){
//   main()
//   input.value = '';
// }

// function button2(){
//   if (input1.value.trim() === '') {
//     console.log("SHKRUJE R DREQ");
//   } else {
//     main()
//   }
//   input1.value = '';
  
// }

const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="

const input = document.querySelector("#input")
const but = document.querySelector(".button-nav")
const input1 = document.querySelector("#input1")
const but1 = document.querySelector(".SearchButton")
const mealWrapper = document.querySelector(".Meal--wrapper");

async function main(meals){
  const response = await fetch(apiUrl + meals);
   const data = await response.json();
   let meal = data.meals;
  if(input.value.trim() === '' || !meal){
    mealWrapper.style.display = "none"
   
  }
  else{ 
    mealWrapper.style.display = "flex"
     mealWrapper.style.padding = "6rem 0 0 0"
    document.querySelector(".wallpaper").style.display = "none"
    mealWrapper.innerHTML = meal.map((element) => {
      return `<a class="Meal-Link" href="#"><div id="sup">
    <img src="${element.strMealThumb}" alt="">
    <div class="textCenter">
    <h1>${element.strMeal}</h1>
    </div>
    </div>
    </a>`;
    })
    .join("");
  }
  input1.value = '';
  input.value = '';
}
function bt(){
  main(input.value)
}
function bt1(){
  main(input1.value)
}