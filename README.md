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
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 65B-8_0</a>|82.12|147|179|29.639|12.97|69.37|2023/06/14 16:35:46|
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 65B-5_1</a>|80.45|144|179|33.273|13.09|48.97|2023/06/14 15:25:37|
|<a href="https://huggingface.co/TheBloke/airoboros-33B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 33B-8_0</a>|77.09|138|179|18.696|13.13|34.56|2023/06/14 14:32:00|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-8_0</a>|75.98|136|179|49.417|213.24|34.56|2023/06/06 21:08:15|
|<a href="https://huggingface.co/TheBloke/alpaca-lora-65B-GGML" target="_blank">Alpaca-Lora 65B-5_1</a>|75.42|135|179|41.638|36.42|48.97|2023/05/20 12:57:30|
|<a href="https://huggingface.co/TheBloke/hippogriff-30b-chat-GGML" target="_blank">Hippogriff 30B-8_0</a>|75.42|135|179|46.110|156.13|34.56|2023/05/31 09:16:01|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-8_0</a>|75.42|135|179|93.142|183.44|69.37|2023/05/26 08:46:34|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-30B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Uncensored 30B-8_0</a>|74.30|133|179|38.398|123.37|34.56|2023/05/30 04:33:26|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-alpaca-65B-QLoRA-GGML" target="_blank">VicUnlocked-Alpaca 65B-8_0</a>|73.74|132|179|95.291|179.34|69.37|2023/05/30 00:09:02|
|<a href="https://huggingface.co/TheBloke/WizardLM-Uncensored-SuperCOT-StoryTelling-30B-GGML" target="_blank">WizardLM-Unc-Supercot 30B-8_0</a>|72.63|130|179|43.208|145.78|34.56|2023/06/01 11:07:15|
|<a href="https://huggingface.co/TheBloke/samantha-33B-GGML" target="_blank">Samantha 33B-8_0</a>|72.63|130|179|48.052|195.82|34.56|2023/05/29 10:18:08|
|<a href="https://huggingface.co/TheBloke/wizardLM-13B-1.0-GGML" target="_blank">WizardLM-1.0 13B-8_0</a>|72.07|129|179|25.884|236.49|13.83|2023/05/27 16:17:01|
|<a href="https://huggingface.co/TheBloke/llama-30b-supercot-GGML" target="_blank">Llama-Supercot 30B-8_0</a>|72.07|129|179|32.294|94.19|34.56|2023/05/28 12:22:12|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-6_K</a>|72.07|129|179|43.954|231.54|26.69|2023/06/06 19:03:43|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora-30B-4bit-GGML" target="_blank">GPT4-Alpaca-Lora 30B-8_0</a>|72.07|129|179|45.859|159.15|34.56|2023/05/20 04:13:39|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-Uncensored-GGML" target="_blank">WizardLM-Uncensored 30B-8_0</a>|72.07|129|179|46.452|164.20|34.56|2023/05/22 14:34:25|
|<a href="https://huggingface.co/TheBloke/Alpaca-Lora-30B-GGML" target="_blank">Alpaca-Lora 30B-8_0</a>|71.51|128|179|26.945|62.78|34.56|2023/06/01 07:50:56|
|<a href="https://huggingface.co/TheBloke/minotaur-13B-GGML" target="_blank">Minotaur 13B-8_0</a>|70.39|126|179|17.118|168.23|13.83|2023/06/08 21:45:25|
|<a href="https://huggingface.co/TheBloke/airoboros-13B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 13B-8_0</a>|69.83|125|179|9.680|13.02|13.83|2023/06/16 13:03:21|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-5_1</a>|69.27|124|179|81.214|192.07|48.97|2023/05/25 18:58:18|
|<a href="https://huggingface.co/TheBloke/30B-Lazarus-GGML" target="_blank">Lazarus 30B-8_0</a>|68.72|123|179|41.839|144.57|34.56|2023/06/07 15:58:57|
|<a href="https://huggingface.co/TheBloke/chronos-hermes-13B-GGML" target="_blank">Chronos-Hermes 13B-8_0</a>|67.60|121|179|20.398|175.77|13.83|2023/06/13 11:02:08|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-13B-GGML" target="_blank">Baize-v2 13B-8_0</a>|67.60|121|179|22.097|188.71|13.83|2023/05/24 12:00:06|
|<a href="https://huggingface.co/TheBloke/tulu-30B-GGML" target="_blank">Tulu 30B-8_0</a>|67.04|120|179|18.151|20.75|34.56|2023/06/10 21:47:05|
|<a href="https://huggingface.co/TheBloke/wizard-mega-13B-GGML" target="_blank">Wlzard-Mega 13B-8_0</a>|67.04|120|179|19.997|171.21|13.83|2023/05/20 03:50:25|
|<a href="https://huggingface.co/TheBloke/chronos-wizardlm-uc-scot-st-13B-GGML" target="_blank">Chronos-WizardLM-Unc-Sc 13B-8_0</a>|67.04|120|179|21.880|187.39|13.83|2023/06/07 14:08:04|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora_mlp-65B-GGML" target="_blank">GPT4-Alpaca-Lora-mlp 65B-5_1</a>|67.04|120|179|69.159|150.04|48.97|2023/05/20 17:04:49|
|<a href="https://huggingface.co/TheBloke/13B-HyperMantis-GGML" target="_blank">Hypermantis 13B-8_0</a>|65.36|117|179|12.169|90.64|13.83|2023/06/03 00:38:54|
|<a href="https://huggingface.co/TheBloke/Nous-Hermes-13B-GGML" target="_blank">Nous-Hermes 13B-8_0</a>|65.36|117|179|14.769|99.02|13.83|2023/06/03 13:44:45|
|<a href="https://huggingface.co/TheBloke/based-30B-GGML" target="_blank">Based 30B-8_0</a>|65.36|117|179|18.706|33.09|34.56|2023/06/03 10:54:07|
|<a href="https://huggingface.co/TheBloke/gpt4-x-vicuna-13B-GGML" target="_blank">Gpt4-X-Vicuna 13B-8_0</a>|65.36|117|179|20.085|181.82|13.83|2023/05/20 05:02:06|
|<a href="https://huggingface.co/TheBloke/LLaMa-30B-GGML" target="_blank">Llama 30B-8_0</a>|65.36|117|179|49.391|168.40|34.56|2023/05/20 19:50:17|
|<a href="https://huggingface.co/TheBloke/wizard-vicuna-13B-GGML" target="_blank">Wizard-Vicuna 13B-8_0</a>|64.25|115|179|13.159|92.30|13.83|2023/05/20 02:44:04|
|<a href="https://huggingface.co/TheBloke/Manticore-13B-GGML" target="_blank">Manticore 13B-8_0</a>|64.25|115|179|16.206|129.22|13.83|2023/05/20 14:17:21|
|<a href="https://huggingface.co/TheBloke/guanaco-7B-GGML" target="_blank">Guanaco 7B-8_0</a>|64.25|115|179|34.255|679.04|7.16|2023/05/25 20:18:25|
|<a href="https://huggingface.co/TheBloke/13B-Chimera-GGML" target="_blank">Chimera 13B-8_0</a>|63.69|114|179|14.393|120.87|13.83|2023/06/03 13:08:37|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-13B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Uncensored 13B-8_0</a>|62.57|112|179|13.835|97.22|13.83|2023/05/20 02:05:09|
|<a href="https://huggingface.co/TheBloke/airoboros-7B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 7B-8_0</a>|60.34|108|179|6.539|15.49|7.16|2023/06/16 12:45:31|
|<a href="https://huggingface.co/TheBloke/Vigogne-Instruct-13B-GGML" target="_blank">Vigogne-Instruct 13B-8_0</a>|60.34|108|179|19.504|142.21|13.83|2023/05/25 21:58:38|
|<a href="https://huggingface.co/TheBloke/WizardLM-13B-Uncensored-GGML" target="_blank">WizardLM-Uncensored 13B-8_0</a>|59.78|107|179|18.803|158.44|13.83|2023/05/20 01:27:46|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-7B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Uncensored 7B-8_0</a>|56.98|102|179|7.302|80.50|7.16|2023/05/20 01:07:29|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-7B-GGML" target="_blank">Baize-v2 7B-8_0</a>|56.98|102|179|12.788|183.47|7.16|2023/05/24 11:38:45|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-30B-LoRA-GGML" target="_blank">VicUnlocked-LoRA 30B-8_0</a>|54.75|98|179|76.605|277.80|34.56|2023/05/20 22:52:56|
|<a href="https://huggingface.co/TheBloke/koala-13B-GGML" target="_blank">Koala 13B-8_0</a>|54.19|97|179|39.742|431.55|13.83|2023/05/20 05:33:31|
|<a href="https://huggingface.co/TheBloke/wizardLM-7B-GGML" target="_blank">WizardLM 7B-8_0</a>|53.07|95|179|12.054|184.20|7.16|2023/05/20 00:19:49|
|<a href="https://huggingface.co/TheBloke/WizardLM-7B-uncensored-GGML" target="_blank">WizardLM-Uncensored 7B-8_0</a>|51.96|93|179|11.663|177.96|7.16|2023/05/19 23:51:34|
|<a href="https://huggingface.co/TheBloke/koala-7B-GGML" target="_blank">Koala 7B-8_0</a>|50.28|90|179|25.675|487.71|9.76|2023/05/20 00:45:54|
|<a href="https://huggingface.co/TheBloke/GPT4All-13B-snoozy-GGML" target="_blank">GPT4All-Snoozy 13B-8_0</a>|48.04|86|179|13.691|97.62|13.83|2023/05/20 03:14:27|
