import React, { Component } from 'react';
import styled from 'styled-components';
import { ExampleData } from '../data/Data';

const Suggestions = styled.div`
  transition: all 0.75s;
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

class ExampleList extends Component {
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
    );
  }
}

export default ExampleList;
