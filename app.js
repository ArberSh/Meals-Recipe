
// const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="


// const input = document.querySelector("#input")
// const input1 = document.querySelector("#input1")
// const wallpaper = document.querySelector(".wallpaper");
// const message = document.querySelector(".message")
// const MealSection = document.querySelector(".Meal--Section")

// const inputResult = document.querySelector("#input2") 
// const mealWrapper = document.querySelector(".Meal--wrapper");
// async function main(meals){
//   const response = await fetch(apiUrl + meals);
//    const data = await response.json();
//    let meal = data.meals;
//    inputResult.value === input1
//    console.log(inputResult.value)
//    if(!data || !data.meals || data.meals.length === 0){
//     MealSection.style.display = "block"
//     mealWrapper.style.display = "none"
//     console.log("Nope it doesnt exist!!")
//     wallpaper.style.display = "none";
     
//     }
//     else{ 
//       mealWrapper.style.padding = "6rem 0 0 0"
//       mealWrapper.style.display = "flex"
//       document.querySelector(".wallpaper").style.display = "none"
      
//       mealWrapper.innerHTML = meal.map((element) => {
//         return `<a class="Meal-Link" href="MealInfo.html?meals=${element.strMeal}"><div id="sup">
//         <img src="${element.strMealThumb}" alt="">
//         <div class="textCenter">
//         <h1>${element.strMeal}</h1>
//         </div>
//         </div>
//         </a>`;
//       })
//       .join(""); 
    
//     } 
    
//   input2.value = '';
//  console.log(input1)
//   }
 
//   if (window.location.pathname.includes("MealInfo.html")){
//       console.log("hi")
    
//     }
//     function bt2(){
//   if(input2.value.trim() === ''){
//     message.style.display = "block"
//   }
//   else{
//     main(input2.value)
//     input1.value = ''
//     input.value = ''
//   }
// }

const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="

const wallpaper = document.querySelector(".wallpaper")
const mealWrapper = document.querySelector(".Meal--wrapper");
const input = document.getElementById("input")
const input1 = document.getElementById("input1")
const message = document.querySelector(".message")
const InfoWrapper = document.querySelector(".Information-wrapper")

async function meal(meals){
  const response = await fetch(apiUrl + meals)
  const data = await response.json()
  let meal = data.meals
  reset()
  wallpaper.style.display = "none"
  mealWrapper.style.display = "flex"
  if(!meal){
    mealWrapper.innerHTML = `<h1 class="Result-msg">There's no meal that starts with "${input.value || input1.value}"</h1>`
  }
  else{
    mealWrapper.innerHTML = meal
  .map((element) => {
    return `
      <div class="Meal-Link" onclick="test('${element.strMeal}')">
        <!-- ... -->
      </div>`;
  })
  .join("");
  
}
  input.value = ''
  console.log(meals)
}
function reset(){
  mealWrapper.innerHTML = ''
  InfoWrapper.style.display = "none"
}

function bt1(){

       if(input.value.trim() === ''){
         message.style.display = "block"
      }
       else{
        meal(input.value)
       }
     }
function bt2(){

      if(input1.value.trim() === ''){
        message.style.display = "block"
     }
      else{
       meal(input1.value)
      }
    }

    function test(data) {
      const selectedMeal = meal.find(element => element.strMeal === data);
      if (selectedMeal) {
        InfoWrapper.style.display = "block";
        mealWrapper.style.display = "none";
        showRecipeDetails(selectedMeal);
      }
    }


    