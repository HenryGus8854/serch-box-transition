import React, { Component } from 'react';
import styled from 'styled-components';
import { ExampleData } from '../data/Data';

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

const Suggestions = styled.div`
  transition: all 0.75s;
`;

const SearchButton = styled.div`
  flex: 1;
`;
const Li = styled.li`
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
`;
const ListBack = styled.div`
  display: flex;
  box-sizing: border-box;
`;

const ImgW = styled.div`
  box-sizing: border-box;
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const Img = styled.img`
  height: 25px;
  width: 25px;
`;
const SuggestionTextW = styled.div`
  flex: 20;
`;
const SuggestionText = styled.span`
  font-size: 120%;
  align-self: Right;
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
    this.tick = this.tick.bind(this);
  }
  tick(num) {
    const slides = ExampleData.length;
    const totalMove = slides * 26 - 26;
    const Num = num;
    if (Num < totalMove) {
      this.setState(prevState => ({ transY: prevState.transY + 26 }));
    } else this.setState({ transY: 0 });
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(this.state.transY), 3000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const styles = {
      transform: 'translateY(-' + this.state.transY + 'px)'
    };
    const examples = ExampleData;
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
              <Suggestions style={{ ...styles }}>
                {examples.map((model, index) => (
                  <div key={index}>
                    <Li>
                      <ListBack>
                        <ImgW>
                          <Img src={model.icon} />
                        </ImgW>
                        <SuggestionTextW>
                          <SuggestionText>{model.eName}</SuggestionText>
                        </SuggestionTextW>
                      </ListBack>
                    </Li>
                  </div>
                ))}
              </Suggestions>
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
