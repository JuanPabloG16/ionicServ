import { Course } from "./courses.model";

export interface ResponseCourse{
    code: number;
    description: string;
    data: Course[];
}