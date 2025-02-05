export type User = {
    [x: string]: any
    id: string,
    lastName: string,
    name: string,
    email: string,
    password: string,
    address: string,
    phone: string
}
type Action = {
    type: 'CREATE' | 'UPDATE' | 'GET' | 'REMOVE',
    data: Partial<User>
}
export const userReducer = (state: User, action: Action): User => {
    switch (action.type) {
        case 'CREATE':
            return { ...state, ...action.data }

        case 'UPDATE':
            return { ...state, ...action.data };
        case 'REMOVE':
            return {
                id: '',
                name: '',
                lastName: '',
                email: '',
                password: '',
                address: '',
                phone: ''
            };
        default:
            return state;
    }
}



