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
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 65B-8_0</a>|82.35|196|238|35.713|12.78|69.37|2023/06/14 16:35:46|
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 65B-5_1</a>|81.09|193|238|35.674|12.95|48.97|2023/06/14 15:25:37|
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 65B-8_0</a>|80.25|191|238|42.413|22.15|69.37|2023/06/29 20:25:57|
|<a href="https://huggingface.co/TheBloke/airoboros-33B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 33B-8_0</a>|77.31|184|238|22.643|17.71|34.56|2023/06/26 17:53:42|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-8_0</a>|75.63|180|238|55.044|215.51|34.56|2023/06/06 21:08:15|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-8_0</a>|75.63|180|238|98.887|183.32|69.37|2023/05/26 08:46:34|
|<a href="https://huggingface.co/TheBloke/alpaca-lora-65B-GGML" target="_blank">Alpaca-Lora 65B-5_1</a>|75.21|179|238|44.839|36.24|48.97|2023/05/20 12:57:30|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-30B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 30B-8_0</a>|74.37|177|238|42.169|124.92|34.56|2023/05/30 04:33:26|
|<a href="https://huggingface.co/TheBloke/hippogriff-30b-chat-GGML" target="_blank">Hippogriff 30B-8_0</a>|73.95|176|238|48.641|154.74|34.56|2023/05/31 09:16:01|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora-30B-4bit-GGML" target="_blank">GPT4-Alpaca-Lora 30B-8_0</a>|73.11|174|238|50.098|159.37|34.56|2023/05/20 04:13:39|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-Uncensored-GGML" target="_blank">WizardLM-Unc 30B-8_0</a>|73.11|174|238|51.318|169.84|34.56|2023/05/22 14:34:25|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-6_K</a>|72.69|173|238|48.462|233.42|26.69|2023/06/06 19:03:43|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-alpaca-65B-QLoRA-GGML" target="_blank">VicUnlocked-Alpaca 65B-8_0</a>|72.69|173|238|100.797|176.16|69.37|2023/05/30 00:09:02|
|<a href="https://huggingface.co/TheBloke/WizardLM-Uncensored-SuperCOT-StoryTelling-30B-GGML" target="_blank">WizardLM-Unc-Supercot 30B-8_0</a>|72.27|172|238|46.803|146.50|34.56|2023/06/01 11:07:15|
|<a href="https://huggingface.co/TheBloke/Platypus-30B-GGML" target="_blank">Platypus 30B-8_0</a>|71.85|171|238|25.275|23.97|34.56|2023/06/29 01:30:17|
|<a href="https://huggingface.co/TheBloke/llama-30b-supercot-GGML" target="_blank">Llama-Supercot 30B-8_0</a>|71.85|171|238|36.121|94.65|34.56|2023/05/28 12:22:12|
|<a href="https://huggingface.co/TheBloke/samantha-33B-GGML" target="_blank">Samantha 33B-8_0</a>|71.43|170|238|52.253|194.54|34.56|2023/05/29 10:18:08|
|<a href="https://huggingface.co/TheBloke/airoboros-13B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 13B-8_0</a>|70.59|168|238|11.820|17.94|13.83|2023/06/22 08:32:58|
|<a href="https://huggingface.co/TheBloke/GPlatty-30B-GGML" target="_blank">GPlatty 30B-8_0</a>|70.59|168|238|28.752|36.71|34.56|2023/06/29 00:01:01|
|<a href="https://huggingface.co/TheBloke/Alpaca-Lora-30B-GGML" target="_blank">Alpaca-Lora 30B-8_0</a>|70.59|168|238|30.528|63.01|34.56|2023/06/01 07:50:56|
|<a href="https://huggingface.co/TheBloke/airoboros-13B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 13B-8_0</a>|70.17|167|238|10.633|12.98|13.83|2023/06/16 13:03:21|
|<a href="https://huggingface.co/TheBloke/wizardLM-13B-1.0-GGML" target="_blank">WizardLM-1.0 13B-8_0</a>|70.17|167|238|28.340|245.72|13.83|2023/05/27 16:17:01|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora_mlp-65B-GGML" target="_blank">GPT4-Alpaca-Lora-mlp 65B-5_1</a>|70.17|167|238|73.880|151.11|48.97|2023/05/20 17:04:49|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-5_1</a>|70.17|167|238|84.007|188.53|48.97|2023/05/25 18:58:18|
|<a href="https://huggingface.co/TheBloke/minotaur-13B-GGML" target="_blank">Minotaur 13B-8_0</a>|69.75|166|238|19.736|169.21|13.83|2023/06/08 21:45:25|
|<a href="https://huggingface.co/TheBloke/30B-Lazarus-GGML" target="_blank">Lazarus 30B-8_0</a>|68.91|164|238|45.743|146.38|34.56|2023/06/07 15:58:57|
|<a href="https://huggingface.co/TheBloke/vicuna-33B-GGML" target="_blank">Vicuna 33B-8_0</a>|68.49|163|238|54.339|178.37|34.56|2023/06/30 16:08:40|
|<a href="https://huggingface.co/TheBloke/WizardLM-13B-V1.0-Uncensored-GGML" target="_blank">WizardLM-Unc-1.0 13B-8_0</a>|67.23|160|238|35.351|267.24|13.83|2023/06/20 07:44:48|
|<a href="https://huggingface.co/TheBloke/Nous-Hermes-13B-GGML" target="_blank">Nous-Hermes 13B-8_0</a>|66.81|159|238|16.808|104.61|13.83|2023/06/03 13:44:45|
|<a href="https://huggingface.co/TheBloke/chronos-hermes-13B-GGML" target="_blank">Chronos-Hermes 13B-8_0</a>|66.81|159|238|23.046|187.08|13.83|2023/06/13 11:02:08|
|<a href="https://huggingface.co/TheBloke/tulu-30B-GGML" target="_blank">Tulu 30B-8_0</a>|66.39|158|238|21.675|20.18|34.56|2023/06/10 21:47:05|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-13B-GGML" target="_blank">Baize-v2 13B-8_0</a>|66.39|158|238|23.727|187.94|13.83|2023/05/24 12:00:06|
|<a href="https://huggingface.co/TheBloke/LLaMa-30B-GGML" target="_blank">Llama 30B-8_0</a>|66.39|158|238|52.592|168.58|34.56|2023/05/20 19:50:17|
|<a href="https://huggingface.co/TheBloke/gpt4-x-vicuna-13B-GGML" target="_blank">Gpt4-X-Vicuna 13B-8_0</a>|65.97|157|238|21.983|185.41|13.83|2023/05/20 05:02:06|
|<a href="https://huggingface.co/TheBloke/chronos-wizardlm-uc-scot-st-13B-GGML" target="_blank">Chronos-WizardLM-Unc-Sc 13B-8_0</a>|65.97|157|238|24.732|207.19|13.83|2023/06/07 14:08:04|
|<a href="https://huggingface.co/TheBloke/wizard-mega-13B-GGML" target="_blank">Wlzard-Mega 13B-8_0</a>|65.13|155|238|21.742|174.97|13.83|2023/05/20 03:50:25|
|<a href="https://huggingface.co/TheBloke/airoboros-7B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 7B-8_0</a>|64.71|154|238|7.561|21.86|7.16|2023/06/22 07:53:28|
|<a href="https://huggingface.co/TheBloke/vicuna-13b-v1.3.0-GGML" target="_blank">Vicuna-1.3.0 13B-8_0</a>|64.71|154|238|38.238|317.55|13.83|2023/06/25 11:15:58|
|<a href="https://huggingface.co/TheBloke/based-30B-GGML" target="_blank">Based 30B-8_0</a>|64.29|153|238|23.015|34.53|34.56|2023/06/03 10:54:07|
|<a href="https://huggingface.co/TheBloke/13B-Chimera-GGML" target="_blank">Chimera 13B-8_0</a>|63.87|152|238|16.815|124.39|13.83|2023/06/03 13:08:37|
|<a href="https://huggingface.co/TheBloke/13B-HyperMantis-GGML" target="_blank">Hypermantis 13B-8_0</a>|63.45|151|238|14.727|93.95|13.83|2023/06/03 00:38:54|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-13B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 13B-8_0</a>|63.45|151|238|15.860|99.50|13.83|2023/05/20 02:05:09|
|<a href="https://huggingface.co/TheBloke/Manticore-13B-GGML" target="_blank">Manticore 13B-8_0</a>|63.45|151|238|18.502|130.87|13.83|2023/05/20 14:17:21|
|<a href="https://huggingface.co/TheBloke/guanaco-7B-GGML" target="_blank">Guanaco 7B-8_0</a>|62.61|149|238|36.639|721.42|7.16|2023/05/25 20:18:25|
|<a href="https://huggingface.co/TheBloke/airoboros-7B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 7B-8_0</a>|61.34|146|238|7.148|16.68|7.16|2023/06/16 12:45:31|
|<a href="https://huggingface.co/TheBloke/wizard-vicuna-13B-GGML" target="_blank">Wizard-Vicuna 13B-8_0</a>|60.92|145|238|15.710|103.81|13.83|2023/05/20 02:44:04|
|<a href="https://huggingface.co/TheBloke/Selfee-13B-GGML" target="_blank">Selfee 13B-8_0</a>|60.92|145|238|29.471|184.17|13.83|2023/06/06 14:23:41|
|<a href="https://huggingface.co/TheBloke/Vigogne-Instruct-13B-GGML" target="_blank">Vigogne-Instruct 13B-8_0</a>|60.08|143|238|19.591|125.34|13.83|2023/05/25 21:58:38|
|<a href="https://huggingface.co/TheBloke/WizardLM-7B-V1.0-Uncensored-GGML" target="_blank">WizardLM-Unc-1.0 7B-8_0</a>|59.24|141|238|19.506|276.18|7.16|2023/06/18 12:59:11|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-7B-GGML" target="_blank">Baize-v2 7B-8_0</a>|57.56|137|238|13.767|182.39|7.16|2023/05/24 11:38:45|
|<a href="https://huggingface.co/TheBloke/UltraLM-13B-GGML" target="_blank">UltraLM 13B-8_0</a>|56.72|135|238|19.500|133.46|13.83|2023/06/29 21:37:25|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-7B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 7B-8_0</a>|55.88|133|238|8.694|81.16|7.16|2023/05/20 01:07:29|
|<a href="https://huggingface.co/TheBloke/koala-13B-GGML" target="_blank">Koala 13B-8_0</a>|54.20|129|238|40.204|423.70|13.83|2023/05/20 05:33:31|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-30B-LoRA-GGML" target="_blank">VicUnlocked-LoRA 30B-8_0</a>|54.20|129|238|82.803|270.32|34.56|2023/05/20 22:52:56|
|<a href="https://huggingface.co/TheBloke/wizardLM-7B-GGML" target="_blank">WizardLM 7B-8_0</a>|52.52|125|238|14.568|200.32|7.16|2023/05/20 00:19:49|
|<a href="https://huggingface.co/TheBloke/open-llama-13b-open-instruct-GGML" target="_blank">Open-Llama-Instruct 13B-8_0</a>|52.10|124|238|20.686|122.37|13.83|2023/06/20 14:21:08|
|<a href="https://huggingface.co/TheBloke/koala-7B-GGML" target="_blank">Koala 7B-8_0</a>|50.84|121|238|26.177|474.79|9.76|2023/05/20 00:45:54|
|<a href="https://huggingface.co/TheBloke/GPT4All-13B-snoozy-GGML" target="_blank">GPT4All-Snoozy 13B-8_0</a>|46.64|111|238|15.258|94.96|13.83|2023/05/20 03:14:27|
