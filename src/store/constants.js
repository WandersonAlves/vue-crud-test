const tipoOptions = [
  {
      text: 'Movimentação',
      value: 1
    },
    {
      text: 'Desligamento',
      value: 2
    },
    {
      text: 'Contratação',
      value: 3
    }
];
export const formOptions = {
  tipoFormularioOptions: tipoOptions,
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
      text: 'Recursos Humanos',
      value: 1
    },
    {
      text: 'Coodernador Eminente',
      value: 2
    },
    {
      text: 'Gerente',
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
    salario: '',
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

export const searchOptions = {
  tipoOptions: tipoOptions,
  statusOptions: [{
      text: 'Finalizada',
      value: 1
    },
    {
      text: 'Reprovada',
      value: 2
    },
    {
      text: 'Pendente de Aprovação',
      value: 2
    }
  ]
}
