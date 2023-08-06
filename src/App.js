import CategoriesSection from "./components/categories-section/categories-section.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'JavaScript',
      imgURL: "",
    },
    {
      id: 2,
      title: 'PHP',
      imgURL: "",
    },
    {
      id: 3,
      title: 'CSS',
      imgURL: "",
    },
    {
      id: 4,
      title: "React.JS",
      imgURL: "",
    },
    {
      id: 5,
      title: "Python",
      imgURL: "",
    },
    {
      id: 6,
      title: "GraphQL",
      imgURL: "",
    },
  ];
  return (
    <CategoriesSection categories={categories} />
  );
};

export default App;
