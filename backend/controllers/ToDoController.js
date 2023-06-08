const ToDoModel = require('../models/ToDoModels');

module.exports.getToDo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};
