
const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="

//index.Html
const input = document.querySelector("#input")
const input1 = document.querySelector("#input1")
const wallpaper = document.querySelector(".wallpaper");
const message = document.querySelector(".message")
const MealSection = document.querySelector(".Meal--Section")

//Results.html
const inputResult = document.querySelector("#input2") 
const mealWrapper = document.querySelector(".Meal--wrapper");
async function main(meals){
  const response = await fetch(apiUrl + meals);
   const data = await response.json();
   let meal = data.meals;
   inputResult.value === input1
   console.log(inputResult.value)
   if(!data || !data.meals || data.meals.length === 0){
    //  MealSection.style.display = "block"
    mealWrapper.style.display = "none"
    console.log("Nope it doesnt exist!!")
    //  wallpaper.style.display = "none";
     
    }
    else{ 
      mealWrapper.style.padding = "6rem 0 0 0"
      mealWrapper.style.display = "flex"
      // document.querySelector(".wallpaper").style.display = "none"
      
      mealWrapper.innerHTML = meal.map((element) => {
        return `<a class="Meal-Link" href="MealInfo.html?meals=${element.strMeal}"><div id="sup">
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
  input2.value = '';
 console.log(input1)
  }
 
  if (window.location.pathname.includes("MealInfo.html")){
      console.log("hi")
    
    }
    function bt2(){
  if(input2.value.trim() === ''){
    message.style.display = "block"
  }
  else{
    main(input2.value)
  }
}

      if (window.location.pathname.includes("MealInfo.html")){
      console.log("hi")
      main()
      
    }

    if (window.location.pathname.includes("Results.html")){
      console.log("hi")
      main()
    }