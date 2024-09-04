import { useState } from "react";
import Modal from "../components/ui/modal";
import "../components/ui/modal/styles.css";
import { Button } from "../components/ui/button";
import { StoryFn } from "@storybook/react";

export default {
  title: "UI/Modal",
  component: Modal,
};

interface ModalArgs {
  eyebrow: string;
  header: string;
  onConfirm: () => void;
  children: React.ReactNode;
}

const Template: StoryFn<ModalArgs> = (args: ModalArgs) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  eyebrow: "Eyebrow Text",
  header: "Modal Header",
  onConfirm: () => alert("Confirmed!"),
  children: <p>This is the modal body content.</p>,
};
