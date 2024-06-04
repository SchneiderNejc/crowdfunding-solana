solana-keygen new -o id.json
-create a new wallet for local project
-don't forget to copy the pubkey

solana airdrop 2 CUTFj7GMje9fyBY5AjWZNDmwLoEZSQ3PJnSP3T7HyeEp --url devnet
-airdrop to the selected address

solana build
-build project and generate program id

solana address -k ./target/deploy/crowdfunding-solana-keypair.json
-retrieve projectid
-replace it in Anchor.toml crowdfunding_solana and in lib.rs

anchor deploy
-deploys contract to testnet
-can be accessed through explorer.solana.com