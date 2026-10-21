# Checklist de qualidade — AGIJ FERT

## Testes realizados

- Pesquisa direta em fontes oficiais de design, acessibilidade, React, Motion e licenças Creative Commons.
- Verificação da autoria, localização e licença de quatro imagens brasileiras; cópias locais baixadas e convertidas para WebP.
- Registro da logo fornecida pelo cliente e upload da cópia otimizada para o metadado do projeto.
- Diagnósticos de JavaScript, CSS e JSON registrados no WebDev antes da implementação.
- `npm install` concluído sem vulnerabilidades reportadas e `npm run build` concluído com sucesso.
- Preview iniciado em `0.0.0.0:3000`.
- `GET /` retornou 200, `GET /manus-routes.json` retornou JSON válido e os ativos PNG/WebP retornaram 200 com content-type correto.
- Capturas desktop 1280×900 e mobile 390×844 realizadas; recortes, hierarquia, CTA e rodapé revisados.
- Modal aberto pelo botão principal; foco inicial observado no primeiro campo; `Escape` e botão de fechar estão implementados no código.
- Envio vazio mostrou mensagem de validação; envio preenchido mostrou estado de sucesso demonstrativo.
- Console do navegador confirmou um único `h1`, ausência de overflow horizontal em 1280px e carregamento completo dos assets após rolagem.
- A preferência `prefers-reduced-motion` está implementada em CSS, mas a execução com a preferência ativada ainda precisa ser repetida em um navegador configurado para isso.

## Verificações pendentes

- Captura e interação direta do menu mobile em 390px.
- Contraste real com ferramenta automatizada; a documentação WCAG é critério, não prova de teste executado.
- Teste de `prefers-reduced-motion` com a preferência do sistema efetivamente ativa.
- Verificação de todos os caminhos em um domínio GitHub Pages real e subpasta real.
- Confirmação do cliente sobre licenças e atribuições antes da publicação comercial.
- Substituição de todos os textos, serviços, contatos e região marcados como provisórios.

## Critérios de aceitação

A entrega só deve ser considerada pronta para publicação depois de substituir todos os marcadores provisórios, confirmar contatos e serviços, revisar os créditos visíveis e obter aprovação da AGIJ FERT para as fotografias e textos.
