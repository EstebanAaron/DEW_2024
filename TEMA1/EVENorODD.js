function generarEVENorODD(){
    const numerosString = (document.getElementById('numeros').value);
    const resultado= document.getElementById('result');
    let numerosarray = (numerosString.split(','));
    let resultadoString =[];
    numerosarray.map(numerosarray => numerosarray%2==0?resultadoString.push("Even"):resultadoString.push("Odd"));
    /*for (let i = 0; i < numerosarray.length; i++) {
        
        if (parseInt(numerosarray[i])%2==0) {
            
            resultadoString[i]="Par";
        }
        else{
            resultadoString[i]="impar";
        } 
    }*/
    resultado.innerHTML=resultadoString;

}