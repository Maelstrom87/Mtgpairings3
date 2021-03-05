const invia = document.querySelector('.confbtn');
const pList = document.querySelector('ol');
const nameInput = document.querySelector('#nameinput');
const generator = document.querySelector('#generator');
const list = document.querySelector('.playerlist');
const tableArea = document.querySelector('#tablearea');
let table = document.createElement('table');
let tr = document.createElement('tr');
let tr2 = document.createElement('tr');
const mainPage =document.querySelector('.main');
const tablePage = document.querySelector('.table');
const turnsPage =document.querySelector('.turns');
const oppo =document.querySelector('#oppo');
const random = document.querySelector('#random');
const matches=[];
let firstHalf =[];
let secondHalf=[];

let playersName =[];
let td ;
let counter = 0;
let listWrapper = document.querySelector('#list-wrapper');



class Player {
  constructor(nome) {
    
    this.nome = nome;
    this.punteggio = 0;
    this.avversari = [];

  }


}
let players = [];
invia.addEventListener('click', () =>{
  if(nameInput.value !=''){
    //createPlayer(nameInput.value);
    addPlayer(nameInput.value);
    nameInput.value=''; 
  }else{
    return
  }
});

nameInput.addEventListener('keypress', (e) =>{
  if(e.key === 'Enter' && nameInput.value != ''){
    //createPlayer(nameInput.value);
    addPlayer(nameInput.value);
    nameInput.value='';
  }
});

generator.addEventListener('click',() =>{
  mainPage.classList.remove('active');
  tablePage.classList.add('active');
  createPlayer(playersName);
  shuffler(players);
  generatePosition(players);
});

oppo.addEventListener('click',(e)=>{
  e.preventDefault();
 
  oppositePairing(firstHalf,secondHalf);
  tablePage.classList.remove('active');
  turnsPage.classList.add('active');
  printPairing(matches);
  
  return false;
});

random.addEventListener('click',(e)=>{
  e.preventDefault();
 
  randomPairing(firstHalf,secondHalf);
  tablePage.classList.remove('active');
  turnsPage.classList.add('active');
  printPairing(matches);
  return false;

});


  

  









  





