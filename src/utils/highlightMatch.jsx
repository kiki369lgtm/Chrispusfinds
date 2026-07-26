export const highlightMatch = (text, query) => {
  if (!query) return text;
  const index = text.toLowerCase().indexOf(query.trim().toLowerCase());
  if (index === -1) return text;

  const end = index + query.trim().length;
  return (
    <>
      {text.slice(0, index)}
      <mark>{text.slice(index, end)}</mark>
      {text.slice(end)}
    </>
  );
};
