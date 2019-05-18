const mongoose = require('mongoose');
const _ = require('lodash');

const { Schema } = mongoose;

const mongoSchema = new Schema({
  name: {
    type: String, 
    required: true
  },
  description: {
    type: String,
  },
  directions: {
    type: String,
  },
  ratings: [{
    userId: mongoose.Schema.Types.ObjectId,
    rating: Number,
    comments: String,
  }],
  postedBy: {
    userId: mongoose.Schema.Types.ObjectId,
  },
},
{
  timestamps: true
});

class RecipeClass {
  
}

mongoSchema.loadClass(RecipeClass);

const Recipe = mongoose.model('Recipe', mongoSchema);

module.exports = Recipe;

