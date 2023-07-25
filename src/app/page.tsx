// `app/page.tsx` is the UI for the `/` URL
import PageItem from "@/components/pageitem";
import "../styles/article.css";

export default function Page() {
  const numbers = [1, 2, 3, 4,5,6,7,8,9,10];
  const listItems = numbers.map((numbers) =>
    // eslint-disable-next-line react/jsx-key
    <li><PageItem title="这是一个标题" url="/article" summary="这是文章的摘要" updatetime="2023年7月14日 11:22:34"/></li>
  );
  return(
    <div className="article-list-container">
        <div className="listitem">
          <ul>{listItems}</ul>
        </div>
    </div>
  );
}