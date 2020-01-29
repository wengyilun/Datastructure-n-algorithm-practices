
    var insertionSort2 = nums => {  
        for(let i=1; i<nums.length; i++){
            for(let j=0; j<i;j++){
                if(nums[i] < nums[j]){
                    const spliced = nums.splice(i, 1)
                    nums.splice(j, 0, spliced[0])
                }
            }
        }
        return nums
      };

    var insertionSort = nums => {  
        for (let i = 1; i < nums.length; i++) {
          for (let j = 0; j < i; j++) {
            if (nums[i] < nums[j]) {
              let spliced = nums.splice(i, 1);//?
              nums.splice(j, 0, spliced[0]);//?
            }
          }
        }
      };


      insertionSort([2,3,10,9, 8, 11, 1, 4]) //?
      insertionSort2([2,3,10,9, 8, 11, 1, 4]) //?

