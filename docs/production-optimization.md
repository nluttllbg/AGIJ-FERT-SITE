# Otimização de produção — resultados reais

## Alterações executadas

A imagem hero passou a usar variantes WebP de 800px e 1600px via `srcset` e `sizes`, com `width`/`height` definidos, `fetchPriority="high"`, `decoding="async"` e sem `loading="lazy"`. As fotografias de apoio usam variantes WebP de 600px e 900px, `loading="lazy"`, `decoding="async"`, `srcset`, `sizes` e dimensões intrínsecas. As variantes antigas maiores e a imagem não utilizada foram removidas da pasta pública.

A tipografia foi reduzida a DM Sans nos pesos 400, 500, 600 e 700. O stylesheet remoto agora é carregado de forma não bloqueante com `preconnect`, `media="print"` e fallback via `noscript`. O CSS continua legível no código-fonte e o Vite minifica CSS/JS no build.

As superfícies com blur ficaram restritas ao header, menu mobile, modal preservado no código e CTA final. Não foram adicionadas bibliotecas de animação ou dependências novas. A redução de movimento continua coberta por `prefers-reduced-motion`.

## Resultados verificados

`npm run build` concluiu com sucesso. A saída reportou `dist/index.html` de 1,07 kB, CSS minificado de 13,10 kB (3,68 kB gzip) e JavaScript minificado de 233,21 kB (72,82 kB gzip). O preview respondeu 200, o manifesto de rotas retornou JSON válido e todas as variantes WebP referenciadas retornaram 200 com `image/webp`.

No navegador, foi confirmado um único `h1`, fonte DM Sans disponível, imagem hero com `loading="auto"`, imagens de apoio com `loading="lazy"`, ausência de overflow horizontal e quatro links de WhatsApp contendo o número `5566996512455` e a mensagem solicitada em texto decodificado. Foram capturadas revisões em 1280×900 e 390×844.

Lighthouse não estava instalado no ambiente, portanto nenhuma pontuação foi inventada. Ainda estão pendentes um teste Lighthouse real, a validação de contraste com ferramenta automatizada e o teste manual do menu mobile em viewport interativo real.
