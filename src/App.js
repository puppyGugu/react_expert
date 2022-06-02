import React from "react";
import './App.css';
import styled from "styled-components";
// import { Route, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Main from "./Main";
import Add from "./Add";

// import {useDispatch} from "react-redux";
// Action Creators 값을 가져오기 위한 import(createBucket는 해당 파일의 함수명)
// import {createBucket} from "./redux/modules/bucket";

function App() {
  return (
    <div className="App">
      <Tit>단어장</Tit>
      <Route path="/" exact>
        <Main/>
      </Route>
      <Route path="/add">
        <Add/>
      </Route>
    </div>
  );
}

const Tit = styled.h1`
margin:0;
padding:16px 0;
border-bottom:1px solid #eee;
background-color:#000;
font-size:1.6em;
color:#fff;
`

export default App;
