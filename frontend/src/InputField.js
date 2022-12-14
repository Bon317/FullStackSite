import React from 'react';

class InputField extends React.Component {

  render() {  
    return (
      <div className="inputField">
          
          <input
            className='input'
            type={this.props.type}
            placeholer={this.props.placeholder}
            value={this.props.value}
            onChange={ (e) => this.props.onChange(e.target.value) }
            />

      </div>
    );
  }
}

export default InputField;