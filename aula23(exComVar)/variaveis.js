let varA = "A";  //B
let varB = "B"; //C
let varC = "C"; //A

const varATemp = varA
varA = varB; //B
varB = varC; //C
varC = varATemp; //A


console.log(varA,varB,varC);
// outra maneira

let varAA = "A";  //B
let varBB = "B"; //C
let varCC = "C"; //A

[varAA,varBB,varCC] = [varBB,varCC,varAA]

console.log(varAA,varBB,varCC);