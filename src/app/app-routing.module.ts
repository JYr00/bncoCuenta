import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ListarCuentasComponent } from './components/listar-cuentas/listar-cuentas.component';
import { ListaDetalleComponent } from './components/lista-detalle/lista-detalle.component';

const routes: Routes = [
  { path: '', component: ListarCuentasComponent},
  { path: 'detalle-cuenta/:number', component: ListaDetalleComponent},
  { path: '**', redirectTo: '', pathMatch:'full'}// Ultima siempre
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
