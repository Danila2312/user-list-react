import React from 'react'

class AddUser extends React.Component {
	userAdd = {}
	render() {
		return (
			<form ref={el => (this.myForm = el)}>
				<input
					placeholder='Имя'
					onChange={event => this.setState({ first_name: event.target.value })}
				/>
				<input
					placeholder='Фамилия'
					onChange={event => this.setState({ last_name: event.target.value })}
				/>
				<textarea
					placeholder='Био'
					onChange={event => this.setState({ bio: event.target.value })}
				></textarea>
				<input
					placeholder='Возраст'
					onChange={event => this.setState({ age: event.target.value })}
				/>
				<label htmlFor='isCool'>Вы крутой?</label>
				<input
					type='checkbox'
					id='isCool'
					onChange={event => this.setState({ isCool: event.target.checked })}
				/>
				<button
					type='button'
					onClick={() => {
						this.myForm.reset()
						this.userAdd = {
							first_name: this.state.first_name,
							last_name: this.state.last_name,
							bio: this.state.bio,
							age: this.state.age,
							isCool: this.state.isCool,
						}
						if (this.props.user) this.userAdd.id = this.props.user.id
						this.props.onAdd(this.userAdd)
					}}
				>
					Добавить
				</button>
			</form>
		)
	}
}

export default AddUser
