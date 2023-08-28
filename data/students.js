const students = [
    {stud: 'Nicolas Cage', grad: true},
    {stud: 'Michael Cera', grad: false},
    {stud: 'Ryan Gosling', grad: false}
  ];


  module.exports = {
    getAll: function() {
      return students;
    }
  };