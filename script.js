function generatePassword(length) {
    if (length < 8) {
        throw new Error("La contraseña debe tener al menos 8 caracteres.");
    }

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    const allCharacters = uppercase + lowercase + numbers + symbols;
    let password = "";

    // Asegurarse de que la contraseña incluya al menos un carácter de cada tipo
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    /*EXPLICACIÓN (de como tomamos un carcter aleatorio del array seleccionando un índice aleatorio)
    Math.random(): Este método genera un número decimal aleatorio entre 0 (inclusive) y 1 (exclusivo).
    Math.random() * array.length: Multiplica ese número aleatorio por la longitud de un array (o cadena).
    Esto da un número decimal aleatorio entre 0 y array.length - 1.
    Math.floor(...): Redondea hacia abajo el número decimal al entero más cercano.
    */ 

    // Completar el resto de la contraseña
    for (let i = password.length; i < length; i++) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }

    // A continuación se procede a mezclar los caracteres de la contraseña para garantizar la aleatoriedad
    // Esto es innecario si nos guiamos solo por la letra tal cual esta escrita, pero le da mas aleatoridad.
    // Es bastante complejo, ya que no se porque, pero se realiza el cálculo del número aleatorio para el ordenamiento del sort cada vez que este compara dos elementos.
    // Esto anterior lo hace aleatoriamente dependiendo si el resultado del Math.random -0,5 es positivo o negativo
    // Si es positivo, el primer elemento se coloca después que el segundo.
    // Si es negativo el primer elemento se coloca antes que el segundo
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    return password;
}

// Ejemplo de uso
console.log(generatePassword(8)); // Generará una contraseña aleatoria de 8 caracteres
console.log(generatePassword(10)); // Generará una contraseña aleatoria de 10 caracteres
