import Title from '../src/components/title/Title'
import Subtitle from '../src/components/subtitle/Subtitle'



function HomePage (){
    return (
        <div>
            <Title text="Um Texto" />
            <Subtitle text="Subbb1"   />

            <Title text="Um Texto"></Title>
            <Subtitle/>
            
       
        </div>
    )
}

export default HomePage
