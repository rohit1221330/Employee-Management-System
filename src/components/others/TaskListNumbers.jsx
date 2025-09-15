import React from 'react';
// Icons for a professional look
import { ClipboardDocumentIcon, CheckCircleIcon, PlayCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

// Ek chota, reusable card component banaya hai taaki code repeat na ho
const StatCard = ({ title, value, icon, color }) => {
    return (
        <div className={`p-5 rounded-xl shadow-md flex items-center gap-4 ${color}`}>
            <div className="flex-shrink-0">{icon}</div>
            <div>
                <div className="text-3xl font-bold text-gray-800 dark:text-white">{value}</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-300">{title}</div>
            </div>
        </div>
    );
};

const TaskListNumbers = ({ data }) => {
    // IMPORTANT: Hum task counts ko 'taskCount' object se nahi,
    // balki 'tasks' array se live calculate kar rahe hain.
    const activeTasks = data.tasks.filter(task => task.status === 'active').length;
    const completedTasks = data.tasks.filter(task => task.status === 'completed').length;
    const failedTasks = data.tasks.filter(task => task.status === 'failed').length;
    
    // Total tasks for demonstration
    const totalTasks = data.tasks.length;

    return (
        <div className='grid grid-cols-2 gap-5 mt-8 md:grid-cols-4'>
            <StatCard 
                title="Active Tasks" 
                value={activeTasks} 
                icon={<PlayCircleIcon className="w-10 h-10 text-blue-600 dark:text-blue-400" />}
                color="bg-blue-100 dark:bg-blue-900/50"
            />
            <StatCard 
                title="Completed Tasks" 
                value={completedTasks} 
                icon={<CheckCircleIcon className="w-10 h-10 text-green-600 dark:text-green-400" />}
                color="bg-green-100 dark:bg-green-900/50"
            />
            <StatCard 
                title="Failed Tasks" 
                value={failedTasks} 
                icon={<XCircleIcon className="w-10 h-10 text-red-600 dark:text-red-400" />}
                color="bg-red-100 dark:bg-red-900/50"
            />
            <StatCard 
                title="Total Tasks" 
                value={totalTasks} 
                icon={<ClipboardDocumentIcon className="w-10 h-10 text-yellow-600 dark:text-yellow-400" />}
                color="bg-yellow-100 dark:bg-yellow-900/50"
            />
        </div>
    );
}

export default TaskListNumbers;