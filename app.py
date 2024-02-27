from flask import Flask, jsonify, request
from flask_cors import CORS
import openai
from openai import AsyncOpenAI

from database.client.weaveight import WeaviateSearch
from GPT.GPT_Connect.GPTConnect import JsonGPT


app = Flask(__name__)
CORS(app, resources={r"/get-response*": {"origins": "http://localhost:3000"}})
norf = JsonGPT("Find me a bot")
weave = WeaviateSearch()
@app.route('/get-response', methods=['GET'])
def get_response():
    user_input = request.args.get('userInput')
    
    search_json = norf.recieve_chat(user_input)
    if type(search_json) == type('') or search_json == None:
        response_text = 'Please try Again!'
        print('Please try Again!')
    else:
        response_text = weave.search_with_prompt(search_json["description"], search_json["chainIds"])
        print("send result")
    # old_input = user_input

    # norf = JsonGPT(user_input)
    # weave = WeaviateSearch()
    # search_json = norf.getJsonObjectSearch()

    # print(f'{user_input=}')
    is_first_response = request.args.get('isFirstResponse') == 'true'

    if is_first_response:
        response_text = "Hi, I am Botweiser! Here to help you find your perfect blockchain security bot."
    # else:
        # try:
    #         # openai_response = openai.chat.completions.create(
    #         #     model="gpt-3.5-turbo",
    #         #     messages=[
    #         #         {"role": "system", "content": "You are a helpful assistant."},
    #         #         {"role": "user", "content": user_input},
    #         #     ]
    #         # )
    #         # # Extract the actual message content from the response
    #         # print(openai_response)
    #         # response_text = openai_response.choices[0].message.content
    #         # print(f'{response_text=}')
    #         while True:
    #             if type(search_json) == type('') or search_json == None:
    #                 print('Please try Again!')
    #             else:
    #                 results = weave.search_with_prompt(search_json["description"])
    #                 print("send result")
    #             user_input = request.args.get('userInput')
    #             while old_input == user_input:
    #                 user_input = request.args.get('userInput')
    #             old_input = user_input
    #             search_json = norf.recieve_chat(user_input)
    #             print(f'{user_input=}')

        # except Exception as e:
        #     response_text = "An error occurred: " + str(e)

    print(f"{response_text=}")
    return jsonify({"responseText": response_text})

if __name__ == '__main__':
    app.run(debug=True)
