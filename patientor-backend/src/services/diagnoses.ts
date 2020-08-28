import diagnosesData from '../../data/diagnoses.json';
import { DiagnosisEntry } from '../types/types';

const diagnoses: Array<DiagnosisEntry> = diagnosesData;

const getAll = (): Array<DiagnosisEntry> => {
  return diagnoses;
};

export default {
  getAll,
};
