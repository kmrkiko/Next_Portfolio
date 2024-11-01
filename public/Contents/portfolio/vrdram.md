# Unity を用いた VR ゲーム試作

## 概要

- **期間**:3 ヶ月
- **人数**:1 人
- 制作環境
  - Windows11
  - Unity 2021.3.14f1
    - Platform:Android
    - XR の設定:XR Interaction Toolkit,
      XR Plugin Management(Oculus)
    - MetaQuest2

## ゲーム詳細

- VR 上でドラムの体験・練習ができるゲーム
  - コントローラー（スティック）でドラムをたたくと音が出る
  - ゲームを開始すると音楽が流れノーツが流れてくる
    <video controls>
    <source src="/videos/Dramvideo.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video>
    ※音が出ます

## 制作した理由

- 現実では体験が難しい事柄の練習や訓練に VR を活用する可能性を感じているため
  - ドラム演奏は、コストやスペースの制約から実際に練習するハードルが高い
  - VR なら HMD さえあれば仮想空間で練習できるため、より多くの人が手軽に体験できる
  - 同様に、職業訓練や世界中の文化体験などにも応用することで、新たな価値を創出できる

## 開発詳細

#### スティックの操作

- スティックの操作は、 XR Interaction Toolkit や InputSystem を用いて行う
  ![Stick](/images/stick.png)

#### 音楽/ノーツの再生

- Timeline や InputSystem を用いて音楽を再生
- ノーツも timeline を使って制御
- 音楽は手持ちの CD の楽曲からドラム音を AI で除去して作成
- ノーツが流れてきて 3 秒後のタイミングで打てば hit
  ![Timeline](/images/timeline.png)
  ![code](/images/notescode.png)

## 今後の改良点

- デザインや UI の改善
  - ノーツや背景、2D の UI が仮のものなので変更したい
- バックエンドとのつなぎ込み
  - 曲やノーツのデータをバックエンドに配置し、ロードする形にしたい

## 学び

- ゼロからゲーム制作を行う際の大変さと注意点
  - 初めての個人制作であったため、何も決まっていない状態から要件定義や設計を進める難しさを痛感
  - 初期のアーキテクチャ設計は、今後の拡張性や開発効率、品質に大きな影響を与えることが分かり、その重要性を強く認識
