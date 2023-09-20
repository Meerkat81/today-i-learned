export function Header({ setShowForm, showForm }) {
  const pageTitle = "Today I Learned Logo";
  const buttonLabel = showForm ? "Close" : "Share a Fact";
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt={pageTitle} />
        <h1>{pageTitle}</h1>
      </div>
      <button
        className="btn btn-large btn-open"
        onClick={() => setShowForm((show) => !show)}
      >
        {buttonLabel}
      </button>
    </header>
  );
}
