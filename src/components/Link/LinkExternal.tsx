import React from "react";
import Link from "./Link";
import { LinkProps } from "./types";
import OpenNewIcon from "../Svg/Icons/OpenNew";

const LinkExternal: React.FC<LinkProps> = ({ children, showIcon = false, ...props }) => {
  return (
    <Link external {...props}>
      {children}
      {showIcon && <OpenNewIcon color="primary" ml="4px" />}
    </Link>
  );
};

export default LinkExternal;
