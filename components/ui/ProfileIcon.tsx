// Install the package
// npm install react-native-elements

import React from "react";
import { View } from "react-native";
import { Avatar } from "react-native-elements";

// Example usage in your component
const ProfileIcon = ({ name, size = 50 }: { name: string; size: number }) => {
  // Get initials from name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <Avatar
      size={size}
      rounded
      title={getInitials(name)}
      containerStyle={{ backgroundColor: "#3d4db7" }}
      titleStyle={{ color: "white" }}
    />
  );
};

export default ProfileIcon;
