# Plano de envio e publicação — AGIJ FERT

## Destino identificado

A conta GitHub autenticada é `nluttllbg`. O repositório com correspondência exata ao identificador informado é [`nluttllbg/AGIJ-FERT-SITE`](https://github.com/nluttllbg/AGIJ-FERT-SITE). Ele é público, está vazio, não possui README, não possui branch padrão configurada e não apresenta workflow ou configuração de GitHub Pages para preservar.

Há outros repositórios acessíveis com nomes semelhantes (`Agij`, `AGIJ-` e `AGIJ-FERT-teste`), mas não são o nome exato informado e não serão usados sem nova instrução.

## Proposta ainda não executada

Após confirmação explícita, enviar o código-fonte atual para `nluttllbg/AGIJ-FERT-SITE` na branch `main`, usando um commit claro. Como o repositório está vazio, não há conteúdo pré-existente a substituir, mas o envio ainda será feito sem force push.

A publicação proposta é GitHub Pages via GitHub Actions: instalar dependências com `npm ci`, executar `npm run build`, publicar `dist/` com as actions oficiais de Pages e ajustar o `base` do Vite para o caminho real `/AGIJ-FERT-SITE/`. O `base: './'` atual mantém o preview e os assets relativos estáveis; para Pages, o ajuste para a subpasta real será aplicado somente após aprovação.

O workflow não será criado, nenhuma configuração do repositório será alterada, nenhum branch será criado e nenhum push será feito antes da confirmação do responsável.

## Alterações locais preparadas

As fotografias usadas foram redimensionadas para os tamanhos de uso, convertidas para WebP em variantes `600/800/900/1600`, receberam `srcset`, `sizes`, dimensões intrínsecas e carregamento lazy fora da primeira dobra. A foto principal usa `fetchPriority="high"` e não usa lazy loading. A foto não utilizada foi removida da saída pública; os originais preservados estão em `docs/source-images/`, fora do build estático.

A tipografia foi unificada para uma família DM Sans com os pesos necessários, e o carregamento remoto foi movido para um stylesheet não bloqueante com fallback. Não há secrets ou tokens no código; `node_modules/` e `dist/` ficam fora do versionamento.

## Confirmação necessária

Confirmar exatamente: enviar para `nluttllbg/AGIJ-FERT-SITE`, branch `main`, criar workflow de GitHub Pages, ajustar base para `/AGIJ-FERT-SITE/` e tornar o site publicamente acessível. Sem essa confirmação, o projeto permanece apenas no ambiente atual.
