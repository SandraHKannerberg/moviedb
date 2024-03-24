import Form from "react-bootstrap/Form";
import "./FilterDropDown.css";

function FilterDropDown({ filter, setFilter }) {
  return (
    <Form.Select
      aria-label="Filter movies"
      style={{ backgroundColor: "white", paddingLeft: "0.4rem" }}
      labelId="filter"
      value={filter}
      onChange={(e) => setFilter({ filter: e.target.value })}
    >
      <option value={"popular"}>Popular</option>
      <option value={"top_rated"}>Top Rated</option>
      <option value={"upcoming"}>UpComing</option>
    </Form.Select>
  );
}

export default FilterDropDown;
