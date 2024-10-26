let name=document.querySelector("#name");
let n=prompt("Enter player name");
name.innerText=n;

let userScore=0;
let compScore=0;
let msg=document.querySelector("#msg");
let you=document.querySelector("#you");
let comp=document.querySelector("#comp");
let user=true;
let resetBtn=document.querySelector(".reset");


// ######################restart button#########################
resetBtn.addEventListener("click",()=>{
msg.innerText="Play";
msg.style.backgroundColor="0e1425";
userScore=0;
you.innerText=userScore;
compScore=0;
comp.innerText=compScore;
n=prompt("enter your name");
name.innerText=n;
});

//#############user choice#################

const choices=document.querySelectorAll(".choice");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       const userId= choice.getAttribute("Id");
       console.log(userId);
       playGame(userId);
    });
});


//##############comp choice##################
const genComp=()=>{
    const options=["rock","paper","scissor"];
    let num=Math.floor(Math.random()*3);
    return options[num];

}


//###########draw game##########################
const drawGame=()=>{
    console.log("draw");
    msg.innerText="Game Draw! try again";
    msg.style.backgroundColor="#0e1425";
}


//##############show winner#################

const showWinner=(user,userId,compId)=>{
    if(user){
        msg.innerText=`you win!, your ${userId} beats ${compId}`;
        userScore++;
        you.innerText=userScore;
        msg.style.backgroundColor="green";
    }
    else{
        msg.innerText=`you lose! ${compId} beats your ${userId}`;
        compScore++;
        comp.innerText=compScore;
        msg.style.backgroundColor="rgba(201, 7, 7, 0.842)";
    }
}


//###########game##############################
const playGame=(userId)=>{

    //generate comp choice;
    const comp=genComp();
    console.log(comp);
 if(userId===comp){
    drawGame();
 }
 else if(userId==="rock"){
    //paper,scissor
    user=comp==="paper"?false:true;
    showWinner(user,userId,comp);

 }
 else if(userId==="paper"){
    //rock,scissor
    user=comp==="scissor"?false:true;
    showWinner(user,userId,comp);

 }
 else if(userId==="scissor"){
    //paper,rock
    user=comp==="rock"?false:true;
    showWinner(user,userId,comp);

 }

}