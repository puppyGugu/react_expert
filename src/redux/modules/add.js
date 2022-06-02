import {db} from "../../firebase";
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

// Actions

// 데이터 보여주기(Main)
// 데이터 추가 > 단어 목록(Add)
const LOAD = 'add/LOAD';
const CREATE = 'add/CREATE';

// 초기값
const initialState = {
    // list: [
    //     "영화관 가기", "매일 책읽기", "수영 배우기", "코딩 하기"
    // ]
    // quiz_list: [
    list: [
        // {word: "단어 1", explain: "설명 1", example:"예시 1"},
        // {word: "단어 2", explain: "설명 2", example:"예시 2"},
        // {word: "단어 3", explain: "설명 3", example:"예시 3"},
        // {word: "단어 4", explain: "설명 4", example:"예시 4"},
        // {word: "단어 5", explain: "설명 5", example:"예시 5"},
        // {word: "단어 6", explain: "설명 6", example:"예시 6"}
    ]
}

// Action Creators
export function loadAdd(add_list){
    return {type: LOAD, add_list};
}

export function createAdd(add){
    // 액션 생성 함수는 액션 개체를 리턴한다.
    // 객체이므로 딕셔너리처럼 생김
    // return {type: CREATE, bucket: bucket};
    // js에서는 key와 value가 똑같이 생겼다면 하나만 작성해도 된다.
    // console.log('단어 추가!');
    return {type: CREATE, add};
}

// middlewares
export const loadAddFB = () => {
    return async function (dispatch) {
        const add_data = await getDocs(collection(db, "dictionary"));
        // console.log(add_data);

        let add_list = [];

        // 아래처럼 () 안에는 작명해서 넣어도 된다.
        // add_data.forEach((doc) => {
        // a는 데이터에 들어있는 도큐먼트 하나하나의 값(배열로 지정한 데이터 값)
        add_data.forEach((a) => {
            // console.log(a.data());
            // add_list = [...add_list, {...a.data()}];
            // 다른 방법: array의 내장 함수 사용
            add_list.push({id:a.id, ...a.data()});
        });

        // console.log(add_list);

        dispatch(loadAdd(add_list));
    }
}

export const addAddFB = (add) => {
    return async function (dispatch) {
        const docRef = await addDoc(collection(db, "dictionary"), add);
        // 콘솔에 찍어보면 type: "document"로 뜸.
        // 참조하기 위한 값, 데이터 가져오는 값은 아니다.
        // console.log(docRef.id, docRef.data());

        // console.log((await getDoc(docRef)).data());

        // 파라미터와 변수 명이 겹치면 뜨는 오류 발생시: TDZ(Temporal Dead Zone) 참조
        // getDoc을 쓰지 않아도 이미 파라미터 add로 데이터를 들고 왔으므로 생략해도 괜찮다.
        // const _add = await getDoc(docRef);
        // const add_data = {id: _add.id, ..._add.data()};
        
        const add_data = {id: docRef.id, ...add};
        // console.log(add_data);

        // 상수를 쓰지 않으려면 한번에 작성도 가능
        // dispatch(createAdd({id: _add.id, ..._add.data()}));
        dispatch(createAdd(add_data));
    }
};

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "add/LOAD": {
            return {list: action.add_list}
        }

        case "add/CREATE": {
            // console.log('이제 값을 바꿀거야!');
            // state return해서 전체 값을 콘솔에서 확인하며 하는게 좋다
            const new_list = [...state.list, action.add];
            return {list: new_list};
        }

        default:
            return state;
    }
}