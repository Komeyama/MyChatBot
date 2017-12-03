$(function() {
  $('#question_form').submit(function() {
    event.preventDefault();

    now = new Date();
    timestamp = now.toLocaleString();

    question = $('#question').val();
    message(question, timestamp, 'q_box');
    $.ajax({
      type : 'POST',
      url : '/routing/chat/',
      datatype : "JSON",
      data : JSON.stringify({
        'question' : question
      }),
      success : function(data) {
        message(data.answer, data.timestamp, 'a_box');
      }
    });

    $('#question').val("");

    $('body').delay(100).animate({
      scrollTop: $(document).height()
    },1500);

    return false;
  });
});

function message(msg, timestamp, q_or_a) {
  box = $('<div></div>', {
    class : q_or_a
  });

  if (q_or_a == 'a_box') {
    /*faceicon*/
    faceicon = $('<div></div>').attr('class', 'faceicon');
    faceicon.append($('<img>').attr({src : "/static/images/face_01.jpg",alt : "顔"}));
    box.append(faceicon);

    /*chatting*/
    chatting = $('<div></div>').attr('class', 'chatting');
    box.append(chatting);

    /*text*/
    text = $('<div></div>').attr('class', 'a_text');
    text.append($('<p></p>').text(msg));
    text.append($('<span></span>').text(timestamp));
    box.append(text);

    /*返答が返ってきたら送信をクリックできるようにする*/
    $('#send').prop('disabled', false);
  }else if (q_or_a == 'q_box') {
    /*faceicon*/
    /*
    faceicon = $('<div></div>').attr('class', 'faceicon');
    faceicon.append($('<img>').attr({src : "/static/images/face_02.jpg",alt : "顔"}));
    box.append(faceicon);
    */

    /*chatting*/
    chatting = $('<div></div>').attr('class', 'chatting');
    box.append(chatting);

    /*text*/
    text = $('<div></div>').attr('class', 'q_text');
    text.append($('<p></p>').text(msg));
    text.append($('<span></span>').text(timestamp));
    box.append(text);

    /*返答が返ってくるまで送信できないようにする*/
    $('#send').prop('disabled', true);
  }

  $('#chat').append(box);
}
