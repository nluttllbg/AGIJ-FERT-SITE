# TODO — AGIJ FERT

## 1. Direção, conteúdo e pesquisa

- [ ] Confirmar serviços exatos, região de atendimento, contatos, público prioritário, diferenciais reais e chamada principal.
- [x] Atualizar o plano visual para a AGIJ FERT e preservar a logo fornecida pelo cliente.
- [x] Pesquisar fontes reais e verificar localização, autoria e licença de quatro ativos brasileiros.
- [x] Baixar cópias locais e gerar versões WebP/PNG otimizadas.
- [x] Registrar fontes, autores, licenças, localização, alterações e limitações em `CREDITOS-IMAGENS.md`.
- [x] Entregar resumo executivo, catálogo de referências, guia prático de web design, guia de Motion, sistema de tokens e `DIRETRIZES-DE-DESIGN.md`.

## 2. Landing page da AGIJ FERT

- [x] A página usa a logo oficial fornecida, sem redesenhar ou alterar suas proporções.
- [x] A primeira dobra usa uma fotografia real brasileira baixada localmente, com tratamento responsivo e crédito visível.
- [x] As imagens priorizam lavouras, soja, leitura territorial e contexto agrícola; máquinas não são o foco principal.
- [x] Cada imagem tem texto alternativo pertinente e avisos de que não representa a AGIJ FERT, seus clientes ou sua equipe.
- [x] A página identifica o conteúdo institucional como provisório e não inventa clientes, depoimentos, prêmios, resultados, equipe, propriedades ou certificações.
- [x] A página contém header, hero, explicação institucional provisória, bloco de atuação, evidência visual, CTA e footer responsivos.
- [x] A página inclui hover, foco visível, menu mobile no código, modal demonstrativo, validação, sucesso e falha simulável.
- [x] A página respeita `prefers-reduced-motion`, evita overflow horizontal no viewport testado e preserva foco inicial no modal.
- [x] A página declara a rota `/` em `public/manus-routes.json` e usa `base: './'` no build para subpastas.
- [x] Refinar a direção para Liquid Glass contido: header e menu translúcidos, CTA final com profundidade sutil, menos bordas/divisórias e nenhuma decoração em diagrama.
- [x] Manter o botão principal, header, CTA final e contato do rodapé ligados ao WhatsApp `(66) 99651-2455` com a mensagem fornecida.

## 3. Revisão e entrega

- [x] Configurar diagnósticos do projeto antes da primeira implementação.
- [x] Rodar build e checagens disponíveis; corrigir o erro de chave duplicada encontrado no primeiro manifesto.
- [x] Capturar desktop e mobile e revisar recortes, carregamento, contraste visual e legibilidade das fotografias.
- [x] Verificar links de WhatsApp, carregamento lazy das imagens, âncoras, ausência de overflow e caminhos estáticos.
- [x] Registrar testes realizados, problemas corrigidos e verificações pendentes em `docs/checklist-qualidade.md`.
- [ ] Testar menu mobile diretamente em viewport interativo, ativar `prefers-reduced-motion` no navegador e validar contraste com ferramenta automatizada.
- [ ] Salvar checkpoint com os arquivos intencionais no repositório canônico; não publicar sem autorização explícita.
