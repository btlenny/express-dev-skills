const skills = [
    {id: 125223, skill: 'Coding Languages', done: true},
    {id: 127904, skill: 'Debugging', done: false},
    {id: 139608, skill: 'Cloud Platforms', done: false}
  ];
	
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };

function deleteOne(id) {
  id = parseInt(id);
    // Find the index for the todo
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
  }


function create(skill) {
  // Add the id
  skill.id = Date.now() % 1000000;
  skill.done = false;
  skills.push(skill);
}

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function getAll() {
  return skills;
}