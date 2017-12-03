import json
import re
from collections import OrderedDict
from datetime import datetime
from django.http import HttpResponse
import bot.translate as translate

# Create your views here.
def chat(request):
    request_str = request.body.decode('utf-8')
    print(request_str)
    request_obj = json.loads(request_str)

    answer_text = translate.decode(request_obj['question'])

    answer = {
        "answer" : answer_text,
        "timestamp" : datetime.now().strftime('%Y/%m/%d %H:%M:%S')
    }
    return HttpResponse(json.dumps(answer),
     content_type='application/json; charset=UTF-8',
     status=None)
