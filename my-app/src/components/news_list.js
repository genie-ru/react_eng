import NewsListItem from "./news_list_item";


const NewsList = (props) => {

    const news = props.news.map((item)=>(
        <NewsListItem key={item.id} item={item}/>
    ))   


    return (
        <>
            { props.children }
            { props.children }
            { news } 
            { props.children }
        </>
    )
}

export default NewsList;