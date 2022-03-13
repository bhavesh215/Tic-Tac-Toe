console.log("Welcome to Tic Tac Toe");
let music= new Audio("music.mp3");
let audioturn= new Audio("ting.mp3");
let gameoversound= new Audio("gameover.mp3");
let turn = "X";
let gameover=false;
console.log(document.getElementsByClassName('box'));
console.log(document.getElementsByClassName('boxtext'));

// Function to start the game because if we don't want to auto display of game then this function use is must
const startbtn=document.querySelector('nav+button');
startbtn.addEventListener('click',()=>{
    startbtn.nextElementSibling.style.display='flex';
    //music.play();
    startbtn.style.display="none";
})

// Function to change the turn
const changeTurn=()=>{
    return turn=== "X"? "0" : "X";
}

// Function to check for a win
const checkwin=()=>{
    let boxtexts= document.getElementsByClassName('boxtext');
    let wins= [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) &&(boxtexts[e[0]].innerText!=="")){
            document.querySelector('.info').innerText= boxtexts[e[0]].innerText+" won";
            gameover=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="15rem";
        }
    });
}

// Function to turn off the game music and change turn music
const silentbtn=document.querySelector("#silent");
silentbtn.addEventListener('click',()=>{
    music.pause();
    //audioturn="";
    silentbtn.innerText="Turn On Music";
})

// Adding event listener to give functioning of reset button
const resetbtn=document.querySelector('#reset');
resetbtn.addEventListener('click',()=>{
    let boxes=document.getElementsByClassName('boxtext');
    Array.from(boxes).forEach((e)=>{
        e.innerText="";
    });
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='0px';
    document.getElementsByClassName('info')[0].innerText="Turn for "+turn;
})

//Game Logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText ===""){
            boxtext.innerText=turn;
            turn= changeTurn();
            audioturn.play();
            checkwin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " +turn; 
            }
        }
    })
});
