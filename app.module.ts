import { BrowserModule } from '@angular/platform-browser'; // Módulo que fornece funcionalidades essenciais para renderização no navegador
import { NgModule } from '@angular/core'; // Módulo principal do Angular para criação de módulos
import { HttpClientModule } from '@angular/common/http'; // Módulo para fazer requisições HTTP
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Módulos para lidar com formulários
import { AppComponent } from './app.component'; // Componente principal da aplicação
import { CepServiceService } from './cep-service.service'; // Serviço para buscar CEPs

@NgModule({
  declarations: [
    AppComponent // Declaração do componente principal da aplicação
  ],
  imports: [
    BrowserModule, // Importa o módulo BrowserModule para funcionalidades do navegador
    HttpClientModule, // Importa o módulo HttpClientModule para fazer requisições HTTP
    FormsModule, // Importa o módulo FormsModule para lidar com formulários de template-driven
    ReactiveFormsModule // Importa o módulo ReactiveFormsModule para lidar com formulários reativos
  ],
  providers: [CepServiceService], // Declaração dos serviços fornecidos na aplicação
  bootstrap: [AppComponent] // Componente raiz que inicializa a aplicação
})
export class AppModule { } // Módulo principal da aplicação