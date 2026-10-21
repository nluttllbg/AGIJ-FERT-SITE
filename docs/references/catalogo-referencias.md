# Catálogo comparativo de referências para landing page

## Escopo e leitura do material

Este relatório sintetiza **somente os resultados JSON fornecidos**. As observações, medições, inferências e limitações abaixo pertencem às sessões de inspeção descritas no catálogo; **não foram realizadas novas aberturas, cliques ou validações** para complementar o material. Portanto, números, preços, contagens, disponibilidade, conteúdo editorial e campanhas devem ser tratados como evidência datada/dinâmica, não como especificação permanente.

As referências são úteis como repertório de **princípios transferíveis**, não como modelos para reprodução literal. Logo, nomes, textos, fontes proprietárias, logos, fotografias, vídeos, screenshots, ícones, campanhas, preços, métricas, depoimentos, categorias e composições reconhecíveis devem ser substituídos por conteúdo, identidade e ativos próprios.

## Sumário executivo

- **O padrão mais consistente é uma primeira dobra orientada a decisão:** promessa curta, hierarquia tipográfica forte, CTA claro e algum tipo de prova — interface de produto, imagem, catálogo, métrica, case ou busca.
- **A página funciona melhor como sistema narrativo modular** do que como um único cartaz: tese inicial, capacidades/benefícios, demonstração ou prova, exploração/segmentação, confiança, conversão e suporte.
- **Progressive disclosure aparece em diferentes escalas:** mega menu e subnav em Stripe/Notion, filtros e arquivo em Pentagram/GOV.UK, busca contextual em Airbnb, catálogo em Patagonia/Apple e divisão entre aquisição, filmes e publicação em MUBI.
- **A cor é geralmente funcional ou editorial, não um preenchimento indiscriminado:** chrome neutro deixa a mídia falar; cor de ação conduz conversão; cor semântica diferencia estados, categorias ou capítulos.
- **Mídia e movimento são fortes evidências, mas também pontos de risco.** Várias referências dependem de vídeo, canvas, carrossel, WebGL, autoplay, lazy loading ou APIs. A alternativa recomendada é sempre estado estático primeiro, poster/fallback, controles, reduced motion e conteúdo compreensível sem animação.
- **Mobile não é apenas desktop estreito:** os resultados mostram reordenação narrativa, empilhamento, faixa rolável, drawer ou busca contextual. Porém, muitas versões mobile não foram realmente validadas; isso é uma lacuna a testar, não uma conclusão.
- **A originalidade deve vir da combinação de objetivo, conteúdo e sistema visual próprios**, não da cópia de qualquer assinatura: quase-preto + Inter + grid + blur, gradientes/grade pontilhada, wordmarks, mastheads, azul institucional, fotografias cinematográficas ou padrões de card reconhecíveis.

## Matriz comparativa por categoria

| Categoria | Referências | Padrões dominantes | Diferencial de experiência | Riscos/limitações recorrentes |
|---|---|---|---|---|
| SaaS / produto digital | Linear, Stripe, Notion | Hero com tese, CTA, UI demonstrativa, prova social, módulos, navegação em camadas | Linear vende craft operacional; Stripe organiza uma plataforma; Notion vende uma categoria de trabalho | Demos, menus, mídia e movimento podem falhar, carregar tarde ou aumentar a carga cognitiva; acessibilidade/performance não foram auditadas integralmente |
| Estúdio / portfólio | Pentagram, Locomotive | Portfólio como narrativa, hero visual, taxonomia, cases, tipografia editorial, transições | Pentagram privilegia curadoria/arquivo; Locomotive privilegia cinema, temas e motion | Autoplay, WebGL, vídeo, smooth scroll e Cloudflare; várias interações e a experiência mobile não foram validadas |
| Institucional / editorial | GOV.UK | Tarefa imediata, busca, links explícitos, coluna de leitura, metadados, disclosures | Robustez, previsibilidade, governança e volume documental | Vários estados de formulário, foco, zoom, leitor de tela e breakpoints ficaram sem teste |
| Editorial / serviço | MUBI | Atmosfera fotográfica, promessa única, conteúdo editorial, newsletter, filtros explícitos | Separa aquisição, catálogo e revista; alterna full-bleed e leitura contida | Feed ficou em skeleton em uma captura; API, loading, mobile, filtros e checkout não foram exercitados |
| E-commerce / marca | Patagonia, Apple | Hero de campanha/produto, descoberta, comparação, compra, suporte e prova pós-compra | Patagonia integra produto, reparo e ativismo; Apple estrutura descoberta, comparação e transação | Patagonia estava em página de contingência; Apple não teve viewport mobile; vídeos, carrosséis e acessibilidade ficaram parcialmente sem teste |
| Marketplace / serviço | Airbnb | Busca como ação principal, campos contextuais, cards repetíveis, carrosséis, preço/rating | A mesma anatomia escala entre Homes, Experiences e Services | Conteúdo é dinâmico; mobile real, reservas, filtros avançados, estados vazios/erro e performance não foram validados |

## Padrões comuns encontrados

### 1. Uma promessa por momento da jornada

As páginas mais claras não começam com um inventário completo de funcionalidades. Elas estabelecem uma tese curta e depois a demonstram:

- **Linear:** instrumento de trabalho de alta qualidade, com velocidade e craft demonstrados por estados, histórico e diffs.
- **Stripe:** plataforma orientada à decisão, com promessa, CTA, demonstração e prova progressiva.
- **Notion:** categoria de trabalho apresentada por promessa, capacidades, casos de uso e prova social.
- **GOV.UK:** tarefa e busca antes de campanha institucional.
- **MUBI:** promessa cinematográfica e CTA antes de trilhos densos.
- **Airbnb:** busca contextual como primeira ação, em vez de um hero promocional dominante.

**Aplicação:** escrever uma frase que responda “o que é”, “para quem” e “qual mudança entrega”; deixar detalhes e exceções para seções seguintes.

### 2. Demonstração concreta substitui adjetivo

UI fictícia coerente, checkout, cards, catálogo, imagem de uso, comparação, métricas verificáveis e cases tornam a promessa tangível. Linear usa issues, inbox, roadmap, conversas e diffs; Stripe usa checkout, métricas e integrações; Notion usa screenshots; Apple usa produto, câmera, bateria e chip; Airbnb usa cards com preço, unidade e avaliação.

A demonstração deve ser **conteúdo explicativo**, não decoração. Dados podem ser fictícios, mas precisam ser coerentes entre estados, labels, datas e ações; afirmações comerciais ou de impacto precisam de fonte e escopo.

### 3. Arquitetura modular e progressive disclosure

O catálogo repete o padrão “tese ampla → módulos específicos → prova → conversão”. O progressive disclosure aparece como:

- mega menu para descoberta e subnav para continuidade em Stripe;
- mega menu de capacidades em Notion;
- módulos curtos e demos encadeadas em Linear;
- filtro, arquivo, busca e cases em Pentagram;
- busca, categorias, disclosures e listas em GOV.UK;
- facetas explícitas em MUBI, Patagonia e Airbnb;
- cabeçalho de família, tabs e comparação em Apple.

**Aplicação:** não expor todos os detalhes no hero; criar um caminho primário e oferecer exploração contextual quando a pessoa demonstrar intenção.

### 4. Chrome neutro; cor com função

Linear, Notion, MUBI, Apple, Patagonia e Pentagram usam superfícies neutras para que a interface, o produto, a fotografia ou o portfólio carreguem a cor. Stripe usa gradientes e faixas como assinatura energética, mas mantém conteúdo crítico em placas/superfícies legíveis. GOV.UK usa azul institucional e preto para comunicação de tarefa. Airbnb reserva rosa/cores de ação para controles e mantém cards neutros.

**Aplicação:** definir tokens próprios para superfície, tinta, ação, borda, estado e mídia. Não combinar os sinais distintivos de uma referência — por exemplo, a combinação exata de quase-preto, Inter, raios, blur e grid de Linear; ou arco/feixe, grade pontilhada e gradiente de Stripe.

### 5. Tipografia cria ritmo e posicionamento

As referências variam de escalas muito grandes a leitura utilitária controlada:

- Linear: Inter Variable; H1 desktop medido em 64/64 px, H2 em 48/48 px e statement em 40/44 px.
- Stripe: sohne-var, H1 de aproximadamente 48 px com line-height medido de 55,2 px; SourceCodePro também carregada.
- Notion: NotionInter/Inter; H1 de aproximadamente 96/100 px, peso 600, com contraste serif nas citações.
- Pentagram: Plain; heading principal de 3,25 rem/1,05 e body 1 rem/1,25.
- GOV.UK: GDS Transport; home H1 de 55/66 px, artigo H1 de 48/50 px, lead de 24/30 px e corpo de 19/25 px; coluna textual de aproximadamente 630 px.
- MUBI: Riforma, com Tiempos Text/Headline declarado para usos editoriais; hero perto de 60/84 px e corpo de leitura mais contido.
- Locomotive: HelveticaNowDisplay + LocomotiveNew; tokens indicam H1 aproximado de 4,67 rem no desktop, 3,33 rem em tablet e 2,4 rem no mobile.
- Patagonia: AvenirNextLTW02; contingência observada com título próximo de 23 px e corpo 13–14 px.
- Apple: SF Pro Text/SF Pro Display; corpo de 17/25 px e navegação de aproximadamente 44 px.
- Airbnb: Cereal VF/Circular/sistema; corpo de 14/20,02 px.

Essas medições são **amostras das sessões**, não recomendações para copiar. A regra prática é estabelecer uma voz tipográfica própria, escala responsiva, largura de linha confortável, contraste e fallback seguro.

### 6. Responsividade reordena a narrativa

Padrões observados incluem CTAs empilhados, títulos quebrados, grids que viram coluna, logos em overflow horizontal, subnav rolável, drawers e campos de busca adaptados. Linear teve captura mobile de 390×844 px com logo, login, cadastro e hamburger; Notion empilhou CTAs e iniciou capacidades em coluna; Stripe empilhou cards e CTAs; GOV.UK manteve logo, Menu e Search; Pentagram e Airbnb mostram soluções de coluna/faixa no material, mas várias ações mobile não foram abertas.

**Aplicação:** desenhar primeiro o que deve permanecer visível em 320–430 px, definir ordem de leitura e testar toque, teclado, overflow, landscape e tablet. Nunca assumir que “desktop comprimido” é a solução.

### 7. Prova social e confiança em camadas

Logos, histórias, depoimentos, cases, métricas, integrações, documentação, ratings, garantia, reparo, suporte e feedback têm papéis diferentes:

- Linear: Customers, histórias em grade e métricas verificáveis.
- Stripe: métricas, marcas, cases, demos e documentação.
- Notion: logos, casos de uso, depoimentos e faixa de métricas.
- GOV.UK: origem/data, suporte, licença e feedback.
- Patagonia: garantia, reparo, Worn Wear, footprint e cuidado.
- Airbnb: preço, unidade, rating, badges e contexto de disponibilidade.
- Apple: comparação, condições, entrega, suporte e assistente de escolha.

**Aplicação:** colocar a evidência próxima da afirmação, indicar fonte/escopo/data e não usar logo ou depoimento sem autorização.

### 8. Movimento como enriquecimento, não requisito

Foram observados ou inferidos hero de vídeo/canvas, carrosséis, autoplay, troca de palavra, smooth scroll, GSAP, WebGL, overlays, skeletons, faixas roláveis e controles de play/pause. Linear, Notion, Pentagram, Locomotive, MUBI, Patagonia, Apple e Airbnb mostram graus diferentes de dependência de mídia.

**Aplicação:** projetar estado estático primeiro; oferecer poster, fallback, pausa, controle de foco, anúncio de posição, `prefers-reduced-motion`, carregamento progressivo e alternativa textual. A mídia deve explicar ou emocionar, nunca ser a única forma de compreender valor.

## Diferenças por categoria

### SaaS / produto digital: vender o modo de trabalhar

**Linear** usa direção dark, editorial e premium-utilitária: canvas quase preto, linhas finas, painéis, demos de fluxo completo e um sistema modular de título curto + descrição + link + demonstração. A CSS publicada confirma grid de 12 colunas com gap de 32 px, reduzindo para 8 até 768 px e 4 até 640 px; o DOM indicou margem próxima de 40 px, quatro módulos de cerca de 1.220–1.232 px e palco publicado de aproximadamente 592 px, com painel de cerca de 560 px, borda fina e raio externo perto de 22 px. Pricing foi visto em quatro colunas; Customers e Now em grades editoriais de três colunas. A primeira captura desktop ficou quase preta abaixo do header, embora o DOM reportasse H1 por volta de y=272 e mídia a partir de y=416; outra captura após scroll mostrou demo, logos e statement. Isso é limitação de renderização/tempo, não prova de que a produção seja vazia.

**Stripe** combina superfícies brancas/off-white, tinta azul-marinho, tipografia grande e gradientes saturados. O hero desktop tinha overline, H1 multiline de cerca de 48 px, parágrafo curto, CTA primário, CTA secundário, gradiente lateral e logos; Payments tinha split com demo de checkout, grade pontilhada e ribbon diagonal; Pricing contrastava plano claro e customizado escuro. O mega menu Products foi aberto e tinha colunas de domínio, subtítulos, atalhos, seção adicional e promoção. No mobile observado, navegação virou logo + menu, CTAs empilharam, logos ficaram parcialmente visíveis em faixa e o subnav de Payments rolava horizontalmente.

**Notion** apresentou fundo branco, H1 central de cerca de 96/100 px, cápsula pastel com palavra que troca ciclicamente — Think, Create, Ship, Build, Scale e Jam foram observadas — e controle Play/Pause exposto no DOM. O hero traz painel de workspace; capacidades usam dois cards de cerca de 528×528 px e módulo largo de cerca de 1.079×290 px; depois vêm cinco casos de uso, três depoimentos, métricas, CTA final e footer. Product abriu mega menu com Capture, Find e Automate, recursos, novidades e download.

**Princípio transferível:** mostrar a transformação operacional em estados compreensíveis e criar um sistema de módulos que possa crescer. **Evitar:** copiar a identidade dark de Linear, o sistema cromático/geométrico de Stripe ou a frase animada/mega menu/screenshot de Notion.

### Estúdio / portfólio: transformar acervo em narrativa

**Pentagram** usa interface branca e baixa, wordmark, hero de projeto full-width com `object-fit: cover`, legenda, filtros inline translúcidos e 12 controles de slide. O hero mudou entre capturas e o clique manual atualizou imagem, título, descrição e categorias; autoplay foi percebido como variável, mas não cronometrado. `/work` tinha contador, mosaico assimétrico e depois cadência de três colunas. Filtro por disciplina/setor, arquivo por ano, busca expansível, show more, load more, cases com taxonomias, mídia, equipe e próximo projeto estruturam o acervo. CSS/tokens indicaram Plain, body 1 rem/1,25, caption 0,8125 rem, heading 3,25 rem/1,05, header 3,75 rem, outer gutter 24 px e inner gutter 12 px. No mobile 390×844 px, o header mostrou wordmark + hamburger e `/work` reflowou para uma coluna; um banner de cookies ocupou área relevante.

**Locomotive** apresentou home preta quase integral, wordmark fino claro, entrada textual animada, linhas/divisórias, títulos display e metadados compactos. Work listava 46 projetos; Agency tinha filme, capacidades, equipe em três grupos e reconhecimentos; o case Lightship reunia mídia, seções, prêmios, carrossel e créditos. Código/DOM confirmou lazy-loaded images, vídeo hero, canvas, sequência, Vimeo, modal, newsletter e cookies. CSS e hooks indicavam Locomotive Scroll, GSAP, IntersectionObserver, WebGL/canvas, callbacks in-view, temas — incluindo #DA382E e #312DFB — e grids de 12/8/4 colunas, com 20 px desktop e cerca de 10 px mobile. A captura inicial exibiu letras fragmentadas/transicionais; isso não deve ser interpretado como conteúdo permanente. Chromium local encontrou Cloudflare, então o layout final de telefone foi inferido de CSS/HTML, não visualmente validado.

**Princípio transferível:** combinar curadoria, taxonomia, cases e contexto em vez de exibir uma simples galeria. **Evitar:** copiar filtro-manifesto, wordmark, fonte, projetos, temas, distorção tipográfica, autoplay ou estrutura reconhecível.

### Institucional / editorial: reduzir incerteza e orientar tarefas

**GOV.UK** é utilitário: cabeçalho azul, branco, links sublinhados, divisores, busca e serviços populares na primeira dobra, sem hero fotográfico. Container desktop de aproximadamente 960 px; artigos usam main de 960 px e coluna de 630 px. Foram medidos GDS Transport/Arial, home H1 55/66 px, h2 36/40 px, artigo H1 48/50 px, lead 24/30 px e corpo 19/25 px. Menu revelou Services and information e Government activity empurrando o conteúdo; Search revelou faixa acima do herói. Busca de notícias expõe campo, Topic/Person/Updated, ordenação, contagem, assinatura e lista textual; diretório tem filtro e disclosures; notícia tem breadcrumb, tipo, origem/data, mídia/crédito, corpo, compartilhar, tópico e feedback. No mobile, banner empilhou botões, logo/Menu/Search permaneceram e busca/categoria refluíram.

**Princípio transferível:** priorizar intenção, linguagem direta, coluna de leitura controlada, links explícitos, metadados e disclosures previsíveis. **Evitar:** reproduzir coroa, azul, logo, textos, tokens, cabeçalho e banner de cookies.

### Editorial / serviço: construir atmosfera e catálogo sem confundir função

**MUBI** separa aquisição do serviço, descoberta/catalogação e publicação editorial. A homepage observada redirecionou para `/en/ma` e alternava hero full-bleed, blocos brancos, declaração de curadoria, módulo de revista e QR code; o CTA e a repetição de conversão apareciam depois de nova prova. `/films` mostrou filtros explícitos de gênero/país/ano, sort e grade de três cards por linha, cerca de 372×209 px, com capas, títulos e metadados. Tipografia computada Riforma; Tiempos Text/Headline foi declarado no HTML para usos editoriais. Hero perto de 60/84 px, cards perto de 22 px, metadata 12–14 px; azul profundo próximo a RGB(0,20,137) e CTA vermelho da revista próximo a RGB(215,27,29). Notebook mostrou masthead, busca, Explore, newsletter e blocos; o feed ficou em skeleton cinza na captura, portanto a grade de artigos não foi tratada como observada. Artigo tinha coluna de aproximadamente 659 px, título perto de 41/50 px, dek, autor/data, imagem de cerca de 659×330 px, corpo, tags, compartilhamento e comentários. Magazine tinha hero preto de cerca de 1.050 px, oferta central e CTA de 169×44 px.

**Princípio transferível:** alternar atmosfera e leitura contida, manter facetas explícitas e repetir CTA somente após novo benefício/prova. **Evitar:** copiar masthead, pontos, fotografia, tipografia, texto ou combinação cromática.

### E-commerce / marca: unir desejo, decisão, suporte e pós-compra

**Patagonia** apresentou uma limitação essencial: home, shop, PDP e home EU retornaram diretamente a contingência “Hang Tight! Routing to checkout...”, com foto outdoor full-screen, faixa branca translúcida, cartão branco translúcido, tipografia preta e contatos regionais. A contingência declarou AvenirNextLTW02, título perto de 23 px, corpo 13–14 px, mailto clicável, crédito Sonnie Trotter, meta-refresh e spinner; não havia navegação, busca, carrinho ou compra. O HTML/CSS normal consultado descrevia header com logo, hamburger, busca, bag, perfil e skip link; mega menus; hero de imagem/vídeo, tiles, sliders, histórias, newsletter, garantia, footprint, Action Works, Worn Wear e reparos. Catálogo declarou 2.067 itens, filtros, sort, retirada, swatches, preço, rating, badges e Quick Add. A home variava por locale/campanha, incluindo títulos US/EU diferentes. Conclusão de estabilidade futura não é possível; a falha pode ser transitória.

**Apple** apresentou neutralidade estrutural, escala, espaço negativo, produto em destaque e ritmo de grandes respiros alternados com zonas densas. Home, índices de iPhone/Mac e página de produto foram abertos em desktop 1280×1100. Categorias tinham cabeçalho de família, faixa horizontal, cards comparáveis e CTAs; iPhone Pro iniciou com hero escuro, mídia, título, preço/parcelamento e compra, seguido de destaques. SF Pro Text/Icons no corpo e SF Pro Display em título; corpo de 17/25 px e navegação de cerca de 44 px. Cards repetiam imagem, nome, swatches, promessa, preço/condição e CTAs. Watch the film abriu overlay escuro com vídeo, legenda e fechar; galeria alternou play/pause. O mobile não foi observado diretamente.

**Princípio transferível:** separar descoberta, comparação, compra e suporte; aproximar prova de materiais, uso, garantia, entrega, troca e cuidado. **Evitar:** copiar logotipo, lettering, campanhas, vídeos, mockups, fotos, linguagem cinematográfica ou layout pixel a pixel. No caso Patagonia, não usar página de indisponibilidade como jornada principal.

### Marketplace / serviço: tornar busca e comparação eficientes

**Airbnb** foi observado diretamente em home, `/homes`, `/experiences` e `/services`, com viewport 1280×1100. Header compartilhado tinha categorias All/Homes/Experiences/Services, conta/menu e busca contextual. A primeira dobra era utilitária: destino, data e quantidade/tipo de serviço. Campos abertos mostraram sugestões de destino, dois meses e abas Dates/Flexible, Adults/Children/Infants/Pets com +/-; Services trocou o terceiro campo por Type of service/Add service; Experiences usou placeholder por cidade/ponto de referência. Cards repetiam imagem, selo opcional, título, preço/unidade, rating, wishlist e setas; Experiences tinha horário e Services mínimo de compra. Faixas usavam contexto de cidade/tema/momento e indicador “6 of 8/9”. Computados: branco RGB(255,255,255), texto RGB(34,34,34), Cereal VF/Circular/sistema, corpo 14/20,02 px, controles RGB(242,242,242), círculo de busca 48×48 px e rosa interno RGB(218,18,73); imagem de Services perto de 190×181 px. Avançar carrossel deslocou a janela; DOM expôs labels de acessibilidade para Search, Previous, Next e Add to wishlist.

**Princípio transferível:** fazer a busca responder ao domínio, manter anatomia de card consistente e exibir preço/unidade, mínimo, taxas, rating e disponibilidade com clareza. **Evitar:** copiar nome, cor exata, fonte, ícones, selos, fotos ou forma distintiva; não tratar a versão mobile como desktop comprimido.

## Princípios práticos para uma landing page original

### 1. Definir o núcleo antes da estética

1. Escrever uma promessa em uma frase, com público e resultado.
2. Escolher uma ação primária e, se necessário, uma alternativa de vendas/descoberta.
3. Definir a prova mínima que torna a promessa crível: fluxo de produto, catálogo, case, imagem de uso, métrica ou demonstração.
4. Separar o que é observado/medido do que é inferido; só publicar afirmações verificáveis.

### 2. Montar uma arquitetura de página em camadas

Uma composição original e pragmática pode seguir esta sequência, adaptando-a ao objetivo:

1. **Header:** logo próprio, navegação curta, CTA e acesso previsível; evitar mega menu no mobile.
2. **Hero:** overline opcional, headline específica, explicação curta, CTA primário e estado visual estático compreensível.
3. **Demonstração/prova imediata:** UI, imagem contextual, comparação ou resultado; não apenas mockup decorativo.
4. **Benefícios em módulos:** três a cinco blocos com título, descrição, link e prova correspondente.
5. **Modo de uso ou fluxo:** sequência de estados, antes/depois, passos ou caso real.
6. **Confiança:** logos autorizados, depoimentos, métricas verificáveis, documentação, garantias ou critérios claros.
7. **Exploração opcional:** filtros, casos, categorias ou recursos aprofundados, apenas se houver volume real de conteúdo.
8. **Conversão repetida:** novo CTA depois de uma nova evidência, não repetição vazia.
9. **Suporte e rodapé:** perguntas, contato, privacidade, termos, acessibilidade e origem dos dados.

### 3. Criar uma identidade própria por sistema, não por imitação

- Definir **paleta, tipografia, grid, raios, bordas, sombras, ícones, motion e proporções de mídia** antes de montar as telas.
- Escolher uma geometria e uma relação de contraste não derivadas de uma única referência.
- Usar conteúdo, nomes de módulos e dados fictícios próprios; nunca copiar labels distintivos, frases, screenshots ou taxonomias.
- Preferir duas ou três decisões autorais fortes — por exemplo, uma regra de recorte, uma voz editorial e um comportamento de dados — em vez de acumular efeitos.
- Documentar origem/licença de fontes, imagens, vídeos, ícones, logos e depoimentos.

### 4. Projetar mídia e movimento com segurança

- Criar poster e fallback estático para cada vídeo, canvas ou animação.
- Não depender de hover; disponibilizar controles equivalentes para toque e teclado.
- Expor pausa/retomar quando houver movimento contínuo; respeitar `prefers-reduced-motion`.
- Reservar dimensões para evitar layout shift e carregar mídia abaixo da dobra progressivamente.
- Definir estados de loading, vazio, erro, retry e offline quando houver API, feed ou catálogo.
- Medir peso, LCP, CLS, consumo de dados e comportamento em rede lenta antes de transformar motion em requisito.

### 5. Fazer responsive design como reescrita de prioridade

Testar no mínimo 320/360/375/390/414 px, tablet e desktop, além de landscape. Validar:

- ordem de leitura e posição da CTA;
- quebra de títulos e largura de linha;
- overflow de logos, tabs e subnav;
- tamanho de alvos de toque;
- menu/drawer, fechamento e foco;
- carrossel com alternativa sem gesto;
- sticky headers e navegação local;
- zoom de 200%/400% e textos longos;
- páginas com conteúdo dinâmico, erro e ausência de resultados.

### 6. Tratar acessibilidade, conteúdo e confiança como parte do visual

- Contraste de texto, controles, overlays e estados visitado/foco/erro.
- Foco visível, ordem lógica, Escape, labels, nomes acessíveis, teclado, leitor de tela e navegação sem mouse.
- Texto alternativo, caption/crédito e transcrição para mídia relevante.
- Links sublinhados ou outra distinção que não dependa só de cor.
- Preços, métricas, impacto, disponibilidade, ratings e depoimentos com data, unidade, fonte ou escopo.
- Consentimento claro para cookies, analytics, vídeo e newsletter; não deixar banner ocupar a função principal.

### 7. Instrumentar antes de otimizar

Definir eventos e critérios de sucesso para CTA, busca, filtro, vídeo, comparação, formulário e checkout, sem presumir que uma interação “parece” conversão. Testar com usuários ou revisão especializada a clareza da promessa, a compreensão da demonstração, a encontrabilidade da ação e a recuperação de erro. Comparar versões por objetivo, não por semelhança visual com as referências.

## Limitações consolidadas do catálogo

As limitações abaixo precisam acompanhar qualquer decisão baseada neste material:

- **Acessibilidade:** em praticamente todas as referências não foram auditados integralmente teclado, foco, tabulação, leitor de tela, WCAG, contraste automatizado, zoom, alto contraste, contraste forçado, switch access ou ordem semântica.
- **Mobile e dispositivos:** várias capturas foram feitas em um único viewport; no Apple o navegador permaneceu desktop; no Airbnb o resize alterou outerWidth/outerHeight, mas manteve innerWidth em 1280; no MUBI o conector não permitiu resize; no Locomotive o mobile foi inferido de CSS/HTML devido ao Cloudflare; Patagonia não teve sessão normal mobile; GOV.UK usou Chromium headless, não aparelho físico.
- **Interações:** frequentemente não foram abertos menus mobile, drawers, tabs, filtros, carrosséis, paginação, show more/load more, formulários, login, cadastro, checkout, newsletter, compartilhamento, favoritos, Quick Add, reservas ou fluxos de pagamento.
- **Motion e mídia:** não foram medidos de modo abrangente FPS, easing, duração, parallax, autoplay/pausa, lazy loading, poster, fallback, `prefers-reduced-motion`, consumo de dados ou comportamento em rede lenta. A mídia hero desktop de Linear ficou preta/quase vazia em uma captura; não foi possível distinguir definitivamente lazy loading, animação, bloqueio ou diferença de renderer.
- **Performance e operação:** não houve medição sistemática de Core Web Vitals, peso de imagens, cache, CDN, memória, offline, 3G ou compatibilidade entre navegadores. MUBI apresentou skeleton em vez de grade de artigos; Patagonia estava em contingência e sua falha pode ser transitória.
- **Conteúdo dinâmico/localizado:** preços, cidades, datas, contagens, indicadores, notícias, logos, campanhas e disponibilidade podem mudar. Patagonia variava por locale/campanha; Airbnb tinha conteúdo contextual; GOV.UK, preços e métricas não devem ser tratados como dados estáveis.
- **Escopo da inspeção:** em Stripe e GOV.UK, partes abaixo da primeira dobra foram confirmadas por DOM/texto, não examinadas integralmente em imagem; no Linear a captura foi sensível ao tempo/renderização; em Pentagram, swipe, pausa no hover, combinações de filtros e estados vazios não foram testados.
- **Segurança de cópia:** o catálogo não autoriza reutilização de qualquer asset, fonte, marca, screenshot, vídeo, texto, depoimento, logo, preço ou dado das referências.

## Fontes por referência

### Linear

- [Homepage](https://linear.app/)
- [Pricing](https://linear.app/pricing)
- [Customers](https://linear.app/customers)
- [Now](https://linear.app/now)
- [Header CSS](https://static.linear.app/web/_next/static/css/Header.BNHV4lAU.css)
- [Grid CSS](https://static.linear.app/web/_next/static/css/Grid.Cds8fjKR.css)
- [Layout CSS](https://static.linear.app/web/_next/static/css/Layout.tvkMFESE.css)
- [GlobalSidePanel CSS](https://static.linear.app/web/_next/static/css/GlobalSidePanel.cAFbFP1F.css)

### Stripe

- [Homepage](https://stripe.com/)
- [Payments](https://stripe.com/payments)
- [Pricing](https://stripe.com/pricing)

### Notion

- [Product em notion.so](https://www.notion.so/product)
- [Product em notion.com](https://www.notion.com/product)

### Pentagram

- [Homepage](https://www.pentagram.com/)
- [Work](https://www.pentagram.com/work)
- [About](https://www.pentagram.com/about)
- [News](https://www.pentagram.com/news)
- [Case The Obama Presidential Center](https://www.pentagram.com/work/the-obama-presidential-center)
- [CSS](https://www.pentagram.com/build/main/assets/index-Bex603M2.css)

### Locomotive

- [Homepage](https://locomotive.ca/en)
- [Work](https://locomotive.ca/en/work)
- [Agency](https://locomotive.ca/en/agency)
- [Case Lightship](https://locomotive.ca/en/work/lightship-1)
- [CSS](https://locomotive.ca/assets/styles/main.css?v=1792099941132)
- [JavaScript](https://locomotive.ca/assets/scripts/app.js?v=1792099941132)

### GOV.UK

- [Homepage](https://www.gov.uk/)
- [Benefits](https://www.gov.uk/browse/benefits)
- [News and communications search](https://www.gov.uk/search/news-and-communications)
- [Government organisations](https://www.gov.uk/government/organisations)
- [GAD modelling supports pandemic preparedness work](https://www.gov.uk/government/news/gad-modelling-supports-pandemic-preparedness-work)

### MUBI

- [Homepage](https://mubi.com/)
- [MUBI MA](https://mubi.com/en/ma)
- [Films](https://mubi.com/en/films)
- [Notebook](https://mubi.com/en/notebook)
- [Article: The New MUBI US](https://mubi.com/en/notebook/posts/the-new-mubi-us)
- [Magazine](https://mubi.com/en/notebook/magazine)
- [Terms of service](https://mubi.com/en/terms_of_service)
- [Privacy policy](https://mubi.com/en/privacy_policy)

### Patagonia

- [Homepage](https://www.patagonia.com)
- [Home](https://www.patagonia.com/home/)
- [Shop](https://www.patagonia.com/shop/)
- [Clothing and gear](https://www.patagonia.com/shop/clothing-gear)
- [Product PDP](https://www.patagonia.com/product/mens-r1-air-fleece-midlayer-jacket/40275.html)
- [EU home](https://eu.patagonia.com/gb/en/home/)

### Apple

- [Homepage](https://www.apple.com/)
- [iPhone](https://www.apple.com/iphone/)
- [Mac](https://www.apple.com/mac/)
- [iPhone 18 Pro](https://www.apple.com/iphone-18-pro/)

### Airbnb

- [Homepage](https://www.airbnb.com/)
- [Homes](https://www.airbnb.com/homes)
- [Experiences](https://www.airbnb.com/experiences)
- [Services](https://www.airbnb.com/services)

## Checklist final para a landing original

- [ ] A promessa pode ser compreendida sem vídeo, canvas, hover ou scroll adicional.
- [ ] Há uma CTA primária e uma alternativa coerentes com a intenção do visitante.
- [ ] O primeiro visual é prova do produto/serviço, não apenas decoração.
- [ ] O sistema visual é próprio e não combina sinais distintivos de uma referência.
- [ ] Todos os logos, fontes, imagens, vídeos, ícones, métricas e depoimentos têm origem/licença/escopo documentados.
- [ ] Há fallback estático, loading, vazio, erro e retry quando necessário.
- [ ] Motion tem pausa, reduced motion, foco e alternativa acessível.
- [ ] Mobile, tablet, desktop, landscape, zoom e textos longos foram realmente testados.
- [ ] Navegação, filtros, busca, carrosséis e drawers funcionam com teclado e toque.
- [ ] Contraste, foco visível, labels, alt text, semântica e ordem de leitura foram auditados.
- [ ] Performance e Core Web Vitals foram medidos com mídia real.
- [ ] Claims, preços, disponibilidade e métricas têm fonte, data e escopo.
- [ ] A página não depende de qualquer referência específica para parecer “premium”, “cinematográfica”, “editorial” ou “confiável”.
