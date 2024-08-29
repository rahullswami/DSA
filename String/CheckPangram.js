const checkPangramSet = (string) => {
    if (typeof string !== 'string') {
      throw new TypeError('The given value is not a string')
    }
  
    const lettersSet = new Set()
  
    for (const letter of string.toUpperCase()) {
      if (/[A-Z]/.test(letter)) {
        // if the letter is a valid uppercase alphabet then the add method insert the letter to the HashSet
        lettersSet.add(letter)
      }
    }
  
    return lettersSet.size === 26
  }
  
console.log(checkPangramSet('rahul'))  