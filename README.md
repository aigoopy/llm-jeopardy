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
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-8_0</a>|76.92|110|143|46.810|216.06|34.56|2023/06/06 21:08:15|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-30B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Uncensored 30B-8_0</a>|76.22|109|143|35.767|122.22|34.56|2023/05/30 04:33:26|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-8_0</a>|76.22|109|143|88.462|184.30|69.37|2023/05/26 08:46:34|
|<a href="https://huggingface.co/TheBloke/alpaca-lora-65B-GGML" target="_blank">Alpaca-Lora 65B-5_1</a>|75.52|108|143|39.952|39.92|48.97|2023/05/20 12:57:30|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-alpaca-65B-QLoRA-GGML" target="_blank">VicUnlocked-Alpaca 65B-8_0</a>|75.52|108|143|92.411|184.10|69.37|2023/05/30 00:09:02|
|<a href="https://huggingface.co/TheBloke/llama-30b-supercot-GGML" target="_blank">Llama-Supercot 30B-8_0</a>|74.83|107|143|31.492|101.30|34.56|2023/05/28 12:22:12|
|<a href="https://huggingface.co/TheBloke/hippogriff-30b-chat-GGML" target="_blank">Hippogriff 30B-8_0</a>|74.83|107|143|43.976|153.60|34.56|2023/05/31 09:16:01|
|<a href="https://huggingface.co/TheBloke/WizardLM-Uncensored-SuperCOT-StoryTelling-30B-GGML" target="_blank">WizardLM-Unc-Supercot 30B-8_0</a>|73.43|105|143|41.989|146.59|34.56|2023/06/01 11:07:15|
|<a href="https://huggingface.co/TheBloke/samantha-33B-GGML" target="_blank">Samantha 33B-8_0</a>|73.43|105|143|45.177|195.90|34.56|2023/05/29 10:18:08|
|<a href="https://huggingface.co/TheBloke/wizardLM-13B-1.0-GGML" target="_blank">WizardLM-1.0 13B-8_0</a>|72.73|104|143|25.730|245.87|13.83|2023/05/27 16:17:01|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-6_K</a>|72.73|104|143|41.092|231.24|26.69|2023/06/06 19:03:43|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora-30B-4bit-GGML" target="_blank">GPT4-Alpaca-Lora 30B-8_0</a>|72.03|103|143|44.726|161.64|34.56|2023/05/20 04:13:39|
|<a href="https://huggingface.co/TheBloke/airoboros-13b-gpt4-GGML" target="_blank">Airoboros-Gpt4 13B-8_0</a>|71.33|102|143|6.247|13.29|13.83|2023/06/04 12:21:47|
|<a href="https://huggingface.co/TheBloke/Alpaca-Lora-30B-GGML" target="_blank">Alpaca-Lora 30B-8_0</a>|71.33|102|143|26.042|68.37|34.56|2023/06/01 07:50:56|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-5_1</a>|71.33|102|143|78.155|194.89|48.97|2023/05/25 18:58:18|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-Uncensored-GGML" target="_blank">WizardLM-Uncensored 30B-8_0</a>|70.63|101|143|45.308|167.35|34.56|2023/05/22 14:34:25|
|<a href="https://huggingface.co/TheBloke/30B-Lazarus-GGML" target="_blank">Lazarus 30B-8_0</a>|69.93|100|143|40.073|145.46|34.56|2023/06/07 15:58:57|
|<a href="https://huggingface.co/TheBloke/chronos-wizardlm-uc-scot-st-13B-GGML" target="_blank">Chronos-WizardLM-Unc-Sc 13B-8_0</a>|68.53|98|143|21.290|191.38|13.83|2023/06/07 14:08:04|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-13B-GGML" target="_blank">Baize-v2 13B-8_0</a>|68.53|98|143|21.588|186.94|13.83|2023/05/24 12:00:06|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora_mlp-65B-GGML" target="_blank">GPT4-Alpaca-Lora-mlp 65B-5_1</a>|67.83|97|143|67.864|156.21|48.97|2023/05/20 17:04:49|
|<a href="https://huggingface.co/TheBloke/wizard-mega-13B-GGML" target="_blank">Wlzard-Mega 13B-8_0</a>|67.13|96|143|19.703|177.48|13.83|2023/05/20 03:50:25|
|<a href="https://huggingface.co/TheBloke/minotaur-13B-GGML" target="_blank">Minotaur 13B-8_0</a>|67.13|96|143|20.066|192.50|13.83|2023/06/08 21:45:25|
|<a href="https://huggingface.co/TheBloke/gpt4-x-vicuna-13B-GGML" target="_blank">Gpt4-X-Vicuna 13B-8_0</a>|66.43|95|143|19.622|188.22|13.83|2023/05/20 05:02:06|
|<a href="https://huggingface.co/TheBloke/13B-HyperMantis-GGML" target="_blank">Hypermantis 13B-8_0</a>|65.73|94|143|11.688|100.47|13.83|2023/06/03 00:38:54|
|<a href="https://huggingface.co/TheBloke/13B-Chimera-GGML" target="_blank">Chimera 13B-8_0</a>|65.73|94|143|13.219|121.19|13.83|2023/06/03 13:08:37|
|<a href="https://huggingface.co/TheBloke/based-30B-GGML" target="_blank">Based 30B-8_0</a>|65.03|93|143|16.191|33.73|34.56|2023/06/03 10:54:07|
|<a href="https://huggingface.co/TheBloke/LLaMa-30B-GGML" target="_blank">Llama 30B-8_0</a>|64.34|92|143|47.734|167.98|34.56|2023/05/20 19:50:17|
|<a href="https://huggingface.co/TheBloke/wizard-vicuna-13B-GGML" target="_blank">Wizard-Vicuna 13B-8_0</a>|63.64|91|143|12.061|89.72|13.83|2023/05/20 02:44:04|
|<a href="https://huggingface.co/TheBloke/Manticore-13B-GGML" target="_blank">Manticore 13B-8_0</a>|63.64|91|143|15.417|128.64|13.83|2023/05/20 14:17:21|
|<a href="https://huggingface.co/TheBloke/guanaco-7B-GGML" target="_blank">Guanaco 7B-8_0</a>|63.64|91|143|35.105|708.31|7.16|2023/05/25 20:18:25|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-13B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Uncensored 13B-8_0</a>|62.24|89|143|13.277|100.43|13.83|2023/05/20 02:05:09|
|<a href="https://huggingface.co/TheBloke/WizardLM-13B-Uncensored-GGML" target="_blank">WizardLM-Uncensored 13B-8_0</a>|61.54|88|143|18.523|165.55|13.83|2023/05/20 01:27:46|
|<a href="https://huggingface.co/TheBloke/Vigogne-Instruct-13B-GGML" target="_blank">Vigogne-Instruct 13B-8_0</a>|59.44|85|143|15.906|121.39|13.83|2023/05/25 21:58:38|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-7B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Uncensored 7B-8_0</a>|57.34|82|143|7.211|88.34|7.16|2023/05/20 01:07:29|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-7B-GGML" target="_blank">Baize-v2 7B-8_0</a>|57.34|82|143|12.390|183.87|7.16|2023/05/24 11:38:45|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-30B-LoRA-GGML" target="_blank">VicUnlocked-LoRA 30B-8_0</a>|53.85|77|143|75.690|283.01|34.56|2023/05/20 22:52:56|
|<a href="https://huggingface.co/TheBloke/wizardLM-7B-GGML" target="_blank">WizardLM 7B-8_0</a>|53.15|76|143|11.960|191.00|7.16|2023/05/20 00:19:49|
|<a href="https://huggingface.co/TheBloke/koala-13B-GGML" target="_blank">Koala 13B-8_0</a>|52.45|75|143|38.804|436.68|13.83|2023/05/20 05:33:31|
|<a href="https://huggingface.co/TheBloke/WizardLM-7B-uncensored-GGML" target="_blank">WizardLM-Uncensored 7B-8_0</a>|49.65|71|143|11.523|184.71|7.16|2023/05/19 23:51:34|
|<a href="https://huggingface.co/TheBloke/GPT4All-13B-snoozy-GGML" target="_blank">GPT4All-Snoozy 13B-8_0</a>|48.25|69|143|13.390|104.60|13.83|2023/05/20 03:14:27|
|<a href="https://huggingface.co/TheBloke/koala-7B-GGML" target="_blank">Koala 7B-8_0</a>|48.25|69|143|26.227|508.59|9.76|2023/05/20 00:45:54|
