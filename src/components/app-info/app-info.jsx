import './app-info.css'


const AppInfo = ({tasks, increased}) => {
	return (
		<div className="app-info">
			<h1>Список поставленных задач</h1>
			<h2>Общее количество задач: {tasks}</h2>
			<h2>Количество выполненных задач: {increased}</h2>
		</div>
	)
}

export default AppInfo;