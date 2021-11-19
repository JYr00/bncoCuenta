import { Component, OnInit } from '@angular/core';
import { Cuenta } from 'src/app/models/cuenta';
import { CuentaService } from '../../services/cuenta.service';

@Component({
  selector: 'app-listar-cuentas',
  templateUrl: './listar-cuentas.component.html',
  styleUrls: ['./listar-cuentas.component.css']
})
export class ListarCuentasComponent implements OnInit {
  listaCuentas: Cuenta[] = []; //

  constructor(private _cuentasService: CuentaService) { }

  ngOnInit(): void {
    this.obtenerCuentas();
  }

  obtenerCuentas(): void {
    this._cuentasService.getCuentas().subscribe(data => {
      console.log(data);
      this.listaCuentas = data.accounts;
    }, err => {
      console.log(err);
    })
  }
}
