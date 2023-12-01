const express = require("express");
const app = express();
const Joi = require("joi");
const multer = require("multer");
app.use(express.static("public"));
app.use(express.json());
const cors = require("cors");
app.use(cors());
const http = require("http");


app.use(cors({
    origin: '/api/feedbacks'
  }));

const upload = multer({ dest: __dirname + "/public/images" });

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/feedback-results.html");
});

let feedbacks = [{
        _id: 1,
        name: "Allison Johnson",
        brand: "Rhode Skin",
        type: "Product",
        rating: "8/10"
    },
    {
        _id: 2,
        name: "Jane Smith",
        brand: "Skims",
        type: "Clothing",
        rating: "10/10"
       },
       {
        _id: 3,
        name: "Isabella White",
        brand: "Charlotte Tilbury",
        type: "Makeup",
        rating: "9/10"
       },
       {
        _id: 4,
        name: "Mary Goldstein",
        brand: "Pacsun",
        type: "Clothing",
        rating: "7/10"
       },
       {
        _id: 5,
        name: "Jessica Atkins",
        brand: "Cerave",
        type: "Product",
        rating: "10/10"
       },
];

app.get("/api/feedbacks", (req, res) => {
    res.send(feedbacks);
});

app.post("/api/feedbacks", upload.single("img"), (req, res) => {
    const result = validateFeedback(req.body);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const feedback = {
        _id: countries.length + 1,
        name: req.body.name,
        brand: req.body.brand,
        type: req.body.type,
        rating: req.body.rating
    }

    if (req.file) {
        feedback.img = "images/" + req.file.filename;
    }

    feedbacks.push(feedback);
    res.send(feedbacks);
});

app.put("/api/feedbacks/:id", upload.single("img"), (req, res) => {
    const id = parseInt(req.params.id);

    const feedback = feedbacks.find((r) => r._id === id);;

    const result = validateFeedback(req.body);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    feedback.name = req.body.name;
    feedback.brand = req.body.brand;
    feedback.type = req.body.type;
    feedback.rating = req.body.rating;

    if (req.file) {
        feedback.img = "images/" + req.file.filename;
    }

    res.send(feedback);
});

app.delete("/api/feedbacks/:id", upload.single("img"), (req, res) => {
    const id = parseInt(req.params.id);

    const feedback = feedbacks.find((r) => r._id === id);

    if (!feedback) {
        res.status(404).send("The feedback was not found");
        return;
    }

    const index = feedbacks.indexOf(feedback);
    feedbacks.splice(index, 1);
    res.send(feedback);

});


const validateFeedback = (feedback) => {
    const schema = Joi.object({
        _id: Joi.allow(""),
        name: Joi.string().min(3).required(),
        brand: Joi.string().min(3).required(),
        type: Joi.string().min(3).required(),
        rating: Joi.string().min(3).required(),
    });

    return schema.validate(feedback);
};

const port = process.env.PORT || 10000;

http.createServer(app).listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
