import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface ChatWindowProps {
  name: string;
  image: string;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({ name, image }) => {
  return (
    <div className="chat_window">
      <div className="chat_window__upper">
        <button className="chat_window__upper__back">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="chat_window__upper__back__left"
          />
          Назад
        </button>
        <span className="chat_window__upper__name">{name}</span>
        <img src={image} className="chat_window__upper__window" alt={name} />
      </div>
      <div className="chat_window__main"></div>
      <div className="chat_window__textfield"></div>
    </div>
  );
};
