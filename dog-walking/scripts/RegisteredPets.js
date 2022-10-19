/*Time to repeat the process, but with pets. The process is going to follow the exact same pattern, but the data is different.

Follow this algorithm.

Update the code in RegisteredPets module so that the <li> for each pet has an id attribute with the following format id="pet--1". The primary key should be correct for each element.
Add a click event listener to your HTML document.
Store the target HTML element of the click event in a variable.
Check if the id property of the element starts with the string of "pet".
If it does, use the split() method on the id property to get an array of two string (e.g. ["pet", "4"])
Use array deconstruction to assign the primary key to a variable named petPrimaryKey.
Find the whole pet object by iterating the array of pet objects and comparing each primary key to the integer value of the petPrimaryKey variable.
As soon as a match is found, display a message that the dog barks at you - "Rocket barks at you"
 */


import { getPets, getWalkers } from "./database.js"

const walkers=getWalkers()
const pets = getPets()

document.addEventListener("click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("pet")) {
          const [, petId] = itemClicked.id.split("--")

    let matchingPet= null
    for (const pet of pets) {
        if (parseInt(petId)=== pet.id){
            matchingPet= pet
        }
    }

 let matchingWalker = null
 for (let walkerx of walkers) {
 if (matchingPet.walkerId=== walkerx.id){
    matchingWalker = walkerx
    }
}

    window.alert(`${matchingPet.name} is being walked by ${matchingWalker.name}`);
        }}
  

)



    export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML}
