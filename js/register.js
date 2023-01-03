//Object literal

let petSalon = {
    name: "The Fashion Pet",
    phone: "555-555-555",
    addres:{
        street: "University",
        number: "7250",
        zip:"11176",
    },
    hours:{
        open: "9:00 AM",
        close: "17:00",
    },
    pets:[]
}

//Constructor 
function Pet(name, age, gender, breed, service, owner, phone){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.ownername = owner;
    this.contactPhone = phone;
}

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");

function register(){
    console.log(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value);

    let newPet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value);
    petSalon.pets.push(newPet);
    console.log(newPet);
    console.log(petSalon.pets);
    clearForm();

}

function clearForm(){
    inputName.value = "";
    inputAge.value = "";
    inputGender.value = "";
    inputBreed.value = "";
    inputService.value = "";
}

function init(){
    let scooby = new Pet ("Scooby", 50, "Male", "Dane", "Grooming", "Shaggy", "666-666-6666");
    let scrappy = new Pet ("Scrappy" , 40, "Male", "Mixed", "Nails cut", "Shaggy", "888-888-8888");
    petSalon.pets.push(scooby, scrappy); 
    console.log(petSalon.pets)
    console.log(petSalon.pet[0].name)
    console.log(petSalon.pet[1].name)
}

window.onload = init;