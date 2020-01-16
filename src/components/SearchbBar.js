import React, { Component } from 'react';
import styled from 'styled-components';
import ExampleList from './List';

const Back = styled.div`
  width: 700px;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  padding: 50px 30px;
  box-sizing: border-box;
  border-radius: 20px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  flex: 1;
`;
const H1 = styled.span`
  font-size: 175%;
  color: #ffffff;
  margin-left: 8px;
`;
const Search = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  width: 97%;
  height: 90%;
  border-radius: 7px;
  padding-left: 10px;
  border: none;
`;
const SearchEx = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;
const SearchButton = styled.div`
  flex: 1;
`;
const Example = styled.span`
  font-size: 120%;
  padding-left: 5px;
  padding-top: 8px;
  vertical-align: middle;
  display: inline-block;
`;
const Window = styled.div`
  margin-top: 10px;
  max-height: 27px;
  flex: 1;
  overflow: hidden;
`;

const Button = styled.button`
  height: 95%;
  width: 25%;
  margin-left: 75%;
  border-radius: 7px;
  border: none;
  background-color: pink;
  font-size: 200%;
  color: #ffffff;
`;

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transY: 0
    };
  }

  render() {
    return (
      <Back>
        <Wrapper>
          <Header>
            <H1>WhereTo</H1>
          </Header>
          <Search>
            <Input placeholder="Where are traveling to? Enter your exact meeting address, office, or location for the best results"></Input>
          </Search>
          <SearchEx>
            <Example>Example: </Example>
            <Window>
              <ExampleList />
            </Window>
          </SearchEx>
          <SearchButton>
            <Button>Search</Button>
          </SearchButton>
        </Wrapper>
      </Back>
    );
  }
}

export default SearchBar;
