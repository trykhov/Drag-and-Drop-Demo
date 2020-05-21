import React, { useEffect } from 'react';
import BoxRow from '../box_spaces/box_spaces';
import './reward_row_styles.css';

// will be the element being dragged
let draggedContainer;

// when you start a drag
function drag(e) {
    // save the dragged element into a variable
    if(e.target.classList[0] === "reward-card") {
        let dragged = e.target.cloneNode(true);
        // will make a container to have the dragged element and delete button
        draggedContainer = document.createElement("div");
        // make the container draggable
        draggedContainer.draggable = true;
        // make it have the same name as the reward
        for(let className of dragged.classList) {
            draggedContainer.classList.add(className);
        }
        // remove the classname of the child
        dragged.classList = '';
        // make sure it's not draggable
        dragged.draggable = false;
        // add the child to the container
        draggedContainer.appendChild(dragged);
        draggedContainer.classList.remove("reward-card");

        // add the delete button
        let deleteTag = document.createElement("button");
        deleteTag.innerHTML = "delete";
        deleteTag.onclick = function(ev) {
            ev.target.parentNode.parentNode.innerHTML = '';
        }
        draggedContainer.appendChild(deleteTag);
    } else {
        draggedContainer = e.target;
    }
}

// when you cancel a drop
function drop(e) {
    e.preventDefault();
}

// when you drag over a valid drop zone
function dragOver(e) {
    e.preventDefault();
    const onlyEmptySpace = (e.target.classList[0] === "box-space") && (e.target.childElementCount < 1);
    if(onlyEmptySpace) {
        e.target.classList.remove("filled");
        e.target.classList.add("empty");
    }
}

function dragDrop(e) {
    e.preventDefault();
    // prevents user from putting rewards in different rows
    const sameRow = draggedContainer.classList[0] === e.target.classList[1];
    if((e.target.classList[2] == "empty") && sameRow) {
        // if it's empty, add it
        e.target.classList.remove("empty");
        e.target.classList.add("filled");
        // drop the dragged element
        e.target.appendChild(draggedContainer);
    }
}

function dragLeave(e) {
    e.preventDefault();
}


function RewardRow(props) {

    // use to get the reward-card object after it is rendered
    useEffect(() => {
        let rewardCards = document.querySelectorAll('.reward-card');
        let empties = document.querySelectorAll('.empty');

        // allows the cards to be dragged and dropped
        for(let card of rewardCards) {
            card.addEventListener('dragstart', drag);
            card.addEventListener('dragend', drop);
        }

        // allows the empty spaces to receive the dragged and dropped cards
        for(let empty of empties) {
            empty.addEventListener('dragover', dragOver);
            empty.addEventListener('drop', dragDrop);
            empty.addEventListener('dragstart', drag);
            empty.addEventListener('dragleave', dragLeave);
        }
    })

    const { rowNum } = props;
    return (
        <section className="reward-row">
            <div className={`reward-col reward-${rowNum}`}>
                <div className={`reward-card reward-${rowNum}`} draggable="true">
                    {`R${rowNum}`}
                </div>
            </div>
            <div className="box-space-container">
                <BoxRow rowNum={rowNum}/>
            </div>
        </section>
    )
};

export default RewardRow;