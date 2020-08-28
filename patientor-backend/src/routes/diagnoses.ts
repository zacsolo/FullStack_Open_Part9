import express from 'express';
import diagnosesServices from '../services/diagnoses';
import { DiagnosisEntry } from '../types/types';
const router = express.Router();

router.get('/', (_req, res) => {
  const allData: Array<DiagnosisEntry> = diagnosesServices.getAll();
  res.json(allData);
});

export default router;
