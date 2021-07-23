import { useEffect, useLayoutEffect, useRef, useState } from "react";
import MainPresenter from "./MainPresenter";

const MainContainer = () => {
    /* States */
    const [redoStack, setRedoStack] = useState([]);
    const [undoStack, setUndoStack] = useState([]);
    const [globalValue, setGlobalValue] = useState(0);
    console.log("undoStack: ", undoStack);

    /* Refs */
    const inputBoxRef = useRef(null);
    const undoBtnRef = useRef(null);
    const redoBtnRef = useRef(null);

    /* Hooks */
    useLayoutEffect(() => {
        undoBtnRef.current.disabled = true;
        redoBtnRef.current.disabled = true;
        return () => {};
    }, []);

    /* Functions */
    /**
     * @title 값 적용 핸들
     * @description 계산된 값을 valuebox에 적용시킨다. inputBox 초기화 한다.
     */
    const applyValueOnBox = (value, isInitInputbox = true) => {
        setGlobalValue(value);

        // 입력박스 초기화 여부를 기준하여 inputbox 갱신
        if (isInitInputbox) {
            initialInputValue();
        }
    };

    /**
     * @title 입력 창 초기화
     * @description inputbox에 값을 초기화한다.
     */
    const initialInputValue = () => {
        inputBoxRef.current.value = null;
    };

    /**
     * @title 뒤로가기 핸들
     * @description 결과를 이전 값으로 돌린다. 기존의 값은 redoStack에 추가
     */
    const undo = () => {
        let value = undoStack[undoStack.length - 1];

        popUndoStack();
        pushRedoStack(globalValue); // redoStack 추가
        applyValueOnBox(value, false);
    };

    /**
     * @title 앞으로 가기 핸들
     * @description redoStack에 들어가있는 가장 최신값을 로드한다.
     */
    const redo = () => {
        let value = redoStack[redoStack.length - 1];

        popRedoStack();
        pushUndoStack(globalValue);
        applyValueOnBox(value, false);
    };

    /**
     * @title 더하기 핸들
     * @description 기존 값에서 입력한 값을 더하기 연산
     * 입력값 null 체크
     * 입력값 Number 파싱
     * 기존 값 Undo에 push
     * 값 피드백
     * redo 초기화
     */
    const addValue = () => {
        const value = inputBoxRef.current.value;
        if (checkNullNaN(value)) {
            initialInputValue();
            return;
        }

        const newValue = parseToNumber(value) + globalValue;

        pushUndoStack(globalValue);
        applyValueOnBox(newValue);
        initRedoStack();
    };

    /**
     * @title 빼기 핸들
     * @description 기존 값에서 입력한 값을 빼기 연산
     * 입력값 null 체크
     * 입력값 Number 파싱
     * 기존 값 Undo에 push
     * 값 피드백
     * redo 초기화
     */
    const subValue = () => {
        const value = inputBoxRef.current.value;
        if (checkNullNaN(value)) {
            initialInputValue();
            return;
        }

        const newValue = globalValue - parseToNumber(value);

        pushUndoStack(globalValue);
        applyValueOnBox(newValue);
        initRedoStack();
    };

    /**
     * @title inputbox 값 null 체크 및 isNaN 체크
     */
    const checkNullNaN = (value) => {
        if (value === null || value === undefined || value === "") {
            return true;
        }

        return isNaN(parseFloat(value)) ? true : false;
    };

    /* stack handlers */

    /**
     * @title undo 스택 삽입
     */
    const pushUndoStack = (value) => {
        const newUndoStack = [...undoStack, value];

        setUndoStack(newUndoStack);
        undoBtnRef.current.disabled = false;
    };

    /**
     * @title undo 스택 추출
     */
    const popUndoStack = () => {
        const newUndoStack = undoStack.slice(0, -1);
        if (newUndoStack.length === 0) {
            undoBtnRef.current.disabled = true;
        }

        setUndoStack(newUndoStack);
    };

    /**
     * @title redo 스택 삽입
     */
    const pushRedoStack = (value) => {
        setRedoStack([...redoStack, value]);

        redoBtnRef.current.disabled = false;
    };

    /**
     * @title redo 스택 추출
     */
    const popRedoStack = () => {
        const newRedoStack = redoStack.slice(0, -1);

        if (newRedoStack.length === 0) {
            redoBtnRef.current.disabled = true;
        }

        setRedoStack(newRedoStack);
    };

    /**
     * @title redo 스택 초기화
     */
    const initRedoStack = () => {
        redoBtnRef.current.disabled = true;
        setRedoStack([]);
    };

    /**
     * @title number 파싱
     */
    const parseToNumber = (str) => {
        const type = typeof str;
        if (type === "number") {
            return str;
        } else if (type === "string") {
            let result = parseFloat(str);
            return result;
        } else {
            console.log("type: ", type);
            alert("타입 장애");
        }
    };

    return (
        <MainPresenter
            globalValue={globalValue}
            inputBoxRef={inputBoxRef}
            undoBtnRef={undoBtnRef}
            redoBtnRef={redoBtnRef}
            onAddValue={addValue}
            onSubValue={subValue}
            onUndo={undo}
            onRedo={redo}
        />
    );
};

export default MainContainer;
