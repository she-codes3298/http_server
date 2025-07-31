const express = require("express");
const app = express();
app.use(express.json());

app.get('/', function(req, res) {
    const p = parseFloat(req.query.p);  // use 'p', not 'a'
    const t = parseFloat(req.query.t);
    const r = parseFloat(req.query.r);

    if (isNaN(p) || isNaN(t) || isNaN(r)) {
        return res.status(400).json({ error: "Invalid query parameters" });
    }

    const si = (p * t * r) / 100;

    res.json({
        result: "The simple interest is " + si
    });
});

// ✅ Use Render-compatible port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
