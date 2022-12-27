## CodeChat - WhatsApp Api Cloud

![codechat-cover](https://api.codechat.rest/img/cover.png)

<div align="center">

[![Telegram](https://img.shields.io/badge/Group-Telegram-%2333C1FF)](https://t.me/codechatBR)
[![n8n](https://img.shields.io/badge/n8n--node-codechat-red)](https://github.com/code-chat-br/n8n-node-codechat)
[![npm](https://img.shields.io/badge/npm-8.16.0-lightgrey)](https://docs.npmjs.com/)
[![node](https://img.shields.io/badge/node-^16.17.0-%3C873A)](https://nodejs.org/)
[![nvm](https://img.shields.io/badge/nvm-nodejs-%3C873A)](https://github.com/nvm-sh/nvm#installing-and-updating)

</div>

## Whatsapp Web API

<font size='3'>It is a high performance scalable API that uses http requests to communicate with Whatsaap; as per the documentation below.</font>

This code abstracts the functionality of the **[baileys](https://github.com/adiwajshing/Baileys)** library to http format, which control whatsapp functions.
With **[code-chat](https://api.codechat.dev/v1/docs)** you can create multiservice chats, service bots or any other system that uses whatsapp.
With this code you don't need to know the javascript for **[nodejs](https://nodejs.org/pt-br/)**, just start the server and make the requests of the language that you feel most comfortable.

Requests return: <strong>JSON</strong>

## [🔗Webhook Map](./webhook-map/README.md)↗️

## Supported Messaging

|     |   |
|-----|---|
| Send Text | ✔ |
| Send Buttons | ✔ |
| Send Template | ✔ |
| Send Media: audo - video - sticker - image - documet - gif <br></br>base64: ```true``` | ✔ |
| Send Media - File: audo - video - sticker - image - documet - gif | ✔ |
| Send WhatsApp Audio <br></br>base64: ```true``` | ✔ |
| Send stickers GIF | ✔ |
| Send Location | ✔ |
| Send List | ✔ |
| Send Link Preview - mode: commom - template | ✔ |
| Send Contact | ✔ |
| Send Reaction - emoji | ✔ |
<br></br>

## Webhook \[POST\]

The events are informed in the **event** attribute in the object that is sent through the **body** of the **http request**.

### Events

* [Instance](#instance)
* [Chats](#chats)
* [Contact](#contact)
* [Message](#message)
* [Send Message](#send-message)
* [Queue Manager](#queue-manager)
* [Payment](#payment)
* [Error](#error)

### Instance
  - **connection.update:** Informs the status of the connection with whatsapp:
    - `open - connecting - close - refused`.
  - **qrcode.updated:** Sends the base64 of the qrcode for reading.

### Chats
  - **chats.set:** Send a list of all loaded chats.
  - **chats.upsert:** Informs the status of the connection with whatsapp.
  - **chats.update:** Informs you when the chat is updated.
  - **presence.update:** Informs if the user is online, if he is performing some action like writing or recording and his last seen.

### Contact
  - **contacts.upsert:** Sends the list of contacts loaded.
    * This information may take some time to arrive depending on the size of your contact list.
    * For example: a list of 200 contacts, it can take up to 45 seconds to load all contacts.
  - **contacts.update:** informs you when the contact is updated.

### Message
  - **new.message:** Tells you when a message is received.
    * **- ⚠️Heads up⚠️:** For media messages larger than **8MB** in size, automatic conversion to **base64** is not performed.
    * Use the **[/chat/base64MediaMessage](http://localhost:3000/codechat/chat-controller-base-64-message-media-by-attr)** route to do the conversion.
  - **messages.update:**  Tells you when a message is updated.
    * Example: message ```DELIVERY_AT``` or ```READ```.
  - **message.delete:** Informs when a message is deleted
  - **messages.set:** Sends a list of all your old messages uploaded to whatsapp.
    * This event can be repeated according to the number of messages you have.
    * ⚠️**So beware⚠️:** This event is triggered immediately after reading the qr code. After the messages are loaded, the event does not occur again
  - **status.broadcast:** Notifies when a contact publishes a **Status**

### Send Message
  - **send.message:START -**  Indicates the start of the submission process.
  - **send.message:PROCESSING -** Informs the processing of sending messages from 0 to 100%.
  - **send.message:COMPLETED -** Notifies the completion of the submission process.
    * Upon completion, the queue is automatically cleared by the system.
  - **send.message:ERROR -** Notifies the error and its cause during the processing of the mailing list, but does not interrupt it.

### Queue Manager
  - **paused.queue:** Informs the moment when the respective queue was paused.
  - **resumed.queue:** Informs the moment when the respective queue was resumed.
  - **deleted.queue:** Inform the moment when the respective queue was deleted.
    * This event is triggered when branch processing is finished or when the user uses the queue management route and performs the deletion.

### Payment
  - **request.payment:** Inform the moment of your payment request.
  - **decline.payment:** Inform informs you that you declined a payment message received by your contact, or that the recipient refused your payment request.
  - **cancel.payment:** Report informs you that you canceled a payment message sent by your contact, or that a contact canceled a payment request sent to you.
  - **send.payment:** Informs that you have received a payment, which may be the answer to your request.

### Error
  - **general.error:** Report the error linked to an event.