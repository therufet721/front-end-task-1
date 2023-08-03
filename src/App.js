import React, { useState } from "react";
import GroupList from "./Group";
import RoleList from "./RoleList";
import departments from "./departments.json";
import roles from "./roles.json";
import "./App.css";

const App = () => {
  const [roleData] = useState(roles); // Use roles from JSON
  const [filteredRoles, setFilteredRoles] = useState(roleData);
  const [searchQuery, setSearchQuery] = useState("");
  const filterRoles = (filterType) => {
    let result = roleData;

    if (filterType === "marked" && selectedGroup) {
      result = roles.filter((role) => selectedGroup.roleIds.includes(role.id));
    } else if (filterType !== "all") {
      result = roles.filter((role) =>
        role.name.toLowerCase().includes(filterType.toLowerCase())
      );
    }

    if (searchQuery) {
      result = result.filter((role) =>
        role.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredRoles(result);
  };
  const searchRoles = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredRoles(roles);
    } else {
      filterRoles(query);
    }
  };

  const [groups, setGroups] = useState(departments); // Use departments from JSON
  const [selectedGroup, setSelectedGroup] = useState(null);

  const selectGroup = (index) => {
    setSelectedGroup(groups[index]);
  };

  const addGroup = () => {
    const newGroup = { name: "New Group", roleIds: [] };
    setGroups([...groups, newGroup]);
  };

  const editGroupName = (index) => {
    const newName = prompt("Enter new name for the group:");
    const updatedGroups = [...groups];
    updatedGroups[index].name = newName;
    setGroups(updatedGroups);
  };

  const toggleRole = (roleId) => {
    if (selectedGroup) {
      const updatedGroups = [...groups];
      const groupIndex = groups.indexOf(selectedGroup);
      const roleIndex = selectedGroup.roleIds.indexOf(roleId);

      if (roleIndex === -1) {
        updatedGroups[groupIndex].roleIds.push(roleId);
      } else {
        updatedGroups[groupIndex].roleIds.splice(roleIndex, 1);
      }

      setGroups(updatedGroups);
    }
  };

  return (
    <div className="app-container">
      <GroupList
        groups={groups}
        selectGroup={selectGroup}
        addGroup={addGroup}
        editGroupName={editGroupName}
      />
      {selectedGroup && (
        <RoleList
          allRoles={roleData} // Use roleData
          roles={filteredRoles}
          selectedRoles={selectedGroup.roleIds}
          toggleRole={toggleRole}
          filter={filterRoles}
          search={searchRoles}
        />
      )}
    </div>
  );
};

export default App;
