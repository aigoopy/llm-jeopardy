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
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 65B-8_0</a>|82.34|289|351|39.960|12.81|69.37|2023/06/14 16:35:46|
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 65B-5_1</a>|80.91|284|351|37.833|12.93|48.97|2023/06/14 15:25:37|
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 65B-8_0</a>|79.49|279|351|45.426|21.44|69.37|2023/06/29 20:25:57|
|<a href="https://huggingface.co/TheBloke/airoboros-33B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 33B-8_0</a>|76.07|267|351|23.224|17.96|34.56|2023/06/26 17:53:42|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-8_0</a>|74.36|261|351|54.988|218.31|34.56|2023/06/06 21:08:15|
|<a href="https://huggingface.co/TheBloke/airoboros-l2-13B-gpt4-1.4.1-GGML" target="_blank">Airoboros-Gpt4-l2-1.4.1 13B-8_0</a>|74.07|260|351|8.992|31.74|13.83|2023/07/24 12:29:49|
|<a href="https://huggingface.co/TheBloke/alpaca-lora-65B-GGML" target="_blank">Alpaca-Lora 65B-5_1</a>|74.07|260|351|45.597|36.20|48.97|2023/05/20 12:57:30|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-8_0</a>|73.79|259|351|101.532|184.49|69.37|2023/05/26 08:46:34|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-6_K</a>|72.93|256|351|46.981|228.14|26.69|2023/06/06 19:03:43|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora-30B-4bit-GGML" target="_blank">GPT4-Alpaca-Lora 30B-8_0</a>|72.93|256|351|49.223|159.73|34.56|2023/05/20 04:13:39|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-Uncensored-GGML" target="_blank">WizardLM-Unc 30B-8_0</a>|72.65|255|351|50.011|166.78|34.56|2023/05/22 14:34:25|
|<a href="https://huggingface.co/TheBloke/upstage-llama-30b-instruct-2048-GGML" target="_blank">Upstage-Llama 30B-8_0</a>|72.36|254|351|24.567|45.32|34.56|2023/07/20 00:49:04|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-30B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 30B-8_0</a>|72.36|254|351|42.330|127.23|34.56|2023/05/30 04:33:26|
|<a href="https://huggingface.co/TheBloke/Platypus-30B-GGML" target="_blank">Platypus 30B-8_0</a>|72.08|253|351|25.196|22.10|34.56|2023/06/29 01:30:17|
|<a href="https://huggingface.co/TheBloke/GPlatty-30B-GGML" target="_blank">GPlatty 30B-8_0</a>|72.08|253|351|28.163|35.30|34.56|2023/06/29 00:01:01|
|<a href="https://huggingface.co/TheBloke/hippogriff-30b-chat-GGML" target="_blank">Hippogriff 30B-8_0</a>|72.08|253|351|47.948|156.08|34.56|2023/05/31 09:16:01|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-alpaca-65B-QLoRA-GGML" target="_blank">VicUnlocked-Alpaca 65B-8_0</a>|72.08|253|351|100.774|171.98|69.37|2023/05/30 00:09:02|
|<a href="https://huggingface.co/TheBloke/llama-30b-supercot-GGML" target="_blank">Llama-Supercot 30B-8_0</a>|71.79|252|351|36.083|92.82|34.56|2023/05/28 12:22:12|
|<a href="https://huggingface.co/TheBloke/Chronoboros-33B-GGML" target="_blank">Chronoboros 33B-8_0</a>|71.51|251|351|18.809|24.20|34.56|2023/07/10 09:16:27|
|<a href="https://huggingface.co/TheBloke/Llama-2-70B-GGML" target="_blank">Llama-2 70B-8_0</a>|71.51|251|351|98.422|141.48|73.23|2023/07/23 20:38:41|
|<a href="https://huggingface.co/TheBloke/Alpaca-Lora-30B-GGML" target="_blank">Alpaca-Lora 30B-8_0</a>|70.94|249|351|30.922|62.28|34.56|2023/06/01 07:50:56|
|<a href="https://huggingface.co/TheBloke/samantha-33B-GGML" target="_blank">Samantha 33B-8_0</a>|70.94|249|351|51.986|194.72|34.56|2023/05/29 10:18:08|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-5_1</a>|70.94|249|351|84.751|186.60|48.97|2023/05/25 18:58:18|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora_mlp-65B-GGML" target="_blank">GPT4-Alpaca-Lora-mlp 65B-5_1</a>|70.37|247|351|74.613|149.58|48.97|2023/05/20 17:04:49|
|<a href="https://huggingface.co/TheBloke/SuperPlatty-30B-GGML" target="_blank">SuperPlatty 30B-8_0</a>|70.09|246|351|19.650|23.39|34.56|2023/07/03 21:07:50|
|<a href="https://huggingface.co/TheBloke/30B-Epsilon-GGML" target="_blank">Epsilon 30B-8_0</a>|70.09|246|351|46.213|168.15|34.56|2023/07/21 10:52:59|
|<a href="https://huggingface.co/TheBloke/13B-Ouroboros-GGML" target="_blank">Ouroboros 13B-8_0</a>|69.80|245|351|9.735|74.41|13.83|2023/07/21 12:24:28|
|<a href="https://huggingface.co/TheBloke/airochronos-33B-GGML" target="_blank">Airochronos 33B-8_0</a>|69.80|245|351|17.591|17.95|34.56|2023/07/10 22:07:12|
|<a href="https://huggingface.co/TheBloke/airoboros-13B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 13B-8_0</a>|69.23|243|351|10.100|13.11|13.83|2023/06/16 13:03:21|
|<a href="https://huggingface.co/TheBloke/airoboros-13B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 13B-8_0</a>|69.23|243|351|11.091|18.99|13.83|2023/06/22 08:32:58|
|<a href="https://huggingface.co/TheBloke/minotaur-13B-GGML" target="_blank">Minotaur 13B-8_0</a>|68.95|242|351|19.708|174.18|13.83|2023/06/08 21:45:25|
|<a href="https://huggingface.co/TheBloke/wizardLM-13B-1.0-GGML" target="_blank">WizardLM-1.0 13B-8_0</a>|68.66|241|351|26.036|231.31|13.83|2023/05/27 16:17:01|
|<a href="https://huggingface.co/TheBloke/30B-Lazarus-GGML" target="_blank">Lazarus 30B-8_0</a>|68.66|241|351|45.243|148.11|34.56|2023/06/07 15:58:57|
|<a href="https://huggingface.co/TheBloke/WizardLM-Uncensored-SuperCOT-StoryTelling-30B-GGML" target="_blank">WizardLM-Unc-Supercot 30B-8_0</a>|68.38|240|351|45.711|147.34|34.56|2023/06/01 11:07:15|
|<a href="https://huggingface.co/TheBloke/13B-BlueMethod-GGML" target="_blank">Bluemethod 13B-8_0</a>|68.09|239|351|11.859|91.34|13.83|2023/07/21 15:44:28|
|<a href="https://huggingface.co/TheBloke/vicuna-33B-GGML" target="_blank">Vicuna 33B-8_0</a>|67.52|237|351|52.549|179.12|34.56|2023/06/30 16:08:40|
|<a href="https://huggingface.co/TheBloke/WizardLM-13B-V1.0-Uncensored-GGML" target="_blank">WizardLM-Unc-1.0 13B-8_0</a>|67.24|236|351|31.894|264.73|13.83|2023/06/20 07:44:48|
|<a href="https://huggingface.co/TheBloke/Nous-Hermes-13B-GGML" target="_blank">Nous-Hermes 13B-8_0</a>|66.95|235|351|16.111|103.20|13.83|2023/06/03 13:44:45|
|<a href="https://huggingface.co/TheBloke/tulu-30B-GGML" target="_blank">Tulu 30B-8_0</a>|66.95|235|351|22.258|18.63|34.56|2023/06/10 21:47:05|
|<a href="https://huggingface.co/TheBloke/WizardLM-13B-V1.1-GGML" target="_blank">WizardLM-1.1 13B-8_0</a>|66.95|235|351|34.922|443.12|13.83|2023/07/07 16:35:42|
|<a href="https://huggingface.co/TheBloke/chronos-hermes-13B-GGML" target="_blank">Chronos-Hermes 13B-8_0</a>|66.38|233|351|22.194|188.96|13.83|2023/06/13 11:02:08|
|<a href="https://huggingface.co/TheBloke/MythoLogic-13B-GGML" target="_blank">Mythologic 13B-8_0</a>|65.81|231|351|17.421|174.35|13.83|2023/07/17 10:44:11|
|<a href="https://huggingface.co/TheBloke/LLaMa-30B-GGML" target="_blank">Llama 30B-8_0</a>|65.81|231|351|51.329|168.75|34.56|2023/05/20 19:50:17|
|<a href="https://huggingface.co/TheBloke/wizard-mega-13B-GGML" target="_blank">Wlzard-Mega 13B-8_0</a>|65.53|230|351|20.878|171.81|13.83|2023/05/20 03:50:25|
|<a href="https://huggingface.co/TheBloke/vicuna-13b-v1.3.0-GGML" target="_blank">Vicuna-1.3.0 13B-8_0</a>|65.53|230|351|34.771|315.41|13.83|2023/06/25 11:15:58|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-13B-GGML" target="_blank">Baize-v2 13B-8_0</a>|65.24|229|351|22.721|187.58|13.83|2023/05/24 12:00:06|
|<a href="https://huggingface.co/TheBloke/chronos-wizardlm-uc-scot-st-13B-GGML" target="_blank">Chronos-WizardLM-Unc-Sc 13B-8_0</a>|64.96|228|351|23.287|202.72|13.83|2023/06/07 14:08:04|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-13B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 13B-8_0</a>|64.67|227|351|15.302|95.78|13.83|2023/05/20 02:05:09|
|<a href="https://huggingface.co/TheBloke/gpt4-x-vicuna-13B-GGML" target="_blank">Gpt4-X-Vicuna 13B-8_0</a>|64.67|227|351|21.928|191.94|13.83|2023/05/20 05:02:06|
|<a href="https://huggingface.co/TheBloke/13B-Chimera-GGML" target="_blank">Chimera 13B-8_0</a>|64.39|226|351|16.369|120.58|13.83|2023/06/03 13:08:37|
|<a href="https://huggingface.co/TheBloke/airoboros-7B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 7B-8_0</a>|63.82|224|351|6.702|21.31|7.16|2023/06/22 07:53:28|
|<a href="https://huggingface.co/TheBloke/Manticore-13B-GGML" target="_blank">Manticore 13B-8_0</a>|63.82|224|351|18.175|135.35|13.83|2023/05/20 14:17:21|
|<a href="https://huggingface.co/TheBloke/based-30B-GGML" target="_blank">Based 30B-8_0</a>|63.82|224|351|24.627|36.87|34.56|2023/06/03 10:54:07|
|<a href="https://huggingface.co/TheBloke/13B-HyperMantis-GGML" target="_blank">Hypermantis 13B-8_0</a>|63.25|222|351|14.118|86.06|13.83|2023/06/03 00:38:54|
|<a href="https://huggingface.co/TheBloke/guanaco-7B-GGML" target="_blank">Guanaco 7B-8_0</a>|62.96|221|351|33.876|704.66|7.16|2023/05/25 20:18:25|
|<a href="https://huggingface.co/TheBloke/Llama-2-13B-GGML" target="_blank">Llama-2 13B-8_0</a>|62.39|219|351|15.464|115.93|13.83|2023/07/18 17:36:27|
|<a href="https://huggingface.co/TheBloke/airoboros-7B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 7B-8_0</a>|61.54|216|351|6.381|16.72|7.16|2023/06/16 12:45:31|
|<a href="https://huggingface.co/TheBloke/GodziLLa-30B-GGML" target="_blank">Godzilla 30B-8_0</a>|60.68|213|351|46.180|218.54|34.56|2023/07/09 12:43:22|
|<a href="https://huggingface.co/TheBloke/Selfee-13B-GGML" target="_blank">Selfee 13B-8_0</a>|60.11|211|351|26.463|183.15|13.83|2023/06/06 14:23:41|
|<a href="https://huggingface.co/TheBloke/Vigogne-Instruct-13B-GGML" target="_blank">Vigogne-Instruct 13B-8_0</a>|59.83|210|351|19.174|128.32|13.83|2023/05/25 21:58:38|
|<a href="https://huggingface.co/TheBloke/AlpacaCielo-13B-GGML" target="_blank">AlpacaCielo 13B-8_0</a>|59.54|209|351|16.151|163.07|13.83|2023/07/24 20:17:42|
|<a href="https://huggingface.co/TheBloke/WizardLM-7B-V1.0-Uncensored-GGML" target="_blank">WizardLM-Unc-1.0 7B-8_0</a>|58.40|205|351|18.302|295.39|7.16|2023/06/18 12:59:11|
|<a href="https://huggingface.co/TheBloke/wizard-vicuna-13B-GGML" target="_blank">Wizard-Vicuna 13B-8_0</a>|58.12|204|351|15.340|101.81|13.83|2023/05/20 02:44:04|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-7B-GGML" target="_blank">Baize-v2 7B-8_0</a>|56.41|198|351|12.804|182.17|7.16|2023/05/24 11:38:45|
|<a href="https://huggingface.co/TheBloke/Redmond-Puffin-13B-GGML" target="_blank">Redmond-Puffin 13B-8_0</a>|56.41|198|351|16.218|145.97|13.83|2023/07/19 10:59:10|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-7B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 7B-8_0</a>|56.13|197|351|8.182|82.32|7.16|2023/05/20 01:07:29|
|<a href="https://huggingface.co/TheBloke/orca_mini_v2_7B-GGML" target="_blank">Orca-mini-v2 7B-8_0</a>|55.27|194|351|7.596|125.93|7.16|2023/07/04 08:19:54|
|<a href="https://huggingface.co/TheBloke/UltraLM-13B-GGML" target="_blank">UltraLM 13B-8_0</a>|54.99|193|351|18.569|134.85|13.83|2023/06/29 21:37:25|
|<a href="https://huggingface.co/TheBloke/Luna-AI-Llama2-Uncensored-GGML" target="_blank">Luna-AI-Llama2-Unc 7B-8_0</a>|54.42|191|351|8.529|136.31|7.16|2023/07/19 21:01:02|
|<a href="https://huggingface.co/TheBloke/koala-13B-GGML" target="_blank">Koala 13B-8_0</a>|54.42|191|351|39.194|427.50|13.83|2023/05/20 05:33:31|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-30B-LoRA-GGML" target="_blank">VicUnlocked-LoRA 30B-8_0</a>|54.42|191|351|80.834|261.18|34.56|2023/05/20 22:52:56|
|<a href="https://huggingface.co/TheBloke/Llama-2-7B-GGML" target="_blank">Llama-2 7B-8_0</a>|52.71|185|351|8.996|140.39|7.16|2023/07/18 17:16:54|
|<a href="https://huggingface.co/TheBloke/airoboros-l2-7b-gpt4-1.4.1-GGML" target="_blank">Airoboros-Gpt4-l2-1.4.1 7B-8_0</a>|52.42|184|351|5.236|41.32|7.16|2023/07/24 11:37:06|
|<a href="https://huggingface.co/TheBloke/wizardLM-7B-GGML" target="_blank">WizardLM 7B-8_0</a>|52.42|184|351|13.226|193.83|7.16|2023/05/20 00:19:49|
|<a href="https://huggingface.co/TheBloke/open-llama-13b-open-instruct-GGML" target="_blank">Open-Llama-Instruct 13B-8_0</a>|51.28|180|351|19.027|123.39|13.83|2023/06/20 14:21:08|
|<a href="https://huggingface.co/TheBloke/koala-7B-GGML" target="_blank">Koala 7B-8_0</a>|50.14|176|351|23.775|456.35|9.76|2023/05/20 00:45:54|
|<a href="https://huggingface.co/TheBloke/OpenOrca-Preview1-13B-GGML" target="_blank">Open-Orca-Preview1 13B-8_0</a>|49.29|173|351|8.152|29.71|13.83|2023/07/12 21:32:00|
|<a href="https://huggingface.co/TheBloke/GPT4All-13B-snoozy-GGML" target="_blank">GPT4All-Snoozy 13B-8_0</a>|46.44|163|351|14.678|92.98|13.83|2023/05/20 03:14:27|
