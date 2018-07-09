import { Login, IUser } from "../imports";
import {  assert } from "chai";

describe("Login Created", () => {

    let login: Login;
    let user: IUser;
    it("Cancel logged information",()=>{
        
        login.user.userName="test";
        login.user.password="test";

        login.Cancel();
        assert.equal(login.user.userName,undefined)
        assert.equal(login.user.password,undefined);
    })
})