"use Client"
import React, { useRef } from "react";
import JoditEditor from "jodit-react";
function Editor(props) {
    const editor = useRef(null);
    return (
        <JoditEditor
            ref={editor}
            value={props.data ?? ""}
            onChange={(d) => {
                props.update(d);
            }}
            tabIndex={1}
        />
    );
}

export default Editor;