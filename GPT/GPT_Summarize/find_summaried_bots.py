from model import model
import os

def summarized_bots(folder_path, new_path):
    bots = os.listdir(folder_path)
    for bot in bots:
        if bot != '.DS_Store' and os.path.isfile(f'{folder_path}/{bot}/summary.txt'):
            f = open(f'{folder_path}/{bot}/summary.txt', 'r')
            summary = f.read()
            f.close()
            summary_path = os.path.join(f'{new_path}', f'{bot}.txt')
            with open(summary_path, 'w') as combined_file:
                combined_file.write(summary)
            

summarized_bots('./data_extraction/data/bots' ,'./data_extraction/summarized_bots')

# /Users/abelatnafu/Documents/capstone/Forta-BotWeiser/data_extraction/summarized_bots