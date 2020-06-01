import React from 'react';
import Header from '../components/header'
import { Link, useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import WitcherProj from "../images/WitcherProjectItem.png";
import BradescoProj from "../images/bradescoProjectItem.png";
import SEO from "../components/seo"
import {navigate} from '@reach/router'
import FordProj from "../images/accessibilityMatProjectItem.png";

const HeroPicture = ({className, children}) => {
    const {desktop} = useStaticQuery(graphql`
        query{
          desktop: file(relativePath: { eq: "sf.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          } 
        }
      `)
        const ImageData = desktop.childImageSharp.fluid
        return(
          <BackgroundImage
            Tag="div"
            className={className}
            fluid={ImageData}
            backgroundColor={`#000`}
          >
            {children}
          </BackgroundImage>
        )
  }


export const LinkedInIcon = props => (
  <svg width={14.789} height={14.134} viewBox="0 0 14.789 14.134" {...props}>
    <path
      d="M3.36 280.592v9.541H.183v-9.541zm.2-2.946a1.524 1.524 0 01-.486 1.175 1.814 1.814 0 01-1.3.472h-.022a1.738 1.738 0 01-1.271-.472A1.578 1.578 0 010 277.646a1.551 1.551 0 01.5-1.179A1.812 1.812 0 011.791 276a1.761 1.761 0 011.281.467 1.606 1.606 0 01.49 1.179zm11.226 7.019v5.469h-3.165v-5.1a2.785 2.785 0 00-.39-1.584 1.37 1.37 0 00-1.218-.573 1.559 1.559 0 00-1.013.33 2.048 2.048 0 00-.611.823 2.328 2.328 0 00-.106.78v5.324H5.112q.019-3.842.019-6.229t-.01-2.85l-.01-.462H8.28v1.387h-.019a4.19 4.19 0 01.395-.539 4.106 4.106 0 01.544-.5 2.5 2.5 0 01.838-.419 3.817 3.817 0 011.1-.149 3.42 3.42 0 012.648 1.093 4.584 4.584 0 011.003 3.199z"
      transform="translate(0 -276)"
      fill="#fff"
      opacity={0.4}
    />
  </svg>
);

export const EmailIcon = props => (
  <svg width={15.27} height={11.998} viewBox="0 0 15.27 11.998" {...props}>
    <path
      d="M15.27 387.869v6.766A1.367 1.367 0 0113.907 396H1.363a1.313 1.313 0 01-.963-.4 1.313 1.313 0 01-.4-.963v-6.766a4.519 4.519 0 00.861.741q3.085 2.1 4.235 2.94.486.358.788.558a4.869 4.869 0 00.805.409 2.456 2.456 0 00.937.209h.017a2.456 2.456 0 00.937-.209 4.869 4.869 0 00.805-.409q.3-.2.788-.558 1.449-1.048 4.244-2.94a4.7 4.7 0 00.853-.743zm0-2.505a2.252 2.252 0 01-.418 1.287 4.051 4.051 0 01-1.04 1.048l-3.988 2.769-.362.26q-.277.2-.46.324t-.443.277a2.581 2.581 0 01-.49.23 1.354 1.354 0 01-.426.077h-.017a1.354 1.354 0 01-.426-.077 2.581 2.581 0 01-.49-.23q-.26-.153-.443-.277t-.46-.324l-.362-.26q-.775-.545-2.233-1.555T1.466 387.7a4.231 4.231 0 01-1-.984A1.99 1.99 0 010 385.551a1.72 1.72 0 01.354-1.108A1.217 1.217 0 011.363 384h12.544a1.375 1.375 0 011.363 1.363z"
      transform="translate(0 -384)"
      fill="#fff"
      opacity={0.4}
    />
  </svg>
);

const AboutPage = () => {
    return(
        <React.Fragment>
          <SEO title="Sobre"/>
          <Header />
            <HeroPicture className="heroImage">
              <div style={{
                  backgroundColor: 'rgba(38, 38, 38, 0.43)',
                  height: 50,
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: '2em',
                  paddingRight: '2em',
                  opacity: 1,
                  marginLeft: '-2em',
                  marginRight: '-2em',
                  marginTop: 0,
                  position: 'initial',
                  width: 'auto',
                  top: 0,
                  boxSizing: 'border-box',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.17)',
              }}
                className="aboutBar" 
              >
                  <a href="#" className="otherBackButton" onClick={() => navigate(-1)}>&lt;</a>
                  <h1 style={{margin: 0, fontWeight: 'bold', fontSize: '1.3em'}}>Sobre </h1>
                  <div></div>
              </div>
            </HeroPicture>
            <main style={{paddingLeft: '2em', paddingRight: '2em'}}>
              <article style={{marginLeft: 'auto', marginRight: 'auto', maxWidth: '700px', opacity: .7, fontWeight: 300, marginTop: 50}}>
                  <p>Saulo é um profissional orientado a resultados e conhecido pelo pensamento estratégico e busca constante por inovação. Durante sua formação profissionalizante em computação gráfica e acadêmica em engenharia da computação, trabalhou como profissional autônomo ou funcionário de microempresas, organizações internacionais sem fins lucrativos e startups nas áreas de publicidade e tecnologia. Participou do desenvolvimento e liderança de projetos para clientes e agências como: Netflix, Ford, Unilever, Procter &amp; Gamble, Bradesco, Caixa Econômica, Agência África, Publicis, J W Thompson e Aktuellmix.</p>
                  <p>Nos últimos quatro anos, atuou em projetos de localização de conteúdo e publicidade, produção e edição de vídeo, transmissão de conteúdo ao vivo em larga escala, e desenvolvimento de software como desenvolvedor e gerente de desenvolvimento. Atendeu demandas internas ou externas por meio de soluções tecnológicas existentes, implementação de processos ou criação e desenvolvimento de ferramentas internas para equipes de criação.</p>
                  <p>Possui experiência com JavaScript (vanilla e frameworks como React, NextJS, Gatsby, Nuxt e NodeJS), C#, Swift (iOS e watchOS), Python e a Adobe Creative Suite.</p>
              </article>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '50px', marginTop: 50, marginLeft: 'auto', marginRight: 'auto', }}>
                <a href="https://linkedin.com/in/saulo-freire" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
                <a href="mailto:saulo@freiretales.com"><EmailIcon /></a>
              </div>
            </main>

            <section className="homeFeatProjects" style={{display: 'flex', justifyContent: 'space-around', marginTop: 50, marginBottom: 50, padding: '2em' }}>
                  {
                      [{
                          client: 'Netflix',
                          name: 'Witcher Quiz',
                          bgImage: WitcherProj,
                          category: 'Game',
                          url: '/witcher-quiz',
                      },
                      {
                          client: 'Ford',
                          name: 'Accessibility Mat',
                          bgImage: FordProj,
                          category: 'Web / Mobile / IoT',
                          url: '/accessibility-mat'
                      },
                      {
                          client: 'Bradesco',
                          name: 'As Cores do Natal',
                          bgImage: BradescoProj,
                          category: 'Android / iOS',
                          url: '/as-cores-do-natal',
                      },
                      ].map(el => (
                        <Link to={el.url}>
                          <article style={{
                              backgroundColor: '#595959',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              borderRadius: 10,
                              padding: 10,
                              marginRight: 10,
                              backgroundImage: `url(${el.bgImage})`,
                              backgroundSize: 'cover',
                              backgroundRepeat: 'no-repeat',
                              }}
                              >
                              <header style={{borderBottom: '1px solid #ffffff11', width: '60%'}}>
                                  <h6 style={{width: 'auto', marginBottom: 0, fontWeight: 300, textTransform: 'uppercase'}}>{el.client}</h6>
                                  <h4 style={{width: 'auto', marginTop: 0, textTransform: 'uppercase', marginBottom: 3}}>{el.name}</h4>
                              </header>
                              <footer>
                                  <p style={{textTransform: 'uppercase', fontSize: '0.4rem', letterSpacing: 2, fontWeight: 600 }}>{el.category}</p>
                              </footer>
                          </article>
                        </Link>
                      ))
                  }
                  
              </section>

            <footer style={{height: 50, borderTop: '1px solid #ffffff33', textAlign: 'center', opacity: 0.7}}>
            <p>2020 &copy; Saulo Freire.</p>
          </footer>
        </React.Fragment>
    );
}

export default AboutPage;