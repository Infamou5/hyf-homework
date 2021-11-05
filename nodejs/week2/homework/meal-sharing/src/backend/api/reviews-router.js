const express = require("express");
const router = express.Router();
const reviews = require("./../data/reviews.json");

router.get("/", async (req, res) => {
  try {
    res.json(reviews);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (req, res) => {
  try {
    const result = getReviews(parseInt(req.params.id));
    Object.keys(result).length === 0
      ? res.status(404).json({ error: `${req.params.id} not found` })
      : res.status(200).json(result);
  } catch (error) {
    throw error;
  }
});

const getReview = (id) => {
  return reviews.find((review) => review.id === id);
};

module.exports = router;
