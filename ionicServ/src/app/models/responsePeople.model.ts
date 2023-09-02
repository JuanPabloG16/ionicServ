import { People } from "./people.model";

export interface ResponsePeople{
    code: number;
    description: string;
    data: People[];
}