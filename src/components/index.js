import Vue from "vue";
import "../assets/styles.css";
import Button from "./Button";

const Components = {
  Button
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
