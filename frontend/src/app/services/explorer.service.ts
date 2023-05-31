import { Injectable } from '@angular/core';
import { Directory } from '../model/directory.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ExplorerService {
  constructor(private http: HttpClient) {}

  /**
   * Get directory details
   * @param name - name of the direcotry
   * @returns directory details and contents
   */
  public getDirectory(name: string): Observable<Directory[]> {
    return this.http.get<Directory[]>(
      `${environment.backendUrl}?directoryPath=${name}`
    );
  }
}
