import { IStudent } from "../interfaces/istudent";

export class Student {
    student: IStudent = <IStudent>{};

    constructor() {
    }
    fileUploadEvent(files: FileList): void
     {
        this.student.profilePicture = files.item(0);
        alert(this.student.profilePicture.name);
    }


}