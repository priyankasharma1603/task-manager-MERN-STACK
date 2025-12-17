import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { API } from "../api";
import { Task } from "../types/task";

export function useTasks() {
  const queryClient = useQueryClient();

  const taskQuery = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await API.get<Task[]>("/tasks");
      return res.data;
    }
  });

  const addTask = useMutation({
    mutationFn: async (task: Partial<Task>) => {
      await API.post("/tasks", task);
    },
    onSuccess: () => queryClient.invalidateQueries(["tasks"])
  });

  const updateTask = useMutation({
    mutationFn: async (task: Task) => {
      await API.put(`/tasks/${task._id}`, task);
    },
    onSuccess: () => queryClient.invalidateQueries(["tasks"])
  });

  const deleteTask = useMutation({
    mutationFn: async (id: string) => {
      await API.delete(`/tasks/${id}`);
    },
    onSuccess: () => queryClient.invalidateQueries(["tasks"])
  });

  return { taskQuery, addTask, updateTask, deleteTask };
}
