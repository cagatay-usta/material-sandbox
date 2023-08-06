import PeopleIcon from "@mui/icons-material/People";
import DnsIcon from "@mui/icons-material/Dns";
import StorageIcon from "@mui/icons-material/Storage";
import PublicIcon from "@mui/icons-material/Public";
import FunctionsIcon from "@mui/icons-material/Functions";
import SettingsInputCompositeIcon from "@mui/icons-material/SettingsInputComposite";

export const navbarItems = [
  {
    id: 0,
    icon: <PeopleIcon />,
    label: "Authentication",
    route: "authentication",
  },
  {
    id: 1,
    icon: <DnsIcon />,
    label: "Database",
    route: "database",
  },
  {
    id: 2,
    icon: <StorageIcon />,
    label: "Storage",
    route: "storage",
  },
  {
    id: 3,
    icon: <PublicIcon />,
    label: "Hosting",
    route: "hosting",
  },
  {
    id: 4,
    icon: <FunctionsIcon />,
    label: "Function",
    route: "function",
  },
  {
    id: 5,
    icon: <SettingsInputCompositeIcon />,
    label: "Machine Learning",
    route: "machine-learning",
  },
];
