const formatPhoneNumber = (phoneNumber) => {
    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
      // return "Invalid phone number."
      throw new TypeError('Invalid phone number!')
    }
  
    let index = 0
    return '(XXX) XXX-XXXX'.replace(/X/g, () => phoneNumber[index++])
  }
  
  
console.log(formatPhoneNumber('7800000000'))