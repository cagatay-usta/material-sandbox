/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Badge } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { IconButton } from "@mui/material";
import { Tooltip } from "@mui/material";
import BasicMenu from "../BasicMenu/BasicMenu";

function NotificationBell({ iconColor }) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const notifications = [
    {
      id: 0,
      label: "first notification"
    },
    {
      id: 1,
      label: "second notification"
    }
  ]
  return (
    <div>
      <Tooltip
        title={`You have ${
          notifications.length ? notifications.length : "no"
        } unread notifications`}
      >
        <IconButton color={iconColor} onClick={notifications.length ? handleOpen : null}>
          <Badge badgeContent={notifications.length} color="primary">
            <NotificationsOutlinedIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <BasicMenu open={open} anchorEl={anchorEl} handleClose={handleClose} menuItems={notifications} />
    </div>
  );
}

export default NotificationBell;
