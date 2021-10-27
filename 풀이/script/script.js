$(function(){

    // div#sideGNBLink 시작(사이드 GNB링크아이콘)
    let chkToF = true;
    $("#sideGNBLink").click(function() {
        $(this).toggleClass("applied");

        $("#sideMenuBG").fadeToggle(250);
        if (chkToF) {
            $("#sideMenuArea").animate({"right": "0"}, 250);
            chkToF = false;
        } else {
            $("#sideMenuArea").animate({"right": "-50%"}, 250);
            chkToF = true;
        }
    });
    // div#sideGNBLink 끝(사이드 GNB링크아이콘)
    // 갤러리 게시판 모든 게시글 출력 시작
    // 2차원 배열
    let array = [
        // (i, j)
        //        (0,0)        ,              (0,1)
        ["product_01.jpg","헤리터 시그니처 칼도마세트 (월넛)",
        //                    (0,2)                          (0,3)     (0,4)   (0,5)
        "월넛 색상의 헤리터 식과도&도마 세트", 355000,298000,5491],

        ["product_02.jpg",
        "헤리터 시그니처 칼도마세트 (하드메이플)",
        "하드메이플 색상의 헤리터 식과도&도마 세트", 355000,288000,243],

        ["product_03.jpg" ,"헤리터 칼 2종 세트",
        "", 278000,228000,2058],

        ["product_04.jpg" ,"헤리터 칼 2종 세트",
        "주방용 식도 + 과도", 118000,99000,3152],

        ["product_05.jpg" ,"헤리터 비건 에이프런",
        "자체개발 패브릭 앞치마", 99000,69000,160],

        ["product_06.png" ,"STANDARD CHINA 160",
        "해리터 중식도", 160000,139000,154],

        ["product_07.png" ,"헤리터 시그니처 팔각도마",
        "도마 + 도마프레임 + 칼블럭", 237000,206000,1535],

        ["product_08.jpg" ,"헤리터 키친 크로스 SET",
        "강화에서 온 소창행주", 26000,26000,388],

        ["product_09.png" ,"STANDARD 180(7”)",
        "주방용 식도", 79000,79000,173],

        ["product_10.jpg" ,"STANDARD 106(4”)",
        "주방용 과도", 39000,39000,160],

        ["product_11.png" ,"우드그레인 키친트레이",
        "", 39000,35000,3]
        ,
        ["product_12.png" ,"차콜스톤 워싱바",
        "", 29700,26800,12]
    ];

    // let array = ["product_01.jpg","product_02.jpg","product_03.jpg",
    //                   "product_04.jpg","product_05.jpg","product_06.png",
    //                   "product_07.png","product_08.jpg","product_09.png",
    //                   "product_10.jpg","product_11.png","product_12.png"];

    // let arrayGoodsName = ["헤리터 시그니처 칼도마세트 (월넛)",
    //                                    "헤리터 시그니처 칼도마세트 (월넛)",
    //                                    "헤리터 시그니처 칼도마세트 (월넛)",
    //                                    "헤리터 시그니처 칼도마세트 (월넛)",
    //                                    "헤리터 시그니처 칼도마세트 (월넛)",
    //                                    "헤리터 시그니처 칼도마세트 (월넛)",
    //                                    "헤리터 시그니처 칼도마세트 (월넛)",
    //                                    "헤리터 시그니처 칼도마세트 (월넛)",
    //                                    "헤리터 시그니처 칼도마세트 (월넛)",
    //                                    "헤리터 시그니처 칼도마세트 (월넛)",
    //                                    "헤리터 시그니처 칼도마세트 (월넛)"];

    let res = "";

    for (let i = 0; i < array.length ; i++) {
        res += "<div class='articleFrame'>";

        for (let j = 0; j < array[i].length; j++) {

            if (j==0) {
                res += "<div class='articleImage'>";
                res += "<img src='../images/"+array[i][j]+"' alt='이미지' width='317'>";
                res += "</div>";

            } else if ( j==1) {
                res += "<div class=goodsName'>"+array[i][j]+"</div>";

            } else if ( j==2) {
                res += "<div class='goodsDesc'>"+array[i][j]+"</div>";

            } else if ( j==3) {
                res += "<div class='price'>";
                res += "<span class='originPrice numComma'>"+array[i][j]+"</span>";

            } else if ( j==4) {
                res += "<span class='salePrice numComma'>"+array[i][j]+"</span>";
                res += "</div>";

            } else if ( j==5) {
                res += "<div class='replyArea'>";
                res += "<span class='reply numComma'>"+array[i][j]+"</span>";
                res += "</div>";
                res += "</div>";
            } 
            // if문 끝
        }
        // 외부 for문 끝
    
    }
    $("main#main").html(res);
    // 갤러리 게시판 모든 게시글 출력 끝

    // 숫자 천단위 구분 적용 시작
    let numDom = document.getElementsByClassName("numComma");
    // console.log("전체 숫자의 개수 : " + numDom.length);
    let tempNum;
    for (let i = 0; i < numDom.length; i++) {
        tempNum = Number(numDom[i].innerText);
        // console.log((i+1) + "번째숫자 : " + tempNum.toLocaleString());
        numDom[i].innerText = tempNum.toLocaleString();
    }
    // 숫자 천단위 구분 적용 끝
    
});


// let num = 123123456;
// console.log("num(원본값) : " + num);
// let setNum = num.toLocaleString();
// console.log("setNum(천단위 쉼표적용) : " + setNum);
// let closeComma = setComma.replace(/,/g,"");
// console.log("closeComma(쉼표 제거) : " + closeComma);