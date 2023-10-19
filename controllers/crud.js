// Invocamos a la conexion de la DB
const conexion = require('../database/db');

// GUARDAR un REGISTRO
exports.save = (req, res) => {
    const semana = req.body.semana;
    const fecha = req.body.fecha;
    const temas = req.body.temas;
    const metodologia = req.body.metodologia;
    const horas_directo = req.body.horas_directo;

    const datos = {
        semana: semana,
        fecha: fecha,
        temas: temas,
        metodologia: metodologia,
        horas_directo: horas_directo
    };

    conexion.query('INSERT INTO datos SET ?', datos, (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/');
        }
    });
};

// ACTUALIZAR un REGISTRO
exports.update = (req, res)=>{
    const id = req.body.id;
    const semana = req.body.semana;
    const fecha = req.body.fecha;
    const temas = req.body.temas;
    const metodologia = req.body.metodologia;
    const horas_directo = req.body.horas_directo;

    conexion.query('UPDATE datos SET ? WHERE id = ?',[{semana:semana, fecha:fecha, temas:temas, metodologia:metodologia, horas_directo:horas_directo}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};