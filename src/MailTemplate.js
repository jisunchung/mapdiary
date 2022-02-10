import React from "react";
import styled from 'styled-components'

const TemplateBlock = styled.div`
width: 500px;
height: 500px;

position: relative; 
background: white;
border-radius: 16px;
box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

margin: 0 auto;

margin-top: 96px;
margin-bottom: 32px;
display: flex;
flex-direction: column;`

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function MailTemplate() {
    return <TemplateBlock>
    <TodoHeadBlock>
    <h1>To.장우</h1>
    <div className="day">
        생일축하해!ㅎㅎ ...별거는 아니지만 줄수 있는게..ㅎㅎ이것뿐이네..헤헤..
    그간 배운것들로 만들어봤엉 더 멋지게 해주고 싶었는데 아직 실력이 많이 부족!</div>
    <div className="tasks-left">2022년 2월 12일 지서니가😉</div>
  </TodoHeadBlock>
  </TemplateBlock>;
  }
  
export default MailTemplate;