
const quotes = {
arr1 : ['Trust the process', 'You will, You can, you must', 'Be okay with failure'], 
arr2 : ['Failure helps you grow', 'Take the pain like a champ!', 'There is always ease after hardship'], 
arr3 : ['Keep going!', 'It is not a sprint, it is a marathon!', 'Go get it!', 'Seize the day!']
}

const word_1 = quotes.arr1[(Math.floor(Math.random() * quotes.arr1.length))]
const word_2 = quotes.arr2[(Math.floor(Math.random() * quotes.arr2.length))]
const word_3 = quotes.arr3[(Math.floor(Math.random() * quotes.arr3.length))]
console.log('Motivation for you!')
console.log(word_1 + ', ' + word_2 + ', ' + word_3)