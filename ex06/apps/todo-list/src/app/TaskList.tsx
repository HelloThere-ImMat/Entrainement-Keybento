import TaskItem from './TaskItem';

type Task = {
	id: number;
	label: string;
	completed: boolean;
  };

interface TaskListProps {
	tasks: Task[];
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  }

function TaskList({ tasks, setTasks } : TaskListProps) {
	const toggleTaskCompletion = (taskId: number) => {
		setTasks(
		  tasks.map(task =>
			task.id === taskId ? { ...task, completed: !task.completed } : task
		  )
		);
	  };

	  const editTaskLabel = (taskId: number, newLabel: string) => {
		setTasks(
		  tasks.map(task =>
			task.id === taskId ? { ...task, label: newLabel } : task
		  )
		);
	  };

	  return (
		<div className='content'>
			<ul style={{ listStyle: 'none', padding: 0 }}>
				{tasks.map(task => (
					<TaskItem
						key={task.id}
						task={task}
						toggleTaskCompletion={toggleTaskCompletion}
						editTaskLabel={editTaskLabel}
					/>
				))}
			</ul>
		</div>
	  );
}

export default TaskList;
