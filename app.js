const input = document.querySelector("#input");
const input1 = document.querySelector("#input1");
async function main() {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value || input1.value}`
  );
  const data = await response.json();
  const mealWrapper = document.querySelector(".Meal--wrapper");
  let meal = data.meals;
  mealWrapper.innerHTML = meal
    .map((element) => {
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
function button1(){
  if (input.value.trim() === '') {
    console.log("SHKRUJE R DREQ");
  } else {
    main()
  }
  input.value = '';
}

function button2(){
  if (input1.value.trim() === '') {
    console.log("SHKRUJE R DREQ");
  } else {
    main()
  }
  input1.value = '';
  
}console.log("W ma boi");
