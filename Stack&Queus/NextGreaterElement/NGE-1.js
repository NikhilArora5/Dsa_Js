var nextGreaterElement = function(nums1, nums2) {
    
    // Length of nums2
    let n = nums2.length
    
    // Map to store Next Greater Element for each number in nums2
    // Example: ngeMap[x] = next greater element of x
    const ngeMap = {}
    
    // Stack will store elements in decreasing order
    // This helps us efficiently find the next greater element
    let stack = []
    
    // Result array for nums1
    let result = []

    // Start from the last element of nums2
    let prev = nums2[n - 1]
    
    // Last element has no element to its right
    ngeMap[prev] = -1
    
    // Push last element into stack
    stack.push(prev)

    // Traverse nums2 from right to left
    for (let i = n - 2; i >= 0; i--) {
        let curr = nums2[i]

        // Case 1: Previous element is greater than current
        // Then prev is the next greater element of curr
        if (prev > curr) {
            ngeMap[curr] = prev
            stack.push(curr)
            prev = curr
        } else {

            // Case 2: Need to search in stack for next greater element
            // Pop elements smaller than or equal to curr
            while (stack.length && !ngeMap[curr]) {
                let top = stack[stack.length - 1]

                if (top > curr) {
                    // Found next greater element
                    ngeMap[curr] = top
                } else {
                    // Remove smaller elements as they can’t be NGE
                    stack.pop()
                }
            }

            // If no greater element found, assign -1
            if (!ngeMap[curr]) {
                ngeMap[curr] = -1
            }

            // Push current element into stack
            stack.push(curr)
            prev = curr
        }
    }

    // Build result for nums1 using the precomputed map
    for (let j = 0; j < nums1.length; j++) {
        result.push(ngeMap[nums1[j]])
    }

    // ⚠️ Typo fix: resultt -> result
    return result
};

console.log(nextGreaterElement( [1,3,5,2,4],[6,5,4,3,2,1,7]))