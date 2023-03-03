import Actions from "./ComponentTitle/Actions";
import Comedy from "./ComponentTitle/Comedy";
import Drama from "./ComponentTitle/Drama";
import Fantasy from "./ComponentTitle/Fantasy";
import Home from "./ComponentTitle/Home";
import Kids from "./ComponentTitle/Kids";
import Romantic from "./ComponentTitle/Romantic";


const App = () => {
    return(
        <div>
            <Home/>
            <Comedy/>
            <Drama/>
            <Fantasy/>
            <Kids/>
            <Romantic/>
            <Actions/>
        </div>
    )
}

export default App