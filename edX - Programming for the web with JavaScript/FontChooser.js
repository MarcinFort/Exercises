class FontChooser extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
			buttonsHidden: true
		}
    }
	
	componentDidMount() {
		this.setState({
			bold: this.props.bold === 'false' ? false : true,
			fontSize: Number(this.props.size)
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

	decreaseFontSize() {
		this.setState({
			fontSize: this.state.fontSize - 1
		})
	}

	increaseFontSize() {
		this.setState({
			fontSize: this.state.fontSize + 1
		})
	}

    render() {
		
		const style = {
			fontWeight: this.state.bold ? 'bold' : 'normal',
			fontSize: this.state.fontSize
		}

		return(
	       <div>
	       <input type="checkbox" id="boldCheckbox" hidden={this.state.buttonsHidden} checked={this.state.bold} onChange={this.makeBold.bind(this)}/>
	       <button id="decreaseButton" hidden={this.state.buttonsHidden} onClick={this.decreaseFontSize.bind(this)}>-</button>
	       <span id="fontSizeSpan" hidden={this.state.buttonsHidden}>{this.state.fontSize}</span>
	       <button id="increaseButton" hidden={this.state.buttonsHidden} onClick={this.increaseFontSize.bind(this)}>+</button>
	       <span id="textSpan" style={style} onClick={this.handleClick.bind(this)}>{this.props.text}</span>
	       </div>
		);
    }
}

