const Temp = (props) => {
    const items = props.gifs.map((itemData) => {
        console.log(itemData.url);
        return <Item url={itemData.url}  />
    })
    return(
        <div className='container_text'>
            {items}
        </div>
    )
    
}
const Item = (props) => {
    return(
        <div className='gif'>
            <img src={props.url} />
        </div>
    )
}
export default Temp;