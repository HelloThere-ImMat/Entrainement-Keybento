import React, { useState } from 'react';

// Reuse the Task type definition
type Task = {
  id: number;
  label: string;
  completed: boolean;
};

// Define the props for TaskItem component
interface TaskItemProps {
  task: Task;
  toggleTaskCompletion: (taskId: number) => void;
  editTaskLabel: (taskId: number, newLabel: string) => void;
}

function TaskItem({ task, toggleTaskCompletion, editTaskLabel } : TaskItemProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newLabel, setNewLabel] = useState<string>(task.label);

  const handleEditSave = () => {
    editTaskLabel(task.id, newLabel);
    setIsEditing(false);
  };

  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '8px',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px'
      }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
        style={{ marginRight: '10px' }}
      />
      {isEditing ? (
        <input
          type="text"
          value={newLabel}
          onChange={(e) => setNewLabel(e.target.value)}
          onBlur={handleEditSave}
          style={{
            flex: '1',
            padding: '4px',
            marginRight: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
      ) : (
        <span
          style={{
            flex: '1',
            textDecoration: task.completed ? 'line-through' : 'none'
          }}
        >
          {task.label}
        </span>
      )}
      <button
        onClick={() => setIsEditing(!isEditing)}
        style={{
          padding: '4px 8px',
          backgroundColor: isEditing ? '#28a745' : '#ffc107',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
};

export default TaskItem;
