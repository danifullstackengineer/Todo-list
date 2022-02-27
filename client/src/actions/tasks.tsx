import $ from "jquery";
import ITasks from "../Interfaces/tasks";

export const getAllTasks = () => async (dispatch:any) => {
    try{
        await $.ajax({
          url: "/getTasks",
          type: "GET",
        }).done((data) => {
            console.log("hello")
            dispatch({
              type: "GET_ALL_TASKS",
              payload: data || null,
            });
        });
    }
    catch(err){
        console.error(err)
    }
};
