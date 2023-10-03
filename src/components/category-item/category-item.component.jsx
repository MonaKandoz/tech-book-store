import './category-item.style.scss';

import { Link } from 'react-router-dom';
const CategoryItem = ({category})=>{
    const {title, imgURL} =category;
    return (
      <Link to={`categories/${title}`} className="category-container">
        <span
          className="category-image"
          style={{ backgroundImage: `url(${imgURL})` }}
        ></span>
        <span className="category-title">{title}</span>
      </Link>
    );
}
export default CategoryItem;