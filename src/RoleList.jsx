import React from "react";

const RoleList = ({
  allRoles,
  roles,
  selectedRoles,
  toggleRole,
  filter,
  search
}) => (
  <div className="role-list">
    <div className="role-list__filters">
      <h3 className="role-list__header">Roles</h3>
      <div className="role-list__controls">
        <select
          className="role-list__select"
          onChange={(e) => filter(e.target.value)}
        >
          <option value="all">All Roles</option>
          <option value="marked">Marked Roles</option>
          {allRoles.map((role) => (
            <option key={role.id} value={role.name}>
              {role.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          className="role-list__input"
          placeholder="Search..."
          onChange={(e) => search(e.target.value)}
        />
      </div>
    </div>
    {roles.map((role) => (
      <div key={role.id} className="role-list__item">
        <input
          type="checkbox"
          className="role-list__checkbox"
          checked={selectedRoles.includes(role.id)}
          onChange={() => toggleRole(role.id)}
        />
        {role.name}
      </div>
    ))}
    {/* Pagination can be implemented here */}
  </div>
);

export default RoleList;
