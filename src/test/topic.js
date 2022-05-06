
    // var 변수의 영역은 블록 안으로 제한되지 않는다

    var topic = "자바스크립트"

    if (topic) {
      var topic = "리액트"
      console.log('블록', topic)
    }

    console.log('글로벌', topic)

