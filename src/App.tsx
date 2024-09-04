import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import Modal from "./components/ui/modal";

function SlotComponent() {
  return <div className="slot-component">SLOT COMPONENT</div>;
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [variant, setVariant] = useState<"one-button" | "two-buttons" | "three-buttons">("two-buttons");
  return (
    <>
      <h1>Buttons & Modals ✨</h1>
      <div className="button-group-container">
        <div className="button-group-container-item">
          <h2 className="button-group-container-item-title">Primary</h2>
          <div className="button-group">
            <Button
              variant="primary"
              onClick={() => setIsOpen(true)}
              size="primary"
            >
              Confirm
            </Button>
            <Button
              variant="secondary"
              onClick={() => setIsOpen(true)}
              size="primary"
            >
              Confirm
            </Button>
            <Button
              variant="ghost"
              onClick={() => setIsOpen(true)}
              size="primary"
            >
              Confirm
            </Button>
            <Modal
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              onConfirm={() => setIsOpen(false)}
              eyebrow="Eyebrow text"
              header="Header title"
            >
              <SlotComponent />
            </Modal>
          </div>
        </div>
        <div className="button-group-container-item">
          <h2 className="button-group-container-item-title">Primary Full</h2>
          <div className="button-group-full">
            <Button variant="primary" onClick={() => setIsOpen(true)} size="lg">
              Confirm
            </Button>
            <Button
              variant="secondary"
              onClick={() => setIsOpen(true)}
              size="lg"
            >
              Confirm
            </Button>
            <Button variant="ghost" onClick={() => setIsOpen(true)} size="lg">
              Confirm
            </Button>
            <Modal
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              onConfirm={() => setIsOpen(false)}
              eyebrow="Eyebrow text"
              header="Header title"
            >
              <SlotComponent />
            </Modal>
          </div>
        </div>
        <div className="button-group-container-item">
          <h2 className="button-group-container-item-title">Disabled</h2>
          <div className="button-group">
            <Button
              variant="primary"
              disabled
              onClick={() => setIsOpen(true)}
              size="primary"
            >
              Confirm
            </Button>
            <Button
              variant="secondary"
              disabled
              onClick={() => setIsOpen(true)}
              size="primary"
            >
              Confirm
            </Button>
            <Button
              variant="ghost"
              disabled
              onClick={() => setIsOpen(true)}
              size="primary"
            >
              Confirm
            </Button>
            <Modal
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              onConfirm={() => setIsOpen(false)}
              eyebrow="Eyebrow text"
              header="Header title"
            >
              <SlotComponent />
            </Modal>
          </div>
        </div>
        <div className="button-group-container-item">
          <h2 className="button-group-container-item-title">Modal variants</h2>
          <div className="button-group">
            <Button
              variant="primary"
              onClick={() => {
                setIsOpen(true);
                setVariant("one-button");
              }}
              size="primary"
            >
              One button
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                setIsOpen(true);
                setVariant("two-buttons");
              }}
              size="primary"
            >
              Two buttons
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                setIsOpen(true);
                setVariant("three-buttons");
              }}
              size="primary"
            >
              Three buttons
            </Button>
            <Modal
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              onConfirm={() => setIsOpen(false)}
              eyebrow="Eyebrow text"
              header="Header title"
              variant={variant}
            >
              <SlotComponent />
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
