const express = require("express");
const router = express.Router();
const gameBoard = require("../logic/index");

router.get("/", (req, res) => {
    res.status(405).send({ error: "GET method not allowed, try OPTIONS." });
});

router.options("/", (req, res) => {
    const options = {
        options: { get: ["/api/gameboard", "/api/gameboard/{BOARD}"]  }
    };
    res.status(200).send(options);
});

router.get("/GameBoard/:board", (req, res) => {
    res.status(200).send({ GameBoard: gameBoard(req.params.board) });
});

module.exports = router;