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
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 65B-8_0</a>|83.19|188|226|34.766|12.85|69.37|2023/06/14 16:35:46|
|<a href="https://huggingface.co/TheBloke/airoboros-65B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 65B-5_1</a>|81.86|185|226|35.344|13.02|48.97|2023/06/14 15:25:37|
|<a href="https://huggingface.co/TheBloke/airoboros-33B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 33B-8_0</a>|77.88|176|226|22.393|18.04|34.56|2023/06/26 17:53:42|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-8_0</a>|76.11|172|226|97.243|182.81|69.37|2023/05/26 08:46:34|
|<a href="https://huggingface.co/TheBloke/alpaca-lora-65B-GGML" target="_blank">Alpaca-Lora 65B-5_1</a>|75.66|171|226|44.533|37.14|48.97|2023/05/20 12:57:30|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-8_0</a>|75.66|171|226|53.226|211.56|34.56|2023/06/06 21:08:15|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-30B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 30B-8_0</a>|75.22|170|226|41.170|124.40|34.56|2023/05/30 04:33:26|
|<a href="https://huggingface.co/TheBloke/hippogriff-30b-chat-GGML" target="_blank">Hippogriff 30B-8_0</a>|74.78|169|226|47.822|153.59|34.56|2023/05/31 09:16:01|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora-30B-4bit-GGML" target="_blank">GPT4-Alpaca-Lora 30B-8_0</a>|73.89|167|226|49.032|158.93|34.56|2023/05/20 04:13:39|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-Uncensored-GGML" target="_blank">WizardLM-Unc 30B-8_0</a>|73.89|167|226|50.410|166.08|34.56|2023/05/22 14:34:25|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-alpaca-65B-QLoRA-GGML" target="_blank">VicUnlocked-Alpaca 65B-8_0</a>|73.45|166|226|99.568|177.95|69.37|2023/05/30 00:09:02|
|<a href="https://huggingface.co/TheBloke/WizardLM-30B-GGML" target="_blank">WizardLM 30B-6_K</a>|72.57|164|226|46.192|226.50|26.69|2023/06/06 19:03:43|
|<a href="https://huggingface.co/TheBloke/WizardLM-Uncensored-SuperCOT-StoryTelling-30B-GGML" target="_blank">WizardLM-Unc-Supercot 30B-8_0</a>|72.57|164|226|46.258|145.88|34.56|2023/06/01 11:07:15|
|<a href="https://huggingface.co/TheBloke/llama-30b-supercot-GGML" target="_blank">Llama-Supercot 30B-8_0</a>|72.12|163|226|35.571|94.92|34.56|2023/05/28 12:22:12|
|<a href="https://huggingface.co/TheBloke/GPlatty-30B-GGML" target="_blank">GPlatty 30B-8_0</a>|71.24|161|226|28.084|35.48|34.56|2023/06/29 00:01:01|
|<a href="https://huggingface.co/TheBloke/samantha-33B-GGML" target="_blank">Samantha 33B-8_0</a>|71.24|161|226|51.491|194.44|34.56|2023/05/29 10:18:08|
|<a href="https://huggingface.co/TheBloke/airoboros-13B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 13B-8_0</a>|70.80|160|226|10.520|13.04|13.83|2023/06/16 13:03:21|
|<a href="https://huggingface.co/TheBloke/Alpaca-Lora-30B-GGML" target="_blank">Alpaca-Lora 30B-8_0</a>|70.80|160|226|30.179|63.66|34.56|2023/06/01 07:50:56|
|<a href="https://huggingface.co/TheBloke/gpt4-alpaca-lora_mlp-65B-GGML" target="_blank">GPT4-Alpaca-Lora-mlp 65B-5_1</a>|70.80|160|226|73.042|149.51|48.97|2023/05/20 17:04:49|
|<a href="https://huggingface.co/TheBloke/guanaco-65B-GGML" target="_blank">Guanaco 65B-5_1</a>|70.35|159|226|83.385|189.88|48.97|2023/05/25 18:58:18|
|<a href="https://huggingface.co/TheBloke/airoboros-13B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 13B-8_0</a>|69.91|158|226|11.743|18.04|13.83|2023/06/22 08:32:58|
|<a href="https://huggingface.co/TheBloke/minotaur-13B-GGML" target="_blank">Minotaur 13B-8_0</a>|69.91|158|226|19.397|171.58|13.83|2023/06/08 21:45:25|
|<a href="https://huggingface.co/TheBloke/wizardLM-13B-1.0-GGML" target="_blank">WizardLM-1.0 13B-8_0</a>|69.91|158|226|28.130|240.95|13.83|2023/05/27 16:17:01|
|<a href="https://huggingface.co/TheBloke/30B-Lazarus-GGML" target="_blank">Lazarus 30B-8_0</a>|69.03|156|226|44.662|145.89|34.56|2023/06/07 15:58:57|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-13B-GGML" target="_blank">Baize-v2 13B-8_0</a>|67.70|153|226|23.633|187.88|13.83|2023/05/24 12:00:06|
|<a href="https://huggingface.co/TheBloke/Nous-Hermes-13B-GGML" target="_blank">Nous-Hermes 13B-8_0</a>|66.81|151|226|16.671|105.74|13.83|2023/06/03 13:44:45|
|<a href="https://huggingface.co/TheBloke/tulu-30B-GGML" target="_blank">Tulu 30B-8_0</a>|66.81|151|226|20.862|19.15|34.56|2023/06/10 21:47:05|
|<a href="https://huggingface.co/TheBloke/WizardLM-13B-V1.0-Uncensored-GGML" target="_blank">WizardLM-Unc-1.0 13B-8_0</a>|66.81|151|226|34.827|257.32|13.83|2023/06/20 07:44:48|
|<a href="https://huggingface.co/TheBloke/chronos-hermes-13B-GGML" target="_blank">Chronos-Hermes 13B-8_0</a>|66.37|150|226|22.728|186.80|13.83|2023/06/13 11:02:08|
|<a href="https://huggingface.co/TheBloke/LLaMa-30B-GGML" target="_blank">Llama 30B-8_0</a>|66.37|150|226|52.331|168.39|34.56|2023/05/20 19:50:17|
|<a href="https://huggingface.co/TheBloke/chronos-wizardlm-uc-scot-st-13B-GGML" target="_blank">Chronos-WizardLM-Unc-Sc 13B-8_0</a>|65.93|149|226|24.116|201.77|13.83|2023/06/07 14:08:04|
|<a href="https://huggingface.co/TheBloke/wizard-mega-13B-GGML" target="_blank">Wlzard-Mega 13B-8_0</a>|65.49|148|226|21.423|173.67|13.83|2023/05/20 03:50:25|
|<a href="https://huggingface.co/TheBloke/gpt4-x-vicuna-13B-GGML" target="_blank">Gpt4-X-Vicuna 13B-8_0</a>|65.49|148|226|21.625|184.99|13.83|2023/05/20 05:02:06|
|<a href="https://huggingface.co/TheBloke/airoboros-7B-gpt4-1.4-GGML" target="_blank">Airoboros-Gpt4-1.4 7B-8_0</a>|65.04|147|226|7.507|22.35|7.16|2023/06/22 07:53:28|
|<a href="https://huggingface.co/TheBloke/based-30B-GGML" target="_blank">Based 30B-8_0</a>|65.04|147|226|22.245|34.10|34.56|2023/06/03 10:54:07|
|<a href="https://huggingface.co/TheBloke/13B-HyperMantis-GGML" target="_blank">Hypermantis 13B-8_0</a>|64.16|145|226|14.552|96.22|13.83|2023/06/03 00:38:54|
|<a href="https://huggingface.co/TheBloke/Manticore-13B-GGML" target="_blank">Manticore 13B-8_0</a>|64.16|145|226|17.962|129.68|13.83|2023/05/20 14:17:21|
|<a href="https://huggingface.co/TheBloke/vicuna-13b-v1.3.0-GGML" target="_blank">Vicuna-1.3.0 13B-8_0</a>|64.16|145|226|38.114|309.54|13.83|2023/06/25 11:15:58|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-13B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 13B-8_0</a>|63.72|144|226|15.530|96.99|13.83|2023/05/20 02:05:09|
|<a href="https://huggingface.co/TheBloke/13B-Chimera-GGML" target="_blank">Chimera 13B-8_0</a>|63.72|144|226|16.361|123.38|13.83|2023/06/03 13:08:37|
|<a href="https://huggingface.co/TheBloke/guanaco-7B-GGML" target="_blank">Guanaco 7B-8_0</a>|62.39|141|226|36.185|708.60|7.16|2023/05/25 20:18:25|
|<a href="https://huggingface.co/TheBloke/airoboros-7B-gpt4-1.2-GGML" target="_blank">Airoboros-Gpt4-1.2 7B-8_0</a>|61.50|139|226|7.079|16.87|7.16|2023/06/16 12:45:31|
|<a href="https://huggingface.co/TheBloke/Selfee-13B-GGML" target="_blank">Selfee 13B-8_0</a>|61.06|138|226|29.683|184.19|13.83|2023/06/06 14:23:41|
|<a href="https://huggingface.co/TheBloke/wizard-vicuna-13B-GGML" target="_blank">Wizard-Vicuna 13B-8_0</a>|60.62|137|226|15.199|96.93|13.83|2023/05/20 02:44:04|
|<a href="https://huggingface.co/TheBloke/Vigogne-Instruct-13B-GGML" target="_blank">Vigogne-Instruct 13B-8_0</a>|60.62|137|226|19.534|127.95|13.83|2023/05/25 21:58:38|
|<a href="https://huggingface.co/TheBloke/WizardLM-7B-V1.0-Uncensored-GGML" target="_blank">WizardLM-Unc-1.0 7B-8_0</a>|59.29|134|226|19.663|279.35|7.16|2023/06/18 12:59:11|
|<a href="https://huggingface.co/TheBloke/Project-Baize-v2-7B-GGML" target="_blank">Baize-v2 7B-8_0</a>|57.08|129|226|13.701|182.21|7.16|2023/05/24 11:38:45|
|<a href="https://huggingface.co/TheBloke/Wizard-Vicuna-7B-Uncensored-GGML" target="_blank">Wizard-Vicuna-Unc 7B-8_0</a>|56.64|128|226|8.412|81.52|7.16|2023/05/20 01:07:29|
|<a href="https://huggingface.co/TheBloke/koala-13B-GGML" target="_blank">Koala 13B-8_0</a>|54.42|123|226|40.111|422.20|13.83|2023/05/20 05:33:31|
|<a href="https://huggingface.co/TheBloke/VicUnlocked-30B-LoRA-GGML" target="_blank">VicUnlocked-LoRA 30B-8_0</a>|54.42|123|226|81.166|268.76|34.56|2023/05/20 22:52:56|
|<a href="https://huggingface.co/TheBloke/wizardLM-7B-GGML" target="_blank">WizardLM 7B-8_0</a>|52.65|119|226|14.250|196.31|7.16|2023/05/20 00:19:49|
|<a href="https://huggingface.co/TheBloke/koala-7B-GGML" target="_blank">Koala 7B-8_0</a>|50.44|114|226|26.019|473.10|9.76|2023/05/20 00:45:54|
|<a href="https://huggingface.co/TheBloke/GPT4All-13B-snoozy-GGML" target="_blank">GPT4All-Snoozy 13B-8_0</a>|46.90|106|226|14.843|93.89|13.83|2023/05/20 03:14:27|
