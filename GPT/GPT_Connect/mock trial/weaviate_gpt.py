from weaveight.client.weaveight import WeaviateSearch
from GPTConnect import JsonGPT

def botweiser(): 
    FirstSearch = input()
    norf = JsonGPT(FirstSearch)
    weave = WeaviateSearch()
    
    search_json = norf.getJsonObjectSearch()
    while True:
        if type(search_json) == type('') or search_json == None:
            print('Please try Again!')
        else:
            results = weave.search_with_prompt(search_json["description"])
            print("send result")
        
        more_searches = input()
        search_json = norf.recieve_chat(more_searches)

botweiser()