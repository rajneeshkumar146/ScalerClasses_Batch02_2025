function searchItem(arrayOfProducts, serachTerm) {
    let modifiedArray = arrayOfProducts;

    if (serachTerm != "") {
        modifiedArray = modifiedArray.filter((product) => {
            let lowerCaseSearchTerm = serachTerm.toLowerCase();
            let lowerCaseTitle = product.title.toLowerCase();

            return lowerCaseTitle.includes(lowerCaseSearchTerm);
        });
    }

    return modifiedArray;
}

function sortingOfProducts(arrayOfProducts, sortDirection) {
    if (sortDirection != 1 && sortDirection != -1) {
        console.log("Sort Direction is not correct: ", sortDirection);
        return arrayOfProducts;
    }

    let modifiedArray = arrayOfProducts;

    // // Default Behaviour: Increasing Order or else Descreasing Order.
    // if (sortDirection === 1) {
    //     modifiedArray = modifiedArray.sort((product1, product2) => {
    //         return product1.price - product2.price;
    //     });
    // } else {
    //     // 
    //     modifiedArray = modifiedArray.sort((product1, product2) => {
    //         return product2.price - product1.price;
    //     });
    // }

    modifiedArray = modifiedArray.sort((product1, product2) => {
        return sortDirection * (product1.price - product2.price);
    });

    return modifiedArray;
}

function categorization(arrayOfProducts, currCategory){
    let modifiedArray = arrayOfProducts;
    const ALL_CATEGORIES = "All Categories";
    if(currCategory.localeCompare(ALL_CATEGORIES) != 0){
        modifiedArray = modifiedArray.filter((product) => product.category.localeCompare(currCategory) === 0)
    }

    return modifiedArray;
}

const pagination = (arrayOfProducts, pageNum, pageSize) => {
    let modifiedArray = arrayOfProducts;
    let totalPages = Math.ceil(modifiedArray.length / pageSize);

    let sidx = (pageNum - 1) * pageSize;
    let eidx = Math.min(sidx + (pageSize - 1), modifiedArray.length - 1);

    modifiedArray = modifiedArray.slice(sidx, eidx + 1);

    return {modifiedArray, totalPages};
}

export default function basicOps(arrayOfProducts, serachTerm, sortDirection, currCategory,pageNum, pageSize) {
    if (arrayOfProducts === null || !Array.isArray(arrayOfProducts) || arrayOfProducts.length === 0) {
        return [];
    }

    let modifiedArray = arrayOfProducts;

    /** ********************* Filtering Products ****************** */
    modifiedArray = searchItem(modifiedArray, serachTerm);

    /******************** Sorting products ********************/
    modifiedArray = sortingOfProducts(modifiedArray, sortDirection);

    /********************categorization /********************/
    modifiedArray = categorization(modifiedArray, currCategory);

    if(!Array.isArray(modifiedArray)){
        console.log("You forget to return modified array");
    }

    return pagination(modifiedArray, pageNum, pageSize);
}