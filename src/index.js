import React from 'react';
import ReactDom from 'react-dom';
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

class Main extends React.Component{
    render() {
        return (
          <div>
            <Button
              variant="primary"
            >
              Button
            </Button>
          </div>
        )
    }
}

ReactDom.render(<Main />, document.getElementById("app"))

