const { db } = require("../lib/db");
const Schema = db.Schema;

const todoSchema = new Schema({
  id: { type: Number, required: true, default: 1 },
  title: { type: String, required: true },
  dueDate: { type: Date, required: true },
  description: { type: String, required: true },
  priority: { type: Number, required: true, default: 1 },
  complete: { type: Boolean, required: true, default: false }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });
const Todo = db.model("Todo", todoSchema);

module.exports = {
  Todo,
  todoSchema
};
