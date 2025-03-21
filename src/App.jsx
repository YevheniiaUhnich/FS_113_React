import React from "react";
import Footer from "./components/Footer/Footer";
import HelloSection from "./components/HelloSection/HelloSection";
import Header from "./components/Header/Header";
import Message from "./components/Message/Message";
import cats from "./assets/cats.json";
import Item from "./components/Item/Item";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";

const App = () => {
  const age = 18;
  const isAdult = age > 18 ? <h2>Hello</h2> : <h2>Bye</h2>;
  return (
    <>
      <Header />

      <h2>Style for React</h2>

      <Button variant="outline">Click</Button>
      <Button variant="XL">Submit</Button>

      <Modal>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eum
          minima alias obcaecati perspiciatis deleniti totam quas voluptate et
          nemo, nobis nisi voluptas repellat, vitae sint eos ex quibusdam
          possimus.
        </p>
        <button>Click</button>
      </Modal>

      <Modal>
        <p>Number</p>
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
        <button>Submit</button>
      </Modal>

      {isAdult}

      {null && <h2>Hello</h2>}
      {false}
      {undefined}

      <Message author="Alex" text="Продам праску!" isOnline={true} />
      <Message author="Olena" text="Куплю хотдог!" isOnline={false} />
      <Message author="Ihor" text="Привіт!" isOnline />
      <Message author="Oleg" text="Hello World" isOnline={false} />

      <ul>
        {cats.map((item) => (
          <Item key={item.name} item={item} />
        ))}
      </ul>
    </>
  );
};

export default App;
