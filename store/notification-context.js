const { createContext, useState, useEffect } = require('react');

const NotificationContext = createContext({
  notification: null, // {title, message, status}
  showNotification: function (notificationData) {},
  hideNotification: function (notificationData) {},
});

export function NotificationContextProvider(props) {
  const [activeNotification, setActiveNotification] = useState();

  useEffect(() => {
    let timer;
    if (activeNotification && (activeNotification.status === 'success' || activeNotification.status === 'error')) {
      timer = setTimeout(() => {
        hideNotificationHandler();
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [activeNotification]);

  function showNotificationHandler(notificationData) {
    setActiveNotification(notificationData);
  }

  function hideNotificationHandler() {
    setActiveNotification(null);
  }

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return <NotificationContext.Provider value={context}>{props.children}</NotificationContext.Provider>;
}

export default NotificationContext;
