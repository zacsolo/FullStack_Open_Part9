import React from 'react';
import { Entry, Diagnosis } from '../types';
import { Icon } from 'semantic-ui-react';
import { useStateValue } from '../state';

const EntryContainer: React.FC<{ patient: Entry }> = ({ patient }) => {
  const [{ diagnosis }] = useStateValue();

  const matchDiagnosisCode = (
    arr: string[] | undefined
  ): Diagnosis[] | undefined => {
    let match;
    if (arr) {
      match = diagnosis?.filter(
        (d) => d.code === arr.find((item) => item === d.code)
      );
    } else {
      return;
    }
    return match;
  };

  switch (patient.type) {
    case 'HealthCheck':
      return (
        <div>
          <div style={{ display: 'flex' }}>
            <p style={{ paddingRight: '5px' }}>Date: {patient.date}</p>
            <Icon name='user md'></Icon>
          </div>
          <p>Description: {patient.description}</p>
          {patient.diagnosisCodes && (
            <div>
              <p>Diagnosis:</p>
              <ul>
                {matchDiagnosisCode(patient.diagnosisCodes)?.map((item) => (
                  <li key={item.code}>
                    {item.code} - {item.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <p>HealthCheckRating: {patient.healthCheckRating}</p>
          <p>Specialist: {patient.specialist}</p>
        </div>
      );
    case 'Hospital':
      return (
        <div>
          <div style={{ display: 'flex' }}>
            <p style={{ paddingRight: '5px' }}>Date: {patient.date}</p>
            <Icon name='ambulance'></Icon>
          </div>

          <p>Description: {patient.description}</p>
          {patient.diagnosisCodes && (
            <div>
              <p>Diagnosis:</p>
              <ul>
                {matchDiagnosisCode(patient.diagnosisCodes)?.map((item) => (
                  <li key={item.code}>
                    {item.code} - {item.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <p>Discharge: {patient.discharge.criteria}</p>
          <p>Specialist: {patient.specialist}</p>
        </div>
      );
    case 'OccupationalHealthcare':
      return (
        <div>
          <div style={{ display: 'flex' }}>
            <p style={{ paddingRight: '5px' }}>Date: {patient.date}</p>
            <Icon name='heartbeat'></Icon>
          </div>
          <p>Description: {patient.description}</p>
          {patient.diagnosisCodes && (
            <div>
              <p>Diagnosis:</p>
              <ul>
                {matchDiagnosisCode(patient.diagnosisCodes)?.map((item) => (
                  <li key={item.code}>
                    {item.code} - {item.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p>Employer: {patient.employerName}</p>
          {patient.sickLeave && (
            <p>
              Sick leave: {patient.sickLeave?.startDate} to{' '}
              {patient.sickLeave?.endDate}
            </p>
          )}

          <p>Specialist: {patient.specialist}</p>
        </div>
      );
  }
};

export default EntryContainer;
