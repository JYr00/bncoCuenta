import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuentaService } from 'src/app/services/cuenta.service';
import { Cuenta } from '../../models/cuenta';

@Component({
  selector: 'app-lista-detalle',
  templateUrl: './lista-detalle.component.html',
  styleUrls: ['./lista-detalle.component.css']
})
export class ListaDetalleComponent implements OnInit {

  cuenta!: Cuenta;
  number: string | null;
  balance!: string | null;

  constructor(private _cuentasService: CuentaService,
              private aRoute: ActivatedRoute) {
                this.number = this.aRoute.snapshot.paramMap.get('number');
              }

  ngOnInit(): void {
    this.obtenerCuenta();
  }

  obtenerCuenta(): void {
    this._cuentasService.getCuentas().subscribe(data => {

      this.cuenta = data.accounts.find((a: { number: string | null; }) => a.number === this.number);

      this.balance = Number(this.cuenta.balance).toLocaleString('en-US');

    }, err => {
      console.log(err);
    })
  }

}
