import React from 'react';
import { CalendarDaysIcon, TagIcon } from '@heroicons/react/24/solid';

const statusStyles = {
    active: 'border-l-blue-500',
    completed: 'border-l-green-500',
    failed: 'border-l-red-500',
};

const TaskCard = ({ data }) => {
    return (
        <div className={`p-4 bg-white rounded-lg shadow-md border-l-4 dark:bg-gray-800 ${statusStyles[data.status]}`}>
            <h4 className="font-bold text-gray-800 dark:text-white">{data.title}</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{data.description}</p>
            
            <div className="flex items-center justify-between mt-4 text-xs text-gray-500 dark:text-gray-400">
                <div className='flex items-center gap-1'>
                    <CalendarDaysIcon className='w-4 h-4'/>
                    <span>{data.date}</span>
                </div>
                <div className='flex items-center gap-1 px-2 py-1 text-white bg-gray-500 rounded-full dark:bg-gray-700'>
                    <TagIcon className='w-3 h-3'/>
                    <span>{data.category}</span>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;