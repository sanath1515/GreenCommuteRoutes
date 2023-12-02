import { SAVEJOB, SHOWJOB, SHOWPAGE, SHOWSTEPPER, SHOWYOURLOCATION, SHOWSKILLS, SHOWJOBLOCATION, ASSIGNJOBCARDDETAILS, UNSAVEJOB, SHOWJOBFORSAVEDJOBS } from '../types';

export const savedJob = (job) => {
    return {
        type: SAVEJOB,
        job: job,
    }
}

export const unsaveJob = (job) => {
    return {
        type: UNSAVEJOB,
        job: job,
    }
}

export const showJob = (job) => {
    return {
        type: SHOWJOB,
        job: job,
    }
}
export const showJobForSavedJobs = (job) => {
    return {
        type: SHOWJOBFORSAVEDJOBS,
        job: job
    }
}

export const showPage = (page) => {
    return {
        type: SHOWPAGE,
        page: page
    }
}

export const showStepper = (stepper) => {
    return {
        type: SHOWSTEPPER,
        stepper: stepper
    }
}

export const showYourLocation = (location) => {
    return {
        type: SHOWYOURLOCATION,
        location: location
    }
}

export const showSkills = (location) => {
    return {
        type: SHOWSKILLS,
        location: location
    }
}

export const showJobLocation = (location) => {
    return {
        type: SHOWJOBLOCATION,
        location: location
    }
}

export const assignJobCardDetails = (jobs) => ({

    type: ASSIGNJOBCARDDETAILS,
    job: jobs
})