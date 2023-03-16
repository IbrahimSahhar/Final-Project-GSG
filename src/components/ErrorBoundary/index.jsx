import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1 style={style}>OOPS !! Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

const style = {
  width: "100%",
  height: "635px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgb(12 100 0)",
  color:"white"
};
