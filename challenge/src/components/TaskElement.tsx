
import React from 'react'
import { Task } from '../store/reducers/types'

export const TaskElement = (props: Task) => (<li>{props.title}</li>)
