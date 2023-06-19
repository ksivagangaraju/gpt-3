import './index.css'

const blogList = [
    {
        id: 1,
        image: 'https://res.cloudinary.com/dpmyvq5te/image/upload/v1687070670/GPT-3/Rectangle_221_spizxm.png',
        date: 'Sep 26, 2021',
        blogTitle: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
    },
    {
        id: 2,
        image: 'https://res.cloudinary.com/dpmyvq5te/image/upload/v1687070653/GPT-3/Rectangle_222_tbpxls.png',
        date: 'Sep 26, 2021',
        blogTitle: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
    },
    {
        id: 3,
        image: 'https://res.cloudinary.com/dpmyvq5te/image/upload/v1687070664/GPT-3/Rectangle_223_ifykfk.png',
        date: 'Sep 26, 2021',
        blogTitle: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
    },
    {
        id: 4,
        image: 'https://res.cloudinary.com/dpmyvq5te/image/upload/v1687070660/GPT-3/Rectangle_224_erdwro.png',
        date: 'Sep 26, 2021',
        blogTitle: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
    },
    {
        id: 5,
        image: 'https://res.cloudinary.com/dpmyvq5te/image/upload/v1687070654/GPT-3/Rectangle_225_hhcw6j.png',
        date: 'Sep 26, 2021',
        blogTitle: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
    },
    {
        id: 6,
        image: 'https://res.cloudinary.com/dpmyvq5te/image/upload/v1687070664/GPT-3/Rectangle_223_ifykfk.png',
        date: 'Sep 26, 2021',
        blogTitle: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
    },
    {
        id: 7,
        image: 'https://res.cloudinary.com/dpmyvq5te/image/upload/v1687070660/GPT-3/Rectangle_224_erdwro.png',
        date: 'Sep 26, 2021',
        blogTitle: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
    },
    {
        id: 8,
        image: 'https://res.cloudinary.com/dpmyvq5te/image/upload/v1687070654/GPT-3/Rectangle_225_hhcw6j.png',
        date: 'Sep 26, 2021',
        blogTitle: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
    }
]

const Blog = () => (
    <div id="library" className='blog-container'>
        <h1 className='header-heading blog-main-heading'>A lot is happening,<br/>We are blogging about it.</h1>
        {blogList.length < 5 ?
            (
                <div className='blogs-1-container'>
                    <div className='main-blogs-container'>
                        <div className='main-blog-container'>
                            <img src={blogList[0].image} alt={`blog ${blogList[0].id}`} className='main-blog-img' />
                            <div className='blog-details'>
                                <p className='blog-date'>{blogList[0].date}</p>
                                <p className='blog-title'>{blogList[0].blogTitle}</p>
                                <a href='/' className='blog-link'>Read Full Article</a>
                            </div>
                        </div>
                    </div>
                    <ul className='normal-blogs-1-container'>
                        {blogList.slice(1).map(blog => (
                            <li key={blog.id} className='normal-blog-container'>
                                <img src={blog.image} alt={`blog ${blog.id}`} className='normal-blog-img' />
                                <div className='blog-details'>
                                    <p className='blog-date'>{blog.date}</p>
                                    <p className='blog-title'>{blog.blogTitle}</p>
                                    <a href='/' className='blog-link'>Read Full Article</a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ) :
            (
                <div className='blogs-container'>
                    <div className='blogs-1-container'>
                        <div className='main-blogs-container'>
                            <div className='main-blog-container'>
                                <img src={blogList[0].image} alt={`blog ${blogList[0].id}`} className='main-blog-img' />
                                <div className='blog-details'>
                                    <p className='blog-date'>{blogList[0].date}</p>
                                    <p className='blog-title'>{blogList[0].blogTitle}</p>
                                    <a href='/' className='blog-link'>Read Full Article</a>
                                </div>
                            </div>
                        </div>
                        <ul className='normal-blogs-1-container'>
                            {blogList.slice(1, 5).map(blog => (
                                <li key={blog.id} className='normal-blog-container'>
                                    <img src={blog.image} alt={`blog ${blog.id}`} className='normal-blog-img' />
                                    <div className='blog-details'>
                                        <p className='blog-date'>{blog.date}</p>
                                        <p className='blog-title'>{blog.blogTitle}</p>
                                        <a href='/' className='blog-link'>Read Full Article</a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <ul className='normal-blogs-2-container'>
                        {blogList.slice(5).map(blog => (
                            <li key={blog.id} className='normal-blogs-container'>
                                <div className='normal-blog-2-container'>
                                    <img src={blog.image} alt={`blog ${blog.id}`} className='normal-blog-img' />
                                    <div className='blog-details'>
                                        <p className='blog-date'>{blog.date}</p>
                                        <p className='blog-title'>{blog.blogTitle}</p>
                                        <a href='/' className='blog-link'>Read Full Article</a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )
        }
    </div>
)

export default Blog