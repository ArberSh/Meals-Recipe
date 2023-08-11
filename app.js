async function main() {
  const input = document.querySelector("#input").value;
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
  );
  const data = await response.json();
  const mealWrapper = document.querySelector(".Meal--wrapper");
  const prove = document.querySelector("#test");
  console.log(data);
  let meal = data.meals;
  if (input === "" || !meal) {
    mealWrapper.innerHTML = `<h1 class="message">Please Make sure you write correct</h1>`;
    return;
  }
  mealWrapper.innerHTML = meal
    .map((element) => {
      return `<a href="#"><div id="sup">
    <img src="${element.strMealThumb}" alt="">
    <div class="textCenter">
    <h1>${element.strMeal}</h1>
    </div>
    </div>
    </a>`;
    })
    .join("");
}
main();
