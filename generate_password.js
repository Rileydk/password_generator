const body = {
  length: 12,
  excludeCharacters: '123@#$'
}

function generatePassword() {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  let collection = []
  let password = ''

  if (body.lowercase === 'on') {
    collection = collection.concat(...lowerCaseLetters)
  }

  if (body.uppercase === 'on') {
    collection = collection.concat(...upperCaseLetters)
  }

  if (body.numbers === 'on') {
    collection = collection.concat(...numbers)
  }

  if (body.symbols === 'on') {
    collection = collection.concat(...symbols)
  }

  // filter the unwanted
  collection = collection.filter(item => !body.excludeCharacters.includes(item))

  // generatePassword()
  for (let i = 1; i <= body.length; i++) {
    password += drawCharacter(collection)
  }

  console.log(password)
}

function drawCharacter(arr) {
  let index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

generatePassword()
