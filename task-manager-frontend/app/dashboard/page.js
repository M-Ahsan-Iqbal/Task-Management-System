'use client';

import { useState, useEffect } from 'react';
import { taskAPI } from '@/services/taskAPI';

export default function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        status: 'pending',
        priority: 'medium',
        dueDate: '',
        userId: 1,  
    });

    useEffect(() => {
        fetchTasks();
    }, []);

    // fetch tasks for user
    const fetchTasks = async () => {
        try {
            setLoading(true);
            const data = await taskAPI.getAllTasks(1);
            setTasks(data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        } finally {
            setLoading(false);
        }
    }

    // handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await taskAPI.createTask(formData);
            setFormData({
                title: '',
                description: '',
                status: 'pending',
                priority: 'medium',
                dueDate: '',
                userId: 1,
            });
            fetchTasks();
        } catch (error) {
            console.error('Error creating task:', error);
        }
    }
}
