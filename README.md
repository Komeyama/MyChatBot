# MyChatBot

## 【アプリケーション名】

    MyChatBot
  
## 【履歴】

    新規作成 :2017/11/26  
    修正1   :2017/12/11 返答時間を短くするためにmodelをviews.py内で作成する処理に変更した。結果、大幅に返答時間が短縮された。
## 【動作確認環境】

* macOS 10.12.6

* centOS 7


## 【内容】

* Tensorflow1.3のseq2eqモデルのチュートリアル[1]でチャットボットを作成しました。

* 学習データは、約600パターンです。

* WebフレームワークはDjangoを使用しました。[2]
  
## 【使い方】

1. ローカル内に適当な名前のディレクトリを作成し、その中にMyChatBotリポジトリ内の「MyChatbot」「chat」「routing」「static」「bot」「manage.py」を配置する。

2. 1.で作成したディレクトリ内で、次のコマンドを打ってWebサーバを立ち上げる。> python manage.py runserver 8080

3. http://127.0.0.1:8080/  
   をブラウザで開く。　　　　

    ※ このアプリを動かすためには、Python3、Tensorflow1.3、Django、MeCabがインストールされていることが前提です。  
    ※ 参考文献3にあるような事象が発生する場合は、Tensorflow1.3インストールディレクトリ以下  
       /contrib/legacy_seq2seq/python/ops内のseq2seq.pyをリネームしてMyChatbotリポジトリ内のseq2seq.pyを配置する。  
         
## 【参考文献】

1. Tensorflow Sequence-to-Sequence Models https://www.tensorflow.org/versions/r1.3/tutorials/seq2seq  

2. 古谷愛 (2017)「Pythonプログラミング教室 環境づくりからWebアプリが動くまでの2日間コース」SBクリエイティブ

3. Seq2Seq Tutorial does not work #1733　https://github.com/tensorflow/models/issues/1733
