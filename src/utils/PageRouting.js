import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SearchJobPage from '../components/Pages/SearchJobPage/SearchJobPage';
import JobList from '../components/Pages/JobList/JobList';
import SavedJobsList from '../components/Pages/SavedJobsList/SavedJobsList';
import Page1 from '../components/Pages/InitialPages/InitialPages';
import JobListForSavedJobs from '../components/Pages/JobListForSavedJobs/JobListForSavedJobs';

const PageRouting = () => (
    <Switch>
        <Route exact path="/">
            {<Page1 />}
        </Route>
        <Route exact path="/showJobs">
            {<SearchJobPage />}
        </Route>
        <Route exact path="/findJobs">
            {<JobList />}
        </Route>
        <Route exact path="/savedJobs">
            {<SavedJobsList />}
        </Route>
        <Route exact path="/showSavedJobsDescription">
            {<JobListForSavedJobs />}
        </Route>

        <Redirect exact from="/" to="/welcome" />
    </Switch>
);

export default PageRouting;