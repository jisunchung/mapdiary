import React from "react";
import styled from 'styled-components'

const TemplateBlock = styled.div`
width: 500px;


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
    <h2>To. 장우 🦦</h2>
    <div className="day">
       장우야 생일축하해!ㅎㅎ <br/>
       장우가 있는곳 시간에 맞춰서 축하해 주고 싶었는데!시차계산을 잘못했네! ...
       헤헤...12시 땡 하고 짜잔 하고싶었는데? 헤..ㅎ 아침에 일어나서 봐줘! 헤헤..다음에는 딱 잘 맞출게! 
       <br/>정말 별거 없지만..
    그간 배운것들로 만들어봤엉 더 멋지게 해주고 싶었는데 아직 실력이 많이 부족해..!ㅎㅎ그래서
    매일 조금씩 정성으로...ㅎ 채웠어 허허 처음 생각한거랑은 많이 달라졌지만 이뿌게 봐줭!
    언능 실력 많이 많이 늘어서 다음에는 더 멋진걸 만들겡 ㅇㅁㅇ 기대해주! 장우얍 항상 내 옆에 있어줘서 고마워^_^
    너는 나한테 정말 많은 역할들을 해주고 있는 것 같아 이제는 뭔가 일이 생기면
    너한테 제일 먼저 말하게된당 너가 잘 들어주기도 하고..너한테 말하고 나면 괜찮아 지기도 하고! ㅎㅎ
    좋은 결과를 낼 수 있도록 도와주기도 하고 ㅎㅎ 최고다! ㅋㅋ 항상 꼬마워 장우 ㅎㅁㅎ 너 한명만 있어도 난 너무 든든햅 
    나도 너한테 좋은 사람이 될 수 있도록 노력할겡 든든한 사람이 될 수 있도로옥 ~_~ 장우가 심심하지 않게 잘! 놀아줄게!! 
    그건 좀 자신있어 재미는 좀 없지만 ㅎㅁㅎ 알게찌?!! 
    
    
    <br/>
    당우야 앞으로도 우리 함께 늙어가자!!^^ </div>
    <div className="tasks-left">2022년 2월 12일 지서니가😉</div>
  </TodoHeadBlock>
  </TemplateBlock>;
  }
  
export default MailTemplate;