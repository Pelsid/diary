import React from 'react';
import './App.css'
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import DiaryList from '../diary-list/diary-list';
import DiaryAddForm from '../diary-add-form/diary-add-form';


class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: 'Открыть список', done: true, id: 1 },
				{ name: 'Добавить новую задачу', done: false, id: 2 },
			],
			/*свойство в которое помещаем текст из строки поиска*/
			term: '',
			/*свойство в которое передаём текст от кнопок с фильтром*/
			filter: ''
		}
		this.maxId = 2;
	}


	/*функция удаления, которая откликается на нажатие кнопки*/
	deleteItem = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter(item => item.id !== id)
			}
		})
	}

	/*добавляю новыйх пользователей через инпут */
	addItem = (name) => {
		++this.maxId;

		const newItem = {
			name: name,
			done: false,
			id: this.maxId
		}

		this.setState(({ data }) => {
			const newArr = [...data, newItem]
			return { data: newArr }
		})
	}

	onToggleDone = (id) => {
		/*начинаем менять состояние компонента и добавляем в параметры data, что бы взаимодействовать с данными*/
		this.setState(({ data }) => ({
			/*присваеваем data копию изменённого массива, если нажимаем на какой то индекс*/
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, done: !item.done }
				}
				/*возвращем изменённую копию массива*/
				return item;
			})
		}))
	}

	/*Работа с инпутом поиска*/
	onUpdateSearch = (term) => {
		this.setState({ term })
	}

	/*Фильтр списка по слову или букве*/
	searchEmp = (items, term) => {
		/*завершаем если пустой инпут*/
		if (term.length === 0) {
			return items;
		}

		return items.filter(item => {
			return item.name.indexOf(term) > -1
		})
	}

	/*возвращаем отфильтрованный список если done*/
	filterButtons = (items, filter) => {
		if (filter === 'done') {
			return items.filter(item => item.done)
		} else {
			return items
		}
	}

	/*меняем значение свойства filter*/
	filterProperty = (filter) => {
		if (filter) {
			return this.setState({ filter })
		} else {
			return this.setState({ filter })
		}
	}

	render() {
		const { data, term, filter } = this.state;
		const tasks = this.state.data.length;
		const increased = this.state.data.filter(item => item.done).length;
		const visibleData = this.filterButtons(this.searchEmp(data, term), filter);

		return (
			<div className="app" >
				<AppInfo tasks={tasks} increased={increased} />
				<div className='search-panel'>
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<AppFilter filterProperty={this.filterProperty} list={this.state.filter} />
				</div>
				<DiaryList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleDone={this.onToggleDone} />
				<DiaryAddForm onAdd={this.addItem} />
			</div>
		)
	}
}

export default App;