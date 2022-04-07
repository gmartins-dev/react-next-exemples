import { useState } from 'react'
import Head from 'next/head'

import Title from '../src/components/title/Title'
import Subtitle from '../src/components/subtitle/Subtitle'
import Button from '../src/components/button/Button'




function HomePage (){

    //nome da variavel //função que altera a variavel
    const [click, setClick] = useState(0)
   
   
    const handleClick = () => {

        setClick(click + 1)
    }




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
                <Button
                    onClick = {handleClick}                    
                > 
                Botão Teste </Button>
                <p>Numero de clicks: {click} </p>
            </div>
            
        </>
    )
}

export default HomePage
