const router = require("express").Router();
let News = require("../models/news.model");

router.route("/").get((req, res) => {
  News.find()
    .then((News) => res.json(News))
    .catch((err) => res.status(404).json("Error: " + err));
});

router.route("/newNews").post((req, res) => {
  const title = req.body.title;
  const newsDate = req.body.newsDate;
  const createdAt = req.body.createdAt;
  const newsImage = req.body.newsImage;
  const content = req.body.content;

  const newNews = new News({
    title,
    createdAt,
    newsDate,
    newsImage,
    content,
  });

  newNews
    .save()
    .then(() => res.json("News added!"))
    .catch((err) => res.status(404).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  News.findById(req.params.id)
    .then((News) => res.json(News))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  News.findByIdAndDelete(req.params.id)
    .then(() => res.json("News deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/updateNews/:id").post((req, res) => {
  News.findById(req.params.id)
    .then((news) => {
      news.title = req.body.title;
      news.newsDate = req.body.newsDate;
      news.createdAt = req.body.createdAt;
      news.newsImage = req.body.newsImage;
      news.content = req.body.content;

      news
        .save()
        .then(() => res.json("News updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
