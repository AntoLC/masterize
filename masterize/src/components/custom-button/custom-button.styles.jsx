import styled, {css} from 'styled-components';

export const STYLE_GOOGLE = "STYLE_GOOGLE";
export const STYLE_INVERTED = "STYLE_INVERTED";

const GoogleSignInStyles = css`
    background-color: #4285f4;
    &:hover {
        background-color: rgb(46, 99, 160);
        color: #fff;
        border: 1px solid rgb(14, 0, 90);
    }
`;

const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;
    justify-content: center;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
`;

const getButtonStyles = props => {
    if(props.typeStyle === STYLE_GOOGLE){
        return GoogleSignInStyles;
    }
    else if(props.typeStyle === STYLE_INVERTED){
        return invertedButtonStyles;
    }
    
    return buttonStyles;
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    ${getButtonStyles}
`;