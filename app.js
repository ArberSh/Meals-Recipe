// async function main() {
//   const input = document.querySelector("#input").value;
//   const response = await fetch(
//     `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
//   );
//   const data = await response.json();
//   const mealWrapper = document.querySelector(".Meal--wrapper");
//   const prove = document.querySelector("#test");
//   console.log(data);
//   let meal = data.meals;
//   if (input === "" || !meal) {
//     mealWrapper.innerHTML = `<h1 class="message">Please Make sure you write correct</h1>`;
//     return;
//   }
//   // mealWrapper.innerHTML = meal
//   //   .map((element) => {
//   //     return `<a class="Meal-Link" href="#"><div id="sup">
//   //   <img src="${element.strMealThumb}" alt="">
//   //   <div class="textCenter">
//   //   <h1>${element.strMeal}</h1>
//   //   </div>
//   //   </div>
//   //   </a>`;
//   //   })
//   //   .join("");
// }
// main();
// const prove = document.querySelector("#test");
// const input = document.querySelector("#input");
// function main(){
//   const input1 = input.value
//   if(input1 === ""){
//     prove.innerHTML = `<h1>GABIMMM</h1>`
//     console.log("Lol")
//     return;
//   }
//   else{
//     console.log("hi")
//     prove.innerHTML = `<h1>Hi</h1>`
//   }
  
// }
const inputElement = document.querySelector("#input");
const messageElement = document.querySelector("#test");

function main() {
  const input = inputElement.value;

  if (input === "") {
    messageElement.innerHTML = "<h1>GABIMMM</h1>";
    console.log("Lol");
  } else {
    console.log("hi");
    messageElement.innerHTML = "<h1>Hi</h1>";
  }
}