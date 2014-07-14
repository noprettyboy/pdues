/*configuration.js*/
/*Model*/
(function(window) {

/*--> FOR ALARM BEGIN <--*/
  window.ALARMTYPE = {
    0: "PDU",
    1: "输入相位",
    2: "断路器",
    3: "输出端口",
    4: "外置传感器"
  };

  window.SENSORTYPE = {
    1: "温度 (℃)",
    2: "湿度 (%)",
    3: "门开关",
    4: "干触点",
    5: "点式漏水传感器",
    6: "绳式漏水传感器",
    7: "烟雾传感器",
    8: "警报灯"
  };

  window.TEMPUNIT = {
    0: "摄氏度",
    1: "华氏度"
  };

  window.ALARMUNITTYPE = {
    A: {
      unit: " (A)",
      factor: 1000,
      fixed: 2,
      max: 16,
      min: 0,
      title: "电流"
    },
    V: {
      unit: " (V)",
      factor: 1000,
      fixed: 0,
      max: 260,
      min: 90,
      title: "电压"
    },
    VA: {
      unit: " (VA)",
      factor: 1000,
      fixed: 0,
      min: 0,
      max: 49140,
      title: "视在功率"
    },
    W: {
      unit: " (W)",
      factor: 1000,
      fixed: 0,
      min: 0,
      max: 49140,
      title: "有效功率"
    },
    Wh: {
      unit: " (Wh)",
      factor: 1000,
      fixed: 2,
      min: 0,
      max: 1000000000,
      title: "能量"
    },
    C: {
      unit : " (°C)",
      factor: 1,
      fixed: 0,
      min: 0,
      max: 75,
      title: "温度"
    },
    F: {
      unit : " (F)",
      factor: 1,
      fixed: 0,
      min: 32,
      max: 167,
      title: "温度"
    },
    H: {
      unit : " (%)",
      factor : 1,
      fixed: 0,
      min: 15,
      max: 90,
      title: "湿度"
    }
  };
/*--> FOR ALARM END <--*/

/*--> FOR POWER ENERGY BEGIN <--*/
  window.POWERENERGY = {
    "activepower" : "有效功率 (W)",
    "apparentpower" : "视在功率 (VA)",
    "totalenergymeter" : "总电能 (kWh)"
  };
/*--> FOR POWER ENERGY END <--*/

/*--> FOR ENENTRULE SETTING DIALOG BEGIN <--*/
   window.EVENTMAP = {
    1 : "Critical Alarm",
    2 : "Warning Alarm",
    4 : "External Sensor Status Changed",
    8 : "PDU Configuration File Imported/Exported",
    16 : "Firmware Update",
    32 : "Network Card Reset/Start",
    64 : "Communication Status Changed",
    128 : "Password Changed",
    256 : "Log File Cleared",
    512 : "Network Interface Link Status Changed"
  };

  MODEL.eventrl = {
    spEnableAll: "全选",
    spEventRule: "事件规则",
  };
/*--> FOR ENENTRULE SETTING DIALOG END <--*/

  /*Root of the tree*/
  EL.TreeRoot = {
    "id": "dashboard",
    "text": "控制面板",
    "iconCls": "icon-desk"
  };

/*--> FOR LOGIN PAGE BEGIN <--*/
  /*--main pages--*/ 
  /*login page*/ 
  MODEL.login = {
    title:    "登录",
    username: "用户名",
    password: "密码",
    login:    "登录",
    clear:    "清除"
  };
/*--> FOR LOGIN PAGE END <--*/

/*--> FOR DIALOG HEAD BEGIN <--*/
  /*master page*/
  MODEL.master = {
    useradmin: {
      txt: "用户管理",
      changepw:{
        txt: "更改密码",
        dlg: "更改用户密码"
      },
      users: {
        txt: "用户",
        dlg: "管理用户"
      },    
      roles: {
        txt: "用户组",
        dlg: "管理用户组"
      }
    },
    deviceadmin: {
      txt: "设备配置",
      networkser: {
        txt: "网络服务",
        http: {
          txt: "HTTP",
          dlg: "HTTP设置"
        },
        snmp: {
          txt: "SNMP",
          dlg: "SNMP设置"
        },
        ssh: {
          txt: "SSH",
          dlg: "SSH设置"
        },
        telnet: {
          txt: "TELNET",
          dlg: "TELNET设置"
        },
        ftp: {
          txt: "FTP",
          dlg: "FTP设置"
        }
      },
      networkcon: {
        txt: "网络配置",
        dlg: "网络配置"
      },
      security: {
        txt: "安全",
        loginset: {
          txt: "登录设置",
          dlg: "登录设置"
        },
        passwordpol: {
          txt: "密码策略",
          dlg: "密码策略"
        },
        forcehttps: {
          txt: "为Web访问强制设置HTTPS",
          dlg: "强制设置Https"
        }
      },
      eventrules: {
        txt: "事件规则设置",
        dlg: "事件规则设置"
      },
      datalog: {
        txt: "数据日志",
        dlg: "数据日志设置"
      },
      datetime: {
        txt: "日期/时间",
        dlg: "配置日期/时间"
      },
      smtpemail: {
        txt: "SMTP邮件",
        dlg: "SMTP服务器设置"
      },
      serverreach: {
        txt: "服务器可访问性",
        dlg: "服务器可访问性"
      },
      usb: {
        txt: "USB",
        dlg: "USB设置"
      },
      pduinfo: {
        txt: "PDU 信息",
        dlg: "PDU 信息设置"
      },
      sensorinfo: {
        txt: "传感器信息",
        dlg: "传感器信息设置"
      }
    },
    systemadmin: {
      txt: "系统管理",
      vweventlog: {
        txt: "查看事件日志",
        dlg: "查看事件日志"
      },
      vwdatalog: {
        txt: "查看数据日志",
        dlg: "查看数据日志"
      },
      firmwaremt: {
        txt: "固件维护",
        udfirmware: {
          txt: "更新固件",
          dlg: "固件更新"
        },
        vwfirmwareud: {
          txt: "查看固件更新历史",
          dlg: "固件更新历史"
        }
      },
      conusers: {
        txt: "连接的用户",
        dlg: "连接的用户"
      },
      diagnostic: {
        txt: "日志下载",
        dldiaginfo: {
          txt: "下载日志信息",
          dlg: "下载日志信息"
        }
      },
      pduconfig: {
        txt: "PDU 配置文件",
        dlg: "配置文件"
      },
      deviceinfo: {
        txt: "设备信息",
        dlg: "设备信息"
      },
      nwcardreset: {
        txt: "网络管理卡复位",
        dlg: "网络管理卡复位"
      }
    },
    help: {
      txt: "帮助",
      userguide: {
        txt: "用户指引",
        dlg: "用户指引"
      }
    },
    setalarmdl: {
      lowercritical: "下临界值",
      lowerwarning: "下临界警告",
      upperwarning: "上临界警告",
      uppercritical: "上临界值",
      resetthreshold: "复位阈值",
      alarmscdelay: "告警状态变化的延迟：",
      alarmsetting: "告警设置",
      enablealarm: "启用告警设置",
      updatefail: "更新失败",
      lowcriticalinfo: "下临界值+阈值应小于或等于下临界警告!",
      lowwarninfo: "下临界警告+2倍复位阈值应小于或等于上临界警告!",
      upwarninfo: "上临界警告+阈值应小于或等于上临界值!",
      lowcriticalinfo2: "下临界值+2倍复位阈值应小于或等于上临界警告!",
      lowcriticalinfo3: "下临界值+2倍复位阈值应小于或等于上临界值!",
      lowwarninfo2: "下临界警告+2倍复位阈值应小于或等于上临界值!"
    },
    resetdevicedl: {
      txt: "网络管理卡重置",
      txt1: "在几秒钟后网络管理卡会被重置。",
      txt2: "您将会被重定向到登录页面，在",
      txt3: "秒后。",
      txt4: "如果重定向无法连接，请点击",
      txt5: "此连接",
      txt6: "到登录页面。"
    },
    language: {
      txt: "语言",
      type: {
        en: "English",
        cn: "简体中文"
      }
    },
    logout: "退出",
    doreallylogout: "您确定要退出吗?",
    tree: "PDU 浏览",
    login: "以 {0} 身份登录",
    greeting: "欢迎来到 Enlogic",
    ip:   "<b>IP 地址: </b>{0}",
    time: "<b>登录时间: </b>{0}"
  };
/*--> FOR DIALOG HEAD END <--*/

/*--> FOR INDEX(ALL DASHBOARD EXCEPT SENSOR PART) PAGE and SOME PROMPT FOR RESET ACTION BEGIN <--*/
  /*--left pages--*/
  /*Dashboard page*/
  MODEL.dashboard = {
    loading: "加载中",
    status: "状态",
    alarms: "告警",
    ok: "正常",
    currentrms: "电流, RMS (A)",
    cb1current: "断路器1 电流",
    cb2current: "断路器2 电流",
    cb1status: "断路器1 状态",
    cb2status: "断路器2 状态",
    voltagerms: "电压, RMS (V)",
    voltenergy: "电能 (kWh)",
    pdupowerenergy: "PDU 电能",
    externalsensor: "外部传感器, 类型",
    externalsensortype: "Type",
    sensorname: "传感器名字",
    pduname: "PDU 名字",
    location: "位置",
    value: "值",
    activealarmpdu: "当前告警 PDU #",
    close: "关闭",
    alarmtype: "告警类型",
    count: "个数"
  };

  /*PDU #*/
  MODEL.pdu = {
    pduset: "PDU 设置",
    pduenergy: "PDU 能量",
    pduattribute: "PDU 属性",
    pduname: "PDU 名字",
    pdulocation: "PDU 位置",
    pduunitdelay: "PDU 冷启动延迟 (0 - 3600 s)",
    outletstate: "PDU 启动时输出端口状态",
    resetenergy: "复位电能",
    resetolenergy: "复位输出端口电能",
    pdumacaddress: "PDU MAC 地址",
    rating: "额定值",
    resetenergymeter: "可复位电能",
    activepowervalue: "有效功率值 (W)",
    activepowerset: "有效功率状态，设置",
    reset: "重置",
    resetsuccess: "重置成功!",
    surechangeol: "您确定想为所有输出端口做此改变吗?",
    reallyresetenergy: "您确定想重置电能？",
    nopermission: "无权限:"
  }

  /*Input Phases*/
  MODEL.phases = {
    phasecurrentrms: "相电流,RMS",
    reading: "读取值 ",
    lowercritical: "下临界值 ",
    lowerwarning: "下临界警告 ",
    upperwarning: "上临界警告 ",
    uppercritical: "上临界值 ",
    statusset: "状态, 设置",
    phasevoltagerms: "相电压, RMS",
    phasepower: "相功率",
    apparentpower: "视在功率 (VA)",
    powerfactor: "功率因素",
    activepower: "可复位电能 (kWh)"
  };

  window.UPDATESTATUS = {
    0: "更新失败!",
    2: "由于长时间处于未活动状态您已经被注销.",
    3: "选择的用户组已分配给用户，不能被删除。",
    41: "您的旧密码输入不正确!",
    42: "端口被占用!",
    43: "您的登录密码过于简单不能被用作身份验证依据!",
    51: "由于过载限制,下面的输出端口不能被打开.<br/>( 输出端口ID: [ {0} ] )"
  };
/*--> FOR INDEX(ALL DASHBOARD EXCEPT SENSOR PART) PAGE and SOME PROMPT FOR RESET ACTION END <--*/

/*--> FOR SENSOR FUNCTION BEGIN <--*/
  /*Sensor page*/
  MODEL.sensor = { 
    id: "编号",
    typeset: "类型",
    statusset: "状态, 设置",
    value: "值",
    serialno: "序列号",
    aisle: "通道",
    name: "名字",
    description: "描述",
    location: "位置"
  }
/*--> FOR SENSOR FUNCTION END <--*/

/*--> FOR CHANGE PASSWORD DIALOG BEGIN <--*/
  /**--Menu Dialog Pages--*/
  MODEL.changepw = {
    oldpass: "旧密码",
    newpass: "新密码",
    cfmpass: "重复新密码",
    chgpwfail: "修改密码失败.",
    confirminfo: "After changing the setting, you will need to login again.<br/> Do you really want to apply changes now?"
  };
/*--> FOR CHANGE PASSWORD DIALOG END <--*/

/*--> FOR USERS DIALOG BEGIN <--*/
  MODEL.users = {
    noselect: "请选择一行!",
    usernotbedel: "此用户不能被删除!",
    notdelyourself: "您不能删除您自己!",
    notdelthisuser: "您不能删除此用户!",
    reallydeluser: "您确定想删除此用户: {0} ?",
    nopermission: "您没有权限修改此用户!",
    enteruserexist: "输入的用户名已经存在!",
    noselectrole: "请选择一个用户组!",
    setting: "设置",
    snmpv3: "SNMPv3",
    // roles: "用户组",
    preferences: "首选项",
    // 
    createnewuser: "创建新用户",
    edituser: "编辑用户:",
    active: "活动",
    roles: "用户组",
    username: "用户名",
    fullname:"全名",
    password: "密码",
    cfpassword: "确认密码",
    telnumber: "电话号码",
    emailaddress: "邮箱地址",
    enabled: "启用",
    forcepwchntlg: "在下次登录时强制修改密码",
    // 
    enablesnmpacc: "启用SNMPv3的访问",
    securitylevel: "安全级别",
    usepwasauthpass: "使用密码作为身份验证码",
    authpass: "身份验证码",
    cfauthpass: "确认身份验证码",
    useauthaspri: "使用身份验证码作为加密密钥",
    pripass: "加密密钥",
    cfpripass: "确认加密密钥",
    authalgorithm: "身份验证算法",
    prialgorithm: "加密算法",
    // 
    temperatureunit: "温度单位",
    // 
    news: "新建",
    edits: "编辑",
    deletes: "删除"
  };

  window.PINGSTATUS = {
    0: "可访问",
    1: "不可访问",
    2: "等待可靠的响应",
    3: "错误"
  };
/*--> FOR USERS DIALOG END <--*/

/*--> FOR NETWORK CARD RESET DIALOG BEGIN <--*/
  MODEL.netsvr = {
    change: "更改设置后，您将需要重置网络管理卡使其生效。您确定想现在应用此变更吗？"
  };

  MODEL.resetdev = {
    doresetcard: "您确定要重置网络管理卡吗?"
  };
/*--> FOR NETWORK CARD RESET DIALOG END <--*/

/*--> FOR HTTP DIALOG BEGIN <--*/
  MODEL.http = {
    httpport: "HTTP端口",
    httpsport: "HTTPS端口"
  };
/*--> FOR HTTP DIALOG END <--*/

/*--> FOR SNMP DIALOG BEGIN <--*/
  MODEL.snmp = {
    general: "常规项",
    traps: "Traps",
    snmpv12set: "SNMP v1 / v2c 设置",
    snmpv12: "SNMP v1 / v2c",
    enable: "启用",
    readcs: "读权限授权字串",
    writecs: "写权限授权字串",
    snmpv3set: "SNMP v3 设置",
    snmpv3: "SNMP v3",
    mibiigroup: "MIB-II 系统组",
    syscontact: "sysContact",
    sysname: "sysName",
    syslocation: "sysLocation",
    snmptrapset: "SNMP Traps 设置",
    snmptraprule: "系统 SNMP Traps事件规则",
    host: "主机",
    port: "端口",
    community: "授权字串",
    helpinfo: "请进入 设备配置 > 事件规则设置 进行详细设置.",
    downloadmib: "下载MIB文件"
  };
/*--> FOR SNMP DIALOG END <--*/

/*--> FOR TELNET DIALOG BEGIN <--*/
  MODEL.telnet = {
    telnetport: "Telnet端口",
    enabletelnet: "启用Telnet访问"
  };
/*--> FOR TELNET DIALOG END <--*/

/*--> FOR NETWORK CONFIGUARATION DIALOG END <--*/
  MODEL.network = {
    ipprotocol: "IP协议",
    ipv4set: "IPv4设置",
    ipv4only: "仅选IPv4",
    ipv6only: "仅选IPv6",
    ipv46: "IPv4 & IPv6",
    dnsresolve: "DNS服务器",
    preference: "首选项",
    ipv4address: "IPv4地址",
    ipv6address: "IPv6地址",
    ipautoconfig: "IP地址获取方法",
    ipaddress: "IP地址",
    netmask: "网络掩码",
    gateway: "网关IP地址",
    specficdns: "手动配置DNS服务器",
    primarydns: "DHCP 协议",
    secondarydns: "静态地址",
    dnssuffix: "DNS后缀(可选)"
  };
/*--> FOR NETWORK CONFIGUARATION DIALOG END <--*/

/*--> FOR HTTP SETTING BEGIN <--*/
  MODEL.forcehttpinfo = {
    confirminfo: "改变设置后, 您将需要重新设置网络管理卡使其生效.<br/> 您确定现在应用此变化吗?"
  };
/*--> FOR HTTP SETTING END <--*/

/*--> FOR DATALOG DIALOG BEGIN <--*/
  MODEL.datalog = {
    loginterval: "日志记录间隔 (1 - 1440 分钟)",
    enablelog: "启用数据日志记录",
    illustrateinfo: "数据记录可存储多达2000条记录，存储是基于日志的时间间隔设置的最大时间范围内的数据。例如，对于日志的时间间隔为600秒（10分钟），数据日志将会包含13.89天的数据记录，一旦达到最大规模，最早的条目将会被较新的条目覆盖。"
  };
/*--> FOR DATALOG DIALOG END <--*/

/*--> FOR DATATIME DIALOG END <--*/
  MODEL.datetime = {
    timezone: "时区",
    usertime: "用户指定时间",
    date: "日期(YYYY/MM/DD hh:mm:ss)",
    time: "时间(hh:mm:ss)",
    synntpserver: "与NTP服务器同步",
    firstip: "主服务器IP地址",
    secondip: "次服务器IP地址",
    checkntp: "检查NTP服务器",
    checkntpinfo: "请输入正确的NTP服务器！"
  };
/*--> FOR DATATIME DIALOG END <--*/

/*--> FOR PDU INFO DIALOG BEGIN <--*/
  MODEL.pduinfo = {
    pdunm: "PDU 名字:",
    pduloc: "位置:"
  };
/*--> FOR PDU INFO DIALOG END <--*/

/*--> FOR DOWNLOAD LOG DIALOG BEGIN <--*/
  MODEL.diagnostic = {
    diagconf: "日志下载",
    dldiaginfo: "下载日志信息",
    clearlog: "清除日志",
    confirminfo: "您确定要清除日志信息吗?"
  };
/*--> FOR DOWNLOAD LOG DIALOG END <--*/

/*--> FOR PDU CONFIGURATION DIALOG END <--*/
  MODEL.blkconf = {
    dlconf: "下载配置",
    dlconffile: "下载配置文件",
    Uploadconf: "上传配置",
    upload: "上传",
    uploadsucc: "上传成功, 更新中...",
    applyconf: "应用配置",
    pleasewait: "请稍候...!"
  };
/*--> FOR PDU CONFIGURATION DIALOG END <--*/

/*--> FOR DEVICE INFOMATION DIALOG END <--*/
  MODEL.devinfo = {
    pduinfo: "PDU 信息",
    outlets: "输出端口",
    circbreak: "断路器",
    sku: "SKU",
    serialnum: "序列号",
    rating: "额定值",
    functype: "功能类型",
    pdutype: "功能类型",
    pdutypev: "PDU可测",
    ipv4addr: "设备IPv4地址",
    ipv6addr: "设备IPv6地址",
    macaddr: "设备MAC地址",
    fwversion: "固件版本",
    webversion: "Web版本",
    pdumib: "PDU-MIB",
    download: "下载",
    label: "编号",
    operatevol: "工作电压",
    ratecurrent: "额定电流",
    type: "类型",
    protoutlet: "被保护的输出端口"
  };

  window.CBTYPE = {
      0: "无"
    , 1: "单极断路器"
    , 2: "双极断路器"
  };
/*--> FOR DEVICE INFOMATION DIALOG END <--*/

/*--> FOR BUTTON IN DIALOG BEGIN <--*/
  /**--Buttons--*/ 
  MODEL.buttons = {
    cancels: "取消",
    oks: "确认",
    closes: "关闭",
    yes: "是",
    no: "否",
    save: "保存",
    edit: "编辑",
    action: "操作",
    message: "消息",
    info: "信息",
    runping: "执行Ping",
    run: "运行"
  };
/*--> FOR BUTTON IN DIALOG END <--*/

/*--> FOR CURRENT(CB) ALARM NAME IN INDEX(DASHBOARD) PAGE BEGIN <--*/
  MODEL.master.setalarmdl.alarm = "告警";
  MODEL.master.setalarmdl.off = "关闭";
  MODEL.master.setalarmdl.on = "开启";
  MODEL.master.setalarmdl.disable = "禁用";
  MODEL.master.setalarmdl.enable = "启用";
  MODEL.master.setalarmdl.normal = "正常";
/*--> FOR CURRENT(CB) ALARM NAME IN INDEX(DASHBOARD) PAGE BEGIN <--*/

/*--> FOR SOME VALIDATE PROMPT BEGIN <--*/
  window.VALID = {
      ipv4: "请输入正确的IPV4地址"
    , ipv6: "请输入正确的IPV6地址"
    , nowhite: "不允许空白字符"
    , greater: "请输入大一些的数字"
    , customdate: "日期格式不正确"
    , lowchar: "请至少输入一个小写字母"
    , uppchar: "请至少输入一个大写字母"
    , numchar: "请至少输入一个数字"
    , spechar: "请至少输入一个特殊字符"
    , diffval: "请输入不同的值"
  };
/*--> FOR SOME VALIDATE PROMPT END <--*/


  MODEL.login.authfail = "认证失败";
  MODEL.login.connfail = "连接拒绝";
  MODEL.datetime.succ = "验证成功";
  MODEL.datetime.fail = "验证失败";

})(window);

/*messages_zh.js*/
/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ZH (Chinese, 中文 (Zhōngwén), 汉语, 漢語)
 */
jQuery.extend(jQuery.validator.messages, {
    required: "必选字段",
		remote: "请修正该字段",
		email: "请输入正确格式的电子邮件",
		url: "请输入合法的网址",
		date: "请输入合法的日期",
		dateISO: "请输入合法的日期 (ISO).",
		number: "请输入合法的数字",
		digits: "只能输入整数",
		creditcard: "请输入合法的信用卡号",
		equalTo: "请再次输入相同的值",
		accept: "请输入拥有合法后缀名的字符串",
		maxlength: jQuery.validator.format("请输入一个长度最多是 {0} 的字符串"),
		minlength: jQuery.validator.format("请输入一个长度最少是 {0} 的字符串"),
		rangelength: jQuery.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),
		range: jQuery.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
		max: jQuery.validator.format("请输入一个最大为 {0} 的值"),
		min: jQuery.validator.format("请输入一个最小为 {0} 的值")
});
