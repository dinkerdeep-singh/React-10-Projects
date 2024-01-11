import styled from "styled-components"

const Rules = () => {
  return (
    <RulesContainer>
        <div className="text">
            <h2>How to play dice game</h2>
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>if you get wrong guess then  2 point will be dedcuted </p>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer =styled.div`
    background-color: #FBF1F1;
    margin: 0 auto;
    max-width: 794px;
    padding: 20px;
    margin-top: 40px;
    border-radius: 10px;
     h2 {
        font-size: 24px;
        margin-bottom: 10px;
     }
     .text {
        margin-top: 20px 10px;;
        gap: 10px;
     }
`