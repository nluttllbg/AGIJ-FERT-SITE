# DIRETRIZES DE DESIGN

## Regra central

Construa a página a partir da decisão que o visitante precisa tomar. Primeiro defina o público, a ação principal e a evidência que reduz a dúvida. Depois escolha composição, tipografia, cor e movimento. Não comece por efeitos.

## Critérios de aceitação

- Existe uma frase de valor específica na primeira dobra.
- Há um único `h1` e a sequência de `h2`/`h3` representa a estrutura do conteúdo.
- O CTA descreve o próximo passo e aparece no momento em que a pessoa tem contexto para agir.
- O layout continua compreensível sem animação, hover ou imagem.
- As imagens são reais, têm origem e licença documentadas, texto alternativo pertinente e não atribuem pertencimento que a fonte não confirmou.
- O desktop usa uma lógica de composição e o mobile reflowa com prioridade própria; não é apenas uma redução proporcional.
- Hover, foco, erro, sucesso, vazio e carregamento têm estados intencionais.
- Texto comum busca pelo menos 4,5:1 de contraste; texto grande busca pelo menos 3:1.
- `prefers-reduced-motion` remove transform, parallax e autoplay não essenciais.
- Não há overflow horizontal, links quebrados, console error ou caminho absoluto incompatível com subpastas.

## Sistema mínimo

Defina tokens para cor, tipografia, espaçamento, grid, raio, borda, sombra e movimento. Use 2–3 superfícies, uma cor de ação e uma cor de estado. Não arredonde todo componente. Não transforme toda seção em card.

Use uma família tipográfica para leitura e uma segunda somente quando ela criar função clara, como distinguir uma chamada editorial de uma interface. Use `clamp()` para escalas responsivas, largura máxima para parágrafos e `line-height` de leitura.

Crie componentes por comportamento: header, botão, campo, modal, cartão de evidência, figura com crédito e seção. Componentes não devem carregar textos e promessas não confirmados como se fossem dados reais.

## Imagens reais

Prefira arquivo local otimizado. Verifique página original, autor, licença, localização e restrições. Não use resultados de busca como licença. Não use foto com marca-d’água. Não compre sem autorização. Se não houver foto adequada, declare a limitação e mude a direção visual; não substitua silenciosamente por imagem estrangeira ou gerada.

## Movimento

Use movimento para orientar, comunicar estado e conectar uma mudança. Um efeito deve ter alternativa estática. Em Motion para React, prefira `motion/react`, variants para coordenação, `AnimatePresence` para entrada/saída e `useReducedMotion` ou `MotionConfig reducedMotion="user"` para acessibilidade.

## Revisão final

Teste em celular, tablet e desktop. Faça uma navegação somente por teclado. Abra e feche menu e modal. Ative redução de movimento. Confirme `alt`, links, labels, `aria-live`, `aria-expanded`, foco e contrastes. Compare a implementação com a direção de arte: se um efeito chama mais atenção que a mensagem, remova o efeito.

## Nota para conteúdo provisório

Durante prototipagem, marque qualquer lacuna com `[PROVISÓRIO — substituir]`. Antes de publicação, substitua ou remova todos os marcadores e peça confirmação do responsável pelo negócio.
