import "./style.css";
function App() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="Today I Learned Logo" />
          <h1>Today I Learned</h1>
        </div>
        <button className="btn btn-large btn-open">Share a Fact</button>
      </header>
      <NewFactForm />
      <main class="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

function NewFactForm() {
  return <form className="fact-form">Fact Form</form>;
}

function CategoryFilter() {
  return <aside>Category Filter</aside>;
}

function FactList() {
  return <section>Facts list</section>;
}

export default App;
