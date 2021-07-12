import react, {PureComponent} from 'react';


export default class FooContainer extends PureComponent {
    state = {
        count : 1
    }
    constructor(props){
        super(props);
        
        this.state = {
            count: 1
        }
    }

    componentDidMount(){
        // 렌더링이 완료된 직후
    }

    componentWillUnmount(){
        // 컴포넌트가 제거될 때 실행되는 함수
    }

    /**
     * 
     * @param {*} prevProps 이전 props 
     * @param {*} prevState 이전 state
     */
    componentDidUpdate(prevProps, prevState){
        // 컴포넌트의 props, state 값이 변동됐을때 실행되는 함수
    }

    componentDidCatch(){
        // 하위컴포넌트에서 예외가 발생했을 때 실행되는 함수
    }

    // render 함수
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
