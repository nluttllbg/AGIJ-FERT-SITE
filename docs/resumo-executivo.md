# Resumo executivo — AGIJ FERT

A direção escolhida para a AGIJ FERT parte de uma regra simples: a fotografia e a informação técnica devem trabalhar juntas. O layout evita tratar o agro como cenário decorativo e usa imagens documentais brasileiras com localização e licença registradas em `CREDITOS-IMAGENS.md`. O hero usa uma lavoura de soja em Brasnorte, Mato Grosso; as demais imagens mostram Rondonópolis, Primavera do Leste e a região de São Simão, sem sugerir vínculo com a empresa.

A pesquisa de referências mostrou que interfaces fortes têm uma tese clara na primeira dobra, uma tipografia que organiza o ritmo, componentes que repetem regras sem parecerem idênticos e CTAs que aparecem no momento certo. Linear e Stripe demonstram como uma demo concreta comunica produto; GOV.UK mostra o valor de hierarquia e tarefa; Pentagram, MUBI e Apple mostram como alternar respiro editorial e concentração; Airbnb e Patagonia mostram como contexto, metadados e prova ajudam decisões. Essas referências foram usadas como princípios, não como modelos visuais.

No código, a página usa React + Vite estático, tokens CSS, componentes pequenos, imagens WebP locais, `loading="lazy"`, `decoding="async"`, `fetchPriority="high"` apenas no hero e `BASE_URL` para funcionar em subpastas. O formulário é explicitamente demonstrativo: validação, sucesso e erro são locais e não enviam dados.

A principal pendência é de conteúdo institucional. Como o cliente ainda não forneceu serviços, região, contatos, diferenciais ou frase aprovada, esses pontos aparecem marcados como `[PROVISÓRIO — substituir]`. Isso é intencional e deve ser resolvido antes de publicação.

## Fontes de implementação

A documentação de imagens responsivas do web.dev recomenda combinar `srcset` e `sizes` quando há várias resoluções, permitindo ao navegador escolher o recurso mais eficiente; o site já usa WebP local e dimensões controladas, e a próxima melhoria pode adicionar variantes de largura se o acervo crescer. [1]

O MDN descreve CSS Grid como apropriado para dividir regiões e relações de tamanho, posição e sobreposição; a página usa Grid para o eixo editorial desktop e media queries para transformar a composição em sequência mobile. [2]

O WCAG 2.2 indica contraste mínimo de 4,5:1 para texto comum e 3:1 para texto grande, sem usar matiz como substituto de contraste de luminância. O layout mantém corpo claro em verde escuro e texto escuro em fundo creme; a verificação final ainda deve ser feita com ferramenta automatizada. [3]

A documentação atual do Motion para React usa `motion` a partir de `motion/react`, `variants`, `AnimatePresence` e `useReducedMotion`; a implementação desta landing usa CSS nativo para evitar dependência desnecessária, enquanto o guia técnico mostra como aplicar Motion quando o projeto realmente precisar. [4] [5]

## References

[1]: https://web.dev/learn/images/responsive-images "Responsive images — web.dev"
[2]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout "CSS grid layout — MDN Web Docs"
[3]: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html "Understanding Success Criterion 1.4.3 — W3C WAI"
[4]: https://motion.dev/docs/react-animation "React animation — Motion"
[5]: https://motion.dev/docs/react-accessibility "Accessibility — Motion"
