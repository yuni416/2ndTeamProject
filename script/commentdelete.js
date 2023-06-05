export const comment_delete = (id) => {
    window.localStorage.removeItem(`${id}_comment`)
    show_details(id)
}
