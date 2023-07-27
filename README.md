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
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 65B-8_0</a>|82.61|285|345|39.524|12.47|69.37|2023/06/14 16:35:46|
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 65B-5_1</a>|81.16|280|345|37.624|12.58|48.97|2023/06/14 15:25:37|
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 65B-8_0</a>|79.42|274|345|44.933|20.74|69.37|2023/06/29 20:25:57|
|<a href="https://huggingface.co/TheBloke/airoboros-33B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 33B-8_0</a>|76.23|263|345|23.074|17.62|34.56|2023/06/26 17:53:42|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-8_0</a>|74.49|257|345|54.908|218.31|34.56|2023/06/06 21:08:15|
|<a href="https://huggingface.co/TheBloke/airoboros-l2-13B-gpt4-1.4.1-GGML" target="_blank">Airoboros-Gpt4-l2-1.4.1 13B-8_0</a>|74.20|256|345|8.958|31.18|13.83|2023/07/24 12:29:49|
|<a href="https://huggingface.co/TheBloke/alpaca-lora-65B-GGML" target="_blank">Alpaca-Lora 65B-5_1</a>|74.20|256|345|45.401|35.57|48.97|2023/05/20 12:57:30|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-8_0</a>|73.91|255|345|101.261|184.06|69.37|2023/05/26 08:46:34|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora-30B-4bit-GGML" target="_blank">GPT4-Alpaca-Lora 30B-8_0</a>|73.04|252|345|49.119|159.29|34.56|2023/05/20 04:13:39|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-6_K</a>|72.75|251|345|46.606|224.78|26.69|2023/06/06 19:03:43|
|<a href="https://huggingface.co/TheBloke/upstage-llama-30b-instruct-2048-GGML" target="_blank">Upstage-Llama 30B-8_0</a>|72.46|250|345|24.265|44.06|34.56|2023/07/20 00:49:04|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-30B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 30B-8_0</a>|72.46|250|345|42.089|126.18|34.56|2023/05/30 04:33:26|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-Uncensored-GGML" target="_blank">WizardLM-Unc 30B-8_0</a>|72.46|250|345|49.917|165.79|34.56|2023/05/22 14:34:25|
|<a href="https://huggingface.co/TheBloke/hippogriff-30b-chat-GGML" target="_blank">Hippogriff 30B-8_0</a>|72.17|249|345|47.947|156.11|34.56|2023/05/31 09:16:01|
|<a href="https://huggingface.co/TheBloke/Platypus-30B-GGML" target="_blank">Platypus 30B-8_0</a>|71.88|248|345|25.093|21.90|34.56|2023/06/29 01:30:17|
|<a href="https://huggingface.co/TheBloke/GPlatty-30B-GGML" target="_blank">GPlatty 30B-8_0</a>|71.88|248|345|28.077|35.17|34.56|2023/06/29 00:01:01|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-alpaca-65B-QLoRA-GGML" target="_blank">VicUnlocked-Alpaca 65B-8_0</a>|71.88|248|345|100.247|171.82|69.37|2023/05/30 00:09:02|
|<a href="https://huggingface.co/TheBloke/Chronoboros-33B-GGML" target="_blank">Chronoboros 33B-8_0</a>|71.59|247|345|18.528|23.69|34.56|2023/07/10 09:16:27|
|<a href="https://huggingface.co/TheBloke/llama-30b-supercot-GGML" target="_blank">Llama-Supercot 30B-8_0</a>|71.59|247|345|36.009|92.72|34.56|2023/05/28 12:22:12|
|<a href="https://huggingface.co/TheBloke/Llama-2-70B-GGML" target="_blank">Llama-2 70B-8_0</a>|71.17|237|333|98.225|141.17|73.23|2023/07/23 20:38:41|
|<a href="https://huggingface.co/TheBloke/Alpaca-Lora-30B-GGML" target="_blank">Alpaca-Lora 30B-8_0</a>|71.01|245|345|30.934|62.71|34.56|2023/06/01 07:50:56|
|<a href="https://huggingface.co/TheBloke/samantha-33B-GGML" target="_blank">Samantha 33B-8_0</a>|71.01|245|345|51.729|194.40|34.56|2023/05/29 10:18:08|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-5_1</a>|70.72|244|345|84.624|186.23|48.97|2023/05/25 18:58:18|
|<a href="https://huggingface.co/TheBloke/SuperPlatty-30B-GGML" target="_blank">SuperPlatty 30B-8_0</a>|70.14|242|345|19.391|23.06|34.56|2023/07/03 21:07:50|
|<a href="https://huggingface.co/TheBloke/30B-Epsilon-GGML" target="_blank">Epsilon 30B-8_0</a>|70.14|242|345|46.217|168.16|34.56|2023/07/21 10:52:59|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora_mlp-65B-GGML" target="_blank">GPT4-Alpaca-Lora-mlp 65B-5_1</a>|70.14|242|345|74.459|149.45|48.97|2023/05/20 17:04:49|
|<a href="https://huggingface.co/TheBloke/13B-Ouroboros-GGML" target="_blank">Ouroboros 13B-8_0</a>|69.86|241|345|9.591|71.65|13.83|2023/07/21 12:24:28|
|<a href="https://huggingface.co/TheBloke/airoboros-13B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 13B-8_0</a>|69.57|240|345|10.080|12.57|13.83|2023/06/16 13:03:21|
|<a href="https://huggingface.co/TheBloke/airoboros-13B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 13B-8_0</a>|69.57|240|345|11.048|17.64|13.83|2023/06/22 08:32:58|
|<a href="https://huggingface.co/TheBloke/airochronos-33B-GGML" target="_blank">Airochronos 33B-8_0</a>|69.57|240|345|17.337|17.53|34.56|2023/07/10 22:07:12|
|<a href="https://huggingface.co/TheBloke/minotaur-13B-GGML" target="_blank">Minotaur 13B-8_0</a>|68.70|237|345|19.640|173.36|13.83|2023/06/08 21:45:25|
|<a href="https://huggingface.co/TheBloke/WizardLM-Uncensored-SuperCOT-StoryTelling-30B-GGML" target="_blank">WizardLM-Unc-Supercot 30B-8_0</a>|68.70|237|345|45.501|146.67|34.56|2023/06/01 11:07:15|
|<a href="https://huggingface.co/TheBloke/13B-BlueMethod-GGML" target="_blank">Bluemethod 13B-8_0</a>|68.41|236|345|11.880|91.60|13.83|2023/07/21 15:44:28|
|<a href="https://huggingface.co/TheBloke/wizardLM-13B-1.0-GGML" target="_blank">WizardLM-1.0 13B-8_0</a>|68.41|236|345|25.930|229.13|13.83|2023/05/27 16:17:01|
|<a href="https://huggingface.co/TheBloke/30B-Lazarus-GGML" target="_blank">Lazarus 30B-8_0</a>|68.41|236|345|45.027|147.13|34.56|2023/06/07 15:58:57|
|<a href="https://huggingface.co/TheBloke/vicuna-33B-GGML" target="_blank">Vicuna 33B-8_0</a>|67.54|233|345|52.381|178.72|34.56|2023/06/30 16:08:40|
|<a href="https://huggingface.co/TheBloke/WizardLM-13B-V1.0-Uncensored-GGML" target="_blank">WizardLM-Unc-1.0 13B-8_0</a>|67.25|232|345|31.817|261.60|13.83|2023/06/20 07:44:48|
|<a href="https://huggingface.co/TheBloke/Nous-Hermes-13B-GGML" target="_blank">Nous-Hermes 13B-8_0</a>|66.96|231|345|16.054|101.90|13.83|2023/06/03 13:44:45|
|<a href="https://huggingface.co/TheBloke/tulu-30B-GGML" target="_blank">Tulu 30B-8_0</a>|66.96|231|345|22.128|18.34|34.56|2023/06/10 21:47:05|
|<a href="https://huggingface.co/TheBloke/chronos-hermes-13B-GGML" target="_blank">Chronos-Hermes 13B-8_0</a>|66.67|230|345|22.189|188.42|13.83|2023/06/13 11:02:08|
|<a href="https://huggingface.co/TheBloke/WizardLM-13B-V1.1-GGML" target="_blank">WizardLM-1.1 13B-8_0</a>|66.67|230|345|34.768|441.34|13.83|2023/07/07 16:35:42|
|<a href="https://huggingface.co/TheBloke/LLaMa-30B-GGML" target="_blank">Llama 30B-8_0</a>|66.09|228|345|51.263|168.15|34.56|2023/05/20 19:50:17|
|<a href="https://huggingface.co/TheBloke/wizard-mega-13B-GGML" target="_blank">Wlzard-Mega 13B-8_0</a>|65.80|227|345|20.803|170.39|13.83|2023/05/20 03:50:25|
|<a href="https://huggingface.co/TheBloke/MythoLogic-13B-GGML" target="_blank">Mythologic 13B-8_0</a>|65.51|226|345|17.278|172.71|13.83|2023/07/17 10:44:11|
|<a href="https://huggingface.co/TheBloke/vicuna-13b-v1.3.0-GGML" target="_blank">Vicuna-1.3.0 13B-8_0</a>|65.51|226|345|34.854|315.24|13.83|2023/06/25 11:15:58|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-13B-GGML" target="_blank">Baize-v2 13B-8_0</a>|65.22|225|345|22.729|187.25|13.83|2023/05/24 12:00:06|
|<a href="https://huggingface.co/TheBloke/chronos-wizardlm-uc-scot-st-13B-GGML" target="_blank">Chronos-WizardLM-Unc-Sc 13B-8_0</a>|65.22|225|345|23.237|201.15|13.83|2023/06/07 14:08:04|
|<a href="https://huggingface.co/TheBloke/gpt4-x-vicuna-13B-GGML" target="_blank">Gpt4-X-Vicuna 13B-8_0</a>|64.93|224|345|21.853|190.42|13.83|2023/05/20 05:02:06|
|<a href="https://huggingface.co/TheBloke/13B-Chimera-GGML" target="_blank">Chimera 13B-8_0</a>|64.64|223|345|16.307|119.24|13.83|2023/06/03 13:08:37|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-13B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 13B-8_0</a>|64.35|222|345|15.230|94.31|13.83|2023/05/20 02:05:09|
|<a href="https://huggingface.co/TheBloke/Manticore-13B-GGML" target="_blank">Manticore 13B-8_0</a>|64.06|221|345|18.096|133.86|13.83|2023/05/20 14:17:21|
|<a href="https://huggingface.co/TheBloke/based-30B-GGML" target="_blank">Based 30B-8_0</a>|64.06|221|345|24.377|35.98|34.56|2023/06/03 10:54:07|
|<a href="https://huggingface.co/TheBloke/airoboros-7B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 7B-8_0</a>|63.77|220|345|6.713|20.65|7.16|2023/06/22 07:53:28|
|<a href="https://huggingface.co/TheBloke/13B-HyperMantis-GGML" target="_blank">Hypermantis 13B-8_0</a>|63.48|219|345|14.080|85.61|13.83|2023/06/03 00:38:54|
|<a href="https://huggingface.co/TheBloke/guanaco-7B-GGML" target="_blank">Guanaco 7B-8_0</a>|63.19|218|345|34.034|707.06|7.16|2023/05/25 20:18:25|
|<a href="https://huggingface.co/TheBloke/Llama-2-13B-GGML" target="_blank">Llama-2 13B-8_0</a>|62.61|216|345|15.400|115.79|13.83|2023/07/18 17:36:27|
|<a href="https://huggingface.co/TheBloke/airoboros-7B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 7B-8_0</a>|61.74|213|345|6.399|16.38|7.16|2023/06/16 12:45:31|
|<a href="https://huggingface.co/TheBloke/GodziLLa-30B-GGML" target="_blank">Godzilla 30B-8_0</a>|60.87|210|345|45.950|218.41|34.56|2023/07/09 12:43:22|
|<a href="https://huggingface.co/TheBloke/Selfee-13B-GGML" target="_blank">Selfee 13B-8_0</a>|60.29|208|345|26.543|182.97|13.83|2023/06/06 14:23:41|
|<a href="https://huggingface.co/TheBloke/AlpacaCielo-13B-GGML" target="_blank">AlpacaCielo 13B-8_0</a>|59.71|206|345|16.107|162.48|13.83|2023/07/24 20:17:42|
|<a href="https://huggingface.co/TheBloke/Vigogne-Instruct-13B-GGML" target="_blank">Vigogne-Instruct 13B-8_0</a>|59.71|206|345|18.788|123.46|13.83|2023/05/25 21:58:38|
|<a href="https://huggingface.co/TheBloke/WizardLM-7B-V1.0-Uncensored-GGML" target="_blank">WizardLM-Unc-1.0 7B-8_0</a>|58.84|203|345|18.320|293.71|7.16|2023/06/18 12:59:11|
|<a href="https://huggingface.co/TheBloke/wizard-vicuna-13B-GGML" target="_blank">Wizard-Vicuna 13B-8_0</a>|57.97|200|345|15.254|100.61|13.83|2023/05/20 02:44:04|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-7B-GGML" target="_blank">Baize-v2 7B-8_0</a>|56.52|195|345|12.825|181.70|7.16|2023/05/24 11:38:45|
|<a href="https://huggingface.co/TheBloke/Redmond-Puffin-13B-GGML" target="_blank">Redmond-Puffin 13B-8_0</a>|56.52|195|345|16.003|143.10|13.83|2023/07/19 10:59:10|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-7B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 7B-8_0</a>|56.23|194|345|8.177|81.29|7.16|2023/05/20 01:07:29|
|<a href="https://huggingface.co/TheBloke/orca_mini_v2_7B-GGML" target="_blank">Orca-mini-v2 7B-8_0</a>|55.36|191|345|7.542|124.78|7.16|2023/07/04 08:19:54|
|<a href="https://huggingface.co/TheBloke/Luna-AI-Llama2-Uncensored-GGML" target="_blank">Luna-AI-Llama2-Unc 7B-8_0</a>|54.78|189|345|8.534|136.00|7.16|2023/07/19 21:01:02|
|<a href="https://huggingface.co/TheBloke/UltraLM-13B-GGML" target="_blank">UltraLM 13B-8_0</a>|54.78|189|345|18.450|132.50|13.83|2023/06/29 21:37:25|
|<a href="https://huggingface.co/TheBloke/koala-13B-GGML" target="_blank">Koala 13B-8_0</a>|54.49|188|345|39.458|430.28|13.83|2023/05/20 05:33:31|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-30B-LoRA-GGML" target="_blank">VicUnlocked-LoRA 30B-8_0</a>|53.91|186|345|80.878|259.86|34.56|2023/05/20 22:52:56|
|<a href="https://huggingface.co/TheBloke/airoboros-l2-7b-gpt4-1.4.1-GGML" target="_blank">Airoboros-Gpt4-l2-1.4.1 7B-8_0</a>|53.04|183|345|5.170|39.00|7.16|2023/07/24 11:37:06|
|<a href="https://huggingface.co/TheBloke/Llama-2-7B-GGML" target="_blank">Llama-2 7B-8_0</a>|53.04|183|345|8.948|139.41|7.16|2023/07/18 17:16:54|
|<a href="https://huggingface.co/TheBloke/wizardLM-7B-GGML" target="_blank">WizardLM 7B-8_0</a>|52.46|181|345|13.227|192.44|7.16|2023/05/20 00:19:49|
|<a href="https://huggingface.co/TheBloke/open-llama-13b-open-instruct-GGML" target="_blank">Open-Llama-Instruct 13B-8_0</a>|51.01|176|345|18.997|122.01|13.83|2023/06/20 14:21:08|
|<a href="https://huggingface.co/TheBloke/koala-7B-GGML" target="_blank">Koala 7B-8_0</a>|51.01|176|345|23.906|457.83|9.76|2023/05/20 00:45:54|
|<a href="https://huggingface.co/TheBloke/OpenOrca-Preview1-13B-GGML" target="_blank">Open-Orca-Preview1 13B-8_0</a>|49.28|170|345|8.028|28.40|13.83|2023/07/12 21:32:00|
|<a href="https://huggingface.co/TheBloke/GPT4All-13B-snoozy-GGML" target="_blank">GPT4All-Snoozy 13B-8_0</a>|46.38|160|345|14.587|91.23|13.83|2023/05/20 03:14:27|
