/*configuration.js*/
/*Model*/
(function(window) {

/*--> FOR ALARM BEGIN <--*/
  window.ALARMTYPE = {
    0: "Unit",
    1: "Input Phases",
    2: "Circuit Breaker",
    3: "Outlets",
    4: "External Sensors"
  };

  window.SENSORTYPE = {
    1: "Temperature (℃)",
    2: "Humidity (%)",
    3: "Dry Contact",
    4: "Door Contact",
    5: "Spot Fluid",
    6: "Rope Fluid",
    7: "Smoke",
    8: "Beacon"
  };

  window.TEMPUNIT = {
    0: "C",
    1: "F"
  };

  window.ALARMUNITTYPE = {
    A: {
      unit: " (A)",
      factor: 1000,
      fixed: 2,
      max: 16,
      min: 0,
      title: "Current"
    },
    V: {
      unit: " (V)",
      factor: 1000,
      fixed: 0,
      max: 260,
      min: 90,
      title: "Voltage"
    },
    VA: {
      unit: " (VA)",
      factor: 1000,
      fixed: 0,
      min: 0,
      max: 49140,
      title: "Apparent Power"
    },
    W: {
      unit: " (W)",
      factor: 1000,
      fixed: 0,
      min: 0,
      max: 49140,
      title: "Active Power"
    },
    Wh: {
      unit: " (Wh)",
      factor: 1000,
      fixed: 2,
      min: 0,
      max: 1000000000,
      title: "Energy"
    },
    C: {
      unit : " (°C)",
      factor: 1,
      fixed: 0,
      min: 0,
      max: 75,
      title: "Temperature"
    },
    F: {
      unit : " (F)",
      factor: 1,
      fixed: 0,
      min: 32,
      max: 167,
      title: "Temperature"
    },
    H: {
      unit : " (%)",
      factor : 1,
      fixed: 0,
      min: 15,
      max: 90,
      title: "Humidity"
    }
  };
/*--> FOR ALARM END <--*/

/*--> FOR POWER ENERGY BEGIN <--*/
  window.POWERENERGY = {
    "activepower" : "Active Power (W)",
    "apparentpower" : "Apparent Power (VA)",
    "totalenergymeter" : "Total Energy Meter (kWh)"
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
    spEnableAll: "Enable All",
    spEventRule: "Event Rule",
  };
/*--> FOR ENENTRULE SETTING DIALOG END <--*/

  /*Root of the tree*/
  EL.TreeRoot = {
    "id": "dashboard",
    "text": "Dashboard",
    "iconCls": "icon-desk"
  };

/*--> FOR LOGIN PAGE BEGIN <--*/
  /*login page*/ 
  MODEL.login = {
    title:    "Login",
    username: "Username",
    password: "Password",
    login:    "Login",
    clear:    "Clear"
  };
/*--> FOR LOGIN PAGE END <--*/

/*--> FOR DIALOG HEAD BEGIN <--*/
  /*master page*/
  MODEL.master = {
    useradmin: {
      txt: "User Administration",
      changepw: {
        txt: "Change Password",
        dlg: "Change User Password"
      },
      users: {
        txt: "Users",
        dlg: "Manage Users"
      },    
      roles: {
        txt: "Roles",
        dlg: "Manage Roles"
      }
    },
    deviceadmin: {
      txt: "Device Configuration",
      networkser: {
        txt: "Network Services",
        http: {
          txt: "HTTP",
          dlg: "HTTP Settings"
        },
        snmp: {
          txt: "SNMP",
          dlg: "SNMP Settings"
        },
        ssh: {
          txt: "SSH",
          dlg: "SSH Settings"
        },
        telnet: {
          txt: "TELNET",
          dlg: "TELNET Settings"
        },
        ftp: {
          txt: "FTP",
          dlg: "FTP Settings"
        }
      },
      networkcon: {
        txt: "Network Configuration",
        dlg: "Network Configuration"
      },
      security: {
        txt: "Security",
        loginset: {
          txt: "Login Settings",
          dlg: "Login Settings"
        },
        passwordpol: {
          txt: "Password Policy",
          dlg: "Password Policy"
        },
        forcehttps: {
          txt: "Force HTTPS for Web Access",
          dlg: "Force Https"
        }
      },
      eventrules: {
        txt: "Event Rules",
        dlg: "Event Rule Setting"
      },
      datalog: {
        txt: "Data Log",
        dlg: "Data Logging Settings"
      },
      datetime: {
        txt: "Date/Time",
        dlg: "Configure Date/Time Settings"
      },
      smtpemail: {
        txt: "SMTP Email",
        dlg: "SMTP Server Settings"
      },
      serverreach: {
        txt: "Server Reachability",
        dlg: "Server Reachability"
      },
      usb: {
        txt: "USB",
        dlg: "USB Settings"
      },
      pduinfo: {
        txt: "PDU Info",
        dlg: "PDU Info Settings"
      },
      sensorinfo: {
        txt: "Sensor Info",
        dlg: "Sensor Info Settings"
      }
    },
    systemadmin: {
      txt: "System Administration",
      vweventlog: {
        txt: "View Event Log",
        dlg: "View Event Log"
      },
      vwdatalog: {
        txt: "View Data Log",
        dlg: "View Data Log"
      },
      firmwaremt: {
        txt: "Firmware Maintenance",
        udfirmware: {
          txt: "Update Firmware",
          dlg: "Firmware update"
        },
        vwfirmwareud: {
          txt: "View Firmware Update History",
          dlg: "Firmware Update History"
        }
      },
      conusers: {
        txt: "Connected Users",
        dlg: "Connected Users"
      },
      diagnostic: {
        txt: "Download Log",
        dldiaginfo: {
          txt: "Download Log Information",
          dlg: "Download Log Information"
        }
      },
      pduconfig: {
        txt: "PDU Configuration file",
        dlg: "Configuration File"
      },
      deviceinfo: {
        txt: "Device Information",
        dlg: "Device Information"
      },
      nwcardreset: {
        txt: "Network Card Reset",
        dlg: "Network Card Reset"
      }
    },
    help: {
      txt: "Help",
      userguide: {
        txt: "User Guide",
        dlg: "User Guide"
      }
    },
    setalarmdl: {
      lowercritical: "Lower Critical",
      lowerwarning: "Lower Warning",
      upperwarning: "Upper Warning",
      uppercritical: "Upper Critical",
      resetthreshold: "Reset Threshold",
      alarmscdelay: "Alarm State Change Delay (samples):",
      alarmsetting: "Alarm Setting",
      enablealarm: "Enable Alarm Setting",
      updatefail: "Update failed",
      lowcriticalinfo: "Low critical + threshold should be less than or equal to low warning!",
      lowwarninfo: "Low warning + 2 times reset threshold should be less than or equal to up warning!",
      upwarninfo: "Up warning + threshold should be less than or equal to up critical!",
      lowcriticalinfo2: "Low critical + 2 times reset threshold should be less than or equal to up warning!",
      lowcriticalinfo3: "Low critical + 2 times reset threshold should be less than or equal to up critical!",
      lowwarninfo2: "Low Warning + 2 times threshold should be less than or equal to up critical!"
    },
    resetdevicedl: {
      txt: "Network Card Reset",
      txt1: "The Network Card will be reset in a few seconds.",
      txt2: "You will be redirected to the login page within",
      txt3: "seconds.",
      txt4: "If redirection does not work, use",
      txt5: "this link",
      txt6: "to the login page."
    },
    language: {
      txt: "Language",
      type: {
        en: "English",
        cn: "Chinese"
      }
    },
    logout: "Logout",
    doreallylogout: "Do you really want to logout?",
    tree: "PDU Explorer",
    login: "Logged in as {0}",
    greeting: "Welcome to Enlogic",
    ip:   "<b>IP Adress: </b>{0}",
    time: "<b>Login Time: </b>{0}"
  };
/*--> FOR DIALOG HEAD END <--*/

/*--> FOR INDEX(ALL DASHBOARD EXCEPT SENSOR PART) PAGE and SOME PROMPT FOR RESET ACTION BEGIN <--*/
  /*--left pages--*/ 
  /*Dashboard page*/
  MODEL.dashboard = {
    loading: "Loading",
    status: "Status",
    alarms: "Alarms",
    ok: "OK",
    currentrms: "Current, RMS (A)",
    currentrms2: "Current, RMS (A)",
    cb1current: "CB1 Current",
    cb2current: "CB2 Current",
    cb1status: "CB1 Status",
    cb2status: "CB2 Status",
    voltagerms: "Voltage, RMS (V)",
    voltenergy: "Energy (kWh)",
    pdupowerenergy: "Power",
    externalsensor: "External Sensors",
    externalsensortype: "Type",
    sensorname: "Sensor Name",
    pduname: "PDU Name",
    location: "Location",
    value: "Value"
    // activealarmpdu: "Active Alarms for PDU #",
    // close: "Close",
    // alarmtype: "Alarm Type",
    // count: "Count"
  };

  /*PDU #*/
  MODEL.pdu = {
    pduset: "PDU Setting",
    pduenergy: "PDU Energy",
    pduattribute: "PDU Attribute",
    pduname: "PDU Name",
    pdulocation: "PDU Location",
    pduunitdelay: "PDU Unit Coldstart Delay (0 - 3600 s)",
    outletstate: "Outlet State On PDU Startup",
    resetenergy: "Reset Energy",
    resetolenergy: "Reset Outlet Energy",
    pdumacaddress: "PDU MAC Address",
    rating: "Rating",
    resetenergymeter: "Resettable Energy Meter",
    activepowervalue: "Active Power Value (W)",
    activepowerset: "Active Power Status, Setting",
    reset: "Reset",
    resetsuccess: "Reset Success!",
    surechangeol: "Are you sure you want to make this change for all outlets?",
    reallyresetenergy: "Do you really want to reset the energy?",
    nopermission: "No Permission:"
  };

  /*Input Phases*/
  MODEL.phases = {
    phasecurrentrms: "Phase Current, RMS",
    reading: "Reading ",
    lowercritical: "Lower Critical ",
    lowerwarning: "Lower Warning ",
    upperwarning: "Upper Warning ",
    uppercritical: "Upper Critical ",
    statusset: "Status, Setting",
    phasevoltagerms: "Phase Voltage, RMS",
    phasepower: "Phase Power",
    apparentpower: "Apparent Power (VA)",
    powerfactor: "Power Factor",
    activepower: "Resettable Energy Meter"
  };

  window.UPDATESTATUS = {
    0: "Update failed!",
    2: "You have been logged out due to inactivity.",
    3: "The selected role is currently assigned to users and cannot be deleted.",
    41: "Your old password is not correct!",
    42: "The port is occupied!",
    43: "Your login password is too simple to use as authentication pass phrase!",
    51: "The outlet(s) below cannot be turned on at this time due to an overload restriction.<br/>( Outlet ID: [ {0} ] )"
  };
/*--> FOR INDEX(ALL DASHBOARD EXCEPT SENSOR PART) PAGE and SOME PROMPT FOR RESET ACTION END <--*/

/*--> FOR SENSOR FUNCTION BEGIN <--*/
  /*Sensor page*/
  MODEL.sensor = {
    id: "ID",
    typeset: "Type",
    statusset: "Status, Setting",
    value: "Value",
    serialno: "Serial NO.",
    aisle: "Aisle",
    name: "Name",
    description: "Description",
    location: "Location"
  };
/*--> FOR SENSOR FUNCTION END <--*/

/*--> FOR CHANGE PASSWORD DIALOG BEGIN <--*/ 
  /**--Menu Dialog Pages--*/
  MODEL.changepw = {
    oldpass: "Old Password",
    newpass: "New Password",
    cfmpass: "Confirm Password",
    chgpwfail: "Change Password Failed.",
    confirminfo: "After changing the setting, you will need to login again.<br/> Do you really want to apply changes now?"
  };
/*--> FOR CHANGE PASSWORD DIALOG END <--*/

/*--> FOR USERS DIALOG BEGIN <--*/
  MODEL.users = {
    // noselect: "Please select a row!",
    // usernotbedel: "This user cannot be deleted!",
    // notdelyourself: "You cannot delete yourself!",
    // notdelthisuser: "You cannot delete this user!",
    // reallydeluser: "Do you really want to delete the user: {0} ?",
    // nopermission: "You do not have permission to modify this user!",
    // enteruserexist: "Entered username is already existed!",
    // noselectrole: "Please select a role!",
    // setting: "Settings",
    // snmpv3: "SNMPv3",
    // roles: "Roles",
    // preferences: "Preferences",
    // 
    // createnewuser: "Create New User",
    // edituser: "Edit User:",
    // active: "Active",
    // roles: "Roles",
    username: "User Name",
    // fullname:"Full Name",
    password: "Password",
    cfpassword: "Confirm Password",
    // telnumber: "Telephone Number",
    // emailaddress: "eMail Address",
    // enabled: "Enabled",
    // forcepwchntlg: "Force password change on next login",
    // 
    // enablesnmpacc: "Enable SNMPv3 Access",
    // securitylevel: "Security Level",
    // usepwasauthpass: "Use Password as Authentication Pass Phrase",
    // authpass: "Authentication Pass Phrase",
    // cfauthpass: "Confirm Authentication Pass Phrase",
    // useauthaspri: "Use Authentication Pass Phrase as Privacy Pass Phrase",
    // pripass: "Privacy Pass Phrase",
    // cfpripass: "Confirm Privacy Pass Phrase",
    // authalgorithm: "Authentication Algorithm",
    // prialgorithm: "Privacy Algorithm",
    // 
    // temperatureunit: "Temperature Unit",
    // 
    // news: "New",
    // edits: "Edit",
    // deletes: "Delete"
  };

  window.PINGSTATUS = {
    0: "Reachable",
    1: "Unreachable",
    2: "Waiting for Reliable Response",
    3: "Error"
  };
/*--> FOR USERS DIALOG END <--*/

/*--> FOR NETWORK CARD RESET DIALOG BEGIN <--*/
  MODEL.netsvr = {
    change : " After changing the setting, you will need to reset the Network Card to take effect. Do you really want to apply changes now?"
  };

  MODEL.resetdev = {
    doresetcard: "Do you really want to reset the Network Card?"
  };
/*--> FOR NETWORK CARD RESET DIALOG END <--*/

/*--> FOR HTTP DIALOG BEGIN <--*/
  MODEL.http = {
    httpport: "HTTP Port",
    httpsport: "HTTPS Port"
  };
/*--> FOR HTTP DIALOG END <--*/

/*--> FOR SNMP DIALOG BEGIN <--*/
  MODEL.snmp = {
    general: "General",
    traps: "Traps",
    // snmpv12set: "SNMP v1 / v2c Settings",
    // snmpv12: "SNMP v1 / v2c",
    // enable: "Enable",
    readcs: "Read Community String",
    writecs: "Write Community String",
    // snmpv3set: "SNMP v3 Settings",
    // snmpv3: "SNMP v3",
    // mibiigroup: "MIB-II System Group",
    // syscontact: "sysContact",
    // sysname: "sysName",
    // syslocation: "sysLocation",
    // snmptrapset: "SNMP Trap Settings",
    // snmptraprule: "System Snmp Trap Event Rule",
    host: "Host",
    port: "Port",
    community: "Community",
    // helpinfo: "Please use the Device Configuration > Event Rules Dialog for a more detailed trap setup.",
    // downloadmib: "Download MIB"
  }
/*--> FOR SNMP DIALOG END <--*/

/*--> FOR TELNET DIALOG BEGIN <--*/
  MODEL.telnet = {
    telnetport: "Telnet Port",
    enabletelnet: "Enable Telnet Access"
  }
/*--> FOR TELNET DIALOG END <--*/

/*--> FOR NETWORK CONFIGUARATION DIALOG END <--*/
  MODEL.network = {
    ipprotocol: "IP Protocol",
    ipv4set: "IPv4 Settings",
    ipv4only: "IPv4 Only",
    ipv6only: "IPv6 Only",
    ipv46: "IPv4 & IPv6",
    // dnsresolve: "DNS Resolver",
    preference: "Preference",
    ipv4address: "IPv4 Address",
    ipv6address: "IPv6 Address",
    ipautoconfig: "IP Auto Configuration",
    ipaddress: "IP Address",
    netmask: "Net Mask",
    gateway: "Gateway",
    // specficdns: "Specific DNS server manually",
    dhcppro: "DHCP Protocol",
    staticpro: "STATIC Protocol"
    // dnssuffix: "DNS Suffix(Optional)"
  }
/*--> FOR NETWORK CONFIGUARATION DIALOG END <--*/

/*--> FOR HTTP SETTING BEGIN <--*/
  MODEL.forcehttpinfo = {
    confirminfo: "After changing the setting, you will need to reset the Network Card to take effect.<br/> Do you really want to apply changes now?"
  }
/*--> FOR HTTP SETTING END <--*/

/*--> FOR DATALOG DIALOG BEGIN <--*/
  MODEL.datalog = {
    loginterval: "Log Interval (1 - 1440 minutes)",
    enablelog: "Enable Data Logging",
    illustrateinfo: "The data log can store up to 2000 records. The maximum time range of stored data is based upon the log interval setting.  For example, for log interval = 600 seconds (10 minutes), the data log will contain up to 13.89 days of data.  Once the data log reaches the maximum size, the oldest entries will be overwritten by the newer entries."
  };
/*--> FOR DATALOG DIALOG END <--*/

/*--> FOR DATATIME DIALOG END <--*/
  MODEL.datetime = {
    timezone: "Time Zone",
    usertime: "User Specified Time",
    date: "DateTime (YYYY/MM/DD hh:mm:ss)",
    time: "Time (hh:mm:ss)",
    synntpserver: "Synchronize with NTP Server",
    firstip: "First Time Server IP Address",
    secondip: "Second Time Server IP Address",
    checkntp: "Check NTP Servers",
    checkntpinfo: "Please input the right NTP Server!"
  };
/*--> FOR DATATIME DIALOG END <--*/

/*--> FOR PDU INFO DIALOG BEGIN <--*/
  MODEL.pduinfo = {
    pdunm: "PDU Name:",
    pduloc: "Location:"
  };
/*--> FOR PDU INFO DIALOG END <--*/

/*--> FOR DOWNLOAD LOG DIALOG BEGIN <--*/
  MODEL.diagnostic = {
    // diagconf: "Download Log",
    downloadlog: "Download Log Information",
    clearlog: "Clear Log",
    confirminfo: "Are you sure to clear PDU log?"
  };
/*--> FOR DOWNLOAD LOG DIALOG END <--*/

/*--> FOR PDU CONFIGURATION DIALOG END <--*/
  MODEL.blkconf = {
    dlconf: "Download Configuration",
    dlconffile: "Download Configuration File",
    Uploadconf: "Upload Configuration",
    upload: "Upload",
    uploadsucc: "Upload successful, updating...",
    applyconf: "Apply Configuration",
    pleasewait: "Please wait...!"
  };
/*--> FOR PDU CONFIGURATION DIALOG END <--*/

/*--> FOR DEVICE INFOMATION DIALOG END <--*/
  MODEL.devinfo = {
    pduinfo: "PDU Information",
    outlets: "Outlets",
    circbreak: "Circuit Breakers",
    sku: "SKU",
    serialnum: "Serial Number",
    rating: "Rating",
    functype: "Function Type",
    // pdutype: "Function Type",
    functypev: "Metered",
    ipv4addr: "Device IPv4 Address",
    ipv6addr: "Device IPv6 Addresses",
    macaddr: "Device MAC Address",
    fwversion: "Firmware Version",
    webversion: "Web Version",
    pdumib: "PDU-MIB",
    download: "Download",
    label: "Label",
    operatevol: "Operating Voltage",
    ratecurrent: "Rated Current",
    type: "Type",
    protoutlet: "Protected Outlets"
  };

  window.CBTYPE = {
      0: "None"
    , 1: "1-Pole Circuit Breaker"
    , 2: "2-Pole Circuit Breaker"
  };
/*--> FOR DEVICE INFOMATION DIALOG END <--*/

/*--> FOR BUTTON IN DIALOG BEGIN <--*/
  /*--Buttons--*/ 
  MODEL.buttons = {
    cancels: "Cancel",
    oks: "OK",
    closes: "Close",
    yes: "Yes",
    no: "No",
    save: "Save",
    edit: "Edit",
    action: "Action",
    message: "Message",
    info: "Information",
    runping: "Run Ping",
    run: "Run"
  };
/*--> FOR BUTTON IN DIALOG END <--*/

/*--> FOR CURRENT(CB) ALARM NAME IN INDEX(DASHBOARD) PAGE BEGIN <--*/
  MODEL.master.setalarmdl.alarm = "Alarm";
  MODEL.master.setalarmdl.off = "Off";
  MODEL.master.setalarmdl.on = "On";
  MODEL.master.setalarmdl.disable = "Disable";
  MODEL.master.setalarmdl.enable = "Enable";
  MODEL.master.setalarmdl.normal = "Normal";
/*--> FOR CURRENT(CB) ALARM NAME IN INDEX(DASHBOARD) PAGE BEGIN <--*/

/*--> FOR SOME VALIDATE PROMPT BEGIN <--*/
  window.VALID = {
      ipv4: "Please enter a valid ipv4 address"
    , ipv6: "Please enter a valid ipv6 address"
    , nowhite: "White spaces are not allowed"
    , greater: "Please enter a larger number"
    , customdate: "Please enter valid datetime"
    , lowchar: "Please enter at least one lower case character."
    , uppchar: "Please enter at least one upper case character."
    , numchar: "Please enter at least one numeric case character."
    , spechar: "Please enter at least one special character."
    , diffval: "Please enter a different value."
    , oldpwd: "Old password wrong"
    //add by zzw begin
    , greaterC1: "Upper critical - 1A should be more than or equal to upper warning!"
    , greaterC2: "Upper warning - 1A should be more than or equal to lower warning!"
    , greaterC3: "Lower warning - 1A should be more than or equal to lower critical!"
    , greaterV1: "Upper critical - 2V should be more than or equal to upper warning!"
    , greaterV2: "Upper warning - 4V should be more than or equal to lower warning!"
    , greaterV3: "Lower warning - 2V should be more than or equal to lower critical!"
    , greaterP1: "Upper critical - 100W should be more than or equal to upper warning!"
    , greaterP2: "Upper warning - 200W should be more than or equal to lower warning!"
    , greaterP3: "Lower warning - 100W should be more than or equal to lower critical!"
    , greaterE1: "Upper critical - 100W should be more than or equal to upper warning!"
    , greaterE2: "Upper warning - 200W should be more than or equal to lower warning!"
    , greaterE3: "Lower warning - 100W should be more than or equal to lower critical!"
    , greaterE4: "Upper critical - 3% should be more than or equal to upper warning!"
    , greaterE5: "Upper warning - 6% should be more than or equal to lower warning!"
    , greaterE6: "Lower warning - 3% should be more than or equal to lower critical!"
    //add by zzw end
  };
/*--> FOR SOME VALIDATE PROMPT END <--*/


  MODEL.login.authfail = "Authentication failed";
  MODEL.login.connfail = "Connection refused";
  MODEL.datetime.succ = "Succeeded";
  MODEL.datetime.fail = "Failed";

})(window);
