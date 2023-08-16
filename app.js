
const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="

const input = document.querySelector("#input")
const input1 = document.querySelector("#input1")
const mealWrapper = document.querySelector(".Meal--wrapper");
const wallpaper = document.querySelector(".wallpaper");
const message = document.querySelector(".message")
const MealSection = document.querySelector(".Meal--Section")

async function main(meals){
  const response = await fetch(apiUrl + meals);
   const data = await response.json();
   let meal = data.meals;
   
   mealWrapper.innerHTML = `<h1>You searched "THIS?"</h1>`
   
   if(!data || !data.meals || data.meals.length === 0){
     MealSection.style.dispaly = "block"
     mealWrapper.style.display = "none" //S'ke ven gje te HTML
     wallpaper.style.display = "none";
     
    }
    else{ 
      MealSection.style.display = "block"
      MealSection.style.padding = "6rem 0 0 0"
      mealWrapper.style.display = "flex"
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
  if(input.value.trim() === ''){
    message.style.display = "block"
  }
  else{
  main(input.value)
  }
}
function bt1(){
  if(input1.value.trim() === ''){
    message.style.display = "block"
  }
  else{
    main(input1.value)
  }
}