import React, { useEffect } from 'react';
import { Icon } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { apiBaseUrl } from '../constants';
import { Patient } from '../types';
import { useStateValue } from '../state';
import { setSinglePatient } from '../state/reducer';

interface ParamTypes {
  id: string;
}

const SinglePatientPage: React.FC = () => {
  const { id } = useParams<ParamTypes>();
  const [{ singlePatient }, dispatch] = useStateValue();

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
  }, [dispatch]);

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
      </div>
    );
  } else {
    return <div>Loading....</div>;
  }
};

export default SinglePatientPage;
