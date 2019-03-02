import Mock from "mockjs";
const Random = Mock.Random;

let user_list = [{
    "username": "fog3211",
    "password": "123456"
}];

let user_msg = Mock.mock({
    "msg|1-8": [{
        "new_msg": true,
        "id|+1": 0,
        "date|1": Random.datetime("2019-MM-dd A HH:mm:ss"),
        "title|+1": "标题" + 0,
        "content|1": Random.cparagraph(3, 6)
    }]
})
export {
    user_list,
    user_msg
}