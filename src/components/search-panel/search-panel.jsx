import React from 'react';
import './search-panel.css'


class SearchPanel extends React.Component {
	/*
	в стандарте реакта 2022года мо може не прописывать конструктор, супер и this перед state
	так как при создании классового компонента реакт уже неявно передаёт вышеописанные инструкции
	*/
	state = {
		term: ''
	}

	/*Следим за обновлением инпута*/
	UpdateSearch = (e) => {
		const term = e.target.value;
		this.setState({ term });
		this.props.onUpdateSearch(term)
	}

	render() {
		return (
			<input
				type="text"
				className="form-control serach-input"
				placeholder="Найти задачу"
				value={this.state.term}
				onChange={this.UpdateSearch} />
		)
	}
}

export default SearchPanel;