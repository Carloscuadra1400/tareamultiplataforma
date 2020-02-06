const fs = require('fs');
const btnGuardar = document.getElementById('btn-guardar');
const txtIdentidad = document.getElementById('identidad');
const txtNombre = document.getElementById('Primer_nombre');
const txtApellido = document.getElementById('Primer_apellido');
const txttelefono = document.getElementById('telefono');
const Txtedad= document.getElementById('edad');
const btn_read = document.getElementById('btn-leer');
const createcswriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createcswriter;
const csv = require('csv-parser');
let fila_datos = [];
({
    path: 'matriculados.csv',
    header: 
    [
        {id: 'identidad', title: 'Identidad'},
        {id: 'Primer_nombre', title: 'Primer_nombre'},
        {id: 'Primer_apellido', title: 'Primer_apellido'},
        {id: 'telefono', title: 'telefono'},
        {id: 'edad', title: 'Edad'},
    ]
    
});

btnGuardar.addEventListener('click', function(e){
    e.preventDefault()
    const datos = [{identidad: txtIdentidad.nodeValue, Primer_nombre: txtNombre.value,Primer_apellido: txtApellido.value, telefono: txttelefono.value, edad: Txtedad.value}]
    csvWriter
    .writeRecords(datos)
    .then(() => console.log('Se guardo exitosamente'))
    alert("Gracias por matricularse")
});

btn_read.addEventListener('click', function(e){
  e.preventDefault();
    fs.createReadStream('matriculados.csv')
    .pipe(csv())
    .on('datos', (row)=>{
       console.log(row);
    })
    .on('end', () => {
      console.log('Funciona')
    })
});