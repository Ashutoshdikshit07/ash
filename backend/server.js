// server.js
const app = require("./index"); // Import the app from index.js

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running locally at http://localhost:${PORT}`);
});
