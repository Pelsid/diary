import React from 'react';
import './diary-add-form.css';

/*
Классовый, а не функциональный компонент React
Мы создаём класс и наследуем методы и свовства компонента рекат при помощи extends
*/
class DiaryAddForm extends React.Component {
	constructor(props) {
		super(props)
		/*Здесь мы добавляем в наш класс состояние через this.state и прописываем свойства*/
		this.state = {
			name: ''
		}
	}

	onValueChange = (e) => {
		this.setState({
			/*
			Здесь мы используем квардратные скобки, что бы поместить туда инструкцию которая будет взаимодействовать с 
			атрибутом name в инпутах нашего html компонента и передавать значения мы будем из e.target.value
			Мы так поступаем, потому что у инпута есть один атрибут который нормально подскажет реакту, какому именно
			свойству мы передаём значения(Имя свойства прописанно в самом name)
			*/
			[e.target.name]: e.target.value
		})
	}

	onSubmit = (e) => {
		/*preventDefault нужен что бы не перезагружалась страница после нажатия на кнопку формы*/
		e.preventDefault();
		if (this.state.name.length) {
			/*отправляем данные в аргументы вызываемой функции*/
			this.props.onAdd(this.state.name);
			/*стираем у инпутов текст*/
			this.setState({
				name: ''
			})
		}
		else {
			alert('Некоректно введены данные');
		}
		//console.log();
	}

	/*обязательно прописываем render и помещаем туда наш компонент*/
	render() {
		/*деструктурируем данные из 7 по 9 строчку*/
		const { name } = this.state;

		return (
			<div className="app-add-form">
				<h3>Добавить новую задачу</h3>
				<form
					className="add-form d-flex"
					onSubmit={this.onSubmit}>
					<input type="text"
						className="form-control new-post-label col-sm-12 col-md-6 col-lg-6"
						placeholder="Какая будет задача?"
						name="name"
						/*передаём сюда значения из 8 строчки*/
						value={name}
						onChange={this.onValueChange} />
					<button type="submit" className="btn btn-outline-light col-sm-12 col-md-6 col-lg-6">Добавить</button>
				</form>
			</div>
		)
	}
}

export default DiaryAddForm;