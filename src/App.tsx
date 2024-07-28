/*
  App   
    - NotificationPage
      Notification Number + Mark all as read
      - Notification
      - Notification
      - Notification
      - MessageNotification
      - CommentNotification
      - Notification
      - Notification

  Functionality 
    - Distinguish between "unread" and "read" notifications
    - Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
    - Responsiveness 
    - See hover and focus states for all interactive elements on the page
*/

function App() {
  return (
    <main>
      <section>
        <div className="container">
          <NotificationPage />
        </div>
      </section>
    </main>
  );
}

function NotificationPage() {
  return (
    <div id="notification-page">
      <div className="notification-header">
        <h1>
          Notifications <span>3</span>
        </h1>
        <button className="btn">Mark all as read</button>
      </div>
      <div className="notifications">
        <Notification />
        <Notification />
        <Notification />
        <MessageNotification />
        <CommentNotification />
        <Notification />
        <Notification />
      </div>
    </div>
  );
}

function Notification() {
  return (
    <div className="notification selected">
      <img src="images/avatar-mark-webber.webp" alt="" />
      <div className="content">
        <p>
          <strong>Mark Webber</strong> reacted to your recent post <span>My first tournament today!</span>
        </p>
        <p>1m ago</p>
      </div>
    </div>
  );
}

function MessageNotification() {
  return <div></div>;
}

function CommentNotification() {
  return <div></div>;
}

export default App;
