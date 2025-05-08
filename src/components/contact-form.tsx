import { FC } from "react";
import { Button, Form, Textarea, TextField } from "./ui";

export const ContactForm: FC<{ className?: string }> = ({ className }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={handleSubmit} className={className}>
      <TextField label="Imię" isRequired className="mb-2" inputMode="text" />
      <TextField label="Email" isRequired className="mb-2" inputMode="email" />
      <Textarea label="Wiadomość" isRequired className="mb-2" />
      <Button type="submit" intent="secondary" className="w-full">
        Prześlij
      </Button>
    </Form>
  );
};
