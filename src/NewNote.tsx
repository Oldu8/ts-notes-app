import React from "react";
import { NoteData, Tag } from "./App";
import NoteForm from "./NoteForm";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

function NewNote({ onSubmit, onAddTag, availableTags }: NewNoteProps) {
  return (
    <div className="mb-4">
      {
        <NoteForm
          onSubmit={onSubmit}
          onAddTag={onAddTag}
          availableTags={availableTags}
        />
      }
    </div>
  );
}

export default NewNote;
