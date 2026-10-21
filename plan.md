# AGIJ FERT — plano de implementação e direção visual

## Escopo provisório

A AGIJ FERT será apresentada como uma empresa de consultoria agronômica e fertilidade do solo. Até receber as informações institucionais do cliente, o site não deve inventar cidades de atendimento, equipe, clientes, depoimentos, resultados, certificações, números ou promessas técnicas. O conteúdo final deve usar somente fatos fornecidos pelo cliente ou textos institucionais aprovados.

- **Público:** produtores e equipes técnicas do agronegócio que precisam tomar decisões melhores sobre solo, lavoura e manejo.
- **Objetivo:** explicar a atuação da AGIJ FERT com clareza, mostrar uma relação visual direta com o agro brasileiro e gerar um contato qualificado.
- **Ação principal provisória:** solicitar uma conversa técnica.
- **Direção visual:** campo brasileiro, solo, folhas, textura e leitura técnica; usar a logo fornecida como fonte de cor e identidade.
- **Restrições:** fotografias reais, não geradas por IA; nenhuma foto deve ser apresentada como pertencente à AGIJ FERT ou a seus clientes/equipe; não usar máquinas como foco principal; não comprar imagens nem contratar serviços; todas as origens, autores, licenças e localizações verificadas devem estar em `CREDITOS-IMAGENS.md`.

## Curadoria de imagens já verificada

Foram encontradas e baixadas quatro imagens locais com licença compatível com uso empresarial mediante atribuição. Duas são fotografias diretamente associadas a Mato Grosso: soja em Brasnorte, de Marcelo Camargo/Agência Brasil, e colheita de soja em Rondonópolis, de Roosevelt Pinheiro/Agência Brasil. As duas outras são imagens reais de observação territorial/agro: uma imagem de Primavera do Leste baseada em dados Copernicus Sentinel processados pelo Sentinel Hub e uma fotografia da região do reservatório de São Simão, no Brasil, feita por NASA Goddard/ISS.

A pesquisa não encontrou, nesta rodada, uma imagem com localização verificável em Sorriso, um close-up licenciado de raízes/solo agrícola brasileiro ou uma fotografia licenciada de consultoria agronômica em campo. Essas ausências serão informadas e não serão preenchidas com fotos estrangeiras, IA ou bancos de imagem sem comprovação.

Os ativos estão em `public/images/source/` como cópias baixadas e em `public/images/optimized/` como WebP/PNG otimizados para o site. A logo fornecida está preservada como `agij-fert-logo.png`; ela não foi recriada.

## Direção de arte adaptada à marca

A identidade usa verde profundo e dourado presentes na logo, com solo-terra e branco quente como superfícies de apoio. O hero usa a foto de soja em Brasnorte em enquadramento amplo, com uma faixa de leitura escura e uma pequena etiqueta de crédito, sem sugerir vínculo da paisagem com a empresa. O layout deve alternar fotografia documental e blocos de informação técnica, evitando aparência de banco de fotos.

- **Princípios:** evidência antes de promessa; proximidade com a lavoura; leitura técnica sem frieza; espaço para a fotografia respirar.
- **Cores:** `#0B3D2E` como verde estrutural; `#D7A83D` como dourado de ação; `#8A4F2A` como terra auxiliar; `#F5F1E8` como fundo claro; `#17221C` como texto.
- **Tipografia:** sans-serif de alta legibilidade para interface e serif discreta apenas em chamadas editoriais; metadados e créditos em mono/sans compacta.
- **Assinaturas:** régua vertical verde, marcações de campo e mapas/linhas de plantio desenhados em SVG próprio; nunca sobrepor gráficos que distorçam as fotografias.
- **Motion:** transições curtas para revelar conteúdo e navegação; sem parallax obrigatório; `prefers-reduced-motion` remove deslocamentos e mantém conteúdo visível.
- **Logo:** usar o arquivo fornecido, com variações de fundo testadas no layout; não redesenhar símbolo, tipografia ou proporções.

## Arquitetura de implementação

O projeto será um site estático React + Vite, sem backend, com imagens locais em `public/images/optimized/` e referências/atribuições em `CREDITOS-IMAGENS.md`.

- `src/main.jsx`: montagem da aplicação.
- `src/App.jsx`: seções e estado global mínimo.
- `src/components/`: Header, Hero, Services, SoilStory, FieldEvidence, ContactModal e Footer.
- `src/styles.css`: tokens, layout responsivo, estados, recortes de imagem e redução de movimento.
- `public/manus-routes.json`: rota `/`.
- `docs/`: guia de design, Motion, tokens, checklist e diretrizes reutilizáveis.

A página deve incluir header responsivo, hero com fotografia real, explicação institucional sem alegações não confirmadas, serviços somente após confirmação do cliente, bloco sobre solo/lavoura, evidência visual, CTA e rodapé. Todo `alt` deve descrever o que realmente aparece e, quando relevante, indicar que a imagem é documental e não retrata a AGIJ FERT.

## Próxima informação necessária antes do código de conteúdo

Para completar textos e CTAs sem inventar fatos, faltam: serviços exatos, cidade/região de atendimento, telefone/WhatsApp/e-mail, público prioritário, diferenciais reais, chamada principal e qualquer texto institucional aprovado. A implementação visual e a curadoria de imagens podem avançar, mas esses dados devem ser confirmados antes da versão final.
