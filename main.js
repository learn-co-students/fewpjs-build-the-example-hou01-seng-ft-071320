// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.querySelector('#modal').className += "hidden"

let heart = document.querySelectorAll('.like-glyph')

for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener('click', function(){
  let variable = mimicServerCall()
  variable.then(() => {
    
    if (heart[i].innerText === EMPTY_HEART){
      heart[i].innerText = FULL_HEART
      heart[i].classList.add("activated-heart")
    } else {
      heart[i].innerText = EMPTY_HEART
      heart[i].classList.remove("activated-heart")
    }
  }) 
  variable.catch((error) => {
    document.querySelector('#modal').classList.remove("hidden")
    setTimeout(() => {
    document.querySelector('#modal').classList.add("hidden")}, 5000
    )
  })
  
  })
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
