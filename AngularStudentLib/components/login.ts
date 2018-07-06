import { IUser } from "../interfaces/iuser";

export class Login {

    user: IUser = <IUser>{};
    get disabled(): boolean {
        return (!this.user.userName || !this.user.password);
    }
    constructor() {

    }
    Cancel():void {
        this.user=<IUser>{};
    }
    LoginUser():void{
        if(this.user.userName && this.user.password)
        {

        }
    }
}