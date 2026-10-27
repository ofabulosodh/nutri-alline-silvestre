import Image from 'next/image';
import type { ReactNode } from 'react';
import {
  ArrowRight, ArrowUpRight, CalendarDays, Check, ChevronDown, Clock3,
  Heart, Instagram, Leaf, MapPin, MessageCircle, ScanLine, Sparkles,
  Stethoscope, Waves,
} from 'lucide-react';

const PHONE = '5544997419269';
const whatsapp = (message: string) => `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
const consultationLink = whatsapp('Olá! Gostaria de agendar uma consulta com a nutricionista Alline Silvestre.');
const programLink = whatsapp('Olá! Gostaria de saber mais sobre o acompanhamento nutricional de 3 meses com a Alline Silvestre.');
const informationLink = whatsapp('Olá! Gostaria de tirar uma dúvida sobre os atendimentos da Alline Silvestre.');
const instagramLink = 'https://www.instagram.com/nutriallinesilvestre/';
const mapLink = 'https://www.google.com/maps/search/?api=1&query=Rua+Piau%C3%AD+3377+Zona+02+Umuarama+PR';

const specialities = [
  { title: 'Saúde intestinal', description: 'Atenção aos desconfortos digestivos, distensão abdominal e alterações do funcionamento intestinal.', icon: Waves, tag: 'Foco principal' },
  { title: 'Lipedema', description: 'Estratégias nutricionais individualizadas como parte de um cuidado integral e interdisciplinar.', icon: Heart },
  { title: 'Intolerância à histamina', description: 'Orientação alimentar criteriosa, a partir da avaliação dos sintomas e do histórico individual.', icon: Sparkles },
  { title: 'Ativação mastocitária', description: 'Acompanhamento nutricional personalizado, integrado ao cuidado e à avaliação médica.', icon: Stethoscope },
  { title: 'Nutrição anti-inflamatória', description: 'Escolhas alimentares adaptadas ao seu organismo, às necessidades e à rotina.', icon: Leaf },
  { title: 'Saúde da mulher', description: 'Cuidado nutricional em diferentes fases da vida adulta, incluindo a gestação.', icon: Heart },
];

const faqs = [
  { question: 'Como funciona a primeira consulta?', answer: 'Ela dura aproximadamente 1h30. A Alline investiga sintomas, histórico e hábitos, define a conduta nutricional e elabora o plano alimentar durante a consulta.' },
  { question: 'Posso ser atendida online?', answer: 'Sim. Há atendimento online e presencial na Clínica Magnem, em Umuarama (PR).' },
  { question: 'A consulta inclui retorno?', answer: 'Não existe uma consulta de retorno específica. As consultas seguintes têm duração aproximada de uma hora e são agendadas conforme a necessidade.' },
  { question: 'O que está incluso no acompanhamento trimestral?', answer: 'O pacote oferece acompanhamento ao longo de três meses. Quantidade de consultas, condições e serviços incluídos devem ser confirmados diretamente com a clínica antes da contratação.' },
  { question: 'É feita avaliação por bioimpedância?', answer: 'A Clínica Magnem dispõe de bioimpedância InBody 120, quando indicada no atendimento presencial. A equipe confirma os detalhes no agendamento.' },
  { question: 'Como funciona a reserva do horário?', answer: 'A equipe informa pelo WhatsApp as condições de reserva, as opções de pagamento e as regras de reagendamento antes da confirmação da consulta.' },
  { question: 'Quem pode ser atendido?', answer: 'O atendimento é voltado a adultos, incluindo gestantes. A profissional informou que não atende crianças, pacientes oncológicos ou casos que demandem cuidado nutricional específico para doença renal.' },
];

function WhatsappIcon({ size = 21 }: { size?: number }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" fill="none">
    <path fill="currentColor" d="M16 2.67C8.65 2.67 2.67 8.64 2.67 16c0 2.38.63 4.71 1.83 6.77L2.67 29.33l6.72-1.76A13.27 13.27 0 0 0 16 29.33c7.35 0 13.33-5.98 13.33-13.33C29.33 8.64 23.35 2.67 16 2.67Zm0 24.24c-2.04 0-4.04-.55-5.78-1.6l-.42-.25-3.99 1.05 1.07-3.9-.27-.45a10.89 10.89 0 0 1-1.67-5.76C4.94 9.9 9.9 4.94 16 4.94S27.06 9.9 27.06 16 22.1 26.91 16 26.91Z"/>
    <path fill="currentColor" d="M22.27 18.46c-.35-.18-2.06-1.02-2.38-1.13-.32-.12-.55-.18-.79.17-.24.36-.91 1.13-1.11 1.36-.2.24-.41.27-.76.09-.35-.18-1.48-.54-2.82-1.72-1.04-.93-1.75-2.08-1.95-2.43-.21-.36-.02-.55.15-.73.16-.16.35-.41.53-.62.18-.21.24-.36.35-.59.12-.24.06-.45-.03-.62-.09-.18-.79-1.9-1.08-2.6-.28-.68-.57-.59-.79-.6h-.67c-.23 0-.61.09-.94.45-.32.36-1.23 1.2-1.23 2.94 0 1.73 1.26 3.4 1.44 3.64.17.23 2.48 3.79 6.01 5.31.84.36 1.49.58 2 .74.84.27 1.6.23 2.2.14.67-.1 2.06-.84 2.35-1.65.29-.81.29-1.5.2-1.65-.08-.14-.32-.23-.67-.41Z"/>
  </svg>;
}

function Action({ children, href = consultationLink, variant = 'primary', icon = true, className = '' }: { children: ReactNode; href?: string; variant?: 'primary' | 'outline' | 'light'; icon?: boolean; className?: string }) {
  return <a href={href} className={`action action-${variant} ${className}`} target="_blank" rel="noopener noreferrer"><span>{children}</span>{icon && <WhatsappIcon size={20} />}</a>;
}

function Brand({ light = false }: { light?: boolean }) {
  // Identidade apenas tipográfica até a aprovação do logotipo definitivo.
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#inicio" aria-label="Alline Silvestre, voltar ao início">
    <span className="brand-copy"><strong>Alline Silvestre</strong><small>NUTRICIONISTA FUNCIONAL <span aria-hidden="true">·</span> CRN 7793</small></span>
  </a>;
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: ReactNode; description?: string }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

export default function Home() {
  return <>
    <div className="top-strip"><div className="container strip-inside"><span>Clínica Magnem · Umuarama, PR</span><span>Atendimentos presenciais e online</span></div></div>
    <header className="header" id="inicio"><div className="container header-inner">
      <Brand />
      <nav className="desktop-nav" aria-label="Navegação principal"><a href="#sobre">Sobre</a><a href="#especialidades">Especialidades</a><a href="#metodologia">Meu atendimento</a><a href="#consultas">Consultas e acompanhamento</a></nav>
      <a className="header-appointment" href={consultationLink} target="_blank" rel="noopener noreferrer"><WhatsappIcon size={18}/> Agendar consulta</a>
      <details className="mobile-menu"><summary aria-label="Abrir menu"><span></span><span></span><span></span></summary><nav aria-label="Navegação mobile"><a href="#sobre">Sobre a Alline</a><a href="#especialidades">Especialidades</a><a href="#metodologia">Meu atendimento</a><a href="#consultas">Consultas e acompanhamento</a><a href="#contato">Contato</a></nav></details>
    </div></header>

    <main>
      <section className="hero"><div className="container hero-grid"><div className="hero-copy">
        <span className="eyebrow hero-eyebrow"><span className="eyebrow-dot"/> NUTRIÇÃO FUNCIONAL PERSONALIZADA</span>
        <h1>Nutrição que olha <span>além dos sintomas.</span></h1>
        <p>Saúde intestinal, lipedema e equilíbrio do organismo com investigação cuidadosa, conhecimento científico e um plano feito para a sua realidade.</p>
        <div className="hero-actions"><Action className="hero-main-action">Quero agendar uma consulta</Action><a className="link-arrow" href="#sobre">Conheça meu trabalho <ArrowRight size={19}/></a></div>
        <div className="hero-proof"><span><Check size={16}/> 12 anos de atuação</span><i/><span><Check size={16}/> Presencial e online</span></div>
      </div><div className="hero-media"><div className="hero-photo"><Image src="/alline-preto.webp" alt="Alline Silvestre sorrindo, usando uma blusa preta em seu consultório" fill quality={90} priority sizes="(max-width: 860px) 100vw, 46vw" /></div></div></div></section>

      <section className="trust-band"><div className="container trust-grid"><div className="trust-item"><span className="trust-icon"><Clock3 size={23}/></span><div><strong>Tempo para ouvir</strong><p>Primeira consulta de aproximadamente 1h30</p></div></div><div className="trust-item"><span className="trust-icon"><Leaf size={23}/></span><div><strong>Conduta individualizada</strong><p>Planejamento pensado para sua realidade</p></div></div><div className="trust-item"><span className="trust-icon"><MessageCircle size={23}/></span><div><strong>Acompanhamento próximo</strong><p>Recursos como Dietobox e WhatsApp</p></div></div></div></section>

      <section className="section specialties" id="especialidades"><div className="container">
        <div className="section-top"><SectionHeading eyebrow="ÁREAS DE ATUAÇÃO" title={<>Seu organismo é único. <span>Seu cuidado também.</span></>} /><p>Uma abordagem personalizada para compreender as necessidades do seu corpo e encontrar estratégias nutricionais que façam sentido para você.</p></div>
        <div className="specialty-grid">{specialities.map(({title,description,icon: Icon,tag}) => <article className={`specialty-card ${tag ? 'specialty-card-main' : ''}`} key={title}>
          <div className="specialty-card-top"><span className="specialty-icon"><Icon size={23} strokeWidth={1.65}/></span>{tag && <span className="specialty-tag">{tag}</span>}</div>
          <h3>{title}</h3><p>{description}</p><span className="specialty-line"/>
        </article>)}</div>
        <p className="specialty-footnote">A orientação nutricional integra o cuidado em saúde e não substitui avaliação, diagnóstico ou tratamento médico quando necessários.</p>
      </div></section>

      <section className="section about" id="sobre"><div className="container about-grid">
        <div className="about-media"><div className="about-photo"><Image src="/alline-branco.webp" alt="Alline Silvestre usando blusa branca, sentada em seu consultório" fill quality={90} sizes="(max-width: 880px) 100vw, 43vw" /></div></div>
        <div className="about-text"><span className="eyebrow">MUITO PRAZER, SOU ALLINE</span><h2>Antes de pensar em uma dieta, <span>quero entender você.</span></h2>
          <p className="about-lead">Acredito que a nutrição precisa fazer sentido na vida real.</p>
          <p>Sou Alline Silvestre, nutricionista funcional com 12 anos de experiência. Meu trabalho se concentra especialmente na saúde intestinal, no lipedema e em questões relacionadas à inflamação, intolerância à histamina e ativação mastocitária.</p>
          <p>Tenho pós-graduações em Nutrição Clínica, Fitoterapia, Nutrição Esportiva, Funcional e Ortomolecular. Uno atualização profissional, investigação cuidadosa e orientações construídas de forma individualizada.</p>
          <div className="about-features"><div><Check size={17}/><span>Escuta atenta e investigação de sintomas</span></div><div><Check size={17}/><span>Plano alimentar criado na consulta</span></div><div><Check size={17}/><span>Orientações ajustadas à rotina</span></div></div>
          <a className="link-arrow link-burgundy" href={informationLink} target="_blank" rel="noopener noreferrer">Saiba mais sobre o atendimento <ArrowUpRight size={19}/></a>
        </div>
      </div></section>

      <section className="process" id="metodologia"><div className="container"><div className="process-intro"><SectionHeading eyebrow="COMO FUNCIONA" title={<>Um plano construído <span>com você, não para você.</span></>} /><p>Sem fórmulas prontas. Cada etapa parte da sua história, dos seus sintomas e do que é possível na sua rotina.</p></div>
        <div className="process-grid"><article><span className="process-number">01</span><span className="process-icon"><Stethoscope size={24}/></span><h3>Entender</h3><p>Investigação aprofundada de sinais, sintomas, hábitos e histórico de saúde.</p></article><article><span className="process-number">02</span><span className="process-icon"><Leaf size={24}/></span><h3>Personalizar</h3><p>Conduta nutricional e plano alimentar elaborados na consulta, pensando no seu cotidiano.</p></article><article><span className="process-number">03</span><span className="process-icon"><MessageCircle size={24}/></span><h3>Acompanhar</h3><p>Contato via WhatsApp e recursos como Dietobox, conforme as condições do atendimento.</p></article></div>
        <div className="process-note"><ScanLine size={19}/><span>Bioimpedância InBody 120 disponível na clínica para avaliações presenciais, quando indicada. Confirme as condições no agendamento.</span></div>
      </div></section>

      <section className="section booking" id="consultas"><div className="container"><div className="booking-intro"><SectionHeading eyebrow="CONSULTAS E ACOMPANHAMENTO" title={<>Invista em um cuidado que <span>faz sentido para você.</span></>} /><p>Atendimento individualizado, presencialmente na Clínica Magnem ou online.</p></div>
        <div className="pricing-grid">
          <article className="price-card"><div className="price-head"><span>ATENDIMENTO INDIVIDUAL</span><CalendarDays size={21}/></div><h3>Consulta nutricional</h3><p className="price-intro">Um encontro completo para investigar suas necessidades e definir seus próximos passos.</p><ul><li><Check size={17}/> Primeira consulta de aproximadamente 1h30</li><li><Check size={17}/> Consultas seguintes de cerca de 1 hora</li><li><Check size={17}/> Plano alimentar preparado na consulta</li><li><Check size={17}/> Acesso ao plano pelo Dietobox</li></ul><Action className="price-button">Agendar consulta individual</Action><p className="price-note">Valores e condições de pagamento são informados pela equipe pelo WhatsApp.</p></article>
          <article className="price-card price-featured"><div className="price-head"><span>ACOMPANHAMENTO CONTÍNUO</span><Sparkles size={21}/></div><h3>Programa de 3 meses</h3><p className="price-intro">Para quem deseja dar continuidade ao cuidado nutricional de forma planejada.</p><ul><li><Check size={17}/> Acompanhamento nutricional por 3 meses</li><li><Check size={17}/> Conduta individualizada ao longo do processo</li><li><Check size={17}/> Orientações pensadas para sua rotina</li><li><Check size={17}/> Detalhes e número de consultas informados pela clínica</li></ul><Action className="price-button" variant="light" href={programLink}>Conhecer o programa</Action><p className="price-note">Consulte a equipe pelo WhatsApp para conhecer as condições e opções de pagamento.</p></article>
        </div>
      </div></section>

      <section className="section faq" id="duvidas"><div className="container faq-grid"><div className="faq-intro"><SectionHeading eyebrow="PERGUNTAS FREQUENTES" title={<>Suas dúvidas <span>merecem atenção.</span></>} /><p>Algumas respostas para você se sentir mais segura antes de agendar sua consulta.</p><a href={informationLink} target="_blank" rel="noopener noreferrer" className="link-arrow link-burgundy">Ainda tem uma dúvida? <ArrowUpRight size={19}/></a></div><div className="faq-items">{faqs.map((item,index) => <details key={item.question} className="faq-item" open={index===0}><summary><span>{item.question}</span><ChevronDown size={21}/></summary><p>{item.answer}</p></details>)}</div></div></section>

      <section className="contact" id="contato"><div className="container contact-grid"><div className="contact-heading"><span className="eyebrow">VAMOS CONVERSAR?</span><h2>Seu cuidado pode <span>começar por aqui.</span></h2><p>Atendimento acolhedor e personalizado, com tempo para ouvir suas necessidades.</p><Action variant="light">Falar com a Alline pelo WhatsApp</Action></div><div className="contact-info"><div><MapPin size={22}/><p><span>ATENDIMENTO PRESENCIAL</span><strong>Clínica Magnem</strong><small>Rua Piauí, 3377 · Zona 02<br/>Umuarama, Paraná</small><a href={mapLink} target="_blank" rel="noopener noreferrer">Como chegar <ArrowUpRight size={16}/></a></p></div><div><Clock3 size={22}/><p><span>HORÁRIO DE ATENDIMENTO</span><strong>Segunda a sexta, à tarde</strong><small>Consultas presenciais e online</small></p></div><div><WhatsappIcon size={22}/><p><span>AGENDAMENTO</span><strong>(44) 99741-9269</strong><a href={consultationLink} target="_blank" rel="noopener noreferrer">Enviar mensagem <ArrowUpRight size={16}/></a></p></div></div></div></section>
    </main>
    <footer className="footer"><div className="container footer-top"><Brand light/><p>Nutrição funcional com individualidade, ciência e escuta.</p><a className="instagram-link" href={instagramLink} target="_blank" rel="noopener noreferrer" aria-label="Visitar Instagram @nutriallinesilvestre"><Instagram size={20}/></a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Alline Silvestre · CRN 7793</span><span>Umuarama, Paraná</span><a href="/privacidade">Privacidade</a></div></footer>
    <a className="float-whatsapp" href={consultationLink} target="_blank" rel="noopener noreferrer" aria-label="Agendar consulta pelo WhatsApp"><span className="float-whatsapp-icon"><WhatsappIcon size={22}/></span><span className="float-whatsapp-label">Agendar consulta</span></a>
  </>;
}
