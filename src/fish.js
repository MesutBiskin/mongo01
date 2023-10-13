
import { ObjectId } from "mongodb";
import { db } from "./connectDb.js";

const fishDb = db.collection('fish');

const theFish = {
    species: 'catfish',
    origin: 'Amazon',
    color: 'silver',
    size: '1"',
    family:{
    dad:'🐠', 
    sister:'🐟', 
    mom:{cool: true, special:undefined},
    brothers: ['🐢','🐡']
    },
};

//  Add a fish
export async function addAFish(){
   const fishAdded = await fishDb.insertOne(theFish);
   console.log('fishAdded ->',fishAdded);
}

//  Get all fishies
export async function getAllFish(){
    const fishList = await fishDb.find({}).toArray();
    console.table(fishList);
}
// delete tetro fish
export async function deleteFish(){
    // 1.find the fish we want to delete ???
    // 2.delete it

    //const fishDeleted = await db.collection('fish').findOneAndDelete({species: 'tetro'});
    
    //find one and delete by id ??? WTF
    const mydCleanId = new ObjectId('65283e6f83a8fc9cd4f6f519');
   
    const fishDeleted = await fishDb.findOneAndDelete({_id:mydCleanId});

    console.log('fishDeleted ->',fishDeleted);
  
}

// Update Fish

export async function updateOneFish(){ 
    //1.define the fish we want to update
    //2.determine what property want to update
    //3.Find the item we want update
    // 4.Then we update with new data
    const cleanId = new ObjectId ('6528210027af0d360fbcc0c4');
    const dataToUpdate = { color: 'red'};

  const updatedFish = await fishDb.findOneAndUpdate({_id: cleanId},{ $set:{ color: 'red'} });
  console.log('updateFish ->', updatedFish);
}



