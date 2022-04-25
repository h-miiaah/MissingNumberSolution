/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    const length = nums.length;
    let sum = ((length + 1) * length) / 2;

    for (let i = 0; i < length; i++) {
        sum = sum - nums[i];
      }

      return sum;
  };

  /**
   * First calculate the sum of all the numbers from 1 to n.
   * Then we loop through the array and subtract each number from the sum.
   * Finally, we return the difference between the sum and the actual sum.
   * 
   */