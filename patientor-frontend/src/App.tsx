import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Button, Divider, Header, Container } from 'semantic-ui-react';

import { apiBaseUrl } from './constants';
import { useStateValue } from './state';
import { Patient, Diagnosis } from './types';
import { fetchAllPatients, fetchAllDiagnosis } from './state/reducer';

import PatientListPage from './PatientListPage';
import SinglePatientPage from './SinglePatientPage';

const App: React.FC = () => {
  const [, dispatch] = useStateValue();
  React.useEffect(() => {
    axios.get<void>(`${apiBaseUrl}/ping`);
    const fetchPatientList = async () => {
      try {
        const { data: patientListFromApi } = await axios.get<Patient[]>(
          `${apiBaseUrl}/patients`
        );
        dispatch(fetchAllPatients(patientListFromApi));
      } catch (e) {
        console.error(e);
      }
    };
    const fetchDiagnosisList = async () => {
      try {
        const { data: diagnosisListFromApi } = await axios.get<Diagnosis[]>(
          `${apiBaseUrl}/diagnosis`
        );
        dispatch(fetchAllDiagnosis(diagnosisListFromApi));
      } catch (e) {
        console.error(e);
      }
    };
    fetchDiagnosisList();
    fetchPatientList();
  }, [dispatch]);

  return (
    <div className='App'>
      <Router>
        <Container>
          <Header as='h1'>Patientor</Header>
          <Button as={Link} to='/' primary>
            Home
          </Button>
          <Divider hidden />
          <Switch>
            <Route exact path='/' render={() => <PatientListPage />} />
            <Route path='/:id' render={() => <SinglePatientPage />} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
};

export default App;
