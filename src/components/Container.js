

const Container = ({width, children }) => {

const style = {
    margin: '0px auto 0px auto',
    display: 'flex', 
    flexDirection: 'column', 
    alignContent: 'center',
    height: '100%',
    width: width,
}

    return <div style={style}>{children}</div>

} 

export default Container