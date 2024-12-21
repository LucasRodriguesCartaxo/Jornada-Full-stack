// ISSO PODE
//            0 1 2 3 4
const array =[1,2,3,4,5];
array.pop() // removendo o ultimo indice;
array[0] = 1024; // 'atualizando' o indice 0;
console.log(array); // [ 1024, 2, 3, 4 ]


// ISSO NÃO PODE
const array = [1, 2, 3, 4, 5];
array = 'Legal'; // Assignment to constant variable.
