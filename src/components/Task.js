import '../styles/Task.css'
import Work from '../assets/icon-work.svg'
import Play from '../assets/icon-play.svg'
import Study from '../assets/icon-study.svg'
import Exercise from '../assets/icon-exercise.svg'
import Social from '../assets/icon-social.svg'
import SelfCare from '../assets/icon-self-care.svg'


function Task({datas, activeCategory}){
  console.log(activeCategory)

  function searchIcon(title) {
    switch (title) {
      case 'Work' :
        return Work;
      case 'Play' :
        return Play;
      case 'Study' :
        return Study;
      case 'Exercise' :
        return Exercise;
      case 'Social' :
        return Social;
      case 'SelfCare' :
        return SelfCare;
      default:
          return null;
    }
  }

  return (
    <ul className="Task">
       {datas.map(({background, title, timeframes, id}) => (
          <li key={id}>
            <div className="Task-sticker" style={{backgroundColor:background}}>
              <img src={searchIcon(title)} alt="" />
            </div>
            <div className="Task-item">
              <h2>{title}</h2>
              <span>...</span>
              <div className="timeframe">
              <p className="current-timeframe">{activeCategory === 'daily'? timeframes.daily.current : activeCategory === 'weekly'? timeframes.weekly.current : timeframes.monthly.current}hrs</p>
              <p className="previous-timeframe">Last Week - {activeCategory === 'daily'? timeframes.daily.previous : activeCategory === 'weekly'? timeframes.weekly.previous : timeframes.monthly.previous}hrs</p>
              </div>
            </div>
          </li>
          ))}
    </ul>
  )
}

export default Task