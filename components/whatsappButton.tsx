import Button from "@/app/shared/Button/Button";

interface WhatsappButtonProps {
  phoneNumber: string;
}

export function WhatsappButton(props: WhatsappButtonProps) {
  return (
    <Button
      className="block bg-transparent text-whatsapp border-whatsapp border-2 text-whatsapp"
      href={`https://wa.me/${props.phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Order On Whatsapp
    </Button>
  );
}
