import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import items from "../assets/items.yaml";

const Card = styled.div`
  background-color: ${props => props.bgColor}
  border-radius: 4px;
  color: ${props => props.fontColor};
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 24px;
  padding-bottom: 24px;
  margin: 4px;
  display: inline-block;
  font-family: sans-serif;
  max-width: 10rem;
  min-width: 8rem;

  h3 {
    margin-top: 0;
  }

  p {
    margin-bottom: 0;
  }
`;

const Item = ({
  title,
  description,
  image,
  link,
  bgColor,
  fontColor,
  emoji
}) => (
  <Card bgColor={bgColor} fontColor={fontColor}>
    <h3>
      {emoji}
      {title}
    </h3>
    <p>{description}</p>
  </Card>
);
const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
`;

const getCategoryItemProps = category => {
  switch (category) {
    case "success":
      return {
        bgColor: "#2ecc71",
        fontColor: "white",
        emoji: "👍"
      };
    case "failure":
      return {
        bgColor: "#e74c3c",
        fontColor: "white",
        emoji: "👎"
      };
    case "book":
      return {
        bgColor: "#ecf0f1",
        fontColor: "#2c3e50",
        emoji: "📚"
      };
    default:
      break;
  }
};

const App = () => {
  return (
    <Main>
      {items.map(({ title, description, category }, index) => (
        <Item
          key={index}
          description={description}
          title={title}
          {...getCategoryItemProps(category)}
        />
      ))}
    </Main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
