from model import model
from data_extraction import extract

folder_path = './data_extraction/data'
extract.combine_files(folder_path)

f = open('./data_extraction/data/combined_code.txt', 'r')
code = f.read()

f.close()
f = open('./data_extraction/data/0x8badbf2ad65abc3df5b1d9cc388e419d9255ef999fb69aac6bf395646cf01c14_description.txt', 'r')
description = f.read()

f.close()

summar = model.Botweiser(description, code)
summary = summar.summarize()
print(f"{summary.content=}")

def summarize_bot(bot_id):
    folder_path = f'./data_extraction/data/bots/{bot_id}'
    extract.combine_files(folder_path)
    f = open('./data_extraction/data/{bot_id}/combined_code.txt', 'r')
    code = f.read()
    f.close()
    f = open(f'./data_extraction/data/{bot_id}.txt', 'r')
    description = f.read()

    f.close()

    summar = model.Botweiser(description, code)
    summary = summar.summarize()
    summary_path = os.path.join(folder_path, 'summary.txt')
    with open(summary_path, 'w') as combined_file:
        combined_file.write(summary)


