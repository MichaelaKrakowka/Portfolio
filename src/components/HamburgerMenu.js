import "./HamburgerMenu.css";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";

export const HamburgerMenu = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className="mobile_menu_btn"
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}>
          {open ? " " : <HamburgerMenuIcon className="menu_icon" />}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <ul className="mobile_nav_links">
            <li>
              <a
                className="mobile_nav_link"
                href="#about"
                onClick={() => setOpen(false)}>
                O mě
              </a>
            </li>
            <li>
              <a
                className="mobile_nav_link"
                href="#projects"
                onClick={() => setOpen(false)}>
                Projekty
              </a>
            </li>
          </ul>

          <Dialog.Title className="dialog_title"></Dialog.Title>
          <Dialog.Description className="dialog_description"></Dialog.Description>
          <Dialog.Close asChild>
            <button className="close_btn">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
