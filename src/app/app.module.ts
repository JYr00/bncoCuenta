import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http'

// Componentes
import { AppComponent } from './app.component';
import { ListarCuentasComponent } from './components/listar-cuentas/listar-cuentas.component';
import { NavComponent } from './components/nav/nav.component';
import { ListaDetalleComponent } from './components/lista-detalle/lista-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarCuentasComponent,
    NavComponent,
    ListaDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
