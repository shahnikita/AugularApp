/**
 * @desc Interface for the request options that can be passed into an HTTP call
 * @interface IRequestOptions
 */
export interface IRequestOptions {
    /**
     * @desc query string parameters
     * @type string
     */
    params?: { 
        [name: string]: string;
    };
    /**
     * @desc what headers should be sent with the http call
     * @type object
     */
    headers?: {
        [name: string]: any;
    };
}
