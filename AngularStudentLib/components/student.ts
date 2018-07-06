import { IStudent } from "../interfaces/istudent";

export class Student {
    student: IStudent = <IStudent>{};
    allowedFiles:string[] = [".png", ".jpg", ".jpeg"];
    regex:RegExp = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(" + this.allowedFiles.join('|') + ")$");
    constructor() {
    }
    fileUploadEvent(files: FileList): void {
        this.student.profilePicture=files.item(0);
        if (!this.validateFileUpload(this.student.profilePicture)) {
                this.student.profilePicture = null;
        }
    }
    validateFileUpload(file: File): boolean {
        if (file == undefined) {
            alert("Profile Picture is required");
            return false;
        }
        if (file.size <= 0) {
            alert("profile picture is size must be grater than zero");
            return false;
        }

        if (!this.regex.test(file.name.toLocaleLowerCase())) {
            alert("Profile Picture must be jpeg,png file");
            return false;
        }

        return true;
    }

}