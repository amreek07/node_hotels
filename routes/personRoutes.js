const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

//to post to the new user
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);

        const savePerson = await newPerson.save();
        res.status(201).json(savePerson);
    } catch (err) {
        res.status(500).json({ err: "Internal server Err", err });
    }

});

//to fetch all oersons data

router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log("Data fetched");
        res.status(200).json(data);

    } catch (err) {
        console.log(err);
        res.status(500).json({ Err: "Internal server err" })
    }

});

//get according to the work type

router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await Person.find({ work: workType });

            res.status(200).json(response);

        } else {
            res.status(404).json({ err: "Invalid work type" });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ Err: "Internal server err" })
    }

});

//update the user

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;

        const response = await Person.findByIdAndUpdate(id, updatedData, {
            new: true,
            runValidators: true
        });

        //if person not found

        if (!response) {
            res.status(404).json({ msg: "Person not found" });
        }

        console.log("Data updated");
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({ Err: "Internal server err" });
    }

});

//to delete a person

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const response = await Person.findByIdAndDelete(id);

        if (!response) {
            res.status(404).json({ msg: "Person not found" });
        }

        console.log("data deleted");
        res.status(200).json({msg:"Person deleted"});

    } catch (err) {
        console.log(err);
        res.status(500).json({ Err: "Internal server err" });
    }

});

module.exports = router;