//-----------1-----------
let arr1 = [];
for (let index = 0; index < 10; index++) {
    arr1.push(parseInt(Math.random() * 10));  
}
//-------
function showArray(array){
    console.log(array);
}
//-------
function showEvenElemOfArray(array){
    for (let index = 0; index < array.length; index++) {
        if(array[index] % 2 === 0 ){
            console.log(array[index]);
        }
    }
}
//-------
function showSumElemOfArray(array){
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum;
}
//-------
function getMaxElemOfArray(array){
    let max = array[0];
    for (let index = 1; index < array.length; index++) {
        if(array[index] > max){
            max = array[index];
        }  
    }
    return max;
}
//-------
function putElemIntoArrayWithIndex(array, index){
    let val = parseInt(Math.random() * 200);
    array.splice(index, 0, val);
    return array;
}
//-------
function deleteElemIntoArrayWithIndex(array, index){
    array.splice(index, 1);
    return array;
}

//-----------2-----------
let arr2 = [];
for (let index = 0; index < 5; index++) {
    arr2.push(parseInt(Math.random() * 10));  
}
//-------
function getArrayWithUniqueElem(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++){
            if(array[i] == array[j]){
                array.splice(j--, 1);
            }
        } 
    }
    return array;
}

function concatArrays(arr1, arr2){
    let arrRes = getArrayWithUniqueElem(arr1.concat(arr2));
    return arrRes;
}
//-------
function getArrayWithRepeatElemInArrays(arr1, arr2){
    let res = [];
    let temp = [];
    if(arr1.length < arr2.length){
        temp = arr1;
        arr1 = arr2;
        arr2 = arr1;
    }
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]){
                res.push(arr2[j]);
            }   
        }            
    }

    return getArrayWithUniqueElem(res);
}
//-------
function getArrayElemFromArray1NotExistInArra2(arr1, arr2){
    let res = arr1.filter(function(i){
        return this.indexOf(i) < 0;
    }, arr2);

    return res;
}

//-----------3-----------
let arrFruit = ["apple", "orange", "peache", "mango", "strawberry"];
arrFruit.sort();
//-------
function showWithDocumentWrite(arr){
    document.write("<ul>");
    arr.forEach(t => document.write(`<li>${t}</li>`));
    document.write("</ul>");
}
//-------
function isFruitInArrFruit(str){
    let res = arrFruit.map(t => {return t.toLowerCase();}).indexOf(str.toLowerCase());
    return res;
}
