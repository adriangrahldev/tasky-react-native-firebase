export interface googleUser {
    id: string;
    email: string;
    given_name: string;
    family_name: string;
    picture: string;
}
export interface User {
    id: string;
    email: string;
    name: string;
    password: string;
    picture: string;
    tasks: Task[];
}
export interface Task {
    id: string;
    title: string;
    description: string;
    date: string;
}
export interface UserCredentials {
    email: string;
    password: string;
}
export interface FirebaseError {
    code: string;
    message: string;
}
