// Which type of search is efficient on a sorted array?
// ● A) Linear Search
// ● B) Binary Search
// ● C) Hash Search
// ● D) Exponential Search
// // Your answer: B) Binary Search


// What is the time complexity of inserting a new node at the
// beginning of a singly linked list?
// ● A) O(1)
// ● B) O(n)
// ● C) O(log n)
// ● D) O(n log n)
// // Your answer: A) O(1)


// In a binary search tree (BST), the left child of a node is always:
// ● A) Greater than the node
// ● B) Smaller than the node
// ● C) Equal to the node
// ● D) Random compared to the node
// // Your answer:  B) Smaller than the node


// Which traversal of a BST visits nodes in ascending order?
// ● A) Pre-order
// ● B) Post-order
// ● C) In-order
// ● D) Level-order
// // Your answer: C) In-order


// In a doubly linked list, what does the prev pointer in the first
// node point to?
// ● A) The last node
// ● B) Null
// ● C) The second node
// ● D) The middle node
// // Your answer: B)Null


function reverseAnInteger(integer) {
    const isNegative = integer < 0;
    
    let x = Math.abs(integer);
    let reversed = 0;

    while (x > 0) {
        let lastDigit = x % 10;
        reversed = reversed * 10 + lastDigit;
        x = Math.floor(x / 10);
    }

    return isNegative ? -reversed : reversed;
}


console.log(reverseAnInteger(123)); 
console.log(reverseAnInteger(-456)); 



function findTargetIndex(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i; 
        } else if (nums[i] > target) {
            return i; 
        }
    }
}

console.log(findTargetIndex([1, 3, 5, 6], 5))
console.log(findTargetIndex([1, 3, 5, 6], 2))



function findSmallestDuplicate(array) {
    let arrayWithoutDuplicates = [];
    let duplicates = [];

    for (let i = 0; i < array.length; i++) {
        if (!arrayWithoutDuplicates.includes(array[i])) {
            arrayWithoutDuplicates.push(array[i]);
        } else if (!duplicates.includes(array[i])) {
            duplicates.push(array[i]);
        }
    }

    let smallestDuplicate = duplicates[0];
    for (let i = 1; i < duplicates.length; i++) {
        if (duplicates[i] < smallestDuplicate) {
            smallestDuplicate = duplicates[i];
        }
    }

    return smallestDuplicate;
}

console.log(findSmallestDuplicate([4, 10, 5, 1, 11, 5, 4, 1]));
console.log(findSmallestDuplicate([1, 10, 1, -1, 10, -1]));




