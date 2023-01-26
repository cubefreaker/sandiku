function translateTxt() {
  let encodedTxt = document.querySelector('#ncdtxt').value
  let decodedTxt = document.querySelector('#dcdtxt').value
  
  if(!encodedTxt && !decodedTxt) {
    alert('Isi salah satu dulu dong 😊')
    return
  }
  
  if(!!encodedTxt && !!decodedTxt) {
    alert('Satu aja dong yang diisi, jangan dua-duanya 😟')
    return
  }
  
  let type = encodedTxt && !decodedTxt ? 'encode' : 'decode'
  let target = document.querySelector(type == 'encode' ? '#dcdtxt' : '#ncdtxt')
  let sourceTxt = type == 'encode' ? encodedTxt : decodedTxt
  let baseLetter = type == 'encode' ? 'vwxyzabcdefghijklmnopqrstu' : 'abcdefghijklmnopqrstuvwxyj' 
  let bufferLetter = type == 'encode' ?  'abcdefghijklmnopqrstuvwxyj' : 'vwxyzabcdefghijklmnopqrstu'

  target.value = crack(sourceTxt, baseLetter, bufferLetter)
}

function crack(sourceTxt, baseLetter, bufferLetter) {
  let result = ''
  sourceTxt.split(' ').forEach(function(word) {
    let arrLetter = []
    word.split('').forEach(function(letter){
      try {
        arrLetter.push(baseLetter[bufferLetter.indexOf(letter)])
      } catch (err) {
        arrLetter.push(letter)
      }
    })
    result += `${arrLetter.join('')} `
  })
  return result
}

function clearTxt() {
  document.querySelector('#ncdtxt').value = ''
  document.querySelector('#dcdtxt').value = ''
}