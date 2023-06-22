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
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 65B-8_0</a>|81.73|161|197|31.826|12.91|69.37|2023/06/14 16:35:46|
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 65B-5_1</a>|80.20|158|197|34.007|13.03|48.97|2023/06/14 15:25:37|
|<a href="https://huggingface.co/TheBloke/airoboros-33B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 33B-8_0</a>|76.14|150|197|19.536|13.22|34.56|2023/06/14 14:32:00|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-8_0</a>|75.13|148|197|94.542|183.20|69.37|2023/05/26 08:46:34|
|<a href="https://huggingface.co/TheBloke/alpaca-lora-65B-GGML" target="_blank">Alpaca-Lora 65B-5_1</a>|74.62|147|197|43.164|38.36|48.97|2023/05/20 12:57:30|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-8_0</a>|74.62|147|197|52.099|218.08|34.56|2023/06/06 21:08:15|
|<a href="https://huggingface.co/TheBloke/hippogriff-30b-chat-GGML" target="_blank">Hippogriff 30B-8_0</a>|73.60|145|197|46.529|154.47|34.56|2023/05/31 09:16:01|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-30B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 30B-8_0</a>|73.10|144|197|39.641|125.49|34.56|2023/05/30 04:33:26|
|<a href="https://huggingface.co/TheBloke/WizardLM-Uncensored-SuperCOT-StoryTelling-30B-GGML" target="_blank">WizardLM-Unc-Supercot 30B-8_0</a>|72.08|142|197|44.914|146.59|34.56|2023/06/01 11:07:15|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-6_K</a>|72.08|142|197|45.146|229.48|26.69|2023/06/06 19:03:43|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-alpaca-65B-QLoRA-GGML" target="_blank">VicUnlocked-Alpaca 65B-8_0</a>|72.08|142|197|97.488|179.54|69.37|2023/05/30 00:09:02|
|<a href="https://huggingface.co/TheBloke/llama-30b-supercot-GGML" target="_blank">Llama-Supercot 30B-8_0</a>|71.57|141|197|33.999|96.66|34.56|2023/05/28 12:22:12|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora-30B-4bit-GGML" target="_blank">GPT4-Alpaca-Lora 30B-8_0</a>|71.57|141|197|47.033|158.65|34.56|2023/05/20 04:13:39|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-Uncensored-GGML" target="_blank">WizardLM-Unc 30B-8_0</a>|71.57|141|197|48.090|165.13|34.56|2023/05/22 14:34:25|
|<a href="https://huggingface.co/TheBloke/wizardLM-13B-1.0-GGML" target="_blank">WizardLM-1.0 13B-8_0</a>|70.05|138|197|27.564|246.32|13.83|2023/05/27 16:17:01|
|<a href="https://huggingface.co/TheBloke/Alpaca-Lora-30B-GGML" target="_blank">Alpaca-Lora 30B-8_0</a>|70.05|138|197|28.744|64.73|34.56|2023/06/01 07:50:56|
|<a href="https://huggingface.co/TheBloke/samantha-33B-GGML" target="_blank">Samantha 33B-8_0</a>|70.05|138|197|49.378|195.11|34.56|2023/05/29 10:18:08|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-5_1</a>|69.54|137|197|81.559|190.66|48.97|2023/05/25 18:58:18|
|<a href="https://huggingface.co/TheBloke/airoboros-13B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 13B-8_0</a>|69.04|136|197|10.040|13.20|13.83|2023/06/16 13:03:21|
|<a href="https://huggingface.co/TheBloke/minotaur-13B-GGML" target="_blank">Minotaur 13B-8_0</a>|68.02|134|197|18.599|174.09|13.83|2023/06/08 21:45:25|
|<a href="https://huggingface.co/TheBloke/30B-Lazarus-GGML" target="_blank">Lazarus 30B-8_0</a>|68.02|134|197|43.237|145.84|34.56|2023/06/07 15:58:57|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora_mlp-65B-GGML" target="_blank">GPT4-Alpaca-Lora-mlp 65B-5_1</a>|68.02|134|197|70.288|149.01|48.97|2023/05/20 17:04:49|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-13B-GGML" target="_blank">Baize-v2 13B-8_0</a>|67.51|133|197|22.711|187.87|13.83|2023/05/24 12:00:06|
|<a href="https://huggingface.co/TheBloke/chronos-hermes-13B-GGML" target="_blank">Chronos-Hermes 13B-8_0</a>|67.01|132|197|21.365|181.62|13.83|2023/06/13 11:02:08|
|<a href="https://huggingface.co/TheBloke/WizardLM-13B-V1.0-Uncensored-GGML" target="_blank">WizardLM-Unc-1.0 13B-8_0</a>|66.50|131|197|35.402|261.75|13.83|2023/06/20 07:44:48|
|<a href="https://huggingface.co/TheBloke/wizard-mega-13B-GGML" target="_blank">Wlzard-Mega 13B-8_0</a>|65.48|129|197|20.550|175.71|13.83|2023/05/20 03:50:25|
|<a href="https://huggingface.co/TheBloke/chronos-wizardlm-uc-scot-st-13B-GGML" target="_blank">Chronos-WizardLM-Unc-Sc 13B-8_0</a>|65.48|129|197|22.673|193.04|13.83|2023/06/07 14:08:04|
|<a href="https://huggingface.co/TheBloke/tulu-30B-GGML" target="_blank">Tulu 30B-8_0</a>|64.97|128|197|19.271|20.06|34.56|2023/06/10 21:47:05|
|<a href="https://huggingface.co/TheBloke/based-30B-GGML" target="_blank">Based 30B-8_0</a>|64.97|128|197|20.071|33.04|34.56|2023/06/03 10:54:07|
|<a href="https://huggingface.co/TheBloke/13B-HyperMantis-GGML" target="_blank">Hypermantis 13B-8_0</a>|64.47|127|197|13.977|101.96|13.83|2023/06/03 00:38:54|
|<a href="https://huggingface.co/TheBloke/Nous-Hermes-13B-GGML" target="_blank">Nous-Hermes 13B-8_0</a>|64.47|127|197|15.683|105.78|13.83|2023/06/03 13:44:45|
|<a href="https://huggingface.co/TheBloke/LLaMa-30B-GGML" target="_blank">Llama 30B-8_0</a>|64.47|127|197|50.640|167.17|34.56|2023/05/20 19:50:17|
|<a href="https://huggingface.co/TheBloke/gpt4-x-vicuna-13B-GGML" target="_blank">Gpt4-X-Vicuna 13B-8_0</a>|63.45|125|197|21.013|187.60|13.83|2023/05/20 05:02:06|
|<a href="https://huggingface.co/TheBloke/vicuna-13b-v1.3-GGML" target="_blank">Vicuna-1.3 13B-8_0</a>|63.45|125|197|34.199|321.32|13.83|2023/06/18 18:11:39|
|<a href="https://huggingface.co/TheBloke/wizard-vicuna-13B-GGML" target="_blank">Wizard-Vicuna 13B-8_0</a>|62.44|123|197|14.284|98.94|13.83|2023/05/20 02:44:04|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-13B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 13B-8_0</a>|62.44|123|197|14.439|98.14|13.83|2023/05/20 02:05:09|
|<a href="https://huggingface.co/TheBloke/13B-Chimera-GGML" target="_blank">Chimera 13B-8_0</a>|62.44|123|197|15.499|123.25|13.83|2023/06/03 13:08:37|
|<a href="https://huggingface.co/TheBloke/Manticore-13B-GGML" target="_blank">Manticore 13B-8_0</a>|62.44|123|197|16.829|131.27|13.83|2023/05/20 14:17:21|
|<a href="https://huggingface.co/TheBloke/guanaco-7B-GGML" target="_blank">Guanaco 7B-8_0</a>|61.42|121|197|35.388|694.78|7.16|2023/05/25 20:18:25|
|<a href="https://huggingface.co/TheBloke/WizardLM-7B-V1.0-Uncensored-GGML" target="_blank">WizardLM-Unc-1.0 7B-8_0</a>|60.41|119|197|20.090|292.73|7.16|2023/06/18 12:59:11|
|<a href="https://huggingface.co/TheBloke/airoboros-7B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 7B-8_0</a>|58.88|116|197|6.793|17.35|7.16|2023/06/16 12:45:31|
|<a href="https://huggingface.co/TheBloke/Vigogne-Instruct-13B-GGML" target="_blank">Vigogne-Instruct 13B-8_0</a>|58.38|115|197|19.780|137.01|13.83|2023/05/25 21:58:38|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-7B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 7B-8_0</a>|54.82|108|197|7.747|82.50|7.16|2023/05/20 01:07:29|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-7B-GGML" target="_blank">Baize-v2 7B-8_0</a>|54.82|108|197|13.184|182.64|7.16|2023/05/24 11:38:45|
|<a href="https://huggingface.co/TheBloke/koala-13B-GGML" target="_blank">Koala 13B-8_0</a>|53.81|106|197|40.202|432.06|13.83|2023/05/20 05:33:31|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-30B-LoRA-GGML" target="_blank">VicUnlocked-LoRA 30B-8_0</a>|52.79|104|197|78.662|271.91|34.56|2023/05/20 22:52:56|
|<a href="https://huggingface.co/TheBloke/wizardLM-7B-GGML" target="_blank">WizardLM 7B-8_0</a>|52.28|103|197|13.544|195.34|7.16|2023/05/20 00:19:49|
|<a href="https://huggingface.co/TheBloke/koala-7B-GGML" target="_blank">Koala 7B-8_0</a>|50.25|99|197|25.590|478.70|9.76|2023/05/20 00:45:54|
|<a href="https://huggingface.co/TheBloke/GPT4All-13B-snoozy-GGML" target="_blank">GPT4All-Snoozy 13B-8_0</a>|46.70|92|197|14.239|96.91|13.83|2023/05/20 03:14:27|
