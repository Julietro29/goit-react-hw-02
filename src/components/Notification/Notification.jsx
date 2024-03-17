import css from './Notification.module.css'

export const Notification = ({ message }) => {
  return (
         <div className={css.notificationWrapper}>
      <p>{message}</p>
        </div>
  )
}