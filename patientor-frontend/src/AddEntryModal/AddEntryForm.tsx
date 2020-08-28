import React, { useState } from 'react';

import { useStateValue } from '../state';

type FormProps = {
  type: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (entry: any) => void;
};

const AddEntryForm: React.FC<FormProps> = ({ type, onSubmit }) => {
  const [{ diagnosis }] = useStateValue();
  const [isValid, setIsValid] = useState(true);

  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [specialist, setSpecialist] = useState('');
  const [healthCheckRating, setHealthCheckRating] = useState('');
  const [employerName, setEmployerName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [dischargeDate, setDischargeDate] = useState('');
  const [criteria, setCriteria] = useState('');
  const [diagnosisCodes, setDiagnosisCodes] = useState<string[]>([]);

  const healthCheckRender = () => {
    return (
      <select
        name='healthCheckRating'
        id='healthCheckRating'
        onChange={(e) => setHealthCheckRating(e.target.value)}
        value={healthCheckRating}>
        <option value=''></option>
        <option value='0'>Healthy</option>
        <option value='1'>Low Risk</option>
        <option value='2'>High Risk</option>
        <option value='3'>Critical Risk</option>
      </select>
    );
  };
  const occupationalRender = () => {
    return (
      <div>
        <input
          type='text'
          placeholder='Employer Name'
          value={employerName}
          onChange={(e) => setEmployerName(e.target.value)}
        />
        Sick Leave:
        <input
          type='date'
          placeholder='Start Date'
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type='date'
          placeholder='End Date'
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
    );
  };
  const hospitalRender = () => {
    return (
      <div>
        Discharge
        <input
          type='date'
          placeholder='Date'
          value={dischargeDate}
          onChange={(e) => setDischargeDate(e.target.value)}
        />
        <input
          type='text'
          placeholder='Criteria'
          value={criteria}
          onChange={(e) => setCriteria(e.target.value)}
        />
      </div>
    );
  };
  const resetAllLocalState = () => {
    setDescription('');
    setDate('');
    setSpecialist('');
    setDiagnosisCodes([]);
    setHealthCheckRating('');
    setEmployerName('');
    setStartDate('');
    setEndDate('');
    setDischargeDate('');
    setCriteria('');
  };

  const createEntry = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (type === 'HealthCheck') {
      if (description && date && specialist && healthCheckRating) {
        onSubmit({
          type: 'HealthCheck',
          description,
          date,
          specialist,
          diagnosisCodes,
          healthCheckRating,
        });
        resetAllLocalState();
      } else {
        setIsValid(false);
      }
    }
    if (type === 'OccupationalHealthcare') {
      if (description && date && specialist && employerName) {
        onSubmit({
          type: 'OccupationalHealthcare',
          description,
          date,
          specialist,
          diagnosisCodes,
          employerName,
          sickLeave: {
            startDate,
            endDate,
          },
        });
        resetAllLocalState();
      } else {
        setIsValid(false);
      }
    }
    if (type === 'Hospital') {
      const discharge = {
        date: dischargeDate,
        criteria,
      };
      if (description && date && specialist && dischargeDate && criteria) {
        onSubmit({
          type: 'Hospital',
          description,
          date,
          specialist,
          diagnosisCodes,
          discharge,
        });
        resetAllLocalState();
      } else {
        setIsValid(false);
      }
    }
  };
  const addNewCode = (e: { target: { value: any } }): void => {
    const newValue = e.target.value;
    if (diagnosisCodes.length < 1) {
      setDiagnosisCodes([newValue]);
    } else {
      setDiagnosisCodes((prevArr) => [...prevArr, newValue]);
    }
  };
  return (
    <form onSubmit={createEntry}>
      <input
        value={description}
        type='text'
        placeholder='description'
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        value={date}
        type='date'
        placeholder='date'
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        value={specialist}
        type='specialist'
        placeholder='specialist'
        onChange={(e) => setSpecialist(e.target.value)}
      />
      <select name='diagnosisCodes' id='diagnosisCodes' onChange={addNewCode}>
        <option value=''></option>
        {diagnosis?.map((d) => (
          <option key={d.code} value={d.code}>
            {d.code}
          </option>
        ))}
      </select>
      <ul>
        {diagnosisCodes.map((code) => (
          <li key={code}>{code}</li>
        ))}
      </ul>
      {type === 'HealthCheck' && healthCheckRender()}
      {type === 'OccupationalHealthcare' && occupationalRender()}
      {type === 'Hospital' && hospitalRender()}
      <button type='submit' style={{ width: '100px', marginTop: '10px' }}>
        Add
      </button>
      {!isValid && (
        <p style={{ color: 'red' }}>Please Make sure to complete all fields</p>
      )}
    </form>
  );
};

export default AddEntryForm;
