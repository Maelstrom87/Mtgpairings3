function shuffler(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
};

function createPlayer(array){
   /*
    let newPlayer = new Player(name)
    players.push(newPlayer);
    */
    for (var i = 0; i< array.length; i++){
        let newPlayer = new Player(array[i]);
        players.push(newPlayer) ;
    }
    if (players.length % 2){
        let byePlayer = new Player('bye')
        players.push(byePlayer);
    }
    
         
};

function addPlayer(name) {
    if(!playersName.includes(name)){
            
        playersName.push(name);
                
        const newLine = document.createElement('li');
        newLine.classList.add('list');
        newLine.innerText = name;
        list.appendChild(newLine);
        const deleteBtn = document.createElement('input');
        deleteBtn.setAttribute('type' , 'submit');
        deleteBtn.setAttribute('ID', 'delete-button');
        deleteBtn.setAttribute('value', 'Cancella Giocatore');
    
        deleteBtn.addEventListener('click',()=>{
            playersName.splice(playersName.indexOf(name),1);
            deleteBtn.remove();
            newLine.remove();
        
        })
        newLine.appendChild(deleteBtn);  
        counter++;      
    }else{
        alert('nome giocatore già registrato');
    }
    
    


   
};

function tableSeat (array,position){
    
    for (var i = 0 ; i<array.length;i++){
        
        td = document.createElement('td');
        td.innerHTML= `<p>${array[i].nome}</p>`
        td.classList.add('seat');
        position.appendChild( td );
        table.appendChild(position);
        
        
    }
    
};

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
    
};

function oppositePairing(array1,array2){

    if(array1.length < array2.length){
        array1.push(byePlayer);
    }
    if(array1.length > array2.length){
        array2.push(byePlayer);
    }    
    for(var i=0; i<array2.length; i++){
        matches.push([array1[i],array2[array2.length-i-1]]);
    }
    console.log(matches);
    return matches;
};

function randomPairing(array1,array2){
    players= [...array1,...array2]

    shuffler(players)
    let half = players.length /2 ;

    for (let i = 0; i < half; i++) {
        let match = [players[i],players[half+i]]
        matches.push(match);
    }
    console.log(matches);
    return matches;
};

function printPairing(array){
    const newLine = document.createElement('li');
 
    for (var a=0; a<array.length; a++){
        const newPair = document.createElement('ol');
        const matchNumber = document.createElement('li');
        matchNumber.classList.add('match-number')
        matchNumber.appendChild(newPair);
        listWrapper.appendChild(matchNumber);
        for (var b=0; b<2; b++){
            const newLine = document.createElement('li');
            newLine.innerText = array[a][b].nome;
            newPair.appendChild(newLine);
            resultTab(newLine,b)
           }

    }

}

function resultTab(line,number){
    
    const wins = document.createElement('input');
    wins.setAttribute('type','number');
    wins.setAttribute('min', '0');
    wins.setAttribute('max','2');
    
    line.appendChild(wins);
    if(!number){
                
        const drawLine = document.createElement('p');
        drawLine.innerText='pareggi';
        const draw = document.createElement('input');
        draw.setAttribute('type','number');
        draw.setAttribute('min', '0');
        draw.setAttribute('max','1');
        drawLine.appendChild(draw);
        line.appendChild(drawLine);
    }
}