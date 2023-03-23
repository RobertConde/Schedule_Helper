import React from "react";
import {Section} from "../scripts/soc";
import SectionDisplay from "./SectionDisplay";
import {Droppable} from 'react-drag-and-drop';
import {Selection} from "../scripts/generator";

interface Props {
    ind: number,
    selection: Selection,
    handleDrop,
    handleRemove
}

export default function SelectionDisplay(props: Props) {
    const doDrop = (data) => {
        const section: Section = JSON.parse(data['section']);
        // TODO: use unique identifier
        props.handleDrop(props.ind, section.number)
            .then();
    };

    const sectionDisplays = props.selection.map((section: Section) =>
        <SectionDisplay section={section} handleRemove={props.handleRemove}/>
    );

    return (
        <div>
            <Droppable types={['section']} onDrop={doDrop}>
                <div className="p-2 mx-1 mb-2 rounded-lg shadow-sm shadow-slate-400">
                    <div>
                        <u>Course {props.ind + 1}</u>
                    </div>

                    <div>
                        {sectionDisplays}
                    </div>
                </div>
            </Droppable>
        </div>
    );
}
