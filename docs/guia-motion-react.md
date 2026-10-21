# Guia de Motion para React — versão estudada

## Escolha técnica

A implementação da AGIJ FERT usa CSS nativo porque as interações são curtas, locais e não precisam de uma dependência de animação. Quando um projeto React precisar coordenar entrada/saída, layout compartilhado, gestos ou timelines, a documentação atual do Motion para React usa o pacote `motion` e importa componentes de `motion/react`. [1]

Instalação:

```bash
npm install motion
```

## Componente e propriedades

`motion.div` mantém a semântica do elemento HTML e adiciona `initial`, `animate`, `exit`, `whileHover`, `whileTap` e `whileInView`. Use `opacity`, `transform` e propriedades de cor; evite animar dimensões que causem recálculo em listas grandes.

```jsx
import { motion } from 'motion/react'

export function ActionButton({ children }) {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
    >
      {children}
    </motion.button>
  )
}
```

**Finalidade:** confirmar a ação com uma resposta curta. **Não usar:** em cada link da página ou quando o deslocamento alterar a leitura. **Alternativa reduzida:** manter a mesma cor e adicionar somente `:focus-visible` e uma mudança curta de background em CSS.

## Variants e stagger

Variants nomeiam estados e propagam uma intenção do pai para os filhos. A documentação mostra `delayChildren` e `stagger` para coordenar listas. [1]

```jsx
import { motion, stagger } from 'motion/react'

const list = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: stagger(0.08) },
  },
}
const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
}

export function MethodList({ items }) {
  return (
    <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={list}>
      {items.map((itemText) => <motion.li key={itemText} variants={item}>{itemText}</motion.li>)}
    </motion.ul>
  )
}
```

**Finalidade:** revelar uma lista com ritmo. **Não usar:** para esconder conteúdo essencial ou em páginas longas onde o visitante precisa localizar tudo rapidamente. **Alternativa reduzida:** renderizar todos os itens imediatamente e remover `y`/stagger.

## AnimatePresence

`AnimatePresence` mantém um elemento no DOM durante a saída para que `exit` possa terminar. [1]

```jsx
import { AnimatePresence, motion } from 'motion/react'

export function Notice({ open }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="notice"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2 }}
        >
          Mensagem de estado
        </motion.div>
      )}
    </AnimatePresence>
  )
}
```

**Finalidade:** comunicar entrada e saída de uma mensagem não essencial. **Não usar:** para fazer um erro ou confirmação desaparecer antes de ser lido. **Alternativa reduzida:** renderizar sem saída animada e manter `aria-live`.

## Layout e scroll

A animação de layout usa transforms para interpolar mudanças de posição; aplique apenas em elementos que realmente mudam de composição. Para revelar durante rolagem, prefira `whileInView` com `viewport={{ once: true }}`. Não use scroll-linked motion como requisito de compreensão.

## Movimento reduzido

A documentação atual recomenda `MotionConfig reducedMotion="user"` ou o hook `useReducedMotion`. Com a preferência reduzida, transforms e layout animations devem ser trocados por opacity ou removidos; autoplay e parallax devem ser reconsiderados. [2]

```jsx
import { MotionConfig } from 'motion/react'

export function AppMotion({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
```

**Critério:** todo efeito deve ter uma versão estática equivalente, não deve impedir acesso ao conteúdo e deve ser testado com a preferência do sistema ativada.

## Performance

Prefira transforms e opacity, limite observadores de viewport, evite listas com centenas de elementos animados e não inicialize animação em conteúdo que não está visível. O CSS desta demonstração mantém a mesma disciplina sem adicionar o pacote Motion.

## References

[1]: https://motion.dev/docs/react-animation "React animation — Motion"
[2]: https://motion.dev/docs/react-accessibility "Accessibility — Motion"
