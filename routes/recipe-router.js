const express = require('express');

db = require('../data/db-config.js');
const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Recipes.find()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      res.status(500).json({ err: 'An error prevented the recipes from retrieval.' });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Recipes.findById(id)
    .then(recipe => {
      if(recipe) {
        res.status(200).json(recipe);
      } else {
        res.status(404).json({ message: 'We don\'t do that, here.' });
      };
    })
    .catch(err => {
      res.status(500).json({ err: 'An error prevented the recipe from retrieval.' });
    });
});

router.get('/:id/steps', (req, res) => {
  const { id } = req.params;

  Recipes.findSteps(id)
    .then(steps => {
      if(steps.length) {
        res.status(200).json(steps);
      } else {
        res.status(404).json({ message: 'There ain\'t no step here by that alias.' });
      };
    })
    .catch(err => {
      res.status(500).json({ err: 'An error prevented the recipe\'s steps from retrieval.' });
    });
});

router.post('/', (req, res) => {
  const recipeData = req.body;

  Recipes.add(recipeData)
    .then(recipe => {
      res.status(201).json(recipe);
    })
    .catch(err => {
      res.status(500).json({ err: 'An error prevented the recipe from being added.' });
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Recipes.findById(id)
    .then(recipe => {
      if(recipe) {
        Recipes.update(changes, id)
          .then(updatedRecipe => {
            res.status(200).json(updatedRecipe);
          })
          .catch(err => {
            res.status(500).json({ err: 'An error prevented the recipe from being updated.' })
          })
      } else {
        res.status(404).json({ message: 'There ain\'t no recipe here, chief.' });
      };
    })
    .catch(err => {
      res.status(500).json({ err: 'An error prevented the recipe from retrieval.' });
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Recipes.findById(id)
    .then(recipe => {
      if(recipe) {
        Recipes.remove(id)
          .then(deletedRecipe => {
            res.status(200).json({ remove: deletedRecipe });
          })
          .catch(err => {
            res.status(500).json({ err: 'An error prevented the recipe from being deleted.' })
          })
      } else {
        res.status(404).json({ message: 'Yo, there ain\'t no trash, here.' });
      };
    })
    .catch(err => {
      res.status(500).json({ err: 'An error prevented the recipe from retrieval.' });
    });
});

module.exports = router;