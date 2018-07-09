
import { Observable } from "rxjs/Observable";

import { HttpHeaders, HttpParams, HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/do';
import { IRequestOptions ,IHttpService} from "../imports";

type AngularRequestOptions = {
    headers?: HttpHeaders;
    observe?: "body";
    params?: HttpParams;
    reportProgress?: boolean;
    responseType?: "json";
    withCredentials?: boolean;
};

export class HttpProvider implements IHttpService {
    constructor(private http: HttpClient) {
        this.setupRequestCount();
    }

    post<T>(url: string, body: any, options?: IRequestOptions): Observable<T> {
        this.incrementRequestCount();
        return this.http.post<T>(url, body, this.ToAngularOptions(options)).do(this.decrementRequestCount);
    }
    put<T>(url: string, body: any, options?: IRequestOptions): Observable<T> {
        this.incrementRequestCount();
        return this.http.put<T>(url, body, this.ToAngularOptions(options)).do(this.decrementRequestCount);
    }
    delete<T>(url: string, options?: IRequestOptions): Observable<T> {
        this.incrementRequestCount();
        return this.http.delete<T>(url, this.ToAngularOptions(options)).do(this.decrementRequestCount);
    }
    patch<T>(url: string, body: any, options?: IRequestOptions): Observable<T> {
        this.incrementRequestCount();
        return this.http.patch<T>(url, body, this.ToAngularOptions(options)).do(this.decrementRequestCount);
    }

    get<T>(url: string, options?: IRequestOptions): Observable<T>{
        this.incrementRequestCount();
        return this.http.get<T>(url, this.ToAngularOptions(options)).do(this.decrementRequestCount);
    }


    private setupRequestCount():void{
        if(window["httpPendingRequests"] == undefined){
            window["httpPendingRequests"] = 0;
        }
    }
    private incrementRequestCount():void {
        window["httpPendingRequests"]++;
    }

    private decrementRequestCount():void {
        window["httpPendingRequests"]--;
    }
    private ToAngularOptions(options: IRequestOptions): AngularRequestOptions {

        if(!options) {
            return {};
        }

        let retval: AngularRequestOptions = { headers: null, params: null };

        if (options.headers) {
            retval.headers = new HttpHeaders(options.headers);
        }

        if (options.params) {

            retval.params = new HttpParams();

            for(let key in options.params) {
                retval.params.set(key, options.params[key]);
            }

        }

        return retval;
    }
}