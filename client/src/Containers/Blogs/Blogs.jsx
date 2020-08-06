import React from 'react'
import { Pagination,PaginationItem } from '@material-ui/lab';
import Blog from '../../Components/Blogs/Blogs'
import './Blogs.scss'


export default function Blogs() {
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
      };
    return (
        <div className="blogs">
            <div className="blogs_head">
                <ul>
                    <li>Informational</li>
                    <li>Inspirational</li>
                    <li>Student's Corner</li>
                    <li>Knowledge Inhancement</li>
                </ul>
            </div>
            <div className="contain">
                <div className="colum" >
                    <Blog/>
                </div>
                
                <div className="colum">
                <Blog/>
                </div>
                
                <div className="colum">
                <Blog/>
                </div>

            </div>

            <div className="pagination mt-4" className="page">

                            <Pagination
                                page={page}
                                count={10}
                                onChange={handleChange}
                                renderItem={(item) => (
                                    <PaginationItem
                                        component="A"
                                        {...item}
                                    />
                                )}
                            />
            </div>
        </div>
    )
}
