FROM python:3.6

EXPOSE 8080

WORKDIR /book_daemon

COPY . /book_daemon
RUN pip install -r requirements.txt

CMD python main.py