const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="

const wallpaper = document.querySelector(".wallpaper")
const mealWrapper = document.querySelector(".Meal--wrapper");
const input = document.getElementById("input")
const input1 = document.getElementById("input1")
const message = document.querySelector(".message")
const InfoWrapper = document.querySelector(".Information-wrapper")

let meal = []

async function getmeal(meals){
  const response = await fetch(apiUrl + meals);
  const data = await response.json();
  meal = data.meals; 
  reset();
  wallpaper.style.display = "none";
  mealWrapper.style.display = "flex";
  if (!meal.length) {
    mealWrapper.innerHTML = `<h1 class="Result-msg">There's no meal that starts with "${input.value || input1.value}"</h1>`;
  } else {
    mealWrapper.innerHTML = meal.map((element) => {
      return `<div class="Meal-Link"onclick="test('${element.idMeal}')"><div id="Meals">
      <img src="${element.strMealThumb}" alt="">
      <div class="textCenter" >
       <h1>${element.strMeal}</h1>
       </div>
       </div>
      </div>`;
    }).join("");
  }
  input.value = '';
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
        getmeal(input.value)
       }
     }
function bt2(){

      if(input1.value.trim() === ''){
        message.style.display = "block"
     }
      else{
       getmeal(input1.value)
      }
    }

    function test(id) {
      const selectedMeal = meal.find(element => element.idMeal === id);
      if (selectedMeal) {
        InfoWrapper.style.display = "block";
        mealWrapper.style.display = "none";
        showRecipeDetails(selectedMeal);  
      }
      console.log(meal)
    }
    
    function showRecipeDetails(data) {
      document.querySelector(".Title").textContent = data.strMeal;

      
      const ImageMeal = document.querySelector(".PhotoMeal")
      ImageMeal.src = data.strMealThumb
      
      const ingredientList = document.querySelector(".ingredients-wrapper ul");
      ingredientList.innerHTML = generateIngredientList(data);
      
      const steps = document.querySelector(".steps-meal p");
      steps.textContent = data.strInstructions;
      console.log(data.strMealThumb)
    }
    function generateIngredientList(data) {
      let ingredientList = "";
      for (let i = 1; i <= 20; i++) {
        if (data[`strIngredient${i}`]) {
          ingredientList += `<li>${data[`strIngredient${i}`]} - ${data[`strMeasure${i}`]}</li>`;
        }
      }
      return ingredientList;
    }


    