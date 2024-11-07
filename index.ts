import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';

(async () => {
  // Connect to the Devnet
  const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

  // Replace with your wallet address
  const publicKey = new PublicKey('Ab7ozkgP2dyyr8g4Fs14tvF9rjBmhfoxkM6XDLZGHcJa');

  // Fetch and display the balance
  const balance = await connection.getBalance(publicKey);
  console.log(`Balance: ${balance / 1e9} SOL`);
})();

