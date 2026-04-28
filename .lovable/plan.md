Plano:

1. Remover apenas a seção abaixo da Cela Braille Interativa intitulada “Os 64 sinais do Sistema Braille”.
2. Manter intacta a Cela Braille Interativa e toda a estrutura atual de navegação, foco, títulos, leitores de tela e acessibilidade.
3. Limpar o import de `ALL_SIGNS` em `src/pages/CelaPage.tsx`, já que ele deixará de ser usado.

Detalhes técnicos:

- Alteração limitada ao arquivo `src/pages/CelaPage.tsx`.
- Nenhuma mudança em `BrailleCell`, rotas, capítulos, navegação, leitores de tela, estilos globais ou estrutura geral do site.
- A página continuará exibindo o título, o texto introdutório e a cela interativa.