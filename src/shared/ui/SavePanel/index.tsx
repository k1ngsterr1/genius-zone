import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

export const SavePanel = () => {
  return (
    <div className="save-panel flex items-center">
      <div className="save-panel__content flex items-center justify-center">
        <FontAwesomeIcon className="save-panel__content__icon" icon={faCheck} />
        <span className="save-panel__content__text">Ваш модуль сохранен</span>
      </div>
    </div>
  );
};
