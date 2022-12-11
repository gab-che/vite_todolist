import { reactive } from "vue";

export const store = reactive({
    taskList: [
        {
            id: 1,
            text: 'Task 1',
            day: '27 Dicembre 12:32',
            reminder: true,
        },
        {
            id: 2,
            text: 'Task 2',
            day: '27 Dicembre 12:32',
            reminder: false,
        },
        {
            id: 3,
            text: 'Task 3',
            day: '27 Dicembre 12:32',
            reminder: true,
        },
    ]
});