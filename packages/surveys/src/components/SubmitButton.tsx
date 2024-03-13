import { useCallback } from "preact/hooks";
import { cn } from "../../../lib/cn";
import { isLight } from "../lib/utils";
import { TSurveyQuestion } from "../../../types/v1/surveys";

interface SubmitButtonProps {
  question?: TSurveyQuestion;
  isLastQuestion: boolean;
  brandColor: string;
  onClick: () => void;
  focus?: boolean;
  tabIndex?: number;
  type?: "submit" | "button";
}

function SubmitButton({
  question,
  isLastQuestion,
  brandColor,
  onClick,
  tabIndex = 1,
  focus = false,
  type = "submit",
}: SubmitButtonProps) {
  const buttonRef = useCallback((currentButton: HTMLButtonElement | null) => {
    if (currentButton && focus) {
      setTimeout(() => {
        currentButton.focus();
      }, 200);
    }
  }, []);

  return (
    <button
      ref={buttonRef}
      type={type}
      tabIndex={tabIndex}
      autoFocus={focus}
      className={cn(
        "flex items-center rounded-md border border-transparent px-3 py-3 text-base font-medium leading-4 shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2",
        isLight(brandColor) ? "text-black" : "text-white"
      )}
      style={{ backgroundColor: brandColor }}
      onClick={onClick}>
      {isLastQuestion ? "Finish" : "Next"}
    </button>
  );
}
export default SubmitButton;
