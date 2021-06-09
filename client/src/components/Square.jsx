import React from 'react';
import styled from 'styled-components';

const Td = styled.td`
  border: solid thin; 
  height: 1.4em; 
  width: 1.4em; 
  text-align: center; 
  padding: 0; 
  :nth-child(3n){
    border-right: 3px solid;
  }
`;

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id, value } = this.props;
    this.setState({
      id: id,
      value: value
    });
  }

  handleChange(e) {
    const { id, value } = this.state;
    const { editSquare } = this.props;
    this.setState({value: Number(e.target.value)}, () => editSquare(id, value) );
  }

  handleSubmit(e) {
    e.preventDefault();
    const { id, value } = this.state;
    const { editSquare } = this.props;
    editSquare(id, value);
  }

  render() {
    return(
      <Td>
        <form onSubmit={this.handleSubmit}>
          <select value={this.state.value} onChange={this.handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
        </form>
      </Td>
    );
  }
}

export default Square;