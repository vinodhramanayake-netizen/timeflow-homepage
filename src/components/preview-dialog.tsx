"use client";

import { useEffect, useRef, useState } from "react";

export function PreviewDialog() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [title, setTitle] = useState("");

  useEffect(() => {
    function openPreview(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const action = event.target.closest<HTMLButtonElement>("[data-preview-action]")?.dataset.previewAction;
      if (!action) return;
      setTitle(action);
      dialog.current?.showModal();
    }
    document.addEventListener("click", openPreview);
    return () => document.removeEventListener("click", openPreview);
  }, []);

  return (
    <dialog
      className="preview-dialog"
      ref={dialog}
      aria-labelledby="preview-title"
      onClick={(event) => {
        if (event.target === dialog.current) {
          dialog.current.close();
        }
      }}
    >
      <h2 id="preview-title" className="text-2xl font-medium text-center">{title}</h2>
      <p className="mt-3 text-center text-[color:var(--text-secondary)] leading-relaxed">
        This homepage is a product preview. Explore the TimeFlow dashboard demo below.
      </p>
      <form method="dialog" className="mt-6 flex flex-wrap justify-center gap-3">
        <a
          href="#showcase"
          className="preview-button bg-lime-300 font-medium text-[color:var(--text-primary)] hover:no-underline hover:brightness-95 transition"
          onClick={() => dialog.current?.close()}
        >
          Explore demo
        </a>
        <button
          type="submit"
          className="preview-button border border-[var(--border-subtle)] bg-[var(--surface-canvas)] font-medium text-[color:var(--text-primary)] hover:bg-[var(--surface-subtle-variant-02)] hover:border-[var(--border-strong)] transition"
        >
          Close
        </button>
      </form>
    </dialog>
  );
}
