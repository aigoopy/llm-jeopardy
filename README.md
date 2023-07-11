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
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 65B-8_0</a>|82.42|225|273|36.321|12.68|69.37|2023/06/14 16:35:46|
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 65B-5_1</a>|81.68|223|273|36.069|12.83|48.97|2023/06/14 15:25:37|
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 65B-8_0</a>|80.59|220|273|42.843|21.90|69.37|2023/06/29 20:25:57|
|<a href="https://huggingface.co/TheBloke/airoboros-33B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 33B-8_0</a>|77.66|212|273|22.667|19.01|34.56|2023/06/26 17:53:42|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-8_0</a>|75.09|205|273|54.930|218.35|34.56|2023/06/06 21:08:15|
|<a href="https://huggingface.co/TheBloke/alpaca-lora-65B-GGML" target="_blank">Alpaca-Lora 65B-5_1</a>|74.73|204|273|44.689|35.74|48.97|2023/05/20 12:57:30|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-8_0</a>|74.73|204|273|99.583|183.93|69.37|2023/05/26 08:46:34|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora-30B-4bit-GGML" target="_blank">GPT4-Alpaca-Lora 30B-8_0</a>|73.63|201|273|49.382|159.57|34.56|2023/05/20 04:13:39|
|<a href="https://huggingface.co/TheBloke/hippogriff-30b-chat-GGML" target="_blank">Hippogriff 30B-8_0</a>|73.26|200|273|48.034|155.24|34.56|2023/05/31 09:16:01|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-30B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 30B-8_0</a>|72.89|199|273|41.538|123.88|34.56|2023/05/30 04:33:26|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-Uncensored-GGML" target="_blank">WizardLM-Unc 30B-8_0</a>|72.53|198|273|49.911|165.44|34.56|2023/05/22 14:34:25|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-alpaca-65B-QLoRA-GGML" target="_blank">VicUnlocked-Alpaca 65B-8_0</a>|72.53|198|273|99.789|174.77|69.37|2023/05/30 00:09:02|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-6_K</a>|72.16|197|273|47.736|231.31|26.69|2023/06/06 19:03:43|
|<a href="https://huggingface.co/TheBloke/Chronoboros-33B-GGML" target="_blank">Chronoboros 33B-8_0</a>|71.79|196|273|16.623|25.06|34.56|2023/07/10 09:16:27|
|<a href="https://huggingface.co/TheBloke/Platypus-30B-GGML" target="_blank">Platypus 30B-8_0</a>|71.79|196|273|25.119|24.36|34.56|2023/06/29 01:30:17|
|<a href="https://huggingface.co/TheBloke/llama-30b-supercot-GGML" target="_blank">Llama-Supercot 30B-8_0</a>|71.79|196|273|36.034|96.28|34.56|2023/05/28 12:22:12|
|<a href="https://huggingface.co/TheBloke/GPlatty-30B-GGML" target="_blank">GPlatty 30B-8_0</a>|71.06|194|273|28.331|37.36|34.56|2023/06/29 00:01:01|
|<a href="https://huggingface.co/TheBloke/samantha-33B-GGML" target="_blank">Samantha 33B-8_0</a>|71.06|194|273|51.671|194.82|34.56|2023/05/29 10:18:08|
|<a href="https://huggingface.co/TheBloke/WizardLM-Uncensored-SuperCOT-StoryTelling-30B-GGML" target="_blank">WizardLM-Unc-Supercot 30B-8_0</a>|70.70|193|273|45.858|145.50|34.56|2023/06/01 11:07:15|
|<a href="https://huggingface.co/TheBloke/SuperPlatty-30B-GGML" target="_blank">SuperPlatty 30B-8_0</a>|70.33|192|273|17.673|24.12|34.56|2023/07/03 21:07:50|
|<a href="https://huggingface.co/TheBloke/Alpaca-Lora-30B-GGML" target="_blank">Alpaca-Lora 30B-8_0</a>|69.60|190|273|29.765|59.49|34.56|2023/06/01 07:50:56|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora_mlp-65B-GGML" target="_blank">GPT4-Alpaca-Lora-mlp 65B-5_1</a>|69.60|190|273|73.451|149.66|48.97|2023/05/20 17:04:49|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-5_1</a>|69.60|190|273|84.097|188.75|48.97|2023/05/25 18:58:18|
|<a href="https://huggingface.co/TheBloke/airoboros-13B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 13B-8_0</a>|69.23|189|273|10.332|12.78|13.83|2023/06/16 13:03:21|
|<a href="https://huggingface.co/TheBloke/airoboros-13B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 13B-8_0</a>|69.23|189|273|11.456|18.22|13.83|2023/06/22 08:32:58|
|<a href="https://huggingface.co/TheBloke/minotaur-13B-GGML" target="_blank">Minotaur 13B-8_0</a>|68.86|188|273|19.518|168.63|13.83|2023/06/08 21:45:25|
|<a href="https://huggingface.co/TheBloke/wizardLM-13B-1.0-GGML" target="_blank">WizardLM-1.0 13B-8_0</a>|68.86|188|273|27.140|236.66|13.83|2023/05/27 16:17:01|
|<a href="https://huggingface.co/TheBloke/30B-Lazarus-GGML" target="_blank">Lazarus 30B-8_0</a>|68.86|188|273|44.922|145.46|34.56|2023/06/07 15:58:57|
|<a href="https://huggingface.co/TheBloke/Nous-Hermes-13B-GGML" target="_blank">Nous-Hermes 13B-8_0</a>|67.03|183|273|16.446|103.15|13.83|2023/06/03 13:44:45|
|<a href="https://huggingface.co/TheBloke/tulu-30B-GGML" target="_blank">Tulu 30B-8_0</a>|67.03|183|273|21.658|20.07|34.56|2023/06/10 21:47:05|
|<a href="https://huggingface.co/TheBloke/chronos-hermes-13B-GGML" target="_blank">Chronos-Hermes 13B-8_0</a>|67.03|183|273|22.594|187.85|13.83|2023/06/13 11:02:08|
|<a href="https://huggingface.co/TheBloke/vicuna-33B-GGML" target="_blank">Vicuna 33B-8_0</a>|67.03|183|273|53.195|178.41|34.56|2023/06/30 16:08:40|
|<a href="https://huggingface.co/TheBloke/WizardLM-13B-V1.0-Uncensored-GGML" target="_blank">WizardLM-Unc-1.0 13B-8_0</a>|66.67|182|273|33.791|263.60|13.83|2023/06/20 07:44:48|
|<a href="https://huggingface.co/TheBloke/WizardLM-13B-V1.1-GGML" target="_blank">WizardLM-1.1 13B-8_0</a>|66.67|182|273|35.198|451.46|13.83|2023/07/07 16:35:42|
|<a href="https://huggingface.co/TheBloke/LLaMa-30B-GGML" target="_blank">Llama 30B-8_0</a>|66.30|181|273|51.708|167.76|34.56|2023/05/20 19:50:17|
|<a href="https://huggingface.co/TheBloke/wizard-mega-13B-GGML" target="_blank">Wlzard-Mega 13B-8_0</a>|65.57|179|273|21.411|174.76|13.83|2023/05/20 03:50:25|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-13B-GGML" target="_blank">Baize-v2 13B-8_0</a>|65.57|179|273|23.261|187.26|13.83|2023/05/24 12:00:06|
|<a href="https://huggingface.co/TheBloke/chronos-wizardlm-uc-scot-st-13B-GGML" target="_blank">Chronos-WizardLM-Unc-Sc 13B-8_0</a>|65.57|179|273|24.045|205.04|13.83|2023/06/07 14:08:04|
|<a href="https://huggingface.co/TheBloke/gpt4-x-vicuna-13B-GGML" target="_blank">Gpt4-X-Vicuna 13B-8_0</a>|64.84|177|273|21.522|183.63|13.83|2023/05/20 05:02:06|
|<a href="https://huggingface.co/TheBloke/vicuna-13b-v1.3.0-GGML" target="_blank">Vicuna-1.3.0 13B-8_0</a>|64.47|176|273|36.845|318.07|13.83|2023/06/25 11:15:58|
|<a href="https://huggingface.co/TheBloke/13B-Chimera-GGML" target="_blank">Chimera 13B-8_0</a>|64.10|175|273|16.553|122.77|13.83|2023/06/03 13:08:37|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-13B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 13B-8_0</a>|63.74|174|273|15.537|97.72|13.83|2023/05/20 02:05:09|
|<a href="https://huggingface.co/TheBloke/based-30B-GGML" target="_blank">Based 30B-8_0</a>|63.74|174|273|23.251|34.92|34.56|2023/06/03 10:54:07|
|<a href="https://huggingface.co/TheBloke/airoboros-7B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 7B-8_0</a>|63.37|173|273|7.196|21.68|7.16|2023/06/22 07:53:28|
|<a href="https://huggingface.co/TheBloke/13B-HyperMantis-GGML" target="_blank">Hypermantis 13B-8_0</a>|63.37|173|273|14.406|91.16|13.83|2023/06/03 00:38:54|
|<a href="https://huggingface.co/TheBloke/Manticore-13B-GGML" target="_blank">Manticore 13B-8_0</a>|63.00|172|273|18.532|136.33|13.83|2023/05/20 14:17:21|
|<a href="https://huggingface.co/TheBloke/guanaco-7B-GGML" target="_blank">Guanaco 7B-8_0</a>|63.00|172|273|34.834|696.40|7.16|2023/05/25 20:18:25|
|<a href="https://huggingface.co/TheBloke/airoboros-7B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 7B-8_0</a>|60.81|166|273|6.851|17.15|7.16|2023/06/16 12:45:31|
|<a href="https://huggingface.co/TheBloke/wizard-vicuna-13B-GGML" target="_blank">Wizard-Vicuna 13B-8_0</a>|60.81|166|273|15.380|101.09|13.83|2023/05/20 02:44:04|
|<a href="https://huggingface.co/TheBloke/Selfee-13B-GGML" target="_blank">Selfee 13B-8_0</a>|60.44|165|273|28.173|183.44|13.83|2023/06/06 14:23:41|
|<a href="https://huggingface.co/TheBloke/GodziLLa-30B-GGML" target="_blank">Godzilla 30B-8_0</a>|60.07|164|273|44.275|222.52|34.56|2023/07/09 12:43:22|
|<a href="https://huggingface.co/TheBloke/Vigogne-Instruct-13B-GGML" target="_blank">Vigogne-Instruct 13B-8_0</a>|59.71|163|273|19.369|128.55|13.83|2023/05/25 21:58:38|
|<a href="https://huggingface.co/TheBloke/WizardLM-7B-V1.0-Uncensored-GGML" target="_blank">WizardLM-Unc-1.0 7B-8_0</a>|58.24|159|273|19.334|292.77|7.16|2023/06/18 12:59:11|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-7B-GGML" target="_blank">Baize-v2 7B-8_0</a>|56.78|155|273|13.344|181.58|7.16|2023/05/24 11:38:45|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-7B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 7B-8_0</a>|55.68|152|273|8.506|83.05|7.16|2023/05/20 01:07:29|
|<a href="https://huggingface.co/TheBloke/UltraLM-13B-GGML" target="_blank">UltraLM 13B-8_0</a>|55.31|151|273|19.210|136.55|13.83|2023/06/29 21:37:25|
|<a href="https://huggingface.co/TheBloke/orca_mini_v2_7B-GGML" target="_blank">Orca-mini-v2 7B-8_0</a>|54.58|149|273|7.341|127.03|7.16|2023/07/04 08:19:54|
|<a href="https://huggingface.co/TheBloke/koala-13B-GGML" target="_blank">Koala 13B-8_0</a>|53.85|147|273|39.904|428.27|13.83|2023/05/20 05:33:31|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-30B-LoRA-GGML" target="_blank">VicUnlocked-LoRA 30B-8_0</a>|52.75|144|273|81.612|270.06|34.56|2023/05/20 22:52:56|
|<a href="https://huggingface.co/TheBloke/wizardLM-7B-GGML" target="_blank">WizardLM 7B-8_0</a>|52.38|143|273|13.829|192.76|7.16|2023/05/20 00:19:49|
|<a href="https://huggingface.co/TheBloke/open-llama-13b-open-instruct-GGML" target="_blank">Open-Llama-Instruct 13B-8_0</a>|52.01|142|273|20.014|124.30|13.83|2023/06/20 14:21:08|
|<a href="https://huggingface.co/TheBloke/koala-7B-GGML" target="_blank">Koala 7B-8_0</a>|51.28|140|273|25.075|464.75|9.76|2023/05/20 00:45:54|
|<a href="https://huggingface.co/TheBloke/GPT4All-13B-snoozy-GGML" target="_blank">GPT4All-Snoozy 13B-8_0</a>|46.89|128|273|14.846|94.07|13.83|2023/05/20 03:14:27|
