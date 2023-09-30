import styled from "styled-components";
 
export const StatListContainer = styled.ul`
width: 100%;

padding: 0;
display: flex;
flex-wrap: wrap;
`

export const ElemStat = styled.li`
list-style: none;
display: inline;
align-items: center;
justify-content: center;
padding: 10px 0;

width: calc((400px - 5*2px)/5);
border: 1px solid #fff;

background-color: ${(props) => props.color};
`

export const SpanForText = styled.span`
display: block;
margin-bottom: 10px;

text-align: center;
`

export const SpanForPerc = styled.span`
display: block;

text-align: center;
color: red;
font-size: 26px;
`
