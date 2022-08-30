export default function authHeader(headerType) {
    const token = localStorage.getItem('token');
    const lang = localStorage. getItem('i18nextLng') || 'de';
    if(token) {
      // for Node.js Express back-end
      if(headerType == ""){
        return { 
          'Authorization': "Bearer "+token,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "X-Requested-With",
          "accept-language": lang
        };
      }else if(headerType == "multipart"){
        return { 
          'Authorization': "Bearer "+token,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "X-Requested-With",
          "Content-type": "multipart/form-data",
          "accept-language": lang
        };
      }
    }else{
      return { 
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With",
        "accept-language": lang
      };
    }
  }