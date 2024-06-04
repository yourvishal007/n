
import React from "react";
import {  useLocation, useNavigate } from "react-router-dom";
const createTemplate = [
  {
    id: "singleForm",
    screenName: "Single Form",
    to: "createSingleForm",
  },
  {
    id: "personal_info",
    screenName: "Step Form",
    to: "createStepForm",
  },
];
const CreateTemplate = () => {
  const { state } = useLocation();
  const naviagte = useNavigate();
  console.log(state, "state");
  return (
    <div className=" flex flex-1 justify-center items-center h-[80vh] ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {createTemplate?.map(({ id, screenName, description, to }, index) => (
          <button
            className="w-[230px] h-[230px] rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground px-4 py-2 group border border-primary/20  items-center justify-center flex flex-col hover:border-primary hover:cursor-pointer border-dashed gap-4"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:Rdllb6la:"
            data-state="closed"
            onClick={() => naviagte(`/${to}`)}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              class="h-8 w-8 text-muted-foreground group-hover:text-primary"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"></path>
              <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"></path>
            </svg>
            <p class="font-bold text-xl text-muted-foreground group-hover:text-primary">
              {screenName}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CreateTemplate;