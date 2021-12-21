import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { categoryList, storeListOfSubCategory } from "../../atom/categoryAtom";
import fromValueUpdate from "../../commonFunction/onChangeHandle";
import addNewInformation from "../../commonFunction/recoil";
import useScript from "../../commonFunction/ReloadJs";

const AddCategory = (props) => {
  useScript("/assets/js/app.js");

  const MySwal = withReactContent(Swal);

  const [category, setCategory] = useState("");

  // subcategory useState
  const [subcategory, setSubcategory] = useState("");

  // brand useState
  const [brand, setBrand] = useState("");

  // category handle change
  const categoryHandleChange = (e) => {
    fromValueUpdate(e, setCategory);
  };

  // subcategory handle change
  const subcategoryHandleChange = (e) => {
    fromValueUpdate(e, setSubcategory);
  };

  // brand handle change
  const brandHandleChange = (e) => {
    fromValueUpdate(e, setBrand);
  };

  const brandHandleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios
      .post("https://baybridgebd.com/AddCategoryBrand", brand)
      .then((item) => {
        MySwal.fire("Good job!", "Brand added successfully", "success");
      })
      .catch((error) => {
        MySwal.fire("Brand not saved!", "Something Error Found.", "warning");
      });
  };
  // End brand

  // Fetch category data and update to atom
  const getListOfCategory = props.getCatagory.data;
  const getListOfSubCategory = props.getSubCatagory.data;
  const listOfCategory = useSetRecoilState(categoryList);
  const listOfSubCategory = useSetRecoilState(storeListOfSubCategory);
  useEffect(() => {
    listOfCategory(getListOfCategory);
    listOfSubCategory(getListOfSubCategory);
  }, [getListOfCategory, getListOfSubCategory]);

  // Category data submit
  const categoryHandleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios
      .post("https://baybridgebd.com/Addcategory", category)
      .then((item) => {
        MySwal.fire("Good job!", item.data["success"]["0"]["result"], "success");
        // create object category information
        const info = {
          id: item.data["success"]["0"]["msg"]["id"],
          title: item.data["success"]["0"]["msg"]["title"],
          desktopicon: item.data["success"]["0"]["msg"]["desktopicon"],
          mobileicon: item.data["success"]["0"]["msg"]["mobileicon"],
          chk: item.data["success"]["0"]["msg"]["chk"],
        };
        // update category information
        addNewInformation(listOfCategory, info);
      })
      .catch((error) => {
        MySwal.fire("Category do not save !!", "Something Error Found.", "warning");
      });
  };

  const subcategoryHandleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios
      .post("https://baybridgebd.com/AddSubCategory", subcategory)
      .then((item) => {
        console.log(item);
        MySwal.fire("Good job!", "Subcategory added successfully", "success");
        // create object sub category information
        const info = {
          id: item.data["success"]["0"]["msg"]["id"],
          id: item.data["success"]["0"]["msg"]["categoryId"],
          title: item.data["success"]["0"]["msg"]["title"],
          desktopicon: item.data["success"]["0"]["msg"]["desktopicon"],
          mobileicon: item.data["success"]["0"]["msg"]["mobileicon"],
          chk: item.data["success"]["0"]["msg"]["chk"],
        };
        // update sub category information
        addNewInformation(listOfSubCategory, info);
      })
      .catch((error) => {
        MySwal.fire("Subcategory not saved!", "Something Error Found.", "warning");
      });
  };
  // End subcategory

  // Show list of category
  const showCategoryData = useRecoilValue(categoryList);
  const showSubCategoryData = useRecoilValue(storeListOfSubCategory);
  return (
    <div>
      <div class="loader">
        <div class="h-100 d-flex justify-content-center">
          <div class="align-self-center">
            <img src="assets/img/loader/loader.svg" alt="loader" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 m-b-30">
          <div className="card card-statistics">
            <div className="card-header">
              <div className="card-heading">
                <h4 className="card-title">Add category</h4>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={categoryHandleSubmit} className="form-horizontal" encType="multipart/form-data">
                <div className="form-group">
                  <label className="control-label" htmlFor="fname">
                    Category name
                  </label>
                  <div className="mb-2">
                    <input type="text" className="form-control" name="title" placeholder="Category name" onChange={categoryHandleChange} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="lname">
                    Desktop icon
                  </label>
                  <div className="mb-2">
                    <input type="text" className="form-control" name="desktopicon" onChange={categoryHandleChange} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="lname">
                    Mobile icon
                  </label>
                  <div className="mb-2">
                    <input type="text" className="form-control" name="mobileicon" onChange={categoryHandleChange} />
                  </div>
                </div>

                <div className="form-group">
                  <button className="btn btn-primary" value="Submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-6 m-b-30">
          <div className="card card-statistics">
            <div className="card-header">
              <div className="card-heading">
                <h4 className="card-title">Add sub category</h4>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={subcategoryHandleSubmit} className="form-horizontal" encType="multipart/form-data">
                <div className="form-group">
                  <label htmlFor="inputState">Select category</label>
                  <select id="inputState" name="categoryId" className="form-control" onChange={subcategoryHandleChange}>
                    <option selected>Select category</option>
                    {showCategoryData.map((row) => (
                      <option key={row.id} value={row.id}>
                        {row.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="subcategory">
                    Subcategory name
                  </label>
                  <div className="mb-2">
                    <input type="text" className="form-control" onChange={subcategoryHandleChange} name="title" placeholder="Sub category name" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="lname">
                    Desktop icon
                  </label>
                  <div className="mb-2">
                    <input type="text" className="form-control" onChange={subcategoryHandleChange} name="desktopicon" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="lname">
                    Mobile icon
                  </label>
                  <div className="mb-2">
                    <input type="text" className="form-control" onChange={subcategoryHandleChange} name="mobileicon" />
                  </div>
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-2 m-b-30"></div>

        <div className="col-md-8 m-b-30">
          <div className="card card-statistics">
            <div className="card-header">
              <div className="card-heading">
                <h4 className="card-title">Add brand</h4>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={brandHandleSubmit} className="form-horizontal" encType="multipart/form-data">
                <div className="form-group">
                  <label htmlFor="inputState">Select category</label>
                  <select onChange={brandHandleChange} name="categoryId" className="form-control">
                    <option selected>Select category</option>
                    {showCategoryData.map((row) => (
                      <option key={row.id} value={row.id}>
                        {row.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="inputState">Select sub category</label>
                  <select onChange={brandHandleChange} name="subId" className="form-control">
                    <option selected>Select sub category</option>
                    {showSubCategoryData.map((row) => (
                      <option key={row.id} value={row.id}>
                        {row.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="fname">
                    Brand name
                  </label>
                  <div className="mb-2">
                    <input type="text" className="form-control" name="title" onChange={brandHandleChange} placeholder="Brand name" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="lname">
                    Desktop icon
                  </label>
                  <div className="mb-2">
                    <input type="text" className="form-control" onChange={brandHandleChange} name="desktopicon" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="lname">
                    Mobile icon
                  </label>
                  <div className="mb-2">
                    <input type="text" className="form-control" onChange={brandHandleChange} name="mobileicon" />
                  </div>
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { data: getCatagory } = await axios.get(process.env.API_URL + "/GetInformationSingle/category&chk=1");
  const { data: getSubCatagory } = await axios.get(process.env.API_URL + "/GetInformationSingle/categorySub&chk=1");

  return {
    props: { getCatagory, getSubCatagory },
  };
}

export default AddCategory;
