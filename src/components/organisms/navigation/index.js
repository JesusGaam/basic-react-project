import React, { useState } from "react";
import AppBar from "./AppBarNavigation";
import Drawer from "./DrawerNavigation";
import BottomNavigation from "./BottomNavigation";

export default () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <AppBar openDrawer={() => setOpenDrawer(true)} />
      <Drawer
        openDrawer={openDrawer}
        handleCloseDrawer={() => setOpenDrawer(false)}
        handleOpenDrawer={() => setOpenDrawer(true)}
      />
      <BottomNavigation handleOpenDrawer={() => setOpenDrawer(true)} />
    </>
  );
};
