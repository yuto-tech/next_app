import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'


// ステート初期値
const initial = {
  message:'START',
  data:[],
  number:[],
  result:0
}


// レデューサー
function calcReducer(state = intitial, action) {
  switch (action.type) {
    // 計算実行
    case 'ENTER':
      let data2 = state.data.slice();
      let s = action.value;
      data2.unshift(s);
      let num = s.replace(/[^0-9]/g,"");
      let number2 = state.number.slice();
      number2.unshift(num);
      let result = (state.result * 1) + (num * 1);
      return {
        message:'ENTER',
        data:data2,
        number:number2,
        result:result
      };
    // リセット
    case 'RESET':
      return {
        message:'RESET',
        data:[],
        number:[],
        result:0
      };
    // デフォルト
    default:
      return state;
  }
}


// initStore関数
export function initStore(state = initial) {
  return createStore(calcReducer, state,
    applyMiddleware(thunkMiddleware))
}