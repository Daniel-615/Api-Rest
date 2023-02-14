const {Router}= require('express');
const router= Router();
const { GetNotePad,GetNotePadbyId,create_new_Notepad,delete_notepad,UpdateNotePad }=require('../controllers/index.controllers')
router.get('/Database',GetNotePad); //Obtener datos
router.get('/Database/:id',GetNotePadbyId); //Obtener datos por id
router.post('/Database',create_new_Notepad); //Guardar datos
router.delete('/Database/delete-node/:id',delete_notepad); //eliminar datos por id
router.put('/Database/update-node/:id',UpdateNotePad);
module.exports=router;