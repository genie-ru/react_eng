import React,{ Component } from "react";

class Life  extends Component {
    constructor(props){
        super(props);
        console.log('1-constructor')
        this.state = {name:'Francis'}
    }


    static getDerivedStateFromProps(props,state){
        console.log('2-getDerivedStateFromProps');
        if(state.name === 'Ron'){
            return {
                name:'Milhouse'
            }
        }
        return null;
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('x-shouldComponentUpdate');
        if(nextState.name === 'Steve'){
            return false
        }
        return true;
    }


    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('x-getSnapshotBeforeUpdate')
        let age = 20;
        return age;
    }


    componentDidUpdate(prevProps,prevState, snapshot){
        console.log('x-componentDidUpdate');
        // console.log(prevState);
        // console.log(this.state)
        console.log(snapshot)
    }


    componentDidMount(){
        console.log('4-componentDidMount');
    }

    componentWillUnmount(){
        console.log('x-componentWillUnmount');
    }

    render(){
        console.log('3-render');
        return(
            <>
                <hr/>
                <div>{this.state.name}</div>
                <button  onClick={()=> this.setState({name:'Ron'})}>
                    Change name
                </button>
            </>
        )
    }
}

export default Life

// Reactのコンポーネントは、作成、更新、削除の3つの段階を経ます。それぞれの段階で、特定の関数が実行されます。

// コンポーネントの作成：

// constructorメソッド：コンポーネントが作成されるときに最初に呼び出されます。初期設定や変数の初期化などを行うことができます。
// componentDidMountメソッド：コンポーネントが画面に表示された後に呼び出されます。APIからデータを取得したり、他のライブラリとの連携を行ったりするのに適しています。
// コンポーネントの更新：

// shouldComponentUpdateメソッド：コンポーネントが再レンダリングされる前に呼び出されます。コンポーネントの更新の可否を判断するために使用します。必要な場合のみ再レンダリングを行うことができます。
// componentDidUpdateメソッド：コンポーネントが更新された後に呼び出されます。更新後の処理や、他のライブラリとの連携を行ったりするのに適しています。
// コンポーネントの削除：

// componentWillUnmountメソッド：コンポーネントが画面から削除される直前に呼び出されます。不要なリソースの解放やクリーンアップなどを行うことができます。