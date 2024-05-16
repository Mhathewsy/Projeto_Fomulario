import { Injectable } from '@angular/core'; // Importação do decorator Injectable para tornar o serviço injetável
import { HttpClient } from '@angular/common/http'; // Importação do módulo HttpClient para realizar requisições HTTP

@Injectable({
  providedIn: 'root'
})
export class CepServiceService { // Definição da classe do serviço

  constructor(private http: HttpClient) { } // Injeção do HttpClient no construtor

  buscar(cep: string) { // Método para buscar os dados do CEP
    const url = `https://viacep.com.br/ws/${cep}/json/`; // URL para consultar o ViaCEP
    return this.http.get(url); // Realiza uma requisição GET para a URL do ViaCEP e retorna o resultado
  }
}