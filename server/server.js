const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3002"]
}));
const port = 5001;

const generateData = () => {
    return new Array(50000).fill("").map((opt, i) => {
        return {
            id: i,
            operation: `OPERATION-${i}`,
            score: "A/B/C",
            timestamp: new Date(new Date().getTime() - (Math.floor(Math.random() * (105000000000 - 100000000000)) + 100000000000)),
            status: i % 3 === 0 ? "Failed" : i % 3 === 1 ? "Finished" : "Interrupted"
        };
    });
};


app.get("/api/data", (req, res) => {
    const data = generateData();
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
