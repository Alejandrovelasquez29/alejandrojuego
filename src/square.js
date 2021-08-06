import react from "react" ;
class Square extends React.Component {
    render() {
        return(
            <button className="squeare">
                {this.props.value}
                </button>
                
            
        )
    }
}

export default Square;