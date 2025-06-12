const audio = new Audio("Conquista.mp3");
audio.preload = "auto";

function playSound() {
  audio.currentTime = 0.05;
  audio.play(); 
}