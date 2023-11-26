import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack
      direction="row"
      sx={{
        flexDirection: { md: "column" },
        height: { sx: "auto", md: "95%" },
        overflowY: "auto",
      }}
    >
      {categories.map((category) => {
        return (
          <button
            key={category.name}
            className="category-btn"
            style={{
              color: "#fff",
              background: category.name === selectedCategory && "#fc1503",
            }}
            onClick={()=> {setSelectedCategory(category.name)}}
          >
            <span
              style={{
                color: category.name === selectedCategory ? "#FFF" : "red", marginRight: '15px',
              }}
            >
              {category.icon}
            </span>
            <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8'}}>{category.name}</span>
          </button>
        );
      })}
    </Stack>
  );
};
export default Sidebar;
