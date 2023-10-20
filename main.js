function Var1(){
    /*pegando valores do html*/
    var valor1 = document.querySelector("#valores1");
    var valores1 = valor1.options[valor1.selectedIndex];

    var valor2 = document.querySelector("#valores2")
    var valores2 = valor2.options[valor2.selectedIndex];

    var valor3 = document.querySelector("#valores3")
    var valores3 = valor3.options[valor3.selectedIndex];
    
    var value = (valores1.value + " "  + valores2.value + " "+ valores3.value)
    console.log(value)

    /*conversao de valor para string*/
    var string = valores1.value
    var valores1 = string + ""

    var string = valores2.value
    var valores2 = string + ""
    
    var string = valores3.value
    var valores3 = string + ""   
    
    console.log(valores1)
   /*funçao para trocar os valores da config do css*/
    var objeto = document.getElementById("container")
        
        objeto.style.display = valores1
        objeto.style.justifyContent = valores2
        objeto.style.alignItems = valores3
        


}