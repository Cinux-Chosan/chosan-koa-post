import $ from 'jquery';

let baseUrl = location.hostname.match(/(localhost|172|192)/) ? `//${location.hostname}:3000` : ''

function getJson(url = '', data = {}, type = 'get') {
  url = url.match(/^(http(s)?:)?\/\//) ? url : `${baseUrl}/${url}`;
  return $.ajax({
      type,
      method: type, // after jQuery 1.9
      url,
      data,
      dataType: 'json'
    })
    .done(data => {
      return data
    })
    .fail(err => {
      // tip
      err
    })
    .always(() => {

    })
}



export {
  getJson
}