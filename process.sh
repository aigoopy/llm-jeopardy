#! /usr/bin/bash				
# exec options
exe_path=/media/pong/data/repos/llama.cpp/main
model_path=/media/pong/data/models/ggml/vicuna/13B/ggml-vicuna-13b-1.1-q4_0.bin
question_file=/media/pong/data/repos/llm-jeopardy/questions.txt
output_file=/media/pong/data/repos/llm-jeopardy/ggml-vicuna-13b-1.1-q4_0.txt
opts="-t 48"

counter=1

echo 'Running'
while IFS= read -r question
do
  exe_cmd="$exe_path "$opts" -p "\"$question\"" -m ""\"$model_path\""" >> ""\"$output_file\"" 
  echo "" >> "$output_file"
  echo "-----------------------------------------------" >> "$output_file"
  echo $counter
  echo "$question"
  eval "$exe_cmd"
  counter=$((counter+1)) 
done < "$question_file"
