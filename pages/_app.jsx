
import Head from 'next/head'


import '../src/styleGlobal.css'

function App({Component, pageProps}){

    return (
    <>
        <Head>
            <title>Titulo Padrão do Site</title>
        </Head>
        < Component {...pageProps} />
    </>
    )
   
}


export default App