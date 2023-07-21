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
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 65B-8_0</a>|82.24|264|321|37.835|12.54|69.37|2023/06/14 16:35:46|
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 65B-5_1</a>|81.00|260|321|36.993|12.66|48.97|2023/06/14 15:25:37|
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 65B-8_0</a>|79.13|254|321|43.522|20.81|69.37|2023/06/29 20:25:57|
|<a href="https://huggingface.co/TheBloke/airoboros-33B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 33B-8_0</a>|76.01|244|321|22.645|17.98|34.56|2023/06/26 17:53:42|
|<a href="https://huggingface.co/TheBloke/alpaca-lora-65B-GGML" target="_blank">Alpaca-Lora 65B-5_1</a>|73.83|237|321|45.102|35.80|48.97|2023/05/20 12:57:30|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-8_0</a>|73.83|237|321|54.094|214.77|34.56|2023/06/06 21:08:15|
|<a href="https://huggingface.co/TheBloke/hippogriff-30b-chat-GGML" target="_blank">Hippogriff 30B-8_0</a>|73.21|235|321|47.721|155.45|34.56|2023/05/31 09:16:01|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-8_0</a>|73.21|235|321|99.923|184.01|69.37|2023/05/26 08:46:34|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-30B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 30B-8_0</a>|72.59|233|321|41.633|125.35|34.56|2023/05/30 04:33:26|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora-30B-4bit-GGML" target="_blank">GPT4-Alpaca-Lora 30B-8_0</a>|72.59|233|321|48.963|159.48|34.56|2023/05/20 04:13:39|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-Uncensored-GGML" target="_blank">WizardLM-Unc 30B-8_0</a>|72.59|233|321|49.316|163.13|34.56|2023/05/22 14:34:25|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-6_K</a>|71.96|231|321|46.360|222.93|26.69|2023/06/06 19:03:43|
|<a href="https://huggingface.co/TheBloke/upstage-llama-30b-instruct-2048-GGML" target="_blank">Upstage-Llama 30B-8_0</a>|71.65|230|321|23.840|45.14|34.56|2023/07/20 00:49:04|
|<a href="https://huggingface.co/TheBloke/Platypus-30B-GGML" target="_blank">Platypus 30B-8_0</a>|71.65|230|321|24.781|22.49|34.56|2023/06/29 01:30:17|
|<a href="https://huggingface.co/TheBloke/llama-30b-supercot-GGML" target="_blank">Llama-Supercot 30B-8_0</a>|71.65|230|321|35.849|94.05|34.56|2023/05/28 12:22:12|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-alpaca-65B-QLoRA-GGML" target="_blank">VicUnlocked-Alpaca 65B-8_0</a>|71.65|230|321|99.445|171.25|69.37|2023/05/30 00:09:02|
|<a href="https://huggingface.co/TheBloke/GPlatty-30B-GGML" target="_blank">GPlatty 30B-8_0</a>|71.34|229|321|27.770|35.26|34.56|2023/06/29 00:01:01|
|<a href="https://huggingface.co/TheBloke/Chronoboros-33B-GGML" target="_blank">Chronoboros 33B-8_0</a>|71.03|228|321|17.666|23.93|34.56|2023/07/10 09:16:27|
|<a href="https://huggingface.co/TheBloke/samantha-33B-GGML" target="_blank">Samantha 33B-8_0</a>|70.72|227|321|51.413|194.54|34.56|2023/05/29 10:18:08|
|<a href="https://huggingface.co/TheBloke/Alpaca-Lora-30B-GGML" target="_blank">Alpaca-Lora 30B-8_0</a>|70.40|226|321|29.827|59.00|34.56|2023/06/01 07:50:56|
|<a href="https://huggingface.co/TheBloke/SuperPlatty-30B-GGML" target="_blank">SuperPlatty 30B-8_0</a>|70.09|225|321|18.556|22.93|34.56|2023/07/03 21:07:50|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-5_1</a>|70.09|225|321|83.786|186.04|48.97|2023/05/25 18:58:18|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora_mlp-65B-GGML" target="_blank">GPT4-Alpaca-Lora-mlp 65B-5_1</a>|69.78|224|321|74.192|150.01|48.97|2023/05/20 17:04:49|
|<a href="https://huggingface.co/TheBloke/WizardLM-Uncensored-SuperCOT-StoryTelling-30B-GGML" target="_blank">WizardLM-Unc-Supercot 30B-8_0</a>|69.47|223|321|45.296|145.91|34.56|2023/06/01 11:07:15|
|<a href="https://huggingface.co/TheBloke/airoboros-13B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 13B-8_0</a>|69.16|222|321|11.120|17.66|13.83|2023/06/22 08:32:58|
|<a href="https://huggingface.co/TheBloke/airoboros-13B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 13B-8_0</a>|68.85|221|321|10.076|12.67|13.83|2023/06/16 13:03:21|
|<a href="https://huggingface.co/TheBloke/airochronos-33B-GGML" target="_blank">Airochronos 33B-8_0</a>|68.54|220|321|16.437|17.19|34.56|2023/07/10 22:07:12|
|<a href="https://huggingface.co/TheBloke/minotaur-13B-GGML" target="_blank">Minotaur 13B-8_0</a>|68.54|220|321|19.382|169.38|13.83|2023/06/08 21:45:25|
|<a href="https://huggingface.co/TheBloke/wizardLM-13B-1.0-GGML" target="_blank">WizardLM-1.0 13B-8_0</a>|68.22|219|321|26.063|228.84|13.83|2023/05/27 16:17:01|
|<a href="https://huggingface.co/TheBloke/30B-Lazarus-GGML" target="_blank">Lazarus 30B-8_0</a>|67.91|218|321|44.466|145.63|34.56|2023/06/07 15:58:57|
|<a href="https://huggingface.co/TheBloke/WizardLM-13B-V1.0-Uncensored-GGML" target="_blank">WizardLM-Unc-1.0 13B-8_0</a>|67.29|216|321|31.983|257.69|13.83|2023/06/20 07:44:48|
|<a href="https://huggingface.co/TheBloke/vicuna-33B-GGML" target="_blank">Vicuna 33B-8_0</a>|67.29|216|321|52.335|179.06|34.56|2023/06/30 16:08:40|
|<a href="https://huggingface.co/TheBloke/chronos-hermes-13B-GGML" target="_blank">Chronos-Hermes 13B-8_0</a>|66.67|214|321|21.962|184.63|13.83|2023/06/13 11:02:08|
|<a href="https://huggingface.co/TheBloke/Nous-Hermes-13B-GGML" target="_blank">Nous-Hermes 13B-8_0</a>|66.36|213|321|16.075|101.85|13.83|2023/06/03 13:44:45|
|<a href="https://huggingface.co/TheBloke/WizardLM-13B-V1.1-GGML" target="_blank">WizardLM-1.1 13B-8_0</a>|66.36|213|321|34.423|438.82|13.83|2023/07/07 16:35:42|
|<a href="https://huggingface.co/TheBloke/tulu-30B-GGML" target="_blank">Tulu 30B-8_0</a>|66.04|212|321|21.734|18.82|34.56|2023/06/10 21:47:05|
|<a href="https://huggingface.co/TheBloke/wizard-mega-13B-GGML" target="_blank">Wlzard-Mega 13B-8_0</a>|65.73|211|321|20.835|169.83|13.83|2023/05/20 03:50:25|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-13B-GGML" target="_blank">Baize-v2 13B-8_0</a>|65.42|210|321|22.823|186.97|13.83|2023/05/24 12:00:06|
|<a href="https://huggingface.co/TheBloke/chronos-wizardlm-uc-scot-st-13B-GGML" target="_blank">Chronos-WizardLM-Unc-Sc 13B-8_0</a>|65.42|210|321|23.310|201.25|13.83|2023/06/07 14:08:04|
|<a href="https://huggingface.co/TheBloke/vicuna-13b-v1.3.0-GGML" target="_blank">Vicuna-1.3.0 13B-8_0</a>|65.42|210|321|35.108|312.33|13.83|2023/06/25 11:15:58|
|<a href="https://huggingface.co/TheBloke/LLaMa-30B-GGML" target="_blank">Llama 30B-8_0</a>|65.42|210|321|51.080|167.39|34.56|2023/05/20 19:50:17|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-13B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 13B-8_0</a>|65.11|209|321|15.200|93.83|13.83|2023/05/20 02:05:09|
|<a href="https://huggingface.co/TheBloke/MythoLogic-13B-GGML" target="_blank">Mythologic 13B-8_0</a>|65.11|209|321|16.939|171.85|13.83|2023/07/17 10:44:11|
|<a href="https://huggingface.co/TheBloke/gpt4-x-vicuna-13B-GGML" target="_blank">Gpt4-X-Vicuna 13B-8_0</a>|65.11|209|321|21.453|184.55|13.83|2023/05/20 05:02:06|
|<a href="https://huggingface.co/TheBloke/13B-Chimera-GGML" target="_blank">Chimera 13B-8_0</a>|64.17|206|321|16.188|118.41|13.83|2023/06/03 13:08:37|
|<a href="https://huggingface.co/TheBloke/based-30B-GGML" target="_blank">Based 30B-8_0</a>|64.17|206|321|23.728|35.36|34.56|2023/06/03 10:54:07|
|<a href="https://huggingface.co/TheBloke/airoboros-7B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 7B-8_0</a>|63.86|205|321|6.825|20.60|7.16|2023/06/22 07:53:28|
|<a href="https://huggingface.co/TheBloke/Llama-2-13B-GGML" target="_blank">Llama-2 13B-8_0</a>|63.55|204|321|15.235|116.77|13.83|2023/07/18 17:36:27|
|<a href="https://huggingface.co/TheBloke/guanaco-7B-GGML" target="_blank">Guanaco 7B-8_0</a>|63.55|204|321|33.838|694.62|7.16|2023/05/25 20:18:25|
|<a href="https://huggingface.co/TheBloke/13B-HyperMantis-GGML" target="_blank">Hypermantis 13B-8_0</a>|63.24|203|321|14.056|86.67|13.83|2023/06/03 00:38:54|
|<a href="https://huggingface.co/TheBloke/Manticore-13B-GGML" target="_blank">Manticore 13B-8_0</a>|63.24|203|321|18.131|133.47|13.83|2023/05/20 14:17:21|
|<a href="https://huggingface.co/TheBloke/airoboros-7B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 7B-8_0</a>|61.99|199|321|6.508|16.51|7.16|2023/06/16 12:45:31|
|<a href="https://huggingface.co/TheBloke/GodziLLa-30B-GGML" target="_blank">Godzilla 30B-8_0</a>|60.75|195|321|45.010|218.84|34.56|2023/07/09 12:43:22|
|<a href="https://huggingface.co/TheBloke/Selfee-13B-GGML" target="_blank">Selfee 13B-8_0</a>|60.44|194|321|26.909|182.98|13.83|2023/06/06 14:23:41|
|<a href="https://huggingface.co/TheBloke/Vigogne-Instruct-13B-GGML" target="_blank">Vigogne-Instruct 13B-8_0</a>|59.81|192|321|18.968|125.27|13.83|2023/05/25 21:58:38|
|<a href="https://huggingface.co/TheBloke/wizard-vicuna-13B-GGML" target="_blank">Wizard-Vicuna 13B-8_0</a>|58.88|189|321|15.125|98.45|13.83|2023/05/20 02:44:04|
|<a href="https://huggingface.co/TheBloke/WizardLM-7B-V1.0-Uncensored-GGML" target="_blank">WizardLM-Unc-1.0 7B-8_0</a>|58.88|189|321|17.942|276.62|7.16|2023/06/18 12:59:11|
|<a href="https://huggingface.co/TheBloke/Redmond-Puffin-13B-GGML" target="_blank">Redmond-Puffin 13B-8_0</a>|57.63|185|321|15.863|144.58|13.83|2023/07/19 10:59:10|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-7B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 7B-8_0</a>|56.39|181|321|8.234|80.78|7.16|2023/05/20 01:07:29|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-7B-GGML" target="_blank">Baize-v2 7B-8_0</a>|55.76|179|321|12.959|181.90|7.16|2023/05/24 11:38:45|
|<a href="https://huggingface.co/TheBloke/Luna-AI-Llama2-Uncensored-GGML" target="_blank">Luna-AI-Llama2-Unc 7B-8_0</a>|55.45|178|321|8.474|135.21|7.16|2023/07/19 21:01:02|
|<a href="https://huggingface.co/TheBloke/UltraLM-13B-GGML" target="_blank">UltraLM 13B-8_0</a>|55.14|177|321|18.597|133.61|13.83|2023/06/29 21:37:25|
|<a href="https://huggingface.co/TheBloke/orca_mini_v2_7B-GGML" target="_blank">Orca-mini-v2 7B-8_0</a>|54.83|176|321|7.487|126.40|7.16|2023/07/04 08:19:54|
|<a href="https://huggingface.co/TheBloke/koala-13B-GGML" target="_blank">Koala 13B-8_0</a>|53.89|173|321|39.229|424.24|13.83|2023/05/20 05:33:31|
|<a href="https://huggingface.co/TheBloke/wizardLM-7B-GGML" target="_blank">WizardLM 7B-8_0</a>|52.96|170|321|13.353|191.56|7.16|2023/05/20 00:19:49|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-30B-LoRA-GGML" target="_blank">VicUnlocked-LoRA 30B-8_0</a>|52.96|170|321|80.553|257.30|34.56|2023/05/20 22:52:56|
|<a href="https://huggingface.co/TheBloke/Llama-2-7B-GGML" target="_blank">Llama-2 7B-8_0</a>|52.65|169|321|8.843|139.09|7.16|2023/07/18 17:16:54|
|<a href="https://huggingface.co/TheBloke/koala-7B-GGML" target="_blank">Koala 7B-8_0</a>|51.71|166|321|24.149|457.85|9.76|2023/05/20 00:45:54|
|<a href="https://huggingface.co/TheBloke/open-llama-13b-open-instruct-GGML" target="_blank">Open-Llama-Instruct 13B-8_0</a>|50.78|163|321|19.276|123.71|13.83|2023/06/20 14:21:08|
|<a href="https://huggingface.co/TheBloke/OpenOrca-Preview1-13B-GGML" target="_blank">Open-Orca-Preview1 13B-8_0</a>|49.22|158|321|7.829|29.08|13.83|2023/07/12 21:32:00|
|<a href="https://huggingface.co/TheBloke/GPT4All-13B-snoozy-GGML" target="_blank">GPT4All-Snoozy 13B-8_0</a>|46.73|150|321|14.665|92.26|13.83|2023/05/20 03:14:27|
