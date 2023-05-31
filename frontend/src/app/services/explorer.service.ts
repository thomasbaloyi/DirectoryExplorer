import { Injectable } from '@angular/core';
import { Directory } from '../model/directory.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExplorerService {

  constructor(private http: HttpClient) { }

  public getDirectory(path: string): Observable<Directory> {
    return this.http.get<Directory>('');
  }
}
