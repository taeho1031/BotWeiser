from flask import Flask, jsonify, request
from flask_cors import CORS
import openai
from openai import AsyncOpenAI

from database.client.weaveight import WeaviateSearch
from GPT.GPT_Connect.GPTConnect import JsonGPT

DEPLOY_URL = "http://localhost:3000"
app = Flask(__name__)
CORS(app, resources={r"/get-response*": {"origins": DEPLOY_URL}})
norf = JsonGPT("Start Here")
weave = WeaviateSearch()
@app.route('/get-response', methods=['GET'])

def get_response():
    user_input = request.args.get('userInput')
    is_first_response = request.args.get('isFirstResponse') == 'true'
    if is_first_response:
        response_text = "Hello, I'm Botweiser! My purpose is to assist you in discovering the ideal blockchain security bot for your needs. Please share any specific details or preferences you have. You can also search by specific id of blockchain bot one at a time."
        norf.refresh_conversation()
        return jsonify({"responseText": response_text})

    search_json = norf.recieve_chat(user_input)

    if search_json["valid"] == False:
        response_text = 'Please try again! Provide information that is relevant to blockchain bots only'
    elif search_json["bot_id"]:
        response_text = weave.search_with_botId(search_json["bot_id"])
        # Reset the GPTConnect conversation
        norf.refresh_conversation()
    else:
        response_text = weave.search_with_prompt(search_json["description"], search_json["chainIds"])
        print("send result")

    return jsonify({"responseText": response_text})

if __name__ == '__main__':
    app.run(debug=True)
