import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

	div, img {
		-webkit-user-select: none;
		-webkit-user-drag: none;
	}
	
  body {
		background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.text.colors.primary};
    font-family: ${({ theme }) => theme.text.fontFamily};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: subpixel-antialiased !important;
    overflow-x: hidden;
  }
`;
