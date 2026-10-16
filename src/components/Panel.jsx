export default function Panel({ title, as: Heading = "h3", className = "", children }) {
  return (
    <section className={`panel ${className}`.trim()}>
      {title && <Heading className="panel-title">{title}</Heading>}
      {children}
    </section>
  );
}
