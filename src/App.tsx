import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = 'all' | 'active' | 'completed';

export type ToDoListsType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [toDoLists, setToDoLists] = useState<Array<ToDoListsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Rest API', isDone: false},
            {id: v1(), title: 'GraphQL', isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: 'HTML&CSS2', isDone: true},
            {id: v1(), title: 'JS2', isDone: true},
            {id: v1(), title: 'ReactJS2', isDone: false},
            {id: v1(), title: 'Rest API2', isDone: false},
            {id: v1(), title: 'GraphQL2', isDone: false},
        ]
    });

    function deleteToDoList(todolistID: string) {
        let toDoListsAfterDelete = toDoLists.filter(t => t.id !== todolistID)
        delete tasks[todolistID]
        setToDoLists(toDoListsAfterDelete)
    }

    function removeTask(id: string, todolistID: string) {
        tasks[todolistID] = tasks[todolistID].filter(t => t.id != id)
        setTasks({...tasks});
    }

    function addTask(title: string, todolistID: string) {
        let task = {id: v1(), title: title, isDone: false}
        tasks[todolistID] = [task, ...tasks[todolistID]];
        setTasks({...tasks});
    }

    function changeStatus(taskId: string, isDone: boolean, todolistID: string) {

        let task = tasks[todolistID].find(t => t.id === taskId);
        if (task) task.isDone = isDone
        setTasks({...tasks});
    }

    function changeFilter(value: FilterValuesType, todolistID: string) {
        let toDoList = toDoLists.find(t => t.id === todolistID)
        if (toDoList) toDoList.filter = value
        setToDoLists([...toDoLists]);
    }

    return (
        <div className="App">
            {toDoLists.map(tdl => {
                let tasksForTodolist = tasks[tdl.id];

                if (tdl.filter === 'active') {
                    tasksForTodolist = tasksForTodolist.filter(t => !t.isDone);
                }
                if (tdl.filter === 'completed') {
                    tasksForTodolist = tasksForTodolist.filter(t => t.isDone);
                }

                return <Todolist title={tdl.title}
                                 tasks={tasksForTodolist}
                                 removeTask={removeTask}
                                 changeFilter={changeFilter}
                                 addTask={addTask}
                                 changeTaskStatus={changeStatus}
                                 filter={tdl.filter}
                                 todolistID={tdl.id}
                                 deleteToDoList={deleteToDoList}
                />
            })}

        </div>
    );
}

export default App;
