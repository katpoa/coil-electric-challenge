import React from 'react';
import styled from 'styled-components';
import Square from './Square.jsx';

// const Container = styled.div`

// `;

const Table = styled.table`
  border-collapse: collapse; 
  font-family: Calibri, sans-serif;
`;

const Tbody = styled.tbody`
  border: solid medium;
`;

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

const Board = ({ board, editSquare }) => {

  const tableRow = (array, starter) => (
    array.map((square, index) => {
      if (square === 0) {
        return <Square key={index + starter} id={index + starter} value={square} editSquare={editSquare}/>;
      }
      return <Td key={index + starter} id={index + starter}>{square}</Td>;
    })
  );

  return (
    <div>
      <Table>
        <caption>Sudoku of the day</caption>
        <Tbody>
          <tr>
            {tableRow(board.slice(0, 9), 0)}
          </tr>
          <tr>
            {tableRow(board.slice(9, 18), 9)}
          </tr>
          <tr>
            {tableRow(board.slice(18, 27), 18)}
          </tr>
        </Tbody>
        <Tbody>
          <tr>
            {tableRow(board.slice(27, 36), 27)}
          </tr>
          <tr>
            {tableRow(board.slice(36, 45), 36)}
          </tr>
          <tr>
            {tableRow(board.slice(45, 54), 45)}
          </tr>
        </Tbody>
        <Tbody>
          <tr>
            {tableRow(board.slice(54, 63), 54)}
          </tr>
          <tr>
            {tableRow(board.slice(63, 72), 63)}
          </tr>
          <tr>
          {tableRow(board.slice(72), 72)}
          </tr>
        </Tbody>
      </Table>
    </div>
  );
}

export default Board;
