import { useEffect } from "react"

function useOutsideClick(
  elementRef: React.RefObject<HTMLElement | null>,
  handleOutsideClick: () => void
) {
  useEffect(() => {
    function handleClickOutsideElement(event: MouseEvent) {
      if (
        elementRef.current &&
        !elementRef.current.contains(event.target as Node)
      ) {
        handleOutsideClick()
      }
    }
    document.addEventListener("mousedown", handleClickOutsideElement)
    return () => {
      // cleanup event listeners
      document.removeEventListener("mousedown", handleClickOutsideElement)
    }
  }, [elementRef, handleOutsideClick])
}

export default useOutsideClick
