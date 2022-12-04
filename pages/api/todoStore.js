import devTodos from "./data/devTodos";

let todos = devTodos;


export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getTodos(req, res);
        }

        case 'POST': {
            return createTodo(req, res);
        }

        case 'PUT': {
            return updateTodo(req, res);
        }

        case 'DELETE': {
            return deleteTodo(req, res);
        }
    }
}

async function getTodos(req, res) {
    try {
        console.log("get todos");
        return res.json({
            message: JSON.parse(JSON.stringify(todos)),
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

async function createTodo(req, res) {
    console.log("create todo " + req.body)
    let newTodo = JSON.parse(req.body);
    todos.list.push(newTodo);
    return res.json({
        message: "",
        success: true,
    });
}

async function updateTodo(req, res) {
    console.log("update todo");
    console.log(req.body);
    let newTodo = JSON.parse(req.body);
    let todo = todos.list.find(t => t._id === newTodo._id);
    todo.text = newTodo.text;
    todo.finished = newTodo.finished;

    return res.json({
        message: {},
        success: true,
    });
}

async function deleteTodo(req, res) {
    console.log("delete todo");
    let deleteTodo = JSON.parse(req.body);
    var removeIndex = todos.list.map(item => item._id).indexOf(deleteTodo._id);
    (removeIndex >= 0) && todos.list.splice(removeIndex, 1);
    return res.json({
        message: "",
        success: true,
    });
}