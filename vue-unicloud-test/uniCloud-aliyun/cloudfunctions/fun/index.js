let db = uniCloud.database({
  throwOnNotFound: false,
})
exports.main = async (event, context) => {
	if(event.api === 'publish'){
    return await db.collection('message').add({
      content: event.content,
    })
  }
	if(event.api === 'getMessages'){
    return await db.collection('message').get()
  }
  
	//返回数据给客户端
	return "提醒"
};
