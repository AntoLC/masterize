import React from "react";
import {CustomButtonContainer} from './custom-button.styles';

const CustomButton = ({children, ...customProps}) => (
    <CustomButtonContainer type="submit" {...customProps}>{children}</CustomButtonContainer>
);

export default CustomButton;