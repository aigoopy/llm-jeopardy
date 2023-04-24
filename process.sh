#! /usr/bin/bash				
# exec options
exe_path=/media/pong/data/repos/alpaca.cpp/chat
model_path=/media/pong/data/models/ggml/alpaca-lora/65B/ggml-model-q4_0.bin
question_file=/media/pong/data/repos/llm-jeopardy/questions.txt
output_file=/media/pong/data/repos/llm-jeopardy/alpaca-lora-65B-4bit.txt
opts="-t 48"

counter=1

echo 'Running'
while IFS= read -r question
do
  exe_cmd="$exe_path -p "\"$question\"" "$opts" -m ""\"$model_path\""" >> ""\"$output_file\"" 
  echo $counter
  echo "$question"
  eval "$exe_cmd"
  counter=$((counter+1)) 
done < "$question_file"
