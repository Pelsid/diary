import React from 'react';
import './diary-list-item.css'



const DiaryListItem = (props) => {

	const { name, order, onDeletes, onToggleDone, done } = props;

	/*здесь мы добавляем имя класса если done === true*/
	let doneClass = 'list-group-item d-flex justify-content-between'
	let plusClass = 'list-group-item-label'
	let likeClass = 'fas fa-star'
	if (done) {
		plusClass += ' plus';
		likeClass += ' like';
		doneClass += ' done';
	}

	return (
		<li className={doneClass}>
			{/*В name мы получаем значения, которые прописаны в теге <DiaryListItem/>*/}
			<span className={plusClass}><strong>{order + ')'}</strong>{name}</span>
			<div className='d-flex justify-content-center'>
				<button type="button"
					className="btn-done btn-sm "
					onClick={onToggleDone}>
					<i className="fas fa-done"></i>
				</button>

				<button type="button"
					className="btn-trash btn-sm "
					onClick={onDeletes}>
					<i className="fas fa-trash"></i>
				</button>
				<i className={likeClass}></i>
			</div>
		</li>
	)

}

export default DiaryListItem;