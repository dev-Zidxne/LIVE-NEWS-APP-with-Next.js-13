import { categories } from "../constant";
import "../styles/globals.css";

function Homepage() {
  const news: NewsResponse = await fetchNews(categories.join(","));
  return (
    <div>
      <NewsList />
    </div>
  );
}

export default Homepage;
