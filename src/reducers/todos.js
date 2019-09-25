// import * as Types from './../contains/ActionTypes';
var initialState = [
    {
        id: 1,
        name: 'Học lập trình',
        status: true
    },
    {
        id: 2,
        name: 'Làm bài tập',
        status: false
    },
    {
        id: 3,
        name: 'Trainning ReactJSa',
        status: true
    }
];

const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            var todo = action.todo;
            state = [...state, todo];
            return [ ...state ];

        default:
            return [ ...state ];
    }
}

export default todos;