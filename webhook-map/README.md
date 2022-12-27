# Summary

* [Instance](#instance)
* [Chat](#chat)
* [Contacts](#contact)
* [Message](#message)
* [Send Message](#send-message)
* [Queue Manager](#queue-manager)


# Instance

## Events
* [Connection Update](#connectionupdate)
* [QrCode Updated](#qrcodeupdated)

### connection.update

```ts title="Informs the status of the connection with whatsapp"
{
  "event": "connections.update",
  "instance": {
    "owner": "553195918699@s.whatsapp.net",
    "name": "codechat"
  },
  "data": {
    "instance": {
      "name": "codechat",
      "id": "unique id"
    },
    "state": "close" | "open" | "connecting" | "refused",
    "statusReason": 200
  }
}
```

### qrcode.updated
```ts title="Sends the base64 of the qrcode for reading"
{
  "event": "qrcode.updated",
  "instance": {
    "owner": "553195918699@s.whatsapp.net",
    "name": "codechat"
  },
  "data": {
    "name": "codechat",
    "qrcode": {
      "code": "2@J9pWS+08tuf2uUrFCw91UxzkLmuW+Zj34maKxF+hE+7 ...",
      "base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUwAAAFM ... AABJRU5ErkJggg=="
    }
  }
}
```

# Chat

## Events
* [Chats Set](#chatsset)
* [Chats Update](#chatsupdate)
* [Chats Delete](#chatsdelete)
* [Presence Update](#presenceupdate)

### chats.set
```ts title="	Send a list of all loaded chats"
{
  "event": "contacts.upsert",
  "instance": {
    "owner": "553195918699@s.whatsapp.net",
    "name": "codechat"
  }
  "data": [
    {
      "participant": [],
      "id": "123@s.whatsapp.net"
    },
  ]
}
```

### chats.update
```ts title="Informs you when the chat is updated"
{
  "event": "chats.update",
  "instance": {
    "owner": "553195918699@s.whatsapp.net",
    "name": "codechat"
  }
  "data": [
    {
      "id": "123@s.whatsapp.net",
      "conversationTimestamp": 1666473399,
      "unreadCount": 1
    }
  ]
}
```

### chats.delete
```ts title="Informs you when the chat is deleted"
{
  "event": "chats.delete",
  "data": [
    "123@s.whatsapp.net"
  ],
  "instance": {
    "instance": {
    "owner": "553195918699@s.whatsapp.net",
    "name": "codechat"
  }
    "name": "codechat"
  }
}
```

### presence.update
```ts title="Informs the action that the user is performing in the chat."
{
  "event": "presence.update",
  "data": {
    "jid": "123@s.whatsapp.net",
    "presences": {
      "123@s.whatsapp.net": {
        "lastKnownPresence": "unavailable | composing | recording ...",
        "lastSeen": 1672004025
      }
    }
  },
  "instance": {
    "owner": "553195918699@s.whatsapp.net",
    "name": "codechat"
  }
}
```

# Contact

## Events
* [Contacts Set](#contactsset)
* [Contacts Upsert](#contactsupsert)
* [Contacts Update](#contactsupdate)

### contacts.set
```ts title="Sends the list of contacts loaded"
{
  "event": "contacts.upsert",
  "instance": {
    "owner": "5531911111111@s.whatsapp.net",
    "name": "codechat"
  },
  "data": [
    {
      "phoneNumber": "5531900000000",
      "wuid": "5531900000000@s.whatsapp.net",
      "profilePictureUrl": "https://pps.whatsapp.net/v/t61.24694-24/[...].jpg?[...]",
      "instanceName": "codechat"
    },
    ...
  ]
}
```

### contacts.upsert
```ts title="Get the list of all contacts, with additional information"
{
  "event": "contacts.set",
  "instance": {
    "owner": "5531911111111@s.whatsapp.net",
    "name": "codechat"
  },
  "data": [
    {
      "contactName": "name",
      "phoneNumber": "123",
      "wuid": "123@s.whatsapp.net",
      "profilePictureUrl": "https://pps.whatsapp.net/v/t61.24694-24/[...].jpg?[...]",
      "instanceName": "codechat"
    },
    ...
  ]
}
```

### contacts.update
```ts title="Informs you when the contact is updated"
{
  "event": "contacts.update",
  "instance": {
    "owner": "5531911111111@s.whatsapp.net",
    "name": "codechat"
  },
  "data": [
    {
      "contactName": "update name",
      "phoneNumber": "update number123",
      "wuid": "update 123@s.whatsapp.net",
      "profilePictureUrl": "update url",
      "instanceName": "codechat"
    }
  ]
}
```

# Message

## Events
* [New Message](#newmessage)
* [Messages Update](#messagesupdate)
* [Messges Delete](#messagesdelete)
* [Messages Set](#messagesset)
* [Status Broadcast](#statusbroadcast)

### new.message
```ts title="Tells you when a message is received"
{
  "event": "new.message",
  "instance": {
    "owner": "5531911111111@s.whatsapp.net",
    "name": "codechat"
  },
  "data": {
    "header": {
      "messageId": "0542F8EF37C48548301A9C957C33EB17",
      "fromMe": false,
      "wuid": "123@s.whatsapp.net",
      "pushName": "pushName"
    },
    "body": {
      "messageType": "conversation",
      "message": "Test"
    },
    "context": {
      "sourceDevice": "android",
      "messageTimestamp": 1666479478,
      "fromGroup": false
    }
  }
}
```
### messages.update
```ts title="Tells you when a message is updated"
{
  "event": "message.update",
  "instance": {
    "owner": "5531911111111@s.whatsapp.net",
    "name": "codechat"
  },
  "data":  {
    "update": {
      "status": "READ",
      "header": {
        "messageId": "3A8B7F4631EA2A840895",
        "wuid": "553197853327@s.whatsapp.net",
        "fromMe": true
      },
      "dateTime": 1672002761941
    }
  }
}
```
### messages.delete
```ts title="Informs when one or several messages are deleted."
{
  "event": "messages.update",
  "instance": {
    "owner": "5531911111111@s.whatsapp.net",
    "name": "codechat"
  },
  "data":  [
    {
      "messageId": "0542F8EF37C48548301A9C957C33EB17",
      "fromMe": false,
      "wuid": "123@s.whatsapp.net",
    },
    ...
  ]
}
```
```ts title="Informs when the entire chat is deleted."
{
  "event": "messages.update",
  "instance": {
    "owner": "5531911111111@s.whatsapp.net",
    "name": "codechat"
  },
  {
    "wuid": "123@s.whatsapp.net",
    "all": true
  }
}
```

### messages.set
```ts title="	Sends a list of all your messages uploaded on whatsapp."
{
  "event": "messages.set",
  "instance": {
    "owner": "5531911111111@s.whatsapp.net",
    "name": "codechat"
  },
  "data": [
    {
      "header": {
        "messageId": "0542F8EF37C48548301A9C957C33EB17",
        "fromMe": false,
        "wuid": "123@s.whatsapp.net",
        "pushName": "pushName"
      },
      "body": {
        "messageType": "conversation",
        "message": "Test"
      },
      "context": {
        "sourceDevice": "android",
        "messageTimestamp": 1666479478,
        "fromGroup": false
      }
    },
    ...
  ]
}
```
### status.broadcast
```ts title="Notifies when a contact publishes a Status"
{
  "event": "status.broadcast",
  "instance": {
    "owner": "5531911111111@s.whatsapp.net",
    "name": "codechat"
  },
  "data": {
    "header": {
      "messageId": "0542F8EF37C48548301A9C957C33EB17",
      "fromMe": false,
      "wuid": "123@s.whatsapp.net",
      "pushName": "pushName"
    },
    "body": {
      "messageType": "conversation",
      "message": "Test"
    },
    "context": {
      "sourceDevice": "android",
      "messageTimestamp": 1666479478,
      "fromGroup": false
    }
  }
}
```

# Send Message

## Events
* [Send Message START](#sendmessagestart)
* [Send Message PROCESSING](#sendmessageprocessing)
* [Send Message COMPLETED](#sendmessgaecompleted)
* [Send Message ERROR](#sendmessageerror)

### send.message:START
```ts title="	Indicates the start of the submission process"
{
  "event": "send.message:START",
  "data": {
    "queue": {
      "queueId": "78e37ede-32d9-4636-83f0-39469daf89f6",
      "status": "STARTED",
      "progress": 0
    }
  },
  "instance": {
    "owner": "553195918699@s.whatsapp.net",
    "name": "codechat"
  }
}
```
### send.message:PROCESSING
```ts title="Informs the processing of sending messages from 0 to 100%"
{
  "event": "send.message:PROCESSING",
  "data": {
    "queue": {
      "messageId": "BAE58965172ED18B",
      "progress": 67,
      "queueId": "78e37ede-32d9-4636-83f0-39469daf89f6",
      "queueTimestamp": 1672004593497
    }
  },
  "instance": {
    "owner": "553195918699@s.whatsapp.net",
    "name": "codechat"
  }
}
```
### send.messgae:COMPLETED
```ts title="Notifies the completion of the submission process"
{
  "event": "send.message:COMPLETED",
  "data": {
    "queue": {
      "queueId": "78e37ede-32d9-4636-83f0-39469daf89f6",
      "progress": 100,
      "data": {
        "jids": [
          "123@s.whatsapp.net",
          "456@s.whatsapp.net",
          "789@s.whatsapp.net"
        ],
        "message": {
          "messageType": "extendedTextMessage",
          "message": {
            "text": "hi"
          }
        },
        "messageIds": [
          "BAESGT65172ED24G",
          "LGMI5Y6I4W5IT5YI",
          "CFGF56ERTG8R5TRF"
        ]
      },
      "queueTimestamp": 1672004593500
    }
  },
  "instance": {
    "owner": "553195918699@s.whatsapp.net",
    "name": "codechat"
  }
}
```
### send.message:ERROR
```ts title="Notifies when a number is not a valid whatsapp."
{
  "number": "123@s.whatsapp.net",
  "message": "The number entered is not a valid whatsapp contact",
  "status": 404,
  "error": "Not Found",
  "queueId": "78e37ede-32d9-4636-83f0-39469daf89f6"
```
```ts title="Notifies when citation message is not found"
{
  "message": "Message ID: BAESGT65172ED24G - not found to be quoted",
  "status": 400,
  "error": "Bad Request",
}
```

# Queue Manager

## Events

### paused.queue
```ts title="Pause queue processing"
{
  "event": "paused.queue",
  "data": {
    "action": "pause"
    "queue": {
      "queueId": "78e37ede-32d9-4636-83f0-39469daf89f6",
      "progress": 43,
      "data": {
        "messageType": "extendedTextMessage",
        "message": {
          "text": "hi"
        }
      },
      "queueTimestamp": 1672004593500
    }
  },
  "instance": {
    "owner": "5531911111111@s.whatsapp.net",
    "name": "codechat"
  }
}
```
### resumed.queue
```ts title="Resuming the queue"
{
  "event": "resumed.queue",
  "data": {
    "action": "resume",
    "queue": {
      "queueId": "78e37ede-32d9-4636-83f0-39469daf89f6",
      "progress": 43,
      "data": {
        "jids": [
          "123@s.whatsapp.net",
          "456@s.whatsapp.net",
          "789@s.whatsapp.net"
        ]
      },
      "queueTimestamp": 1672004593500
    }
  },
  "instance": {
    "owner": "553195918699@s.whatsapp.net",
    "name": "codechat"
  }
}
```
### deleted.queue
```ts title="Deleting the queue"
{
  "event": "deleted.queue",
  "data": {
    "action": "delete"
    "queue": {
      "queueId": "78e37ede-32d9-4636-83f0-39469daf89f6",
      "progress": 95,
      "data": {
        "jids": [
          "123@s.whatsapp.net",
          "456@s.whatsapp.net",
          "789@s.whatsapp.net"
        ],
        "message": {
          "messageType": "extendedTextMessage",
          "message": {
            "text": "hi"
          }
        },
        "messageIds": [
          "BAESGT65172ED24G",
          "LGMI5Y6I4W5IT5YI",
          "CFGF56ERTG8R5TRF"
        ]
      },
      "queueTimestamp": 1672004593500
    }
  },
  "instance": {
    "owner": "553195918699@s.whatsapp.net",
    "name": "codechat"
  }
}
```
