function arrayReplace(array, elemToReplace, substitutionElem) {
    //  write code here.
    for(let arr of array){
        if(arr === 1){
            elemToReplace = substitutionElem;
        }
      }
    }

    arrayReplace()
    
 // arrange
        const array = [1, 2, 1];
        const elemToReplace = 1;
        const substitutionElem = 3;
        
        // act
        const result = arrayReplace(array, elemToReplace, substitutionElem);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([3, 2, 3]);