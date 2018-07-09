import { IStudent } from "../interfaces/istudent";

export class Student {
    student: IStudent = <IStudent>{};
    allowedFiles: string[] = [".png", ".jpg", ".jpeg"];
    regex: RegExp = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(" + this.allowedFiles.join('|') + ")$");
    constructor() {
    }

    get disabled(): boolean {
        return (!this.student.studentName || !this.validateFileUpload(this.student.profilePicture, false));
    }
    fileUploadEvent(files: FileList): void {
        this.student.profilePicture = files.item(0);
        if (!this.validateFileUpload(this.student.profilePicture, true)) {
            this.student.profilePicture = null;
        }
    }
    validateFileUpload(file: File, displayErrorMessage: boolean): boolean {
        if (!file) {
            if (displayErrorMessage) {
                alert("Profile Picture is required");
            }
            return false;
        }
        if (file.size <= 0) {
            if (displayErrorMessage) {
                alert("profile picture is size must be grater than zero");
            }
            return false;
        }

        if (!this.regex.test(file.name.toLocaleLowerCase())) {
            if (displayErrorMessage) {
                alert("Profile Picture must be jpeg,png file");
            }
            return false;
        }

        return true;
    }

}