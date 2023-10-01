import { Title } from './title.styled.js';

export const TitleForSection = (props) => {
    if (props.children) { return <Title>{props.children}</Title> }
}