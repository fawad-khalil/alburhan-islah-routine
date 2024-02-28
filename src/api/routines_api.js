import Routine from '../models/routine'

const getRoutines = () => {
  return [
    new Routine('Namaz', 'checkbox'),
    new Routine('Miswak', 'number_field'),
    new Routine('Takbeer e oola', 'number_field')
  ];
}

export {
  getRoutines
}
