import { addAFish, getAllFish, deleteFish,updateOneFish } from "./src/fish.js";
import { closeClient } from "./src/connectDb.js";


// await addAFish();
await deleteFish();
await updateOneFish();
await getAllFish();


closeClient();
