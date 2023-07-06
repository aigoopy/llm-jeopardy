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
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 65B-8_0</a>|82.35|210|255|36.168|12.68|69.37|2023/06/14 16:35:46|
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 65B-5_1</a>|81.18|207|255|36.040|12.83|48.97|2023/06/14 15:25:37|
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 65B-8_0</a>|80.78|206|255|43.042|22.46|69.37|2023/06/29 20:25:57|
|<a href="https://huggingface.co/TheBloke/airoboros-33B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 33B-8_0</a>|76.86|196|255|22.593|17.25|34.56|2023/06/26 17:53:42|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-8_0</a>|74.90|191|255|99.263|183.48|69.37|2023/05/26 08:46:34|
|<a href="https://huggingface.co/TheBloke/alpaca-lora-65B-GGML" target="_blank">Alpaca-Lora 65B-5_1</a>|74.51|190|255|44.905|35.84|48.97|2023/05/20 12:57:30|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-8_0</a>|74.51|190|255|54.900|214.59|34.56|2023/06/06 21:08:15|
|<a href="https://huggingface.co/TheBloke/hippogriff-30b-chat-GGML" target="_blank">Hippogriff 30B-8_0</a>|73.33|187|255|48.641|156.24|34.56|2023/05/31 09:16:01|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-30B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 30B-8_0</a>|72.94|186|255|41.902|124.15|34.56|2023/05/30 04:33:26|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora-30B-4bit-GGML" target="_blank">GPT4-Alpaca-Lora 30B-8_0</a>|72.94|186|255|49.836|159.45|34.56|2023/05/20 04:13:39|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-Uncensored-GGML" target="_blank">WizardLM-Unc 30B-8_0</a>|72.16|184|255|50.463|165.98|34.56|2023/05/22 14:34:25|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-6_K</a>|71.76|183|255|48.096|230.71|26.69|2023/06/06 19:03:43|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-alpaca-65B-QLoRA-GGML" target="_blank">VicUnlocked-Alpaca 65B-8_0</a>|71.76|183|255|100.460|175.24|69.37|2023/05/30 00:09:02|
|<a href="https://huggingface.co/TheBloke/Platypus-30B-GGML" target="_blank">Platypus 30B-8_0</a>|71.37|182|255|25.372|24.45|34.56|2023/06/29 01:30:17|
|<a href="https://huggingface.co/TheBloke/llama-30b-supercot-GGML" target="_blank">Llama-Supercot 30B-8_0</a>|71.37|182|255|36.229|95.91|34.56|2023/05/28 12:22:12|
|<a href="https://huggingface.co/TheBloke/WizardLM-Uncensored-SuperCOT-StoryTelling-30B-GGML" target="_blank">WizardLM-Unc-Supercot 30B-8_0</a>|70.59|180|255|46.444|145.54|34.56|2023/06/01 11:07:15|
|<a href="https://huggingface.co/TheBloke/GPlatty-30B-GGML" target="_blank">GPlatty 30B-8_0</a>|70.20|179|255|28.704|37.42|34.56|2023/06/29 00:01:01|
|<a href="https://huggingface.co/TheBloke/samantha-33B-GGML" target="_blank">Samantha 33B-8_0</a>|70.20|179|255|52.087|194.14|34.56|2023/05/29 10:18:08|
|<a href="https://huggingface.co/TheBloke/Alpaca-Lora-30B-GGML" target="_blank">Alpaca-Lora 30B-8_0</a>|69.80|178|255|30.117|60.50|34.56|2023/06/01 07:50:56|
|<a href="https://huggingface.co/TheBloke/airoboros-13B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 13B-8_0</a>|69.41|177|255|10.521|12.92|13.83|2023/06/16 13:03:21|
|<a href="https://huggingface.co/TheBloke/airoboros-13B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 13B-8_0</a>|69.41|177|255|11.697|18.57|13.83|2023/06/22 08:32:58|
|<a href="https://huggingface.co/TheBloke/SuperPlatty-30B-GGML" target="_blank">SuperPlatty 30B-8_0</a>|69.41|177|255|17.294|23.47|34.56|2023/07/03 21:07:50|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora_mlp-65B-GGML" target="_blank">GPT4-Alpaca-Lora-mlp 65B-5_1</a>|69.41|177|255|73.257|149.35|48.97|2023/05/20 17:04:49|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-5_1</a>|69.41|177|255|84.164|188.44|48.97|2023/05/25 18:58:18|
|<a href="https://huggingface.co/TheBloke/minotaur-13B-GGML" target="_blank">Minotaur 13B-8_0</a>|68.24|174|255|19.629|168.22|13.83|2023/06/08 21:45:25|
|<a href="https://huggingface.co/TheBloke/wizardLM-13B-1.0-GGML" target="_blank">WizardLM-1.0 13B-8_0</a>|68.24|174|255|27.738|240.07|13.83|2023/05/27 16:17:01|
|<a href="https://huggingface.co/TheBloke/30B-Lazarus-GGML" target="_blank">Lazarus 30B-8_0</a>|67.84|173|255|45.470|145.92|34.56|2023/06/07 15:58:57|
|<a href="https://huggingface.co/TheBloke/vicuna-33B-GGML" target="_blank">Vicuna 33B-8_0</a>|67.84|173|255|53.904|178.22|34.56|2023/06/30 16:08:40|
|<a href="https://huggingface.co/TheBloke/Nous-Hermes-13B-GGML" target="_blank">Nous-Hermes 13B-8_0</a>|67.45|172|255|16.666|103.48|13.83|2023/06/03 13:44:45|
|<a href="https://huggingface.co/TheBloke/tulu-30B-GGML" target="_blank">Tulu 30B-8_0</a>|66.67|170|255|21.648|19.54|34.56|2023/06/10 21:47:05|
|<a href="https://huggingface.co/TheBloke/WizardLM-13B-V1.0-Uncensored-GGML" target="_blank">WizardLM-Unc-1.0 13B-8_0</a>|66.27|169|255|34.583|264.25|13.83|2023/06/20 07:44:48|
|<a href="https://huggingface.co/TheBloke/chronos-hermes-13B-GGML" target="_blank">Chronos-Hermes 13B-8_0</a>|65.88|168|255|22.650|183.48|13.83|2023/06/13 11:02:08|
|<a href="https://huggingface.co/TheBloke/LLaMa-30B-GGML" target="_blank">Llama 30B-8_0</a>|65.88|168|255|52.311|167.84|34.56|2023/05/20 19:50:17|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-13B-GGML" target="_blank">Baize-v2 13B-8_0</a>|65.49|167|255|23.534|187.27|13.83|2023/05/24 12:00:06|
|<a href="https://huggingface.co/TheBloke/chronos-wizardlm-uc-scot-st-13B-GGML" target="_blank">Chronos-WizardLM-Unc-Sc 13B-8_0</a>|65.10|166|255|24.257|202.83|13.83|2023/06/07 14:08:04|
|<a href="https://huggingface.co/TheBloke/wizard-mega-13B-GGML" target="_blank">Wlzard-Mega 13B-8_0</a>|64.31|164|255|21.551|173.47|13.83|2023/05/20 03:50:25|
|<a href="https://huggingface.co/TheBloke/vicuna-13b-v1.3.0-GGML" target="_blank">Vicuna-1.3.0 13B-8_0</a>|63.92|163|255|37.265|311.14|13.83|2023/06/25 11:15:58|
|<a href="https://huggingface.co/TheBloke/airoboros-7B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 7B-8_0</a>|63.53|162|255|7.395|21.91|7.16|2023/06/22 07:53:28|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-13B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 13B-8_0</a>|63.53|162|255|15.719|98.44|13.83|2023/05/20 02:05:09|
|<a href="https://huggingface.co/TheBloke/gpt4-x-vicuna-13B-GGML" target="_blank">Gpt4-X-Vicuna 13B-8_0</a>|63.53|162|255|21.687|183.21|13.83|2023/05/20 05:02:06|
|<a href="https://huggingface.co/TheBloke/13B-Chimera-GGML" target="_blank">Chimera 13B-8_0</a>|63.14|161|255|16.679|122.25|13.83|2023/06/03 13:08:37|
|<a href="https://huggingface.co/TheBloke/based-30B-GGML" target="_blank">Based 30B-8_0</a>|63.14|161|255|23.147|34.25|34.56|2023/06/03 10:54:07|
|<a href="https://huggingface.co/TheBloke/13B-HyperMantis-GGML" target="_blank">Hypermantis 13B-8_0</a>|62.75|160|255|14.471|90.44|13.83|2023/06/03 00:38:54|
|<a href="https://huggingface.co/TheBloke/Manticore-13B-GGML" target="_blank">Manticore 13B-8_0</a>|61.96|158|255|18.579|133.60|13.83|2023/05/20 14:17:21|
|<a href="https://huggingface.co/TheBloke/guanaco-7B-GGML" target="_blank">Guanaco 7B-8_0</a>|61.96|158|255|35.779|708.04|7.16|2023/05/25 20:18:25|
|<a href="https://huggingface.co/TheBloke/airoboros-7B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 7B-8_0</a>|61.18|156|255|7.020|17.00|7.16|2023/06/16 12:45:31|
|<a href="https://huggingface.co/TheBloke/wizard-vicuna-13B-GGML" target="_blank">Wizard-Vicuna 13B-8_0</a>|60.39|154|255|15.564|101.93|13.83|2023/05/20 02:44:04|
|<a href="https://huggingface.co/TheBloke/Selfee-13B-GGML" target="_blank">Selfee 13B-8_0</a>|60.39|154|255|28.833|182.95|13.83|2023/06/06 14:23:41|
|<a href="https://huggingface.co/TheBloke/Vigogne-Instruct-13B-GGML" target="_blank">Vigogne-Instruct 13B-8_0</a>|60.00|153|255|19.259|123.16|13.83|2023/05/25 21:58:38|
|<a href="https://huggingface.co/TheBloke/WizardLM-7B-V1.0-Uncensored-GGML" target="_blank">WizardLM-Unc-1.0 7B-8_0</a>|58.43|149|255|19.287|279.47|7.16|2023/06/18 12:59:11|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-7B-GGML" target="_blank">Baize-v2 7B-8_0</a>|56.08|143|255|13.549|181.36|7.16|2023/05/24 11:38:45|
|<a href="https://huggingface.co/TheBloke/UltraLM-13B-GGML" target="_blank">UltraLM 13B-8_0</a>|56.08|143|255|19.399|135.05|13.83|2023/06/29 21:37:25|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-7B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 7B-8_0</a>|54.90|140|255|8.541|79.42|7.16|2023/05/20 01:07:29|
|<a href="https://huggingface.co/TheBloke/koala-13B-GGML" target="_blank">Koala 13B-8_0</a>|53.33|136|255|39.651|418.02|13.83|2023/05/20 05:33:31|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-30B-LoRA-GGML" target="_blank">VicUnlocked-LoRA 30B-8_0</a>|52.94|135|255|82.302|268.16|34.56|2023/05/20 22:52:56|
|<a href="https://huggingface.co/TheBloke/wizardLM-7B-GGML" target="_blank">WizardLM 7B-8_0</a>|51.76|132|255|14.192|195.84|7.16|2023/05/20 00:19:49|
|<a href="https://huggingface.co/TheBloke/open-llama-13b-open-instruct-GGML" target="_blank">Open-Llama-Instruct 13B-8_0</a>|51.37|131|255|20.301|121.95|13.83|2023/06/20 14:21:08|
|<a href="https://huggingface.co/TheBloke/koala-7B-GGML" target="_blank">Koala 7B-8_0</a>|50.59|129|255|25.438|462.95|9.76|2023/05/20 00:45:54|
|<a href="https://huggingface.co/TheBloke/GPT4All-13B-snoozy-GGML" target="_blank">GPT4All-Snoozy 13B-8_0</a>|45.88|117|255|15.009|94.04|13.83|2023/05/20 03:14:27|
