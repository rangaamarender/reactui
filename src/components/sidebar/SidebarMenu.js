import { FaBars } from "react-icons/fa";
import {
  RiDashboardLine,
  RiBuildingLine,
  RiContactsBookLine,
  RiUser2Line,
  RiBriefcaseLine,
  RiTaskLine,
  RiCoupon3Line,
} from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CgCreditCard } from "react-icons/cg";
import { IoIosAddCircle } from "react-icons/io";
import { MdOutlineReceiptLong } from "react-icons/md";
import { GiHypodermicTest } from "react-icons/gi";
import createIcon from './../../assets/createIcon.svg';

const MenuItems = [
  {
    path: "/createnew",
    name: <div className="createUser"> Create New </div>,
    icon: <img src={createIcon} className="createIcon" />,
  },
  {
    path: "/",
    name: "Dashboard",
    icon: <RiDashboardLine />,
  },
  {
    path: "/addressbook",
    name: "Address Book",
    icon: <RiContactsBookLine />,
  },

  {
    path: "/resources",
    name: "Resources",
    icon: <RiUser2Line />,
  },
  {
    path: "/contracts",
    name: "Contracts",
    icon: <RiBriefcaseLine />,
  },
  {
    path: "/timesheets",
    name: "Timesheets",
    icon: <AiOutlineClockCircle />,
  },
  {
    path: "/companies",
    name: "Companies",
    icon: <RiBuildingLine />,
  },
];

export default MenuItems;
