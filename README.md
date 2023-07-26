# llm-jeopardy

![Double](dbljeopardy.png)

Automated prompting and scoring framework to evaluate LLMs using updated human knowledge prompts

Install and run:  
git clone https://github.com/aigoopy/llm-jeopardy.git  
npm install  
node . --help  

llm-jeopardy framework uses [llama.cpp](https://github.com/ggerganov/llama.cpp) for model execution and GGML models from [Hugging Face](https://huggingface.co). 
Updated with GGMLv3 models.

<!--- TABLESTART --->
|name|percent|modelcorrect|modeltotal|elapsed|answerlen|msize|mdate|
|----|----|----|----|----|----|----|----|
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 65B-8_0</a>|82.60|280|339|39.200|12.55|69.37|2023/06/14 16:35:46|
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 65B-5_1</a>|81.12|275|339|37.502|12.66|48.97|2023/06/14 15:25:37|
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 65B-8_0</a>|79.35|269|339|44.661|20.94|69.37|2023/06/29 20:25:57|
|<a href="https://huggingface.co/TheBloke/airoboros-33B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 33B-8_0</a>|76.11|258|339|22.969|17.77|34.56|2023/06/26 17:53:42|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-8_0</a>|74.34|252|339|54.778|217.77|34.56|2023/06/06 21:08:15|
|<a href="https://huggingface.co/TheBloke/airoboros-l2-13B-gpt4-1.4.1-GGML" target="_blank">Airoboros-Gpt4-l2-1.4.1 13B-8_0</a>|74.04|251|339|8.973|31.55|13.83|2023/07/24 12:29:49|
|<a href="https://huggingface.co/TheBloke/alpaca-lora-65B-GGML" target="_blank">Alpaca-Lora 65B-5_1</a>|74.04|251|339|45.366|35.74|48.97|2023/05/20 12:57:30|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-8_0</a>|73.45|249|339|100.810|184.26|69.37|2023/05/26 08:46:34|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora-30B-4bit-GGML" target="_blank">GPT4-Alpaca-Lora 30B-8_0</a>|73.16|248|339|49.048|159.27|34.56|2023/05/20 04:13:39|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-30B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 30B-8_0</a>|72.57|246|339|42.114|126.69|34.56|2023/05/30 04:33:26|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-6_K</a>|72.57|246|339|46.670|225.65|26.69|2023/06/06 19:03:43|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-Uncensored-GGML" target="_blank">WizardLM-Unc 30B-8_0</a>|72.57|246|339|49.894|165.66|34.56|2023/05/22 14:34:25|
|<a href="https://huggingface.co/TheBloke/upstage-llama-30b-instruct-2048-GGML" target="_blank">Upstage-Llama 30B-8_0</a>|72.27|245|339|24.166|44.40|34.56|2023/07/20 00:49:04|
|<a href="https://huggingface.co/TheBloke/Platypus-30B-GGML" target="_blank">Platypus 30B-8_0</a>|72.27|245|339|25.026|22.08|34.56|2023/06/29 01:30:17|
|<a href="https://huggingface.co/TheBloke/hippogriff-30b-chat-GGML" target="_blank">Hippogriff 30B-8_0</a>|72.27|245|339|48.017|156.74|34.56|2023/05/31 09:16:01|
|<a href="https://huggingface.co/TheBloke/GPlatty-30B-GGML" target="_blank">GPlatty 30B-8_0</a>|71.98|244|339|28.047|35.55|34.56|2023/06/29 00:01:01|
|<a href="https://huggingface.co/TheBloke/Chronoboros-33B-GGML" target="_blank">Chronoboros 33B-8_0</a>|71.68|243|339|18.342|23.88|34.56|2023/07/10 09:16:27|
|<a href="https://huggingface.co/TheBloke/llama-30b-supercot-GGML" target="_blank">Llama-Supercot 30B-8_0</a>|71.68|243|339|36.090|93.65|34.56|2023/05/28 12:22:12|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-alpaca-65B-QLoRA-GGML" target="_blank">VicUnlocked-Alpaca 65B-8_0</a>|71.68|243|339|100.452|172.77|69.37|2023/05/30 00:09:02|
|<a href="https://huggingface.co/TheBloke/Llama-2-70B-GGML" target="_blank">Llama-2 70B-8_0</a>|71.17|237|333|98.225|141.17|73.23|2023/07/23 20:38:41|
|<a href="https://huggingface.co/TheBloke/Alpaca-Lora-30B-GGML" target="_blank">Alpaca-Lora 30B-8_0</a>|70.50|239|339|30.917|63.06|34.56|2023/06/01 07:50:56|
|<a href="https://huggingface.co/TheBloke/samantha-33B-GGML" target="_blank">Samantha 33B-8_0</a>|70.50|239|339|51.629|194.45|34.56|2023/05/29 10:18:08|
|<a href="https://huggingface.co/TheBloke/SuperPlatty-30B-GGML" target="_blank">SuperPlatty 30B-8_0</a>|70.21|238|339|19.229|23.26|34.56|2023/07/03 21:07:50|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora_mlp-65B-GGML" target="_blank">GPT4-Alpaca-Lora-mlp 65B-5_1</a>|70.21|238|339|74.304|149.41|48.97|2023/05/20 17:04:49|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-5_1</a>|70.21|238|339|84.456|186.08|48.97|2023/05/25 18:58:18|
|<a href="https://huggingface.co/TheBloke/13B-Ouroboros-GGML" target="_blank">Ouroboros 13B-8_0</a>|69.91|237|339|9.597|72.33|13.83|2023/07/21 12:24:28|
|<a href="https://huggingface.co/TheBloke/30B-Epsilon-GGML" target="_blank">Epsilon 30B-8_0</a>|69.91|237|339|46.359|169.56|34.56|2023/07/21 10:52:59|
|<a href="https://huggingface.co/TheBloke/airoboros-13B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 13B-8_0</a>|69.62|236|339|11.076|17.80|13.83|2023/06/22 08:32:58|
|<a href="https://huggingface.co/TheBloke/airoboros-13B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 13B-8_0</a>|69.32|235|339|10.083|12.63|13.83|2023/06/16 13:03:21|
|<a href="https://huggingface.co/TheBloke/airochronos-33B-GGML" target="_blank">Airochronos 33B-8_0</a>|69.32|235|339|17.152|17.67|34.56|2023/07/10 22:07:12|
|<a href="https://huggingface.co/TheBloke/minotaur-13B-GGML" target="_blank">Minotaur 13B-8_0</a>|69.03|234|339|19.600|172.64|13.83|2023/06/08 21:45:25|
|<a href="https://huggingface.co/TheBloke/WizardLM-Uncensored-SuperCOT-StoryTelling-30B-GGML" target="_blank">WizardLM-Unc-Supercot 30B-8_0</a>|69.03|234|339|45.534|147.05|34.56|2023/06/01 11:07:15|
|<a href="https://huggingface.co/TheBloke/13B-BlueMethod-GGML" target="_blank">Bluemethod 13B-8_0</a>|68.73|233|339|11.872|91.47|13.83|2023/07/21 15:44:28|
|<a href="https://huggingface.co/TheBloke/wizardLM-13B-1.0-GGML" target="_blank">WizardLM-1.0 13B-8_0</a>|68.73|233|339|26.030|230.14|13.83|2023/05/27 16:17:01|
|<a href="https://huggingface.co/TheBloke/30B-Lazarus-GGML" target="_blank">Lazarus 30B-8_0</a>|68.44|232|339|44.999|147.32|34.56|2023/06/07 15:58:57|
|<a href="https://huggingface.co/TheBloke/vicuna-33B-GGML" target="_blank">Vicuna 33B-8_0</a>|67.85|230|339|52.442|179.47|34.56|2023/06/30 16:08:40|
|<a href="https://huggingface.co/TheBloke/WizardLM-13B-V1.0-Uncensored-GGML" target="_blank">WizardLM-Unc-1.0 13B-8_0</a>|67.26|228|339|31.810|259.79|13.83|2023/06/20 07:44:48|
|<a href="https://huggingface.co/TheBloke/Nous-Hermes-13B-GGML" target="_blank">Nous-Hermes 13B-8_0</a>|66.96|227|339|16.112|102.81|13.83|2023/06/03 13:44:45|
|<a href="https://huggingface.co/TheBloke/WizardLM-13B-V1.1-GGML" target="_blank">WizardLM-1.1 13B-8_0</a>|66.96|227|339|34.712|440.94|13.83|2023/07/07 16:35:42|
|<a href="https://huggingface.co/TheBloke/chronos-hermes-13B-GGML" target="_blank">Chronos-Hermes 13B-8_0</a>|66.67|226|339|22.223|188.74|13.83|2023/06/13 11:02:08|
|<a href="https://huggingface.co/TheBloke/tulu-30B-GGML" target="_blank">Tulu 30B-8_0</a>|66.37|225|339|22.028|18.47|34.56|2023/06/10 21:47:05|
|<a href="https://huggingface.co/TheBloke/wizard-mega-13B-GGML" target="_blank">Wlzard-Mega 13B-8_0</a>|65.78|223|339|20.925|171.90|13.83|2023/05/20 03:50:25|
|<a href="https://huggingface.co/TheBloke/LLaMa-30B-GGML" target="_blank">Llama 30B-8_0</a>|65.78|223|339|51.203|167.79|34.56|2023/05/20 19:50:17|
|<a href="https://huggingface.co/TheBloke/MythoLogic-13B-GGML" target="_blank">Mythologic 13B-8_0</a>|65.49|222|339|17.285|173.52|13.83|2023/07/17 10:44:11|
|<a href="https://huggingface.co/TheBloke/chronos-wizardlm-uc-scot-st-13B-GGML" target="_blank">Chronos-WizardLM-Unc-Sc 13B-8_0</a>|65.49|222|339|23.293|201.68|13.83|2023/06/07 14:08:04|
|<a href="https://huggingface.co/TheBloke/vicuna-13b-v1.3.0-GGML" target="_blank">Vicuna-1.3.0 13B-8_0</a>|65.49|222|339|34.944|315.01|13.83|2023/06/25 11:15:58|
|<a href="https://huggingface.co/TheBloke/gpt4-x-vicuna-13B-GGML" target="_blank">Gpt4-X-Vicuna 13B-8_0</a>|65.19|221|339|21.875|190.69|13.83|2023/05/20 05:02:06|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-13B-GGML" target="_blank">Baize-v2 13B-8_0</a>|65.19|221|339|22.759|187.12|13.83|2023/05/24 12:00:06|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-13B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 13B-8_0</a>|64.60|219|339|15.136|92.99|13.83|2023/05/20 02:05:09|
|<a href="https://huggingface.co/TheBloke/13B-Chimera-GGML" target="_blank">Chimera 13B-8_0</a>|64.60|219|339|16.324|119.67|13.83|2023/06/03 13:08:37|
|<a href="https://huggingface.co/TheBloke/Manticore-13B-GGML" target="_blank">Manticore 13B-8_0</a>|64.01|217|339|18.089|133.16|13.83|2023/05/20 14:17:21|
|<a href="https://huggingface.co/TheBloke/based-30B-GGML" target="_blank">Based 30B-8_0</a>|64.01|217|339|24.244|36.06|34.56|2023/06/03 10:54:07|
|<a href="https://huggingface.co/TheBloke/airoboros-7B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 7B-8_0</a>|63.72|216|339|6.740|20.56|7.16|2023/06/22 07:53:28|
|<a href="https://huggingface.co/TheBloke/13B-HyperMantis-GGML" target="_blank">Hypermantis 13B-8_0</a>|63.42|215|339|14.051|85.24|13.83|2023/06/03 00:38:54|
|<a href="https://huggingface.co/TheBloke/guanaco-7B-GGML" target="_blank">Guanaco 7B-8_0</a>|63.13|214|339|33.850|698.91|7.16|2023/05/25 20:18:25|
|<a href="https://huggingface.co/TheBloke/Llama-2-13B-GGML" target="_blank">Llama-2 13B-8_0</a>|62.54|212|339|15.332|115.58|13.83|2023/07/18 17:36:27|
|<a href="https://huggingface.co/TheBloke/airoboros-7B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 7B-8_0</a>|61.95|210|339|6.428|16.51|7.16|2023/06/16 12:45:31|
|<a href="https://huggingface.co/TheBloke/Selfee-13B-GGML" target="_blank">Selfee 13B-8_0</a>|60.77|206|339|26.648|183.27|13.83|2023/06/06 14:23:41|
|<a href="https://huggingface.co/TheBloke/GodziLLa-30B-GGML" target="_blank">Godzilla 30B-8_0</a>|60.47|205|339|45.698|218.59|34.56|2023/07/09 12:43:22|
|<a href="https://huggingface.co/TheBloke/AlpacaCielo-13B-GGML" target="_blank">AlpacaCielo 13B-8_0</a>|59.88|203|339|16.103|162.86|13.83|2023/07/24 20:17:42|
|<a href="https://huggingface.co/TheBloke/Vigogne-Instruct-13B-GGML" target="_blank">Vigogne-Instruct 13B-8_0</a>|59.88|203|339|18.762|122.99|13.83|2023/05/25 21:58:38|
|<a href="https://huggingface.co/TheBloke/WizardLM-7B-V1.0-Uncensored-GGML" target="_blank">WizardLM-Unc-1.0 7B-8_0</a>|59.00|200|339|18.503|297.12|7.16|2023/06/18 12:59:11|
|<a href="https://huggingface.co/TheBloke/wizard-vicuna-13B-GGML" target="_blank">Wizard-Vicuna 13B-8_0</a>|58.41|198|339|15.244|100.35|13.83|2023/05/20 02:44:04|
|<a href="https://huggingface.co/TheBloke/Redmond-Puffin-13B-GGML" target="_blank">Redmond-Puffin 13B-8_0</a>|56.93|193|339|15.951|143.01|13.83|2023/07/19 10:59:10|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-7B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 7B-8_0</a>|56.34|191|339|8.227|82.24|7.16|2023/05/20 01:07:29|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-7B-GGML" target="_blank">Baize-v2 7B-8_0</a>|56.34|191|339|12.861|181.86|7.16|2023/05/24 11:38:45|
|<a href="https://huggingface.co/TheBloke/orca_mini_v2_7B-GGML" target="_blank">Orca-mini-v2 7B-8_0</a>|55.46|188|339|7.560|126.02|7.16|2023/07/04 08:19:54|
|<a href="https://huggingface.co/TheBloke/Luna-AI-Llama2-Uncensored-GGML" target="_blank">Luna-AI-Llama2-Unc 7B-8_0</a>|54.87|186|339|8.521|135.84|7.16|2023/07/19 21:01:02|
|<a href="https://huggingface.co/TheBloke/UltraLM-13B-GGML" target="_blank">UltraLM 13B-8_0</a>|54.87|186|339|18.485|132.71|13.83|2023/06/29 21:37:25|
|<a href="https://huggingface.co/TheBloke/koala-13B-GGML" target="_blank">Koala 13B-8_0</a>|54.28|184|339|39.289|426.60|13.83|2023/05/20 05:33:31|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-30B-LoRA-GGML" target="_blank">VicUnlocked-LoRA 30B-8_0</a>|53.39|181|339|80.757|259.27|34.56|2023/05/20 22:52:56|
|<a href="https://huggingface.co/TheBloke/airoboros-l2-7b-gpt4-1.4.1-GGML" target="_blank">Airoboros-Gpt4-l2-1.4.1 7B-8_0</a>|53.10|180|339|5.192|39.51|7.16|2023/07/24 11:37:06|
|<a href="https://huggingface.co/TheBloke/Llama-2-7B-GGML" target="_blank">Llama-2 7B-8_0</a>|52.80|179|339|8.924|139.46|7.16|2023/07/18 17:16:54|
|<a href="https://huggingface.co/TheBloke/wizardLM-7B-GGML" target="_blank">WizardLM 7B-8_0</a>|52.21|177|339|13.261|192.24|7.16|2023/05/20 00:19:49|
|<a href="https://huggingface.co/TheBloke/koala-7B-GGML" target="_blank">Koala 7B-8_0</a>|51.03|173|339|23.938|457.37|9.76|2023/05/20 00:45:54|
|<a href="https://huggingface.co/TheBloke/open-llama-13b-open-instruct-GGML" target="_blank">Open-Llama-Instruct 13B-8_0</a>|50.74|172|339|19.073|122.61|13.83|2023/06/20 14:21:08|
|<a href="https://huggingface.co/TheBloke/OpenOrca-Preview1-13B-GGML" target="_blank">Open-Orca-Preview1 13B-8_0</a>|49.26|167|339|7.977|28.50|13.83|2023/07/12 21:32:00|
|<a href="https://huggingface.co/TheBloke/GPT4All-13B-snoozy-GGML" target="_blank">GPT4All-Snoozy 13B-8_0</a>|46.61|158|339|14.609|91.63|13.83|2023/05/20 03:14:27|
