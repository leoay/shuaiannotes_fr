import "../styles/styles.css"
import Link from "next/link";
import Image from "next/image"

function PageItem(props: { title: any; summary: any; url: any; updatetime: any; }) {
    const {title, summary, url, updatetime} = props;
    return (<><div className="pageitem">
        <Link href={url}>{title}</Link><span className="updatetime">{updatetime}</span><br/>
        <Image
        src=""
        width={50}
        height={50}
        alt="Picture of the author"
        />
        <span>{summary}</span><br/>
        <Link href={url}>阅读更多...</Link>
    </div>
    <hr className="divider"></hr>
    </>);
};

export default PageItem;