


var linha1 = linha();
var coluna1 = coluna();

if(linha1 == coluna1){

//CRIAR MATRIZ 1
document.write("<div id='div1'>");
var matriz1 = new Array();
matriz1 = criarMatriz(linha1, coluna1)
imprimirTabela(matriz1, " ");


//SINAL DA MAIS
document.write("<table  id='sinalTable'> <tr> <td id='sinal'>*</td></tr></table>");

//CRIAR MATRIZ 2
var matriz2 = new Array();
matriz2 = criarMatriz(linha1, coluna1);   
imprimirTabela(matriz2, " ");

//SINAL DA IGUAL
document.write("<table  id='sinalTable' > <tr> <td id='sinal'>=</td></tr></table>");

//CRIAR MATRIZ RESULTADO
var matrizMult = new Array();
matrizMult = multi(linha1, coluna1,matriz1, matriz2);
imprimirTabela(matrizMult, "Resultado");
document.write("</div>");

}else{
    document.write("<h1 id='tituloerro'>Não foi possível realizar a multiplicação das matrizes...</h1>");
    document.write ("<br>");
    document.write ("<br>");
    document.write ("<br>");
    document.write ("<br>");
    document.write("<a href='index.html'><h1 id='textoerro'>Refazer</h1></a>");
}



//SOMA DAS MATRIZES
//
// NÃO FUNCIONOU!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//
function multi(linhaS, colunaS, matriz1, matriz2){
    var matrizmulti = new Array();

    for(var i = 0; i < linhaS; i++){

        var matrizColuna = new Array();
        matrizmulti[i] = matrizColuna;

        for(var y = 0; y < colunaS; y++){

            var soma = 0;
            for(var s = 0; s < colunaS; s++){

                var a = matriz1[i][s];
                var b = matriz2[s][y];
                
                soma = soma + (a * b);
            }

            matrizmulti[i][y] = soma;

        }

    }

return matrizmulti;


}


//QUANTAS LINHAS A MATRIZ TERÁ
function linha(){
    do{
        var linhas = parseInt(prompt("Quantas linhas possui essa matriz? "));
    }while(isNaN(linhas) ||  linhas < 1 );
    return linhas;
}
//QUANTAS COLUNAS A MATRIZ TERÁ
function coluna(){
    do{
        var colunas = parseInt(prompt("Quantas colunas possui essa matriz? "));
    }while(isNaN(colunas) ||  colunas < 1 );
    return colunas;
}
//CRIAR A MATRIZ PARA AS OPERAÇÕES
function criarMatriz(linhas, colunas){
    
    var matrizLinha = new Array();
    for( var i=0; i < linhas; i++){

        var matrizColuna = new Array();
        matrizLinha[i] = matrizColuna;

        for(var y=0; y < colunas; y++){
            matrizColuna[y] = nAl();
        }
    }
    return matrizLinha;
}

//IMPRIMIR MATRIZ  EM TABELA
function imprimirTabela(m1 = new Array(), texto){
    document.write("<table>");
    document.write("<thead> <tr> <td colspan="+ (m1.length+1)+" > "+ texto +" </td> </tr> </thead>");
    for(var l=0; l < m1.length; l++){
        document.write("<tr>");
        for(var c = 0; c < m1[l].length; c++){
            document.write("<td>" + m1[l][c] + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

//GERA UM NÚMERO ALEATÓRIO
function nAl(){
    var numeroAlea = Math.floor(Math.random()*100);
    return numeroAlea;
}

