import { useState } from "react";
import * as React from "react";
import { Link } from "react-router-dom";
import "./styles/filter.css";

const Filter = () => {
  const [filters, setFilters] = useState([]);

  const addToFilters = (filter) => {
    if (!filters.find((f) => f === filter)) {
      const temp = [...filters, filter];
      setFilters(temp);
    }
    console.log(filters);
  };
  return (
    <div className="col-3 d-flex align-items-center justify-content-center">
      <div
        className="text-center"
        style={{
          background: "#181818",
          width: "100%",
          padding: "5px 0px",
          margin: "-7px 0 0 0",
          borderRadius: "7px",
          overflowY: "hidden",
        }}
      >
        <h2 style={{ color: "#fff", marginBottom: "2px", fontSize: "16px" }}>
          Filters
        </h2>
        <div className="filter ">
          <div className="labels d-flex justify-content-between">
            <p style={{ margin: "0px 20px", color: "#666", fontWeight: "500" }}>
              Filters Applied
            </p>
            <a
              style={{
                margin: "0px 20px",
                textDecoration: "none",
                color: "#fff",
              }}
            >
              Clear All
            </a>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div
              style={{
                height: "40px",
                width: "90%",
                borderRadius: "5px",
                background: "#202020",
              }}
            ></div>
            <div
              style={{
                height: "",
                width: "90%",
                marginTop: "10px",
                borderRadius: "5px",
                background: "#202020",
                paddingBottom: "10px",
              }}
            >
              <p className="subheading">Stock</p>
              <div className="search d-flex position-relative justify-content-center">
                <input
                  type="text"
                  class="searchInput"
                  id="exampleFormControlInput1"
                  placeholder="    $ TICKER"
                  style={{
                    background: "#313131",
                    color: "white",
                    border: "none",
                    marginLeft: "",
                    width: "250px",
                    height: "20px",
                    fontSize: "12px",
                  }}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#F5F5F5"
                  className="w-6 h-6 position-absolute"
                  style={{ width: "16px", right: "12%", top: "22%" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="f-options">
                <p className="subheading">Industry</p>
                <div className="d-flex justify-content-center">
                  <div className="filters">
                    <div className="d-flex flex-column">
                      <a
                        className="f-link d-flex m-1"
                        onClick={() => {
                          addToFilters("Health Care");
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 f-icon"
                        >
                          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                        Health Care
                      </a>
                      <a
                        className="f-link d-flex m-1"
                        onClick={() => {
                          addToFilters("Materials");
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 f-icon"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 0 1 3.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 0 0-4.392-4.392 49.422 49.422 0 0 0-7.436 0A4.756 4.756 0 0 0 3.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 1 0 1.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 0 1 3.01-3.01c1.19-.09 2.392-.135 3.605-.135Zm-6.97 6.22a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 0 0 4.392 4.392 49.413 49.413 0 0 0 7.436 0 4.756 4.756 0 0 0 4.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 0 0-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 0 1-3.01 3.01 47.953 47.953 0 0 1-7.21 0 3.256 3.256 0 0 1-3.01-3.01 47.759 47.759 0 0 1-.1-1.759L6.97 15.53a.75.75 0 0 0 1.06-1.06l-3-3Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Materials
                      </a>
                      <a
                        className="f-link d-flex m-1"
                        onClick={() => {
                          addToFilters("Energy");
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 f-icon"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                          />
                        </svg>
                        Energy
                      </a>
                      <a
                        className="f-link d-flex ms-1 "
                        onClick={() => {
                          addToFilters("Consumer Discrtionary");
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 f-icon"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                          />
                        </svg>
                        Consumer Discrtionary
                      </a>
                      <a
                        className="f-link d-flex m-1"
                        onClick={() => {
                          addToFilters("Consumer Staples");
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 f-icon"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                          />
                        </svg>
                        Consumer Staples
                      </a>
                      <a
                        className="f-link d-flex m-1"
                        onClick={() => {
                          addToFilters("Real Estate");
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 f-icon"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                          />
                        </svg>
                        Real Estate
                      </a>
                    </div>
                  </div>
                  <div className="filters">
                    <div className="d-flex flex-column">
                      <a
                        className="f-link d-flex m-1"
                        onClick={() => {
                          addToFilters("IT");
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 f-icon"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
                          />
                        </svg>
                        IT
                      </a>
                      <a
                        className="f-link d-flex m-1"
                        onClick={() => {
                          addToFilters("Communiaction");
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 f-icon"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                          />
                        </svg>
                        Communication
                      </a>
                      <a
                        className="f-link d-flex m-1"
                        onClick={() => {
                          addToFilters("Industials");
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 f-icon"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                          />
                        </svg>
                        Industrials
                      </a>
                      <a
                        className="f-link d-flex m-1"
                        onClick={() => {
                          addToFilters("Utilities");
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 f-icon"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                          />
                        </svg>
                        Utilities
                      </a>
                      <a
                        className="f-link d-flex m-1"
                        onClick={() => {
                          addToFilters("Financials");
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 f-icon"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                        Financials
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <p className="subheading">Market Cap</p>
                    <div>
                      <div className="d-flex flex-column align-items-start ms-4 ">
                        <div>
                          <input
                            type="radio"
                            name="micro"
                            id="mirco"
                            value="Micro"
                          />
                          <label for="Micro" className="choices">
                            Micro
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            name="micro"
                            id="mirco"
                            value="Micro"
                          />
                          <label for="Micro" className="choices">
                            Small
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            name="micro"
                            id="mirco"
                            value="Micro"
                          />
                          <label for="Micro" className="choices">
                            Large
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="subheading">Risk Level</p>
                    <div>
                      <div className="d-flex flex-column align-items-start ms-4">
                        <div>
                          <input
                            type="radio"
                            name="High"
                            id="High"
                            value="High"
                          />
                          <label for="Micro" className="choices">
                            High Risk
                          </label>
                        </div>
                        <div>
                          <input type="radio" name="Mid" id="Mid" value="Mid" />
                          <label for="Micro" className="choices">
                            Mid Risk
                          </label>
                        </div>
                        <div>
                          <input type="radio" name="Low" id="Low" value="Low" />
                          <label for="Micro" className="choices">
                            Low Risk
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <p className="subheading">Strategy</p>
                    <div>
                      <div className="d-flex flex-column align-items-start ms-4 ">
                        <div>
                          <input
                            type="radio"
                            name="micro"
                            id="mirco"
                            value="Micro"
                          />
                          <label for="Micro" className="choices">
                            Big Option Buys
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            name="micro"
                            id="mirco"
                            value="Micro"
                          />
                          <label for="Micro" className="choices">
                            Merger Arbitrage
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            name="micro"
                            id="mirco"
                            value="Micro"
                          />
                          <label for="Micro" className="choices">
                            Short Reports
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="subheading">Assets</p>
                    <div>
                      <div className="d-flex flex-column align-items-start ms-4">
                        <div>
                          <input
                            type="radio"
                            name="High"
                            id="High"
                            value="High"
                          />
                          <label for="Micro" className="choices">
                            Stocks
                          </label>
                        </div>
                        <div>
                          <input type="radio" name="Mid" id="Mid" value="Mid" />
                          <label for="Micro" className="choices">
                            Options
                          </label>
                        </div>
                        <div>
                          <input type="radio" name="Low" id="Low" value="Low" />
                          <label for="Micro" className="choices">
                            Futures
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              class="btn"
              style={{
                width: "50%",
                background: "#53acce",
                color: "white",
                fontWeight: "500",
                margin: "5px 0",
              }}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
