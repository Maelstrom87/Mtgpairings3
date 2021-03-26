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
let matches=[];
let firstHalf =[];
let secondHalf=[];
let allPlayers=[];
let playersName =[];
let td ;
let counter = 0;
let listWrapper = document.querySelector('#list-wrapper');
let matchWrapper = document.querySelector('#match-list');
const newMatch = document.querySelector('#next-match');
const confirm = document.querySelector('#confirm');
const classificaP = document.querySelector('.classifica');
const classList = document.querySelector('#class-wrapper');
const tableHeaders = ['Nome Giocatore','Punteggio','Rating'];
const nextMatch = document.querySelector('#next-match-pc');
const matchesPage = document.querySelector('.matches');
let newWrapper = document.createElement('ol');
let turn=1;



class Player {
  constructor(nome) {
    
  this.nome = nome;
  this.punteggio = 0;
  this.avversari = [];
  this.risultati = [];
  this.paired = false;
  this.bufferRis;
  this.bufferAvv;
    
  }
  calcRating() {
    let rate = 0;
    this.avversari.forEach(function(element){
      rate += element.punteggio;
    });
    return rate
  }
  get rating (){
    return this.calcRating
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
    //negare lo spazio come primo input
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

confirm.addEventListener('click',(e)=>{
  e.preventDefault();
  
  resultsCheck(matches);
});
newMatch.addEventListener('click',(e)=>{
  e.preventDefault();
  turnsPage.classList.remove('active');
  classificaP.classList.add('active');
  createStandings(allPlayers);

})

nextMatch.addEventListener('click', (e)=>{
  e.preventDefault();
  classificaP.classList.remove('active');
  turnsPage.classList.add('active');
  matchRoutine();


}

)





  

  









  





