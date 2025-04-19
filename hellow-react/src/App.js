// import Libraries
import React from "react";
import Header from "./Header.jsx";
import "./App.css";
import Footer from "./footer.jsx"
import List from "./list.jsx";


const App = () => {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <p>Nama Saya dede ahmad rivandi</p>
      <Header list='10 Daftar Makanan'/>
      <List />
      <Footer judul='Halaman footer' namaKampus='STIKOM POLTEK'/>
    </div>
  );
};

export default App;
