
    const display=document.getElementById("display");

    function todisplay(input){
        display.value += input ;

    }
    function clear(){
        display.value="clear";
    }
    function calculate(){

        try {

            display.value=eval(display.value);
        }catch{
            display.value = "error"
        }
    }




