import { State } from './state';
import { Patient } from '../types';

export type Action =
  | {
      type: 'SET_PATIENT_LIST';
      payload: Patient[];
    }
  | {
      type: 'ADD_PATIENT';
      payload: Patient;
    }
  | {
      type: 'SET_SINGLE_PATIENT';
      payload: Patient;
    };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_PATIENT_LIST':
      return {
        ...state,
        patients: {
          ...action.payload.reduce(
            (memo, patient) => ({ ...memo, [patient.id]: patient }),
            {}
          ),
          ...state.patients,
        },
      };
    case 'ADD_PATIENT':
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload,
        },
      };
    case 'SET_SINGLE_PATIENT':
      return {
        ...state,
        singlePatient: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export const setSinglePatient = (patientData: Patient): Action => {
  return { type: 'SET_SINGLE_PATIENT', payload: patientData };
};

export const fetchAllPatients = (allPatientData: Patient[]): Action => {
  return { type: 'SET_PATIENT_LIST', payload: allPatientData };
};

export const addPatient = (newPatient: Patient): Action => {
  return { type: 'ADD_PATIENT', payload: newPatient };
};
