import { Injectable } from '@angular/core';
import { GlobalConstants } from 'GlobalConstants';
import { HttpHeaders, HttpParams, HttpRequest, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileuploaderService {

  constructor(private http: HttpClient) { }
  getpresignedurls(logNamespace, fileType) {
    let getheaders = new HttpHeaders().set('Accept', 'application/json');
    let params = new HttpParams().set('fileName', logNamespace).set('fileType', fileType);
    return this.http.get<any>(`${GlobalConstants.apiURL}/generatepresignedurl`, { params: params, headers: getheaders });
   // return this.http.get<any>('${GlobalConstants.apiURL}/generatepresignedurl', { params: params, headers: getheaders });
  }

  uploadfileAWSS3(fileuploadurl, contenttype, file) { 
 
    const headers = new HttpHeaders({ 'Content-Type': contenttype });
    const req = new HttpRequest(
      'PUT',
      fileuploadurl,
      file,
      {
        headers: headers, 
      });
    return this.http.request(req);
  }
}
