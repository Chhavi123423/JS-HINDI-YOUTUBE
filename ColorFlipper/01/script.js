const body = document.getElementsByTagName("body")[0]

function setColor(name){
    body.style.backgroundColor = name;

}  



function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#'
    for(let i=0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)]
    }
    return color;
}

//  Function triggered by the Random button
function setRandomColor() {
    const randomColor = getRandomColor();
    setColor(randomColor);
}