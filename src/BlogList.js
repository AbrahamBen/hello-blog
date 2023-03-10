//Destructuration
const BlogList = ({blogs,title}) => {

    return ( 
        <div className="bloglist">
            <h2>{title}</h2>
        {
            blogs.map((blog)=>(
                <div className="blog" key={blog.id}>
                <a href="" className="blog-titre">{blog.title}</a>
                <small className="blog-publication-date">Publié le : {blog.date}</small>
                <p className="blog-author">Publié par : {blog.author}</p>
            </div>
            ))
        }
   </div>
     );
}
 
export default BlogList;