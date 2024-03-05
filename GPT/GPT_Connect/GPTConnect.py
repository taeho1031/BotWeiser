import openai
import os
import json
from datetime import datetime, timezone
from GPT.GPT_Connect.prompts.jsonPrompts import json_prompt

class JsonGPT:
    def __init__(self, query):
        self.model = "gpt-4"
        self.jsonPrompt = json_prompt
        self.query = query
        self.bots = []
        self.conversation = [query]
        
    def parse_input(self):
        prompt = f"{self.jsonPrompt}  \n Query:```{self.query}```"
        return prompt
    
    def recieve_chat(self, input):
        prev_query = self.query
        self.query += f"\n++{input}"
        print(f"{self.query=}")
        json_ans = self.getJsonObjectSearch()
        print(f"{json_ans=}")
        if json_ans['valid'] == False:
            self.query = prev_query
            return json_ans
        else:
            self.conversation.append(input)
            return json_ans

    def api_request(self):
        from dotenv import load_dotenv, find_dotenv
        _ = load_dotenv(find_dotenv())
        openai.api_key  = os.getenv('OPENAI_API_KEY')
        client = openai.OpenAI()
        schema = {
            "type": "object",
            "properties": {
                "bot_id":{
                    "type": "string",
                    "description": "hexadecimal Id, if not specified leave as None"
                },
                "description":{
                    "type": "string",
                    "description": "Provide general description of possible blockchain bot from the user prompt. If bot id is not None, make description None"
                },
                "timestamp":{
                    "type": "string",
                    "description": "Use current time if not specified in UTC format"
                },
                "chainIds":{
                    "type": "array",
                    "items": {"type": "integer"},
                    "description": "Specify the relevant chain ID. If none found NULL"
                },
                "name":{
                    "type": "string",
                    "description": "Specify the name of the possible or relevant blockchain bot. Be general"
                },
                "valid":{
                    "type": "boolean",
                    "description": "Answer is always false unless the next requirement is meant\
                        - All User prompt starting with ++ should explicitly be about blockchains(blockchain security) or related to a previous user input starting with ++ that is about blockchains(blockchain security)\
                             If False then all other attributes should also be NULL! "
                }
            }
        }
        response = client.chat.completions.create(
            model=self.model,
            messages = [{"role": "system", "content": "You are an assistant for forming a blockchain bot object"},
                        {"role": "user", "content": self.parse_input()}],
            functions = [{"name": "set_bot_object", "parameters": schema}],
            function_call = {"name": "set_bot_object"}
        )
        return response.choices[0].message.function_call.arguments
    
    def getJsonObjectSearch(self):
        gpt_response = self.api_request()
        try:
            return json.loads(gpt_response)
        except json.decoder.JSONDecodeError as e:
            print(gpt_response)
            print(f"Error decoding JSON: {e}")
            return None
    
    def refresh_conversation(self):
        self.query = ""
        self.conversation = []