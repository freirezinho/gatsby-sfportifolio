import React, {useState} from 'react'
import {graphql, useStaticQuery} from 'gatsby'
// import Layout from '../components/layout'
import Header from '../components/header'
import BackgroundImage from 'gatsby-background-image'
import { navigate } from '@reach/router';


// const HeroPicture = ({className, children}) => {
//     const {desktop} = useStaticQuery(graphql`
//         query{
//           desktop: file(relativePath: { eq: "sf.jpg" }) {
//             childImageSharp {
//               fluid(quality: 90, maxWidth: 1920) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           } 
//         }
//       `)
//         const ImageData = desktop.childImageSharp.fluid
//         return(
//           <BackgroundImage
//             Tag="div"
//             className={className}
//             fluid={ImageData}
//             backgroundColor={`#000`}
//           >
//             {children}
//           </BackgroundImage>
//         )
//   }

export default function Project({data}) {
    const post = data.markdownRemark;
    const headings = post.headings.map(el => {
      if (el.depth === 2) {
        return el;
      }
    })
    const [hasScrolled, handleScroll] = useState(false)
    const changeState = (val => handleScroll(val));
    React.useEffect(() => {
      document.addEventListener('scroll', () => {
        console.log('listening')
        const isTop = window.scrollY < 100;
        console.log(isTop);
        console.log(hasScrolled);
        if (isTop !== hasScrolled) {
          console.log('isTop =/= hasScrolled')
          changeState(true)
        }
      });

      return ()=> {
        document.removeEventListener('scroll');
      }
    }, [])
    return(
        <React.Fragment>
          <Header />
            {/* <HeroPicture className="heroImage">
              <div style={{
                  backgroundColor: '#262626',
                  height: 50,
                  display: 'flex',
                  justifyContent:'space-between',
                  alignItems: 'center',
                  paddingLeft: '2em',
                  paddingRight: '2em',
                  opacity: 1,
              }} >
                  <a href="#" style={{color: "#fff", textDecoration: 'none'}}>Voltar</a>
                  <div></div>
              </div>
            </HeroPicture> */}
            <header
              className="mainProjectSection"
              style={{
                backgroundImage: `url(${post.frontmatter.featImage})`
              }}
            >
              <div style={{
                  backgroundColor: '#262626',
                  height: 50,
                  display: 'flex',
                  justifyContent:'space-between',
                  alignItems: 'center',
                  paddingLeft: '2em',
                  paddingRight: '2em',
                  opacity: 1,
                  marginLeft: '-2em',
                  marginRight: '-2em',
                  marginTop: '-2em',
                  position: !hasScrolled ? 'relative' : 'fixed',
                  width: '100%',
                  top: 0,
              }} className="topBar" >
                  <a 
                    href="#"
                    onClick={() => navigate(-1)}
                    style={{color: "#fff", textDecoration: 'none', flex: 1, paddingLeft: '2em', fontSize: '0.8em', }}
                  >Voltar</a>
                  <h3 style={{alignSelf: 'center', flex: 2, textAlign: 'center'}}>{post.frontmatter.title}</h3>
                  <div style={{display: 'flex', flex: 1}}>{
                    headings.map((link, i) => (<a key={link.id} onClick={() => {
                      window.document.getElementById(link.id).scrollIntoView({behavior: 'smooth', inline: 'nearest'})
                    }} style={{fontSize: '0.8em', marginRight: 5, textDecoration: 'none', cursor: 'pointer'}}>{link.value}</a>))
                    }</div>
              </div>
              <div style={{opacity: 0.2}}>
                <h5 style={{textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: 3, fontWeight: 800, marginBottom: 5}}>Mobile / Web · <span style={{fontWeight: 300}}>18 Awards</span></h5>
                <h1 style={{fontSize: '3em', marginTop: 0, borderBottom: '1px solid #ffffff22', width: '32%'}}>{post.frontmatter.title}</h1>
              </div>
            </header>
            <main style={{paddingLeft: '2em', paddingRight: '2em', opacity: .7, fontWeight: 300, marginTop: 50}}>
              <div dangerouslySetInnerHTML={{__html: post.html}} />
              <footer>
              <div style={{display: 'flex', border: '1px solid #fdd62b', maxWidth: 300, marginLeft: 'auto', marginRight: 'auto', alignItems: 'center', borderRadius: 10}}>
                <div style={{textAlign: 'center', flex: 1, padding: '1em', backgroundColor: '#fdd62b', color: '#000', borderTopLeftRadius: 10, borderBottomLeftRadius: 10}}>
                  Get in touch
                </div>
                <div style={{textAlign: 'center', flex: 1, padding: '1em', color: '#fdd62b'}}>
                  Share
                </div>
              </div>
              </footer>
            </main>
            
        </React.Fragment>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields:{
      slug: { eq: $slug }
      }) {
      html
      headings {
        depth
        id
        value
      }
      frontmatter{
          title
          featImage
      }
    }
  }
`