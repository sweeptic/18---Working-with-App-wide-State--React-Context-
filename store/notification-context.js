const { createContext, useState } = require('react');

const NotificationContext = createContext({
  notification: null, // {title, message, status}
  showNotification: function () {},
  hideNotification: function () {},
});

export function NotificationContextProvider(props) {
  // const [state, setstate] = useState(initialState)

  return <NotificationContext.Provider>{props.children}</NotificationContext.Provider>;
}

export default NotificationContext;
