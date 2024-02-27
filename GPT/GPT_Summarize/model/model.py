import openai
import os



class Botweiser:
    def __init__(self, desc, source_code):
        self.model = "gpt-4"
        self.input = " "
        self.summary_instruction = " Summarize the job of the specific web3 bot from its description and it's source code. The description is bounded by triple backticks \
            while the source code for the bot is bounded by triple quotes."
        self.source_code = source_code
        self.bot_description = desc
        

    
    def parse_input(self):
        prompt = f'{self.summary_instruction} + ```{self.bot_description}``` + """{self.source_code}""""'
        return prompt

    def summarize(self):
        from dotenv import load_dotenv, find_dotenv
        _ = load_dotenv(find_dotenv())
        openai.api_key  = os.getenv('OPENAI_API_KEY')
        messages = [{"role": "user", "content": self.parse_input()}]
        client = openai.OpenAI()
        response = client.chat.completions.create(
        model=self.model,
        messages=messages)
        return response.choices[0].message
        

f = open('code.txt', 'r')
code = f.read()
# print(f"{code=}")
f.close()
f = open('desc.txt', 'r')
description = f.read()
# print(f"{description=}")
f.close()

summar = Botweiser(description, code)
summary = summar.summarize()
print(f"{summary=}")