import openai
import os
import json
from datetime import datetime, timezone




class JsonGPT:
    def __init__(self, query):
        self.model = "gpt-4"
        self.jsonprompt = "create me a json object from the query supplied at the end with triple backticks with the following attributes:\
            {\
                id:\
                description:\
                timestamp:\
                chainID:\
            }\
            if timestamp is not specified use current time which is " + " {}.\
            Only return the JSON file and nothing else!\
            If a blockchain network is provided make sure to add all correct chainIDs relevant.\
            Chain ids:\
            1 - Ethereum Mainnet\
            42114 - Avalanche Fuji C-Chain\
            5 - Goerli (Ethereum Testnet)\
            137 - Polygon (formerly Matic)\
            10 - Optimistic Ethereum (Optimism)\
            43114 - Avalanche X-Chain\
            42220 - Celo Mainnet\
            42161 - Arbitrum\
            56 - Binance Smart Chain\
            250 - Fantom Opera\
            If none of the chain ids from above specified, leave it empty, if there are more than one return in a list in ascending order.\
            Leave ID empty if not specified.\
            Only return the JSON file and nothing else!\
            ".format(datetime.now(timezone.utc))
        self.query = query
        
        self.keyWordsPrompt = "Extract key words from the prompt that I can use to search a block chain bot. Return in a list form."
        self.query = query
        
    def parse_input(self, getWords):
        if getWords:
            prompt = f"{self.keyWordsPrompt}  \n Query:```{self.query}```"
        else:
            prompt = f"{self.jsonprompt}  \n Query:```{self.query}```"
        return prompt

    def api_request(self, getWords):
        from dotenv import load_dotenv, find_dotenv
        _ = load_dotenv(find_dotenv())
        openai.api_key  = os.getenv('OPENAI_API_KEY')
        messages = [{"role": "user", "content": self.parse_input(getWords)}]
        client = openai.OpenAI()
        response = client.chat.completions.create(
        model=self.model,
        messages=messages)
        return response.choices[0].message
    
    def getJsonObjectSearch(self):
        gpt_response = self.api_request(getWords=False)
        # print(f"{gpt_response=}" )
        return json.loads(gpt_response.content)
    
    def getKeywords(self):
        gpt_response = self.api_request(getWords=True)
        print(f"{gpt_response=}" )
        return gpt_response

        
search = "Give me a bot that detects any scam nfts on the ehtereum and polygon networks that was last updated 8 month ago."
norf = JsonGPT(search)
j = norf.getKeywords()
print(f"{j=}")
# print(f"{j['description']=}")