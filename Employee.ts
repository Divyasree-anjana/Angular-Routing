import { Skill } from "./Skill";
import { Department } from './Department';

export interface Employee
{
    id:number;
    name:string;
    salary:number;
    permanent:string
    department:Department; 
    skill:Skill[];
    dob:Date;
}