class FontChooser extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
			buttonsHidden: true
		}
    }
	
	componentWillMount() {

		let min = Number(this.props.min);
		let max = Number(this.props.max);
		let size = Number(this.props.size);

		if (min < 1) {
			min = 1
		}
		if (min > max) {
			max = min;
		}
		if (size < min) {
			size = min;

		}
		if (size > max) {
			size = max;
		}

		this.setState({
			bold: this.props.bold === 'false' ? false : true,
			fontSize: size,
			min: min,
			max: max
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
		if (this.state.fontSize != this.state.min) {
			this.setState({
				fontSize: this.state.fontSize - 1
			})
		}
	}

	increaseFontSize() {
		if (this.state.fontSize != this.state.max) {
			this.setState({
				fontSize: this.state.fontSize + 1
			})
		}
	}

	toDefaultSize() {
		this.setState({
			fontSize: Number(this.props.size)
		})
	}

    render() {
		
		const style = {
			fontWeight: this.state.bold ? 'bold' : 'normal',
			fontSize: this.state.fontSize
		}

		const fontSizeSpanStyle = {
			color: this.state.fontSize == this.state.min || this.state.fontSize == this.state.max ? 'red' : 'black'
		}

		return(
	       <div>
	       <input type="checkbox" id="boldCheckbox" hidden={this.state.buttonsHidden} checked={this.state.bold} onChange={this.makeBold.bind(this)}/>
	       <button id="decreaseButton" hidden={this.state.buttonsHidden} onClick={this.decreaseFontSize.bind(this)}>-</button>
	       <span id="fontSizeSpan" hidden={this.state.buttonsHidden} style={fontSizeSpanStyle} onDoubleClick={this.toDefaultSize.bind(this)}>{this.state.fontSize}</span>
	       <button id="increaseButton" hidden={this.state.buttonsHidden} onClick={this.increaseFontSize.bind(this)}>+</button>
	       <span id="textSpan" style={style} onClick={this.handleClick.bind(this)}>{this.props.text}</span>
	       </div>
		);
    }
}

