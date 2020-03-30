import * as axios from "axios";

// import { format } from "date-fns";
// import { inputDateFormat } from "./constants";

import { API } from "./config";

const getGoals = async function() {
  try {
    const response = await axios.get(`${API}/goals`);
    let goals = parseList(response);
    return goals;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getGoal = async function(id) {
  try {
    const response = await axios.get(`${API}/goals/${id}`);
    let goal = parseItem(response, 200);
    return goal;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const addGoal = async function(goal) {
  try {
    const response = await axios.post(`${API}/goals`, goal);
    const addedGoal = parseItem(response, 201);
    return addedGoal;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const updateGoal = async function(goal) {
  try {
    const response = await axios.put(`${API}/goals/${goal.id}`, goal);
    const updatedGoal = parseItem(response, 200);
    return updatedGoal;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const checkAsDone = async function(id, isDone) {
  try {
    const response = await axios.patch(`${API}/goals/${id}`, { done: isDone });
    const checkedAsDoneGoal = parseItem(response, 200);
    return checkedAsDoneGoal;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const deleteGoal = async function(goal) {
  try {
    const response = await axios.delete(`${API}/goals/${goal.id}`);
    parseItem(response, 200);
    return goal.id;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const parseList = response => {
  if (response.status !== 200) throw Error(response.message);
  if (!response.data) return [];
  let list = response.data;
  if (typeof list !== "object") {
    list = [];
  }
  return list;
};

export const parseItem = (response, code) => {
  if (response.status !== code) throw Error(response.message);
  let item = response.data;
  if (typeof item !== "object") {
    item = undefined;
  }
  return item;
};

export const dataService = {
  getGoals,
  getGoal,
  addGoal,
  updateGoal,
  checkAsDone,
  deleteGoal
};
