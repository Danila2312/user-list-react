import React from 'react'
import User from './User'

class Users extends React.Component {
	render() {
		if (this.props.users.length > 0)
			return (
				<div className='users-table'>
					{this.props.users.map(el => (
						<User
							onEdit={this.props.onEdit}
							onDelete={this.props.onDelete}
							key={el.id}
							user={el}
						/>
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
