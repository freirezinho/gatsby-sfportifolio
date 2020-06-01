import React, {useState} from 'react'
import {graphql} from 'gatsby'
// import Layout from '../components/layout'
import SEO from "../components/seo"
import Header from '../components/header'
import { navigate } from '@reach/router';
import "../components/SinglePage.css";

export default function Project({data}) {
    const post = data.markdownRemark;
    const headings = post.headings.map(el => {
      if (el.depth === 2) {
        return el;
      }
    })
    const [hasScrolled, handleScroll] = useState(false)
    const stateRef = React.useRef(hasScrolled);

    const changeState = (val => {
      // console.log('VALOR: ' + val)
      // handleScroll(val)
      stateRef.current = val;
      handleScroll(val)
    });

    const barChanger = () => {
      // console.log('listening')
        const isTop = window.scrollY > 60;
        // console.log(isTop);
        // console.log(stateRef.current);
        if (isTop !== stateRef.current) {
          // console.log('isTop =/= hasScrolled')
          changeState(isTop)
        }
    }

    React.useEffect(() => {
      document.addEventListener('scroll', barChanger);

      return ()=> {
        document.removeEventListener('scroll', barChanger);
      }
    })
    return(
        <React.Fragment>
          <SEO title={post.frontmatter.title} />
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
              {
                stateRef.current ? <div /> : null
              }
              <div style={{
                  backgroundColor: 'rgba(38, 38, 38, 0.43)',
                  height: 50,
                  display: 'flex',
                  justifyContent:'space-between',
                  alignItems: 'center',
                  paddingLeft: '2em',
                  paddingRight: '2em',
                  opacity: 1,
                  marginLeft: '-2em',
                  marginRight: '-2em',
                  marginTop: !stateRef.current ? '-2em' : 0,
                  position: !stateRef.current ? 'initial' : 'fixed',
                  width: !stateRef.current ? 'auto' : '100%',
                  top: 0,
                  boxSizing: 'border-box',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.17)',
              }} className="topBar" >
                  <a 
                    href="#"
                    onClick={() => navigate(-1)}
                    className="backButton"
                  >&lt;</a>
                  <h3 style={{alignSelf: 'center', flex: 2, textAlign: 'center'}}>{post.frontmatter.title}</h3>
                  <div style={{display: 'flex', flex: 1}} className="projNav">{
                    headings.map((link, i) => (<a key={link.id} onClick={() => {
                      window.document.getElementById(link.id).scrollIntoView({behavior: 'smooth', block: 'center'})
                    }} style={{fontSize: '0.8em', textDecoration: 'none', cursor: 'pointer', paddingTop: 10, paddingBottom: 10, paddingLeft: 5, paddingRight: 5}}>{link.value}</a>))
                    }</div>
              </div>
              <div style={{opacity: 0.4}}>
                <h5 style={{textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: 3, fontWeight: 800, marginBottom: 5}}>{post.frontmatter.category}{ post.frontmatter.secondCategory !== null ? ( ` / ${post.frontmatter.secondCategory}`) : null}{
                post.frontmatter.awards ?
                (<span style={{fontWeight: 300}}> · {post.frontmatter.awardsNum} Awards</span> )
                :
                null
                }</h5>
                <h1 style={{fontSize: '3em', marginTop: 0, borderBottom: '1px solid #ffffff22', width: '35%'}}>{post.frontmatter.title}</h1>
              </div>
            </header>
            <main style={{paddingLeft: '2em', paddingRight: '2em', color: '#b2b2b2', fontWeight: 300, marginTop: 50}}>
              <div dangerouslySetInnerHTML={{__html: post.html}} />
              <footer style={{marginTop: 10, marginBottom: 30}}>
              <div style={{display: 'flex', border: '1px solid #fdd62b', maxWidth: 300, marginLeft: 'auto', marginRight: 'auto', alignItems: 'center', borderRadius: 10}}>
                <a 
                  href="maito:saulo.freire@freiretales.com"
                  style={{
                    textAlign: 'center',
                    flex: 1,
                    padding: '1em',
                    backgroundColor: '#fdd62b',
                    color: '#000',
                    // borderTopLeftRadius: 10,
                    // borderBottomLeftRadius: 10
                    borderRadius: 10,
                    }}
                >
                  <div>
                    Entre em contato
                  </div>
                </a>
                {/* <div style={{textAlign: 'center', flex: 1, padding: '1em', color: '#fdd62b'}}>
                  Share
                </div> */}
              </div>
              </footer>
            </main>
            <footer style={{height: 50, borderTop: '1px solid #ffffff33', textAlign: 'center', opacity: 0.7, paddingBottom: 50}}>
            <p>2020 &copy; Saulo Freire.</p>
          </footer>
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
          category
          secondCategory
          awards
          awardsNum
          featImage
      }
    }
  }
`