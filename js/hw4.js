const text = prompt("Please write @");
if(text === "@"){
alert(`Its right: ${text}`)
} else {
    alert("Please write again")
}


const price = prompt("Donate:");
if(price > 10){
    alert(`${price} Сума більша за 10`)
} else{
    alert(`${price} Сума менша або дорівнює 10`)
}

const js = "I love JavaScript";
if(js.includes(`JavaScript`)){
    alert(`Текст містить слово JavaScript`)
} else{
    alert(`Текст не містить слово JavaScript`)
}

const number = prompt("Write a random number");
if(10 <= number && number < 20){
alert("Число входить в діапазон від 10 до 20")
}else{
    alert("Число не входить в діапазон від 10 до 20")
}


