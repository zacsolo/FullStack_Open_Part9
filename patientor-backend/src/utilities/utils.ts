/* eslint-disable @typescript-eslint/no-explicit-any */
import { NewPatientEntry, Gender, Entry } from '../types/types';

//HELPER FUNCTIONS___________
const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String;
};
const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isEntryType = (obj: Entry): boolean => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (!obj.type) {
    return false;
  }
  const isValid =
    obj.type === 'HealthCheck'
      ? true
      : obj.type === 'Hospital'
      ? true
      : obj.type === 'OccupationalHealthcare'
      ? true
      : false;
  return isValid;
};

//________________________________

const parseStringValues = (text: any): string => {
  if (!text || !isString(text)) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    throw new Error(`Incorrect or missing text: ${text}`);
  }

  return text;
};

const parseDate = (date: any): string => {
  if (!date || !isString(date) || !isDate(date)) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    throw new Error(`Incorrect or missing date: ${date}`);
  }
  return date;
};

const parseGender = (gender: any): Gender => {
  if (!gender || !isGender(gender)) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    throw new Error(`Incorrect or missing date: ${gender}`);
  }
  return gender;
};

const parseEntry = (entryArr: Entry[]): Entry[] => {
  const booleanArr: boolean[] = entryArr.map((e) => isEntryType(e));
  if (!entryArr || booleanArr.find((i) => i === false)) {
    throw new Error(`Incorrect or missing entry: ${entryArr[0].type}`);
  }
  return entryArr;
};

const toNewPatientEntry = (object: NewPatientEntry): NewPatientEntry => {
  if (object.entries) {
    return {
      name: parseStringValues(object.name),
      dateOfBirth: parseDate(object.dateOfBirth),
      ssn: parseStringValues(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseStringValues(object.occupation),
      entries: parseEntry(object.entries),
    };
  } else {
    return {
      name: parseStringValues(object.name),
      dateOfBirth: parseDate(object.dateOfBirth),
      ssn: parseStringValues(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseStringValues(object.occupation),
      entries: [],
    };
  }
};

export const checkEntry = (entry: Entry): Entry => {
  switch (entry.type) {
    case 'HealthCheck':
      if (
        !entry.date ||
        !entry.description ||
        !entry.id ||
        !entry.specialist ||
        !entry.healthCheckRating
      ) {
        throw new Error(`Incorrect or missing entry: ${entry.type}`);
      } else {
        return entry;
      }
    case 'Hospital':
      if (
        !entry.date ||
        !entry.description ||
        !entry.id ||
        !entry.specialist ||
        !entry.discharge
      ) {
        throw new Error(`Incorrect or missing entry: ${entry.type}`);
      } else {
        return entry;
      }
    case 'OccupationalHealthcare':
      if (
        !entry.date ||
        !entry.description ||
        !entry.id ||
        !entry.specialist ||
        !entry.employerName
      ) {
        throw new Error(`Incorrect or missing entry: ${entry.type}`);
      } else {
        return entry;
      }
  }
};

export default toNewPatientEntry;
