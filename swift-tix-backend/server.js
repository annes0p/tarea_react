const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;
const DB_PATH = path.join(__dirname, 'compra.json');

app.use(cors());

app.use(express.json());

app.post('/api/compra', (req, res) => {
    console.log('Peticion POST recibida en /api/compra');
    console.log('Datos recibidos:', req.body);

    const nuevaCompra = req.body;

    fs.readFile(DB_PATH, 'utf-8', (err, data) => {
        let compra = [];
        if (!err && data) {
            try {
                reservas = JSON.parse(data);
            } catch (parseErr) {
                console.error('Error al parsear JSON:', parseErr);
                compra = [];
            }
        }

        nuevaCompra.id = new Date().getTime();
        compra.push(nuevaCompra);

        fs.writeFile(DB_PATH, JSON.stringify(compra, null, 2), (writeErr) => {
            if (writeErr) {
                console.error('Error al escribir en el archivo:', writeErr);
                return res.status(500).json({ message: 'Error al guardar la compra' });
            }

            console.log('Compra guardada exitosamente:', nuevaCompra);
            res.status(201).json({ message: 'Compra guardada exitosamente', compra: nuevaCompra });
        });
    });
});

app.get('/', (req, res) => {
    res.send('Servidor Swift Tix Backend funcionando');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})