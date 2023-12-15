import { NavLink, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  const isNavLinkActive = (to) => {
    return location.pathname === to;
  };

  return (
    <nav className="rounded-lg bg-white rounded-xl   mt-[2%] mx-4  h-[90%] fixed  drop-shadow-lg w-[6.5%] flex flex-col justify-between  ">
      <div className="w-[80%] self-center">
        <svg
          className="mt-[10%] "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
        >
          <path
            fill="black"
            d="M480-80 120-280v-400l360-200 360 200v400L480-80ZM364-590q23-24 53-37t63-13q33 0 63 13t53 37l120-67-236-131-236 131 120 67Zm76 396v-131q-54-14-87-57t-33-98q0-11 1-20.5t4-19.5l-125-70v263l240 133Zm40-206q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm40 206 240-133v-263l-125 70q3 10 4 19.5t1 20.5q0 55-33 98t-87 57v131Z"
          />
        </svg>
      </div>
      <div className="flex flex-col h-[80%] ">
        <NavLink
          className={`  transition-colors rounded-xl duration-1000 ease-linear flex h-[17%] place-content-center ${
            isNavLinkActive("/") ? "bg-[#000000]" : ""
          }`}
          to={"/"}
        >
          {/* <svg
            className={` w-8 `}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path
              fill={`${isNavLinkActive("/") ? "white" : "#04062c"}`}
              d="M225.385-185.385h155.77v-216.154q0-12.259 8.293-20.552 8.293-8.294 20.553-8.294h139.998q12.26 0 20.553 8.294 8.293 8.293 8.293 20.552v216.154h155.77v-375.896q0-3.078-1.346-5.578-1.347-2.5-3.654-4.423L487.308-753.461q-3.077-2.308-7.308-2.308t-7.308 2.308L230.385-571.282q-2.307 1.923-3.654 4.423-1.346 2.5-1.346 5.578v375.896Zm-45.384 0v-375.768q0-13.962 5.943-26.039 5.942-12.076 17.288-20.038l242.307-182.691q14.787-11.616 34.239-11.616 19.453 0 34.683 11.616L756.768-607.23q11.346 7.962 17.288 20.038 5.943 12.077 5.943 26.039v375.768q0 18.509-13.438 31.946-13.437 13.438-31.946 13.438H562.308q-12.26 0-20.553-8.294-8.293-8.293-8.293-20.553v-216.153H426.538v216.153q0 12.26-8.293 20.553-8.293 8.294-20.553 8.294H225.385q-18.509 0-31.946-13.438-13.438-13.437-13.438-31.946ZM480-471.461Z"
            />
          </svg> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className={` w-8 `}
          >
            <path
              fill={`${isNavLinkActive("/") ? "white" : "#04062c"}`}
              d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z"
            />
          </svg>
        </NavLink>

        <NavLink
          className={` transition-colors rounded-xl duration-1000 ease-linear flex h-[17%] place-content-center ${
            isNavLinkActive("/demand") ? "bg-[#000000]" : ""
          }`}
          to={"/demand"}
        >
          <svg
            className={` w-8 `}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path
              fill={`${isNavLinkActive("/demand") ? "white" : "#04062c"}`}
              d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z"
            />
          </svg>
        </NavLink>

        <NavLink
          className={`transition-colors rounded-xl duration-1000 ease-linear flex h-[17%] place-content-center ${
            isNavLinkActive("/profit") ? "bg-[#000000]" : ""
          }`}
          to={"/profit"}
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className={` w-8 `}
            viewBox="0 -960 960 960"
          >
            <path
              fill={`${isNavLinkActive("/profit") ? "white" : "#04062c"}`}
              d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z"
            />
          </svg> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className={` w-8 `}
          >
            <path
              fill={`${isNavLinkActive("/profit") ? "white" : "#04062c"}`}
              d="M440-280h80v-40h40q17 0 28.5-11.5T600-360v-120q0-17-11.5-28.5T560-520H440v-40h160v-80h-80v-40h-80v40h-40q-17 0-28.5 11.5T360-600v120q0 17 11.5 28.5T400-440h120v40H360v80h80v40ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"
            />
          </svg>
        </NavLink>

        <NavLink
          className={` transition-colors rounded-xl duration-1000 ease-linear flex h-[17%] place-content-center ${
            isNavLinkActive("/manufacturer") ? "bg-[#000000]" : ""
          }`}
          to={"/manufacturer"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={` w-8 `}
            viewBox="0 -960 960 960"
          >
            <path
              fill={`${isNavLinkActive("/manufacturer") ? "white" : "#04062c"}`}
              d="M42-120v-112q0-33 17-62t47-44q51-26 115-44t141-18q77 0 141 18t115 44q30 15 47 44t17 62v112H42Zm80-80h480v-32q0-11-5.5-20T582-266q-36-18-92.5-36T362-320q-71 0-127.5 18T142-266q-9 5-14.5 14t-5.5 20v32Zm240-240q-66 0-113-47t-47-113h-10q-9 0-14.5-5.5T172-620q0-9 5.5-14.5T192-640h10q0-45 22-81t58-57v38q0 9 5.5 14.5T302-720q9 0 14.5-5.5T322-740v-54q9-3 19-4.5t21-1.5q11 0 21 1.5t19 4.5v54q0 9 5.5 14.5T422-720q9 0 14.5-5.5T442-740v-38q36 21 56 57t22 81h10q9 0 14.5 5.5T552-620q0 9-5.5 14.5T532-600h-10q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T442-600H282q0 33 23.5 56.5T362-520Zm300 160-6-30q-6-2-11.5-4.5T634-402l-28 10-20-36 22-20v-24l-22-20 20-36 28 10q4-4 10-7t12-5l6-30h40l6 30q6 2 12 5t10 7l28-10 20 36-22 20v24l22 20-20 36-28-10q-5 5-10.5 7.5T708-390l-6 30h-40Zm20-70q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm72-130-8-42q-9-3-16.5-7.5T716-620l-42 14-28-48 34-30q-2-5-2-8v-16q0-3 2-8l-34-30 28-48 42 14q6-6 13.5-10.5T746-798l8-42h56l8 42q9 3 16.5 7.5T848-780l42-14 28 48-34 30q2 5 2 8v16q0 3-2 8l34 30-28 48-42-14q-6 6-13.5 10.5T818-602l-8 42h-56Zm28-90q21 0 35.5-14.5T832-700q0-21-14.5-35.5T782-750q-21 0-35.5 14.5T732-700q0 21 14.5 35.5T782-650ZM122-200h480-480Z"
            />
          </svg>
        </NavLink>

        <NavLink
          className={` transition-colors rounded-xl duration-1000 ease-linear flex h-[17%] place-content-center  ${
            isNavLinkActive("/stock") ? "bg-[#000000]" : ""
          }`}
          to={"/stock"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={` w-8 `}
            viewBox="0 -960 960 960"
          >
            <path
              fill={`${isNavLinkActive("/stock") ? "white" : "#04062c"}`}
              d="M200-80q-33 0-56.5-23.5T120-160v-451q-18-11-29-28.5T80-680v-120q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v120q0 23-11 40.5T840-611v451q0 33-23.5 56.5T760-80H200Zm0-520v440h560v-440H200Zm-40-80h640v-120H160v120Zm200 280h240v-80H360v80Zm120 20Z"
            />
          </svg>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
