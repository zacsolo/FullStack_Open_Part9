import express from 'express';
import { calculateBmi } from './bmiCalculator';

const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});
app.get('/bmi:?', (req, res) => {
  const height: number = Number(req.query.height);
  const weight: number = Number(req.query.weight);
  if (!height || !weight) {
    res.send('Missing or incomplete query');
  }
  const value: string = calculateBmi(height, weight);
  const response = { height, weight, bmi: value };
  res.json(response);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
