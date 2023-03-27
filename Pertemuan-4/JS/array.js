// array
// sebuah variabel yang bisa menampung lebih
// dari satu value

// simbol array []

// console.log(data[0]);
// console.log(data[1]);
// console.log(data[2]);
// console.log(data[3]);
// console.log(data[4]);

// data[0] = "isa"

// console.log(data[0]);

// let data = ["risa nussy", "nonton", 13.4, true, 'b', "apa ini", false, 900, "ok", [1,2,3,4]]

// console.log(data[0].length);

// for(let i = 0; i < data.length; i++){
//     console.log(data[i]);
// }

// let tes = [ 'a', 'b', [ 1 , 2 , [ 'z' , 'x' ] ], 'd' ]

// console.log(tes[2][2][1]);

// let tes = [ 'a', 'b', [ 1 , 2 , [ 'z' , 'x' ] ], 'd', [ 11, ['aa', 'bb'] , 12 , 13 ] ]

// console.log(tes[4][1][0]);
// console.log(tes[4][3]);
// console.log(tes[3]);

// console.log(tes[4][2]);
// console.log(tes[2][2][1]);
// console.log(tes[4][1][1]);

// let tes = [ [ [[], [], [], []], [], [] ], [], [], [] ]

// console.log(tes[0][0].length);

let tes = ['bakso', 'telor', 'ayam', ['jus', 'es', 'kopi'], 'bayem']

for(let i = 0; i < tes.length; i++){

    if(i === 3){
        for(let j = 0; j < tes[3].length; j++){
            console.log(tes[3][j]);
        }

    }else {
        console.log(tes[i]);
        
    }
}