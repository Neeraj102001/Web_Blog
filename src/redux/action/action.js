export const addBlog = (data) => {
    return {
        type:"Add_Blog",
        payload: data
    }
}

export const deleteBlog = (data) => {
    return {
        type:"Delete_Blog",
        payload: data
    }
}

export const editBlog = (data) => {
    return {
        type:"Edit_Blog",
        payload: data
    }
}

export const likeBlog = (data) => {
    return {
        type:"Like_Blog",
        payload: data
    }
}