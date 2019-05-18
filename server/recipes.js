const Recipe = require('./models/Recipe');

const testRecipe = {
  name: 'Mac and Cheese',
  description: 'Hot cheese sauce over macaroni'
}

function recipes({ ROOT_URL, server }) {

  // Get all recipes
  server.get('/recipe', (req, res) => {
    Recipe.find({}, (err, recs) => {
      if (err) {
        // consosle.log(err);
        return res.status(400).send(err.message);
      }
      return res.status(200).json(recs);
    })
  });

  // Get recipe by ID
  server.get('/recipe/:id', (req, res) => {
    Recipe.findById(req.params.id, (err, recipe) => {
      if (err) {
        // console.log(err);
        res.status(400).send(err.message);
      }
      res.status(200).json(recipe);
    });
  });

  // Add a recipe
  server.post('/recipe', (req, res) => {
    const newRecipe = new Recipe({
      name: req.body.name,
      description: req.body.description,
      directions: req.body.directions,
      postedBy: req.user._id,
    });

    newRecipe.save((err, recipe) => {
      if (err) {
        // console.log(err);
        return res.status(400).send(err.message);
      }
      return res.status(201).json(recipe);
    });
  });

  // edit recipe

  // delete recipe
  server.delete('/recipe/:id', (req, res) => {
    Recipe.findByIdAndRemove(req.params.id).then((err) => {
      if (err) {
        // console.log(err);
        return res.status(400).send(err.message);
      }
      return res.status(200).send('deleted');
    });
  });

  // get all recipes
}

module.exports = recipes;
