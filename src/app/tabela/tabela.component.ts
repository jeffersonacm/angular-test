import { Component, OnInit } from '@angular/core';
import { ChamadaService } from './chamada.service';
import {TreeNode} from 'primeng/api';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  files: TreeNode[];

  constructor(private ChamadaService: ChamadaService) { }

  ngOnInit() {
    this.ChamadaService.getFilesystem().then(files => this.files = files);
  }

}
