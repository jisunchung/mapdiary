import React from "react";
import styled from 'styled-components'

const TemplateBlock = styled.div`
width: 400px;


position: relative; 
background: white;
border-radius: 16px;
box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

margin: 0 auto;

margin-top: 20px;
margin-bottom: 32px;
display: flex;
flex-direction: column;`

const TodoHeadBlock = styled.div`
  padding-top: 20px;
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
    <h2>To. 장우</h2>
    <div className="day">
       장우야 생일축하해!ㅎㅎ <br/>
       정말 별거 없지만..
    그간 배운것들로 만들어봤엉 더 멋지게 해주고 싶었는데 아직 실력이 많이 부족해..!ㅎㅎ그래서
    매일 조금씩 정성으로...ㅎ 채웠어 허허 처음 생각한거랑은 많이 달라졌지만 이뿌게 봐줭 
    언능 실력 많이 많이 늘어서 다음에는 더 멋진걸 만들겡 ㅇㅁㅇ 항상 내 옆에 있어줘서 고마워
    너는 나한테 정말 많은 역할들을 해줘ㅎㅎ 장우 한명만 있어도 난 너무 든든햅
    
    <br/>
    앞으로도 함께 늙어가자^^ </div>
    <div className="tasks-left">2022년 2월 12일 지서니가😉</div>
  </TodoHeadBlock>
  </TemplateBlock>;
  }
  
export default MailTemplate;