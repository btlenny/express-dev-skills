const skills = [
    {id: 125223, skill: 'Coding Languages', done: true},
    {id: 127904, skill: 'Debugging', done: false},
    {id: 139608, skill: 'Cloud Platforms', done: false}
  ];
	
  module.exports = {
    getAll,
    getOne
  };
	
function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

  function getAll() {
    return skills;
  }