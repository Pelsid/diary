import './app-filter.css'

const AppFilter = (props) => {
	let allLsit = 'btn btn-light';
	let targetList = 'btn btn-outline-light';
	if (props.list) {
		allLsit += 'btn btn-outline-light';
		targetList += 'btn btn-light';
	}
	
	return (
		<div className="btn-group">
			<button className={allLsit}
				type="button"
				onClick={() => props.filterProperty('')}>
				Все задачи
			</button>
			<button className={targetList}
				type="button"
				onClick={() => props.filterProperty('done')}>
				Выполненные задачи
			</button>
		</div>
	);
}

export default AppFilter;