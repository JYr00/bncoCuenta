import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ListarCuentasComponent } from './components/listar-cuentas/listar-cuentas.component';

const routes: Routes = [
  { path: '', component: ListarCuentasComponent},
  { path: '**', redirectTo: '', pathMatch:'full'}// Ultima siempre
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
