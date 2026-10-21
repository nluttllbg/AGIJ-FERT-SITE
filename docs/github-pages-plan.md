# Plano de envio e publicação — AGIJ FERT

## Destino identificado

A conta GitHub autenticada é `nluttllbg`. O repositório com correspondência exata ao identificador informado é [`nluttllbg/AGIJ-FERT-SITE`](https://github.com/nluttllbg/AGIJ-FERT-SITE). Ele é público, está vazio, não possui README, não possui branch padrão configurada e não apresenta workflow ou configuração de GitHub Pages para preservar.

Há outros repositórios acessíveis com nomes semelhantes (`Agij`, `AGIJ-` e `AGIJ-FERT-teste`), mas não são o nome exato informado e não serão usados sem nova instrução.

## Execução realizada

Após confirmação explícita, o código-fonte foi enviado para `nluttllbg/AGIJ-FERT-SITE` na branch `main`, sem force push. O commit de publicação é `bfcfa8c59715983d6acf6ddc63f0c301371c36eb`.

A publicação foi concluída via GitHub Actions: instalar dependências com `npm ci`, executar `npm run build`, publicar `dist/` com as actions oficiais de Pages e usar o `base` condicional `/AGIJ-FERT-SITE/` no build do GitHub Actions. O workflow `Deploy AGIJ FERT to GitHub Pages` terminou com sucesso na execução `39670221600`.

O workflow foi criado na branch `main`. Nenhum domínio personalizado foi criado. O site publicado está em [https://nluttllbg.github.io/AGIJ-FERT-SITE/](https://nluttllbg.github.io/AGIJ-FERT-SITE/).

## Alterações locais preparadas

As fotografias usadas foram redimensionadas para os tamanhos de uso, convertidas para WebP em variantes `600/800/900/1600`, receberam `srcset`, `sizes`, dimensões intrínsecas e carregamento lazy fora da primeira dobra. A foto principal usa `fetchPriority="high"` e não usa lazy loading. A foto não utilizada foi removida da saída pública; os originais preservados estão em `docs/source-images/`, fora do build estático.

A tipografia foi unificada para uma família DM Sans com os pesos necessários, e o carregamento remoto foi movido para um stylesheet não bloqueante com fallback. Não há secrets ou tokens no código; `node_modules/` e `dist/` ficam fora do versionamento.

## Estado final

Destino confirmado: `nluttllbg/AGIJ-FERT-SITE`, branch `main`, workflow de GitHub Pages ativo e site publicamente acessível. A configuração legada do Pages permanece registrada pela API, mas o workflow de Actions realizou o deploy e a URL pública foi verificada.
