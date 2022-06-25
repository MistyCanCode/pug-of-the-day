//Get a dog photo from the dog.ceo api and place the photo in the DOM

document.querySelector('h2').addEventListener('click', getNewPug)

var date = new Date()
var day = date.toDateString()
console.log(date + day)
const d =  document.querySelector('.day').textContent = ` ${day}`
//d.textContent= ` ${day}`

fetch("https://dog.ceo/api/breed/pug/images/random")
.then(res => res.json()) //parse response as json
.then(data => {
    console.log(data.message)
    document.querySelector('img').src = data.message
})
.catch(err => {
    console.log(`error ${err}`)
});

function getNewPug(){

    fetch("https://dog.ceo/api/breed/pug/images/random")
        .then(res => res.json()) //parse response as json
        .then(data => {
            console.log(data.message)
     document.querySelector('img').src = data.message
})
.catch(err => {
    console.log(`error ${err}`)
});
}