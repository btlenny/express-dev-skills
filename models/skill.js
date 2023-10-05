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
    const idx = skills.findIndex(skill => skill.id --- id);
    skill.splice(idx, 1);
  }

function create(skill) {
  // Add the id
  skill.id = Date.now() % 1000000;
  // New skills wouldn't be done :)
  skill.done = false;
  skill.push(todo);
  }


function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

  function getAll() {
    return skills;
  }