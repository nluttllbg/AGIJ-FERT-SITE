# Checklist de qualidade — AGIJ FERT

## Testes realizados

- Pesquisa direta em fontes oficiais de design, acessibilidade, React, Motion e licenças Creative Commons.
- Verificação da autoria, localização e licença de quatro imagens brasileiras; cópias locais baixadas e convertidas para WebP.
- Registro da logo fornecida pelo cliente e upload da cópia otimizada para o metadado do projeto.
- Diagnósticos de JavaScript, CSS e JSON registrados no WebDev antes da implementação.
- `npm install` concluído sem vulnerabilidades reportadas e `npm run build` concluído com sucesso após o refinamento.
- Preview reiniciado com as variáveis sincronizadas em `0.0.0.0:3000`.
- `GET /` retornou 200, `GET /manus-routes.json` retornou JSON válido e os ativos PNG/WebP retornaram 200 com content-type correto.
- Capturas desktop 1280×900 e mobile 390×844 realizadas; a versão nova foi comparada com a anterior.
- Revisão visual confirmou menos bordas e divisórias, ausência de diagramas decorativos, uso pontual de vidro no header/CTA/menu e fotografias sem molduras fortes.
- Quatro links de WhatsApp foram verificados no DOM com o número `5566996512455` e a mensagem codificada solicitada.
- Console do navegador confirmou um único `h1`, ausência de overflow horizontal em 1280px e caminhos estáticos compatíveis com subpastas.
- `prefers-reduced-motion` permanece implementado em CSS; hover, transições e scroll suave são reduzidos quando a preferência está ativa.

## Verificações pendentes

- Teste manual do menu mobile em viewport interativo real, além da captura mobile e da verificação do estado React.
- Contraste real com ferramenta automatizada; a documentação WCAG é critério, não prova de teste executado.
- Teste de `prefers-reduced-motion` com a preferência do sistema efetivamente ativa.
- Verificação de todos os caminhos em um domínio GitHub Pages real e subpasta real.
- Confirmação do cliente sobre licenças e atribuições antes da publicação comercial.
- Substituição de todos os textos, serviços, região, e-mail e frase institucional marcados como provisórios.

## Critérios de aceitação

A entrega só deve ser considerada pronta para publicação depois de substituir todos os marcadores provisórios, confirmar contatos e serviços, revisar os créditos visíveis e obter aprovação da AGIJ FERT para as fotografias e textos.
