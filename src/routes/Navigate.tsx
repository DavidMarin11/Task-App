import React, { useContext, useEffect, useState } from 'react'
import { TasksScreen } from '../tasks/screen/TasksScreen';
import { StackNavigate } from './StackNavigate';
import { authContext } from '../context/authContext';
import { IsLoading } from '../components/IsLoading';

export const Navigate = () => {
    const {isLogin, isLoading} = useContext(authContext);
    
    if (isLoading) return <IsLoading />
    return (
        <>
            {
            isLogin ? <TasksScreen /> : <StackNavigate /> 
            }
        </>
    )
}
