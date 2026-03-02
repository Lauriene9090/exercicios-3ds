export function validarPedido(pedido: any): boolean {

  if (!pedido.cliente) {
    return false
  }

  if (pedido.total <= 0) {
    return false
  }

  if (!pedido.itens || pedido.itens.length === 0) {
    return false
  }

  return true
}