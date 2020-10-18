import React from 'react';
import NewsItem from "../item/NewsItem";
import './NewsList.css';
import '../item/NewsItem.css';
import usePromise from "../../../lib/usePromise";
import axios from 'axios';

const NewsList = ({match}) => {

    const kind = match.params.kind || 'primary_income_account';
    console.log('kind >>> ', kind);

    // https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2vGCWljlevTiOtTLF8Ghr9_3rzbFXp3Woqw&usqp=CAU
    // https://vrthumb.imagetoday.co.kr/2016/01/05/tid064t001569.jpg
    const keywordObj = {
        primary_income_account: {
            keyword: '%EB%B3%B8%EC%9B%90%EC%86%8C%EB%93%9D%EC%88%98%EC%A7%80',
            // logoUrl: 'https://www.urbanbrush.net/web/wp-content/uploads/edd/2018/04/web-20180412080144788147.png'
            // logoUrl: 'https://www.urbanbrush.net/web/wp-content/uploads/edd/2018/04/web-20180401124546916510.png'
            // logoUrl: 'https://www.urbanbrush.net/web/wp-content/uploads/edd/2018/02/web-20180212061037839632.png'
            logoUrl: 'https://vrthumb.imagetoday.co.kr/2016/01/05/tid064t001569.jpg'
        },
        good_balance: {
            keyword: '%EC%83%81%ED%92%88%EC%88%98%EC%A7%80',
            logoUrl: 'https://dimg.donga.com/wps/NEWS/IMAGE/2020/02/04/99539643.1.jpg'
        },
        service_balance: {
            keyword: '%EC%84%9C%EB%B9%84%EC%8A%A4%20%EC%88%98%EC%A7%80',
            logoUrl: 'https://preview.clipartkorea.co.kr/2018/05/03/ti323a5720.jpg'
        },
        exchange_won_dollar: {
            keyword: '%EC%9B%90%EB%8B%AC%EB%9F%AC%20%ED%99%98%EC%9C%A8',
            // logoUrl: 'https://en.pimg.jp/044/807/890/1/44807890.jpg'
            // logoUrl: 'https://cdn.crowdpic.net/list-thumb/thumb_l_BA41C0111C3CEA675FC927963461B419.jpg'
            // logoUrl: 'https://vrthumb.imagetoday.co.kr/2016/01/05/tid064t001569.jpg'
            logoUrl: 'https://www.urbanbrush.net/web/wp-content/uploads/edd/2018/11/urbanbrush-20181109015541516303.png'
        },
        exchange_renmibi_dollar: {
            keyword: '%EC%9C%84%EC%95%88%ED%99%94%20%ED%99%98%EC%9C%A8',
            // logoUrl: 'https://us.123rf.com/450wm/artemstepanov/artemstepanov1607/artemstepanov160700208/59886326-%EC%95%B1%EC%9D%B4%EB%82%98-%EC%9B%B9-%EC%82%AC%EC%9D%B4%ED%8A%B8%EC%9D%98-%EC%9D%BC%EB%B3%B8-%EC%97%94%ED%99%94-%EB%98%90%EB%8A%94-%EC%A4%91%EA%B5%AD-%EC%9C%84%EC%95%88%ED%99%94-%EA%B8%B0%ED%98%B8-%ED%8F%89%EB%A9%B4-%EC%95%84%EC%9D%B4%EC%BD%98.jpg?ver=6'
            logoUrl: 'https://png.pngtree.com/png-vector/20190301/ourlarge/pngtree-vector-exchange-rate-icon-png-image_747117.jpg'
        }
    };

    const keyword = keywordObj[kind].keyword;
    const logoUrl = keywordObj[kind].logoUrl;
    const naverNewsQuery = `http://localhost:8080/newsapi/naver/${keyword}`

    const [loadingFlag, responseData, errorData] = usePromise(() => {
        // return axios.get(query);
        return axios.get(naverNewsQuery);
    }, [kind]);

    console.log('>>>>> ', loadingFlag, responseData, errorData)

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

    const { items } = responseData.data;
    return (
      <div className="newsListContainer">
          {
              items.map(
                  news => (<NewsItem key={news.link} news={news} logoUrl={logoUrl} />)
              )
          }
      </div>
    );
};

export default  NewsList;