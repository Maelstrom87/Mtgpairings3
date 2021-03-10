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
        allPlayers.push(newPlayer);
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
            resultTab(newLine,array[a][b].nome,b,a)
           }

    }

};

function resultTab(line,nome,player,a){
    
    const wins = document.createElement('input');
    wins.setAttribute('type','number');
    wins.setAttribute('min', '0');
    wins.setAttribute('max','2');
    //wins.innerHTML = `id=${nome}`;
    wins.setAttribute('id', `${nome}`)
    const winResult = document.querySelector(`#${nome}`)
    line.appendChild(wins);
    if(!player){
                
        const drawLine = document.createElement('p');
        drawLine.innerText='pareggi';
        const draw = document.createElement('input');
        draw.setAttribute('type','number');
        draw.setAttribute('min', '0');
        draw.setAttribute('max','1');
        draw.innerHTML= `id=draw${a}`
        const winResult = document.querySelector(`#draw${nome}`)
        drawLine.appendChild(draw);
        line.appendChild(drawLine);
    }
};

function resultsCheck (pairArray){
    let resultsArray = [];
    let error=[];
    let w ;
    for (let m = 0; m < pairArray.length ; m++){
        resultsArray.push([]);
        for (let g = 0 ;  g <2; g++ ){
            let iddi = pairArray[m][g].nome;
            w = document.querySelector(`#${iddi}`);
            resultsArray[m].push(w.value); //errore nel secondo loop
        }
    }
    console.log(resultsArray);
    for( let n= 0;n<resultsArray.length;n++){
        const p1 =parseInt(resultsArray[n][0]),
            p2=parseInt(resultsArray[n][1]);
            p1pointer = document.querySelector(`#${pairArray[n][0].nome}`)
            p2pointer = document.querySelector(`#${pairArray[n][1].nome}`)
            const g1 = pairArray[n][0];
            const g2 =pairArray[n][1]
        if(p1 + p2 < 4 ){
            if (p1>p2){
                p1pointer.setAttribute('id','is-winner');
                p2pointer.setAttribute('id','is-loser');
                g1.risultati.push([p1,p2,'w'])
                g2.risultati.push([p2,p1,'l'])
            }else if(p1<p2){
                p1pointer.setAttribute('id','is-loser');
                p2pointer.setAttribute('id','is-winner');
                g1.risultati.push([p1,p2,'l'])
                g2.risultati.push([p2,p1,'w'])
            }else {
                p1pointer.setAttribute('id','is-draw');
                p2pointer.setAttribute('id','is-draw');
                g1.push({risultati:[p1,p2,'d']})
                g2.push({risultati:[p2,p1,'d']})
            }
        }else{
            p1pointer.setAttribute('id','is-error');
            p2pointer.setAttribute('id','is-error');
            if(!error){
                
                error.push(n+1);
            } else {error.push(n+1);}
        }

    }
    if(!error.length>0){
        newMatch.removeAttribute('disabled');
    }else{
        for(let e of error)
        alert(`errore di registrazione nel match ${e}` )
    }
};

