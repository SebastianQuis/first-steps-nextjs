"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import style from "./ActiveLink.module.css";

interface Props {
  href: string;
  name: string;
}

export default function ActiveLink({ href, name }: Props) {
  const pathName = usePathname();

  return (
    <Link
      className={` ${style.link} ${pathName === href && style["active-link"]} `}
      href={href}
    >
      {name}
    </Link>
  );
}
