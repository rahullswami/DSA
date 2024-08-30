function isPalindromeIterative(x) {
    if (typeof x !== 'string' && typeof x !== 'number') {
      throw new TypeError('Input must be a string or a number')
    }
  
    // Convert x to string whether it's number or string
    const string = x.toString()
    const length = string.length
  
    if (length === 1) return true
  
    // Apply two pointers technique to compare first and last elements on each iteration
    for (let start = 0, end = length - 1; start < end; start++, end--) {
      // Early return if compared items are different, input is not a palindrome
      if (string[start] !== string[end]) return false
    }
    // If early return in condition inside for loop is not reached, then input is palindrome
    return true
  }
console.log(isPalindromeIterative('wow'))  