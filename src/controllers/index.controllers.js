const { Pool }=require('pg');
const pool= new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'angel1234',
    database: 'NOTEPAD',
    port: '5432'   
});
//R
const GetNotePad= async (req, res) =>{
    const selection = await pool.query('SELECT *FROM NOTEPAD');//Selecciona todos los alumnos de la tabla alumnos
    res.status(200).json(selection.rows);
};

const GetNotePadbyId= async(req,res)=>{
    const id=req.params.id;
    const response= await pool.query('SELECT *From NOTEPAD WHERE id_note =$1', [id]);
    res.status(200).json(response.rows);
};

//C 
const create_new_Notepad= async (req,res) => {
    const { id_note,title, body}= req.body;
    const response= await pool.query('INSERT INTO NOTEPAD (id_note,title,body) VALUES ($1,$2,$3)', [id_note,title,body]);
    console.log(response);
    res.json({
        message: 'Campos agregados exitosamente',
        body:{
            NOTEPAD: {id_note,title,body}
        }
    })
};
//U
const UpdateNotePad= async(req,res)=>{
    const id= req.params.id;
    const { title,body }=req.body;
    const response= await pool.query('UPDATE NOTEPAD SET title=$1, body=$2 WHERE id_note=$3', [
        body,
        title,
        id
    ]);
    console.log(response);
    res.status(200).json('NOTEPAD Actualizado');
};
//D
const delete_notepad= async (req,res)=>{
    const id=req.params.id;
    const response=await pool.query('DELETE FROM NOTEPAD WHERE id_note= $1', [id]);
    console.log(response);
    res.status(200).json(`Notepad elements have been deleted succesfully, id:${id} `);
};

module.exports={
    GetNotePad,
    create_new_Notepad,
    GetNotePadbyId,
    delete_notepad,
    UpdateNotePad	   
}