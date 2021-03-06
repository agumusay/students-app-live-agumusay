var express = require('express');
var router = express.Router();


let students = [
    {
        name: "Rupert",
        lastname: "Jalili",
        age: 30,
        class: "FBW101",
        location: "BER"
    },
    {
        name: "Mark",
        lastname: "Hammil",
        age: 29,
        class: "FBW101",
        location: "BER"
    },
    {
        name: "Jenna",
        lastname: "Larose",
        age: 22,
        class: "FBW101",
        location: "BER"
    },
    {
        name: "Roy",
        lastname: "Mcloe",
        age: 19,
        class: "FBW101",
        location: "BER"
    }


];

router.get("/", (req, res) => {
    res.status(200).json(students);
});

router.get("/:name", (req, res) => {
    const student = students.find(
        ({ name }) => name.toLowerCase() === req.params.name.toLowerCase()
    );

    if (student) {
        return res.status(200).json(student);
    }

    res.status(404).json({ error: "Student not found" });
});

// - PUT (individual)
router.put("/:name", (req, res) => {
    if (req.params.name && req.body) {
        students = students.map((student) => {
            if (student.name.toLowerCase() === req.params.name.toLowerCase()) {
                Object.assign(student, req.body);
            }

            return student;
        });
    }
    res.send(students);
});
// - DELETE (individual)
router.delete("/:name", (req, res) => {
    if (req.params.name) {
        students = students.filter(
            ({ name }) => name.toLowerCase() !== req.params.name.toLowerCase()
        );
    }

    res.send(students);
});
// - POST (individual)
router.post("/", (req, res) => {
    if (req.body) {
        students.push(req.body);
        return res.send({
            status: "success",
            message: `student with name: ${req.body.name} added`
        });
    }

    res.send("NO!");
});

module.exports = router;