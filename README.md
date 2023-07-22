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
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 65B-8_0</a>|81.96|268|327|38.281|12.51|69.37|2023/06/14 16:35:46|
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 65B-5_1</a>|80.73|264|327|37.193|12.64|48.97|2023/06/14 15:25:37|
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 65B-8_0</a>|78.90|258|327|44.002|21.22|69.37|2023/06/29 20:25:57|
|<a href="https://huggingface.co/TheBloke/airoboros-33B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 33B-8_0</a>|75.84|248|327|22.781|17.91|34.56|2023/06/26 17:53:42|
|<a href="https://huggingface.co/TheBloke/alpaca-lora-65B-GGML" target="_blank">Alpaca-Lora 65B-5_1</a>|73.70|241|327|45.237|35.93|48.97|2023/05/20 12:57:30|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-8_0</a>|73.70|241|327|54.432|216.27|34.56|2023/06/06 21:08:15|
|<a href="https://huggingface.co/TheBloke/hippogriff-30b-chat-GGML" target="_blank">Hippogriff 30B-8_0</a>|73.09|239|327|47.769|155.49|34.56|2023/05/31 09:16:01|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-8_0</a>|73.09|239|327|100.647|184.54|69.37|2023/05/26 08:46:34|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-30B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 30B-8_0</a>|72.48|237|327|41.904|126.10|34.56|2023/05/30 04:33:26|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora-30B-4bit-GGML" target="_blank">GPT4-Alpaca-Lora 30B-8_0</a>|72.48|237|327|48.957|159.29|34.56|2023/05/20 04:13:39|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-Uncensored-GGML" target="_blank">WizardLM-Unc 30B-8_0</a>|72.48|237|327|49.326|162.93|34.56|2023/05/22 14:34:25|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-6_K</a>|71.87|235|327|46.818|226.29|26.69|2023/06/06 19:03:43|
|<a href="https://huggingface.co/TheBloke/upstage-llama-30b-instruct-2048-GGML" target="_blank">Upstage-Llama 30B-8_0</a>|71.56|234|327|23.967|44.80|34.56|2023/07/20 00:49:04|
|<a href="https://huggingface.co/TheBloke/Platypus-30B-GGML" target="_blank">Platypus 30B-8_0</a>|71.56|234|327|24.864|22.27|34.56|2023/06/29 01:30:17|
|<a href="https://huggingface.co/TheBloke/GPlatty-30B-GGML" target="_blank">GPlatty 30B-8_0</a>|71.56|234|327|28.045|36.32|34.56|2023/06/29 00:01:01|
|<a href="https://huggingface.co/TheBloke/llama-30b-supercot-GGML" target="_blank">Llama-Supercot 30B-8_0</a>|71.56|234|327|35.942|93.84|34.56|2023/05/28 12:22:12|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-alpaca-65B-QLoRA-GGML" target="_blank">VicUnlocked-Alpaca 65B-8_0</a>|71.56|234|327|100.009|171.69|69.37|2023/05/30 00:09:02|
|<a href="https://huggingface.co/TheBloke/Chronoboros-33B-GGML" target="_blank">Chronoboros 33B-8_0</a>|70.95|232|327|17.870|23.73|34.56|2023/07/10 09:16:27|
|<a href="https://huggingface.co/TheBloke/samantha-33B-GGML" target="_blank">Samantha 33B-8_0</a>|70.64|231|327|51.685|194.57|34.56|2023/05/29 10:18:08|
|<a href="https://huggingface.co/TheBloke/13B-Ouroboros-GGML" target="_blank">Ouroboros 13B-8_0</a>|70.34|230|327|9.576|73.37|13.83|2023/07/21 12:24:28|
|<a href="https://huggingface.co/TheBloke/Alpaca-Lora-30B-GGML" target="_blank">Alpaca-Lora 30B-8_0</a>|70.34|230|327|29.804|58.15|34.56|2023/06/01 07:50:56|
|<a href="https://huggingface.co/TheBloke/SuperPlatty-30B-GGML" target="_blank">SuperPlatty 30B-8_0</a>|70.03|229|327|18.888|23.45|34.56|2023/07/03 21:07:50|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-5_1</a>|70.03|229|327|84.008|186.02|48.97|2023/05/25 18:58:18|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora_mlp-65B-GGML" target="_blank">GPT4-Alpaca-Lora-mlp 65B-5_1</a>|69.72|228|327|74.635|150.94|48.97|2023/05/20 17:04:49|
|<a href="https://huggingface.co/TheBloke/WizardLM-Uncensored-SuperCOT-StoryTelling-30B-GGML" target="_blank">WizardLM-Unc-Supercot 30B-8_0</a>|69.42|227|327|45.344|146.15|34.56|2023/06/01 11:07:15|
|<a href="https://huggingface.co/TheBloke/airoboros-13B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 13B-8_0</a>|69.11|226|327|11.131|17.92|13.83|2023/06/22 08:32:58|
|<a href="https://huggingface.co/TheBloke/airoboros-13B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 13B-8_0</a>|68.81|225|327|10.086|12.63|13.83|2023/06/16 13:03:21|
|<a href="https://huggingface.co/TheBloke/minotaur-13B-GGML" target="_blank">Minotaur 13B-8_0</a>|68.50|224|327|19.656|173.86|13.83|2023/06/08 21:45:25|
|<a href="https://huggingface.co/TheBloke/13B-BlueMethod-GGML" target="_blank">Bluemethod 13B-8_0</a>|68.20|223|327|11.873|91.92|13.83|2023/07/21 15:44:28|
|<a href="https://huggingface.co/TheBloke/airochronos-33B-GGML" target="_blank">Airochronos 33B-8_0</a>|68.20|223|327|16.737|17.75|34.56|2023/07/10 22:07:12|
|<a href="https://huggingface.co/TheBloke/wizardLM-13B-1.0-GGML" target="_blank">WizardLM-1.0 13B-8_0</a>|68.20|223|327|26.052|228.73|13.83|2023/05/27 16:17:01|
|<a href="https://huggingface.co/TheBloke/30B-Lazarus-GGML" target="_blank">Lazarus 30B-8_0</a>|67.89|222|327|44.717|146.59|34.56|2023/06/07 15:58:57|
|<a href="https://huggingface.co/TheBloke/WizardLM-13B-V1.0-Uncensored-GGML" target="_blank">WizardLM-Unc-1.0 13B-8_0</a>|67.28|220|327|31.934|258.42|13.83|2023/06/20 07:44:48|
|<a href="https://huggingface.co/TheBloke/vicuna-33B-GGML" target="_blank">Vicuna 33B-8_0</a>|67.28|220|327|52.325|179.02|34.56|2023/06/30 16:08:40|
|<a href="https://huggingface.co/TheBloke/chronos-hermes-13B-GGML" target="_blank">Chronos-Hermes 13B-8_0</a>|66.67|218|327|22.057|185.76|13.83|2023/06/13 11:02:08|
|<a href="https://huggingface.co/TheBloke/Nous-Hermes-13B-GGML" target="_blank">Nous-Hermes 13B-8_0</a>|66.36|217|327|16.094|102.09|13.83|2023/06/03 13:44:45|
|<a href="https://huggingface.co/TheBloke/WizardLM-13B-V1.1-GGML" target="_blank">WizardLM-1.1 13B-8_0</a>|66.36|217|327|34.702|441.70|13.83|2023/07/07 16:35:42|
|<a href="https://huggingface.co/TheBloke/tulu-30B-GGML" target="_blank">Tulu 30B-8_0</a>|66.06|216|327|21.846|18.71|34.56|2023/06/10 21:47:05|
|<a href="https://huggingface.co/TheBloke/wizard-mega-13B-GGML" target="_blank">Wlzard-Mega 13B-8_0</a>|65.75|215|327|21.010|172.30|13.83|2023/05/20 03:50:25|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-13B-GGML" target="_blank">Baize-v2 13B-8_0</a>|65.44|214|327|22.817|186.81|13.83|2023/05/24 12:00:06|
|<a href="https://huggingface.co/TheBloke/chronos-wizardlm-uc-scot-st-13B-GGML" target="_blank">Chronos-WizardLM-Unc-Sc 13B-8_0</a>|65.44|214|327|23.319|201.45|13.83|2023/06/07 14:08:04|
|<a href="https://huggingface.co/TheBloke/vicuna-13b-v1.3.0-GGML" target="_blank">Vicuna-1.3.0 13B-8_0</a>|65.44|214|327|35.103|313.84|13.83|2023/06/25 11:15:58|
|<a href="https://huggingface.co/TheBloke/LLaMa-30B-GGML" target="_blank">Llama 30B-8_0</a>|65.44|214|327|51.169|167.78|34.56|2023/05/20 19:50:17|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-13B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 13B-8_0</a>|65.14|213|327|15.154|92.97|13.83|2023/05/20 02:05:09|
|<a href="https://huggingface.co/TheBloke/MythoLogic-13B-GGML" target="_blank">Mythologic 13B-8_0</a>|65.14|213|327|17.141|173.21|13.83|2023/07/17 10:44:11|
|<a href="https://huggingface.co/TheBloke/gpt4-x-vicuna-13B-GGML" target="_blank">Gpt4-X-Vicuna 13B-8_0</a>|65.14|213|327|21.768|189.25|13.83|2023/05/20 05:02:06|
|<a href="https://huggingface.co/TheBloke/13B-Chimera-GGML" target="_blank">Chimera 13B-8_0</a>|64.22|210|327|16.369|120.57|13.83|2023/06/03 13:08:37|
|<a href="https://huggingface.co/TheBloke/based-30B-GGML" target="_blank">Based 30B-8_0</a>|64.22|210|327|23.904|35.61|34.56|2023/06/03 10:54:07|
|<a href="https://huggingface.co/TheBloke/airoboros-7B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 7B-8_0</a>|63.30|207|327|6.808|20.79|7.16|2023/06/22 07:53:28|
|<a href="https://huggingface.co/TheBloke/13B-HyperMantis-GGML" target="_blank">Hypermantis 13B-8_0</a>|63.30|207|327|14.011|85.48|13.83|2023/06/03 00:38:54|
|<a href="https://huggingface.co/TheBloke/Llama-2-13B-GGML" target="_blank">Llama-2 13B-8_0</a>|63.30|207|327|15.298|116.69|13.83|2023/07/18 17:36:27|
|<a href="https://huggingface.co/TheBloke/Manticore-13B-GGML" target="_blank">Manticore 13B-8_0</a>|63.30|207|327|18.163|133.80|13.83|2023/05/20 14:17:21|
|<a href="https://huggingface.co/TheBloke/guanaco-7B-GGML" target="_blank">Guanaco 7B-8_0</a>|63.00|206|327|33.972|699.20|7.16|2023/05/25 20:18:25|
|<a href="https://huggingface.co/TheBloke/airoboros-7B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 7B-8_0</a>|61.47|201|327|6.481|16.41|7.16|2023/06/16 12:45:31|
|<a href="https://huggingface.co/TheBloke/GodziLLa-30B-GGML" target="_blank">Godzilla 30B-8_0</a>|60.86|199|327|45.309|218.85|34.56|2023/07/09 12:43:22|
|<a href="https://huggingface.co/TheBloke/Selfee-13B-GGML" target="_blank">Selfee 13B-8_0</a>|60.55|198|327|26.839|183.03|13.83|2023/06/06 14:23:41|
|<a href="https://huggingface.co/TheBloke/Vigogne-Instruct-13B-GGML" target="_blank">Vigogne-Instruct 13B-8_0</a>|59.94|196|327|18.896|124.49|13.83|2023/05/25 21:58:38|
|<a href="https://huggingface.co/TheBloke/wizard-vicuna-13B-GGML" target="_blank">Wizard-Vicuna 13B-8_0</a>|59.02|193|327|15.201|99.44|13.83|2023/05/20 02:44:04|
|<a href="https://huggingface.co/TheBloke/WizardLM-7B-V1.0-Uncensored-GGML" target="_blank">WizardLM-Unc-1.0 7B-8_0</a>|59.02|193|327|18.089|281.84|7.16|2023/06/18 12:59:11|
|<a href="https://huggingface.co/TheBloke/Redmond-Puffin-13B-GGML" target="_blank">Redmond-Puffin 13B-8_0</a>|57.49|188|327|15.951|144.74|13.83|2023/07/19 10:59:10|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-7B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 7B-8_0</a>|55.96|183|327|8.260|82.06|7.16|2023/05/20 01:07:29|
|<a href="https://huggingface.co/TheBloke/Luna-AI-Llama2-Uncensored-GGML" target="_blank">Luna-AI-Llama2-Unc 7B-8_0</a>|55.35|181|327|8.484|134.72|7.16|2023/07/19 21:01:02|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-7B-GGML" target="_blank">Baize-v2 7B-8_0</a>|55.35|181|327|12.934|181.88|7.16|2023/05/24 11:38:45|
|<a href="https://huggingface.co/TheBloke/orca_mini_v2_7B-GGML" target="_blank">Orca-mini-v2 7B-8_0</a>|55.05|180|327|7.506|125.89|7.16|2023/07/04 08:19:54|
|<a href="https://huggingface.co/TheBloke/UltraLM-13B-GGML" target="_blank">UltraLM 13B-8_0</a>|54.74|179|327|18.540|133.10|13.83|2023/06/29 21:37:25|
|<a href="https://huggingface.co/TheBloke/koala-13B-GGML" target="_blank">Koala 13B-8_0</a>|54.13|177|327|39.436|426.80|13.83|2023/05/20 05:33:31|
|<a href="https://huggingface.co/TheBloke/Llama-2-7B-GGML" target="_blank">Llama-2 7B-8_0</a>|52.91|173|327|8.874|139.11|7.16|2023/07/18 17:16:54|
|<a href="https://huggingface.co/TheBloke/wizardLM-7B-GGML" target="_blank">WizardLM 7B-8_0</a>|52.91|173|327|13.361|192.54|7.16|2023/05/20 00:19:49|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-30B-LoRA-GGML" target="_blank">VicUnlocked-LoRA 30B-8_0</a>|52.91|173|327|80.592|257.91|34.56|2023/05/20 22:52:56|
|<a href="https://huggingface.co/TheBloke/koala-7B-GGML" target="_blank">Koala 7B-8_0</a>|51.68|169|327|24.150|458.97|9.76|2023/05/20 00:45:54|
|<a href="https://huggingface.co/TheBloke/open-llama-13b-open-instruct-GGML" target="_blank">Open-Llama-Instruct 13B-8_0</a>|50.76|166|327|19.273|124.14|13.83|2023/06/20 14:21:08|
|<a href="https://huggingface.co/TheBloke/OpenOrca-Preview1-13B-GGML" target="_blank">Open-Orca-Preview1 13B-8_0</a>|49.54|162|327|7.895|29.08|13.83|2023/07/12 21:32:00|
|<a href="https://huggingface.co/TheBloke/GPT4All-13B-snoozy-GGML" target="_blank">GPT4All-Snoozy 13B-8_0</a>|47.09|154|327|14.678|92.51|13.83|2023/05/20 03:14:27|
