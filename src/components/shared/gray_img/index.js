import './style.css'

const GrayImg = (props) => {
    return(
        //sempre lembrar de utilizar "className" ao invés de "class" no React
        <img className={props.gray ? 'gray-img' : 'color-img'} src={props.img_url}></img>
    )
}

export default GrayImg;