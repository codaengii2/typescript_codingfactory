"use strict";
/**
 * Enum
 */
/**
 * API 요청
 * 상태는 4가지
 *
 * DONE - 요청 완료 상태
 * ERROR - 에러 생긴 상태
 * LOADING - 로딩 상태
 * INITIAL - 초기 상태
 */
function runWork() {
    let state = 'INITIAL';
    try {
        state = 'LOADING';
        //작업을 함.
        state = 'DONE';
    }
    catch (e) {
        state = 'ERROR';
    }
    finally {
        return state;
    }
}
console.log(runWork() === 'DONE');
const doneState = 'DONE';
const loadingState = 'LOADING';
const errorState = 'ERROR';
const initialState = 'INITIAL';
function runWork2() {
    let state = initialState;
    try {
        state = loadingState;
        //작업을 함.
        state = doneState;
    }
    catch (e) {
        state = errorState;
    }
    finally {
        return state;
    }
}
console.log(runWork2() === doneState);
var State;
(function (State) {
    State[State["DONE"] = 0] = "DONE";
    State[State["LOADING"] = 1] = "LOADING";
    State[State["INITIAL"] = 2] = "INITIAL";
    State[State["ERROR"] = 3] = "ERROR";
})(State || (State = {}));
function runWork3() {
    let state = State.INITIAL;
    try {
        state = State.LOADING;
        //작업을 함.
        state = State.DONE;
    }
    catch (e) {
        state = State.ERROR;
    }
    finally {
        return state;
    }
}
console.log(runWork3() === State.DONE);
console.log(runWork3());
//0이 나오는 이유는 Enum 첫번째부터
//숫자가 부여되기 때문
//숫자를 바꾸고 싶으면
/* enum State {
  DONE = 'DONE',
  LOADING = 'LOADING',
  INITIAL = 'INITIAL',
  ERROR = 'ERROR',
} */
//다음과 같이 선언해주면 됨
