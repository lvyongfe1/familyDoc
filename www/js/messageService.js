/**
 * Created by lvyongfei on 16/12/28.
 */
define(['app'],function(app)
{
  app.factory('messageService', ['localStorageService', 'dateService',
    function(localStorageService, dateService) {
      return {
        init: function(messages) {
          var i = 0;
          var length = 0;
          var messageID = new Array();
          var date = null;
          var messageDate = null;
          if (messages) {
            length = messages.length;
            for (; i < length; i++) {
              messageDate = dateService.getMessageDate(messages[i]);
              if(!messageDate){
                return null;
              }
              date = new Date(messageDate.year, messageDate.month,
                messageDate.day, messageDate.hour, messageDate.minute,
                messageDate.second);
              messages[i].lastMessage.timeFrome1970 = date.getTime();
              messageID[i] = {
                id: messages[i].id
              };

            }
            localStorageService.update("messageID", messageID);
            for (i = 0; i < length; i++) {
              localStorageService.update("message_" + messages[i].id, messages[i]);
            }
          }
        },
        getAllMessages: function() {
          var messages = new Array();
          var i = 0;
          var messageID = localStorageService.get("messageID");
          var length = 0;
          var message = null;
          if (messageID) {
            length = messageID.length;

            for (; i < length; i++) {
              message = localStorageService.get("message_" + messageID[i].id);
              if(message){
                messages.push(message);
              }
            }
            dateService.handleMessageDate(messages);
            return messages;
          }
          return null;

        },
        getMessageById: function(id){
          return localStorageService.get("message_" + id);
        },
        getAmountMessageById: function(num, id){
          var messages = [];
          var message = localStorageService.get("message_" + id).message;
          var length = 0;
          if(num < 0 || !message) return;
          length = message.length;
          if(num < length){
            messages = message.splice(length - num, length);
            return messages;
          }else{
            return message;
          }
        },
        updateMessage: function(message) {
          var id = 0;
          if (message) {
            id = message.id;
            localStorageService.update("message_" + id, message);
          }
        },
        deleteMessageId: function(id){
          var messageId = localStorageService.get("messageID");
          var length = 0;
          var i = 0;
          if(!messageId){
            return null;
          }
          length = messageId.length;
          for(; i < length; i++){
            if(messageId[i].id === id){
              messageId.splice(i, 1);
              break;
            }
          }
          localStorageService.update("messageID", messageId);
        },
        clearMessage: function(message) {
          var id = 0;
          if (message) {
            id = message.id;
            localStorageService.clear("message_" + id);
          }
        }
      };
    }
  ])


})
