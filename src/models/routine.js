// models/routine.js

const routineCategories = {
  checkbox:     'checkbox',
  number_field: 'number_field'
};

// This represents a single mamool in a daily mamool list
class Routine {
  constructor(description, category) {
    this.description = description;
    this.category    = category;
  }
}

module.exports = Routine;
