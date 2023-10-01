import { Title } from './title.styled.js';


export const TitleForSection = (props) => {
    console.log(props.children);
    if (props.children) { return <Title>{props.children}</Title> }
}