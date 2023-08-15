import CategoryItem from "../category-item/category-item.component";
import './categories-section.style.scss';

const CategoriesSection = ({ categories }) => (
  <div className="categories-section">
    <span className="section-title">Categories</span>
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  </div>
  
);
export default CategoriesSection;
