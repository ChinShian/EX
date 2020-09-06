$(document).ready(() => {
  let chenkInfo = [];
  let chenkStr = '';
  let timeAjaID;
  const str = '';

  function validateEmail($email) {
    const emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
  }
  function DownLoad() {
    const downLoadapi = axios.create({
      url: 'http://localhost:8080/Nodejs-Html-Parser.pdf',
      method: 'GET',
      responseType: 'blob',
    });
    const downLoadapi2 = axios.create({
      url: 'http://192.168.1.101:8080/Nodejs-Html-Parser.pdf',
      method: 'GET',
      responseType: 'blob',
    });
    axios.all([downLoadapi, downLoadapi2]).then((response) => {
      const fileURL = window.URL.createObjectURL(new Blob([response.data]));
      const fileLink = document.createElement('a');

      fileLink.href = fileURL;
      fileLink.setAttribute('download', 'Nodejs-Html-Parser.pdf');
      document.body.appendChild(fileLink);

      fileLink.click();
    });
  }
  // 关闭感谢页
  $('#goIndex2').on('click', () => {
    $('#thx2').fadeOut();
  });

  // 依據目前網址取得文宣編號
  function getSource() {
    const result = /WB\d{6}/.exec(location.pathname);
    if (result) {
      return result[0];
    }

    return document.querySelector('#fromSource').innerText;
  }

  function addAjax() {
    const thisName = getSource();
    const thisURL = decodeURI(window.location.href);
    const thisGaURL = decodeURI(window.location.pathname);
    const thisLoadLink = decodeURI($('#SourLoadLink').attr('href'));
    const thisTitle = document.title;
    const comCont = $('#contact-company2').val() || '';
    const teleCont = $('#telephone2').val() || '';
    const exteCont = $('#extension').val() || '';
    const addrCont = $('#address').val() || '';
    const contactPer = $('#contact_person2').val() || '';
    const emailCont = $('#contact-email2').val() || '';

    const queryCont =
      ($('#contact-query').length &&
        $('#contact-query')
          .val()
          .replace(/"/g, "'")) ||
      '';
    const otherCont = $('#contact-other').val() || '';

    const tJSON =
      `{"doc_no": "${thisName}",` +
      `"source": "${thisTitle}" ,` +
      `"page_dir": "${thisURL}" ,` +
      `"company": "${comCont}",` +
      `"telephone": "${teleCont}",` +
      `"extension": "${exteCont}",` +
      `"address": "${addrCont}",` +
      `"contact_person": "${contactPer}",` +
      `"email": "${emailCont}",` +
      `"req_sys": "${chenkStr}",` +
      `"dm_ask": "${chenkInfo[0]}",` +
      `"get_file": "${thisLoadLink}" ,` +
      `"query": "${queryCont}",` +
      `"other": "${otherCont}",` +
      `"country": "${str}"}`;
    // console.log(tJSON);
    $.support.cors = true;
    $.ajax({
      type: 'POST',
      // crossDomain: true,
      // contentType: "application/json; charset=utf-8",
      url: 'https://misws.digiwin.com/WebPageDataTest/Service.asmx/SaveData',
      dataType: 'json',
      data: { data: tJSON },
      error(jqXHR, textStatus, errorThrown) {
        console.error(textStatus);
        console.error(jqXHR);
        console.error(errorThrown);
      },
      success(data) {
        console.log(data);
        console.log(data.msg);
        console.log(data.farm);
        // 根据是否勾选索取资料、公私田以及下载资料链接，显示感谢页内容
        if (chenkInfo[0] === 'N' || chenkInfo[0] === 'undefined' || chenkInfo[0] === '') {
          $('#goIndex2 a').addClass('btnBlock2');
          $('#goIndex2').removeClass('thxSourLoad4');
        } else if (data.farm === 'N') {
          $('#goIndex2').removeClass('thxSourLoad4');
        } else if (data.farm === 'Y') {
          $('#goIndex2').addClass('thxSourLoad4');
        }
        $('#loading').fadeOut();
        $('#thx2').fadeIn();
        DownLoad();
        setTimeout(() => {
          $('#thx2').fadeOut();
        }, 5000);
        chenkStr = '';
        chenkInfo = [];
      },
    });
  }

  $('#DownLoadForm').click(() => {
    let emailError = false;
    let contactNotFinish = false;
    const demandNotFinish = false;
    const consContNotFinish = false;
    const tranNotFinish = false;

    // 确认公司名称，联系电话、分机、公司地址、联络人、E-mail、行动电话是否少填写
    function fnContact() {
      $('.contact').removeClass('noInput');
      const requiLen = $('.Email_required').length;
      const Email = $('#contact-email');
      const contactEmai = $('#contact-email').val();

      requiLen > 0 ? requiLenFn() : contactEmaiFn();
      function requiLenFn() {
        for (let i = 0; i < $('.Email_required').length; i++) {
          const contactValue = $('.Email_required')
            .eq(i)
            .val();
          const contactPlaceholder = $('.Email_required')
            .eq(i)
            .attr('placeholder');
          if (contactValue === '' || contactValue === contactPlaceholder) {
            contactNotFinish = true;
            $('.Email_required')
              .eq(i)
              .addClass('noInput');
          }

          Email.hasClass('Email_required') == true ? contactReEmai() : contactEmaiFn();
        }
      }

      function contactEmaiFn() {
        if (contactEmai.length > 0 && !validateEmail(contactEmai)) {
          emailError = true;
          contactNotFinish = true;
          $('#contact-email').addClass('noInput');
        } else {
          emailError = false;
          $('#contact-email').removeClass('noInput');
        }
      }
      function contactReEmai() {
        if (contactEmai.length === 0) {
          contactNotFinish = true;
          emailError = true;
          $('#contact-email').addClass('noInput');
        } else if (!validateEmail(contactEmai)) {
          contactNotFinish = true;
          emailError = true;
          $('#contact-email').addClass('noInput');
        } else {
          emailError = false;
        }
      }
    }
    fnContact();

    if (!emailError && !contactNotFinish && !demandNotFinish && !consContNotFinish && !tranNotFinish) {
      $('#loading').fadeIn();
      clearTimeout(timeAjaID);
      timeAjaID = setTimeout(() => {
        timeAjaID = addAjax();
      }, 2000);
    } else {
      const txt = '尚有聯絡資料未填寫或Email格式錯誤，請重新確認。</br>There are still contact information not filled in or the email format is wrong, please reconfirm.';
      window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
      // alert('请输入正确的邮箱地址！')
      chenkStr = '';
      chenkInfo = [];
    }
  });
});
