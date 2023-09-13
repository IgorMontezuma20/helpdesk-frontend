import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from 'src/app/models/tecnico';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {

  TECNICO_DATA: Tecnico[] = [
    {
      id: 1,
      nome: 'Igor',
      cpf: '123.456.789-10',
      email: 'igor@email.com',
      senha: '1234',
      perfis: ['0'],
      dataCriacao: '13/09/2023'
    }
  ];

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'acoes'];
  dataSource = new MatTableDataSource<Tecnico>(this.TECNICO_DATA);
  
  ngOnInit(): void {
    
  }


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

