import React from "react";
// import styled from "styled-components";
import { SvgProps } from "../../../components/Svg/types";

// const Text = styled.text`
//   font-size: 26.26px;
//   font-family: GoodTimingRg-Bold, Good Timing !important;
//   font-weight: 700;
// `;
// const Tspan = styled.tspan`
//   font-size: 26.26px;
//   font-family: GoodTimingRg-Bold, Good Timing !important;
//   font-weight: 700;
//   letter-spacing: 0em;
// `;

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark }) =>
  /*
  { isDark, ...props } */
  {
    // const textColor = isDark ? "#FFFFFF" : "#432918";
    return <img width="220px" height="50px" src={isDark ? "/images/logo-dark.png" : "/images/logo.png"} alt="logo" />;
  };

export default Logo;
