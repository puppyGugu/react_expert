// Actions

// 데이터 보여주기(Main)
// 데이터 추가 > 단어 목록(Add)
const CREATE = 'add/CREATE';

// 초기값
const initialState = {
    // list: [
    //     "영화관 가기", "매일 책읽기", "수영 배우기", "코딩 하기"
    // ]
    // quiz_list: [
    list: [
        {word: "단어 1", explain: "설명 1", example:"예시 1"},
        {word: "단어 2", explain: "설명 2", example:"예시 2"},
        {word: "단어 3", explain: "설명 3", example:"예시 3"},
        {word: "단어 4", explain: "설명 4", example:"예시 4"},
        {word: "단어 5", explain: "설명 5", example:"예시 5"},
        {word: "단어 6", explain: "설명 6", example:"예시 6"}
    ]
}

// Action Creators
export function createAdd(add){
    // 액션 생성 함수는 액션 개체를 리턴한다.
    // 객체이므로 딕셔너리처럼 생김
    // return {type: CREATE, bucket: bucket};
    // js에서는 key와 value가 똑같이 생겼다면 하나만 작성해도 된다.
    // console.log('단어 추가!');
    return {type: CREATE, add};
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
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



