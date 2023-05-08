import Button from "@/app/shared/Button/Button";
import { ComponentProps } from "react";
import cx from "classnames";

interface WhatsappButtonProps {
  phoneNumber: string;
  "data-testid"?: string;
}

export function WhatsappButton({
  phoneNumber,
  "data-testid": testId,
}: WhatsappButtonProps) {
  return (
    <Button
      className={cx(
        "block bg-transparent text-whatsapp border-whatsapp border-2 text-whatsapp"
      )}
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={testId}
    >
      Order On Whatsapp
    </Button>
  );
}
