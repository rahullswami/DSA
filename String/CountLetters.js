const countLetters = (str) => {
    const specialChars = /\W/g
  
    if (typeof str !== 'string') {
      throw new TypeError('Input should be a string')
    }
  
    if (specialChars.test(str)) {
      throw new TypeError('Input must not contain special characters')
    }
  
    if (/\d/.test(str)) {
      throw new TypeError('Input must not contain numbers')
    }
  
    const obj = {}
    for (let i = 0; i < str.toLowerCase().length; i++) {
      const char = str.toLowerCase().charAt(i)
      obj[char] = (obj[char] || 0) + 1
    }
  
    return obj
  }
console.log(countLetters('rahulswami'))  