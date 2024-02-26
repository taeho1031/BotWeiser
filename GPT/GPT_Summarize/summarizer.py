from model import model
import os

def summarize_bot(folder_path):
    bots = os.listdir(folder_path)
    for bot in bots:
        if bot != '.DS_Store' and not os.path.isfile(f'{folder_path}/{bot}/summary.txt'):
            f = open(f'{folder_path}/{bot}/combined_files.txt', 'r')
            code = f.read()
            f.close()
            f = open(f'{folder_path}/{bot}/description.txt', 'r')
            description = f.read()
            f.close()
            summarizer = model.Botweiser(description, code)
            summary = summarizer.summarize()
            summary_path = os.path.join(f'{folder_path}/{bot}', 'summary.txt')
            with open(summary_path, 'w') as combined_file:
                combined_file.write(summary.content)
            print(f'{bot=}')
    
folder_path = './data_extraction/data/bots'
summarize_bot(folder_path)
