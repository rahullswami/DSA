const checkAnagramMap = (str1, str2) => {
    // check that inputs are strings.
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
      throw new TypeError('Both arguments should be strings.')
    }
  
    // If both strings have not same lengths then they can not be anagram.
    if (str1.length !== str2.length) {
      return false
    }
  
    const str1List = Array.from(str1.toUpperCase()) // str1 to array
  
    // get the occurrences of str1 characters by using HashMap
    const str1Occurs = str1List.reduce(
      (map, char) => map.set(char, map.get(char) + 1 || 1),
      new Map()
    )
  
    for (const char of str2.toUpperCase()) {
      // if char has not exist to the map it's return false
      if (!str1Occurs.has(char)) {
        return false
      }
  
      let getCharCount = str1Occurs.get(char)
      str1Occurs.set(char, --getCharCount)
  
      getCharCount === 0 && str1Occurs.delete(char)
    }
  
    return true
  }
  

console.log(checkAnagramMap('rahul','ankur'))