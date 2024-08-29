const checkSnakeCase = (varName) => {
    // firstly, check that input is a string or not.
    if (typeof varName !== 'string') {
      throw new TypeError('Argument is not a string.')
    }
  
    const pat = /(.*?)_([a-zA-Z])*/
    return pat.test(varName)
  }
  
console.log(checkSnakeCase('ra_hu_l'))  