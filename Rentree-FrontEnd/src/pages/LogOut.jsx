import React from "react";

export default function LogOut() {
  const out = () => {
    localStorage.clear();
  };
  const auth = () => {
    return false;
  };
  return (
    <div>
      {out()}
      {auth()}
    </div>
  );
}
