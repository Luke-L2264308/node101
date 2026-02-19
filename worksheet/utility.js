/**
 * The subtract function is complete and ready for use.
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * To make the add function available for import to other
 * programs it must be exported, so prepend the word
 * "export" to the function definition (as seen in the
 * subtract example above)
 */
export function add(a, b) {
  return a + b;
}

export function compare(a, b){
  if (a.length != b.length) return false 
  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) return false  
    
  }
  return true 

}

export function largest (arr){
  let largestValue = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]>largestValue) largestValue = arr[i]
    
  }
  return largestValue
}

export function zeroest(arr){
  let zerostValue = arr[0]
  const largestValue = largest(arr)
  for (let i = 0; i < arr.length; i++) {
    if (largestValue - Math.abs(arr[i])> largestValue-Math.abs(zerostValue)) zerostValue = arr[i]
    
  }
  return zerostValue
}