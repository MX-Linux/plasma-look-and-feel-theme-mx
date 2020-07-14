var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/Configuration": {
                    "PreloadWeight": "34"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///usr/share/backgrounds/mx_blue.jpg"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "97"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "535",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "favorites": "applications:conky-toggle.desktop,applications:libreoffice-startcenter.desktop,applications:mx-tools.desktop,applications:mx-packageinstaller.desktop,applications:Help.desktop,applications:org.kde.konsole.desktop,applications:org.kde.ksysguard.desktop,applications:Quick_System_Info.desktop",
                            "favoritesPortedToKAstats": "true",
                            "icon": "/usr/local/share/icons/mxfcelogo-rounded.png",
                            "showAppsByName": "true",
                            "systemApplications": "systemsettings.desktop,org.kde.kinfocenter.desktop"
                        },
                        "/Configuration/Shortcuts": {
                            "global": "Alt+F1"
                        },
                        "/Shortcuts": {
                            "global": "Alt+F1"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "26"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "535",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "displayedText": "Number"
                        }
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "localPath": "/home/demo/.local/share/plasma_icons/systemsettings.desktop",
                            "url": "file:///usr/share/applications/systemsettings.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.icon"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "localPath": "/home/demo/.local/share/plasma_icons/org.kde.dolphin.desktop",
                            "url": "file:///usr/share/applications/org.kde.dolphin.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.icon"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0",
                            "localPath": "/home/demo/.local/share/plasma_icons/firefox.desktop",
                            "url": "file:///usr/share/applications/firefox.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.icon"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "26"
                        }
                    },
                    "plugin": "org.kde.plasma.taskmanager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "2"
                        }
                    },
                    "plugin": "org.kde.plasma.systemloadviewer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "26"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "26"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "84",
                    "DialogWidth": "800"
                },
                "/Configuration": {
                    "PreloadWeight": "26"
                }
            },
            "height": 1.6666666666666667,
            "hiding": "normal",
            "location": "bottom",
            "maximumLength": 100,
            "minimumLength": 100,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
