import { Injectable } from '@angular/core';
import { Http } from '@angular/Http';
import {TreeNode} from 'primeng/api';

@Injectable()
export class ChamadaService {

  constructor(private http: Http) { }

  getFilesystem() {
    return this.http.get('assets/demo/data/filesystem.json')
                .toPromise()
                .then(res => <TreeNode[]> res.json().data)
                .then(data => data);
} 
}
