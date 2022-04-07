import Title from '../src/components/title/Title'
import Subtitle from '../src/components/subtitle/Subtitle'
import Head from 'next/head'


function HomePage (){
    return (
        <>
            <Head>
                <title>Teste Titulo Title Especifico, diferente do padrão Home Page</title>
            </Head>
            <div>
                
                <Title text="Um Texto" />
                <Subtitle text="Subbb1"   />

                <Title text="Um Texto"></Title>
                <Subtitle/>

            </div>
            
        </>
    )
}

export default HomePage
