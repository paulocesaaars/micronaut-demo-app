import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

export abstract class BaseService {
  protected ApiUrl: string = environment.apiUrl;
  protected ApiUrlV1: string = environment.apiUrl;

  protected getHeaderJson() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  protected getAuthHeaderJson() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
  }

  protected getAuthHeaderBlob(): any {
    return {
      responseType: 'blob',
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
  }

  protected extractData(response: any) {
    return response || {};
  }

  protected serviceError(response: Response | any) {
    let customError: string[] = [];
    let customResponse = { error: { messages: [''] } };

    if (response instanceof HttpErrorResponse) {
      if (response.statusText === 'Unknown Error') {
        customError.push('Ocorreu um erro desconhecido');
        response.error.errors = customError;
      }
    }

    if (response.status === 401) {
      localStorage.clear();
      customError.push(
        'Ocorreu um erro de autorização, autentique novamente.'
      );

      customResponse.error.messages = customError;
      return throwError(customResponse);
    }

    if (response.status === 500) {
      customError.push(
        'Ocorreu um erro no processamento, tente novamente mais tarde ou contate o nosso suporte.'
      );

      // Erros do tipo 500 não possuem uma lista de erros
      // A lista de erros do HttpErrorResponse é readonly
      customResponse.error.messages = customError;
      return throwError(customResponse);
    }

    return throwError(response.error);
  }
}
