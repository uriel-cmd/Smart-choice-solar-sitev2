import type { ReactNode } from "react";

function renderInline(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g).filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    return part;
  });
}

export function MarkdownContent({ content }: { content: string }) {
  const blocks = content.split(/\n\s*\n/).map((block) => block.trim()).filter(Boolean);

  return (
    <>
      {blocks.map((block, index) => {
        if (block.startsWith("## ")) {
          return (
            <h2 key={index}>
              {renderInline(block.replace(/^##\s+/, ""))}
            </h2>
          );
        }

        if (block.startsWith("### ")) {
          return (
            <h3 key={index}>
              {renderInline(block.replace(/^###\s+/, ""))}
            </h3>
          );
        }

        if (block.split("\n").every((line) => line.trim().startsWith("- "))) {
          return (
            <ul key={index}>
              {block.split("\n").map((line, itemIndex) => (
                <li key={`${index}-${itemIndex}`}>{renderInline(line.trim().replace(/^- /, ""))}</li>
              ))}
            </ul>
          );
        }

        return <p key={index}>{renderInline(block)}</p>;
      })}
    </>
  );
}
