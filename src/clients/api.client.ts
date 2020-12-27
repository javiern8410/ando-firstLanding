import axios, { AxiosPromise } from 'axios';

export const ApiClient = new (class Client {
	public subscribe = (url: string, data:any) => fetch(url, {
		method: 'POST', 
		mode: 'no-cors',
		body: data
	});
	
	public login = (ACTION: string, data = {}): AxiosPromise<any> => axios.post(`/vtex/antifraud/login`, data,{
		headers: { 
			'Content-Type': 'application/json',
			'X-VTEX-LOGIN': ACTION
		}
	});
	
	public getCredential = (): AxiosPromise<any> =>
	axios.get(`/api/vtex/authorization/credentials`);
})();

export default ApiClient;

/* public subscribe = (data:any): AxiosPromise<any> => axios.post(
	"https://member.mailingboss.com/index.php/lists/ej357jcez2756/subscribe",
	data,
	{
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Credentials": true,
			"accept": "*"
		}
	}
); */