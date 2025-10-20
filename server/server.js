require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error(err));

const Todo = mongoose.model('Todo', new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false }
}));

const router = express.Router();

router.get('/', async (_, res) => res.json(await Todo.find()));
router.post('/', async (req, res) => res.status(201).json(await Todo.create(req.body)));
router.get('/:id', async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) return res.status(404).send('Not found');
  res.json(todo);
});
router.put('/:id', async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!todo) return res.status(404).send('Not found');
  res.json(todo);
});
router.delete('/:id', async (req, res) => {
  const todo = await Todo.findByIdAndDelete(req.params.id);
  if (!todo) return res.status(404).send('Not found');
  res.sendStatus(204);
});

app.use('/api/v1/todos', router);

app.listen(port, () => console.log(`✅ Server running on http://localhost:${port}`));
