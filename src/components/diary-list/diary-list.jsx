import './diary-list.css'
import DiaryListItem from "../diary-list-item/diary-list-item"


const DiaryList = ({ data, onDelete, onToggleDone }) => {
	/*помещаем в переменную массив, который мы перебераем при помощи map*/
	const elements = data.map(item => {
		const { id, ...itemProps } = item;
		return (
			/*
			Вставляем тег и помещаем проигдексированный item, где свойства и значения будут записаны по порядку.
			*/
			<DiaryListItem 
			key={id} 
			{...itemProps} 
			order={id}
			onDeletes={() => onDelete(id)}
			onToggleDone={() => onToggleDone(id)}
			/>
		)
	});

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	)
}

export default DiaryList;