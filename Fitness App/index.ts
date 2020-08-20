import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});
app.get('/bmi:?', (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);
  if (!height || !weight) {
    res.send('Missing or incomplete query');
  }
  const value: string = calculateBmi(height, weight);
  const response = { height, weight, bmi: value };
  res.json(response);
});

app.post('/exercise', (req, res) => {
  const dailyExercise: Array<number> = req.body.daily_exercises;
  const target: number = req.body.target;
  if (!target || !dailyExercise) {
    res.status(400).json('Parameters missing!').end();
  }
  if (isNaN(Number(target))) {
    res.status(400).json('target not a number').end();
  }
  if (dailyExercise.find((num) => isNaN(Number(num)))) {
    res.status(400).json('Array contains non number').end();
  }
  const result = calculateExercises(
    Number(target),
    dailyExercise.map((num) => Number(num))
  );
  res.json(result);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
