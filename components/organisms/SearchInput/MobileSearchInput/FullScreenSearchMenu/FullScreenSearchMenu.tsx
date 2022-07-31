import { Container, OptionsWrapper, SearchInputStyle } from "./styles";
import {
  Dispatch,
  KeyboardEvent,
  ReactElement,
  SetStateAction,
  useState,
} from "react";

import { ContainerAnimVariant } from "./animation-variants";
import useRoutes from "hooks/useRoutes";

interface IFullScreenSearchMenuProps {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  isMenuOpen: boolean;
  onEnter?: (text: string) => void;
}

export default function FullScreenSearchMenu({
  setMenuOpen,
  isMenuOpen,
  onEnter,
}: IFullScreenSearchMenuProps): ReactElement {
  const [text, setText] = useState("");

  const onHandleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log(onEnter?.(text));
      onEnter?.(text);
      setMenuOpen(false);
    }
  };

  return (
    <Container
      variants={ContainerAnimVariant}
      initial={"close"}
      animate={isMenuOpen ? "open" : "close"}
      transition={{ ease: "easeIn", duration: 0.425 }}
    >
      <OptionsWrapper>
        <SearchInputStyle
          type="search"
          onTextChange={setText}
          onKeyDown={onHandleKeyDown}
        />
        <button onClick={() => setMenuOpen(false)}>Close</button>
      </OptionsWrapper>
    </Container>
  );
}
