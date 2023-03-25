import React from 'react'
import './TodoList.scss'

const data = [
	{
		id: 1,
		title: 'Buy new laptop',
		name: 'delete',
	},
	{
		id: 2,
		title: 'Complete site build',
		name: 'delete',
	},
	{
		id: 3,
		title: 'Call new client',
		name: 'delete',
	},
	{
		id: 4,
		title: 'Complete new course',
		name: 'delete',
	}
];

export default function TodoList() {
	return (
		<div className='todoList'>
			{data.map(({ id, title, name }) => {
				return (
					<div key={id} className='todoList__row'>
						<div className='todoList__item'>{title}</div>
						<div className='todoList__delete'>{name}</div>
					</div>
				)
            })}
		</div>
	)
}