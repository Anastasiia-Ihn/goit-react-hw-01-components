import { ElemStat, SpanForPerc, SpanForText, StatListContainer } from "./statList.styled"
import {randomColor} from '../funcRandomColor'

export const StatList = ({ stats }) => {
    return <StatListContainer>
        {stats.map((item) => 
            <ElemStat key={item.id} color={ randomColor()}>
            <SpanForText>{item.label}</SpanForText>
                <SpanForPerc>{item.percentage} %</SpanForPerc>
        </ElemStat>
        )}
       
    </StatListContainer>
}