from GPTConnect import JsonGPT

with open('testing/prompts.txt', 'r') as file:
    test_prompts = [line.strip() for line in file]
#iterate below steps for each item in test.txt

with open('testing/results.txt', 'w') as result_file:
    for prompt in test_prompts:
        norf = JsonGPT(prompt)
        keywords = norf.getKeywords()
        jsonObject = norf.getJsonObjectSearch()
        result_file.write(f"{prompt}\n")
        result_file.write(f"{keywords}\n")
        result_file.write(f"{jsonObject}\n")
        result_file.write("\n" + "="*50 + "\n") 