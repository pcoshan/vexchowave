FROM arm64v8/ubuntu

WORKDIR /scripts

RUN apt-get update && \
    apt-get install audacity -y && \
    apt-get install python3.6 -y 

COPY testscript.py /scripts

RUN python3 testscript.py
