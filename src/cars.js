//  CRUD  - cars collection

import { ObjectId } from "mongodb";
import { db } from "./connectDb.js";

const carsDb = db.collection('cars');

const theCars = {
    year: '2021',
    make:'Mercedes',
    model:'E300',
    color:'Black',
    tranmission:'Automatic',
    type:'sedan',
};

// Add a car
export async function addCar(){
const carsAdded = await carsDb.insertOne(theCars);
console.log('Cars Added -->',carsAdded)

}
// get all Cars

export async function getAllCars(){
const carList = await carsDb.find({}).toArray();
console.table(carList);
}

// delete one car
export async function deleteCars(){

// const carsDeleted = await carsDb.findOneAndDelete({make:'Audi'});

// find one and delete by _id 
const myNewId = new ObjectId ('652859a1c18fc1cf892db76f');

const carsDeleted = await carsDb.findOneAndDelete({_id:myNewId});


console.log('carDeleted ->',carsDeleted);

}

// update CARs

export async function updateOneCar(){
    const updateId = new ObjectId('65285a1770ec160338fddcec');
    const colorToUpdate = {color:'red'};

    const updatedCar = await carsDb.findOneAndUpdate({_id:updateId},{ $set:{color : 'yellow'}});
    console.log('updated cars ->',updatedCar);

}



