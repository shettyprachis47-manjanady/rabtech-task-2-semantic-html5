/* Small progressive-enhancement layer for dashboard interactions. */
"use strict";

const helpModal = document.querySelector("#help-modal");
const openModalButton = document.querySelector("#open-modal-button");
const closeModalButton = document.querySelector("#close-modal-button");
const supportForm = document.querySelector("#support-form");
const formFeedback = document.querySelector("#form-feedback");

if (helpModal && openModalButton && closeModalButton) {
  openModalButton.addEventListener("click", () => {
    if (typeof helpModal.showModal === "function") {
      helpModal.showModal();
    }
  });

  closeModalButton.addEventListener("click", () => helpModal.close());

  helpModal.addEventListener("click", (event) => {
    if (event.target === helpModal) {
      helpModal.close();
    }
  });

  helpModal.addEventListener("close", () => openModalButton.focus());
}

if (supportForm && formFeedback) {
  supportForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!supportForm.checkValidity()) {
      supportForm.reportValidity();
      return;
    }

    formFeedback.textContent = "Thank you. Your sample request has been validated locally.";
    supportForm.reset();
  });
}
