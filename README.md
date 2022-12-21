![Banner image](./assets/cover.png)

## code-chat-api

[![Telegram](https://img.shields.io/badge/Group-Telegram-%2333C1FF)](https://t.me/codechatBR)
[![Whatsapp](https://img.shields.io/badge/WhatsApp-message-%2322BC18)](https://api.whatsapp.com/send?phone=5531995918699)
[![n8n](https://img.shields.io/badge/n8n--node-codechat-red)](https://github.com/code-chat-br/n8n-node-codechat)
[![npm](https://img.shields.io/badge/npm-8.16.0-lightgrey)](https://docs.npmjs.com/)
[![node](https://img.shields.io/badge/node-^16.10.0-%3C873A)](https://nodejs.org/)
[![nvm](https://img.shields.io/badge/nvm-nodejs-%3C873A)](https://github.com/nvm-sh/nvm#installing-and-updating)

This code abstracts the functionality of the **[baileys](https://github.com/adiwajshing/Baileys)** library to http format, which control whatsapp functions.
With **[code-chat](https://api.codechat.dev/v1/docs)** you can create multiservice chats, service bots or any other system that uses whatsapp.
With this code you don't need to know the javascript for **[nodejs](https://nodejs.org/pt-br/)**, just start the server and make the requests of the language that you feel most comfortable.

[Webhook](#webhook-post)

# Routes to the **Postman** documentation
  - **[Api Postman](https://www.postman.com/codechat/workspace/api-codechat/api/79e299bf-4ca9-4bc2-a5da-571ae24e0620)**
  - **[Json Postman](https://www.getpostman.com/collections/fc8fbab828d9b133974b)**

# Webhook \[POST\]

[Instance](#instance)</br>
[Chat](#chat)</br>
[Contact](#contact)</br>
[Message](#message)</br>
[Send Message](#send-message)</br>
[Payment](#payment)

## Instance

[Load Instance](#loadinstance)</br>
[Connection Update](#connectionsupdate)</br>
[Qrcode Update](#qrcodeupdated)</br>
[Presence Update](#presenceupdate)

| Event | Description |
|-------|-------------|
| **load.instance** | Informs instance loading |
| **connections.update** | Informs the status of the connection with whatsapp |
| **qrcode.updated** | Sends the base64 of the qrcode for reading |
| **presence.update** | Informs if the user is online, if he is performing some action like writing or recording and his last seen. |

### load.instance
```ts
{
  "event": "load.instance",
  "owner": "5531900000000@s.whatsapp.net",
  "data": {
    "wuid": "123@s.whatsapp.net",
    "userName": "codechat",
    "profilePictureUrl": "https://pps.whatsapp.net/v/t61.24694-24/309630409_169440919083513_8519511749370987405_n.jpg?ccb=11-4&oh=01_AdSYEc_iBpEC0fDTrQifuGRSFo35WUHyZItGt8izEvOLRg&oe=636177F7",
    "isBusiness": true,
    "proxy": null,
    "createAt": "2022-10-22T17:21:06.831Z"
  }
}
```
### connections.update
```ts
{
  "event": "connections.update",
  "owner": "5531900000000@s.whatsapp.net",
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
```ts
{
  "event": "qrcode.updated",
  "owner": "5531900000000@s.whatsapp.net",
  "data": {
    "name": "codechat",
    "qrcode": {
      "code": "2@J9pWS+08tuf2uUrFCw91UxzkLmuW+Zj34maKxF+hE+7 ...",
      "base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUwAAAFM ... AABJRU5ErkJggg=="
    }
  }
}
```
### presence.update
```ts
{
  "event": "presence.update",
  "owner": "5531900000000@s.whatsapp.net",
  "data": {
    "jid": "123@s.whatsapp.net",
    "presences": {
      "123@s.whatsapp.net": {
        "lastKnownPresence": "composing" | "recording" | "paused" | "available"
      }
    }
  }
}
```
or

```ts
{
  "event": "presence.update",
  "owner": "5531900000000@s.whatsapp.net",
  "data": {
    "jid": "123@s.whatsapp.net",
    "presences": {
      "123@s.whatsapp.net": {
        "lastSeen": 1666469724
      }
    }
  }
}
```
## Chat

[Chats Set](#chatsset)</br>
[Chats Update](#chatsupdate)</br>
[Chats Delete](#chatsdelete)

| Event | Description |
|-------|-------------|
| **chat.set** | Send a list of all loaded chats.</br> This event may repeat itself according to the number of chats you have;</br>⚠️So beware⚠️: all your chats may not load on the first occurrence of the event.</br> This event occurs only once |
| **chats.upsert** | Sends any new chat information |
| **chats.update** | Informs you when the chat is updated |
| **chats.delete** | Informs you when the chat is deleted |

### chats.set
```ts
{
  "event": "chats.set",
  "owner": "5531900000000@s.whatsapp.net",
  "data": [
    {
      "participant": [],
      "id": "123@s.whatsapp.net"
    },
  ]
}
```
or
```ts
{
  "event": "chats.set",
  "owner": "5531900000000@s.whatsapp.net",
  "data": [
    {
      "participant": [],
      "id": "123@s.whatsapp.net",
      "unreadCount": 0,
      "readOnly": false,
      "ephemeralExpiration": 0,
      "conversationTimestamp": {
        "low": 1666460154,
        "high": 0,
        "unsigned": true
      },
      "notSpam": true,
      "disappearingMode": {
        "initiator": "CHANGED_IN_CHAT"
      },
      "unreadMentionCount": 0,
      "tcToken": {
        "type": "Buffer",
        "data": []
      },
      "tcTokenTimestamp": {
        "low": 1666269691,
        "high": 0,
        "unsigned": true
      },
      "contactPrimaryIdentityKey": {
        "type": "Buffer",
        "data": []
      },
      "tcTokenSenderTimestamp": {
        "low": 1666270322,
        "high": 0,
        "unsigned": true
      },
      "lastMessageRecvTimestamp": 1666442091
    },
  ]
}
```
### chats.update
```ts
{
  "event": "chats.update",
  "owner": "5531900000000@s.whatsapp.net",
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
```ts
{
  "event": "chats.update",
  "owner": "5531900000000@s.whatsapp.net",
  "data": [
   "123@s.whatsapp.net"
  ]
}
```

## Contact

[Contacts Set](#contactsset)</br>
[Contacts Upsert](#contactsupsert)</br>
[Contacts Update](#contactsupdate)

| Event | Description |
|-------|-------------|
| **contacts.set** | Sends the list of contacts loaded</br> This information may take some time to arrive depending on the size of your contact list.</br> For example: a list of 200 contacts, it can take up to 45 seconds to load all contacts.</br>This event occurs only once |
| **contacts.upsert** | Get the list of all contacts, with additional information;</br> Receive notification of each new contact created |
| **contacts.update** | Informs you when the contact is updated |

### contacts.set
```ts
{
  "event": "contacts.set",
  "owner": "5531900000000@s.whatsapp.net",
  "data": [
    {
      "phoneNumber": "123",
      "wuid": "123@s.whatsapp.net",
      "profilePictureUrl": "https://pps.whatsapp.net/v/t61.24694-24/[...].jpg?[...]",
      "instanceName": "codechat"
    },
    [...]
  ]
}
```
### contacts.upsert
```ts
{
  "event": "contacts.set",
  "owner": "5531900000000@s.whatsapp.net",
  "data": [
    {
      "contactName": "name",
      "phoneNumber": "123",
      "wuid": "123@s.whatsapp.net",
      "profilePictureUrl": "https://pps.whatsapp.net/v/t61.24694-24/[...].jpg?[...]",
      "instanceName": "codechat"
    }
  ]
}
```
### contacts.update
```ts
{
  "event": "contacts.update",
  "owner": "5531900000000@s.whatsapp.net",
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

## Message

[New Message](#newmessage)</br>
[Message Update](#messageupdate)</br>
[Status Broadcast](#statusbroadcast)

| Event | Description |
|-------|-------------|
| **new.message** | Tells you when a message is received |
| **message.delete** | Informs when a message is deleted |
| **message.update** | Tells you when a message is updated |
| **messages.set** | Sends a list of all your messages uploaded on whatsapp.</br> This event may repeat itself according to the number of messages you have.</br> ⚠️So beware⚠️: all your messages may not load on the first occurrence of the event.<br> This event occurs only once |
| **status.broadcast** | Notifies when a contact publishes a Status |

### new.message
```ts
{
  "event": "new.message",
  "owner": "5531900000000@s.whatsapp.net",
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
### message.update
```ts
{
  "event": "message.update",
  "owner": "5531900000000@s.whatsapp.net",
  "data": {
    "update": {
      "status": "DELIVERY_ACK" | "READ",
      "key": {
        "remoteJid": "123@s.whatsapp.net",
        "id": "0542F8EF37C48548301A9C957C33EB17",
        "fromMe": false
      }
    },
    "instance": {
      "name": "codechat",
      "myWuid": "553195918699@s.whatsapp.net"
    }
  }
}
```
### status.broadcast
```ts
{
  "event": "status.broadcast",
  "owner": "5531900000000@s.whatsapp.net",
  "data": {
    "header": {
      "messageId": "250256CE0E92C229DB0F2508F1F09C0A",
      "fromMe": false,
      "wuid": "status@broadcast",
      "pushName": "Fabiano Motta Rodrigues"
    },
    "body": {
      "messageType": "imageMessage",
      "message": { },
    "context": {
      "sourceDevice": "android",
      "messageTimestamp": 1666479079
    }
  }
}
```
## Send Message

[Send Message START](#sendmessagestart)</br>
[Send Message PROCESSING](#sendmessageprocessing)</br>
[Send Message COMPLETED](#sendmessagecompleted)

| Event | Description |
|-------|-------------|
| **send.message:START** | Indicates the start of the submission process |
| **send.message:PROCESSING** | Informs the processing of sending messages from 0 to 100% |
| **send.message:COMPLETED** | Notifies the completion of the submission process.</br> After completion, the process is persisted in the database. |

### send.message:START
```ts
{
  "event": "send.message:START",
  "owner": "5531900000000@s.whatsapp.net",
  "data": {
    "instance": {
      "name": "codechat"
    },
    "queue": {
      "progress": 0,
      "queueId": "5b3c8fdf-e206-4fb8-b83e-0c0eb927d45b"
    }
  }
}
```
### send.message:PROCESSING
```ts
{
  "event": "send.message:PROCESSING",
  "owner": "5531900000000@s.whatsapp.net",
  "data": {
    "instance": {
      "name": "codechat"
    },
    "queue": {
      "messageId": "BAE54AB18FAFB0BF",
      "progress": 50,
      "queueId": "5b3c8fdf-e206-4fb8-b83e-0c0eb927d45b"
    }
  }
}
```
### send.message:COMPLETED
```ts
{
  "event": "send.message:COMPLETED",
  "owner": "5531900000000@s.whatsapp.net",
  "data": {
    "instance": {
      "name": "codechat"
    },
    "queue": {
      "queueId": "5b3c8fdf-e206-4fb8-b83e-0c0eb927d45b",
      "progress": 100,
      "data": {
        "jids": [
          "123@s.whatsapp.net",
          "456@s.whatsapp.net"
        ],        
        "messageIds": [
          "BAE54AB18FAFB0BF",
          "BAE56B89E06D6369"
        ],
        "message": { ... }
      }
    }
  }
}
```
## Payment

| Event | Description |
|-------|-------------|
| **request.payment** | Inform the moment of your payment request. |
| **recusar.pagamento** | Inform informs you that you declined a payment message received by your contact, or that the recipient refused your payment request. |
| **cancel.payment** | Report informs you that you canceled a payment message sent by your contact, or that a contact canceled a payment request sent to you. |
| **send.payment** | Informs that you have received a payment, which may be the answer to your request. |

# Note

This code is in no way affiliated with WhatsApp. Use at your own discretion. Don't spam this.

This code was produced based on the baileys library and it is still under development.