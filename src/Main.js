import React from "react";
import styled from "styled-components";
// import { Route } from "react-router-dom";
import {useHistory} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

import {db} from "./firebase";
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { loadAddFB } from "./redux/modules/add";

const Main = (props) => {
    const history = useHistory();
    const add_list = useSelector((state) => state.add.list);
    
    const displatch = useDispatch();
    // const data = props.location.state;

    // console.log(add_list);
    // console.log(add_list[0].word, add_list[0].explain, add_list[0].example);

    React.useEffect(async() => {
        displatch(loadAddFB());
    }, []);

    // React.useEffect(async() => {
        // console.log(db);

        // const query = await getDocs(collection(db, "dictionary"));
        // console.log(query);

        // query.forEach((doc) => {
        // doc은 반복문 forEach 안에서 각각의 도큐먼트 하나하나를 의미
        // console.log(doc.id, doc.data());
        // console.log(doc.data());
        // });
    // }, []);
    
    return (
        <Wrap>
            {add_list.map((list, index) => {
                // console.log(list, add_list[index]); // 두 값이 같다
                return (
                    <Card key={index}>
                        {/* <h3>단어</h3> */}
                        <P style={{fontSize:"1.4em"}}>
                            {list.word}
                        </P>

                        {/* <strong>설명</strong> */}
                        <P>
                            {list.explain}
                        </P>

                        {/* <strong>예시</strong> */}
                        <P style={{color:"#1551d9"}}>
                            {list.example}
                        </P>
                    </Card>
                );
            })}

            <Add onClick={() => {
                history.push('./Add');
                // 페이지 새로고침
                history.go(0);
            }}>
                +
            </Add>
        </Wrap>
    );
};

const Wrap = styled.div`
display:flex;
flex-wrap:wrap;
width:90%;
margin:30px auto 0;
padding:0 20px;
`

const Card = styled.div`
width:calc(100% / 3 - 22px);
margin:0 10px 40px;
padding:20px 40px;
border:1px solid #ccc;
border-radius:8px;
box-sizing:border-box;
text-align:left;
box-shadow:5px 5px 5px #ccc;

@media screen and (max-width: 1000px) {
    width:calc(50% - 22px);
}

@media screen and (max-width: 700px) {
    width:100%;
}
`

const P = styled.p`
margin:8px 0;
word-break: break-all;
font-size:1.1em;
font-weight:600;
`

const Add = styled.div`
position:fixed;
bottom:20px;
right:20px;
width:50px;
height:50px;
line-height:42px;
border-radius:50%;
color:#fff;
font-size:2.4em;
font-weight:600;
background-color:#000;
cursor:pointer;
`

export default Main;




