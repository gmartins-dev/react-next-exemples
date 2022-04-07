// function Subtitle(props){
//     return(
//         <h4>
//             {props.text}
//         </h4>
//     )
// }

//PODE SE FAZER TBM USANDO DESTRUCTOR 
//FICA MAIS ENCHUTO/LIMPO O CODIGO:

function Subtitle({ text }){
    return(
        <h4>
            { text }
        </h4>
    )
}

//Adicionar uma propriedade Default para component

Subtitle.defaultProps = {
    text: 'Subtitulo Padrão'
}


export default Subtitle