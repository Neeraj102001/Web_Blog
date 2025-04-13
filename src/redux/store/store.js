import {createStore, combineReducers} from 'redux';
import blogReducer from '../reducers/blogReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const mainReducer = combineReducers({
    user: blogReducer
});

let commonData = "";
if(localStorage.getItem("BlogStorage"))
{
    commonData = JSON.parse(localStorage.getItem("BlogStorage"));
}
else{
    commonData = {
        user:{
            items:[
                {
                    id : 1, title : 'Default Blog',category:'Default',content:'Hi there , this is default blog'
                }
            ]
        }
    }

    localStorage.setItem("BlogStorage",JSON.stringify(commonData));
}


const store = createStore(mainReducer,commonData,composeWithDevTools());
//window.__redux_devtools_extension__ && window.__redux_devtools_extension__()


export default store