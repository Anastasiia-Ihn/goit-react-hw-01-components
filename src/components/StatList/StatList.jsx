import { randomColor } from '../../helpers/randomColor';

import {
  ElemStat,
  SpanForPerc,
  SpanForText,
  StatListContainer,
} from './statList.styled';

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
