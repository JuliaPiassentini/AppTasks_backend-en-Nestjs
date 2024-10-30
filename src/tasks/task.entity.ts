//Tipo propio de TS 
export enum TasksStatus{
    PENDING='PENDING',
    IN_PROGRESS='IN_PROGRESS',
    DONE='DONE',
}

//Exporto para poder utilizarlo fuera 
export class Task{
    id:string;
    title:string;
    description:string;
    status:TasksStatus;
}