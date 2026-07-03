// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  Heading,
  Description,
  Image,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const intialDescription = reactHooksDescription.slice(0, 170)
  const [isExpanded, setFunc] = useState(false)

  const onClickRead = () => {
    setFunc(prevState => !prevState)
  }

  const text = isExpanded ? reactHooksDescription : intialDescription
  const btnText = isExpanded ? 'Read Less' : 'Read More'

  return (
    <MainContainer>
      <Heading>React Hooks</Heading>
      <Description>Hooks are a new addition to React</Description>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Description>{text}</Description>
      <Button onClick={onClickRead}>{btnText}</Button>
    </MainContainer>
  )
}

export default ReadMore
