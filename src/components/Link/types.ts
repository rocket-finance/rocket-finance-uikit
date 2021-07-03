import { AnchorHTMLAttributes } from "react";
import { LinkProps as RRDLinkProps } from "react-router-dom";
import { TextProps } from "../Text";

export interface LinkProps extends TextProps, AnchorHTMLAttributes<HTMLAnchorElement>, RRDLinkProps {
  external?: boolean;
  showIcon?: boolean;
}
