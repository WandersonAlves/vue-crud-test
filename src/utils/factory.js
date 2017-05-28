import _ from 'lodash';

export const Factory = {
  checkIfValid(commitObject, validInputs) {
    let abort = false;

    validInputs.tipoFormulario = commitObject.tipoFormularioModel.tipoFormulario ? true : false;
    validInputs.dataMovimentacao = commitObject.tipoFormularioModel.dataMovimentacao ? true : false;
    validInputs.dataAdmissao = commitObject.contratacaoFormularioModel.dataAdmissao ? true : false;
    validInputs.unidade = commitObject.contratacaoFormularioModel.unidade ? true : false;
    validInputs.salario = commitObject.contratacaoFormularioModel.salario ? true : false;
    validInputs.coordenacao = commitObject.contratacaoFormularioModel.coordenacao ? true : false;
    validInputs.setor = commitObject.contratacaoFormularioModel.setor ? true : false;
    validInputs.cargo = commitObject.contratacaoFormularioModel.cargo ? true : false;
    validInputs.gerencia = commitObject.contratacaoFormularioModel.gerencia ? true : false;
    validInputs.motivoSubstituicao = commitObject.contratacaoTwoModel.motivoSubstituicao ? true : false;
    validInputs.regimeTrabalho = commitObject.contratacaoTwoModel.regimeTrabalho ? true : false;
    validInputs.cargaHoraria = commitObject.contratacaoTwoModel.cargaHoraria ? true : false;
    validInputs.requisitos = commitObject.contratacaoTwoModel.requisitos ? true : false;
    validInputs.justificativa = commitObject.justificativaModel.justificativa ? true : false;

    _.mapValues(validInputs, (value) => {
      if (!value) {
        abort = true;
      }
    });
    return [validInputs, abort];
  }
}
