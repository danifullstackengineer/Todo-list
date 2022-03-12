import $ from "jquery";
import ITasks from "../Interfaces/tasks";

export const getAllTasks = () => async (dispatch: any) => {
  try {
    await $.ajax({
      url: "/getTasks",
      type: "GET",
    }).done((data:any) => {
      dispatch({
        type: "GET_ALL_TASKS",
        payload: data || null,
      });
    });
  } catch (err) {
    console.error(err);
  }
};

export const AddTask = (data: ITasks) => async (dispatch: any) => {
  try {
    await $.ajax({
      type: "POST",
      url: "/addTask",
      data: data,
    }).done((res:any) => {
      dispatch({
        type: "ADD_TASK",
        payload: res,
      });
    });
  } catch (err) {
    console.error(err);
  }
};

export const RemoveAllTasks = () => async (dispatch: any) => {
  try {
    await $.ajax({
      type: "POST",
      url: "/removeAllTasks",
    }).done(() => {
      dispatch({
        type: "REMOVE_ALL_TASKS",
        payload: null,
      });
    });
  } catch (err) {
    console.error(err);
  }
};
export const RemoveTask = (id: string | undefined) => async (dispatch: any) => {
  if (id === undefined) {
    return;
  }
  try {
    await $.ajax({
      type: "POST",
      url: `/removeTask/${id}`,
      data: { id: id },
    }).done((res:any) => {
      dispatch({
        type: "REMOVE_TASK",
        payload: id,
      });
    });
  } catch (err) {
    console.error(err);
  }
};
export const GetTask = (id: string | undefined) => async (dispatch: any) => {
  if (id === undefined) {
    return;
  }
  try {
    await $.ajax({
      type: "POST",
      url: "/getTask",
      data: { id: id },
    }).done((res:any) => {
      dispatch({
        type: "CURRENT_TASK",
        payload: res,
      });
    });
  } catch (err) {
    console.error(err);
  }
};

export const UpdateTask =
  ({ id, task, createdAt, completed }: { id: string | undefined; task: string , createdAt: Date, completed:boolean}) =>
  async (dispatch: any) => {
    if (id === undefined) {
      return;
    }
    try {
      await $.ajax({
        type: "POST",
        url: `/updateTask/${id}`,
        data: { id: id, task: task, createdAt:createdAt, completed: completed},
      }).done((res:any) => {
        dispatch({
          type: "UPDATE_TASK",
          payload: res,
        });
      });
    } catch (err) {
      console.error(err);
    }
  };
