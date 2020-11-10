function generatePassword(option) {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  let collection = []
  let password = ''

  if (option.lowercase === 'on') {
    collection = collection.concat(...lowerCaseLetters)
  }

  if (option.uppercase === 'on') {
    collection = collection.concat(...upperCaseLetters)
  }

  if (option.numbers === 'on') {
    collection = collection.concat(...numbers)
  }

  if (option.symbols === 'on') {
    collection = collection.concat(...symbols)
  }

  // filter the unwanted
  collection = collection.filter(item => !option.excludeCharacters.includes(item))

  if (!collection.length) {
    return 'There is no valid character in your selection.'
  }

  // generatePassword()
  for (let i = 1; i <= option.length; i++) {
    password += drawCharacter(collection)
  }

  return password
}

function drawCharacter(arr) {
  let index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

module.exports = generatePassword
