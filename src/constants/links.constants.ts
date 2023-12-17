import { Link } from "@/interfaces";
import {
  facebookLink,
  instagramLink,
  tiktokLink,
  yuotubeLink,
} from ".";

import MailIcon from "svg/mail.svg";
import FacebookIcon from "svg/facebook.svg"
import InstagramIcon from "svg/instagram.svg"
import TiktokIcon from "svg/tiktok.svg"
import YoutubeIcon from "svg/youtube.svg"

export const navigationLinks: Link[] = [
  { label: "Inbox", href: "/", Icon: MailIcon },
  { label: "Starred", href: "/", Icon: MailIcon },
  { label: "Send email", href: "/", Icon: MailIcon },
  { label: "Drafts", href: "/", Icon: MailIcon },
];

export const bottomNavigationLinks: Link[] = [
  {
    label: "Home",
    href: "/",
    Icon: MailIcon,
  },
  {
    label: "User",
    href: "/user",
    Icon: MailIcon,
  },
];

export const socialMediaLinks: Link[] = [
  { label: "Facebook", href: facebookLink, Icon: FacebookIcon, external: true },
  { label: "Instagram", href: instagramLink, Icon: InstagramIcon, external: true },
  { label: "Tiktok", href: tiktokLink, Icon: TiktokIcon, external: true },
  { label: "YoutubeIcon", href: yuotubeLink, Icon: YoutubeIcon, external: true },
];

export const contactLinks: Link[] = [
];
