import allPatientEntries from '../../data/patients';
import {
  PrivatePatient,
  PatientEntry,
  NewPatientEntry,
  Entry,
} from '../types/types';
import { v4 as uuidv4 } from 'uuid';
import { checkEntry } from '../utilities/utils';

type NumString = number | string;
const newArr: NumString[] = [];

console.log(newArr);
const patient: PatientEntry[] = allPatientEntries;
console.log('UNALTERED PATIENTS', allPatientEntries);
console.log('___SERVICES___', patient);

const getAll = (): Array<PrivatePatient> => {
  return patient.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const findOne = (id: string): PatientEntry | undefined => {
  const person = patient.find((p) => p.id === id);
  if (!person) {
    return;
  }
  return person;
};

const addPatient = (entry: NewPatientEntry): PatientEntry => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
  const id: string = uuidv4();
  const newPatientEntry = {
    id,
    ...entry,
  };
  patient.push(newPatientEntry);
  return newPatientEntry;
};

const addEntry = (id: string, entry: Entry): Entry[] | undefined => {
  const person = patient.find((p) => p.id === id);
  if (!person) {
    return;
  }
  const parsedEntry: Entry | undefined = checkEntry(entry);
  person.entries.push(parsedEntry);
  return person.entries;
};

const getEntries = (id: string): Entry[] | undefined => {
  const person = patient.find((p) => p.id === id);
  if (!person) {
    return;
  }
  return person.entries;
};

export default {
  getAll,
  addPatient,
  findOne,
  addEntry,
  getEntries,
};
