const db = require('../utils/database.js');
const bcrypt = require('bcryptjs');

exports.login = function(correo,contrasena){
    return;
}

exports.User = class  {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(my_email, my_password) {
        this.mail = my_email;
        this.password = my_password;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    async save() {
        try {
            const connection = await db();
            const hashedPass = await bcrypt.hash(this.password, 12)
            const result = await connection.execute(
            `INSERT INTO users (mail, password) VALUES (?, ?, ?)`,
            [this.mail, hashedPass]
            );
            await connection.release();
            return result;
        } catch (error) {
            throw error; // Re-throw the error for proper handling
        }
    }
    //Este método servirá para buscar un usuario por mail
    //Es estático ya que a diferencia de save(), el primero se guarda al crear un usuario siempre, pero en este segundo podemos buscar un usuario sin crear un nuevo objeto usuario.
    static async findUser(mail) {
        try {
            const connection = await db();
            const result = await connection.execute('Select * from users WHERE mail = ?', [mail]);
            await connection.release();
            return result;
        } catch (error) {
            throw error; // Re-throw the error for proper handling
        }
    }
}