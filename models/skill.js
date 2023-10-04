const skills = [
    {id: 125223, skill: 'Coding Languages', done: true},
    {id: 127904, skill: 'Debugging', done: false},
    {id: 139608, skill: 'Cloud Platforms', done: false}
  ];
	
  module.exports = {
    getAll
  };
	
  function getAll() {
    return skills;
  }