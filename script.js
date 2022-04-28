let container = document.getElementById('container');
let btn = document.createElement('button');
let count = 0

container.parentNode.insertBefore(btn, container);
btn.innerText = 'Make a sketch'
btn.style.color = 'red';
btn.style.height = 'fit-content';
btn.style.width = 'fit-content';
btn.style.marginBottom = '5px'



function makeSketch(cells){
    
    for (let i = 1; i <= cells; i++) {
        let row = document.createElement('div');
        row.className = 'row' 
        for (let j = 0; j < cells; j++) {
            if (i==1) {
                count+=1
                
                let cell = document.createElement('div');
                container.appendChild(row)
                row.appendChild(cell)
                cell.className = 'cell'
                cell.innerText = j 

                
            }
            else if (i>1){
                
                let cell = document.createElement('div');
                container.appendChild(row)
                row.appendChild(cell)
                cell.className = 'cell'
                cell.innerText = count
                count +=1
            }
            
        }
        
    }
    let cellHover = document.getElementsByClassName('cell');
    for (let i = 0; i < cellHover.length; i++) {
        let hover = cellHover[i]
        
        hover.addEventListener('mouseover',(e)=>{
            hover.style.background = 'gray'
        })
      
        hover.addEventListener('mouseout',(e)=>{
            hover.style.background = ''
        })
        
    }

}
btn.addEventListener('click',()=>{

    container.innerHTML= ""
    count = 0
    
    const k = prompt('choose a number between 0 16');
    input = parseInt(k)
    
    if (Number.isInteger(input)==false || input > 16 || input < 0) {

    return alert("you may only choose number between 0 and 16")            
    }
    else{
        makeSketch(input)
    }
})     

