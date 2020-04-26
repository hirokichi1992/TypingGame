'use strict';

{
    const words = [
        'java',
        'c',
        'c+',
        'c++',
        'c#',
        'javascript',
        'html',
        'css',
        'php',
        'ruby',
        'go',
        'python',
    ];

    // タイピングワードをランダムに表示させる
    let word = words[Math.floor(Math.random() * words.length)];
    let loc = 0;
    let score = 0;
    let miss = 0;
    // 制限時間(ミリ秒単位10^-3)
    const timeLimit = 3 * 1000;
    // 開始時間
    let startTime;

    const target = document.getElementById('target');
    const scoreLabel = document.getElementById('score');
    const missLabel = document.getElementById('miss');
    const timerLabel = document.getElementById('timer');

    // 入力した単語は'_'と表示する
    function updateTarget() {
        let placeholder = '';
        for (let i = 0; i < loc; i++) {
            placeholder += '_';
        }
        // 入力済文字'_'+残り文字をloc位置から最後まで表示(.subString(loc))
        target.textContent = placeholder + word.substring(loc);
    }

    // 残り時間を計算
    function updateTimer() {
        const timeLeft = startTime + timeLimit - Date.now();
        // 秒単位で表示(1/1000)し、小数点以下2桁まで表示(toFixed(2))
        timerLabel.textContent = (timeLeft / 1000).toFixed(2);
    }

    // ゲームスタート時の文字切替え
    window.addEventListener('click', () => {
        target.textContent = word;
        // ゲーム開始時刻を代入
        startTime = Date.now();
        updateTimer();
    });

    // ゲーム中でキーボードを押した時のイベント設定
    window.addEventListener('keydown', e => {
        // OK
        if (e.key === word[loc]) {
            loc++;
            // 最後まで入力すると次のwordに切り替える
            if (loc === word.length) {
                word = words[Math.floor(Math.random() * words.length)];
                loc = 0;
            }
            updateTarget();
            score++;
            scoreLabel.textContent = score;
            // NG
        } else {
            miss++;
            missLabel.textContent = miss;
        }
    });
}