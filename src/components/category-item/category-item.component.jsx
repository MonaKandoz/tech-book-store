const CategoryItem = ({category})=>{
    const {title, imgURL} =category;
    return (
      <div className="category-container">
        <span
          className="category-image"
          style={{ backgroundImage: `url(${imgURL})` }}
        ></span>
        <span className="category-title">{title}</span>
      </div>
    );
}
export default CategoryItem;