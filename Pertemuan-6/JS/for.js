let panjang = 5
let tampil = ""

for(let i = 0; i < panjang; i++){

    for(let j = panjang; j > i; j--){
        tampil += "*"
    }

    tampil += '\n'

}

console.log(tampil);