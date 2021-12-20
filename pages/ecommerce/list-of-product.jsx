import axios from "axios";
import Link from "next/link";
import useScript from "../../commonFunction/ReloadJs";

const ListOfProduct = (props) => {
  useScript("/assets/js/app.js");

  console.log(props.data);

  return (
    <div>
      <div className="row">
        <div className="col-md-12 m-b-30">
          <div className="d-block d-sm-flex flex-nowrap align-items-center">
            <div className="page-title mb-2 mb-sm-0">
              <h1>List of product</h1>
            </div>
            <div className="ml-auto d-flex align-items-center">
              <nav>
                <ol className="breadcrumb p-0 m-b-0">
                  <li className="breadcrumb-item">
                    <a href="index.html">
                      <i className="ti ti-home" />
                    </a>
                  </li>
                  <li className="breadcrumb-item">Tables</li>
                  <li className="breadcrumb-item active text-primary" aria-current="page">
                    List of product
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div className="card card-statistics">
            <div className="card-body">
              <div className="datatable-wrapper table-responsive">
                <table id="datatable" className="display compact table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>Serial</th>
                      <th>Picture</th>
                      <th>Category name</th>
                      <th>Sub category name</th>
                      <th>Brand name</th>
                      <th>Product name</th>
                      <th>Product code</th>
                      <th>Tp price</th>
                      <th>Buy price</th>
                      <th>Cash back amount</th>
                      <th>Discount amount</th>
                      <th>Delivery amount</th>
                      <th>Short discription</th>
                      <th>Full discription</th>
                      <th>Product type</th>
                      <th>Status</th>
                      <th>Action</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.data.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>Picture</td>
                        <td>{item.categories[0]["title"]}</td>
                        <td>{item.categorySubs[0]["title"]}</td>
                        <td>{item.categoryBrands[0]["title"]}</td>
                        <td>{item.name}</td>
                        <td>{item.name}</td>
                        <td>{item.brandCode}</td>
                        <td>{item.realPrice}</td>
                        <td>{item.buyPrice}</td>
                        <td>{item.cashBackAmount}</td>
                        <td>{item.discountAmount}</td>
                        <td>{item.productDeliveryCharge}</td>
                        <td>{item.shortDescription}</td>
                        <td>{item.fullDescription}</td>
                        <td>
                          <div className="form-check mb-0 py-2">
                            <input className="form-check-input" type="radio" name="toasts2" id="toast-bottom-right" defaultValue="toast-bottom-right" />
                            <label className="form-check-label" htmlFor="toast-bottom-right">
                              Offer
                            </label>
                          </div>
                          <div className="form-check mb-0 py-2">
                            <input className="form-check-input" type="radio" name="toasts2" id="toast-bottom-right" defaultValue="toast-bottom-right" />
                            <label className="form-check-label" htmlFor="toast-bottom-right">
                              Flash sale
                            </label>
                          </div>
                          <div className="form-check mb-0 py-2">
                            <input className="form-check-input" type="radio" name="toasts2" id="toast-bottom-right" defaultValue="toast-bottom-right" />
                            <label className="form-check-label" htmlFor="toast-bottom-right">
                              Discount
                            </label>
                          </div>
                          <div className="form-check mb-0 py-2">
                            <input className="form-check-input" type="radio" name="toasts2" id="toast-bottom-right" defaultValue="toast-bottom-right" />
                            <label className="form-check-label" htmlFor="toast-bottom-right">
                              Cash back
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="form-check mb-0 py-2">
                            <input className="form-check-input" type="radio" name="toasts" id="success" defaultValue="success" defaultChecked />
                            <label className="form-check-label" htmlFor="success">
                              Active
                            </label>
                          </div>

                          <div className="form-check mb-0 py-2">
                            <input className="form-check-input" type="radio" name="toasts" id="info" defaultValue="info" />
                            <label className="form-check-label" htmlFor="info">
                              Inactive
                            </label>
                          </div>
                        </td>
                        <td>
                          <Link href="/ecommerce/edit/[productId]" as={`/ecommerce/edit/${item.id}`}>
                            <a className="btn btn-sm btn-outline-info">
                              <i className="fa fa-edit"></i>
                            </a>
                          </Link>
                          <a href="javascript:void(0)" onClick={() => deleteItem(item.id)} className="btn btn-sm btn-outline-danger ml-2">
                            <i className="fa fa-trash"></i>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { data } = await axios.get(process.env.API_URL + "/GetAllProduct");

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default ListOfProduct;
