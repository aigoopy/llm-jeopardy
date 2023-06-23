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
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 65B-8_0</a>|82.27|167|203|32.463|12.90|69.37|2023/06/14 16:35:46|
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 65B-5_1</a>|80.79|164|203|34.270|13.01|48.97|2023/06/14 15:25:37|
|<a href="https://huggingface.co/TheBloke/airoboros-33B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 33B-8_0</a>|76.35|155|203|19.822|13.20|34.56|2023/06/14 14:32:00|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-8_0</a>|75.86|154|203|95.116|183.25|69.37|2023/05/26 08:46:34|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-8_0</a>|75.37|153|203|51.643|213.50|34.56|2023/06/06 21:08:15|
|<a href="https://huggingface.co/TheBloke/alpaca-lora-65B-GGML" target="_blank">Alpaca-Lora 65B-5_1</a>|74.38|151|203|43.360|37.72|48.97|2023/05/20 12:57:30|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-30B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 30B-8_0</a>|73.89|150|203|39.546|124.12|34.56|2023/05/30 04:33:26|
|<a href="https://huggingface.co/TheBloke/hippogriff-30b-chat-GGML" target="_blank">Hippogriff 30B-8_0</a>|73.89|150|203|46.746|155.14|34.56|2023/05/31 09:16:01|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-6_K</a>|72.91|148|203|44.813|225.17|26.69|2023/06/06 19:03:43|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-alpaca-65B-QLoRA-GGML" target="_blank">VicUnlocked-Alpaca 65B-8_0</a>|72.91|148|203|97.412|178.00|69.37|2023/05/30 00:09:02|
|<a href="https://huggingface.co/TheBloke/WizardLM-Uncensored-SuperCOT-StoryTelling-30B-GGML" target="_blank">WizardLM-Unc-Supercot 30B-8_0</a>|72.41|147|203|44.873|145.70|34.56|2023/06/01 11:07:15|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora-30B-4bit-GGML" target="_blank">GPT4-Alpaca-Lora 30B-8_0</a>|72.41|147|203|47.275|158.97|34.56|2023/05/20 04:13:39|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-Uncensored-GGML" target="_blank">WizardLM-Unc 30B-8_0</a>|71.92|146|203|47.859|163.29|34.56|2023/05/22 14:34:25|
|<a href="https://huggingface.co/TheBloke/llama-30b-supercot-GGML" target="_blank">Llama-Supercot 30B-8_0</a>|71.43|145|203|34.512|96.62|34.56|2023/05/28 12:22:12|
|<a href="https://huggingface.co/TheBloke/wizardLM-13B-1.0-GGML" target="_blank">WizardLM-1.0 13B-8_0</a>|70.44|143|203|27.613|243.75|13.83|2023/05/27 16:17:01|
|<a href="https://huggingface.co/TheBloke/Alpaca-Lora-30B-GGML" target="_blank">Alpaca-Lora 30B-8_0</a>|70.44|143|203|28.839|63.73|34.56|2023/06/01 07:50:56|
|<a href="https://huggingface.co/TheBloke/samantha-33B-GGML" target="_blank">Samantha 33B-8_0</a>|70.44|143|203|49.691|194.20|34.56|2023/05/29 10:18:08|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-5_1</a>|69.95|142|203|81.826|190.75|48.97|2023/05/25 18:58:18|
|<a href="https://huggingface.co/TheBloke/airoboros-13B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 13B-8_0</a>|69.46|141|203|10.127|13.14|13.83|2023/06/16 13:03:21|
|<a href="https://huggingface.co/TheBloke/minotaur-13B-GGML" target="_blank">Minotaur 13B-8_0</a>|68.47|139|203|18.782|174.62|13.83|2023/06/08 21:45:25|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora_mlp-65B-GGML" target="_blank">GPT4-Alpaca-Lora-mlp 65B-5_1</a>|68.47|139|203|70.604|148.62|48.97|2023/05/20 17:04:49|
|<a href="https://huggingface.co/TheBloke/30B-Lazarus-GGML" target="_blank">Lazarus 30B-8_0</a>|67.98|138|203|43.539|145.98|34.56|2023/06/07 15:58:57|
|<a href="https://huggingface.co/TheBloke/airoboros-13B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 13B-8_0</a>|67.49|137|203|11.546|18.70|13.83|2023/06/22 08:32:58|
|<a href="https://huggingface.co/TheBloke/chronos-hermes-13B-GGML" target="_blank">Chronos-Hermes 13B-8_0</a>|67.49|137|203|21.496|182.86|13.83|2023/06/13 11:02:08|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-13B-GGML" target="_blank">Baize-v2 13B-8_0</a>|67.49|137|203|22.788|188.16|13.83|2023/05/24 12:00:06|
|<a href="https://huggingface.co/TheBloke/WizardLM-13B-V1.0-Uncensored-GGML" target="_blank">WizardLM-Unc-1.0 13B-8_0</a>|66.50|135|203|35.263|261.37|13.83|2023/06/20 07:44:48|
|<a href="https://huggingface.co/TheBloke/chronos-wizardlm-uc-scot-st-13B-GGML" target="_blank">Chronos-WizardLM-Unc-Sc 13B-8_0</a>|66.01|134|203|22.943|194.92|13.83|2023/06/07 14:08:04|
|<a href="https://huggingface.co/TheBloke/based-30B-GGML" target="_blank">Based 30B-8_0</a>|65.52|133|203|20.479|33.00|34.56|2023/06/03 10:54:07|
|<a href="https://huggingface.co/TheBloke/Nous-Hermes-13B-GGML" target="_blank">Nous-Hermes 13B-8_0</a>|65.02|132|203|15.728|104.59|13.83|2023/06/03 13:44:45|
|<a href="https://huggingface.co/TheBloke/tulu-30B-GGML" target="_blank">Tulu 30B-8_0</a>|65.02|132|203|19.573|19.85|34.56|2023/06/10 21:47:05|
|<a href="https://huggingface.co/TheBloke/wizard-mega-13B-GGML" target="_blank">Wlzard-Mega 13B-8_0</a>|65.02|132|203|20.618|174.95|13.83|2023/05/20 03:50:25|
|<a href="https://huggingface.co/TheBloke/LLaMa-30B-GGML" target="_blank">Llama 30B-8_0</a>|65.02|132|203|50.891|167.87|34.56|2023/05/20 19:50:17|
|<a href="https://huggingface.co/TheBloke/13B-HyperMantis-GGML" target="_blank">Hypermantis 13B-8_0</a>|64.53|131|203|13.990|99.62|13.83|2023/06/03 00:38:54|
|<a href="https://huggingface.co/TheBloke/gpt4-x-vicuna-13B-GGML" target="_blank">Gpt4-X-Vicuna 13B-8_0</a>|64.04|130|203|21.056|186.28|13.83|2023/05/20 05:02:06|
|<a href="https://huggingface.co/TheBloke/vicuna-13b-v1.3-GGML" target="_blank">Vicuna-1.3 13B-8_0</a>|64.04|130|203|34.084|316.23|13.83|2023/06/18 18:11:39|
|<a href="https://huggingface.co/TheBloke/Manticore-13B-GGML" target="_blank">Manticore 13B-8_0</a>|63.05|128|203|17.055|129.93|13.83|2023/05/20 14:17:21|
|<a href="https://huggingface.co/TheBloke/airoboros-7B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 7B-8_0</a>|62.56|127|203|7.379|23.53|7.16|2023/06/22 07:53:28|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-13B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 13B-8_0</a>|62.56|127|203|14.495|96.70|13.83|2023/05/20 02:05:09|
|<a href="https://huggingface.co/TheBloke/13B-Chimera-GGML" target="_blank">Chimera 13B-8_0</a>|62.07|126|203|15.558|122.21|13.83|2023/06/03 13:08:37|
|<a href="https://huggingface.co/TheBloke/wizard-vicuna-13B-GGML" target="_blank">Wizard-Vicuna 13B-8_0</a>|61.58|125|203|14.322|96.87|13.83|2023/05/20 02:44:04|
|<a href="https://huggingface.co/TheBloke/guanaco-7B-GGML" target="_blank">Guanaco 7B-8_0</a>|61.08|124|203|35.116|691.06|7.16|2023/05/25 20:18:25|
|<a href="https://huggingface.co/TheBloke/WizardLM-7B-V1.0-Uncensored-GGML" target="_blank">WizardLM-Unc-1.0 7B-8_0</a>|60.59|123|203|19.859|287.27|7.16|2023/06/18 12:59:11|
|<a href="https://huggingface.co/TheBloke/airoboros-7B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 7B-8_0</a>|59.11|120|203|6.864|17.21|7.16|2023/06/16 12:45:31|
|<a href="https://huggingface.co/TheBloke/Vigogne-Instruct-13B-GGML" target="_blank">Vigogne-Instruct 13B-8_0</a>|59.11|120|203|19.699|134.42|13.83|2023/05/25 21:58:38|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-7B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 7B-8_0</a>|55.17|112|203|7.898|82.83|7.16|2023/05/20 01:07:29|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-7B-GGML" target="_blank">Baize-v2 7B-8_0</a>|55.17|112|203|13.252|182.66|7.16|2023/05/24 11:38:45|
|<a href="https://huggingface.co/TheBloke/koala-13B-GGML" target="_blank">Koala 13B-8_0</a>|53.69|109|203|40.123|430.71|13.83|2023/05/20 05:33:31|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-30B-LoRA-GGML" target="_blank">VicUnlocked-LoRA 30B-8_0</a>|52.71|107|203|79.795|268.68|34.56|2023/05/20 22:52:56|
|<a href="https://huggingface.co/TheBloke/wizardLM-7B-GGML" target="_blank">WizardLM 7B-8_0</a>|52.22|106|203|13.593|193.71|7.16|2023/05/20 00:19:49|
|<a href="https://huggingface.co/TheBloke/koala-7B-GGML" target="_blank">Koala 7B-8_0</a>|50.25|102|203|25.717|475.41|9.76|2023/05/20 00:45:54|
|<a href="https://huggingface.co/TheBloke/GPT4All-13B-snoozy-GGML" target="_blank">GPT4All-Snoozy 13B-8_0</a>|46.31|94|203|14.302|95.57|13.83|2023/05/20 03:14:27|
