const PDFDocument = require('pdfkit');
const readline = require("readline");
const fs = require('fs');
const { exit } = require('process');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


console.log("\x1b[47m", "-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
console.log("\x1b[34m","lplb= Língua Portuguesa e Literatura Brasileira \n mat = Matemática \n bio = Biologia \n fis = Física \n qui = Química \n his = História \n geo = Geografia \n fil = filosofia \n soc = Sociologia ")

console.log("\x1b[30m", "-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")

rl.question("Qual a disciplina que você deseja gerar uma lista? ", function (answer) {
    function selecionar() {

        let questions = require(`./src/db/${answer}.json`)
        const item = questions[Math.floor(Math.random() * questions.length)];
        return item
    }


    let lista = []

    for (c = 1; c <= 10; c++) {
        let item = selecionar()
        lista.push(item)

    }

    // Create a document
    const doc = new PDFDocument({ size: 'A4' });

    doc.pipe(fs.createWriteStream('lista.pdf'));

    doc
        .font('src/fontes/inter/Inter-Bold.ttf')
        .fontSize(14)
        .text("Lista de Exercícios", { align: 'center', underline: 'true', })

    doc.image('src/images/logo_letra.jpg', 0, 8, { width: 80 })

    
    doc
        .font('src/fontes/alegreya/Alegreya-Regular.ttf')
        .fontSize(11)
        .moveDown()
        .text(`1º) (${lista[0].banca}) ${lista[0].questao} a)${lista[0].alta} b) ${lista[0].altb} c)${lista[0].altc}d) ${lista[0].altd} e) ${lista[0].alte} \n
            2º)(${lista[1].banca}) ${lista[1].questao} a)${lista[1].alta} b) ${lista[1].altb} c)${lista[1].altc}d) ${lista[1].altd} e) ${lista[1].alte} \n
            3º)(${lista[2].banca}) ${lista[2].questao} a)${lista[2].alta} b) ${lista[2].altb} c)${lista[2].altc}d) ${lista[2].altd} e) ${lista[2].alte} \n 
            4º)(${lista[3].banca}) ${lista[3].questao} a)${lista[3].alta} b) ${lista[3].altb} c)${lista[3].altc}d) ${lista[3].altd} e) ${lista[3].alte} \n
            5º)(${lista[4].banca}) ${lista[4].questao} a)${lista[4].alta} b) ${lista[4].altb} c)${lista[4].altc}d) ${lista[4].altd} e) ${lista[4].alte} \n
            6º)(${lista[5].banca}) ${lista[5].questao} a)${lista[5].alta} b) ${lista[5].altb} c)${lista[5].altc}d) ${lista[5].altd} e) ${lista[5].alte} \n
            7º)(${lista[6].banca}) ${lista[6].questao} a)${lista[6].alta} b) ${lista[6].altb} c)${lista[6].altc}d) ${lista[6].altd} e) ${lista[6].alte} \n
            8º)(${lista[7].banca}) ${lista[7].questao} a)${lista[7].alta} b) ${lista[7].altb} c)${lista[7].altc}d) ${lista[7].altd} e) ${lista[7].alte} \n
            9º)(${lista[8].banca}) ${lista[8].questao} a)${lista[8].alta} b) ${lista[8].altb} c)${lista[8].altc}d) ${lista[8].altd} e) ${lista[8].alte} \n
            10º)(${lista[9].banca}) ${lista[9].questao} a)${lista[9].alta} b) ${lista[9].altb} c)${lista[9].altc}d) ${lista[9].altd} e) ${lista[9].alte}`, { align: 'justify', columns: '2' })

        doc
        .fontSize(8)
        .moveDown()
        .moveDown()
        .text(`Gabarito: 1º) - ${lista[0].gabarito}, 2º) - ${lista[1].gabarito}, 3º) - ${lista[2].gabarito}, 4º) - ${lista[3].gabarito}, 5º) - ${lista[4].gabarito},6º) - ${lista[5].gabarito}, 7º) - ${lista[6].gabarito}, 8º) - ${lista[7].gabarito},9º) -  ${lista[8].gabarito}, 10º) - ${lista[9].gabarito} `, {align:"right", columnGap:"1"})
    console.log("\x1b[0m", "Lista Criada")

    doc.end()

    
});




