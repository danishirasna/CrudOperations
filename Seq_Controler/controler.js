const M_Prod=require('../models/Product');

async function danish(){
    const products =await M_Prod.findOne({where: {ProductName: "ali"}});
    return products;
    // for (let product of products) {
    //     console.log(product.ProductName);
    //     }
    
}
module.exports=danish;