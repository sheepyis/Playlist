$("#question").hide();
$("#result").hide();

var num=1;
var q={
    1:{
        "title": "주말에 친구와 함께 음악 페스티벌을 가게 되었어. 이때 너는?", 
        "type": "EI", 
        "A": "새로운 사람을 만나는 건 너무 신나! 옆에 모르는 사람이랑도 함께 즐기고 싶어.",
        "B":"친구랑 맛있는 거 먹으면서 조용히 힐링하고 싶어."
    },

    2:{
        "title": "길을 걷다가 당신의 취향인 음악을 발견했어. 그 음악은?", 
        "type": "SN", 
        "A": "멜로디가 신난 게 딱 내 취향이야! 노래 제목이 뭐지?",
        "B":"가사가 내 얘기 같아 공감 돼. 플레이리스트에 담아놔야지"
    },

    3:{
        "title": "친구가 우울해서 들을만한 노래를 추천해달라고 할 때, 당신의 행동은?", 
        "type": "TF", 
        "A": "우울할 때는 이 노래가 짱이지. 이거 들어봐!",
        "B":"왜 우울한데? 무슨 일 있었어?"
    },

    4:{
        "title": "갑자기 친구와 길을 지나가다가 버스킹을 하고 있는 모습을 봤어. 이때 당신은?", 
        "type": "JP", 
        "A": "버스킹을 구경하고 싶지만, 우리는 다음에 할 일이 있어. 얼른 가자!",
        "B":"버스킹 공연은 지금 아니면 볼 수가 없어. 있을 때 봐야 해!"
    },

    5:{
        "title": "노래방에 가서 친구가 노래를 부르는 상황이야. 이때 당신의 행동은?", 
        "type": "FT", 
        "A": "잘부른다 너~ 친구가 부르는 노래에 탬버린을 흔들면서 호응 해준다.",
        "B":"다음에 뭐 부르지? 다음에 부를 노래를 고른다."
    },

    6:{
        "title": "친구가 학교 축제 무대에서 같이 노래를 부르자고 할 때, 당신은?", 
        "type": "PJ", 
        "A": "아직 멀었으니까 노래만 간단히 정하고 천천히 연습하자!",
        "B":"어느 노래할 지 정하고 꾸준히 연습해서 합을 맞춰보자!"
    },

    7:{
        "title": "음악 동아리에 들어간 당신, 축제가 끝나고 뒷풀이가 잡혀있어. 이때 당신의 행동은?", 
        "type": "IE", 
        "A": "조금은 힘들지만 뒷풀이 가야지.. 지인과 함께 즐긴다!",
        "B":"뒷풀이 행사에 내가 빠질 수는 없지! 무조건 간다"
    },

    8:{
        "title": "친구가 음악이란 무엇인지 당신에게 질문을 했을 때 당신은?", 
        "type": "SN", 
        "A": "팝송, K-POP, 발라드 등 여러 종류로 나뉘지!",
        "B":"피아노, 드럼, 가수, 베토벤.. 음악의 세계는 너무 광범위해."
    },

    9:{
        "title": "친구와 연습 시간을 잡았는데 갑자기 친구가 약속 시간을 변경하자고 할 때, 당신의 생각은?", 
        "type": "JP", 
        "A": "이유가 있어 변경하자고 했겠지만, 갑자기 일정을 바꾸는 건 기분이 나빠.",
        "B":"늦게 일어났나 보네. 뭐 늦을 수도 있지 알았어~"
    },

    10:{
        "title": "친구와 축제 때 부를 노래를 정하고 있는데 의견 조율이 쉽지 않아. 이때 당신은?",
        "type": "TF", 
        "A": "내가 생각했을 때 친구와 내가 둘다 잘할 수 있을 것 같은 노래를 강하게 주장한다.",
        "B":"이런 일로 다투기는 싫어. 친구의 의견을 따라간다."
    },

    11:{
        "title": "음악을 들으면서 자신의 방법으로 음악을 표현해보래. 이때 당신은?", 
        "type": "NS", 
        "A": "음악을 들으니 마음이 공감 돼. 이런 나의 마음을 표현하기 위해 시가 딱이지!",
        "B":"시처럼 글로 쓰는 것보다는 그림으로 표현하는 게 더 간단하고 좋아."
    },

    12:{
        "title": "하루하루를 바쁘게 살았던 당신, 오늘은 아무 일정이 없는 날이다. 당신의 계획은?", 
        "type": "EI", 
        "A": "집에만 있을 수는 없어. 친구와 한강가서 맛있는 것도 먹고 야경도 보고 싶어!",
        "B":"일상을 바쁘게 보내느라 이미 너무 지쳤어. 집에서 아무 것도 안하고 쉴래."
    },



}

var result={
    "ISTJ": {"mbti":"감성에 취한 지휘자", 
            "photo": "<img src='./image/ISTJ.JPG'>",
            "music": "<img src='./image/ISTJ_music.JPG'>"
        },

    "ISFJ": {"mbti":"무대를 빛내는 가수",
            "photo": "<img src='./image/ISFJ.JPG'>",
            "music": "<img src='./image/ISFJ_music.JPG'>"
        },

    "INFJ": {"mbti":"자신감있고 당당한 댄서",
            "photo": "<img src='./image/INFJ.JPG'>",
            "music": "<img src='./image/INFJ_music.JPG'>"
        },

    "INTJ": {"mbti":"다재다능한 음악 감독",
            "photo": "<img src='./image/INTJ.JPG'>",
            "music": "<img src='./image/INTJ_music.JPG'>"
        },

    "ISTP": {"mbti":"개성이 뚜렷한 편곡가",
            "photo": "<img src='./image/ISTP.JPG'>",
            "music": "<img src='./image/ISTP_music.JPG'>"
        },

    "ISFP": {"mbti":"예술적 감정을 지닌 작곡가",
            "photo": "<img src='./image/ISFP.JPG'>",
            "music": "<img src='./image/ISFP_music.JPG'>"
        },

    "INFP": {"mbti":"곡의 분위기를 살리는 성악가",
            "photo": "<img src='./image/INFP.JPG'>",
            "music": "<img src='./image/INFP_music.JPG'>"
        },

    "INTP": {"mbti":"의견을 수렴하는 음반 기획자",
            "photo": "<img src='./image/INTP.JPG'>",
            "music": "<img src='./image/INTP_music.JPG'>"
        },

    "ESTP": {"mbti":"때로는 비판적인 음악 평론가",
            "photo": "<img src='./image/ESTP.JPG'>",
            "music": "<img src='./image/ESTP_music.JPG'>"
        },

    "ESFP": {"mbti":"상황파악에 눈치빠른 음향 기사",
            "photo": "<img src='./image/ESFP.JPG'>",
            "music": "<img src='./image/ESFP_music.JPG'>"
        },

    "ENFP": {"mbti":"마음을 공감하는 음악 치료사",
            "photo": "<img src='./image/ENFP.JPG'>",
            "music": "<img src='./image/ENFP_music.JPG'>"
        },

    "ENTP": {"mbti":"다각적 시각인 음악 선생님",
            "photo": "<img src='./image/ENTP.JPG'>",
            "music": "<img src='./image/ENTP_music.JPG'>"
        },

    "ESTJ": {"mbti":"전통까지 사랑하는 음악 학자",
            "photo": "<img src='./image/ESTJ.JPG'>",
            "music": "<img src='./image/ESTJ_music.JPG'>"
        },

    "ESFJ": {"mbti":"준비성이 철저한 행사 음악 담당자",
            "photo": "<img src='./image/ESFJ.JPG'>",
            "music": "<img src='./image/ESFJ_music.JPG'>"
        },

    "ENFJ": {"mbti":"즉흥적이고 새로운 DJ",
            "photo": "<img src='./image/ENFJ.JPG'>",
            "music": "<img src='./image/ENFJ_music.JPG'>"
        },

    "ENTJ": {"mbti":"손으로 곡을 표현하는 연주가",
            "photo": "<img src='./image/ENTJ.JPG'>",
            "music": "<img src='./image/ENTJ_music.JPG'>"
        }
}



function start(){
    $("#start").hide();
    $("#question").show();
    next();
}

function next(){
    if(num==13){
        $("#question").hide();
        $("#result").show();
        var str="";
        ($("#EI").val()<1)?str+="I":str+="E";
        ($("#SN").val()<1)?str+="N":str+="S";
        ($("#TF").val()<1)?str+="F":str+="T";
        ($("#JP").val()<1)?str+="P":str+="J";
        $("#mbti").html(result[str]["mbti"]);
        $("#photo").html(result[str]["photo"]);
        $("#music").html(result[str]["music"]);
    }
    else{
        $(".progress-bar").attr('style','width:calc(100/12*'+num+'%)');
        $("#pgrNum").html(num+'/12');
        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        num++;
    }
}

$("#A").click(function(){
    var type=$("#type").val();
    var preValue=$("#"+type).val();
    $("#"+type).val(parseInt(preValue)+1);
    next();
});

$("#B").click(function(){
    next();
});

function replay(){
    location.reload();
}

//페이스북 공유
function shareFace() {
    var sendUrl = 'https://sheepyis.github.io/Playlist/test.html'; // 전달할 URL
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}

//카카오톡 공유
function shareKakao() {
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: '플레이리스트 유형테스트',    //카카오톡 전송 시 제목
            description: '#DJ #플레이리스트 #라벨스티커',   //카카오톡 전송 시 설명에 넣을 문구
            imageUrl: './image/main.png',
            link: {
                mobileWebUrl: 'https://sheepyis.github.io/Playlist/test.html',
                webUrl: 'https://sheepyis.github.io/Playlist/test.html',
            },
        },
        buttons: [
            {
                title: '플레이리스트 담으러 가기', //카카오톡 전송 시 버튼에 넣을 문구
                link: {
                    mobileWebUrl: 'https://sheepyis.github.io/Playlist/test.html',
                    webUrl: 'https://sheepyis.github.io/Playlist/test.html',
                },
            },
        ],
    })
}

function shareLink() {
    var url = 'https://sheepyis.github.io/Playlist/test.html';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    alert("클립보드에 복사되었습니다.")
}