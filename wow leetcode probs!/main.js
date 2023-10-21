
/*  Palindorme Question (9 LEET CODE NUMBER)

let isPalindorme = function(numb){
    if (((String(numb).includes('-')))){
        return false
    }

    const reverse = String(numb).split('').reverse().join('')
    
    if (reverse==String(numb)){
        return true
    }
    else{
        return false

    }


}

*/




//  Duplicate question (217 LEET CODE NUMBER)
/*

let duplicate = function(array){
    let newArraySize=(new Set(array).size)
    if (newArraySize==array.length){
        return false
    }
    else{
        return true
    }
    
}
*/


// 219. Contains Duplicate II

// var containsNearbyDuplicate = function(nums, k) {
//     found = false;
//     for (let i=0; i<nums.length;i++){
//         for (let j=i+1; j<nums.length;j++){

//             if(nums[i] == nums[j]) {
//                 if (j-i<=k){
//                   found = true
//                   return true  
//                 }
                

//             }

//     else{
//          found= false
//     }

//         }

//     }
//     return found
// };

// console.log(containsNearbyDuplicate([1,2,3,1],3))








// 5. Longest Palindromic Substring? (TODO)

// let isPalindorme = function(numb){
//     if (((String(numb).includes('-')))){
//         return false
//     }

//     const reverse = String(numb).split('').reverse().join('')
    
//     if (reverse==String(numb)){
//         return true
//     }
//     else{
//         return false

//     }


// }
// mx =''
// var longestPalindrome = function(s) {
    

//     for(let i=0;i<s.length;i++){
//         currMx =''
//         for(let j=i;j<s.length;j++){
//                 currMx+=s[j]
//                 if (isPalindorme(currMx)){
                    
//                     if(mx.length<currMx.length){
//                         mx= currMx
//                     }
//                 }
//                 else{
//                     currMx=''  
//                 }


//         }
//     }    
//     return mx
// };

// console.log(longestPalindrome("babad"));



// 14. Longest Common Prefix 
// var longestCommonPrefix = function(strs) {

//     if (strs.length==0){
//         return ''
//     }

//     let prefix = strs[0]

//     for (let i=0;i<strs.length; i++){
//         while (strs[i].indexOf(prefix)!=0){
//             prefix = prefix.substring(0,prefix.length-1)
//         }
//     }
    
//     return prefix
// };

// console.log(longestCommonPrefix(["flower","flow","flight"]));









// 21. Merge Two Sorted Lists

// var mergeTwoLists = function(arr, arr1) {
//     let arr2 = ([...arr,...arr1]).sort()
//     return arr2
// };  

// console.log(mergeTwoLists([1,2,4],[1,3,4]))

// var mergeTwoLists = function(arr, arr1) {
//     ans=[]
//     for (let i = 0; i <arr.length;i++){
//         ans.push(arr[i])
//     }
//     for (let j = 0; j <arr1.length;j++){
//         ans.push(arr1[j])
//     }
//     return ans.sort()
// };  
// console.log(mergeTwoLists([1,2,4],[1,3,4]))
// var mergeTwoLists = function(l1, l2) {
//     var dummy = {
//       val : -1,
//       next : null
//     };
//     var curr = dummy;
//     while (l1 && l2) {
//         if (l1.val > l2.val) {
//             curr.next = l2;
//             l2 = l2.next;
//         } else {
//             curr.next = l1;
//             l1 = l1.next;
//         }
//         curr = curr.next;
//     }
    
//     curr.next = l1 || l2;

//     return dummy.next;
// };


// let petr = [{name: '213',name2: '2113',name3: '2123',name4: '2133'},{name: '213f',nam344e2: '21asd13',na324me3: '212d3',nam324e4: '2133sd'}]
// let petr={
//     name: '1',
//     name2: '2',
//     name3: '3',
//     name4: '4'   
// }

// for( key in petr ){
//     console.log(petr.name);
    
// }
// console.log(Object.values(petr));



// let strToArray = function(str){
//     ans=[]
//     for (let i = 0; i <str.length;i++){
//         ans.push(str[i])
//     }
//     return ans
// }




// 26. Remove Duplicates from Sorted Array


// var removeDuplicates = function(nums) {

//     let arr = (new  Set (nums))

//     return arr
// };

// console.log(removeDuplicates([1,1,2]));







// 23. Merge k Sorted Lists

// var mergeKLists = function(lists) {
//     ans=[]
//     for (let i = 0 ; i<lists.length;i++){
//         ans=[...ans,...lists[i]]
//     }
//     return ans.sort()
// };

// console.log(mergeKLists([[1,4,5],[1,3,4],[2,6]]))
// console.log(mergeKLists([[1,4,5],[1,3,4],[7,6]]))

// // let arr2 = ([...arr,...arr1]).sort()
//     // return arr2





// 27. Remove Element

// var removeElement = function(nums, val) {
//     let isDeleted = 0
//     let expectedNums =[]
//     for (let i = 0 ; i<nums.length;i++){
//         if (nums[i]==val){
//             isDeleted++
            
//         }
//         else{
//           expectedNums.push(nums[i])
//         }
//     }

//     return expectedNums

// };


// console.log(removeElement([0,1,2,2,3,0,4,2],2));


// document.addEventListener('mousemove', function(e) {


//     let bublesz = document.createElement('bublesz');
//     let x = e.pageX;    
//     let y = e.pageY;
//     bublesz.style.left = x + "px";
//     bublesz.style.top = y + "px";
//     let size = Math.random() * 50;
//     bublesz.style.width = 1 + size + "px";
//     bublesz.style.height = 1 + size + "px";
    
//     document.body.appendChild(bublesz);
//     setTimeout(function() {
//       bublesz.remove();
//     }, 100);
//   });
  
  
//   (function() {
//     // Add event listener
//     document.addEventListener("mousemove", parallax);
//     const elem = document.querySelector("#parallax");
//     // Magic happens here
//     function parallax(e) {
//         let _w = window.innerWidth/2;
//         let _h = window.innerHeight/2;
//         let _mouseX = e.clientX;
//         let _mouseY = e.clientY;
//         let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
//         let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
//         let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
//         let x = `${_depth3}, ${_depth2}, ${_depth1}`;
//         console.log(x);
//         elem.style.backgroundPosition = x;
//     }

// })();

