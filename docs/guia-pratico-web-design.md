# Guia prático de web design — AGIJ FERT

## Hierarquia e composição

Comece cada seção com uma pergunta. A primeira dobra responde “o que a empresa ajuda a entender?”; a seção seguinte responde “por que isso importa?”; o bloco de método responde “como acontece?”; o bloco de campo responde “que tipo de contexto visual sustenta a conversa?”; o CTA responde “qual é o próximo passo?”. Se uma seção não responde a uma pergunta, remova-a ou transforme-a em prova.

Na implementação, use um único `h1`, títulos de seção em `h2` e cartões em `h3`. Faça a ação principal aparecer em até dois lugares de alta intenção. Não dependa de texto sobre fotografia sem um fundo controlado: aplique uma camada escura, limite a largura do texto e revise em 390px.

## Tipografia

Use uma família sans para interface e uma serif apenas para ênfase. O `h1` usa `clamp()` com largura limitada, não tamanho fixo; o corpo da leitura permanece entre 17–20px com line-height por volta de 1,45. Os créditos e índices usam uma família monoespaçada em 10–12px para criar uma camada editorial auxiliar.

Não use peso, caixa alta e cor ao mesmo tempo para tudo. Reserve caixa alta e tracking para metadados. O título precisa continuar compreensível se a cor for removida.

## Grid, ritmo e espaço

No desktop, a página usa um shell de aproximadamente 1180px, uma coluna de índice e um campo principal deslocado. No mobile, o índice deixa de ser uma coluna e passa a ser um marcador de sequência acima do conteúdo. Isso evita uma versão comprimida do desktop e mantém o ritmo editorial.

Use linhas e divisores para separar decisões, não bordas arredondadas em todos os elementos. Uma seção pode ter muito espaço negativo, mas deve entregar uma informação nova ao final do bloco. `gap` e padding devem sair de tokens, não de valores improvisados.

## Cor e contraste

A logo orienta o sistema: verde profundo para estrutura, dourado para ação e terra para acento editorial. O dourado nunca deve ser usado sozinho para texto pequeno em fundo claro; em botões, use texto verde escuro. Para texto comum, busque pelo menos 4,5:1; para texto grande, pelo menos 3:1. [1]

Não use a fotografia como única fonte de cor da marca. Superfícies, bordas e botões continuam previsíveis quando a imagem falha ou quando a pessoa prefere uma apresentação reduzida.

## Fotografias e direção de arte

Escolha primeiro o papel da fotografia: hero precisa de área limpa para texto; imagem de detalhe deve sustentar uma ideia; aérea deve comunicar escala. Use o `alt` para descrever o que aparece, não para atribuir localização ou pertencimento que a fonte não confirmou. Mantenha crédito curto próximo à figura e registro completo no arquivo de créditos.

A pesquisa demonstrou que uma galeria de referências pode inspirar composição, mas não prova licença, acessibilidade ou desempenho. A AGIJ FERT usa apenas arquivos locais documentados; não carrega imagens de terceiros diretamente no site.

## Conteúdo, navegação e CTA

A navegação contém poucos destinos: atuação, método, campo e conversa. Cada item tem destino textual. O mobile abre um menu com `aria-expanded`, `aria-controls` e foco visível. O CTA explica o resultado esperado, “Solicitar conversa técnica”, em vez de usar “Saiba mais”.

Textos institucionais pendentes aparecem marcados. Remova os marcadores somente após confirmar serviço, região, contato e afirmações técnicas com o cliente.

## Estados

Todo formulário deve tratar estado inicial, foco, vazio, erro, sucesso e falha de rede. Nesta demonstração, o checkbox “Simular estado de erro” deixa o comportamento visível sem enviar dados. Em produção, troque por uma integração autorizada e mantenha mensagens de erro orientadas à ação.

## Responsividade e desempenho

Use `picture`, `srcset` e `sizes` quando houver mais de uma variante de uma mesma fotografia. O web.dev descreve `srcset`/`sizes` como sintaxe descritiva que deixa o navegador escolher uma fonte eficiente e `<picture>` como opção prescritiva quando o recorte ou formato precisa ser controlado. [2]

No hero, carregue uma imagem local otimizada e não repita o mesmo arquivo em outras seções. Nas demais imagens, use lazy loading. Controle a proporção com `aspect-ratio` ou altura por breakpoint. Teste 360×800, 390×844, 768×1024 e 1280×900.

## Critério de aceitação

Uma seção está pronta quando a pessoa entende sua função sem animação, a ordem de tabulação é lógica, o foco é visível, não há overflow horizontal, o texto não depende da foto para ter contraste e o CTA ainda faz sentido quando os dados provisórios são substituídos.

## References

[1]: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html "Understanding Contrast (Minimum) — W3C WAI"
[2]: https://web.dev/learn/images/responsive-images "Responsive images — web.dev"
