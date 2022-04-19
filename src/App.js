import React from "react";
import { Button } from 'antd';
import './App.less'

function App() {
  return (
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
      </div>
  );
}

export default App;
//
// import { Button } from 'antd';
//
// ReactDOM.render(
// ,
//     mountNode,
// );
