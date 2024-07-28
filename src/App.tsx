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
  id?: number;
  img: string;
  name: string;
  content: string;
  time: string;
  subContent?: string;
  isMarked: boolean;
}

interface IMessageNotification extends INotification {
  message: string;
}

interface ICommentNotification extends INotification {
  img2: string;
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

const messageNotificationData = [
  {
    id: 1,
    img: "/images/avatar-rizky-hasanuddin.webp",
    name: "Rizky Hasanuddin",
    content: "sent you a private message",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    time: "5 days ago",
    isMarked: false,
  },
];

const commentNotificationData = [
  {
    id: 1,
    img: "/images/avatar-kimberly-smith.webp",
    img2: "/images/image-chess.webp",
    name: "kimberly Smith",
    content: "commented on your picture",
    time: "1 week ago",
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
  const data = notificationData;
  const messageData = messageNotificationData;
  const commentData = commentNotificationData;
  return (
    <div id="notification-page">
      <div className="notification-header">
        <h1>
          Notifications <span>{3}</span>
        </h1>
        <button className="btn">Mark all as read</button>
      </div>
      <div className="notifications">
        <Notification
          name={data[0].name}
          img={data[0].img}
          content={data[0].content}
          subContent={data[0].subContent}
          time={data[0].time}
          isMarked={data[0].isMarked}
        />
        <Notification
          name={data[1].name}
          img={data[1].img}
          content={data[1].content}
          subContent={data[1].subContent}
          time={data[1].time}
          isMarked={data[1].isMarked}
        />
        <Notification
          name={data[2].name}
          img={data[2].img}
          content={data[2].content}
          subContent={data[2].subContent}
          time={data[2].time}
          isMarked={data[2].isMarked}
        />
        <MessageNotification
          name={messageData[0].name}
          img={messageData[0].img}
          content={messageData[0].content}
          message={messageData[0].message}
          time={messageData[0].time}
          isMarked={messageData[0].isMarked}
        />
        <CommentNotification
          name={commentData[0].name}
          img={commentData[0].img}
          img2={commentData[0].img2}
          content={commentData[0].content}
          time={commentData[0].time}
          isMarked={commentData[0].isMarked}
        />
        <Notification
          name={data[3].name}
          img={data[3].img}
          content={data[3].content}
          subContent={data[3].subContent}
          time={data[3].time}
          isMarked={data[3].isMarked}
        />
        <Notification
          name={data[4].name}
          img={data[4].img}
          content={data[4].content}
          subContent={data[4].subContent}
          time={data[4].time}
          isMarked={data[4].isMarked}
        />
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
          {isMarked && <span className="circle-red"></span>}
        </p>
        <p>{time}</p>
      </div>
    </div>
  );
}

function MessageNotification({ img, isMarked, name, content, time, message }: IMessageNotification) {
  return (
    <div className={`notification ${isMarked && "marked"}`}>
      <img src={img} alt={name} />
      <div className="content">
        <p>
          <strong>{name}</strong> {content} <span></span>
          {isMarked && <span className="circle-red"></span>}
        </p>
        <p>{time}</p>
        <div className="message">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

function CommentNotification({ img, isMarked, name, content, time, img2 }: ICommentNotification) {
  return (
    <div className="row">
      <div className={`notification ${isMarked && "marked"}`}>
        <img src={img} alt={name} />
        <div className="content">
          <p>
            <strong>{name}</strong> {content}
            {isMarked && <span className="circle-red"></span>}
          </p>
          <p>{time}</p>
        </div>
      </div>
      <img src={img2} alt={name} />
    </div>
  );
}

export default App;
