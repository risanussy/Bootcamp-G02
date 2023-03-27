// Object
// variabel yang bisa menampung banyak variabel

// Object Literal
// let data = {
//     nama : "risa",
//     hobi : "nonton",
//     alamat : {
//         jalan : "jln. maju",
//         RT : 1,
//         RW : 6
//     },
//     makanan : ["bakso", "mie", "telor", {kuah : 'indomie', goreng: 'sedap'}],
//     greet : function() {
//         console.log("Hallo " + this.nama);
//     }
// }

// data.minuman = ["teh", "kopi", "jus"]
// data.nama = 'risa nussy'

// console.log(data.nama, data.makanan[0]);

// console.log(data.makanan[3].kuah);
// console.log(data.alamat.jalan);
// console.log(data.makanan[3].goreng);

// console.log(data);
// console.log(data.nama);
// console.log(data["nama"]);

// console.log( data.alamat.jalan );
// console.log( data.greet() );
// console.log( data.makanan[0]);

// console.log(data.alamat['jalan']);
// console.log(data['alamat']['jalan']);

// console.log(this);
// console.log(window);

// function declaration
// let data = function (nama, hobi){
//     let obj = {}
//     obj.nama = nama
//     obj.hobi = hobi
//     return obj
// }

// let risa = data("risa", "nonton")
// console.log(risa.nama);

// function destructuring 
let Data = function(nama, hobi){
    // let this = {}
    this.nama = nama
    this.hobi = hobi
    this.makanan = "Bakso"
    // return this
}

Data.prototype.greet = function(){
    return "Hallo saya " + this.nama;
}

// fungsi di dalam object = method
// variabel di dalam object = property

let pemain1 = new Data("risa nussy", "nonton")
console.log(pemain1);
console.log(pemain1.greet());

// console.log(this);