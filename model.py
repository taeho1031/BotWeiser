import openai
import os
import json
from datetime import datetime, timezone




class JsonGPT:
    def __init__(self, query):
        self.model = "gpt-4"
        self.prompt = "create me a json object with the following attributes:\
            {\
                id:\
                description:\
                timestamp:\
                chainID:\
            }\
            if timestamp is not specified use" + " {}.\
            Only return the JSON file and nothing else!\
            ".format(datetime.now(timezone.utc))
        self.query = query
        

        
    def parse_input(self):
        prompt = f"{self.prompt}  \n Query:```{self.query}```"
        return prompt

    def api_request(self):
        from dotenv import load_dotenv, find_dotenv
        _ = load_dotenv(find_dotenv())
        openai.api_key  = os.getenv('OPENAI_API_KEY')
        messages = [{"role": "user", "content": self.parse_input()}]
        client = openai.OpenAI()
        response = client.chat.completions.create(
        model=self.model,
        messages=messages)
        return response.choices[0].message
    
    def getJsonObjectSearch(self):
        gpt_response = self.api_request()
        print(f"{gpt_response=}")
        return json.loads(gpt_response.content)


        
search = "I want a bot that can detect money lanundering in the etherum blockchain network."
norf = JsonGPT(search)
j = norf.getJsonObjectSearch()
print(f"{j=}")
print(f"{j['description']=}")