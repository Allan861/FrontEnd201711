//alert ("yoman");
//algv22rtustamine
var vana = 5;
let muutuja = 5;
const konstant = 5;

//konstant = 5;
muutuja = 6; 

if (true) {
    var vana = 7;
    let muutuja = 6;
    console.log(muutuja);
}

console.log(muutuja);
console.log(vana);

let [arv1,, arv3] = [17, 12, 33];
arv1 = arv3
const kass = {nimi: 'Tom',vanus: 8};
const {nimi,vanus} = kass;

const esimene = [1,2];
const teine = [3, 4];
const kombineeri = [0, ...esimene, ...teine, 5];

const vaikimisi = {toit: 'terav', hinnaklass: '$$', myratase: 'vali'};
const shokolateeria = { ...vaikimisi, toit: 'magus'};

/*
//muutuja tyybid
//arvud
const decimal: number = 6;
const hex = 0x12ff26;
const binary = 0b1010;
const octal = 0o7433;
//t6ene/v22r
const eijah: boolean = true; //false
//s6na aka tekts
const string : string = 'Tere \' s6na';
const vanus = 37;
const vanusTekstis = `ta on ${vanus} aastat vana. 
Ta saab ${vanus+1} aastat vanaks`;
console.log(vanusTekstis);
// massiivid
const list:number[] = [1,2,3];
console.log(`Massiivi esimene element ${list[0]}`);
list[1] = 20;

//Tuple 
const punkt: [number, number] =[125,32];
const kaart: [string, number, number] =['Tallinn',125,32];

//enumeraator - loendaja

enum V2rv{
    Punane,
    Roheline,
    Sinine
}

const v2rv =V2rv.Sinine

//suvaline hoidu sektsioonist
let suvaline:any = 'Tere';
suvaline = 'Tere';
function funk ():void {}
function funk2 ():never {while (true) {throw new Error('Viga')}}

//teisendamine 
const  s6naPikkus: number = (suvaline as string).length;
*/
let arv4: number = 12,arv5 = 13,arv6 = 14;
arv4 = 13;


//valikuline;
type Saadetis = 'saadetud' | 'saatmata' | number
let fikseerituds6num: Saadetis = 12;
fikseerituds6num = 'saadetud';
const sum = (x:number, y:number) => x+y;
const summa = sum(arv4,arv5);