import { addAFish, getAllFish } from "./src/fish.js";
import { closeClient } from "./src/connectDb.js";


addAFish();
getAllFish();

closeClient();
