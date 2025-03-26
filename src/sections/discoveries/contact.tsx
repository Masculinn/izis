import { Button, Card, Form, Textarea, TextField } from "@/components/ui";
import { FC } from "react";

const Contact: FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="py-12 h-auto w-full relative overflow-hidden items-center justify-center mx-auto max-w-7xl">
      <div className="w-full mx-4 lg:mx-0 items-center justify-center flex flex-row gap-4 h-[500px]">
        <div className="w-1/2 h-full px-6 justify-center flex flex-col">
          <h3 className="font-secondary lg:text-6xl text-4xl font-bold">
            Contact
          </h3>
          <p className="mt-2 tracking-tight">
            Officia quis aliquip eu esse commodo nisi proident aliqua irure esse
            eiusmod. Non ad et minim ipsum aliqua tempor est aliqua voluptate
            dolore officia. Aute ipsum proident tempor qui mollit irure duis et
            ex ea mollit aliquip dolor consequat.
          </p>
          <Form onSubmit={handleSubmit} className="mt-8">
            <TextField
              label="Name"
              isRequired
              className="mb-2"
              inputMode="text"
            />
            <TextField
              label="Email"
              isRequired
              className="mb-2"
              inputMode="email"
            />
            <Textarea label="Message" isRequired className="mb-2" />
            <Button type="submit" intent="secondary" className="w-full">
              Submit
            </Button>
          </Form>
        </div>
        <div className="bg-black/20 w-1/2 h-full p-8">
          <Card className="w-full h-full"></Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
