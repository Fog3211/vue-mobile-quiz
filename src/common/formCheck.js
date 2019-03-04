export default {
    //   手机号校验
    phoneCheck(params) {
        if (/^1[34578]\d{9}$/.test(params)) {
            return "success";
        } else {
            return "warning";
        }
    },
    // 邮箱校验
    emailCheck(params) {
        if (/^[a-z0-9_]{2,20}@[a-z0-9]{2,10}\.[a-z]{2,6}$/.test(params)) {
            return "success";
        } else {
            return "warning";
        }
    },
    // 生日校验
    birthdayCheck(params) {
        if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(params)) {
            if (params > "1900-00-00" && params < "2019-12-31") {
                return "success";
            } else {
                return "warning";
            }
        } else {
            return "warning";
        }
    },
    // 昵称校验
    nicknameCheck(params) {
        if (params && params.trim()) {
            if (params.length >= 1 && params.length <= 10) {
                return "success";
            } else {
                return "warning";
            }
        } else {
            return "warning";
        }
    },
    // 个签校验
    introductionCheck(params) {
        if (params && params.trim()) {
            return "success";
        } else {
            return "warning";
        }
    },
    // 用户名校验
    usernameCheck(params) {
        if (params && params.trim()) {
            if (params.length >= 1 && params.length <= 20) {
                return "success";
            } else {
                return "warning";
            }
        } else {
            return "warning";
        }
    },
    // 密码校验
    passwordCheck(pwd, repwd) {
        if (pwd && pwd.trim() && repwd && repwd.trim()) {
            if (pwd === repwd) {
                if (pwd.length >= 6 && pwd.length <= 16) {
                    return "success";
                }else{
                       return "warning";
                }
            } else {
                return "error";
            }
        } else {
            return "warning";
        }
    }
}