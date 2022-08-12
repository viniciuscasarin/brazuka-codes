import Head from "next/head";
import SETTINGS from "../../../core/settings";

const Home = ({ title, description }) => {

    const getTitle = () => {
        return title ? 
            title : 
            `${SETTINGS.BLOG_NAME} - ${SETTINGS.BLOG_DESCRIPTION}`
    }

    const getDescription = () => {
        return description ? description : SETTINGS.BLOG_DESCRIPTION
    }

    return(
        <Head>
        <title>
          {getTitle()}
        </title>
        <meta name="description" content={getDescription()} />
      
        <meta property="og:type" content="website"/>
        <meta property="og:title" content={getTitle()}/>
        <meta property="og:description" content={getDescription()}/>
        <meta property="og:image" content={`${SETTINGS.BLOG_URL}/images/open-graph.png`}/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={getTitle()}/>
        <meta name="twitter:description" content={getDescription()}/>
        <meta name="twitter:image" content={`${SETTINGS.BLOG_URL}/images/open-graph.png`}/>
        <meta property="twitter:domain" content={SETTINGS.BLOG_DOMAIN}/>

        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico"/>
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <meta name="msapplication-TileColor" content="#009c3b"/>
        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#009c3b"/>

      </Head>
    )
}

export default Home;