import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { PensamentosComponent } from './componentes/pensamentos/pensamentos.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabecalhoComponent,
    RodapeComponent,
    PensamentosComponent,
    CriarPensamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule /* Para usar NgModel diretiva -> Data binding bidirecional no Angular é um recurso que permite a sincronização automática de dados entre o modelo (dados do componente) e a visualização (interface do usuário). Isso significa que qualquer alteração feita no modelo reflete imediatamente na interface, e qualquer alteração feita na interface reflete imediatamente no modelo. */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
