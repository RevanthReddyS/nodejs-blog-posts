import useSWR from "swr";
import "./App.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
  const { data, error } = useSWR("http://localhost:8080/blog-posts", fetcher);

  return (
    <div className="App">
      <main>
        {!data && !error
          ? "Loading"
          : error
          ? error.toString()
          : JSON.stringify(data)}
      </main>
    </div>
  );
}

export default App;
