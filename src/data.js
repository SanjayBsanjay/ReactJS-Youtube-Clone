export const API_KEY = 'AIzaSyDoXxoKsmWTcOG4ZoGtEYKGMYXyP8C9SEo';

export const value_converter = (value) =>{
  if(value>=1000000){
    return Math.floor(value/1000000)+"M";
  }
  else if(value>=1000){
    return Math.floor(value/1000)+"K";
  }
  else{
    return value;
  }

}

//https://developers.google.com/youtube/v3 api link