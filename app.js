async function main(){
    const input = document.querySelector("input")
    const text = document.querySelector("#text")
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`)
    const data = await response.json()
    console.log(data)
    let meal = data.meals 
    let namesArray = meal.map(person => person.strMeal);
    if(input.value === "" || !meal){
        
            text.innerHTML = " Please Write something "
             return;
        
      
    }
    else{
           
               text.innerHTML =`
               <div id="lol"> 
               <hi id="meal">${namesArray}</hi
               </div>
               `
    }
        }
    
    
main()

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
