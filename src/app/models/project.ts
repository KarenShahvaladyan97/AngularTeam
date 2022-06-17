import { Client } from "./client";

// export interface Project {
    
//         username: string;
//         icon: string;
//         user: string;      
//         status:string;
    
// }

export interface Project {
        id: any;
        title: string;
        icon: string;
        clientContact: Client;      
        status:string;
        developers: {
                img: string;
                profession: string;
                fullName: string;
                addres: string;
                phone: number;
        }[];
        technologies: string[];
        taskCompleted: number;
}