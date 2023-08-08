async function main() {
  const input = document.querySelector("input").value;
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
  );
  const data = await response.json();
  const text = document.querySelector("#text");
  const prove = document.querySelector("#test");
  let meal = data.meals;
  if (input === "" || !meal) {
    text.innerHTML = " Please Write something ";
    return;
  }
  text.innerHTML = meal.map((element)=>{
    return `<div id="sup">
    <h1>${element.strMeal}</h1>
    </div>`;
  }).join("");
  
}
main();

// let arr = [
//   {
//     lale: 1,
//     njish: "LOL",
//     skidibum: 3,
//     skrrraa: 4,
//   },
//   {
//     njish: "LMAO",
//     Oplk: 3,
//     ueeee: 2,
//   },
// ];
// let namesArray = arr.map(person => person.njish);
// console.log(namesArray);
