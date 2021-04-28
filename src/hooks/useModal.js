const { useState } = require("react");

export const useModal = () => {
  const [showModal, setstate] = useState(false);

  return {
    closeModal: () => setstate(false),
    openModal: () => setstate(true),
    showModal,
  };
};
