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
|name|percent|modelcorrect|modeltotal|elapsed|msize|mdate|
|----|----|----|----|----|----|----|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-8_0</a>|77.86|102|131|46.208|34.56|2023/06/06 21:08:15|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-30B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Uncensored 30B-8_0</a>|76.34|100|131|35.361|34.56|2023/05/30 04:33:26|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-8_0</a>|75.57|99|131|88.005|69.37|2023/05/26 08:46:34|
|<a href="https://huggingface.co/TheBloke/alpaca-lora-65B-GGML" target="_blank">Alpaca-Lora 65B-5_1</a>|74.81|98|131|39.639|48.97|2023/05/20 12:57:30|
|<a href="https://huggingface.co/TheBloke/hippogriff-30b-chat-GGML" target="_blank">Hippogriff 30B-8_0</a>|74.81|98|131|43.931|34.56|2023/05/31 09:16:01|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-alpaca-65B-QLoRA-GGML" target="_blank">VicUnlocked-Alpaca 65B-8_0</a>|74.81|98|131|91.265|69.37|2023/05/30 00:09:02|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-6_K</a>|74.05|97|131|40.326|26.69|2023/06/06 19:03:43|
|<a href="https://huggingface.co/TheBloke/WizardLM-Uncensored-SuperCOT-StoryTelling-30B-GGML" target="_blank">WizardLM-Unc-Supercot 30B-8_0</a>|74.05|97|131|41.361|34.56|2023/06/01 11:07:15|
|<a href="https://huggingface.co/TheBloke/llama-30b-supercot-GGML" target="_blank">Llama-Supercot 30B-8_0</a>|73.28|96|131|31.106|34.56|2023/05/28 12:22:12|
|<a href="https://huggingface.co/TheBloke/samantha-33B-GGML" target="_blank">Samantha 33B-8_0</a>|73.28|96|131|44.476|34.56|2023/05/29 10:18:08|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-Uncensored-GGML" target="_blank">WizardLM-Uncensored 30B-8_0</a>|71.76|94|131|44.769|34.56|2023/05/22 14:34:25|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-5_1</a>|71.76|94|131|77.638|48.97|2023/05/25 18:58:18|
|<a href="https://huggingface.co/TheBloke/airoboros-13b-gpt4-GGML" target="_blank">Airoboros-Gpt4 13B-8_0</a>|70.99|93|131|6.016|13.83|2023/06/04 12:21:47|
|<a href="https://huggingface.co/TheBloke/Alpaca-Lora-30B-GGML" target="_blank">Alpaca-Lora 30B-8_0</a>|70.99|93|131|25.358|34.56|2023/06/01 07:50:56|
|<a href="https://huggingface.co/TheBloke/wizardLM-13B-1.0-GGML" target="_blank">WizardLM-1.0 13B-8_0</a>|70.99|93|131|25.538|13.83|2023/05/27 16:17:01|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora-30B-4bit-GGML" target="_blank">GPT4-Alpaca-Lora 30B-8_0</a>|70.99|93|131|44.089|34.56|2023/05/20 04:13:39|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-13B-GGML" target="_blank">Baize-v2 13B-8_0</a>|68.70|90|131|21.409|13.83|2023/05/24 12:00:06|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora_mlp-65B-GGML" target="_blank">GPT4-Alpaca-Lora-mlp 65B-5_1</a>|68.70|90|131|67.348|48.97|2023/05/20 17:04:49|
|<a href="https://huggingface.co/TheBloke/wizard-mega-13B-GGML" target="_blank">Wlzard-Mega 13B-8_0</a>|67.18|88|131|19.681|13.83|2023/05/20 03:50:25|
|<a href="https://huggingface.co/TheBloke/13B-Chimera-GGML" target="_blank">Chimera 13B-8_0</a>|66.41|87|131|12.709|13.83|2023/06/03 13:08:37|
|<a href="https://huggingface.co/TheBloke/13B-HyperMantis-GGML" target="_blank">Hypermantis 13B-8_0</a>|65.65|86|131|11.128|13.83|2023/06/03 00:38:54|
|<a href="https://huggingface.co/TheBloke/based-30B-GGML" target="_blank">Based 30B-8_0</a>|64.89|85|131|15.277|34.56|2023/06/03 10:54:07|
|<a href="https://huggingface.co/TheBloke/gpt4-x-vicuna-13B-GGML" target="_blank">Gpt4-X-Vicuna 13B-8_0</a>|64.89|85|131|19.842|13.83|2023/05/20 05:02:06|
|<a href="https://huggingface.co/TheBloke/LLaMa-30B-GGML" target="_blank">Llama 30B-8_0</a>|64.12|84|131|47.275|34.56|2023/05/20 19:50:17|
|<a href="https://huggingface.co/TheBloke/Manticore-13B-GGML" target="_blank">Manticore 13B-8_0</a>|63.36|83|131|15.333|13.83|2023/05/20 14:17:21|
|<a href="https://huggingface.co/TheBloke/guanaco-7B-GGML" target="_blank">Guanaco 7B-8_0</a>|63.36|83|131|35.534|7.16|2023/05/25 20:18:25|
|<a href="https://huggingface.co/TheBloke/wizard-vicuna-13B-GGML" target="_blank">Wizard-Vicuna 13B-8_0</a>|62.60|82|131|11.820|13.83|2023/05/20 02:44:04|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-13B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Uncensored 13B-8_0</a>|61.83|81|131|13.012|13.83|2023/05/20 02:05:09|
|<a href="https://huggingface.co/TheBloke/WizardLM-13B-Uncensored-GGML" target="_blank">WizardLM-Uncensored 13B-8_0</a>|61.83|81|131|18.257|13.83|2023/05/20 01:27:46|
|<a href="https://huggingface.co/TheBloke/Vigogne-Instruct-13B-GGML" target="_blank">Vigogne-Instruct 13B-8_0</a>|59.54|78|131|15.498|13.83|2023/05/25 21:58:38|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-7B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Uncensored 7B-8_0</a>|57.25|75|131|7.061|7.16|2023/05/20 01:07:29|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-7B-GGML" target="_blank">Baize-v2 7B-8_0</a>|57.25|75|131|12.308|7.16|2023/05/24 11:38:45|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-30B-LoRA-GGML" target="_blank">VicUnlocked-LoRA 30B-8_0</a>|52.67|69|131|75.391|34.56|2023/05/20 22:52:56|
|<a href="https://huggingface.co/TheBloke/wizardLM-7B-GGML" target="_blank">WizardLM 7B-8_0</a>|51.91|68|131|11.792|7.16|2023/05/20 00:19:49|
|<a href="https://huggingface.co/TheBloke/koala-13B-GGML" target="_blank">Koala 13B-8_0</a>|51.15|67|131|38.833|13.83|2023/05/20 05:33:31|
|<a href="https://huggingface.co/TheBloke/WizardLM-7B-uncensored-GGML" target="_blank">WizardLM-Uncensored 7B-8_0</a>|50.38|66|131|11.436|7.16|2023/05/19 23:51:34|
|<a href="https://huggingface.co/TheBloke/GPT4All-13B-snoozy-GGML" target="_blank">GPT4All-Snoozy 13B-8_0</a>|48.85|64|131|13.140|13.83|2023/05/20 03:14:27|
|<a href="https://huggingface.co/TheBloke/koala-7B-GGML" target="_blank">Koala 7B-8_0</a>|48.09|63|131|26.033|9.76|2023/05/20 00:45:54|
