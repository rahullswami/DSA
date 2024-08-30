const validateEmail = (str) => {
    if (str === '' || str === null) {
      throw new TypeError('Email Address String Null or Empty.')
    }
  
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str)
  }
  
console.log(validateEmail('rahull.in01@gmail.com'))  