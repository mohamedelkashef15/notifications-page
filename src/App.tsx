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

interface INotification {
  id: number;
  img: string;
  name: string;
  content: string;
  time: string;
  subContent?: string;
  isMarked: boolean;
}

const notificationData = [
  {
    id: 1,
    img: "/images/avatar-mark-webber.webp",
    name: "Mark Webber",
    content: "reacted to your recent post",
    subContent: "My first tournament today!",
    time: "1m ago",
    isMarked: true,
  },
  {
    id: 2,
    img: "/images/avatar-angela-gray.webp",
    name: "Angela Gray",
    content: "followed you",
    time: "5m ago",
    isMarked: true,
  },
  {
    id: 3,
    img: "/images/avatar-jacob-thompson.webp",
    name: "Jacob Thompson",
    content: "has joined your group",
    subContent: " Chess Club",
    time: "1day ago",
    isMarked: true,
  },
  {
    id: 4,
    img: "/images/avatar-nathan-peterson.webp",
    name: "Nathan Peterson",
    content: "reacted to your recent post",
    subContent: "5 end-game strategies to increase your win rate",
    time: "2 weeks ago",
    isMarked: false,
  },
  {
    id: 5,
    img: "/images/avatar-anna-kim.webp",
    name: "Anna Kim",
    content: "left the group",
    subContent: "Chess Club",
    time: "2 weeks ago",
    isMarked: false,
  },
];

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
        {notificationData.map((item) => {
          return (
            <Notification
              key={item.id}
              name={item.name}
              content={item.content}
              subContent={item.subContent}
              img={item.img}
              time={item.time}
              isMarked={item.isMarked}
            />
          );
        })}
        <MessageNotification />
        <CommentNotification />
      </div>
    </div>
  );
}

function Notification({ name, img, content, time, subContent, isMarked }: INotification) {
  return (
    <div className={`notification ${isMarked && "marked"}`}>
      <img src={img} alt={name} />
      <div className="content">
        <p>
          <strong>{name}</strong> {content} <span>{subContent}</span>
          {isMarked && <div className="circle-red"></div>}
        </p>
        <p>{time}</p>
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
