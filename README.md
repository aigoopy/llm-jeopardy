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
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4 65B-8_0</a>|80.84|135|167|28.431|12.82|69.37|2023/06/14 16:35:46|
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4 65B-5_1</a>|79.04|132|167|32.899|12.95|48.97|2023/06/14 15:25:37|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-30B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Uncensored 30B-8_0</a>|76.05|127|167|37.321|122.49|34.56|2023/05/30 04:33:26|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-8_0</a>|76.05|127|167|48.210|210.63|34.56|2023/06/06 21:08:15|
|<a href="https://huggingface.co/TheBloke/alpaca-lora-65B-GGML" target="_blank">Alpaca-Lora 65B-5_1</a>|75.45|126|167|41.430|37.61|48.97|2023/05/20 12:57:30|
|<a href="https://huggingface.co/TheBloke/hippogriff-30b-chat-GGML" target="_blank">Hippogriff 30B-8_0</a>|74.85|125|167|44.946|153.15|34.56|2023/05/31 09:16:01|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-8_0</a>|74.85|125|167|91.959|182.63|69.37|2023/05/26 08:46:34|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-alpaca-65B-QLoRA-GGML" target="_blank">VicUnlocked-Alpaca 65B-8_0</a>|73.65|123|167|95.543|183.60|69.37|2023/05/30 00:09:02|
|<a href="https://huggingface.co/TheBloke/wizardLM-13B-1.0-GGML" target="_blank">WizardLM-1.0 13B-8_0</a>|73.05|122|167|25.774|239.09|13.83|2023/05/27 16:17:01|
|<a href="https://huggingface.co/TheBloke/samantha-33B-GGML" target="_blank">Samantha 33B-8_0</a>|73.05|122|167|46.938|195.25|34.56|2023/05/29 10:18:08|
|<a href="https://huggingface.co/TheBloke/airoboros-13b-gpt4-GGML" target="_blank">Airoboros-Gpt4 13B-8_0</a>|72.46|121|167|6.698|13.17|13.83|2023/06/04 12:21:47|
|<a href="https://huggingface.co/TheBloke/llama-30b-supercot-GGML" target="_blank">Llama-Supercot 30B-8_0</a>|72.46|121|167|31.391|92.98|34.56|2023/05/28 12:22:12|
|<a href="https://huggingface.co/TheBloke/WizardLM-Uncensored-SuperCOT-StoryTelling-30B-GGML" target="_blank">WizardLM-Unc-Supercot 30B-8_0</a>|72.46|121|167|42.662|143.74|34.56|2023/06/01 11:07:15|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-6_K</a>|72.46|121|167|42.744|229.13|26.69|2023/06/06 19:03:43|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora-30B-4bit-GGML" target="_blank">GPT4-Alpaca-Lora 30B-8_0</a>|71.86|120|167|45.309|158.02|34.56|2023/05/20 04:13:39|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-Uncensored-GGML" target="_blank">WizardLM-Uncensored 30B-8_0</a>|71.86|120|167|45.634|161.86|34.56|2023/05/22 14:34:25|
|<a href="https://huggingface.co/TheBloke/Alpaca-Lora-30B-GGML" target="_blank">Alpaca-Lora 30B-8_0</a>|71.26|119|167|26.216|62.76|34.56|2023/06/01 07:50:56|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-5_1</a>|69.46|116|167|80.436|191.80|48.97|2023/05/25 18:58:18|
|<a href="https://huggingface.co/TheBloke/minotaur-13B-GGML" target="_blank">Minotaur 13B-8_0</a>|68.86|115|167|16.247|166.95|13.83|2023/06/08 21:45:25|
|<a href="https://huggingface.co/TheBloke/30B-Lazarus-GGML" target="_blank">Lazarus 30B-8_0</a>|68.86|115|167|40.842|142.43|34.56|2023/06/07 15:58:57|
|<a href="https://huggingface.co/TheBloke/chronos-hermes-13B-GGML" target="_blank">Chronos-Hermes 13B-8_0</a>|68.26|114|167|20.188|176.96|13.83|2023/06/13 11:02:08|
|<a href="https://huggingface.co/TheBloke/chronos-wizardlm-uc-scot-st-13B-GGML" target="_blank">Chronos-WizardLM-Unc-Sc 13B-8_0</a>|68.26|114|167|21.746|188.90|13.83|2023/06/07 14:08:04|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora_mlp-65B-GGML" target="_blank">GPT4-Alpaca-Lora-mlp 65B-5_1</a>|67.66|113|167|68.444|150.93|48.97|2023/05/20 17:04:49|
|<a href="https://huggingface.co/TheBloke/Nous-Hermes-13B-GGML" target="_blank">Nous-Hermes 13B-8_0</a>|67.07|112|167|14.204|97.75|13.83|2023/06/03 13:44:45|
|<a href="https://huggingface.co/TheBloke/tulu-30B-GGML" target="_blank">Tulu 30B-8_0</a>|67.07|112|167|17.356|21.17|34.56|2023/06/10 21:47:05|
|<a href="https://huggingface.co/TheBloke/gpt4-x-vicuna-13B-GGML" target="_blank">Gpt4-X-Vicuna 13B-8_0</a>|67.07|112|167|19.573|177.63|13.83|2023/05/20 05:02:06|
|<a href="https://huggingface.co/TheBloke/wizard-mega-13B-GGML" target="_blank">Wlzard-Mega 13B-8_0</a>|67.07|112|167|19.843|172.35|13.83|2023/05/20 03:50:25|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-13B-GGML" target="_blank">Baize-v2 13B-8_0</a>|67.07|112|167|22.092|187.92|13.83|2023/05/24 12:00:06|
|<a href="https://huggingface.co/TheBloke/airoboros-13B-1.1-GGML" target="_blank">Airoboros-1.1 13B-8_0</a>|65.27|109|167|13.159|69.89|13.83|2023/06/10 16:09:53|
|<a href="https://huggingface.co/TheBloke/based-30B-GGML" target="_blank">Based 30B-8_0</a>|65.27|109|167|17.780|33.22|34.56|2023/06/03 10:54:07|
|<a href="https://huggingface.co/TheBloke/LLaMa-30B-GGML" target="_blank">Llama 30B-8_0</a>|65.27|109|167|49.147|168.56|34.56|2023/05/20 19:50:17|
|<a href="https://huggingface.co/TheBloke/13B-HyperMantis-GGML" target="_blank">Hypermantis 13B-8_0</a>|64.67|108|167|11.893|93.30|13.83|2023/06/03 00:38:54|
|<a href="https://huggingface.co/TheBloke/13B-Chimera-GGML" target="_blank">Chimera 13B-8_0</a>|64.67|108|167|13.519|114.78|13.83|2023/06/03 13:08:37|
|<a href="https://huggingface.co/TheBloke/guanaco-7B-GGML" target="_blank">Guanaco 7B-8_0</a>|64.67|108|167|34.617|680.76|7.16|2023/05/25 20:18:25|
|<a href="https://huggingface.co/TheBloke/wizard-vicuna-13B-GGML" target="_blank">Wizard-Vicuna 13B-8_0</a>|64.07|107|167|12.588|87.92|13.83|2023/05/20 02:44:04|
|<a href="https://huggingface.co/TheBloke/Manticore-13B-GGML" target="_blank">Manticore 13B-8_0</a>|63.47|106|167|15.916|127.29|13.83|2023/05/20 14:17:21|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-13B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Uncensored 13B-8_0</a>|62.28|104|167|13.639|98.09|13.83|2023/05/20 02:05:09|
|<a href="https://huggingface.co/TheBloke/Vigogne-Instruct-13B-GGML" target="_blank">Vigogne-Instruct 13B-8_0</a>|60.48|101|167|19.168|143.71|13.83|2023/05/25 21:58:38|
|<a href="https://huggingface.co/TheBloke/WizardLM-13B-Uncensored-GGML" target="_blank">WizardLM-Uncensored 13B-8_0</a>|59.88|100|167|18.660|158.97|13.83|2023/05/20 01:27:46|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-7B-GGML" target="_blank">Baize-v2 7B-8_0</a>|57.49|96|167|12.656|183.80|7.16|2023/05/24 11:38:45|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-7B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Uncensored 7B-8_0</a>|56.29|94|167|7.099|81.37|7.16|2023/05/20 01:07:29|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-30B-LoRA-GGML" target="_blank">VicUnlocked-LoRA 30B-8_0</a>|53.89|90|167|76.315|273.66|34.56|2023/05/20 22:52:56|
|<a href="https://huggingface.co/TheBloke/wizardLM-7B-GGML" target="_blank">WizardLM 7B-8_0</a>|53.29|89|167|11.971|184.07|7.16|2023/05/20 00:19:49|
|<a href="https://huggingface.co/TheBloke/koala-13B-GGML" target="_blank">Koala 13B-8_0</a>|53.29|89|167|40.424|440.01|13.83|2023/05/20 05:33:31|
|<a href="https://huggingface.co/TheBloke/WizardLM-7B-uncensored-GGML" target="_blank">WizardLM-Uncensored 7B-8_0</a>|51.50|86|167|11.590|179.75|7.16|2023/05/19 23:51:34|
|<a href="https://huggingface.co/TheBloke/GPT4All-13B-snoozy-GGML" target="_blank">GPT4All-Snoozy 13B-8_0</a>|49.70|83|167|13.460|98.17|13.83|2023/05/20 03:14:27|
|<a href="https://huggingface.co/TheBloke/koala-7B-GGML" target="_blank">Koala 7B-8_0</a>|49.70|83|167|25.695|488.56|9.76|2023/05/20 00:45:54|
