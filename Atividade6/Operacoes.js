function Funcoes(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    alert("Soma dos números: " + (num1+num2) +
              "\nSubtração do 1º pelo 2º: " + (num1-num2) +
              "\nMultiplicação entre os números: " + (num1*num2) +
              "\nDivisão do 1º pelo 2º: " + (num1/num2) +
              "\nResto da divisão do 1º pelo 2º: " + (num1%num2)
    );
}