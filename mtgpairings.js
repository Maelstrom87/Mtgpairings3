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
let bye = 'bye';

let td ;


class Player {
  constructor(nome) {
    
    this.nome = nome;
    this.punteggio = 0;
    this.avversari = [];

  }


}
let players = [];
invia.addEventListener('click', () =>{

  createPlayer(nameInput.value);
  addPlayer(nameInput.value);
  nameInput.value=''; 
});

nameInput.addEventListener('keypress', (e) =>{
  if(e.key === 'Enter'){
    createPlayer(nameInput.value);
    addPlayer(nameInput.value);
    nameInput.value='';
  }
});

generator.addEventListener('click',() =>{
  mainPage.classList.remove('active');
  tablePage.classList.add('active');
  shuffler(players);
  generatePosition(players);
});

oppo.addEventListener('click',()=>{
  tablePage.classList.remove('active');
  turnsPage.classList.add('active');
  oppositePairing(firstHalf,secondHalf);

});
random.addEventListener('click',()=>{
  tablePage.classList.remove('active');
  turnsPage.classList.add('active');
  randomPairing(firstHalf,secondHalf);

});

  

  









  





