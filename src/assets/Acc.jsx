import { useState } from "react";

const Acc = ({ e }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        style={{
          background: "#181818",
          borderRadius: "10px",
          marginBottom: "15px",
        }}
      >
        <div
          className={
            isActive
              ? "alert-box d-flex justify-content-between clicked"
              : "alert-box d-flex justify-content-between"
          }
          style={
            isActive ? { background: "#53acce" } : { background: "#414141" }
          }
          onClick={() => setIsActive(!isActive)}
        >
          <div
            className="attribute d-flex align-items-center justify-content-center col-3"
            style={{ borderRight: "1px solid grey" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
              style={{ width: "30px", color: "white", marginRight: "20px" }}
            >
              <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z"
                clipRule="evenodd"
              />
            </svg>

            <p style={{ color: "white", marginBottom: "0" }}>{e.company}</p>
          </div>

          <div
            className="attribute d-flex align-items-center justify-content-center col-3"
            style={{ borderRight: "1px solid grey" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
              style={{ width: "30px", color: "white", marginRight: "20px" }}
            >
              <path
                fillRule="evenodd"
                d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM9.75 14.25a.75.75 0 0 0 0 1.5H15a.75.75 0 0 0 0-1.5H9.75Z"
                clipRule="evenodd"
              />
              <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
            </svg>

            <p style={{ color: "white", marginBottom: "0" }}>{e.cost} </p>
          </div>

          <div
            className="attribute d-flex align-items-center justify-content-center col-3"
            style={{ borderRight: "1px solid grey" }}
            onClick={() => setIsActive(!isActive)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
              style={{ width: "30px", color: "white", marginRight: "20px" }}
            >
              <path
                fillRule="evenodd"
                d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z"
                clipRule="evenodd"
              />
            </svg>

            <p
              style={
                e.trading > 0
                  ? { color: "green", marginBottom: "0" }
                  : { color: "red", marginBottom: "0" }
              }
            >
              {e.trading} %
            </p>
          </div>

          <div
            className="attribute d-flex align-items-center justify-content-center col-3"
            onClick={() => setIsActive(!isActive)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 "
              style={{ width: "30px", color: "white", marginRight: "20px" }}
            >
              <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
              <path
                fillRule="evenodd"
                d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z"
                clipRule="evenodd"
              />
              <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
            </svg>

            <p style={{ color: "white", marginBottom: "0" }}>{e.risk} Risk</p>
          </div>
        </div>
        {isActive && (
          <div className="cont">
            <p>
              <strong>${e.company}</strong> just announced an aquisition of{" "}
              <strong>$NFLX </strong>
              at <strong>$200 B.</strong>
            </p>
            <p>
              This is an <a href="#">arbitrage opportunity</a>, with the max
              gain being %X if the deal closes, but the possible risk is %Y if
              the deal fails, if the deal success is % and therefore the
              recommended play is <a href="#">long/short</a> $ABC
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Acc;
