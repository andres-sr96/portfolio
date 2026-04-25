import MenuIcon from "./computer-code.svg";
import GitHubIcon from "./github.svg";
import LinkedInIcon from "./linkedin.svg";
import ProgrammingIcon from "./programming.svg";
import WebIcon from "./web.svg";
import FrameworkIcon from "./framework.svg";
import DatabaseIcon from "./database.svg";
import Cooking from "./cooking.svg";
import Music from "./music.svg";
import Reading from "./reading.svg";
import Tennis from "./tennis.svg";
import Gaming from "./gaming.svg";
import Coffee from "./coffee.svg";

export const icons = {
  menu: MenuIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  programming: ProgrammingIcon,
  web: WebIcon,
  framework: FrameworkIcon,
  database: DatabaseIcon,
  cooking: Cooking,
  music: Music,
  reading: Reading,
  tennis: Tennis,
  gaming: Gaming,
  coffee: Coffee,
} as const;

export type IconName = keyof typeof icons;  