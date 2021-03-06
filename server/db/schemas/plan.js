const mongoose = require('mongoose');

const { Schema } = mongoose;

const planSchema = new Schema({
  weekday: {
    type: String,
    enum: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    required: true,
  },
  recipe: {
    type: String,
    required: true,
  },
});

const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan;

// const myPlanSchema = new Plan({
//   weekday: 'monday',
//   recipe: JSON.stringify({
//     '_id': '6166415c8f6b544cec6ea9b8',
//     'label': 'Chicken Vesuvio',
//     'source': 'Serious Eats',
//     'url': 'http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html',
//     'ingredients': [
//       {
//         'text': '1/2 cup olive oil',
//         'quantity': 0.5,
//         'measure': 'cup',
//         'food': 'olive oil',
//         '_id': '6166415c8f6b544cec6ea9b9'
//       },
//       {
//         'text': '5 cloves garlic, peeled',
//         'quantity': 5,
//         'measure': 'clove',
//         'food': 'garlic',
//         '_id': '6166415c8f6b544cec6ea9ba'
//       },
//       {
//         'text': '2 large russet potatoes, peeled and cut into chunks',
//         'quantity': 2,
//         'measure': '<unit>',
//         'food': 'russet potatoes',
//         '_id': '6166415c8f6b544cec6ea9bb'
//       }
//     ],
//     'createdAt': '2021-10-13T02:15:56.066Z',
//     'updatedAt': '2021-10-13T02:15:56.066Z',
//     '__v': 0
//   }),
// });

// db(() => myPlanSchema.save()
//   .then((response) => console.log('save plan:', response))
//   .then(() => Plan.find())
//   .then((response) => console.log('retrieve plan:', response))
//   .catch((error) => console.log(error)));
