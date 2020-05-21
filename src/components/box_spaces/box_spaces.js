import React from 'react';
import './box_spaces_styles.css';

function generateRow(rowNum)  {
    const row = new Array(5).fill(null);
    return row.map((el, index) => {
        return(
            // space-row-col
            <div key={index} className={`box-space reward-${rowNum} empty`}/>
        )
    })

}

function BoxRow(props) {
    // the props will be an integer that indicates the reward number
    return (
        <div className={`reward-row-${props.rowNum} reward-place-container`}>
            {generateRow(props.rowNum)}
        </div>
    )
}

export default BoxRow;