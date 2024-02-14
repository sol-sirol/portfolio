export const CubeControl = () => {
  return (
    <div className="cube-control unselectable">
      <div className="cube-control__wrapper">
        <div className="cube-control__body">
          <h2 className="cube-control__title">Управление гранями</h2>
          <ul className="cube-control__list">
            <li>
              <span className="cube-control__button">q</span>
            </li>
            <li>
              <span className="cube-control__button">w</span>
            </li>
            <li>
              <span className="cube-control__button">e</span>
            </li>
            <li>
              <span className="cube-control__button">a</span>
            </li>
            <li>
              <span className="cube-control__button">s</span>
            </li>
            <li>
              <span className="cube-control__button">d</span>
            </li>
          </ul>
          <div className="cube-control__reverse">
            <span className="cube-control__reverse-button">Shift</span>
            <span className="cube-control__reverse-description">
              *Удерживайте Shift, чтобы вращать грань в другом направлении
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
