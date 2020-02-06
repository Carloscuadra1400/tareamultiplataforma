const fs = require('fs');
const btnGuardar = document.getElementById('btn-guardar');
const txtIdentidad = document.getElementById('identidad');
const txtNombre = document.getElementById('Primer_nombre');
const txtApellido = document.getElementById('Primer_apellido');
const txttelefono = document.getElementById('telefono');
const Txtedad= document.getElementById('edad');
const btn_read = document.getElementById('btn-leer');
const csv = require('csv-parser');

btnGuardar.addEventListener('click', function(e) {   
    e.preventDefault();

    console.log('Mostrando mensajes en la consola');
    fs.open("./matriculados.csv", 'a', function(err, archivo){
            if (err){
                console.log("no se pudo abrir el archivo");
                console.log(err);
                return;
            }
            const linea = `\n${txtIdentidad.value}, ${txtNombre.value}, ${txtApellido.value}, ${Txtedad.value}, ${txttelefono.value}`;  
        fs.write(archivo, linea, function(err, written, string) {
                if(err){
                    console.log("error al escribir los datos");
                    console.log(err);
                    return;
            }
            console.log("Se escribio bien papuh");            
        
        })
        }
        
    );
}
);
btn_read.addEventListener('click', function(e){
    e.preventDefault();
      fs.createReadStream('alumnos.csv')
      .pipe(csv())
      .on('datos', (row)=>{
         console.log(row);
      })
      .on('end', () => {
        console.log('Funciona')
      })
  });