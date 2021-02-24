function shuffler(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

function createPlayer(name){
 
    let newPlayer = new Player(name)
    players.push(newPlayer);
    
      
}

function addPlayer(name) {

    const newLine = document.createElement('li');
    newLine.classList.add('list');
    newLine.innerText = name;
    list.appendChild(newLine);
   
}

function tableSeat (array,position){
    
    for (var i = 0 ; i<array.length;i++){
        
        td = document.createElement('td');
        td.innerHTML= `<p>${array[i].nome}</p>`
        td.classList.add('seat');
        position.appendChild( td );
        table.appendChild(position);
        
        
    }
    
}   

function generatePosition (array) {

    
    shuffler(array);
    shuffler(array);

    firstHalf = array.splice(0, Math.floor((array.length / 2)));
    secondHalf = [...array];
    
    console.log(firstHalf);
    console.log(secondHalf);
    
    tableSeat(firstHalf,tr);
    tableSeat(secondHalf,tr2);
       
    tableArea.appendChild(table);
    
}

function oppositePairing(array1,array2){

    if(array1.length < array2.length){
        array1.push(bye);
    }
    if(array1.length > array2.length){
        array2.push(bye);
    }    
    for(var i=0; i<array2.length; i++){
        matches.push([array1[i],array2[array2.length-i-1]]);
    }
    console.log(matches);
}

function randomPairing(array1,array2){
    players= [...array1,...array2]
    if (players.length % 2){
        players.push(bye);
    }
    
    shuffler(players)
    let half = players.length /2 ;

    for (let i = 0; i < half; i++) {
        let match = [players[i],players[half+i]]
        matches.push(match);
    }
    console.log(matches);
}