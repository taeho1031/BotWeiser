from datetime import datetime, timezone

json_prompt = "convert the query supplied at the end inside triple backticks to a single json object\
            Additional information:\
            Chain Ids(only include these chain Ids): \
            - 1: Ethereum Mainnet \
            - 42114: Avalanche Fuji C-Chain \
            - 5: Goerli (Ethereum Testnet) \
            - 137: Polygon (formerly Matic) \
            - 10: Optimistic Ethereum (Optimism) \
            - 43114: Avalanche X-Chain \
            - 42220: Celo Mainnet \
            - 42161: Arbitrum \
            - 56: Binance Smart Chain \
            - 250: Fantom Opera \
            If timestamp is not specified use current time which is " + " {}.\
            If and only a blockchain network is specified make sure to add all specified chainIDs.\
            ".format(datetime.now(timezone.utc))
