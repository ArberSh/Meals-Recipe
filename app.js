const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="

const wallpaper = document.querySelector(".wallpaper")
const mealWrapper = document.querySelector(".Meal--wrapper");
const input = document.getElementById("input")
const input1 = document.getElementById("input1")
const message = document.querySelector(".message")
const InfoWrapper = document.querySelector(".Information-wrapper")
const Title = document.querySelector(".TitleMeal")
const Steps_P = document.querySelector(".steps-p")

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
      return `<div class="Meal-Link"onclick="getId('${element.idMeal}')"><div id="Meals">
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

    function getId(id) {
      const selectedMeal = meal.find(element => element.idMeal === id);
      if (selectedMeal) {
        InfoWrapper.style.display = "flex";
        mealWrapper.style.display = "none";
        showRecipeDetails(selectedMeal);  
      }
      console.log(meal)
    }
    
    function showRecipeDetails(data) {

      titleShorter(data.strMeal)
      Title.textContent = data.strMeal
         
      const ImageMeal = document.querySelector(".PhotoMeal")
      ImageMeal.src = data.strMealThumb
      
      const ingredientList = document.querySelector(".ingredients-wrapper ul");
      ingredientList.innerHTML = generateIngredientList(data);
      
      const steps = document.querySelector(".steps-meal p");
      textShorter(data.strInstructions)
      steps.textContent = data.strInstructions;
      

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

    function textShorter(text){
      
      let MaxText = 600
      if(text.length > MaxText){
        Steps_P.style.width = "40rem"
        Steps_P.style.fontsize = "15px"
      }else{
        Steps_P.style.width = "30rem"
        Steps_P.style.fontsize = "16px"
      }

      return text
      
    }
    function titleShorter(title){
      
      if(title.length > 12){
        Title.style.fontsize = "20px"
      }else{
        Title.style.fontsize = "46px"
      }
      console.log(title.length)
      return title
      
    }

    