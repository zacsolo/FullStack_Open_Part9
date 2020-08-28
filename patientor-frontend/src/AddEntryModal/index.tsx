import React, { useState } from 'react';
import AddEntryForm from './AddEntryForm';
import { Entry } from '../types';

type FormProps = {
  onSubmit: (entry: Entry) => void;
};

const AddEntryModal: React.FC<FormProps> = ({ onSubmit }) => {
  const [type, setType] = useState('');

  return (
    <div>
      <h4>Add new entry</h4>
      <select
        name='type'
        id='type'
        onChange={(e) => setType(e.target.value)}
        value={type}>
        <option value=''></option>
        <option value='HealthCheck'>Health Check</option>
        <option value='OccupationalHealthcare'>Occupational Healthcare</option>
        <option value='Hospital'>Hospital</option>
      </select>
      {type !== '' && <AddEntryForm type={type} onSubmit={onSubmit} />}
    </div>
  );
};

export default AddEntryModal;
