import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <img
        src="/zeit-and-notion.png"
        height="85"
        width="250"
        alt="ZEIT + Notion"
      />
      <h1>Hi, this is Veronica</h1>
      <h2>I just created this personal blog using Next.js + Notion</h2>

      <Features />

      <div className="explanation">
        <p>
          This is a statically generated{' '}
          <ExtLink href="https://nextjs.org">Next.js</ExtLink> site with a{' '}
          <ExtLink href="https://notion.so">Notion</ExtLink> powered blog that
          is deployed with <ExtLink href="https://zeit.co">ZEIT</ExtLink>.
        </p>
        <h3>
          Head over to the <ExtLink href="blog">blog</ExtLink> to check out the
          latest posts, or learn more about{' '}
          <ExtLink href="https://veronica.fyi">the author</ExtLink>.
        </h3>
      </div>
    </div>
  </>
)
