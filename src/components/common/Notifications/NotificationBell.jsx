import React from "react";
import { Badge } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import {IconButton} from "@mui/material";
import { Tooltip } from '@mui/material';


function NotificationBell({ iconColor, badgeContent}) {
  return (
    <Tooltip title={`You have ${badgeContent ? badgeContent : "no"} unread notifications`}>
      <IconButton
        color={iconColor}
      >
        <Badge badgeContent={badgeContent} color="primary">
          <NotificationsOutlinedIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
}

export default NotificationBell;
