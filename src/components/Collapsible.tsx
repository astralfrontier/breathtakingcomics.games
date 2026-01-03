import { useCallback, useState } from "react";

interface CollapsibleProps {
  title: string;
  defaultsToOpen?: boolean;
  children?: React.ReactNode;
}

export default function Collapsible(props: CollapsibleProps) {
  const { title, defaultsToOpen = false, children } = props;

  const [isOpen, setIsOpen] = useState<boolean>(defaultsToOpen);

  const isOpenCallback = useCallback(() => setIsOpen(isOpen => !isOpen), [setIsOpen])

  return <>
    <div role="group">
      <button className={isOpen ? "secondary" : ""} onClick={isOpenCallback}>
        {isOpen ? <>&#x25BE;</>: <>&#x25B8;</>}{' '}
        {title}
      </button>
    </div>
    {isOpen ? children : <></>}
  </>
}