// Time complexity: O(m + n), m and n being the sizes of string A and string B

// Find the bistrings of a string and return a hashmap (key => bistring, value => count)
function mapBigrams(string) {
    const bigrams = new Map()
    for (let i = 0; i < string.length - 1; i++) {
      const bigram = string.substring(i, i + 2)
      const count = bigrams.get(bigram)
      bigrams.set(bigram, (count || 0) + 1)
    }
    return bigrams
  }
  
  // Calculate the number of common bigrams between a map of bigrams and a string
  
  function countCommonBigrams(bigrams, string) {
    let count = 0
    for (let i = 0; i < string.length - 1; i++) {
      const bigram = string.substring(i, i + 2)
      if (bigrams.has(bigram)) count++
    }
    return count
  }
  
  // Calculate Dice coeff of 2 strings
  function diceCoefficient(stringA, stringB) {
    if (stringA === stringB) return 1
    else if (stringA.length < 2 || stringB.length < 2) return 0
  
    const bigramsA = mapBigrams(stringA)
  
    const lengthA = stringA.length - 1
    const lengthB = stringB.length - 1
  
    let dice = (2 * countCommonBigrams(bigramsA, stringB)) / (lengthA + lengthB)
  
    // cut 0.xxxxxx to 0.xx for simplicity
    dice = Math.floor(dice * 100) / 100
  
    return dice
  }
  

console.log(mapBigrams('rahul'))