// Create an array called pets with the following properties: name, age, species, id, ownerId
// Create an array called owners with the following properties: firstName, lastName, id

let pets = [
    {
        name: "Sugar Socks",
        age: 5,
        species: "Unicorn",
        id: "ff60f8f0-6dae-4d42-9856-750a714c34cc",
        ownerId: "4b7bec5c-cc21-418a-97ba-4d69c17a81a6",
    }, {
        name: "Wildfire",
        age: 10,
        species: "Dragon",
        id: "9c170724-3e74-4c16-b6ad-b4f27c96c5ef",
        ownerId: "289dc4b8-360a-4810-b453-e3c8723dad69",
    }, {
        name: "Ernouf",
        age: 8,
        species: "Warewolf",
        id: "4853f75a-3248-4c6d-8306-f6a172a572c8",
        ownerId: "79b109f3-3408-43b7-9928-4afd78c4a70d",
    }, {
        name: "Griff",
        age: 6,
        species: "Griffin",
        id: "fc2e0f90-03a1-44f8-9cba-f3e6e8abbd03",
        ownerId: "17767353-8536-4ee4-86e9-0ab7ef169486",
    }, {
        name: "FireSpitting",
        age: 15,
        species: "Dragon",
        id: "060072e9-4495-4f54-81c8-45b383450e0c",
        ownerId: "289dc4b8-360a-4810-b453-e3c8723dad69",
    }, {
        name: "Venom",
        age: 9,
        species: "Dragon",
        id: "3a86f06b-c68a-4e37-afb4-44fcc003c65b",
        ownerId: "289dc4b8-360a-4810-b453-e3c8723dad69",
    }
];

let owners = [
    {
        firstName: "Charlotte",
        lastName: "Smith",
        id: "4b7bec5c-cc21-418a-97ba-4d69c17a81a6",
    }, {
        firstName: "Oliver",
        lastName: "Johnson",
        id: "17767353-8536-4ee4-86e9-0ab7ef169486",
    }, {
        firstName: "Ava",
        lastName: "Williams",
        id: "79b109f3-3408-43b7-9928-4afd78c4a70d",
    }, {
        firstName: "William",
        lastName: "Brown",
        id: "289dc4b8-360a-4810-b453-e3c8723dad69",
    }
];

// Q1 Write a function that returns a pet given its id

function getPet(id) {
    function getPetById(pet) {
        return pet.id == id;
    }
    return pets.find(getPetById);
}
let myPet = getPet("ff60f8f0-6dae-4d42-9856-750a714c34cc");
console.log(myPet);

// Q2 Write a function that returns an owner given its id

function getOwner(id) {
    function getOwnerById(owner) {
        return owner.id == id;
    }
    return owners.find(getOwnerById);
}
let myOwner = getOwner("17767353-8536-4ee4-86e9-0ab7ef169486");
console.log(myOwner);

// Q3 Write a function that returns the all the pets for an owner

function getPetsOwnedById(id) {
    function getPetsOwnedById(owner) {
        return owner.ownerId == id;
    }
    return pets.filter(getPetsOwnedById);
}
let myFurryBabies = getPetsOwnedById("289dc4b8-360a-4810-b453-e3c8723dad69");
console.log(myFurryBabies);

// Q4 Write a function that returns the number of pets for each owner: return array should be an object with property ownerId and numberOfPets

function numberOfPetsPerOwner() {
    function howManyPetsPerOwner (owner) {
        let result = {};
        result.ownerId = owner.id;
        result.numberOfPets = getPetsOwnedById(owner.id).length;
        return result;
    }
    return owners.map(howManyPetsPerOwner)
}
console.log(numberOfPetsPerOwner());

// Q5 Write a function that returns all the names of the pets in order of their owner's last name

function allPetsInOrderOfLastName (){
    function ownersLastName (pet1, pet2) {
        let owner1 = getOwner(pet1.ownerId)
        let owner2 = getOwner(pet2.ownerId)
        if (owner1.lastName.toLowerCase() < owner2.lastName.toLowerCase()) {
            return -1;
        } else if (owner1.lastName.toLowerCase() > owner2.lastName.toLowerCase()) {
            return 1;
        } else {
            return 0;
        }
    }
    return pets.sort(ownersLastName)
}
console.log(allPetsInOrderOfLastName());
