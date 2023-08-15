
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
  if(!data || !data.meals || data.meals.length === 0){
    console.log("works")
    console.log("Before:", mealWrapper.style.display);
    mealWrapper.style.display = "none";
    console.log("After:", mealWrapper.style.display);
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
  if(input.value.trim() === ''){
    console.log("error")
  }
  else{
  main(input.value)
  }
}
function bt1(){
  if(input1.value.trim() === ''){
    console.log("error")
  }
  else{
    main(input1.value)
  }
}