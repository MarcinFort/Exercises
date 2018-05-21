class FontChooser extends React.Component {

    constructor(props) {
		super(props);
    }
    

    render() {
		
		const style = {
			fontWeight: this.props.bold === 'false' ? 'normal' : 'bold',
			fontSize: this.props.size
		}

		return(
	       <div>
	       <input type="checkbox" id="boldCheckbox" hidden='true'/>
	       <button id="decreaseButton" hidden='true'>-</button>
	       <span id="fontSizeSpan" hidden='true'>{this.props.size}</span>
	       <button id="increaseButton" hidden='true'>+</button>
	       <span id="textSpan" style={style}>{this.props.text}</span>
	       </div>
		);
    }
}

