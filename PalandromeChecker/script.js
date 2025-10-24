const input = document.getElementById("input1")

function reverseString(str){
    return str.split('').reverse().join('')
}

function check(){
    const value = input.value
    const reverse = reverseString(value)

    if(value === reverse){
    alert("P A L A N D R O M E")
    }else{
    alert("not today!")
   }

   input.value = ""
}


