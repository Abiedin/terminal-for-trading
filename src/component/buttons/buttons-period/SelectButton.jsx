import { styled } from '@mui/system';
import React from 'react';

const SelectButton = ({ children, selected, onClick }) => {
  const Select = styled('div')(() => ({
    border: '1px solid black',
    borderRadius: 2,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 7,
    paddingRight: 7,
    marginRight: 8,
    fontSize: 13, 
    fontFamily: 'Gill Sans',
    cursor:  'default',
    backgroundColor: selected ? '#dae6e6' : '',
    color: selected ? 'black' : '',
    transitionDuration: '0.4s',
    fontWeight: selected ? 500 : 500,
    '&:hover': {
      backgroundColor: '#dae6e6',
      color: 'black',
    },
  }));

  return (
    <Select onClick={onClick}>
      {children}
    </Select>
  );
};

export default SelectButton;
