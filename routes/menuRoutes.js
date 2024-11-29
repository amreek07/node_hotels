const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

//to post menu Items

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenu = new MenuItem(data);

        const response = await newMenu.save();
        res.status(201).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({ Err: "Internal server err" })

    }

});

router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log("Data fetched");
        res.status(200).json(data);

    } catch (err) {
        console.log(err);
        res.status(500).json({ Err: "Internal server err" })
    }

});

//find by paramenter
router.get('/:taste', async (req, res) => {
    try {
        const taste = req.params.taste;
        if (taste == "spicy" || taste == "sweet" || taste == "sour") {
            const data = await MenuItem.find({ taste: taste });
            console.log("Data fetched");
            res.status(200).json(data);
        }
        else {
            res.status(404).json({ err: "taste is not valid" });
        }


    } catch (err) {
        console.log(err);
        res.status(500).json({ Err: "Internal server err" })
    }

});

//update menuItem

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const updatedMenu = req.body;

        const response = await MenuItem.findByIdAndUpdate(id, updatedMenu);

        if (!response) {
            res.status(404).json({ msg: "Item not found" });
        }

        console.log("data updated successfully");

        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({ Err: "Internal server err" })
    }

});

//to delete menu item

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const response = await MenuItem(id);

        if (!response) {
            res.status(404).json({ msg: "Item not found" });
        }

        console.log("menu item deleted successfully");
        res.status(200).json({msg:"Menu item deleted successfully"});

    } catch (err) {
        console.log(err);
        res.status(500).json({ Err: "Internal server err" })
    }

});

module.exports = router