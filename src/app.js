const express = require('express');
const requestIp = require('request-ip');

const app = express();

// Middleware untuk mendapatkan alamat IP pengguna dari permintaan HTTP
const getIpMiddleware = (req, res, next) => {
    const clientIp = requestIp.getClientIp(req); // Mendapatkan alamat IP pengguna
    console.log('IP Address Pengguna:', clientIp);
    // Di sini Anda bisa melakukan apapun yang Anda inginkan dengan alamat IP
    // Misalnya, menyimpannya di basis data atau menampilkannya di antarmuka pengguna
    next(); // Lanjutkan ke middleware berikutnya
};

// Gunakan middleware di setiap permintaan
app.use(getIpMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
