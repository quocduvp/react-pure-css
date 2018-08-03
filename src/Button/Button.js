import React, {
    Component
} from 'react';
import styled from 'styled-components'
import { primary, secondary, success, error, warning } from '../Styles.js/Color';
class Button extends Component {
    render() {
        return (
            <ButtonCSS {...this.props}>{this.props.children}</ButtonCSS>
        );
    }
}

const ButtonCSS = styled.button `
  background-color : ${props=>props.primary ? primary : props.secondary ? secondary
    : props.success ? success : props.error ? error : props.warning ? warning : '#E6E6E6'};
  color : white;
  border : transparent;
  padding: .5em 1em;
  cursor: pointer;
  font-family: inherit;
  font-size: 100%;
  &:hover{
    background-image: linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1));
  }
`
export default Button;