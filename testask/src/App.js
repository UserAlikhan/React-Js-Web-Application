
import './App.css';
import {connect, Provider} from "react-redux"
import { setTitle } from "./store";
import CharacterList from "./components/CharacterList"
import store from "./redux/store";
import Characters from "./components/Characters"

function App() {
    return (
        <div className="App">
            <Characters/>
        </div>
        // <Provider store={store}>
        //     <div className="App">
        //         <CharacterList/>
        //     </div>
        // </Provider>
    )
}

export default App

//     function onClickFunc(){
//         props.setTitle()
//     }
//
//     useEffect(() => {
//         const getData = async function(){
//             try {
//                 const data = await fetchData()
//                 console.log(data)
//             }catch (error){
//                 console.error('Error fetching data: ', error)
//             }
//         }
//
//         getData()
//     }, []);
//
//     return (
//         <div className="App">
//             <h1>{props.title}</h1>
//             <button onClick={onClickFunc}>Button</button>
//         </div>
//     )
// }
//
// function mapStateToProps(state){
//     return {
//         title: state.title
//     }
// }
//
// export default connect(mapStateToProps, { setTitle })(App);