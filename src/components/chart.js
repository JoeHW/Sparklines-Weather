import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

 let average = (data) => {
    return Math.floor((data.reduce((a,e) => a + e))/data.length)
}

export default (props) => {
    return (
        <div>
            <Sparklines height={120} width={160} data={props.data}>
            <SparklinesLine color={props.color} />
            <SparklinesReferenceLine type="avg" />    
            </Sparklines>
            <div>
            {average(props.data)} {props.units}
            </div>
        </div>
    )
}