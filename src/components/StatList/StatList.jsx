import {
  ElemStat,
  SpanForPerc,
  SpanForText,
  StatListContainer,
} from './statList.styled';
import { randomColor } from '../../helpers/randomColor';

export const StatList = ({ stats }) => {
  return (
    <StatListContainer>
      {stats.map(item => (
        <ElemStat key={item.id} color={randomColor()}>
          <SpanForText>{item.label}</SpanForText>
          <SpanForPerc>{item.percentage} %</SpanForPerc>
        </ElemStat>
      ))}
    </StatListContainer>
  );
};
