import patients from './newPatientData';

import { PatientEntry } from '../src/types/types';
import toNewPatientEntry from '../src/utilities/utils';

const allPatientEntries: PatientEntry[] = patients.map((obj) => {
  const object = toNewPatientEntry(obj) as PatientEntry;
  object.id = obj.id;
  return obj;
});

export default allPatientEntries;
