import React from "react";
import styled from "styled-components";
// import { Route } from "react-router-dom";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {createAdd} from "./redux/modules/add";

import { addAddFB } from "./redux/modules/add";

const Add = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    
    const refWord = React.useRef();
    const refExplain = React.useRef();
    const refExample = React.useRef();

    const addInput = () => {
        // dispatch(createAdd({
        //     word: refWord.current.value,
        //     explain: refExplain.current.value,
        //     example: refExample.current.value
        // }));

        dispatch(addAddFB({
            word: refWord.current.value,
            explain: refExplain.current.value,
            example: refExample.current.value
        }));
    }

    React.useEffect(async() => {
        dispatch(addAddFB());
    }, []);

    React.useEffect(() => {
        dispatch(addAddFB());
    }, []);

    // const addInput = () => {
    //     dispatch(createAdd({
    //         word: refWord.current.value,
    //         explain: refExplain.current.value,
    //         example: refExample.current.value
    //     }));
    // }

    return (
        <Wrap>
            <Card>
                <h3>단어를 추가 해주세요</h3>
                <Input type="text" ref={refWord} placeholder="단어"/><br /><br />

                <Input type="text" ref={refExplain} placeholder="설명"/><br /><br />

                <Input type="text" ref={refExample} placeholder="예시"/><br /><br />

                {/* <button onClick={addInput}>추가하기</button> */}
                <Button onClick={() => {
                    addInput();
                    history.push('/');
                    // 페이지 새로고침
                    // history.goBack();
                    // props.history.go();
                    // history.go(0);
                    // window.location.reload();
                }}>추가하기</Button>
            </Card>
        </Wrap>
    );
};

const Wrap = styled.div`
margin-top:0;
padding:0 10px;
background-color:#fff;
`

const Card = styled.div`
max-width:500px;
margin:0 auto;
padding:20px;
`

const Input = styled.input`
display:black;
width:100%;
max-width:200px;
height:30px;
margin:0 auto;
`

const Button = styled.button`
width:100%;
max-width:210px;
height:40px;
margin:0 auto;
border:none;
border-radius:6px;
background-color:#000;
color:#fff;
cursor:pointer;
`

export default Add;