import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Header from '../components/header'
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import WitcherProj from "../images/WitcherProjectItem.png";
import BradescoProj from "../images/bradescoProjectItem.png";
import OPDTProj from "../images/opdtProjectItem.png";

const MainProject = ({className, children}) => {
  const {desktop} = useStaticQuery(graphql`
      query{
        desktop: file(relativePath: { eq: "fordAMHomeProject.png" }) {
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

const IndexPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     fordMobilityFeat: file(relativePath: { eq: "fordAMHomeProject.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1080) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)
  return(
    <React.Fragment>
      <Header />
      <SEO title="Home" />
      <MainProject className={"mainProjectSection"}>
        <h3 style={{fontWeight: 400}}>Projeto em Destaque</h3>
        <header>
            <h5 style={{textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: 3, fontWeight: 800, marginBottom: 5}}>Mobile / Web · <span style={{fontWeight: 300}}>18 Awards</span></h5>
            <h1 style={{fontSize: '3em', marginTop: 0, borderBottom: '1px solid #ffffff22', width: '32%'}}>Accessibility Mat</h1>
        </header>
            
      </MainProject>
          <main style={{
              padding: '2em'
          }}>
              <h3 style={{fontWeight: 400}}>Outros projetos em destaque</h3>
              <section className="homeFeatProjects" style={{display: 'flex', justifyContent: 'space-around', }}>
                  {
                      [{
                          client: 'Netflix',
                          name: 'Witcher Quiz',
                          bgImage: WitcherProj,
                          category: 'Game'
                      },
                      {
                          client: 'P&G',
                          name: 'O Poder do Toque',
                          bgImage: OPDTProj,
                          category: 'Game',
                      },
                      {
                          client: 'Bradesco',
                          name: 'As Cores do Natal',
                          bgImage: BradescoProj,
                          category: 'App Mobile',
                      },
                      ].map(el => (
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
                      ))
                  }
                  
              </section>
          </main>
          <footer style={{height: 50, borderTop: '1px solid #ffffff33'}}>

          </footer>
    </React.Fragment>
  )
}

export default IndexPage
