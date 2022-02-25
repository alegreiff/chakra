import { IconType } from "react-icons";
import { FiHome } from "react-icons/fi";
interface EnlacesMenu {
  id: number;
  name: string;
  icon?: IconType;
  enlace: string;
  auth: boolean;
}

export const elementosMenu: EnlacesMenu[] = [
  {
    id: 1,
    auth: true,
    enlace: "/",
    name: "Inicio",
    icon: FiHome,
  },
  {
    id: 2,
    auth: true,
    enlace: "/about",
    name: "Acerca de",
  },
];
