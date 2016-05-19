import React, { PropTypes } from 'react';
import Select from 'hire-forms-select';
import Input from 'hire-forms-input';

class SelectCombo extends React.Component {
	state = {
		value: '',
	}

	handleChange = (value) => {
		this.setState({ value });
	}

	handleKeyDown = (ev) => {
		if (ev.keyCode === 13) {
			this.props.onChange(this.state.value);
			this.setState({
				value: '',
			});
			this.refs.select.hideOptions();
		}
	}

	render() {
		return (
			<Select {...this.props} ref="select">
				<Input
					onChange={this.handleChange}
					onKeyDown={this.handleKeyDown}
					placeholder={this.props.inputPlaceholder}
					style={{ width: '100%' }}
					value={this.state.value}
				/>
			</Select>
		);
	}
}
SelectCombo.propTypes = {
	inputPlaceholder: PropTypes.string,
	onChange: PropTypes.func,
};

SelectCombo.defaultProps = {
	inputPlaceholder: 'Add',
};

export default SelectCombo;
