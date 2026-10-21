# Sistema visual e tokens — AGIJ FERT

## Cores

```css
--green-950: #07251d; /* fundo escuro e texto em botões claros */
--green-900: #0b3d2e; /* estrutura, títulos, header */
--green-700: #1d6849; /* hover e estados de ação */
--green-500: #3e8b5f; /* apoio */
--gold-500: #d7a83d; /* CTA principal e marcações */
--gold-300: #f0cf77; /* texto claro de suporte */
--earth-700: #8a4f2a; /* acento editorial e CTA secundário */
--cream-50: #f8f5ec; /* fundo principal */
--cream-100: #f0ecdf; /* fundo alternativo */
--ink-950: #17221c; /* texto principal */
--ink-700: #4b5d53; /* texto secundário */
--line: rgba(23,34,28,.18); /* divisórias */
```

Use verde para confiança estrutural, dourado para ação e terra para ênfase editorial. Não use dourado como texto de corpo sobre branco. Mantenha pares de contraste revisados com ferramenta WCAG antes da publicação.

## Tipografia

Sans: `DM Sans`, `Avenir Next`, `Segoe UI`, sans-serif. Display: `Source Serif 4`, Georgia, serif. Metadados: `DM Mono`, `SFMono-Regular`, Consolas, monospace. Como a demo importa fontes do Google para enriquecer o preview, a versão publicada pode optar por self-host ou fontes de sistema para evitar dependência externa.

Use `clamp(48px, 8vw, 114px)` para o H1 hero, `clamp(38px, 5.6vw, 76px)` para títulos de seção e 17–20px para textos de leitura. Body line-height fica por volta de 1,45; metadados usam 10–12px e tracking positivo.

## Espaçamento e grid

`--shell` limita o conteúdo a aproximadamente 1180px e preserva 32px de margem desktop ou 18px no mobile. Seções usam padding vertical entre 88px e 168px. O grid editorial desktop tem uma coluna de índice e um campo de conteúdo deslocado; a partir de 760px ele vira fluxo de uma coluna.

## Componentes e estados

- **Header:** logo, quatro links no máximo e CTA. No mobile, `aria-expanded`, menu visível e foco.
- **Hero:** fotografia local, overlay escuro, H1, lede, CTA, link secundário e crédito documental.
- **Service item:** número, título, descrição e indicador; hover desloca somente o padding.
- **Image frame:** proporção controlada, `alt`, label de local confirmado e aviso de não vínculo.
- **Button:** estado normal, hover, active, focus-visible e disabled a adicionar quando houver integração.
- **Modal:** foco inicial, `Escape`, clique no backdrop, `aria-modal`, validação, `role=alert` e sucesso.
- **Footer:** marca, contato provisório, crédito completo e aviso de substituição.

## Imagens

Originais e derivados devem ficar separados. Use `optimized/` no site, nomes sem acentos e `loading="lazy"` fora da primeira dobra. Nunca deixe uma URL externa temporária no HTML. A fonte, autor, licença e localização confirmada ficam em `CREDITOS-IMAGENS.md`.

## Movimento

Token-base: 180–260ms, ease-out, somente transform/opacity. Não usar parallax. Com `prefers-reduced-motion: reduce`, remova deslocamento e mantenha o conteúdo imediatamente visível.

## Adaptação de marca

Para uma marca diferente, troque a escala cromática, fontes e tratamento fotográfico, mas mantenha as regras de hierarquia, conteúdo, estados e acessibilidade. A identidade não é o grid em si; é a combinação de voz, proporção, contraste e escolha de evidência.
