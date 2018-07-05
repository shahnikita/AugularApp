import { IRequestOptions } from './IRequestOptions';
import { Observable } from 'rxjs/Observable';

/**
 * @desc Interface for classes that wrap HTTP calls
 * @interface IHttpService
 */
export interface IHttpService {

    /**
     * @desc Makes a GET request
     * @function get
     * @template T
     * @param {string} url - the url endpoint
     * @param {IRequestOptions} options - configurable options for the HTTP calls
     * @returns {Observable<T>} an observable of T 
     */
    get<T>(url: string, options?: IRequestOptions): Observable<T>

    /**
     * @desc Makes a POST request
     * @function post
     * @template T
     * @param {string} url - the url endpoint
     * @param {object} body - the body of the request
     * @param {IRequestOptions} options - configurable options for the HTTP calls
     * @returns {Observable<T>} an observable of T
     */
    post<T>(url: string, body: any, options?: IRequestOptions): Observable<T>

    /**
     * @desc Makes a PUT request
     * @function put
     * @template T
     * @param {string} url - the url endpoint
     * @param {object} body - the body of the request
     * @param {IRequestOptions} options - configurable options for the HTTP calls
     * @returns {Observable<T>} an observable of T
     */
    put<T>(url: string, body: any, options?: IRequestOptions): Observable<T>

    /**
     * @desc Makes a DELETE request
     * @function delete
     * @template T
     * @param {string} url - the url endpoint
     * @param {IRequestOptions} options - configurable options for the HTTP calls
     * @returns {Observable<T>} an observable of T
     */
    delete<T>(url: string, options?: IRequestOptions): Observable<T>

    /**
     * @desc Makes a PATCH request
     * @function patch
     * @template T
     * @param {string} url - the url endpoint
     * @param {object} body - the body of the request
     * @param {IRequestOptions} options - configurable options for the HTTP calls
     * @returns {Observable<T>} an observable of T
     */
    patch<T>(url: string, body: any, options?: IRequestOptions): Observable<T>

}
