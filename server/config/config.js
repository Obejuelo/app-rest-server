// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============================
//  Caducidad
// ============================
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ============================
//  SEED de autenticación
// ============================
process.env.SEED = process.env.SEED || 'seed-desarrollo';

// ============================
//  Base de datos
// ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

// ============================
//  Client Id
// ============================
process.env.CLIENT_ID = process.env.CLIENT_ID || '1034573633828-9fbt7mcffjejbp6p7pje4ff9al8e69m9.apps.googleusercontent.com';