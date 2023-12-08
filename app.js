function filterOutOdds(){
    var nums=Array.prototype.slice.call(arguments);
    return nums.filter(function(num){
        return num%2===0
    })
}

// Converted to

function filterOutOdds2(...nums){
    return nums.filter((val)=>val%2===0);
}

// Or even

const filterOutOdds3=(...nums)=>nums.filter((val)=>val%2===0);
// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

//      FIND MIN

// --------------------------------------------------------------

function findMin(){
    var nums=Array.from(arguments);
    return nums.reduce(function(accumulator, currentVal){
        if(currentVal<accumulator){
            return currentVal
        }
        return accumulator
    })
}

// Converted to

function findMin2(...nums){
    return nums.reduce((accumulator,currentVal)=>{
        if(currentVal<accumulator){
            return currentVal
        }
        return accumulator
    })
}

// Or even

const findMin3=(...nums)=>nums.reduce((acc,crntVal)=>(crntVal<acc?crntVal:acc));

// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

//      MERGE OBJECTS

// --------------------------------------------------------------

function mergeObjects(obj1,obj2){
    var newObj={};
    for(let key in obj1){
        if(obj1.hasOwnProperty(key)){
            newObj[key]=obj1[key];
        }
    }
    for(let key in obj2){
        if(obj2.hasOwnProperty(key)){
            newObj[key]=obj2[key];
        }
    }
    return newObj
}

// Converted to

function mergeObjects2(obj1,obj2){
    return {...obj1,...obj2};
}

// Or evern

const mergeObjects3=(obj1,obj2)=>({...obj1,...obj2});

// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

// DOUBLE AND RETURN ARGS

// --------------------------------------------------------------

function doubleAndReturnArgs(arr){
    var doubleVals=arr.slice();
    for(let i=1;i<arguments.length;i++){
        doubleVals.push(arguments[i]*2);
    }
    return doubleVals
}

// Coverted to

function doubleAndReturnArgs2(arr,...vals){
    const doubleVals=[...arr,...vals.map((val)=>{
        return val*2
    })];
    return doubleVals
}

// Or even

const doubleAndReturnArgs3=(arr,...vals)=>[...arr,...vals.map((val)=>val*2)];

// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

//      REMOVE RANDOM

// --------------------------------------------------------------

function removeRandom(...vals){
    const randomIndex=Math.floor(Math.random()*vals.length);
    return vals.filter((_,index)=>index!==randomIndex);
}

// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

//      EXTEND

// --------------------------------------------------------------


function extend(arr1,arr2){
    return [...arr1,...arr2];
}

// or

const extend2=(arr1,arr2)=>[...arr1,...arr2];

// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

//      REMOVE KEY

// --------------------------------------------------------------

function removeKey(obj,key){
    const {[key]:removeKey,...rest}=obj;
    return rest
}

const removeKey2=(obj,key)=>(({[key]:removeKey,...rest})=>rest)(obj);

// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

//      ADD KEY VALUE

// --------------------------------------------------------------

function addKeyVal(obj,newKey,val){
    return {...obj,[newKey]:val};
}

// or

const addKeyVal2=(obj,newKey,val)=>({...obj,[newKey]:val});

// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

//      COMBINE

// --------------------------------------------------------------

function combine(obj1,obj2){
    return {...obj1,...obj2}
}

// or

const combine2=(obj1,obj2)=>({...obj1,...obj2});
// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

//      UPDATE

// --------------------------------------------------------------

function update(obj,key,val){
    return {...obj,[key]:val}
}

const update2=(obj,key,val)=>({...obj,[key]:val});