class Helper {
  getUrl(){
    return new Promise(async (resolve, reject) => {
      var urlId = window.location.pathname;
      resolve(urlId);
    });
  }
}

export default Helper;

