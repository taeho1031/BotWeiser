from client import get_weaviate_client
import weaviate

client = get_weaviate_client()

'''
# Basic Semantic Search
response = (
    client.query
    .get("FortaBot", ["bot_id", "developer_id", "name", "description", "summary", "version", "timestamp", "chainIds"])
    .with_near_text({"concepts": ["Scam Detector"]})
    .with_limit(5)
    .do()
)
'''

'''
# Semantic Search with filter
response = (
    client.query
    .get("FortaBot", ["bot_id", "developer_id", "name", "description", "summary", "version", "timestamp", "chainIds"])
    .with_near_text({"concepts": ["biology"]})
    .with_where({
        "path": ["summary"],
        "operator": "Equal",
        "valueText": "scam detector"
    })
    .with_limit(2)
    .do()
)
'''
'''
response = (
    client.query
    .get("FortaBot", ["name","timestamp", "chainIds"])
    .with_near_text({"concepts": ["recently updated"]})
    .with_generate(single_prompt="Give me the bot with most recent {timestamp}")
    .with_limit(2)
    .do()
)

print(response)'''

response = (
    client.query
    .get("FortaBot", ["name","timestamp", "chainIds"])
    #.with_near_text({"concepts": ["recently updated"]})
    .with_generate(single_prompt="Give me the bot with {chainIds} of 1}")
    #.with_limit(2)
    .do()
)

print(response)
