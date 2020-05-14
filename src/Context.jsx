import React, { Component } from "react";

const myContext = React.createContext();

const Providor = myContext.Provider;
const Consumer = myContext.Consumer;

export { Providor, Consumer };
