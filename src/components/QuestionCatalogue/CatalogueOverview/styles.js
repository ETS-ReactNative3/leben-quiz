import styled from '@emotion/styled'
import { theme } from '../../../theme'

const QuizOverviewContainer = styled.div`
  min-width: 15rem;
  max-width: 40rem;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  padding: 1rem 0;
`

const QuestionBox = styled.div`
  position: relative;
  float: left;
  width: 10%;
  padding-top: 10%;
  font-size: 0.8rem;
  overflow: hidden;

  @media screen and (max-width: 48rem) {
    width: 20%;
    padding-top: 20%;
  }
`

const QuestionBoxInner = styled.div`
  margin: 3px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  overflow: hidden;
  color: #fff;
  display: flex;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  &.active {
    background-color: ${theme.colors.blue};
  }
`

export { QuizOverviewContainer, QuestionBox, QuestionBoxInner }
