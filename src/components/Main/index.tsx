import * as S from './styles'

const Main = ({
  title = 'Boilerplate do Rafinha',
  description = 'TypeScript, ReactJS, NextJS e Styled Components',
  quote = 'Baseado no do Willian Justen e muito grato pelos seus ensinamentos.'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Quote>{quote}</S.Quote>
  </S.Wrapper>
)

export default Main
