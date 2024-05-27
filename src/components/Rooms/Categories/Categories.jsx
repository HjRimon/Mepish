import { useSearchParams } from "react-router-dom";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";

const Categories = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");

  return (
    <div className="pt-4 flex items-center justify-between overflow-x-auto">
      {categories.map((item) => (
        <CategoryBox
          key={item.label}
          icon={item.icon}
          label={item.label}
          selected={category === item.label}
        />
      ))}
    </div>
  );
};

export default Categories;
