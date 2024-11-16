import React, { useEffect, useLayoutEffect } from "react";
import "./App.css";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
// import PrivyDemo from './Components/PrivyDemo/PrivyDemo?';
import { observer } from "mobx-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useChains } from "wagmi";
import { getUSDAmount } from "./Config/utils";
import FormStore from "./Config/Store/FormStore";
import CustomTable from "./Components/CustomTable/CustomTable";
import LandingPage from "./Components/LandingPage/LandingPage";
import PauseApp from "./Components/PauseApp/PauseApp";

const App = observer(() => {

  
  return (
    <ChakraProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* <Header /> */}
                  {/* <BridgeNew /> */}
                  <LandingPage />
                  <CustomTable preClass="cc"/>
                </>
              }
            />
           <Route
              path="/listProtocol"
              element={
                <>
                  <PauseApp />
                </>
              }
            />

            {/* { <Route
              path="/liquidity"
              element={
                <>
                  <Header />
                  <Liquidity />
                </>
              }
            /> -->} */}

            <Route path="*" element={<>Page Not Found!</>} />
          </Routes>
        </Router>
      </div>
    </ChakraProvider>
  );
});

export default App;
