export interface ChatState {
    messages: Message[]
}



export const ADD_JOB = 'ADD_JOB'

interface AddJobAction {
    type: typeof ADD_JOB
}



export type JobActionTypes = AddJobAction