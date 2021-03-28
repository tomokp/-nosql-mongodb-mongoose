const router = require('express').Router();
// const cat = require('./models/model');
const station = require('./models/station');

// router.route('/')
//   .post(async (req, res) => {
//     const post = await cat.create({
//       name: req.body.name,
//       age: req.body.age,
//       genre: req.body.genre
//     });
//     res.send(`cat post ${post.title} created with id: ${post._id}`);
//   })
//   .get(async (req, res) => {
//     res.send(await cat.find().where('age').gt(11));
//   });

// router.route('/:id')
//   .get(async (req, res) => {
//     res.send(await cat.findById(req.params.id));
//   })
//   .patch(async (req, res) => {
//     const mod = await cat.updateOne({ _id: req.params.id }, { name: req.body.name });
//     res.status(200).send(`updated sucessfully ${mod.nModified} cat post`);
//   })
//   .delete(async (req, res) => {
//     const del = await cat.deleteOne({ _id: req.params.id });
//     res.send(`deleted ${del.deletedCount} cat post`);
//   });


router.route('/')
  .post(async (req, res) => {
    const post = await station.create({
      title: req.body.title,
      town: req.body.town,
      addressline1: req.body.addressline1,
      stateorprovince: req.body.stateorprovince,
      postcode: req.body.postcode
    });
    res.send(`stations post ${post.title} created with id: ${post._id}`);
  })
  .get(async (req, res) => {
    // res.send(await (await station.find().where('Town')).gt('Espoo'));
    let limit = req.query.limit || 10;
    const stations = await station.find().limit(parseInt(limit));
	  res.send(stations)
  });

router.route('/:id')
  .get(async (req, res) => {
    const stations = await station.findById(req.params.id);
    res.send(stations)
  })

module.exports = router;
