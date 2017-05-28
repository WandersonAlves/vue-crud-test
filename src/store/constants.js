export const formOptions = {
  tipoFormularioOptions: [{
      text: 'Opção 1',
      value: 1
    },
    {
      text: 'Opção 2',
      value: 2
    }
  ],
  unidadeOptions: [{
      text: 'Recife',
      value: 1
    },
    {
      text: 'Lisboa',
      value: 2
    },
    {
      text: 'Londres',
      value: 3
    }
  ],
  setorOptions: [{
      text: 'Automação',
      value: 1
    },
    {
      text: 'Testes',
      value: 2
    },
    {
      text: 'Desenvolvimento',
      value: 3
    }
  ],
  coordenacaoOptions: [{
      text: 'Value 1',
      value: 1
    },
    {
      text: 'Value 2',
      value: 2
    },
    {
      text: 'Value 3',
      value: 3
    }
  ],
  cargoOptions: [{
      text: 'Junior',
      value: 1
    },
    {
      text: 'Pleno',
      value: 2
    },
    {
      text: 'Senior',
      value: 3
    },
    {
      text: 'Executivo',
      value: 4
    }
  ],
  gerenciaOptions: [{
      text: 'Global',
      value: 1
    },
    {
      text: 'Local',
      value: 2
    }
  ],
  motivoSubstituicaoOptions: [{
      text: 'Ausencia',
      value: 1
    },
    {
      text: 'Demissão',
      value: 2
    }
  ],
  regimeTrabalhoOptions: [{
      text: 'Estágio',
      value: 1
    },
    {
      text: 'CLT',
      value: 2
    }
  ],
  cargaHorariaOptions: [{
      text: '8hrs',
      value: 1
    },
    {
      text: '6hrs',
      value: 2
    }
  ]
};
export const dataModels = {
  tipoFormularioModel: {
    tipoFormulario: null,
    dataMovimentacao: null
  },
  contratacaoFormularioModel: {
    dataAdmissao: null,
    nome: null,
    unidade: null,
    salario: null,
    setor: null,
    cargo: null,
    coordenacao: null,
    gerencia: null
  },
  contratacaoTwoModel: {
    aumentoQuadro: null,
    motivoSubstituicao: null,
    regimeTrabalho: null,
    cargaHoraria: null,
    requisitos: null
  },
  justificativaModel: {
    justificativa: null
  },
  movimentacaoModel: {
    pessoa: null
  }
};
