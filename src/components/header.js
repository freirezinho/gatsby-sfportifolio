import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
// import AniLink from 'gatsby-plugin-transition-link/AniLink'

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

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "SFLogo.png" }) {
        childImageSharp {
          fixed(width: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return(
    <header className="App-header">
      <Link to="/"><Img fixed={data.placeholderImage.childImageSharp.fixed} /></Link>
      <nav>
          <ul style={{listStyle: 'none', display: 'flex', alignItems: 'center', textTransform: 'uppercase', fontSize: '0.8em', color: '#ffffff70'}}>
              <li style={{marginRight: 10}}><Link to="/" activeStyle={{color: '#fff', fontWeight: 700,}}>Portfólio</Link></li>
              <li style={{marginRight: 10}}><Link to="/about" activeStyle={{color: '#fff', fontWeight: 700,}}>Sobre</Link></li>
              <li style={{marginRight: 10}}><a href="https://linkedin.com/in/saulo-freire"><LinkedInIcon /></a></li>
              <li style={{marginRight: 10}}><a href="mailto:saulo@freiretales.com"><EmailIcon /></a></li>
          </ul>
      </nav>
    </header>
);
}
export default Header;