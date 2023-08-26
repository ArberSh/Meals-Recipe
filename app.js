
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


const wallpaper = document.querySelector(".wallpaper")
const mealWrapper = document.querySelector(".Meal--wrapper");
const input = document.getElementById("input")
const input1 = document.getElementById("input1")

async function meal(){
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`)
  const data = await response.json()
  let meal = data.meals
  reset()
  console.log(meal)
  wallpaper.style.display = "none"
  mealWrapper.style.display = "flex"
   
  if(!meal || input.value.trim() === ''){
    mealWrapper.innerHTML = `<h1 class="Result-msg">There's no meal that starts with "${input.value}"</h1>`
  }
  else{
    mealWrapper.innerHTML = meal.map((element) => {
             return `<a class="Meal-Link" href="MealInfo.html?meals=${element.strMeal}"><div id="Meals">
             <img src="${element.strMealThumb}" alt="">
            <div class="textCenter">
             <h1>${element.strMeal}</h1>
             </div>
             </div>
            </a>`;
          })
          .join(""); 
          
}input.value = ''
}
function reset(){
  mealWrapper.innerHTML = ''
}

    