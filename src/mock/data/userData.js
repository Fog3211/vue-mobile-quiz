import Mock from "mockjs";
const Random = Mock.Random;

let user_list = [{
    "username": "fog3211",
    "password": "123456",
}];

let user_msg = [];
for (let i = 0; i < Math.random() * 7 + 7; i++) {
    user_msg.push({
        id: Random.increment(),
        msg_date: Random.datetime(),
        msg_title: Random.ctitle(3, 5),
        msg_content: Random.cparagraph(3, 6),
        new_msg: true,
    });
}

export {
    user_list,
    user_msg,
    collection_list,
    collection_list_state
}