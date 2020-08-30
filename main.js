// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
document.querySelector('#modal').className += 'hidden'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  removeError();
  clickHeart();
});

const removeError = () => {
  document.querySelector('#modal').className += 'hidden'
}

const clickHeart = () =>{
  document.querySelectorAll('.like').forEach( x => {
    x.addEventListener('click', () => {
      console.log('click')
      let promise1 = mimicServerCall()
      promise1.then(() =>{
        if (x.innerText[6] === EMPTY_HEART) {
          x.innerText = `Like! ${FULL_HEART}`
          x.classList.add("activated-heart")
        }else{
          x.innerText = `Like! ${EMPTY_HEART}`
          x.classList.remove("activated-heart")
        }
      })
      promise1.catch((error) => {
        console.log(error)
        document.querySelector('#modal').classList.remove("hidden")
        setTimeout(() => {
        document.querySelector('#modal').classList.add("hidden")
        }, 5000)
      });
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
