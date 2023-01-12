require("dotenv").config();
const connectDB = require("./backend/db");
const Fooditem = require("");
const FoodDataJson = require("./foodData2.json");
const  FoodCategoryJson =require("./foodCategory.json");
const start =async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await Fooditem.create(FoodDataJson);
        await Fooditem.create(FoodCategoryJson);
        console.log("success");

    }catch(error){
        console.log(error);
    }
};

start();
    
