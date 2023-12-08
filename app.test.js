describe('filterOutOdds',function(){
    let testArray=[1,2,3,4,5,6,7,8,9,10];
    it('should remove odd values from a number array',function(){
        expect(filterOutOdds(...testArray)).toEqual([2,4,6,8,10]);
        expect(filterOutOdds2(...testArray)).toEqual([2,4,6,8,10]);
        expect(filterOutOdds3(...testArray)).toEqual([2,4,6,8,10]);
    })
})

describe('findMin',function(){
    let testArray=[1,2,3,4,5,6,7,8,9,10];
    it('should find and return the smallest value in a list of arguments',function(){
        expect(findMin(...testArray)).toEqual(1);
        expect(findMin2(...testArray)).toEqual(1);
        expect(findMin3(...testArray)).toEqual(1);
    })
})

describe('mergeObjects',function(){
    let obj1={key:'value'};
    let obj2={yes:'no'};
    it('should take two objects and return one object with both sets of key/value pairs',function(){
        expect(mergeObjects(obj1,obj2)).toEqual({key:'value',yes:'no'});
        expect(mergeObjects2(obj1,obj2)).toEqual({key:'value',yes:'no'});
        expect(mergeObjects3(obj1,obj2)).toEqual({key:'value',yes:'no'});
    })
})

describe('doubleAndReturnArgs',function(){
    let testArray=[1,2,3];
    it(`should take in an array and various numbers, double the numbers, and return all
    values as a sinlge array`,function(){
        expect(doubleAndReturnArgs(testArray,4,5,6)).toEqual([1,2,3,8,10,12]);
        expect(doubleAndReturnArgs2(testArray,4,5,6)).toEqual([1,2,3,8,10,12]);
        expect(doubleAndReturnArgs3(testArray,4,5,6)).toEqual([1,2,3,8,10,12]);
    })
})

describe('removeRandom',function(){
    it('should choose a random element in a list of arguments and return an array without that element',function(){
        spyOn(Array.prototype,'filter').and.callThrough();
        const result=removeRandom(1,2,3,4,5);
        expect(Array.prototype.filter).toHaveBeenCalled();
        expect(Array.prototype.filter.calls.argsFor(0)[0]).toEqual(jasmine.any(Function));
        expect(result.length).toEqual(4);
    })
})

describe('extend',function(){
    let testArr1=[1,2,3];
    let testArr2=[4,5,6];
    it('should take two arrays and return one array with every element',function(){
        expect(extend(testArr1,testArr2)).toEqual([1,2,3,4,5,6]);
        expect(extend2(testArr1,testArr2)).toEqual([1,2,3,4,5,6]);
    })
})

describe('addKeyVal',function(){
    let obj={key:'value'};
    it('should take in an object, key and value, and add a key/value pair to the object',function(){
        expect(addKeyVal(obj,'yes','no')).toEqual({key:'value',yes:'no'});
        expect(addKeyVal2(obj,'yes','no')).toEqual({key:'value',yes:'no'});
    })
})

describe('removeKey',function(){
    let testObj={one:'1',two:'2',three:'3'};
    it('should take an object and a key, then remove the key/value pair of said key',function(){
        expect(removeKey(testObj,'two')).toEqual({one:'1',three:'3'});
        expect(removeKey2(testObj,'one')).toEqual({two:'2',three:'3'});
    })
})

describe('combine',function(){
    let obj1={one:'1',two:'2',three:'3'};
    let obj2={four:'4',five:'5',six:'6'};
    it('should take two objects and return a new object with all key/value pairs',function(){
        expect(combine(obj1,obj2)).toEqual({one:'1',two:'2',three:'3',four:'4',five:'5',six:'6'});
        expect(combine2(obj1,obj2)).toEqual({one:'1',two:'2',three:'3',four:'4',five:'5',six:'6'});
    })
})

describe('update',function(){
    let testObj={one:'1',two:'2'};
    it('should take in an object, key, and value, and add a key/value pair to the object',function(){
        expect(update(testObj,'three','3')).toEqual({one:'1',two:'2',three:'3'});
        expect(update2(testObj,'three','3')).toEqual({one:'1',two:'2',three:'3'});
    })
})