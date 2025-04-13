
const blogReducer = (state = '', action) => {
    switch (action.type) {
        case "Add_Blog":
            let newItems = {
                user: {
                    ...state,
                    items: [...state.items, action.payload]
                }
            };

            localStorage.setItem("BlogStorage", JSON.stringify(newItems))

            console.log("NEWITEMS", newItems);
            return {
                ...state,
                items: [...state.items, action.payload]
            };

        case "Delete_Blog":
            let array = state.items;
            let modifiedArray = array.filter((blog) => {
                if (blog.id !== action.payload) {
                    return blog;
                }
            });
            let newObj = { user: { items: modifiedArray } };
            localStorage.setItem("BlogStorage", JSON.stringify(newObj));
            return newObj;

        case "Edit_Blog":
            let array1 = state.items;
            let modifiedArray1 = array1.filter((blog) => {
                if (blog.id === action.payload.id) {
                    let blog1 = {
                        id: action.payload.id,
                        title: action.payload.title,
                        content: action.payload.content,
                        category: action.payload.category,
                        isLiked: action.payload.isLiked
                    }
                    return blog1;
                }
                else return blog;
            });
            let newObj1 = { user: { items: modifiedArray1 } };
            let stateobj2 = { items: modifiedArray1 };
            localStorage.setItem("BlogStorage", JSON.stringify(newObj1));
            return stateobj2;

        case "Like_Blog":
            let blogsArray = state?.items;
            let newArray = [];
            blogsArray?.map((blog) => {

                if (blog.id === action.payload.id) {
                    blog.isLiked = action.payload.isLiked;
                }
                newArray.push(blog);
            });
            let newObjectLiked = { user: { items: newArray } };
            let stateObj = { items: newArray };
            localStorage.setItem("BlogStorage", JSON.stringify(newObjectLiked));
            return stateObj;
        default:
            return state;
    }
};

export default blogReducer;