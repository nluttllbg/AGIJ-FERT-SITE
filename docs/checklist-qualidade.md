# Checklist de qualidade — AGIJ FERT

## Testes realizados

- Pesquisa direta em fontes oficiais de design, acessibilidade, React, Motion e licenças Creative Commons.
- Verificação da autoria, localização e licença de quatro imagens brasileiras; cópias locais baixadas e convertidas para WebP.
- Diagnósticos de JavaScript, CSS e JSON registrados no WebDev antes da implementação.
- `npm install` concluído sem vulnerabilidades reportadas e `npm run build` concluído com sucesso.
- Imagem hero com `fetchPriority="high"`, dimensões definidas e sem lazy loading; imagens de apoio com WebP responsivo, `srcset`, `sizes`, dimensões definidas e lazy loading.
- Referências de ativos antigos e imagem não utilizada auditadas; nenhum segredo ou token encontrado no código público.
- Preview respondeu 200; manifesto de rotas retornou JSON válido; variantes WebP retornaram 200 com content-type correto.
- Capturas desktop 1280×900 e mobile 390×844 realizadas depois da otimização.
- Console do navegador confirmou fonte DM Sans, um único `h1`, `loading="auto"` no hero, `loading="lazy"` nas imagens de apoio e ausência de overflow horizontal.
- Quatro links de WhatsApp foram verificados com o número `5566996512455` e a mensagem exata em texto decodificado.
- O repositório GitHub exato foi localizado e lido: `nluttllbg/AGIJ-FERT-SITE`, público e vazio.

## Verificações pendentes

- Lighthouse não executado porque o comando não está instalado no ambiente; nenhuma pontuação foi declarada.
- Contraste real com ferramenta automatizada.
- Teste manual do menu mobile em viewport interativo real.
- Teste de `prefers-reduced-motion` com a preferência do sistema efetivamente ativa.
- Envio para GitHub, criação do workflow, ajuste do `base` para `/AGIJ-FERT-SITE/` e publicação no Pages concluídos após confirmação explícita.
- Confirmação do cliente sobre licenças e atribuições antes da publicação comercial.
- Substituição de todos os textos, serviços, região, e-mail e frase institucional marcados como provisórios.

## Critérios de aceitação

A publicação técnica está concluída, mas a página ainda contém marcadores provisórios. Antes de comunicação comercial, substituir todos os textos provisórios, confirmar contatos e serviços, revisar os créditos visíveis e obter aprovação da AGIJ FERT para fotografias e textos.
