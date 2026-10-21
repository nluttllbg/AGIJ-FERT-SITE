import { images } from '../assets.js'

export default function Hero({ whatsappUrl }) {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        <img src={images.hero} alt="" fetchPriority="high" decoding="async" />
      </div>
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-content shell">
        <p className="eyebrow light"><span className="eyebrow-dot" /> AGIJ FERT · [PROVISÓRIO — substituir região]</p>
        <h1 id="hero-title">Solo bem lido.<br /><em>Decisão mais fértil.</em></h1>
        <p className="hero-lede">[PROVISÓRIO — substituir] Consultoria agro para transformar sinais do solo e da lavoura em próximos passos mais seguros.</p>
        <div className="hero-actions">
          <a className="button button-gold" href={whatsappUrl} target="_blank" rel="noreferrer">Falar pelo WhatsApp <span aria-hidden="true">↗</span></a>
          <a className="text-link light-link" href="#metodo">Conhecer o método <span aria-hidden="true">↓</span></a>
        </div>
        <p className="image-note">Foto documental: Marcelo Camargo/Agência Brasil · CC BY 3.0 BR · Brasnorte, MT. Não representa a AGIJ FERT.</p>
      </div>
      <div className="hero-index" aria-hidden="true">01 / 04</div>
    </section>
  )
}
