import {Injectable} from '@angular/core';
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {ToastyService} from 'ng2-toasty';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService extends Http {

	constructor(backend: XHRBackend, options: RequestOptions, private loadingBarService: SlimLoadingBarService, private toastyService: ToastyService) {
		super(backend, options);
	}

	request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {		
		//Manage token info
		// let userToken = JSON.parse(localStorage.getItem('tokenInfo'));
		// if (typeof url === 'string') {
		// 	if (!options) {
		// 		options = { headers: new Headers() };
		// 	}
		// 	options.headers.set('Authorization', userToken.bearer);
		// } else {
		// 	url.headers.set('Authorization', userToken.bearer);
		// }
		return super.request(url, options).catch(this.catchAuthError(this));		
	}

	/**
		 * Performs a request with `get` http method.
	*/
	public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
		this.loadingBarService.start();
		return super.get(url, options)
		.map((resp:Response) => {
			this.loadingBarService.complete();
			return resp;
		})
		.catch(this.catchAuthError(this));		
	}
    /**
     * Performs a request with `post` http method.
     */
	public post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
		this.loadingBarService.start();
		return super.post(url, body, options).map((resp:Response) => {
			this.toastyService.success({ title: "Success", msg: "Saved successfully" });
			this.loadingBarService.complete();
			return resp;
		}).catch(this.catchAuthError(this));		
	}

    /**
     * Performs a request with `put` http method.
     */
    public put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
		this.loadingBarService.start();
		return super.put(url, body, options).map((resp:Response) => {
			this.toastyService.success({ title: "Success", msg: "Saved sucessfully" });
			this.loadingBarService.complete();
			return resp;
		}).catch(this.catchAuthError(this));		
	}
    /**
     * Performs a request with `delete` http method.
     */
    public delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
		return super.delete(url, options).map((resp:Response) => {
			this.toastyService.success({ title: "Success", msg: "Saved sucessfully" });
			return resp;
		}).catch(this.catchAuthError(this));

	}
    /**
     * Performs a request with `patch` http method.
     */
    public patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
		this.loadingBarService.start();
			return super.patch(url,body,  options).map((resp:Response) => {
			this.toastyService.success({ title: "Success", msg: "Saved sucessfully" });
			this.loadingBarService.complete();
			return resp;
		}).catch(this.catchAuthError(this));		
	}
    /**
     * Performs a request with `head` http method.
     */
    public head(url: string, options?: RequestOptionsArgs): Observable<Response> {
		this.loadingBarService.start();
		return super.head(url, options).map((resp:Response) => {
			this.toastyService.success({ title: "Success", msg: "Saved sucessfully" });
			this.loadingBarService.complete();
			return resp;
		}).catch(this.catchAuthError(this));		
	}
    /**
     * Performs a request with `options` http method.
     */
    public options(url: string, options?: RequestOptionsArgs): Observable<Response> {
		this.loadingBarService.start();
		return super.options(url, options).map((resp:Response) => {
			this.toastyService.success({ title: "Success", msg: "Saved sucessfully" });
			this.loadingBarService.complete();
			return resp;
		}).catch(this.catchAuthError(this));
	}

	private catchAuthError(error: any) {
		this.loadingBarService.complete();
		// we have to pass HttpService's own instance here as `self`
		return (res: Response) => {
			console.log(res);
			if (res.status === 0) {
				this.toastyService.error({ title: "Error", msg: "Api connection error" });
				console.log(res);
			}
			if (res.status === 401) {
				// if not authenticated
				this.toastyService.warning({ title: "Warning", msg: "Access is denied due to invalid credentials." });
				console.log(res);
			}
			if (res.status === 403) {
				// if not authenticated
				this.toastyService.warning({ title: "Warning", msg: "Access denied" });
				console.log(res);
			}

			return Observable.throw(res);
		};
	}

}
