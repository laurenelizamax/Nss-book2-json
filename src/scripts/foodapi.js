const foodContainer = document.getElementById("foodList");

let foodList = (foodObj) => {

let foodHTML = `
  <section>
  <h3>Name: ${foodObj.name}</h3>
  <p>Category: ${foodObj.category}</p>
  <p>Ethnicity: ${foodObj.ethnicity}</p>
  </section>
`
return foodHTML;
}
function addFoodToDom(htmlString) {
    foodContainer.innerHTML += htmlString;
}

fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            const foodAsHTML = foodList(food)
            addFoodToDom(foodAsHTML)
        })
    })
    console.log("hi");


/*
const foodList = {
fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        console.table(parsedFoods)
    })
}
api.array.forEach((item, index) => {
    
}) */