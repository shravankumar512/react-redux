//* ACTIONS ...
export const increment = (value) => {
    return {
        type: 'INCREMENT',
        value: value
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}