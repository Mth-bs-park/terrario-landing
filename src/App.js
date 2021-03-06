import React, { Component } from 'react';

import Navigation from './components/navigation/Navigation';
import Modal from './components/modal/Modal';

import Intro from './sections/intro/Intro';
import Personal from './sections/personal/Personal';
import Company from './sections/company/Company';
import Subscribe from './sections/subscribe/Subscribe';

import './App.css';
import $ from 'jquery';

class App extends Component {

  constructor() {
    super();

    const supportLanguages =  {
      'ko': {
        label: '한국어',
        flag: 'assets/img/flag/south-korea.png'
      },
      'en': {
        label: 'English',
        flag: 'assets/img/flag/united-states.png'
      }
    };
    const selectedLanguage = 'ko';

    this.texts = this.initText();
    const items = this.texts[selectedLanguage];

    this.state = {
      modalId: 'modal',
      supportLanguages,
      selectedLanguage,
      items
    };

    this.language = this.initText();
    this.items = this.state.items;

    this.changeLanguage = this.changeLanguage.bind(this);
    this.changeMember = this.changeMember.bind(this);
    this.openModal = this.openModal.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  render() {
    const state = this.state;
    const {items, modalId} = state;

    return (
      <div>
        <Navigation supportLanguages={state.supportLanguages}
                    selectedLanguage={state.selectedLanguage}
                    changeLanguage={this.changeLanguage}/>

        <div className="app-wrap">
          <Intro items={items.intro} click={this.openModal}/>
          <Personal items={items.personal} click={this.openModal}/>
          <Company items={items.company} click={this.openModal}/>
          <Subscribe items={items.subscribe} click={this.openModal}/>
        </div>
        <div>
          <Modal id={modalId} onConfirm={this.onConfirm}
                btnText={items.subscribe.btnText}
                items={items.subscribe.dropdown}
                changeMember={this.changeMember}
                placeholders={items.subscribe.placeholders}/>
        </div>
      </div>
    );
  }

  initText() {
    return {
      ko: {
       intro: {
         title: '부동산 투자의 혁신',
         content: {
           title: '건물주가 되어보세요',
           content: `건물을 통채로 살 수 없다면 작은 지분으로 시작해볼까요? 건물에서 발생하는 수익을 챙겨보세요.
           잠들지 않는 거래소에서 지분을 쉽고 빠르게 사고 팔 수 있습니다.`
         },
         btnText: '더 알아보기'
       },
       personal: {
         title: '개인투자자',
         items: [
           {
             img: '/assets/img/building.png',
             title: '억! 소리나는 빌딩',
             content: '부동산 투자의 진입장벽을 낮춰 소액투자자에게 안정적인 수익의 기회를 열어줍니다.'
           },
           {
             img: '/assets/img/trading.png',
             title: '내 돈은 내 맘대로!',
             content: '손쉽게 현금화 할 수 없었던 부동산 자산. 복잡한 절차와 비용없이 주식처럼 거래해보세요. 경제적 상황에 알맞게 유동성있는 자금관리가 가능합니다.'
           },
           {
             img: '/assets/img/search.png',
             title: '투명한 정보',
             content: '블록체인에서 관리되는 투명한 정보를 활용해 보다 정확하고 현명한 부동산투자를 할 수 있습니다.'
           },
           {
             img: '/assets/img/guard.png',
             title: '안정적인 수익률',
             content: '실물자산의 안정성과 평균 6%의 부동산 수익률을 누릴 수 습니다.'
           }
         ],
         btnText: '더 알아보기'
       },
       company: {
         title: '자산관리 회사',
         items: [
           {
             title: '손쉬운 자금 조달',
             content: `크라우드펀딩을 통해 손쉽게 자금을
             조달할 수 있습니다.`
           },
           {
             title: '투명한 자금 관리',
             content: `배당금의 분배, 건물당 수익률이
             별도의 노력없이 투명하게 기록됩니다.`
           },
           {
             title: '실시간 가치평가',
             content: `실시간 부동산 거래정보로부터 보다 정확한
             부동산의 가치를 파악 할 수 있습니다.`
           },
           {
             title: '자동 결제',
             content: `약속된 시간에 배당이 신속하고 정확하게
             처리됩니다.`
           }
         ],
         btnText: '더 알아보기'
       },
       subscribe: {
         title: '부동산 투자의 변화를 경험하세요.',
         content: `테라민트는 대한민국은 물론 동아시아를 발판으로, 세계로 나아가는 것을 목표로 하고 있습니다.
         이메일로 뉴스레터를 받아보세요.`,
         dropdown: {
          selected: 0,
          items: ['개인투자자', '자산관리사']
         },
         placeholders: {
           firstName: '이름',
           lastName: '성',
           email: '이메일을 입력해주세요.'
         },
         btnText: '뉴스 받아보기'
       }
     },
      en: {
       intro: {
         title: 'asdf',
         content: {
           title: 'adsfasf',
           content: `adsfasdfasdfadsfadsfads
           asdfasdfasdfas`
         },
         btnText: 'adsfads'
       },
       personal: {
         title: 'tetete',
         items: [
           {
             img: '/assets/img/cardIcon1.png',
             title: '억! 소리나는 빌딩',
             content: '부동산 투자의 진입장벽을 낮춰 소액투자자에게 안정적인 수익의 기회를 열어줍니다.'
           },
           {
             img: '/assets/img/cardIcon2.png',
             title: '내 돈은 내 맘대로!',
             content: '손쉽게 현금화 할 수 없었던 부동산 자산. 복잡한 절차와 비용없이 주식처럼 거래해보세요. 경제적 상황에 알맞게 유동성있는 자금관리가 가능합니다.'
           },
           {
             img: '/assets/img/cardIcon1.png',
             title: '투명한 정보',
             content: '블록체인에서 관리되는 투명한 정보를 활용해 보다 정확하고 현명한 부동산투자를 할 수 있습니다.'
           },
           {
             img: '/assets/img/cardIcon2.png',
             title: '안정적인 수익률',
             content: '실물자산의 안정성과 평균 6%의 부동산 수익률을 누릴 수 습니다.'
           }
         ],
         btnText: '더 알아보기'
       },
       company: {
         title: '자산관리 회사',
         items: [
           {
             title: '새로운 자본',
             content: '다양하고 많은 투자자로부터 자본을 모아'
           },
           {
             title: '투명한 자금 관리',
             content: `보고서를 위한 보고서가 아닌 배당금의 분배, 건물당 수익률이
             별도의 노력없이 자동으로 처리되고 기록됩니다.`
           },
           {
             title: '억! 소리나는 빌딩',
             content: `실시간으로 일어나는 부동산 거래정보로 부터 보다 정확하고
             가치있는 부동산의 감정평가를 할 수 있습니다.`
           },
           {
             title: '자동 결제',
             content: `지분에 알맞게 약속된 시간에 정확하고 빠르게 자동으로
             처리됩니다.`
           }
         ],
         btnText: '더 알아보기'
       },
       subscribe: {
         title: '테라민트의 한걸음 한걸음을 지켜봐주세요.',
         content: `테라민트는 대한민국은 물론 동아시아를 발판으로, 세계로 나아가는 것을 목표로 하고 있습니다.
         이메일로 뉴스레터를 받아보세요.`,
         dropdown: {
          selected: 0,
          items: ['개인투자자', '자산관리사']
         },
         placeholders: {
           firstName: '이름',
           lastName: '성',
           email: '이메일을 입력해주세요.'
         },
         btnText: '뉴스 받아보기'
       }
     }
    };

  }

  changeLanguage(e) {
    const target = e.nativeEvent.target;
    const $target = $(target);
    const value = $target.attr('data-value');
    console.log(value, this.texts[value]);

    this.setState({
      items: this.texts[value],
      selectedLanguage: value
    });
  }

  changeMember(e) {
    const target = e.nativeEvent.target;
    const $target = $(target);
    const value = $target.attr('data-value');
    console.log('kkkk');

    this.setState({

    })
  }

  openModal() {
    const modalId = this.state.modalId;
    $(`#${modalId}`).modal();
  }

  onConfirm(e) {
    console.log('submit!!', this);
    console.log(e.nativeEvent.target);
    const target = e.nativeEvent.target;
    const $target = $(target);
    const input = $target.attr('data-target');
    const $input = $(input);
    const email = $input.val();
    const isEmail = this._validateEmail(email);

    isEmail && this._closeModal();
    $input.val('');
  }

  _validateEmail(email) {
    return /^\S+@\S+\.\S+$/.test(email);
  }

  _closeModal() {
    const modalId = this.state.modalId;
    $(`#${modalId}`).modal('hide');
  }
}


export default App;
