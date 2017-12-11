#2017/12/11追加--------
from __future__ import absolute_import
from __future__ import division
from __future__ import print_function
#---------------------

import json
import re
from collections import OrderedDict
from datetime import datetime
from django.http import HttpResponse
import bot.translate as translate

#2017/12/11追加----------------
import math
import os
import random
import sys
import time
import logging
import MeCab
import numpy as np
from six.moves import xrange  # pylint: disable=redefined-builtin
import tensorflow as tf
import bot.data_utils as data_utils
import bot.seq2seq_model as seq2seq_model

FLAGS = tf.app.flags.FLAGS
_buckets = [(5, 10), (10, 15), (20, 25), (40, 50)]

def create_model(session, forward_only):
  """Create translation model and initialize or load parameters in session."""
  dtype = tf.float16 if FLAGS.use_fp16 else tf.float32
  model = seq2seq_model.Seq2SeqModel(
      FLAGS.from_vocab_size,
      FLAGS.to_vocab_size,
      _buckets,
      FLAGS.size,
      FLAGS.num_layers,
      FLAGS.max_gradient_norm,
      FLAGS.batch_size,
      FLAGS.learning_rate,
      FLAGS.learning_rate_decay_factor,
      forward_only=forward_only,
      dtype=dtype)
  ckpt = tf.train.get_checkpoint_state(FLAGS.train_dir)
  if ckpt and tf.train.checkpoint_exists(ckpt.model_checkpoint_path):
    print("Reading model parameters from %s" % ckpt.model_checkpoint_path)
    model.saver.restore(session, ckpt.model_checkpoint_path)
  else:
    print("Created model with fresh parameters.")
    session.run(tf.global_variables_initializer())
  return model

sess = tf.Session()
model = create_model(sess, True)
#------------------------------------



# Create your views here.
def chat(request):
    request_str = request.body.decode('utf-8')
    print(request_str)
    request_obj = json.loads(request_str)

    #answer_text = translate.decode(request_obj['question']) #2017/12/11　コメントアウト
    answer_text = translate.decode(request_obj['question'],sess,model) # 2017/12/11 引数にsess,modelを追加

    answer = {
        "answer" : answer_text,
        "timestamp" : datetime.now().strftime('%Y/%m/%d %H:%M:%S')
    }
    return HttpResponse(json.dumps(answer),
     content_type='application/json; charset=UTF-8',
     status=None)
