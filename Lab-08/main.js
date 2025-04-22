const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// 1. TU FUNCIÓN PARA CALCULAR PROMEDIO (sin cambios)
const calcularPromedio = (nums) => {
  if (nums.length === 0) return 0;
  else if (nums.length === 1) return nums[0];
  else if (typeof nums !== "array") {
    throw new Error("El argumento debe ser un array");
  } else {
    let cont = 0;
    for (let i = 0; i < nums.length; i++) {
      if (typeof nums[i] !== "number") {
        throw new Error("El array debe contener solo números");
      }
      cont += nums[i];
    }
    return Math.round(cont / nums.length);
  }
};

// 2. TU FUNCIÓN PARA ESCRIBIR ARCHIVO (sin cambios)
const escribirArchivo = (nombreArchivo, contenido) => {
  fs.writeFile(nombreArchivo, contenido, (err) => {
    if (err) throw err;
    console.log("El archivo ha sido guardado correctamente.");
  });
};

// 3. PROBLEMA EXTRA: Verificador de palíndromos (nuevo)
const esPalindromo = (palabra) => {
  if (typeof palabra !== "string") throw new Error("Debe ser una cadena");
  const limpio = palabra.toLowerCase().replace(/[^a-z0-9]/g, "");
  return limpio === limpio.split("").reverse().join("");
};

// ENDPOINTS
app.post("/promedio", (req, res) => {
  try {
    const { numeros } = req.body;
    const resultado = calcularPromedio(numeros);
    res.json({ promedio: resultado });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post("/escribir", (req, res) => {
  try {
    const { archivo, contenido } = req.body;
    escribirArchivo(archivo, contenido);
    res.json({ mensaje: "Archivo escrito exitosamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/palindromo/:palabra", (req, res) => {
  try {
    const resultado = esPalindromo(req.params.palabra);
    res.json({
      palabra: req.params.palabra,
      esPalindromo: resultado,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
});
