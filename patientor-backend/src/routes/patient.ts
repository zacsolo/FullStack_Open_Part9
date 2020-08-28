import express from 'express';
import patientServices from '../services/patient';
import toNewPatientEntry from '../utilities/utils';
import { PrivatePatient, PatientEntry, Entry } from '../types/types';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

router.get('/', (_req, res) => {
  const allData: Array<PrivatePatient> = patientServices.getAll();
  res.send(allData);
});

router.get('/:id', (req, res) => {
  const { params } = req;
  const onePatient: PatientEntry | undefined = patientServices.findOne(
    params.id
  );
  res.send(onePatient);
});

router.post('/', (req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(req.body);

    const savedPatient = patientServices.addPatient(newPatientEntry);
    res.json(savedPatient);
  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    res.status(400).send(e.message);
  }
});

//-----------ENTRIES ROUTES-----------------------
router.post('/:id/entries', (req, res) => {
  const id: string = uuidv4();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const addedId = { ...req.body, id };
  const personEntries = patientServices.addEntry(req.params.id, addedId);
  console.log('JUST PASSED IN AS A POST__________', personEntries);
  res.send(personEntries);
});
router.get('/:id/entries', (req, res) => {
  const personEntries: Entry[] | undefined = patientServices.getEntries(
    req.params.id
  );
  res.send(personEntries);
});
//------------------------------------------------

export default router;
