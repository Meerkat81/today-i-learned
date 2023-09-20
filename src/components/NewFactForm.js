import { useState } from "react";
import supabase from "../supabase";
import { isValidHttpUrl } from "./isValidHttpUrl";
import { CATEGORIES } from "../App";

export function NewFactForm({ setFacts, setShowForm }) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const textLength = text.length;
  const maxTextLength = 200;
  async function handleSubmit(e) {
    //prevent default
    e.preventDefault();
    //Validate Data
    if (
      text &&
      isValidHttpUrl(source) &&
      category &&
      textLength <= maxTextLength
    ) {
      //Upload fact to Supabase and recieve new fact object
      setIsUploading(true);
      const { data: newFact, error } = await supabase
        .from("facts")
        .insert([{ text, source, category }])
        .select();
      setIsUploading(false);
      //Add new fact to state
      if (!error) setFacts((facts) => [newFact[0], ...facts]);

      //Reset form
      setText("");
      setSource("");
      setCategory("");
      //close form
      setShowForm(false);
    }
  }
  return (
    <form className="fact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Share a fact with the world..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={isUploading}
      />
      <span>{maxTextLength - textLength}</span>
      <input
        type="text"
        placeholder="Trustworthy source..."
        value={source}
        onChange={(e) => setSource(e.target.value)}
        disabled={isUploading}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        disabled={isUploading}
      >
        <option value="">Choose category:</option>
        {CATEGORIES.map((cat) => (
          <option key={cat.name} value={cat.name}>
            {cat.name.toUpperCase()}
          </option>
        ))}
      </select>
      <button className="btn btn-large" disabled={isUploading}>
        Post
      </button>
    </form>
  );
}
