import React, { useState, useEffect } from "react";
import { BotCard } from "./cards/BotCard";
import { ResponseCard } from "./cards/ResponseCard";
import "./Response.css";

export const Response = ({ userInput, isFirstResponse }) => {
  const [responseText, setResponseText] = useState("");

  useEffect(() => {
    // Check if it's the first response
    if (isFirstResponse) {
      setResponseText(
        <div>
          <p>
            Welcome: This AI companion is your perfect guide to effortlessly
            navigate through the diverse realm of bots.
          </p>
          <p>Commands:</p>
          <p>
            "Describe what me what the Detection Bot: Victim & Loss Identifier
            does" : Ask the Bot to describe specific bot.
          </p>
          <p>
            "Give me the list of the Forta Detection Bots that can help with
            spam detection" : Ask the Bot for List of Bots related to Scam
            Detector
          </p>
        </div>
      );
    } else {
      // Handle subsequent responses based on user input for testing purpose.
      switch (userInput) {
        case "Describe what me what the Detection Bot: Victim & Loss Identifier does":
          setResponseText(
            <text>
              This bot, named ""Victim & Loss Identifier Bot,"" primarily
              interacts with the Ethereum blockchain to identify victims of
              scams in end-user attacks, specifically relating to fraudulent NFT
              orders. The bot monitors alerts from another bot called the ""Scam
              Detector Feed"" and reacts to these alerts by tracking scammer
              addresses and categorizing the types of threats they represent.
              When the bot identifies a scammer involved in a fraudulent NFT
              order, it delves into historical data for the past 90 days to see
              the digital assets that have been transferred to the scammer. It
              quantifies these assets in USD based on available price data. This
              process of assessing victims and losses continues daily, for 30
              days after the last known activity from the scammer. The bot
              supports the Ethereum chain and maps alerts from the underlying
              Scam Detector Feed into victim loss information. It fires an
              ""info"" type alert containing the identified victim address, the
              scammer address, amounts lost, transaction hash, and details about
              the lost ERC-721 tokens. Additionally, it provides false positive
              alerts when it believes previously detected scammers are likely
              benign.
            </text>
          );
          break;

        case "Give me the list of the Forta Detection Bots that can help with spam detection":
          // This should be replaced with GPTSearcher: GPT 4.0 API. The prompt should be the userInput
          setResponseText(
            <>
              <BotCard
                id={
                  "0x1d646c4045189991fdfd24a66b192a294158b839a6ec121d740474bdacb3ab23"
                }
                name={"Scam Detector Feed"}
                description={
                  "Provides real-time intelligence on scammers engaged in over 10 unique scam types."
                }
                /*Summary: The Scam Detector data feed provides real-time intelligence about EOAs, 
                contracts and URLs involved in a variety of Web3 scams. It is jointly maintained by the Forta Foundation, Nethermind, Blocksec, ChainPatrol and members of the Forta developer community. 
                It features market leading scam type coverage on ice phishing, address poisoning, rake tokens, token impersonation, 
                fraudulent NFT orders, pig butchering, gas minting, sleep minting, hard rug pulls, soft rug pulls, and wash trading. 
                Used by Web3 wallets, exchanges, crypto compliance companies and other Web3 security teams and tools. 
                Teams can use Scam Detector labels to warn end-users during the pre-signing transaction approval process, 
                to identify and prevent money laundering through regulated platforms, and to supplement existing blacklists among other use cases. 
                Learn more in the documentation below, and request a free trial today.*/
              />
              <div id={1} className="summary-block">
                <text>
                  The Scam Detector data feed provides real-time intelligence
                  about EOAs, contracts and URLs involved in a variety of Web3
                  scams. It is jointly maintained by the Forta Foundation,
                  Nethermind, Blocksec, ChainPatrol and members of the Forta
                  developer community. It features market leading scam type
                  coverage on ice phishing, address poisoning, rake tokens,
                  token impersonation, fraudulent NFT orders, pig butchering,
                  gas minting, sleep minting, hard rug pulls, soft rug pulls,
                  and wash trading. Used by Web3 wallets, exchanges, crypto
                  compliance companies and other Web3 security teams and tools.
                  Teams can use Scam Detector labels to warn end-users during
                  the pre-signing transaction approval process, to identify and
                  prevent money laundering through regulated platforms, and to
                  supplement existing blacklists among other use cases. Learn
                  more in the documentation below, and request a free trial
                  today.
                </text>
              </div>
              <BotCard
                id={
                  "0x513ea736ece122e1859c1c5a895fb767a8a932b757441eff0cadefa6b8d180ac"
                }
                name={"scammer - nft - trader"}
                description={
                  "Index NFT trades and detect scammer accounts. Supports OpenSea, LooksRare and Blur"
                }
                /*Summary: "The purpose of the specific web3 bot described is to monitor and analyze NFT transactions across multiple blockchain marketplaces, such as OpenSea, LooksRare, and Blur, to detect suspicious activities that may be indicative of scams or phishing attempts. 
                It operates by storing transaction records in a local MySQL database, 
                enabling it to query for anomalies like sales far from floor prices or very rapid sales that deviate from normal patterns.
                The bot issues various types of alerts depending on the activity detected. These alerts include notifications for NFT sales at unusual price differences compared to the floor price, 
                potential phishing sales where the transaction value is below a certain threshold, and alerts for stolen NFTs that may have been involved in a suspected phishing attack.
                Supported blockchain networks include Ethereum, BSC, Polygon, Optimism, Fantom, Arbitrum, Avalanche, and more.
                The source code for the bot includes a JavaScript file (`client.js`) that contains functions to determine token prices, retrieve OpenSea floor prices, and handle interactions with the MySQL database for transaction records. 
                It also provides utility functions for fetching the latest transaction records and getting transactions by specific addresses.
                Additionally, the source code features test-related scripts for testing the database connection and table creation (`db.test.js`), as well as the bot's transaction handling logic (`agent.spec.js`). 
                Other parts of the source code contain logic for parsing and interpreting different NFT transaction event logs and wrapping them up into a standardized format that can be stored in the database and used for alert generation.
                Overall, the bot serves as a tool to improve transparency and security in the NFT marketplace ecosystem by flagging transactions that may require further inspection for potential fraudulent activities."*/
              />
              <div id={2} className="summary-block">
                <text>
                  The purpose of the specific web3 bot described is to monitor
                  and analyze NFT transactions across multiple blockchain
                  marketplaces, such as OpenSea, LooksRare, and Blur, to detect
                  suspicious activities that may be indicative of scams or
                  phishing attempts. It operates by storing transaction records
                  in a local MySQL database, enabling it to query for anomalies
                  like sales far from floor prices or very rapid sales that
                  deviate from normal patterns. The bot issues various types of
                  alerts depending on the activity detected. These alerts
                  include notifications for NFT sales at unusual price
                  differences compared to the floor price, potential phishing
                  sales where the transaction value is below a certain
                  threshold, and alerts for stolen NFTs that may have been
                  involved in a suspected phishing attack. Supported blockchain
                  networks include Ethereum, BSC, Polygon, Optimism, Fantom,
                  Arbitrum, Avalanche, and more. The source code for the bot
                  includes a JavaScript file (`client.js`) that contains
                  functions to determine token prices, retrieve OpenSea floor
                  prices, and handle interactions with the MySQL database for
                  transaction records. It also provides utility functions for
                  fetching the latest transaction records and getting
                  transactions by specific addresses. Additionally, the source
                  code features test-related scripts for testing the database
                  connection and table creation (`db.test.js`), as well as the
                  bot's transaction handling logic (`agent.spec.js`). Other
                  parts of the source code contain logic for parsing and
                  interpreting different NFT transaction event logs and wrapping
                  them up into a standardized format that can be stored in the
                  database and used for alert generation. Overall, the bot
                  serves as a tool to improve transparency and security in the
                  NFT marketplace ecosystem by flagging transactions that may
                  require further inspection for potential fraudulent
                  activities.
                </text>
              </div>
              <BotCard
                id={
                  "0x55636f5577694c83b84b0687eb77863850c50bd9f6072686c8463a0cbc5566e0"
                }
                name={"Flashloan Detection Bot"}
                description={
                  "Forta bot that detects if a transaction contains a flashloan where the borrower makes large profit"
                }
                /*Summary: This bot focuses on detecting instances of flashloan utilization, the bot diligently examines each transaction to determine if it aligns with the characteristics of a flashloan. 
                It further analyzes the transaction to assess whether the borrower has generated a substantial profit, using a preset percentage threshold. The bot's function is activated solely in cases 
                where both a flashloan is involved and the borrower's profit meets the specified criteria, providing an objective mechanism for identifying these specific transaction types.
                 */
              />
              <div id={3} className="summary-block">
                <text>
                  This bot focuses on detecting instances of flashloan
                  utilization, the bot diligently examines each transaction to
                  determine if it aligns with the characteristics of a
                  flashloan. It further analyzes the transaction to assess
                  whether the borrower has generated a substantial profit, using
                  a preset percentage threshold. The bot's function is activated
                  solely in cases where both a flashloan is involved and the
                  borrower's profit meets the specified criteria, providing an
                  objective mechanism for identifying these specific transaction
                  types.
                </text>
              </div>
              <BotCard
                id={
                  "0xe4a8660b5d79c0c64ac6bfd3b9871b77c98eaaa464aa555c00635e9d8b33f77f"
                }
                name={"Asset Drained"}
                description={
                  "Detects if an asset is fully drained from a contract"
                }
                /*Summary: The bot identifies instances where a contract's assets have been significantly depleted, reaching a threshold of 99% or more within a single block. 
                By closely monitoring the transfers of both ERC20 tokens and native tokens from contracts, the bot raises an alert when it detects a rapid reduction in a contract's balance*/
              />
              <div id={4} className="summary-block">
                <text>
                  The bot identifies instances where a contract's assets have
                  been significantly depleted, reaching a threshold of 99% or
                  more within a single block. By closely monitoring the
                  transfers of both ERC20 tokens and native tokens from
                  contracts, the bot raises an alert when it detects a rapid
                  reduction in a contract's balance
                </text>
              </div>
              <BotCard
                id={
                  "0x331b7e5bf098721ef2cb1fece42237656b1b649bdb6ac201d6e99ca069b2437e"
                }
                name={"Maker-Strategy-Agent"}
                description={
                  "On each block query the vesper API to fetch the strategies and then filter the ones that include maker in the contract info and Send alert if isUnderwater is true. Get collateral ratio from cm.getVaultInfo and compare to lowWater and highWater"
                }
                /*Summary: "The purpose of this Web3 bot is to monitor Vesper
              Maker strategies for certain conditions that could indicate
              potential risks or issues with the strategy. The bot operates on
              the Ethereum blockchain and raises alerts based on specific
              criteria related to the MakerDAO lending protocol. The bot
              functions as follows: 1. It fetches all active pools and their
              strategies, then filters out strategies that are specifically
              associated with Maker by checking if the strategy's name includes
              the term ""Maker."" 2. The bot then checks multiple cases to
              determine if an alert should be thrown, which include: -
              `isUnderWater` detection: If a Maker strategy's `isUnderWater`
              function returns true, indicating that the strategy's debt value
              is greater than the collateral value, a high-severity alert is
              triggered. - Collateral ratio checks: If the collateral ratio goes
              below a certain threshold (`lowWater`), a critical alert is
              thrown. Conversely, if the collateral ratio is above a higher
              threshold (`highWater`), an informational alert is issued. -
              Stability Fee Updates: If there is a change in the stability fee
              in the collateral of Maker strategies, a high-severity
              informational alert is raised. 3. Alerts generated by the bot will
              include metadata about the Maker strategy in question, such as the
              strategy's address, collateral ratio, and associated thresholds
              (`lowWater` and `highWater`), or the collateral type if it's a
              stability fee update alert. The source code provided consists of
              several JavaScript files which detail the implementation of the
              agent: - `maker.fetcher.js` implements a fetcher class responsible
              for querying the blockchain for active pools and strategies,
              especially those related to Maker. - `agent.spec.js` contains the
              unit tests for the bot's functionality, ensuring that it behaves
              correctly in various scenarios. - `utils.js` provides utility
              functions that facilitate the bot's operations, such as fetching
              collateral ratios, low/high watermarks, checking if a strategy is
              underwater, and creating findings based on specific conditions. -
              `abi.js` declares the Application Binary Interface (ABI) for the
              Ethereum smart contracts that the bot interacts with. This allows
              the bot to understand how to communicate with the smart contracts.
              - `agent.js` contains the main logic of the bot. It dispatches
              handlers to process both block events and transaction events,
              using heuristics based on the bot's specifications. - `mock.js`
              seems to be a file that aids in testing the bot by mocking
              blockchain data and contract calls, providing predictable
              responses for the tests without the need to interact with the
              actual blockchain. The bot's source code reveals that it heavily
              utilizes Promises and async/await patterns to manage asynchronous
              calls to the Ethereum blockchain. Additionally, it employs the
              `forta-agent` and `forta-agent-tools` libraries to define findings
              and handle blockchain events within the Forta network, which is a
              monitoring and surveillance framework for detecting anomalous
              activities on blockchains." */
              />
              <div id={5} className="summary-block">
                <text>
                  The purpose of this Web3 bot is to monitor Vesper Maker
                  strategies for certain conditions that could indicate
                  potential risks or issues with the strategy. The bot operates
                  on the Ethereum blockchain and raises alerts based on specific
                  criteria related to the MakerDAO lending protocol. The bot
                  functions as follows: 1. It fetches all active pools and their
                  strategies, then filters out strategies that are specifically
                  associated with Maker by checking if the strategy's name
                  includes the term ""Maker."" 2. The bot then checks multiple
                  cases to determine if an alert should be thrown, which
                  include: - `isUnderWater` detection: If a Maker strategy's
                  `isUnderWater` function returns true, indicating that the
                  strategy's debt value is greater than the collateral value, a
                  high-severity alert is triggered. - Collateral ratio checks:
                  If the collateral ratio goes below a certain threshold
                  (`lowWater`), a critical alert is thrown. Conversely, if the
                  collateral ratio is above a higher threshold (`highWater`), an
                  informational alert is issued. - Stability Fee Updates: If
                  there is a change in the stability fee in the collateral of
                  Maker strategies, a high-severity informational alert is
                  raised. 3. Alerts generated by the bot will include metadata
                  about the Maker strategy in question, such as the strategy's
                  address, collateral ratio, and associated thresholds
                  (`lowWater` and `highWater`), or the collateral type if it's a
                  stability fee update alert. The source code provided consists
                  of several JavaScript files which detail the implementation of
                  the agent: - `maker.fetcher.js` implements a fetcher class
                  responsible for querying the blockchain for active pools and
                  strategies, especially those related to Maker. -
                  `agent.spec.js` contains the unit tests for the bot's
                  functionality, ensuring that it behaves correctly in various
                  scenarios. - `utils.js` provides utility functions that
                  facilitate the bot's operations, such as fetching collateral
                  ratios, low/high watermarks, checking if a strategy is
                  underwater, and creating findings based on specific
                  conditions. - `abi.js` declares the Application Binary
                  Interface (ABI) for the Ethereum smart contracts that the bot
                  interacts with. This allows the bot to understand how to
                  communicate with the smart contracts. - `agent.js` contains
                  the main logic of the bot. It dispatches handlers to process
                  both block events and transaction events, using heuristics
                  based on the bot's specifications. - `mock.js` seems to be a
                  file that aids in testing the bot by mocking blockchain data
                  and contract calls, providing predictable responses for the
                  tests without the need to interact with the actual blockchain.
                  The bot's source code reveals that it heavily utilizes
                  Promises and async/await patterns to manage asynchronous calls
                  to the Ethereum blockchain. Additionally, it employs the
                  `forta-agent` and `forta-agent-tools` libraries to define
                  findings and handle blockchain events within the Forta
                  network, which is a monitoring and surveillance framework for
                  detecting anomalous activities on blockchains.
                </text>
              </div>
            </>
          );
          break;

        default:
          setResponseText(
            <div>
              <p>Commands:</p>
              <p>
                "Describe what me what the Detection Bot: Victim & Loss
                Identifier does" : Ask the Bot to describe specific bot.
              </p>
              <p>
                "Give me the list of the Forta Detection Bots that can help with
                spam detection" : Ask the Bot for List of Bots related to Scam
                Detector
              </p>
            </div>
          );
          break;
      }
    }
  }, [userInput, isFirstResponse]);

  return <ResponseCard isBot={true}>{responseText}</ResponseCard>;
};
