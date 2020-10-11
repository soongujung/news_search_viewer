import React from 'react';
import NewsItem from "../item/NewsItem";
import './NewsList.css';
import '../item/NewsItem.css';
import usePromise from "../../../lib/usePromise";
import axios from 'axios';

const NewsList = ({kind}) => {

    const sampleNewsItem1 = {
        url : 'https://www.hankookilbo.com/News/Read/A2020101110120003346',
        urlToImage : 'https://newsimg.hankookilbo.com/cms/articlerelease/2020/10/11/34d27534-e518-4de8-a588-58b27f3a2ca0.jpg?t=20201011015117',
        description : '총 58조4,000억원을 끌어모은 빅히트엔터테인먼트 일반 공모주 청약에서 투자자 한 명이 손에 쥔 최다 주식 수는 113주인 것으로 파악됐다. 이 투자자가 빅히트 주식을 배정 받기 위해 넣은 청약증거금은 43억원에 달했다.  11일 금융투자업계에 따르면 빅히트 상장 주관사인 NH투자증권, 한국투자증권, 미래에셋대우, 키움증권 등 4개사는 지난 주 진행된',
        title: '빅히트 공모주 큰손도 70대... 43억 넣어 113주 받은 투자자도 - 한국일보',
        author: 'https://www.facebook.com/hkilbo',
        content: '1 ()\\r\\n ( ) ( ) (hankookilbo.com) , .\\r\\n2 ( )\\r\\n1. .\\r\\n (ID) .\\r\\n .\\r\\n , , .\\r\\n .\\r\\n (ID) .\\r\\n (ID) .\\r\\n , PDA, , IPTV .\\r\\n , , .\\r\\n2. 1 , .\\r\\n3 ( )\\r\\n1. .\\r\\n2. ( ) .\\r\\n3. 1 30 . , , .\\r\\n4. .\\r\\n5. 15 .\\r\\n4 ( )\\r\\n1. , .\\r… [+883 chars]',
        publishedAt: '2020-10-11T01:51:09Z'
    };

    const sampleNewsItem2 = {
        author : null,
        title : "공정위, '플랫폼법' 개정 전담 조직 출범 - 한국경제",
        description : "공정위, '플랫폼법' 개정 전담 조직 출범, 소비자 피해 사례 등 전방위 조사",
        url : 'https://www.hankyung.com/economy/article/2020101156261',
        urlToImage : 'https://img.hankyung.com/img/hk_news.png?v=20200519',
        publishedAt : '2020-10-11T07:46:37Z',
        content : '· 3(· · ) . 3 , \' 3\' . , 5 . . . 19 . 3 , ?'
    };

    const sampleNewsItem3 = {
        author : null,
        title : "43억 청약한 '큰손' 투자자, 빅히트 113주 '최다 배정' - 한국경제",
        description : "43억 청약한 '큰손' 투자자, 빅히트 113주 '최다 배정', 1700만원 납입자 1주 받아 70대 투자자 평균 4.7억 청약",
        url : 'https://www.hankyung.com/finance/article/2020101155891',
        urlToImage : 'https://img.hankyung.com/img/hk_news.png?v=20200519',
        publishedAt : '2020-10-11T07:41:02Z',
        content : "584000 ‘’ 43 113 .12 NH, , , 4 NH 864000 113 . 135000 1525. 432000 . 208800 .\\r\\n1700 . 648182 NH 1 2025 , (555584) 23625000. (185195) 4050 1 . (37039) 16875000 1 .\\r\\n1 70. 70 47000 12 . 70 1 37000~3800… [+54 chars]"
    };

    const sampleNewsItem4 = {
        author : "전북투데이",
        title : "수도권 임대등록주택 27.2만채 연내 말소…2년 내 '매물' 쏟아진다 - 전북투데이",
        description : "등록임대주택 중 폐지된 유형인 단기임대와 아파트 장기 매입임대가 수도권에서 연말까지 총 27만1890채 말소된다. 해당 주택은 빠르면 내년, 늦어도 2년 내엔 시장에 유입될 수 있다는 계산이다.11일 국토교통부가 국회 국토교통위원회 박상혁 의원에게 제출한 자료에 따르면 연말까지 폐지 유형에 속해 의무 임대기간 종료와 함께 자동말소되는 전국 등록임대는 46만7885채이다.앞서 정부는 7·10 대책을 통해 4년 단기임대와 8년 장기임대 중 아파트 매입 임대 유형을…",
        url : "http://www.jtnews.kr/news/articleView.html?idxno=22203",
        urlToImage : "http://www.jtnews.kr/news/thumbnail/202010/mn_22203_20201011163405_1_v150.jpg",
        publishedAt : "2020-10-11T07:34:00Z",
        content : "271890 . , 2 .\r\n11 467885.\r\n7·10 4 8 8 18 .\r\n8 403945 . 7·10 1594000 4 1 .\r\n271890(58.1%) . 142244(52.3%) . 108503, 21143 . (19254) (17664), (12838), (9245) .\r\n( ) 582971, 2022 724717 2023 827264 .\r\n… [+93 chars]"
    };

    const sampleNewsItem5 = {
        author : "안희권",
        title : "애플 아이폰12, 비싸지고 많아진다 - 아이뉴스24",
        description : "다음주 10월 13일(화) 오전 10시, 한국시간 10월 14일(수) 새벽 2시 온라인 신제",
        url : "http://www.inews24.com/view/1306000",
        urlToImage : "http://img.lb.inews24.com/facebookexternalhit/face/626x352/image_gisa/202010/1600747229726_1_154152.jpg",
        publishedAt : "2020-10-11T07:33:00Z",
        content : "[24 ] ( 12) 3 .\r\n 10 13() 10, 10 14() 2 . 2 .\r\n . 12 , 12, 12 , 12 4 .\r\n 12 4 [EAP]\r\n12 , ?\r\n1 4 . 5.4 12 , 6.1 12 12 , 6.7 12 4 .\r\n OLED . OLED ' XDR ' .\r\n 5(5G) OLED , , .\r\n 12 50 . 12 64~256GB 699… [+273 chars]"
    };

    const newsList = [];
    newsList.push(sampleNewsItem4);
    newsList.push(sampleNewsItem1);
    newsList.push(sampleNewsItem3);
    newsList.push(sampleNewsItem2);
    newsList.push(sampleNewsItem5);

    const keywordObj = {
        primary_income_account: '%EB%B3%B8%EC%9B%90%EC%86%8C%EB%93%9D%EC%88%98%EC%A7%80',
        good_balance: '%EC%83%81%ED%92%88%EC%88%98%EC%A7%80',
        service_balance: '%EC%84%9C%EB%B9%84%EC%8A%A4%20%EC%88%98%EC%A7%80',
        exchange_won_dollar: '%EC%9B%90%EB%8B%AC%EB%9F%AC%20%ED%99%98%EC%9C%A8',
        exchange_renmibi_dollar: '%EC%9C%84%EC%95%88%ED%99%94%20%ED%99%98%EC%9C%A8'
    };

    const keyword = keywordObj[kind];
    const search = 'business';
    // const query = `https://openapi.naver.com/v1/search/news.json?query=${keyword}&display=30&start=1&sort=date`
    const query = `https://newsapi.org/v2/top-headlines?country=kr${search}&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`;
    // TODO:: Axis CORS 에러 잡아야함. 유독 네이버만 거부...
    // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // axios.defaults.headers.common ['X-Naver-Client-Id'] = '--';
    // axios.defaults.headers.common ['X-Naver-Client-Secret'] = '--';

    // axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
    // axios.defaults.headers.get['X-Naver-Client-Id'] = '--';
    // axios.defaults.headers.get['X-Naver-Client-Secret'] = '--';

    const [loadingFlag, responseData, errorData] = usePromise(() => {
        return axios.get(query);
    }, [kind]);

    if(loadingFlag){
        return (
            <div className="newsListContainer">
                대기중 ...
            </div>
        );
    }

    if(!responseData){
        return null;
    }

    if(errorData){
        return (
            <div className="newsListContainer">
                에러 발생!
            </div>
        );
    }

    return (
      <div className="newsListContainer">
          {
              newsList.map(
                  news => (<NewsItem key={news.url} news={news} />)
              )
          }
      </div>
    );
};

export default  NewsList;