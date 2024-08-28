# learning_reactjs_ignite_feed

## Fundamentos do React

O React é uma biblioteca para construção de interfaces altamente interativas (Tudo que o usuário interage). React hoje é usado para construção de interfaces Web, Mobile, VR, TV, entre outros.

React é uma biblioteca, não um framework!

## O que muda, quando estamos utilizando React?

No princpio do web development, na Web 1.0, as páginas eram estáticas, não existia conteúdo dinâmico. Na Web 2.0, começamos a ter acesso a conteúdos dinâmicos, bancos de dados.

Rendering Patterns (SPA x SSR)

SSR = Server Side Rendering (Wordpress, Ruby & Rails, Magento) (Grande Maioria)

Quando o browser requisita uma página, a página é recebida pelo servidor (contem front e back), o Back-end interpreta, cria todo o HTML, buscando no banco de dados, e devolve toda a página pronta, pro navegador carregar.

SPA = Single Page Application (AngularJs, Vue, React, Svelt, Aurelia)

Introduzido pelo AngularJs.

O Back-end não tem mais dentro dele as informações para construção do HTML, CSS, JS etc... (Não fica mais responsável pela construção da tela, apenas retornar os dados precisos do banco de dados)

Esses dados são retornados no modelo JSON (Java Script Object Notation) => Usado para trafegar dados de uma maneira universal, e é uma línguagem universal (De maneira Geral)

ANTES: BACKEND & FRONTEND (TUDO JUNTO) // AGORA: BACKEND + FRONTEND (recebe o backend, e converte em html, css e js)

Com isso, é possível ter vários front-ends, consumindo a mesma api, em JSON

Ganhos de perfomance, manutenção etc...
