import { useEffect, useRef, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import { images } from './assets.js'

const whatsappUrl = 'https://wa.me/5566996512455?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20AGIJ%20FERT%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20para%20minha%20fazenda%20ou%20empresa.'

const services = [
  { number: '01', title: 'Leitura de solo', text: 'Leitura técnica do solo para orientar o que merece atenção antes da próxima decisão.' },
  { number: '02', title: 'Acompanhamento de lavoura', text: 'Acompanhamento de lavoura com olhar para desenvolvimento, equilíbrio e consistência.' },
  { number: '03', title: 'Plano de ação', text: 'Plano de ação traduzido para a rotina de quem produz — claro, possível e acompanhado.' },
]

const principles = [
  ['01', 'Diagnóstico antes da receita', 'Toda recomendação começa pelo que foi observado, medido e contextualizado.'],
  ['02', 'Campo como fonte', 'A lavoura orienta a conversa. A técnica existe para tornar o próximo passo mais seguro.'],
  ['03', 'Acompanhamento que explica', 'Mais do que entregar uma resposta, a gente organiza o raciocínio por trás dela.'],
]

function ImageFrame({ src, srcSet, sizes = '(max-width: 760px) 50vw, 45vw', width, height, alt, label, caption, className = '' }) {
  return (
    <figure className={`image-frame ${className}`}>
      <img src={src} srcSet={srcSet} sizes={sizes} width={width} height={height} alt={alt} loading="lazy" decoding="async" />
      <figcaption><span>{label}</span>{caption}</figcaption>
    </figure>
  )
}

function ContactModal({ onClose }) {
  const dialogRef = useRef(null)
  const firstFieldRef = useRef(null)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  useEffect(() => {
    firstFieldRef.current?.focus()
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = form.get('name')?.trim()
    const email = form.get('email')?.trim()
    if (!name || !email) {
      setStatus('error')
      setError('Preencha nome e e-mail para continuar.')
      return
    }
    if (form.get('demo-error') === 'yes') {
      setStatus('error')
      setError('Demonstração de erro: não foi possível concluir agora. Tente novamente.')
      return
    }
    setStatus('success')
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <section className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-title" ref={dialogRef}>
        <button className="modal-close" type="button" onClick={onClose} aria-label="Fechar formulário">×</button>
        {status === 'success' ? (
          <div className="form-state success-state" aria-live="polite">
            <span className="state-mark">✓</span>
            <p className="eyebrow">Recebido · demonstração</p>
            <h2>O próximo passo começa com uma boa pergunta.</h2>
            <p>Este é um estado de sucesso demonstrativo. Substitua pelo canal oficial da AGIJ FERT quando os contatos forem confirmados.</p>
            <button className="button button-green" type="button" onClick={onClose}>Voltar para a página</button>
          </div>
        ) : (
          <>
            <p className="eyebrow">Primeira conversa</p>
            <h2 id="contact-title">O que você quer entender melhor no campo?</h2>
            <p className="modal-lede">Deixe seu contato para iniciar uma conversa. Nenhuma mensagem será enviada por este formulário.</p>
            <form onSubmit={handleSubmit} noValidate>
              <label htmlFor="name">Seu nome <span>*</span></label>
              <input ref={firstFieldRef} id="name" name="name" type="text" autoComplete="name" placeholder="Seu nome" />
              <label htmlFor="email">Seu e-mail <span>*</span></label>
              <input id="email" name="email" type="email" autoComplete="email" placeholder="seu@email.com" />
              <label htmlFor="focus">Tema da conversa</label>
              <select id="focus" name="focus" defaultValue="solo"><option value="solo">Solo e fertilidade</option><option value="lavoura">Acompanhamento de lavoura</option><option value="outro">Outro tema</option></select>
              <label className="checkbox-label" htmlFor="demo-error"><input id="demo-error" name="demo-error" value="yes" type="checkbox" /> Simular estado de erro</label>
              {status === 'error' && <p className="form-error" role="alert">{error}</p>}
              <button className="button button-green form-submit" type="submit">Enviar demonstração <span aria-hidden="true">↗</span></button>
            </form>
          </>
        )}
      </section>
    </div>
  )
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <div className="app-shell">
      <Header whatsappUrl={whatsappUrl} />
      <main>
        <Hero whatsappUrl={whatsappUrl} />
        <section className="intro-section shell section-pad" id="atuacao" aria-labelledby="intro-title">
          <div className="section-index">02 <span>/ 04</span></div>
          <div className="intro-grid">
            <p className="eyebrow">Quem somos</p>
            <div>
              <h2 id="intro-title">A fertilidade do solo não é um detalhe. É a base da próxima safra.</h2>
              <p className="section-lede">A AGIJ FERT aproxima diagnóstico, observação e decisão para que cada área seja compreendida no seu próprio contexto.</p>
              <a className="text-link" href="#campo">Ver como isso aparece no campo <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </section>

        <section className="service-section shell section-pad" id="metodo" aria-labelledby="services-title">
          <div className="section-heading">
            <div className="section-index">03 <span>/ 04</span></div>
            <div><p className="eyebrow">Onde podemos atuar</p><h2 id="services-title">Do primeiro sinal<br /><em>ao próximo passo.</em></h2></div>
          </div>
          <div className="service-list">
            {services.map((service) => <article className="service-item" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><span className="service-arrow" aria-hidden="true">↗</span></article>)}
          </div>
        </section>

        <section className="field-section" id="campo" aria-labelledby="field-title">
          <div className="shell field-layout">
            <div className="field-copy"><p className="eyebrow light">04 / 04 · Referência visual</p><h2 id="field-title">A lavoura fala em camadas. <em>A gente ajuda a ler.</em></h2><p>Fotografias documentais de áreas agrícolas brasileiras entram aqui para criar contexto e aproximar a conversa do campo.</p><a className="text-link light-link" href="#principios">Continuar a leitura <span aria-hidden="true">↓</span></a></div>
            <div className="field-gallery"><ImageFrame src={images.harvest} srcSet={images.harvestSrcSet} width="900" height="643" alt="Lavoura de soja durante colheita em Rondonópolis, Mato Grosso" label="Rondonópolis · MT" caption="Foto documental, não vinculada à AGIJ FERT." /><ImageFrame src={images.satellite} srcSet={images.satelliteSrcSet} width="900" height="434" alt="Imagem aérea de áreas agrícolas em Primavera do Leste, Mato Grosso" label="Primavera do Leste · MT" caption="Imagem territorial, não vinculada à AGIJ FERT." /></div>
          </div>
        </section>

        <section className="principles-section shell section-pad" id="principios" aria-labelledby="principles-title">
          <div className="section-heading"><p className="eyebrow">Como pensamos</p><h2 id="principles-title">Técnica que cabe<br /><em>na conversa.</em></h2></div>
          <div className="principles-grid">{principles.map(([number, title, text]) => <article className="principle" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>

        <section className="cta-section shell section-pad"><div className="cta-panel"><div><p className="eyebrow light">Próximo passo</p><h2>Quer olhar para a próxima decisão com mais clareza?</h2></div><a className="button button-gold" href={whatsappUrl} target="_blank" rel="noreferrer">Falar pelo WhatsApp <span aria-hidden="true">↗</span></a></div></section>
      </main>
      <footer className="site-footer"><div className="shell footer-grid"><div><img className="footer-logo" src={images.logo} alt="AGIJ FERT" /><p className="footer-note">Fertilidade do solo e consultoria agro.</p></div><div><p className="footer-label">Contato</p><p><a href={whatsappUrl} target="_blank" rel="noreferrer">(66) 99651-2455 · WhatsApp</a><br /><a href="mailto:gustavoaraujosilva983@gmail.com">gustavoaraujosilva983@gmail.com</a></p></div><div><p className="footer-label">Imagem</p><p>Fotografias documentais com créditos completos em <a href="/CREDITOS-IMAGENS.md">CREDITOS-IMAGENS.md</a>.</p></div></div><div className="shell footer-bottom"><span>© AGIJ FERT</span><span>Fertilidade do solo e consultoria agro</span></div></footer>
      {modalOpen && <ContactModal onClose={closeModal} />}
    </div>
  )
}
