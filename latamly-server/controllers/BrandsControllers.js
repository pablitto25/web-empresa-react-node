import ContentModel from '../models/ContentModel.js';


export const getBrandsByLanguaje = async(req,res) => {
    try {
        const brands = await ContentModel.findAll({ where: {cont_languaje:req.params.lg}});

        if(Object.keys(brands).length === 0){
            
            res.json({"message" : "No brands found"});
        } else {
            console.log("no vacio")
            res.json(brands[0]);
        }

        
    } catch (error) {
        res.json({message: error.message});
    }
}