// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const hidden = document.getElementById('modal')
hidden.hidden = true

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', () => {
  
  
  likeButton()
  fetch1()

  
  
})

const fetch1 = () => {
  fetch("http://mimicServer.example.com")
    .then(function() {
        console.log("ok");
    }).catch(function() {
        hidden.hidden = false;
        setTimeout(function(){ hidden.hidden = true; }, 5000);
    });
}




const likeButton = () => {
  const like = document.querySelectorAll('.like')
  like.forEach( l => {
      l.addEventListener('click', () => {
        fetch1()
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
