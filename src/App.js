import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 제목수정] = useState(['짜장면 맛집', '초밥 맛집', '피자 맛집']);
  let [좋아요, 좋아요수정] = useState([0, 0, 0]);
  let [입력값, 입력값추가] = useState('');

  const writeNew = () => {
    let titleCopy = [...글제목];
    let likeCopy = [...좋아요];
    titleCopy.unshift(입력값);
    likeCopy.unshift(0);
    제목수정(titleCopy);
    좋아요수정(likeCopy);
  }
  const activeEnter = (e) => {
    if(e.key === "Enter") {
      writeNew();
    }
  }

  return (
    <div className="App">
      <header>
        <h3 className='blog-title'>React Blog</h3>
      </header>

      {
        글제목.map(function (a, i) {
          return (
            <div className='list' key={i}>
              <h4>{글제목[i]}</h4>
              <span className='likeBtn' onClick={
                (e) => {
                  e.stopPropagation();
                  let likeCopy = [...좋아요];
                  likeCopy[i] = likeCopy[i] + 1;
                  좋아요수정(likeCopy)
                }
              }>👍 {좋아요[i]}</span>
              <button className='delBtn' onClick={(e) => {
                e.stopPropagation();
                let deletCopy = [...글제목];
                deletCopy.splice(i, 1);
                제목수정(deletCopy);
                let delLike = [...좋아요];
                delLike.splice(i, 1);
                좋아요수정(delLike);
              }}>
                삭제
              </button>
            </div>
          )
        })
      }

      <div className='newWrite'>
        <input onChange={(e) => { 입력값추가(e.target.value) }}
        onKeyDown={(e) => activeEnter(e)} />
        <button onClick={(e) => writeNew()}>글입력
        </button>
      </div>

    </div>
  );
}

export default App;
