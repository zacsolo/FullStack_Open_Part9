import React, { useEffect } from 'react';
import { Icon } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { apiBaseUrl } from '../constants';
import { Patient, Entry } from '../types';
import { useStateValue } from '../state';
import { setSinglePatient } from '../state/reducer';
import EntryContainer from './EntryContainer';
import AddEntryModal from '../AddEntryModal';

interface ParamTypes {
  id: string;
}

const SinglePatientPage: React.FC = () => {
  const { id } = useParams<ParamTypes>();
  const [{ singlePatient }, dispatch] = useStateValue();

  const onSubmit = async (entry: Entry) => {
    try {
      await axios.post<Entry>(`${apiBaseUrl}/patients/${id}/entries`, entry);
      const { data: patientData } = await axios.get<Patient>(
        `${apiBaseUrl}/patients/${id}`
      );
      dispatch(setSinglePatient(patientData));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const fetchSinglePatient = async (id: string) => {
      try {
        const { data: patientData } = await axios.get<Patient>(
          `${apiBaseUrl}/patients/${id}`
        );
        dispatch(setSinglePatient(patientData));
      } catch (e) {
        console.error(e);
      }
    };
    fetchSinglePatient(id);
  }, [dispatch, id]);

  if (singlePatient) {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'space-around',
          }}>
          <h2>{singlePatient.name}</h2>
          <Icon
            size='big'
            name={singlePatient.gender === 'male' ? 'man' : 'woman'}></Icon>
        </div>
        <div>
          <p>ssn: {singlePatient.ssn}</p>
          <p>occupation: {singlePatient.occupation}</p>
        </div>
        <div>
          <h3>Entries</h3>
          {singlePatient.entries.map((e) => (
            <div
              style={{
                border: '1px solid grey',
                marginTop: '5px',
                marginBottom: '10px',
                padding: '5px',
              }}
              key={e.id}>
              <EntryContainer patient={e} />
            </div>
          ))}
        </div>
        <AddEntryModal onSubmit={onSubmit} />
      </div>
    );
  } else {
    return <div>Loading....</div>;
  }
};

export default SinglePatientPage;
