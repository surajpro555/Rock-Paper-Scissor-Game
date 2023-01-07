const rock=document.getElementById('Rock')
const paper=document.getElementById('Paper')
const scissor=document.getElementById('Scissor')
const score=document.getElementById('score')
const computer=document.getElementById('computer')
const result=document.getElementById('result')
const emoji=document.getElementById('emoji')
let count=0;
let getrandom=()=>{ 
    const arr=['✌️','✊','✋']
    return arr[Math.floor(Math.random()*3)]; 
}
rock.onclick=()=>{
    let compchoice=getrandom();
    computer.innerHTML=`✊ vs ${compchoice}`;
    if(compchoice=='✊')
    {
    result.innerHTML='<b>Draw</b>';
    emoji.innerHTML='😁'
    }
    else if(compchoice=='✋')
    {
        count--;   
        result.innerHTML='<b>You Lose</b>';
        emoji.innerHTML='😭';
    }
    else
    {
    count++;   
    result.innerHTML='<b>You Win</b>';
    emoji.innerHTML='😎';
    }
    score.innerHTML=`Score: ${count}`;
}
paper.onclick=()=>{
    let compchoice=getrandom();
    computer.innerHTML=`✋ vs ${compchoice}`;
    if(compchoice=='✋')
    {
    result.innerHTML='<b>Draw</b>';
    emoji.innerHTML='😁'
    }
    else if(compchoice=='✌️')
    {
        count--;   
        result.innerHTML='<b>You Lose</b>';
        emoji.innerHTML='😭';
    }
    else
    {
    count++;   
    result.innerHTML='<b>You Win</b>';
    emoji.innerHTML='😎';
    }
    score.innerHTML=`Score: ${count}`;
}
scissor.onclick=()=>{
    let compchoice=getrandom();
    computer.innerHTML=`✌️ vs ${compchoice}`;
    if(compchoice=='✌️')
    {
    result.innerHTML='<b>Draw</b>';
    emoji.innerHTML='😁'
    }
    else if(compchoice=='✊')
    {
        count--;   
        result.innerHTML='<b>You Lose</b>';
        emoji.innerHTML='😭';
    }
    else
    {
    count++;   
    result.innerHTML='<b>You Win</b>';
    emoji.innerHTML='😎';
    }
    score.innerHTML=`Score: ${count}`;
}