setInterval(showTime, 1000);
// timmer
function showTime() {
  let time = new Date();
  let sec = time.getSeconds();
  let min = time.getMinutes();
  let hr = time.getHours();
  let date = time.getDate();
  let mnth = time.getMonth();
  let yr = time.getFullYear()

  let newSec = (sec < 10) ? "0" + sec : sec;
  let newHr = (hr < 10) ? "0" + hr : hr;
  let newDate = (date < 10) ? "0" + date : date;
  let newMin = (min < 10) ? "0" + min : min;
  let newMnth = (mnth < 10) ? "0" + mnth : mnth;

  document.querySelector('.time').innerHTML = newHr + ' : ' + newMin + ' : ' + newSec
   document.querySelector('.day').innerHTML = newDate + ' / ' + newMnth + ' / ' + yr

}
// adding a asound on click to clock
document.querySelector('.time').addEventListener('click', () => {
  var clickSound = new Audio('./Click.wav')
  clickSound.play();
})

// Adding music play
let playSong=document.querySelector('.play');
let onlyOneTime=true;
let musicPlay=new Audio('./music.mp3')
playSong.addEventListener('click',()=>{
 
  while(onlyOneTime){
  
  musicPlay.play();
  musicPlay.loop=true;
  onlyOneTime=false;
  }
  $('.time').fadeOut(1000).fadeIn(1000);
  
  $('.day').fadeOut(1000).fadeIn(1000)

})
// music stop 
let stopSong=document.querySelector('.stop')
stopSong.addEventListener('click',()=>{
  musicPlay.pause()
  $('.time').fadeOut(1000).fadeIn(1000);
  
  $('.day').fadeOut(1000).fadeIn(1000)
  onlyOneTime=true
})
