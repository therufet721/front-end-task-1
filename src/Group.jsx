import "./Group.css";

const GroupList = ({ groups, selectGroup, addGroup, editGroupName }) => (
  <div className="group-list">
    {groups.map((group, index) => (
      <div
        key={index}
        className="group-list__item"
        onClick={() => selectGroup(index)}
      >
        <span>{group.name}</span>
        <button
          className="group-list__button-edit"
          onClick={() => editGroupName(index)}
        >
          <img
            width="16"
            height="16"
            src="https://img.icons8.com/ios-glyphs/30/edit--v1.png"
            alt="edit--v1"
          />
        </button>
      </div>
    ))}
    <button className="group-list__button-add" onClick={addGroup}>
      <img
        width="10"
        height="10"
        className="group-list__plus-icon"
        src="https://img.icons8.com/carbon-copy/100/plus-math--v2.png"
        alt="plus-math--v2"
      />
      Add New Group
    </button>
  </div>
);
export default GroupList;
