const form = document.querySelector("#search__form");
const input = document.querySelector("#search__food");
const output = document.querySelector(".search__output");
const button = document.querySelector("#search__button");
const list = document.querySelector("#output__list");
const foodCollection = [];
const mealslist = document.querySelector("#list");


//display list of searched foods
const renderFood = (food = "") => {

    //clear output list
    output.innerHTML = ""


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com',
            'X-RapidAPI-Key': '43d3fb7c0fmsh61aad25b1572c83p1e0711jsn447f5a916019'
        }
    };

    fetch(`https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=${food}`, options)
        .then(response => response.json())
        .then(data => {
            data.hints.forEach(item => {
                let calorie = item.food.nutrients.ENERC_KCAL;

                output.insertAdjacentHTML("beforeend", `
                    
                    <div class = "item">${item.food.label}, ${Math.round(calorie)} per 100g</div>
                    
                `)

                //work with item class
                // let renderedList = document.querySelectorAll(".item");
                // renderedList.forEach(data => {

                //     data.addEventListener('click', () => {
                //         foodCollection.push(data)
                //         console.log(foodCollection)
                //     })

                // })

            })

        })
        .catch(err => console.error(err));

}



//enable to choose some food

// const btn = document.querySelector("#btn");

const foodPicker = () => {

    const foodList = document.querySelectorAll(".item");
    console.log(foodList)

    foodList.forEach(data => {
        console.log(data)

        data.addEventListener('click', (event) => {

            foodCollection.push(data)
            console.log(foodCollection)



        })

    });


};

// btn.addEventListener("click", () => {

// })

button.addEventListener("click", () => {

    renderFood(input.value)


    setTimeout(() => {
        console.log("waiting")
        foodPicker()
    }, 3000)
})


//display selected items
let biba = () => {

    mealslist.innerText = ""
    foodCollection.forEach(item => {
        mealslist.insertAdjacentHTML("beforeend", `<li>${item.innerText}</li>`)
    })
}

const testbtn = document.querySelector("#btn");

testbtn.addEventListener('click', () => {
    biba()
})