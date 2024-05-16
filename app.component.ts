import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CepServiceService } from './cep-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formulário Angular';
  form: FormGroup;

  constructor(private cepsService: CepServiceService, private formBuilder: FormBuilder) {
    // Inicialização do formulário
    this.form = this.formBuilder.group({
      nomeCompleto: ['', Validators.required], // Campo para o nome completo
      dataNascimento: ['', Validators.required], // Campo para a data de nascimento
      cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)]], // Campo para o CPF
      email: ['', [Validators.required, Validators.email]], // Campo para o e-mail
      telefone: ['', Validators.required], // Campo para o telefone
      cep: ['', Validators.required], // Campo para o CEP
      logradouro: [{ value: '', disabled: true }], // Campo para o logradouro (rua)
      bairro: [{ value: '', disabled: true }], // Campo para o bairro
      cidade: [{ value: '', disabled: true }], // Campo para a cidade
      uf: [{ value: '', disabled: true }] // Campo para o UF (estado)
    });
  }

  // Função para consultar o CEP
  consultaCep(event: any) {
    const valor = (event.target as HTMLInputElement).value;
    if (valor) {
      // Chamada do serviço para buscar o CEP
      this.cepsService.buscar(valor).subscribe((dados: any) => {
        if (dados && !dados.erro) {
          // Popula o formulário com os dados do CEP
          this.populaForm(dados);
        } else {
          console.log('CEP não encontrado');
          // Lógica de tratamento de erro, se necessário
        }
      });
    }
  }

  // Função para popular o formulário com os dados do CEP
  populaForm(dados: any) {
    this.form.patchValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      uf: dados.uf
    });
  }

  // Função para submeter o formulário
  submitForm() {
    if (this.form.valid) {
      console.log('Formulário válido');
    } else {
      console.log('Formulário inválido');
    }
  }
}