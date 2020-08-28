import styled,{css} from 'styled-components'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo} from '../../assets/crown.svg';


const DisplaySetting = css`
    display: flex;
    align-items: center;
`

const paddingSetting = css`
    cursor: pointer;
    padding-right: 40px;
`

export const HeaderContainer = styled.div`
    ${DisplaySetting}
    justify-content: space-between;
    height: 18vh;  
    font-size: 20px;
    margin-top: -10px;
`

export const LogoContainer = styled(Logo)`
    margin-left: 50px;
    height: 10%;
    width: auto;  
`

export const OptionsContainer = styled.div`
    ${DisplaySetting}
    margin-right: 50px;
    position: relative;
`

export const LinkOptionsContainer = styled(Link)`
    ${paddingSetting}
`
export const SignInContainer = styled.div`
    ${paddingSetting}
`