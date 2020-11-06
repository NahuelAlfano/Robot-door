//creo variables y les asigno el id de cada puerta

let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

//creo variable d puertas cerradas

let numClosedDoors = 3;

//creo variables de puertas abiertas

let openDoor1;
let openDoor2;
let openDoor3;

//creo variables para las imagenes

let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
let closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

//funcion para jugar

let currentlyPlaying = true;

const playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors === 0){
    gameOver('win');
  }
  else if(isBot(door)){
    gameOver('')
  }
}

function gameOver(status){
  if(status == 'win'){
    startButton.innerHTML = 'You win! Play again?';
  }
  else{
    startButton.innerHTML = 'Game over! Play again?';
  }

  currentlyPlaying = false;
}


//start button y start gaem function

let startButton = document.getElementById('start');

function startRound(){
  numClosedDoors = 3;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  randomChoreDoorGenerator();
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
}

startButton.onclick = () => {
  if(!currentlyPlaying){
  startRound();}
}

//funcion para generar puerta random

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor == 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else if (choreDoor == 1){
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else if (choreDoor == 2){
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = botDoorPath;
  }
}

// chequear si la puerta ya esta abierta y si es robot

const isClicked = door => {
    if(door.src === closedDoorPath){
      return false;
    }
    else{
      return true;
    }
  }

  function isBot(door){
    if(door.src == botDoorPath){
      return true;
    }
    else 
    return false;
  }

//creo funciones on click para cada puerta

doorImage1.onclick = () => {
  if(!isClicked(doorImage1) && currentlyPlaying){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
}
doorImage2.onclick = () => {
  if(!isClicked(doorImage2) && currentlyPlaying){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}
doorImage3.onclick = () => {
  if(!isClicked(doorImage3) && currentlyPlaying){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}

startRound();