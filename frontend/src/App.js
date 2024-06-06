import './App.css';
import { useEffect } from "react";

const App = () => {
  const checkIfWalletIsConnected = async() => {
    try {

      const {solana} = window;
      if (solana) {
        if (solana.isPhantom) {
          console.log("Phantom wallet found!");
          //if user is already connected, don't prompt to connect again.
          const response = await solana.connect({
            onlyIfTrusted: true, 
          });
          console.log("Connected with public key:", 
            response.publicKey.toString()
          );
        } else {
          alert("Solana object not found! Get a Phantom wallet");
        }
      }
    } catch(error) {
      console.error(error)
    }
  };


const connectWallet = async() => {};

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

  return <div className="App">{renderNotConnectedContainer()}</div>
}

export default App;
