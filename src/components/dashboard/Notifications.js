import React from 'react'
import Moment from 'react-moment'

const Notifications = (props) => {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">Notifications</div>
          <ul className="notifications">
            { notifications && notifications.map(item => {
              return (
                <li key={item.id}>
                  <span className="pink-text">{item.user} </span>
                  <span>{item.content}</span>
                  <div className="grey-text note-data">
                    <Moment date={item.time.toDate()} />
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications;