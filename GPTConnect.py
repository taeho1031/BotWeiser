import openai
import os
import json
from datetime import datetime, timezone

class JsonGPT:
    def __init__(self, query):
        self.model = "gpt-4"

        self.jsonPrompt = "convert the query supplied at the end inside triple backticks to json object with the following attributes:\
            {\
                bot_id: hexadecimal string or null\
                description: string or null\
                timestamp:string\
                chainIds: integer array or null\
                name: string or null\
                keywords: string array(upto top 8 priority words) or null\
                valid: boolean\
            }\
            valid: if the user prompt is not related to blockchain network or blockchain bot at all, is set to False otherwise True. If False, set all other attributes to Null\
            bot_id: Specify the ID if applicable.\
            description: Provide general description of possible blockchain bot from the user prompt.\
            timestamp: Use current time if not specified which is " + " {}.\
            chainIds: Specify the relevant chain ID. If none found NULL\
            name: Specify the name of the possible or relevant blockchain bot. Be general\
            keywords: Extract key words from the prompt that I can use to search a block chain bot. Return in a list form.\
            Chain IDs: \
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
            \
            correct example of output:\
            {\
                bot_id: hexadecimal string or null\
                description: string\
                timestamp:string\
                chainIds: integer array or null\
                name: string or null\
                keywords: string array(upto top 8 priority words) or null\
                valid: boolean\
            }\
            if timestamp is not specified use current time which is " + " {}.\
            If a blockchain network is provided make sure to add all correct chainIDs relevant.\
            Only return the JSON file and nothing else!\
            ".format(datetime.now(timezone.utc))

        self.keyWordsPrompt = "Extract key words from the prompt that I can use to search a block chain bot. Return in a list form."
        self.query = query
        
    def parse_input(self, getWords):
        if getWords:
            prompt = f"{self.keyWordsPrompt}  \n Query:```{self.query}```"
        else:
            prompt = f"{self.jsonPrompt}  \n Query:```{self.query}```"
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
        try:
            return json.loads(gpt_response.content)
        except json.decoder.JSONDecodeError as e:
            print(f"Error decoding JSON: {e}")
            return None
    
    def getKeywords(self):
        gpt_response = self.api_request(getWords=True)
        #print(f"{gpt_response=}" )
        return gpt_response.content
