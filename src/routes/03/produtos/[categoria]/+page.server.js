import { produtos } from '$lib/server/03/produtos.js';

export function load({ params, url }) {
  const categoria = params.categoria.toLowerCase();
  const busca = url.searchParams.get('busca')?.toLowerCase() ?? '';

  const filtrados = produtos.filter(p =>
    p.categorias.map(c => c.toLowerCase()).includes(categoria) &&
    (
      p.titulo.toLowerCase().includes(busca) ||
      p.descricao.toLowerCase().includes(busca)
    )
  );

  return { produtos: filtrados, categoria, busca };
}