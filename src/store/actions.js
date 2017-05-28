export const addMovimentacao = function (store, item) {
  var dispatch = store.dispatch;
  store.commit('ADD_MOVIMENTACOES', item);
}
