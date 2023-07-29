# llm-jeopardy

Season 39 of Jeopardy! has concluded with air date 2023-07-28.  Final LLMs vs. Double Jeopardy results are below.
* Answers were re-written as questions, using the category when necessary
* Only Double Jeopardy $2000 questions were prompted
* Time averages shown include model loading
* Only GGML format models were used  

Thank you to <a href="https://huggingface.co/TheBloke" target="_blank">TheBloke</a> for massive and timely model conversions, ggerganov and all <a href="https://github.com/ggerganov/llama.cpp">llama.cpp</a> developers and to everyone creating such fantastic models and tools for LLMs!

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
|<a href="https://huggingface.co/TheBloke/StableBeluga2-GGML" target="_blank">StableBeluga-2 70B-8_0</a>|84.87|303|357|61.894|50.13|73.23|2023/07/27 23:37:53|
|<a href="https://huggingface.co/TheBloke/airoboros-l2-70B-gpt4-1.4.1-GGML" target="_blank">Airoboros-Gpt4-l2-1.4.1 70B-8_0</a>|84.59|302|357|51.987|21.11|73.23|2023/07/28 07:52:12|
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 65B-8_0</a>|82.07|293|357|40.233|12.80|69.37|2023/06/14 16:35:46|
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 65B-5_1</a>|80.67|288|357|37.950|12.92|48.97|2023/06/14 15:25:37|
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 65B-8_0</a>|79.27|283|357|45.639|21.29|69.37|2023/06/29 20:25:57|
|<a href="https://huggingface.co/TheBloke/airoboros-33B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 33B-8_0</a>|75.35|269|357|23.282|17.86|34.56|2023/06/26 17:53:42|
|<a href="https://huggingface.co/TheBloke/airoboros-l2-13B-gpt4-1.4.1-GGML" target="_blank">Airoboros-Gpt4-l2-1.4.1 13B-8_0</a>|73.95|264|357|8.975|31.41|13.83|2023/07/24 12:29:49|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-8_0</a>|73.95|264|357|54.938|217.44|34.56|2023/06/06 21:08:15|
|<a href="https://huggingface.co/TheBloke/alpaca-lora-65B-GGML" target="_blank">Alpaca-Lora 65B-5_1</a>|73.39|262|357|45.564|35.81|48.97|2023/05/20 12:57:30|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-8_0</a>|73.39|262|357|101.707|184.43|69.37|2023/05/26 08:46:34|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-6_K</a>|72.83|260|357|47.011|227.69|26.69|2023/06/06 19:03:43|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora-30B-4bit-GGML" target="_blank">GPT4-Alpaca-Lora 30B-8_0</a>|72.55|259|357|49.301|159.72|34.56|2023/05/20 04:13:39|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-Uncensored-GGML" target="_blank">WizardLM-Unc 30B-8_0</a>|72.55|259|357|49.972|166.25|34.56|2023/05/22 14:34:25|
|<a href="https://huggingface.co/TheBloke/upstage-llama-30b-instruct-2048-GGML" target="_blank">Upstage-Llama 30B-8_0</a>|72.27|258|357|24.602|44.80|34.56|2023/07/20 00:49:04|
|<a href="https://huggingface.co/TheBloke/Platypus-30B-GGML" target="_blank">Platypus 30B-8_0</a>|72.27|258|357|25.235|21.94|34.56|2023/06/29 01:30:17|
|<a href="https://huggingface.co/TheBloke/GPlatty-30B-GGML" target="_blank">GPlatty 30B-8_0</a>|71.99|257|357|28.163|34.95|34.56|2023/06/29 00:01:01|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-30B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 30B-8_0</a>|71.71|256|357|42.428|127.17|34.56|2023/05/30 04:33:26|
|<a href="https://huggingface.co/TheBloke/hippogriff-30b-chat-GGML" target="_blank">Hippogriff 30B-8_0</a>|71.71|256|357|48.153|156.24|34.56|2023/05/31 09:16:01|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-alpaca-65B-QLoRA-GGML" target="_blank">VicUnlocked-Alpaca 65B-8_0</a>|71.71|256|357|101.302|172.31|69.37|2023/05/30 00:09:02|
|<a href="https://huggingface.co/TheBloke/Llama-2-70B-GGML" target="_blank">Llama-2 70B-8_0</a>|71.43|255|357|98.502|141.85|73.23|2023/07/23 20:38:41|
|<a href="https://huggingface.co/TheBloke/Chronoboros-33B-GGML" target="_blank">Chronoboros 33B-8_0</a>|71.15|254|357|18.975|24.04|34.56|2023/07/10 09:16:27|
|<a href="https://huggingface.co/TheBloke/llama-30b-supercot-GGML" target="_blank">Llama-Supercot 30B-8_0</a>|71.15|254|357|36.285|93.50|34.56|2023/05/28 12:22:12|
|<a href="https://huggingface.co/TheBloke/Alpaca-Lora-30B-GGML" target="_blank">Alpaca-Lora 30B-8_0</a>|70.59|252|357|31.041|62.35|34.56|2023/06/01 07:50:56|
|<a href="https://huggingface.co/TheBloke/samantha-33B-GGML" target="_blank">Samantha 33B-8_0</a>|70.59|252|357|52.000|194.18|34.56|2023/05/29 10:18:08|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora_mlp-65B-GGML" target="_blank">GPT4-Alpaca-Lora-mlp 65B-5_1</a>|70.31|251|357|74.840|149.92|48.97|2023/05/20 17:04:49|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-5_1</a>|70.31|251|357|84.868|186.22|48.97|2023/05/25 18:58:18|
|<a href="https://huggingface.co/TheBloke/SuperPlatty-30B-GGML" target="_blank">SuperPlatty 30B-8_0</a>|70.03|250|357|19.865|23.56|34.56|2023/07/03 21:07:50|
|<a href="https://huggingface.co/TheBloke/30B-Epsilon-GGML" target="_blank">Epsilon 30B-8_0</a>|70.03|250|357|46.188|167.89|34.56|2023/07/21 10:52:59|
|<a href="https://huggingface.co/TheBloke/13B-Ouroboros-GGML" target="_blank">Ouroboros 13B-8_0</a>|69.47|248|357|9.719|73.59|13.83|2023/07/21 12:24:28|
|<a href="https://huggingface.co/TheBloke/airoboros-13B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 13B-8_0</a>|69.47|248|357|11.081|18.88|13.83|2023/06/22 08:32:58|
|<a href="https://huggingface.co/TheBloke/airochronos-33B-GGML" target="_blank">Airochronos 33B-8_0</a>|69.47|248|357|17.756|17.86|34.56|2023/07/10 22:07:12|
|<a href="https://huggingface.co/TheBloke/airoboros-13B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 13B-8_0</a>|68.91|246|357|10.105|13.09|13.83|2023/06/16 13:03:21|
|<a href="https://huggingface.co/TheBloke/minotaur-13B-GGML" target="_blank">Minotaur 13B-8_0</a>|68.63|245|357|19.676|173.38|13.83|2023/06/08 21:45:25|
|<a href="https://huggingface.co/TheBloke/30B-Lazarus-GGML" target="_blank">Lazarus 30B-8_0</a>|68.63|245|357|45.327|148.20|34.56|2023/06/07 15:58:57|
|<a href="https://huggingface.co/TheBloke/WizardLM-Uncensored-SuperCOT-StoryTelling-30B-GGML" target="_blank">WizardLM-Unc-Supercot 30B-8_0</a>|68.63|245|357|45.739|147.25|34.56|2023/06/01 11:07:15|
|<a href="https://huggingface.co/TheBloke/wizardLM-13B-1.0-GGML" target="_blank">WizardLM-1.0 13B-8_0</a>|68.07|243|357|25.956|230.32|13.83|2023/05/27 16:17:01|
|<a href="https://huggingface.co/TheBloke/13B-BlueMethod-GGML" target="_blank">Bluemethod 13B-8_0</a>|67.79|242|357|11.850|90.92|13.83|2023/07/21 15:44:28|
|<a href="https://huggingface.co/TheBloke/vicuna-33B-GGML" target="_blank">Vicuna 33B-8_0</a>|67.79|242|357|52.619|179.24|34.56|2023/06/30 16:08:40|
|<a href="https://huggingface.co/TheBloke/WizardLM-13B-V1.0-Uncensored-GGML" target="_blank">WizardLM-Unc-1.0 13B-8_0</a>|66.67|238|357|31.845|264.77|13.83|2023/06/20 07:44:48|
|<a href="https://huggingface.co/TheBloke/WizardLM-13B-V1.1-GGML" target="_blank">WizardLM-1.1 13B-8_0</a>|66.67|238|357|34.965|442.92|13.83|2023/07/07 16:35:42|
|<a href="https://huggingface.co/TheBloke/Nous-Hermes-13B-GGML" target="_blank">Nous-Hermes 13B-8_0</a>|66.39|237|357|16.097|102.92|13.83|2023/06/03 13:44:45|
|<a href="https://huggingface.co/TheBloke/tulu-30B-GGML" target="_blank">Tulu 30B-8_0</a>|66.39|237|357|22.354|18.65|34.56|2023/06/10 21:47:05|
|<a href="https://huggingface.co/TheBloke/MythoLogic-13B-GGML" target="_blank">Mythologic 13B-8_0</a>|65.83|235|357|17.505|174.59|13.83|2023/07/17 10:44:11|
|<a href="https://huggingface.co/TheBloke/chronos-hermes-13B-GGML" target="_blank">Chronos-Hermes 13B-8_0</a>|65.83|235|357|22.245|189.51|13.83|2023/06/13 11:02:08|
|<a href="https://huggingface.co/TheBloke/LLaMa-30B-GGML" target="_blank">Llama 30B-8_0</a>|65.55|234|357|51.478|168.71|34.56|2023/05/20 19:50:17|
|<a href="https://huggingface.co/TheBloke/vicuna-13b-v1.3.0-GGML" target="_blank">Vicuna-1.3.0 13B-8_0</a>|65.27|233|357|34.635|314.50|13.83|2023/06/25 11:15:58|
|<a href="https://huggingface.co/TheBloke/wizard-mega-13B-GGML" target="_blank">Wlzard-Mega 13B-8_0</a>|64.99|232|357|20.941|172.95|13.83|2023/05/20 03:50:25|
|<a href="https://huggingface.co/TheBloke/13B-Chimera-GGML" target="_blank">Chimera 13B-8_0</a>|64.71|231|357|16.359|120.17|13.83|2023/06/03 13:08:37|
|<a href="https://huggingface.co/TheBloke/chronos-wizardlm-uc-scot-st-13B-GGML" target="_blank">Chronos-WizardLM-Unc-Sc 13B-8_0</a>|64.71|231|357|23.355|203.90|13.83|2023/06/07 14:08:04|
|<a href="https://huggingface.co/TheBloke/gpt4-x-vicuna-13B-GGML" target="_blank">Gpt4-X-Vicuna 13B-8_0</a>|64.43|230|357|21.964|192.33|13.83|2023/05/20 05:02:06|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-13B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 13B-8_0</a>|64.15|229|357|15.259|95.08|13.83|2023/05/20 02:05:09|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-13B-GGML" target="_blank">Baize-v2 13B-8_0</a>|64.15|229|357|22.704|187.64|13.83|2023/05/24 12:00:06|
|<a href="https://huggingface.co/TheBloke/airoboros-7B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 7B-8_0</a>|63.31|226|357|6.674|21.17|7.16|2023/06/22 07:53:28|
|<a href="https://huggingface.co/TheBloke/Manticore-13B-GGML" target="_blank">Manticore 13B-8_0</a>|63.31|226|357|18.155|134.92|13.83|2023/05/20 14:17:21|
|<a href="https://huggingface.co/TheBloke/based-30B-GGML" target="_blank">Based 30B-8_0</a>|63.31|226|357|24.734|36.87|34.56|2023/06/03 10:54:07|
|<a href="https://huggingface.co/TheBloke/13B-HyperMantis-GGML" target="_blank">Hypermantis 13B-8_0</a>|62.46|223|357|14.078|85.19|13.83|2023/06/03 00:38:54|
|<a href="https://huggingface.co/TheBloke/Llama-2-13B-GGML" target="_blank">Llama-2 13B-8_0</a>|62.18|222|357|15.439|114.92|13.83|2023/07/18 17:36:27|
|<a href="https://huggingface.co/TheBloke/guanaco-7B-GGML" target="_blank">Guanaco 7B-8_0</a>|62.18|222|357|33.903|705.24|7.16|2023/05/25 20:18:25|
|<a href="https://huggingface.co/TheBloke/airoboros-7B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 7B-8_0</a>|61.34|219|357|6.362|16.66|7.16|2023/06/16 12:45:31|
|<a href="https://huggingface.co/TheBloke/GodziLLa-30B-GGML" target="_blank">Godzilla 30B-8_0</a>|60.78|217|357|46.349|218.28|34.56|2023/07/09 12:43:22|
|<a href="https://huggingface.co/TheBloke/Selfee-13B-GGML" target="_blank">Selfee 13B-8_0</a>|59.94|214|357|26.389|183.36|13.83|2023/06/06 14:23:41|
|<a href="https://huggingface.co/TheBloke/AlpacaCielo-13B-GGML" target="_blank">AlpacaCielo 13B-8_0</a>|59.38|212|357|16.166|162.98|13.83|2023/07/24 20:17:42|
|<a href="https://huggingface.co/TheBloke/Vigogne-Instruct-13B-GGML" target="_blank">Vigogne-Instruct 13B-8_0</a>|59.10|211|357|19.068|126.99|13.83|2023/05/25 21:58:38|
|<a href="https://huggingface.co/TheBloke/wizard-vicuna-13B-GGML" target="_blank">Wizard-Vicuna 13B-8_0</a>|57.70|206|357|15.309|101.37|13.83|2023/05/20 02:44:04|
|<a href="https://huggingface.co/TheBloke/WizardLM-7B-V1.0-Uncensored-GGML" target="_blank">WizardLM-Unc-1.0 7B-8_0</a>|57.70|206|357|18.160|292.69|7.16|2023/06/18 12:59:11|
|<a href="https://huggingface.co/TheBloke/Redmond-Puffin-13B-GGML" target="_blank">Redmond-Puffin 13B-8_0</a>|56.02|200|357|16.205|145.26|13.83|2023/07/19 10:59:10|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-7B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 7B-8_0</a>|55.46|198|357|8.141|81.47|7.16|2023/05/20 01:07:29|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-7B-GGML" target="_blank">Baize-v2 7B-8_0</a>|55.46|198|357|12.777|182.04|7.16|2023/05/24 11:38:45|
|<a href="https://huggingface.co/TheBloke/UltraLM-13B-GGML" target="_blank">UltraLM 13B-8_0</a>|54.90|196|357|18.542|134.40|13.83|2023/06/29 21:37:25|
|<a href="https://huggingface.co/TheBloke/orca_mini_v2_7B-GGML" target="_blank">Orca-mini-v2 7B-8_0</a>|54.62|195|357|7.599|125.42|7.16|2023/07/04 08:19:54|
|<a href="https://huggingface.co/TheBloke/Luna-AI-Llama2-Uncensored-GGML" target="_blank">Luna-AI-Llama2-Unc 7B-8_0</a>|54.34|194|357|8.552|136.64|7.16|2023/07/19 21:01:02|
|<a href="https://huggingface.co/TheBloke/koala-13B-GGML" target="_blank">Koala 13B-8_0</a>|54.34|194|357|38.931|423.96|13.83|2023/05/20 05:33:31|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-30B-LoRA-GGML" target="_blank">VicUnlocked-LoRA 30B-8_0</a>|54.06|193|357|80.979|263.08|34.56|2023/05/20 22:52:56|
|<a href="https://huggingface.co/TheBloke/Llama-2-7B-GGML" target="_blank">Llama-2 7B-8_0</a>|52.38|187|357|9.036|140.79|7.16|2023/07/18 17:16:54|
|<a href="https://huggingface.co/TheBloke/wizardLM-7B-GGML" target="_blank">WizardLM 7B-8_0</a>|52.38|187|357|13.171|193.13|7.16|2023/05/20 00:19:49|
|<a href="https://huggingface.co/TheBloke/airoboros-l2-7b-gpt4-1.4.1-GGML" target="_blank">Airoboros-Gpt4-l2-1.4.1 7B-8_0</a>|52.10|186|357|5.218|40.92|7.16|2023/07/24 11:37:06|
|<a href="https://huggingface.co/TheBloke/open-llama-13b-open-instruct-GGML" target="_blank">Open-Llama-Instruct 13B-8_0</a>|50.98|182|357|18.954|122.75|13.83|2023/06/20 14:21:08|
|<a href="https://huggingface.co/TheBloke/koala-7B-GGML" target="_blank">Koala 7B-8_0</a>|50.14|179|357|23.667|454.51|9.76|2023/05/20 00:45:54|
|<a href="https://huggingface.co/TheBloke/OpenOrca-Preview1-13B-GGML" target="_blank">Open-Orca-Preview1 13B-8_0</a>|49.58|177|357|8.179|29.38|13.83|2023/07/12 21:32:00|
|<a href="https://huggingface.co/TheBloke/GPT4All-13B-snoozy-GGML" target="_blank">GPT4All-Snoozy 13B-8_0</a>|45.66|163|357|14.654|92.66|13.83|2023/05/20 03:14:27|
