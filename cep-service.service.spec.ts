import { TestBed } from '@angular/core/testing'; // Importação do módulo de teste do Angular

import { CepServiceService } from './cep-service.service'; // Importação do serviço a ser testado

describe('CepServiceService', () => { // Descrição do conjunto de testes para o serviço CepServiceService
  let service: CepServiceService; // Declaração da variável que irá conter o serviço

  beforeEach(() => {
    TestBed.configureTestingModule({}); // Configuração do TestBed antes de cada teste
    service = TestBed.inject(CepServiceService); // Injeção do serviço a ser testado
  });

  it('should be created', () => { // Teste para verificar se o serviço foi criado corretamente
    expect(service).toBeTruthy(); // Verifica se o serviço foi criado com sucesso
  });
});