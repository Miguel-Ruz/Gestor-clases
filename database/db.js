const mysql = require('mysql2');
const conexion = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '3187361737migueL',
    database : 'gestor_clases'  
});
conexion.connect((error)=>{
    if (error) {
      console.error('El error de conexión es: ' + error);
      return;
    }
    console.log('¡Conectado a la Base de Datos!');
  });
module.exports = conexion;