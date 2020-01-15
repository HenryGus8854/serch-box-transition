import React from 'react';
import SearchBar from './components/SearchbBar';
import styled from 'styled-components';

const Div = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background: #232526;
  background: -webkit-linear-gradient(to right, #cd5c5c, #f08080);
  background: linear-gradient(to right, #cd5c5c, #f08080);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Div>
      <SearchBar />
    </Div>
  );
}

export default App;
