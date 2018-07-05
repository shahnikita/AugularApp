// import { IHttpService, IRequestOptions } from "../imports";
// import { Injectable } from "@angular/core";
// import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
// import { Observable } from "rxjs/observable";
// import 'rxjs/add/operator/do';

// type AngularRequestOptions = {
//     headers?: HttpHeaders;
//     observe?: "body";
//     params?: HttpParams;
//     reportProgress?: boolean;
//     responseType?: "json";
//     withCredentials?: boolean;
// };


// @Injectable()
// export class HttpProvider implements IHttpService{
//     post<T>(url: string, body: any, options?: IRequestOptions): Observable<T> {
//         throw new Error("Method not implemented.");
//     }
//     put<T>(url: string, body: any, options?: IRequestOptions): Observable<T> {
//         throw new Error("Method not implemented.");
//     }
//     delete<T>(url: string, options?: IRequestOptions): Observable<T> {
//         throw new Error("Method not implemented.");
//     }
//     patch<T>(url: string, body: any, options?: IRequestOptions): Observable<T> {
//         throw new Error("Method not implemented.");
//     }

//     constructor(private http: HttpClient) {
//         this.setupRequestCount();
//     }

//     get<T>(url: string, options?: IRequestOptions): Observable<T> {
//         this.incrementRequestCount();
//         return this.http.get<T>(url, this.ToAngularOptions(options)).do(this.decrementRequestCount);
//     }

//     private setupRequestCount():void{
//         if(window["httpPendingRequests"] == undefined){
//             window["httpPendingRequests"] = 0;
//         }
//     }
//     private incrementRequestCount():void {
//         window["httpPendingRequests"]++;
//     }

//     private decrementRequestCount():void {
//         window["httpPendingRequests"]--;
//     }
//     private ToAngularOptions(options: IRequestOptions): AngularRequestOptions {

//         if(!options) {
//             return {};
//         }

//         let retval: AngularRequestOptions = { headers: null, params: null };

//         if (options.headers) {
//             retval.headers = new HttpHeaders(options.headers);
//         }

//         if (options.params) {

//             retval.params = new HttpParams();

//             for(let key in options.params) {
//                 retval.params.set(key, options.params[key]);
//             }

//         }

//         return retval;
//     }
// }