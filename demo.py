import requests
import time
import speech_recognition as sr
from pydub import AudioSegment
from pydub.playback import play
import io
import pygame

import threading



def play_mp3(file_path):
    pygame.mixer.init()
    pygame.mixer.music.load(file_path)
    pygame.mixer.music.play()

openrouter_api_key = "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"
your_site_url = "https://www.makemybrain.com/"
your_site_name = "MakeMyBrain"
messages= [
            {"role": "system", "content": "Give very short answer in not more than 15 words."}
        ]

def getReply(messages,openrouter_api_key=openrouter_api_key, your_site_url=your_site_url, your_site_name=your_site_name):
    api_url = "https://openrouter.ai/api/v1/chat/completions"

    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {openrouter_api_key}",
        "HTTP-Referer": your_site_url,
        "X-Title": your_site_name,
    }

    payload = {
        "model": "openai/gpt-4-32k",
        "messages": messages
    }

    response = requests.post(api_url, headers=headers, json=payload)

    if response.status_code == 200:
        return response.json()
    else:
        print(f"Error: {response.status_code}")
        print(response.text)
        return None
    
import requests

def generate_voice(text,ind):
    api_key = "84945448658e9027302e9134abaa1eed"
    voice_id = "LcfcDJNUP1GQjkzn1xUU"
    api_endpoint = f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}/stream"

    payload = {
        "text": text,
        "model_id": "eleven_monolingual_v1",
        "voice_settings": {
            "stability": 0.5,
            "similarity_boost": 0.5
        }
    }

    headers = {
        "accept": "audio/mpeg",
        "xi-api-key": api_key,
        "Content-Type": "application/json"
    }
    params = {
        "optimize_streaming_latency": 0  # Add the query parameter here
    }

    try:
        response = requests.post(api_endpoint, json=payload, headers=headers, params=params)
        response.raise_for_status()
        
        with open("reply"+str(ind)+".mp3", "wb") as f:
            f.write(response.content)
        
        print(f"Voice generated and saved as reply.mp3")
        play_mp3('reply.mp3')
    except Exception as e:
        print(f"Error generating or playing voice: {e}")

messages_for_chaplusi=[
            {"role": "system", "content": "Reading the context just give a pickup line of the conversation sympathising the user in not more than 15 words."}
        ]

def get_chaplusi(messages,openrouter_api_key=openrouter_api_key, your_site_url=your_site_url, your_site_name=your_site_name):
    api_url = "https://openrouter.ai/api/v1/chat/completions"

    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {openrouter_api_key}",
        "HTTP-Referer": your_site_url,
        "X-Title": your_site_name,
    }

    payload = {
        "model": "openai/gpt-4-32k",
        "messages": messages
    }

    response = requests.post(api_url, headers=headers, json=payload)

    if response.status_code == 200:
        return response.json()
    else:
        print(f"Error: {response.status_code}")
        print(response.text)
        return None

def SlowPrint(text):
    words = text.split()
    for word in words:
        print(word, end=' ', flush=True)
        time.sleep(0.3)
    print()

def get_chaplusi_thread(messages_for_chaplusi,results,ind):
    if(ind<2):
        results[0]=""
        return
    chaplusi_result = get_chaplusi(messages_for_chaplusi)
    results[0]= chaplusi_result

def print_chaplusi_thread(chaplusi):
    if not chaplusi:
        return
    chaplusi=dict(chaplusi)
    chaplusi=chaplusi['choices'][0]['message']['content']
    print("KairaChaplusi: ")
    SlowPrint(chaplusi)

def VoiceAssistanceBot():

    print("Voice Assistance Bot is ready. Speak something!")

    ind=0
    while True:
        try:
            #request chaplusi
            #chaplusi=get_chaplusi(messages_for_chaplusi)
            # result_lock = threading.Lock()
            results=[""]
            chaplusi_thread = threading.Thread(target=get_chaplusi_thread, args=(messages_for_chaplusi,results,ind))
            chaplusi_thread.start()

            user_input = input("User: ")
            temp={}
            temp['role']="user"
            temp['content']=user_input
            messages.append(temp)
            messages_for_chaplusi.append(temp)
            
            chaplusi_thread.join()
            chaplusi_result = results[0]

            chaplusi_print_thread = threading.Thread(target=print_chaplusi_thread, args=(chaplusi_result,))
            chaplusi_print_thread.start()
            response_data = getReply(messages)
            response_data=dict(response_data)
            bot_reply=response_data['choices'][0]['message']['content']

            chaplusi_print_thread.join()

            print("Kaira: ")
            SlowPrint(bot_reply)
            ind=ind+1
            # generate_voice(bot_reply,ind)
            temp2={}
            temp2['role']="system"
            temp2['content']=bot_reply

            messages.append(temp2)
            messages_for_chaplusi.append(temp2)
        except sr.WaitTimeoutError:
            print("Timeout. Please speak again.")
            continue
        except sr.UnknownValueError:
            print("Could not understand audio. Please speak again.")
            continue
        except sr.RequestError as e:
            print(f"Error connecting to Google Speech Recognition service: {e}")
            break
    # time.sleep(1)  # Delay before next iteration

if __name__ == "__main__":
    VoiceAssistanceBot()
