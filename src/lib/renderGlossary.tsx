import React from "react";
import WordTooltip from "@/components/WordTooltip";

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export const renderWithGlossary = (text: string, glossary: Record<string, string>) => {
  const entries = Object.entries(glossary);
  if (entries.length === 0) return [text];

  const lookup = new Map(entries.map(([k, v]) => [k.toLowerCase(), v]));
  const keys = Array.from(lookup.keys())
    .sort((a, b) => b.length - a.length)
    .map(escapeRegExp);

  const pattern = new RegExp(`(?<!\\p{L})(${keys.join("|")})(?!\\p{L})`, "giu");
  const parts = text.split(pattern);

  return parts.map((part, index) => {
    const wordId = lookup.get(part.toLowerCase());
    if (!wordId) return part;
    return (
      <WordTooltip key={`${wordId}-${index}`} wordId={wordId}>
        {part}
      </WordTooltip>
    );
  });
};
