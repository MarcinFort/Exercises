class FontChooser extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
			buttonsHidden: true
		}
    }
	
	handleClick() {
		this.setState({
			buttonsHidden: this.state.buttonsHidden ? false : true
		})
	}

    render() {
		
		const style = {
			fontWeight: this.props.bold === 'false' ? 'normal' : 'bold',
			fontSize: this.props.size
		}

		return(
	       <div>
	       <input type="checkbox" id="boldCheckbox" hidden={this.state.buttonsHidden} />
	       <button id="decreaseButton" hidden={this.state.buttonsHidden}>-</button>
	       <span id="fontSizeSpan" hidden={this.state.buttonsHidden}>{this.props.size}</span>
	       <button id="increaseButton" hidden={this.state.buttonsHidden}>+</button>
	       <span id="textSpan" style={style} onClick={this.handleClick.bind(this)}>{this.props.text}</span>
	       </div>
		);
    }
}

