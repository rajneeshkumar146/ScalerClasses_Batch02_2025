function searchItem(arrayOfProducts, serachTerm){
    let modifiedArray = arrayOfProducts;

    if(serachTerm != ""){
        modifiedArray = modifiedArray.filter((product) => {
            let lowerCaseSearchTerm  = serachTerm.toLowerCase();
            let lowerCaseTitle = product.title.toLowerCase();

            return lowerCaseTitle.includes(lowerCaseSearchTerm);
        });
    }

    return modifiedArray;
}

export default function basicOps(arrayOfProducts, serachTerm){
    if(arrayOfProducts === null || !Array.isArray(arrayOfProducts) || arrayOfProducts.length === 0){
        return [];
    }

    let modifiedArray = arrayOfProducts;

     /** ********************* Filtering Products ****************** */
     modifiedArray = searchItem(modifiedArray, serachTerm);

     return modifiedArray;
}