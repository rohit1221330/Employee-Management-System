import React from 'react';
import TaskCard from './TaskCard'; // Hum ek hi reusable TaskCard component use karenge

const TaskList = ({ data }) => {
    // Tasks ko unke status ke hisaab se alag-alag arrays mein filter kar lein
    const activeTasks = data.tasks.filter(task => task.status === 'active');
    const completedTasks = data.tasks.filter(task => task.status === 'completed');
    const failedTasks = data.tasks.filter(task => task.status === 'failed');

    return (
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3">
            
            {/* Column for Active Tasks */}
            <div className="p-4 bg-gray-100 rounded-xl dark:bg-gray-900">
                <h3 className="mb-4 text-lg font-semibold text-blue-700 dark:text-blue-400 font-poppins">
                    Active / In-Progress ({activeTasks.length})
                </h3>
                <div className="flex flex-col gap-4">
                    {activeTasks.length > 0 ? (
                        activeTasks.map(task => <TaskCard key={task.id} data={task} />)
                    ) : (
                        <p className="text-sm text-center text-gray-500">No active tasks.</p>
                    )}
                </div>
            </div>

            {/* Column for Completed Tasks */}
            <div className="p-4 bg-gray-100 rounded-xl dark:bg-gray-900">
                <h3 className="mb-4 text-lg font-semibold text-green-700 dark:text-green-400 font-poppins">
                    Completed ({completedTasks.length})
                </h3>
                <div className="flex flex-col gap-4">
                    {completedTasks.length > 0 ? (
                        completedTasks.map(task => <TaskCard key={task.id} data={task} />)
                    ) : (
                        <p className="text-sm text-center text-gray-500">No completed tasks yet.</p>
                    )}
                </div>
            </div>

            {/* Column for Failed Tasks */}
            <div className="p-4 bg-gray-100 rounded-xl dark:bg-gray-900">
                <h3 className="mb-4 text-lg font-semibold text-red-700 dark:text-red-400 font-poppins">
                    Failed / Overdue ({failedTasks.length})
                </h3>
                <div className="flex flex-col gap-4">
                    {failedTasks.length > 0 ? (
                        failedTasks.map(task => <TaskCard key={task.id} data={task} />)
                    ) : (
                        <p className="text-sm text-center text-gray-500">No failed tasks.</p>
                    )}
                </div>
            </div>

        </div>
    );
}

export default TaskList;