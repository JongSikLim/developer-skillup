import react from "react";

const MainPresenter = ({
    globalValue,
    inputBoxRef,
    undoBtnRef,
    redoBtnRef,
    onAddValue,
    onSubValue,
    onUndo,
    onRedo,
}) => {
    return (
        <div className="container">
            <div id="valuebox" className="counter">
                {globalValue}
            </div>
            <input id="inputbox" className="input" ref={inputBoxRef} />
            <div className="btnGroup">
                <button
                    id="undoButton"
                    className="btn"
                    onClick={onUndo}
                    ref={undoBtnRef}
                >
                    Undo
                </button>
                <button id="addButton" className="btn" onClick={onAddValue}>
                    +
                </button>
                <button id="subButton" className="btn" onClick={onSubValue}>
                    -
                </button>
                <button
                    id="redoButton"
                    className="btn"
                    onClick={onRedo}
                    ref={redoBtnRef}
                >
                    Redo
                </button>
            </div>
        </div>
    );
};

export default MainPresenter;
