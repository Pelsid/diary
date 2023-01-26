/*
Это пример файла App.js если бы мы работали с компонентами через классы а не через функции.
*/
import './App.css'
import React, { Component } from 'react';


/*Вместо функции мы создаём новый класс, который наследует свойства и методы класса/компонента React*/
class AppClass extends Component {
	/*В параметры контруктора мы прописываем пропсы*/
	constructor(props) {
		/*В супер мы так же прописываем пропсы и получаем*/
		super(props);
		this.state = {
			years: 22,
			text: '+1',
			textWord: 's'
		}
	}

	/*
	Добавляем метод к нашему новому классу.
	Что бы не терялся контекст нашего метода т.е this, мы создаём метод через стерлочную функцию.
	Если создадим как обычный метод класса, то мы не сможем получить значения this конкретного
	DOM элемента
	*/
	incNumb = () => {
		/*
		setState добавляет в очередь изменения в состоянии компонента. Тоесть выполнение тела
		функции setState будет асинхронным, что бы последовательность метода у nextYear не была
		нарушена. К пример без setState в свойстве years мы моглибы перескочить с 24 до 27 при 
		следующией итерации, а с setState у нас не запустится следующая итерация, пока предыдущая
		не отработает и не выдаст результат, но при условии если state помещён в параметры и 
		выступает в качестве колбэкфункции.

		Также он указывает React, что компонент и его дочерние элементы должны быть повторно 
		отрендерены с обновлённым состоянием. Этот метод используется для обновления интерфейса в 
		ответ на обработчики событий и ответы сервера.

		state - Состояние содержит данные, специфичные для этого компонента. Они могут измениться 
		со временем. Состояние определяется пользователем и должно быть простым объектом JavaScript.
		Вам не нужно вставлять в состояние значение, если оно не используется для рендера или потока 
		данных (например, идентификатор таймера).

		Никогда не мутируйте this.state напрямую, так как более поздний вызов setState() 
		может перезаписать эту мутацию. Относитесь к this.state как к иммутабельному объекту.
		*/
		this.setState(state => ({
			years: this.state.years + 1
		}))
	}

	decNumb = () => {
		this.setState(state => ({
			years: this.state.years - 1
		}))
	}

	randNumb = () => {
		this.setState(state => ({
			years: this.state.years - 5
		}))
	}

	resNumb = () => {
		this.setState(state => ({
			years: this.state.years = 0
		}))
	}

	commitInputChanges = (e) => {
		this.setState(state => ({
			textWord: e.target.value
		}))
	}

	/*Рендерим наш компонент*/
	render() {
		/*Деструктурируем наш пропс*/
		const { name, surname, } = this.props;
		/*Деструктурируем наше состояние*/
		const { years, textWord } = this.state;
		return (
			<div>
				{/*Вызываем метод nextYear при помощи клика*/}
				<button onClick={this.incNumb}>Inc</button>
				<button onClick={this.decNumb}>Dec</button>
				<button onClick={this.randNumb}>Rand</button>
				<button onClick={this.resNumb}>Res</button>
				<h1>My name is {name}, surname {surname}, age - {years}</h1>
				<span>Введите должность</span>
				{/*onChange отправляет значения, как только мы начинаем вносить какие то изменения*/}
				<input type="text" onChange={this.commitInputChanges} />
				<b />
				<p>Наш текст из инпута <strong>{textWord}</strong></p>
			</div>
		)
	}
}

export default AppClass;