import './App.css';
import { useEffect, useState } from "react";
import idl from "./idl.json";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { Program, AnchorProvider, web3, utils, BN, } from "@project-serum/anchor";

const App = () => {

  const [walletAddress, setWalletAddress] = useState(null);
  const checkIfWalletIsConnected = async() => {
    try {

      const {solana} = window;
      if (solana) {
        if (solana.isPhantom) {
          console.log("Phantom wallet found!");
          //if user is already connected, don't prompt to connect again.
/*           const response = await solana.connect({
            onlyIfTrusted: true, 
          }); */
        } else {
          alert("Solana object not found! Get a Phantom wallet");
        }
      }
    } catch(error) {
      console.error(error)
    }
  };


const connectWallet = async() => {
  const {solana} = window;
  if (solana) {
    const response = await solana.connect()
    console.log('Connected with public key:', response.publicKey.toString());
    setWalletAddress(response.publicKey.toString());
  }
};

const renderNotConnectedContainer = () => (
  <button onClick={connectWallet}>Connect to Wallet</button>
)

  useEffect(() => {
    const onLoad = async() => {
      await checkIfWalletIsConnected()
    }
    window.addEventListener('load', onLoad)
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return <div className="App">{
    !walletAddress && renderNotConnectedContainer()
  }</div>
}

export default App;
