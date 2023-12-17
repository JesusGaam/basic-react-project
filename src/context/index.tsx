import React from "react";
import UserState from "./users/UserState";
import UTMState from "./utms/UtmsState"

export default ({ children }: { children: React.ReactNode }) => (
  <UserState>
    <UTMState>
      {children}
    </UTMState>
  </UserState>
);
