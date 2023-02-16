/// <reference types="react" />
import "./styles.css";
type TextStyle = {
    [property: string]: string;
};
export interface TextAutoScrollProps {
    children: string;
    style?: TextStyle;
}
declare const TextAutoScroll: ({ children, style }: TextAutoScrollProps) => JSX.Element;
export default TextAutoScroll;
