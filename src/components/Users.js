import React from 'react'

class Users extends React.Component {
	users = [
		{
			id: 1,
			firstname: 'Тимофей',
			lastname: 'Чистяков',
			bio: 'lor',
			age: 11,
			isCool: false,
		},
		{
			id: 2,
			firstname: 'Даня',
			lastname: 'Чистяков',
			bio: 'lor',
			age: 20,
			isCool: true,
		},
	]

	render() {
		if (this.users.length > 0)
			return (
				<div className='users-table'>
					{this.users.map(el => (
						<div className='user' key={el.id}>
							<h2>
								{el.firstname} {el.lastname}
							</h2>

							<p>Возраст {el.age}</p>

							<p>{el.bio}</p>

							<b>{el.isCool ? 'Крутой' : 'Лох'}</b>
						</div>
					))}
				</div>
			)
		else
			return (
				<div className='users-table'>
					<h3>Пользователи не найдены \:</h3>
				</div>
			)
	}
}

export default Users
