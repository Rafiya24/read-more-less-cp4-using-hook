// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background-color: pink;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const Heading = styled.h1`
  font-family: Roboto;
  font-size: 20px;
  color: #1e293b;
`
export const Description = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: #334155;
`
export const Image = styled.img`
  height: 50%;
  width: 55%;
`
export const Button = styled.button`
  height: 6%;
  width: 7%;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  color: #ffffff;
  background-color: #1f81ff;
`
