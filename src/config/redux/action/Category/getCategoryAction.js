import axios from "axios";

const GetCategoryActions = () => async (dispatch) => {
  try {
    const category = await axios.get(
      `${process.env.REACT_APP_API_URL}/category`
    );
    const result = category.data.data;
    dispatch({ type: "get_all_category", payload: result });
  } catch (error) {
    console.log(error);
  }
};

export default GetCategoryActions;