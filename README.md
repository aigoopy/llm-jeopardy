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
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4 65B-8_0</a>|81.50|141|173|29.004|13.01|69.37|2023/06/14 16:35:46|
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4 65B-5_1</a>|79.77|138|173|33.119|13.14|48.97|2023/06/14 15:25:37|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-8_0</a>|76.30|132|173|48.693|213.11|34.56|2023/06/06 21:08:15|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-30B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Uncensored 30B-8_0</a>|75.72|131|173|37.847|123.57|34.56|2023/05/30 04:33:26|
|<a href="https://huggingface.co/TheBloke/alpaca-lora-65B-GGML" target="_blank">Alpaca-Lora 65B-5_1</a>|75.72|131|173|41.574|37.09|48.97|2023/05/20 12:57:30|
|<a href="https://huggingface.co/TheBloke/hippogriff-30b-chat-GGML" target="_blank">Hippogriff 30B-8_0</a>|75.72|131|173|45.563|155.40|34.56|2023/05/31 09:16:01|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-8_0</a>|75.72|131|173|92.620|183.17|69.37|2023/05/26 08:46:34|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-alpaca-65B-QLoRA-GGML" target="_blank">VicUnlocked-Alpaca 65B-8_0</a>|73.99|128|173|95.283|181.16|69.37|2023/05/30 00:09:02|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-6_K</a>|73.41|127|173|43.168|229.68|26.69|2023/06/06 19:03:43|
|<a href="https://huggingface.co/TheBloke/samantha-33B-GGML" target="_blank">Samantha 33B-8_0</a>|73.41|127|173|47.329|195.61|34.56|2023/05/29 10:18:08|
|<a href="https://huggingface.co/TheBloke/airoboros-13b-gpt4-GGML" target="_blank">Airoboros-Gpt4 13B-8_0</a>|72.83|126|173|6.905|13.37|13.83|2023/06/04 12:21:47|
|<a href="https://huggingface.co/TheBloke/llama-30b-supercot-GGML" target="_blank">Llama-Supercot 30B-8_0</a>|72.83|126|173|31.748|93.80|34.56|2023/05/28 12:22:12|
|<a href="https://huggingface.co/TheBloke/WizardLM-Uncensored-SuperCOT-StoryTelling-30B-GGML" target="_blank">WizardLM-Unc-Supercot 30B-8_0</a>|72.83|126|173|43.042|145.34|34.56|2023/06/01 11:07:15|
|<a href="https://huggingface.co/TheBloke/wizardLM-13B-1.0-GGML" target="_blank">WizardLM-1.0 13B-8_0</a>|72.25|125|173|25.745|237.13|13.83|2023/05/27 16:17:01|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora-30B-4bit-GGML" target="_blank">GPT4-Alpaca-Lora 30B-8_0</a>|72.25|125|173|45.331|158.18|34.56|2023/05/20 04:13:39|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-Uncensored-GGML" target="_blank">WizardLM-Uncensored 30B-8_0</a>|72.25|125|173|46.509|164.12|34.56|2023/05/22 14:34:25|
|<a href="https://huggingface.co/TheBloke/Alpaca-Lora-30B-GGML" target="_blank">Alpaca-Lora 30B-8_0</a>|71.68|124|173|26.703|63.45|34.56|2023/06/01 07:50:56|
|<a href="https://huggingface.co/TheBloke/minotaur-13B-GGML" target="_blank">Minotaur 13B-8_0</a>|69.94|121|173|16.787|169.25|13.83|2023/06/08 21:45:25|
|<a href="https://huggingface.co/TheBloke/30B-Lazarus-GGML" target="_blank">Lazarus 30B-8_0</a>|68.79|119|173|41.328|143.64|34.56|2023/06/07 15:58:57|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-5_1</a>|68.79|119|173|80.703|191.91|48.97|2023/05/25 18:58:18|
|<a href="https://huggingface.co/TheBloke/chronos-wizardlm-uc-scot-st-13B-GGML" target="_blank">Chronos-WizardLM-Unc-Sc 13B-8_0</a>|68.21|118|173|21.821|188.53|13.83|2023/06/07 14:08:04|
|<a href="https://huggingface.co/TheBloke/tulu-30B-GGML" target="_blank">Tulu 30B-8_0</a>|67.63|117|173|17.754|21.10|34.56|2023/06/10 21:47:05|
|<a href="https://huggingface.co/TheBloke/chronos-hermes-13B-GGML" target="_blank">Chronos-Hermes 13B-8_0</a>|67.63|117|173|20.203|175.83|13.83|2023/06/13 11:02:08|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-13B-GGML" target="_blank">Baize-v2 13B-8_0</a>|67.63|117|173|22.098|188.53|13.83|2023/05/24 12:00:06|
|<a href="https://huggingface.co/TheBloke/wizard-mega-13B-GGML" target="_blank">Wlzard-Mega 13B-8_0</a>|67.05|116|173|19.864|172.29|13.83|2023/05/20 03:50:25|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora_mlp-65B-GGML" target="_blank">GPT4-Alpaca-Lora-mlp 65B-5_1</a>|67.05|116|173|68.713|150.52|48.97|2023/05/20 17:04:49|
|<a href="https://huggingface.co/TheBloke/airoboros-13B-1.1-GGML" target="_blank">Airoboros-1.1 13B-8_0</a>|65.90|114|173|13.185|68.46|13.83|2023/06/10 16:09:53|
|<a href="https://huggingface.co/TheBloke/based-30B-GGML" target="_blank">Based 30B-8_0</a>|65.90|114|173|18.318|33.51|34.56|2023/06/03 10:54:07|
|<a href="https://huggingface.co/TheBloke/gpt4-x-vicuna-13B-GGML" target="_blank">Gpt4-X-Vicuna 13B-8_0</a>|65.90|114|173|19.660|178.62|13.83|2023/05/20 05:02:06|
|<a href="https://huggingface.co/TheBloke/airoboros-7b-gpt4-GGML" target="_blank">Airoboros-Gpt4 7B-8_0</a>|65.32|113|173|6.485|15.60|7.16|2023/06/04 13:34:35|
|<a href="https://huggingface.co/TheBloke/13B-HyperMantis-GGML" target="_blank">Hypermantis 13B-8_0</a>|65.32|113|173|12.047|92.61|13.83|2023/06/03 00:38:54|
|<a href="https://huggingface.co/TheBloke/Nous-Hermes-13B-GGML" target="_blank">Nous-Hermes 13B-8_0</a>|65.32|113|173|14.478|99.36|13.83|2023/06/03 13:44:45|
|<a href="https://huggingface.co/TheBloke/LLaMa-30B-GGML" target="_blank">Llama 30B-8_0</a>|65.32|113|173|49.145|168.58|34.56|2023/05/20 19:50:17|
|<a href="https://huggingface.co/TheBloke/guanaco-7B-GGML" target="_blank">Guanaco 7B-8_0</a>|64.74|112|173|34.393|682.42|7.16|2023/05/25 20:18:25|
|<a href="https://huggingface.co/TheBloke/wizard-vicuna-13B-GGML" target="_blank">Wizard-Vicuna 13B-8_0</a>|64.16|111|173|12.916|91.27|13.83|2023/05/20 02:44:04|
|<a href="https://huggingface.co/TheBloke/13B-Chimera-GGML" target="_blank">Chimera 13B-8_0</a>|64.16|111|173|13.946|116.87|13.83|2023/06/03 13:08:37|
|<a href="https://huggingface.co/TheBloke/Manticore-13B-GGML" target="_blank">Manticore 13B-8_0</a>|64.16|111|173|16.073|128.66|13.83|2023/05/20 14:17:21|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-13B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Uncensored 13B-8_0</a>|62.43|108|173|13.729|97.36|13.83|2023/05/20 02:05:09|
|<a href="https://huggingface.co/TheBloke/Vigogne-Instruct-13B-GGML" target="_blank">Vigogne-Instruct 13B-8_0</a>|60.69|105|173|19.154|141.71|13.83|2023/05/25 21:58:38|
|<a href="https://huggingface.co/TheBloke/WizardLM-13B-Uncensored-GGML" target="_blank">WizardLM-Uncensored 13B-8_0</a>|60.12|104|173|18.705|158.69|13.83|2023/05/20 01:27:46|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-7B-GGML" target="_blank">Baize-v2 7B-8_0</a>|57.23|99|173|12.697|183.72|7.16|2023/05/24 11:38:45|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-7B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Uncensored 7B-8_0</a>|56.65|98|173|7.217|81.47|7.16|2023/05/20 01:07:29|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-30B-LoRA-GGML" target="_blank">VicUnlocked-LoRA 30B-8_0</a>|54.34|94|173|76.095|276.57|34.56|2023/05/20 22:52:56|
|<a href="https://huggingface.co/TheBloke/wizardLM-7B-GGML" target="_blank">WizardLM 7B-8_0</a>|53.18|92|173|12.022|184.53|7.16|2023/05/20 00:19:49|
|<a href="https://huggingface.co/TheBloke/koala-13B-GGML" target="_blank">Koala 13B-8_0</a>|53.18|92|173|40.003|436.32|13.83|2023/05/20 05:33:31|
|<a href="https://huggingface.co/TheBloke/WizardLM-7B-uncensored-GGML" target="_blank">WizardLM-Uncensored 7B-8_0</a>|51.45|89|173|11.624|178.27|7.16|2023/05/19 23:51:34|
|<a href="https://huggingface.co/TheBloke/koala-7B-GGML" target="_blank">Koala 7B-8_0</a>|50.29|87|173|25.501|487.21|9.76|2023/05/20 00:45:54|
|<a href="https://huggingface.co/TheBloke/GPT4All-13B-snoozy-GGML" target="_blank">GPT4All-Snoozy 13B-8_0</a>|48.55|84|173|13.617|98.43|13.83|2023/05/20 03:14:27|
