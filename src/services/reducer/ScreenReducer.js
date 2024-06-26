import { finalSpaceCharacters } from "@/constants/constants";
import { createSlice } from "@reduxjs/toolkit";

export const screenSlice = createSlice({
  name: "screen",
  initialState: {
    data: {},
    screens: finalSpaceCharacters,
    prevScreens: finalSpaceCharacters,
    template: [],
    templateVisited: [],
    user: localStorage.getItem("user") ? localStorage.getItem("user") : {},
    sidebar: false,
    drawerOpen:false
  },
  reducers: {
    addTemplate: (state, action) => {
      console.log(state?.template, action);
      if (state?.template?.length > 0) {
        state?.template.push(action.payload);
      }
      state.template = JSON.parse(JSON.stringify(action.payload));
    },

    addScreen: (state, action) => {
      console.log(action.payload, "hiii");
      if (state.data[action.payload[0]]) delete state.data[action.payload[0]];
      state.data[action.payload[0]] = [action.payload[1]];
    },
    saveScreen: (state, action) => {
      state.prevScreens = state.screens;
      state.screens = action.payload;
    },
    editScreenDeatils: (state, action) => {
      console.log(action.payload, "hiii");
      state.data[action.payload[0]] = [action.payload[1]];
    },
    login: (state, action) => {
      console.log(action.payload, "hi");
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = JSON.parse(JSON.stringify(localStorage.getItem("user")));
    },
    logout: (state, action) => {
      localStorage.removeItem("user");
      state.user = action.payload;
    },
    templateVisited: (state, action) => {
      state.templateVisited.push(action.payload);
    },
    sidebarStatus: (state, action) => {
      state.sidebarStatus = action.payload;
    },
    drawerOpenClose:(state,action)=>{
      state.drawerOpen = action.payload
    }
  },
});
export const {
  addScreen,
  saveScreen,
  editScreenDeatils,
  login,
  logout,
  addTemplate,
  templateVisited,
  sidebarStatus,
  drawerOpenClose
} = screenSlice.actions;

export default screenSlice.reducer;
