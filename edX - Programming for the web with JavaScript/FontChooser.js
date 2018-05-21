class FontChooser extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
			buttonsHidden: true
		}
    }
	
	componentDidMount() {
		this.setState({
			bold: this.props.bold === 'false' ? false : true
		})
	}

	handleClick() {
		this.setState({
			buttonsHidden: this.state.buttonsHidden ? false : true
		})
	}

	makeBold() {
		this.setState({
			bold: this.state.bold ? false : true
		})
	}

    render() {
		
		const style = {
			fontWeight: this.state.bold ? 'bold' : 'normal',
			fontSize: this.props.size
		}

		return(
	       <div>
	       <input type="checkbox" id="boldCheckbox" hidden={this.state.buttonsHidden} checked={this.state.bold} onChange={this.makeBold.bind(this)}/>
	       <button id="decreaseButton" hidden={this.state.buttonsHidden}>-</button>
	       <span id="fontSizeSpan" hidden={this.state.buttonsHidden}>{this.props.size}</span>
	       <button id="increaseButton" hidden={this.state.buttonsHidden}>+</button>
	       <span id="textSpan" style={style} onClick={this.handleClick.bind(this)}>{this.props.text}</span>
	       </div>
		);
    }
}

