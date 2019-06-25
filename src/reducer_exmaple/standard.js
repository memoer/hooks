import React, { useReducer } from 'react';

/*
dispatch를 호출하면 reducer가 호출된다.
 */
const reducer = (state, potato) => {
  console.log(state, potato); // {count:0}, 'increment' || 'decrement'
  return { count: 99 }; // 완전히 state를 대체한다 ( 변경하는 것이 아니라 "대체" 한다! )

  // 밑과 같은 코드도 실행된다.
  // potato에 'increment', 'decrement'를 넣어준다면
  switch (potato) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return;
  }
};
const App = () => {
  // {count:0} => initialState
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // dispatch는 단지 reducer함수를 실행시키는 것.
  // 인자로 넘긴 값은 reducer에서 potato로 할당된다.
  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch('increment')}>add</button>
      <button onClick={() => dispatch('decrement')}>Remove</button>
    </>
  );
};
export default App;
