function domainName(url){
  
  if(url.includes('//')){
    if(url.includes('www')){
      url = url.replace('.', '!')
      url = url.slice(url.indexOf('w') + 4, url.indexOf('.'))
    }
    else{
      url = url.slice(url.indexOf('/') + 2, url.indexOf('.'))
    }
  }
  else if(url.includes('www')){
    url = url.slice(url.indexOf('w') + 4, url.lastIndexOf('.'))
  }else {
    url = url.slice(0, url.indexOf('.'))
  }

  return url; 
}
