let timeout;
let yTResponse;
$(document).ready(function () {
    $(".spinner-div").hide();
});

$(document).on('click', '.btn_get_video', function (e){
   let videoId = $('.inp_video_id').val();
   console.log('$videoId: ',videoId);
   if(videoId){
        /* yTResponse = {
        "status": "OK",
        "id": "R3GfuzLMPkA",
        "title": "4K ULtra HD | SAMSUNG UHD Demo׃ LED TV",
        "lengthSeconds": "30",
        "keywords": [
            "4K Video Test",
            "4K videos",
            "4K Video Ultra HD",
            "4K Gaming",
            "4k Music Video",
            "4K Demo",
            "4k Movie",
            "4k Test",
            "4K Monitor",
            "4K TV",
            "UHD 4K Video",
            "UHD Video",
            "UHD Movies",
            "UHD Demo",
            "UHD 4K",
            "UHD Blu ray",
            "UHD vs SUHD",
            "UHD vs 4K",
            "UHD TV",
            "UHD 4K Demo",
            "SUHD TV Samsung",
            "SUHD vs OLED",
            "SUHD vs UHD",
            "SUHD Demo",
            "SUHD Tv vs OLED",
            "SUHD TV Gaming",
            "SUHD TV Prank",
            "SUHD LG",
            "SUHD TV Commercial",
            "22160p 60fps",
            "2160p 4K Videos",
            "2160 Pixel Video",
            "2160p 4K Movies"
        ],
        "channelTitle": "4K Ultra HD",
        "channelId": "UCDd4_w5djWtZApryeMV4Qjw",
        "description": "Short 4K Ultra High Definition demonstration by Samsung.",
        "thumbnail": [
            {
                "url": "https://i.ytimg.com/vi_webp/R3GfuzLMPkA/default.webp",
                "width": 120,
                "height": 90
            },
            {
                "url": "https://i.ytimg.com/vi_webp/R3GfuzLMPkA/mqdefault.webp",
                "width": 320,
                "height": 180
            },
            {
                "url": "https://i.ytimg.com/vi_webp/R3GfuzLMPkA/hqdefault.webp",
                "width": 480,
                "height": 360
            },
            {
                "url": "https://i.ytimg.com/vi_webp/R3GfuzLMPkA/sddefault.webp",
                "width": 640,
                "height": 480
            },
            {
                "url": "https://i.ytimg.com/vi/R3GfuzLMPkA/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDaggYbDtsxMSuGodHHjdefjqvBPQ",
                "width": 686,
                "height": 386
            }
        ],
        "allowRatings": true,
        "viewCount": "1977279",
        "isPrivate": false,
        "isUnpluggedCorpus": false,
        "isLiveContent": false,
        "isFamilySafe": true,
        "availableCountries": [
            "AD",
            "AE",
            "AF",
            "AG",
            "AI",
            "AL",
            "AM",
            "AO",
            "AQ",
            "AR",
            "AS",
            "AT",
            "AU",
            "AW",
            "AX",
            "AZ",
            "BA",
            "BB",
            "BD",
            "BE",
            "BF",
            "BG",
            "BH",
            "BI",
            "BJ",
            "BL",
            "BM",
            "BN",
            "BO",
            "BQ",
            "BR",
            "BS",
            "BT",
            "BV",
            "BW",
            "BY",
            "BZ",
            "CA",
            "CC",
            "CD",
            "CF",
            "CG",
            "CH",
            "CI",
            "CK",
            "CL",
            "CM",
            "CN",
            "CO",
            "CR",
            "CU",
            "CV",
            "CW",
            "CX",
            "CY",
            "CZ",
            "DE",
            "DJ",
            "DK",
            "DM",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "EH",
            "ER",
            "ES",
            "ET",
            "FI",
            "FJ",
            "FK",
            "FM",
            "FO",
            "FR",
            "GA",
            "GB",
            "GD",
            "GE",
            "GF",
            "GG",
            "GH",
            "GI",
            "GL",
            "GM",
            "GN",
            "GP",
            "GQ",
            "GR",
            "GS",
            "GT",
            "GU",
            "GW",
            "GY",
            "HK",
            "HM",
            "HN",
            "HR",
            "HT",
            "HU",
            "ID",
            "IE",
            "IL",
            "IM",
            "IN",
            "IO",
            "IQ",
            "IR",
            "IS",
            "IT",
            "JE",
            "JM",
            "JO",
            "JP",
            "KE",
            "KG",
            "KH",
            "KI",
            "KM",
            "KN",
            "KP",
            "KR",
            "KW",
            "KY",
            "KZ",
            "LA",
            "LB",
            "LC",
            "LI",
            "LK",
            "LR",
            "LS",
            "LT",
            "LU",
            "LV",
            "LY",
            "MA",
            "MC",
            "MD",
            "ME",
            "MF",
            "MG",
            "MH",
            "MK",
            "ML",
            "MM",
            "MN",
            "MO",
            "MP",
            "MQ",
            "MR",
            "MS",
            "MT",
            "MU",
            "MV",
            "MW",
            "MX",
            "MY",
            "MZ",
            "NA",
            "NC",
            "NE",
            "NF",
            "NG",
            "NI",
            "NL",
            "NO",
            "NP",
            "NR",
            "NU",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PF",
            "PG",
            "PH",
            "PK",
            "PL",
            "PM",
            "PN",
            "PR",
            "PS",
            "PT",
            "PW",
            "PY",
            "QA",
            "RE",
            "RO",
            "RS",
            "RU",
            "RW",
            "SA",
            "SB",
            "SC",
            "SD",
            "SE",
            "SG",
            "SH",
            "SI",
            "SJ",
            "SK",
            "SL",
            "SM",
            "SN",
            "SO",
            "SR",
            "SS",
            "ST",
            "SV",
            "SX",
            "SY",
            "SZ",
            "TC",
            "TD",
            "TF",
            "TG",
            "TH",
            "TJ",
            "TK",
            "TL",
            "TM",
            "TN",
            "TO",
            "TR",
            "TT",
            "TV",
            "TW",
            "TZ",
            "UA",
            "UG",
            "UM",
            "US",
            "UY",
            "UZ",
            "VA",
            "VC",
            "VE",
            "VG",
            "VI",
            "VN",
            "VU",
            "WF",
            "WS",
            "YE",
            "YT",
            "ZA",
            "ZM",
            "ZW"
        ],
        "isUnlisted": false,
        "category": "Science & Technology",
        "publishDate": "2016-12-22T18:29:02-08:00",
        "uploadDate": "2016-12-22T18:29:02-08:00",
        "isShortsEligible": false,
        "storyboards": [
            {
                "width": "48",
                "height": "27",
                "thumbsCount": "100",
                "columns": "10",
                "rows": "10",
                "interval": "0",
                "storyboardCount": 1,
                "url": [
                    "https://i.ytimg.com/sb/R3GfuzLMPkA/storyboard3_L0/default.jpg?sqp=-oaymwENSDfyq4qpAwVwAcABBqLzl_8DBgj619y2Bg==&sigh=rs$AOn4CLBPg2-KZjYtx2vThcLQY5qjKlCyvw"
                ]
            },
            {
                "width": "79",
                "height": "45",
                "thumbsCount": "31",
                "columns": "10",
                "rows": "10",
                "interval": "1000",
                "storyboardCount": 1,
                "url": [
                    "https://i.ytimg.com/sb/R3GfuzLMPkA/storyboard3_L1/M0.jpg?sqp=-oaymwENSDfyq4qpAwVwAcABBqLzl_8DBgj619y2Bg==&sigh=rs$AOn4CLBugepXMnUIRZ9UGcDtQfsNTgTjJQ"
                ]
            },
            {
                "width": "159",
                "height": "90",
                "thumbsCount": "31",
                "columns": "5",
                "rows": "5",
                "interval": "1000",
                "storyboardCount": 2,
                "url": [
                    "https://i.ytimg.com/sb/R3GfuzLMPkA/storyboard3_L2/M0.jpg?sqp=-oaymwENSDfyq4qpAwVwAcABBqLzl_8DBgj619y2Bg==&sigh=rs$AOn4CLDk_Mz3ut4mtzr6biBbp_uKJI-iTw",
                    "https://i.ytimg.com/sb/R3GfuzLMPkA/storyboard3_L2/M1.jpg?sqp=-oaymwENSDfyq4qpAwVwAcABBqLzl_8DBgj619y2Bg==&sigh=rs$AOn4CLDk_Mz3ut4mtzr6biBbp_uKJI-iTw"
                ]
            }
        ],
        "captions": {
            "captionTracks": [
                {
                    "baseUrl": "https://www.youtube.com/api/timedtext?v=R3GfuzLMPkA&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&caps=asr&opi=112496729&xoaf=5&xosf=1&hl=en&ip=0.0.0.0&ipbits=0&expire=1751910520&sparams=ip,ipbits,expire,v,ei,caps,opi,xoaf&signature=B9814569A10274E092AF683AE9019DD662A9EEFE.23D259190B1C89E57AF4DA6FA0E6F9EA9BFAEC52&key=yt8&kind=asr&lang=en",
                    "name": "English (auto-generated)",
                    "vssId": "a.en",
                    "languageCode": "en",
                    "isTranslatable": true
                }
            ],
            "translationLanguages": [
                {
                    "languageCode": "ab",
                    "languageName": "Abkhazian"
                },
                {
                    "languageCode": "aa",
                    "languageName": "Afar"
                },
                {
                    "languageCode": "af",
                    "languageName": "Afrikaans"
                },
                {
                    "languageCode": "ak",
                    "languageName": "Akan"
                },
                {
                    "languageCode": "sq",
                    "languageName": "Albanian"
                },
                {
                    "languageCode": "am",
                    "languageName": "Amharic"
                },
                {
                    "languageCode": "ar",
                    "languageName": "Arabic"
                },
                {
                    "languageCode": "hy",
                    "languageName": "Armenian"
                },
                {
                    "languageCode": "as",
                    "languageName": "Assamese"
                },
                {
                    "languageCode": "ay",
                    "languageName": "Aymara"
                },
                {
                    "languageCode": "az",
                    "languageName": "Azerbaijani"
                },
                {
                    "languageCode": "bn",
                    "languageName": "Bangla"
                },
                {
                    "languageCode": "ba",
                    "languageName": "Bashkir"
                },
                {
                    "languageCode": "eu",
                    "languageName": "Basque"
                },
                {
                    "languageCode": "be",
                    "languageName": "Belarusian"
                },
                {
                    "languageCode": "bho",
                    "languageName": "Bhojpuri"
                },
                {
                    "languageCode": "bs",
                    "languageName": "Bosnian"
                },
                {
                    "languageCode": "br",
                    "languageName": "Breton"
                },
                {
                    "languageCode": "bg",
                    "languageName": "Bulgarian"
                },
                {
                    "languageCode": "my",
                    "languageName": "Burmese"
                },
                {
                    "languageCode": "ca",
                    "languageName": "Catalan"
                },
                {
                    "languageCode": "ceb",
                    "languageName": "Cebuano"
                },
                {
                    "languageCode": "zh-Hans",
                    "languageName": "Chinese (Simplified)"
                },
                {
                    "languageCode": "zh-Hant",
                    "languageName": "Chinese (Traditional)"
                },
                {
                    "languageCode": "co",
                    "languageName": "Corsican"
                },
                {
                    "languageCode": "hr",
                    "languageName": "Croatian"
                },
                {
                    "languageCode": "cs",
                    "languageName": "Czech"
                },
                {
                    "languageCode": "da",
                    "languageName": "Danish"
                },
                {
                    "languageCode": "dv",
                    "languageName": "Divehi"
                },
                {
                    "languageCode": "nl",
                    "languageName": "Dutch"
                },
                {
                    "languageCode": "dz",
                    "languageName": "Dzongkha"
                },
                {
                    "languageCode": "en",
                    "languageName": "English"
                },
                {
                    "languageCode": "eo",
                    "languageName": "Esperanto"
                },
                {
                    "languageCode": "et",
                    "languageName": "Estonian"
                },
                {
                    "languageCode": "ee",
                    "languageName": "Ewe"
                },
                {
                    "languageCode": "fo",
                    "languageName": "Faroese"
                },
                {
                    "languageCode": "fj",
                    "languageName": "Fijian"
                },
                {
                    "languageCode": "fil",
                    "languageName": "Filipino"
                },
                {
                    "languageCode": "fi",
                    "languageName": "Finnish"
                },
                {
                    "languageCode": "fr",
                    "languageName": "French"
                },
                {
                    "languageCode": "gaa",
                    "languageName": "Ga"
                },
                {
                    "languageCode": "gl",
                    "languageName": "Galician"
                },
                {
                    "languageCode": "lg",
                    "languageName": "Ganda"
                },
                {
                    "languageCode": "ka",
                    "languageName": "Georgian"
                },
                {
                    "languageCode": "de",
                    "languageName": "German"
                },
                {
                    "languageCode": "el",
                    "languageName": "Greek"
                },
                {
                    "languageCode": "gn",
                    "languageName": "Guarani"
                },
                {
                    "languageCode": "gu",
                    "languageName": "Gujarati"
                },
                {
                    "languageCode": "ht",
                    "languageName": "Haitian Creole"
                },
                {
                    "languageCode": "ha",
                    "languageName": "Hausa"
                },
                {
                    "languageCode": "haw",
                    "languageName": "Hawaiian"
                },
                {
                    "languageCode": "iw",
                    "languageName": "Hebrew"
                },
                {
                    "languageCode": "hi",
                    "languageName": "Hindi"
                },
                {
                    "languageCode": "hmn",
                    "languageName": "Hmong"
                },
                {
                    "languageCode": "hu",
                    "languageName": "Hungarian"
                },
                {
                    "languageCode": "is",
                    "languageName": "Icelandic"
                },
                {
                    "languageCode": "ig",
                    "languageName": "Igbo"
                },
                {
                    "languageCode": "id",
                    "languageName": "Indonesian"
                },
                {
                    "languageCode": "iu",
                    "languageName": "Inuktitut"
                },
                {
                    "languageCode": "ga",
                    "languageName": "Irish"
                },
                {
                    "languageCode": "it",
                    "languageName": "Italian"
                },
                {
                    "languageCode": "ja",
                    "languageName": "Japanese"
                },
                {
                    "languageCode": "jv",
                    "languageName": "Javanese"
                },
                {
                    "languageCode": "kl",
                    "languageName": "Kalaallisut"
                },
                {
                    "languageCode": "kn",
                    "languageName": "Kannada"
                },
                {
                    "languageCode": "kk",
                    "languageName": "Kazakh"
                },
                {
                    "languageCode": "kha",
                    "languageName": "Khasi"
                },
                {
                    "languageCode": "km",
                    "languageName": "Khmer"
                },
                {
                    "languageCode": "rw",
                    "languageName": "Kinyarwanda"
                },
                {
                    "languageCode": "ko",
                    "languageName": "Korean"
                },
                {
                    "languageCode": "kri",
                    "languageName": "Krio"
                },
                {
                    "languageCode": "ku",
                    "languageName": "Kurdish"
                },
                {
                    "languageCode": "ky",
                    "languageName": "Kyrgyz"
                },
                {
                    "languageCode": "lo",
                    "languageName": "Lao"
                },
                {
                    "languageCode": "la",
                    "languageName": "Latin"
                },
                {
                    "languageCode": "lv",
                    "languageName": "Latvian"
                },
                {
                    "languageCode": "ln",
                    "languageName": "Lingala"
                },
                {
                    "languageCode": "lt",
                    "languageName": "Lithuanian"
                },
                {
                    "languageCode": "lua",
                    "languageName": "Luba-Lulua"
                },
                {
                    "languageCode": "luo",
                    "languageName": "Luo"
                },
                {
                    "languageCode": "lb",
                    "languageName": "Luxembourgish"
                },
                {
                    "languageCode": "mk",
                    "languageName": "Macedonian"
                },
                {
                    "languageCode": "mg",
                    "languageName": "Malagasy"
                },
                {
                    "languageCode": "ms",
                    "languageName": "Malay"
                },
                {
                    "languageCode": "ml",
                    "languageName": "Malayalam"
                },
                {
                    "languageCode": "mt",
                    "languageName": "Maltese"
                },
                {
                    "languageCode": "gv",
                    "languageName": "Manx"
                },
                {
                    "languageCode": "mi",
                    "languageName": "Māori"
                },
                {
                    "languageCode": "mr",
                    "languageName": "Marathi"
                },
                {
                    "languageCode": "mn",
                    "languageName": "Mongolian"
                },
                {
                    "languageCode": "mfe",
                    "languageName": "Morisyen"
                },
                {
                    "languageCode": "ne",
                    "languageName": "Nepali"
                },
                {
                    "languageCode": "new",
                    "languageName": "Newari"
                },
                {
                    "languageCode": "nso",
                    "languageName": "Northern Sotho"
                },
                {
                    "languageCode": "no",
                    "languageName": "Norwegian"
                },
                {
                    "languageCode": "ny",
                    "languageName": "Nyanja"
                },
                {
                    "languageCode": "oc",
                    "languageName": "Occitan"
                },
                {
                    "languageCode": "or",
                    "languageName": "Odia"
                },
                {
                    "languageCode": "om",
                    "languageName": "Oromo"
                },
                {
                    "languageCode": "os",
                    "languageName": "Ossetic"
                },
                {
                    "languageCode": "pam",
                    "languageName": "Pampanga"
                },
                {
                    "languageCode": "ps",
                    "languageName": "Pashto"
                },
                {
                    "languageCode": "fa",
                    "languageName": "Persian"
                },
                {
                    "languageCode": "pl",
                    "languageName": "Polish"
                },
                {
                    "languageCode": "pt",
                    "languageName": "Portuguese"
                },
                {
                    "languageCode": "pt-PT",
                    "languageName": "Portuguese (Portugal)"
                },
                {
                    "languageCode": "pa",
                    "languageName": "Punjabi"
                },
                {
                    "languageCode": "qu",
                    "languageName": "Quechua"
                },
                {
                    "languageCode": "ro",
                    "languageName": "Romanian"
                },
                {
                    "languageCode": "rn",
                    "languageName": "Rundi"
                },
                {
                    "languageCode": "ru",
                    "languageName": "Russian"
                },
                {
                    "languageCode": "sm",
                    "languageName": "Samoan"
                },
                {
                    "languageCode": "sg",
                    "languageName": "Sango"
                },
                {
                    "languageCode": "sa",
                    "languageName": "Sanskrit"
                },
                {
                    "languageCode": "gd",
                    "languageName": "Scottish Gaelic"
                },
                {
                    "languageCode": "sr",
                    "languageName": "Serbian"
                },
                {
                    "languageCode": "crs",
                    "languageName": "Seselwa Creole French"
                },
                {
                    "languageCode": "sn",
                    "languageName": "Shona"
                },
                {
                    "languageCode": "sd",
                    "languageName": "Sindhi"
                },
                {
                    "languageCode": "si",
                    "languageName": "Sinhala"
                },
                {
                    "languageCode": "sk",
                    "languageName": "Slovak"
                },
                {
                    "languageCode": "sl",
                    "languageName": "Slovenian"
                },
                {
                    "languageCode": "so",
                    "languageName": "Somali"
                },
                {
                    "languageCode": "st",
                    "languageName": "Southern Sotho"
                },
                {
                    "languageCode": "es",
                    "languageName": "Spanish"
                },
                {
                    "languageCode": "su",
                    "languageName": "Sundanese"
                },
                {
                    "languageCode": "sw",
                    "languageName": "Swahili"
                },
                {
                    "languageCode": "ss",
                    "languageName": "Swati"
                },
                {
                    "languageCode": "sv",
                    "languageName": "Swedish"
                },
                {
                    "languageCode": "tg",
                    "languageName": "Tajik"
                },
                {
                    "languageCode": "ta",
                    "languageName": "Tamil"
                },
                {
                    "languageCode": "tt",
                    "languageName": "Tatar"
                },
                {
                    "languageCode": "te",
                    "languageName": "Telugu"
                },
                {
                    "languageCode": "th",
                    "languageName": "Thai"
                },
                {
                    "languageCode": "bo",
                    "languageName": "Tibetan"
                },
                {
                    "languageCode": "ti",
                    "languageName": "Tigrinya"
                },
                {
                    "languageCode": "to",
                    "languageName": "Tongan"
                },
                {
                    "languageCode": "ts",
                    "languageName": "Tsonga"
                },
                {
                    "languageCode": "tn",
                    "languageName": "Tswana"
                },
                {
                    "languageCode": "tum",
                    "languageName": "Tumbuka"
                },
                {
                    "languageCode": "tr",
                    "languageName": "Turkish"
                },
                {
                    "languageCode": "tk",
                    "languageName": "Turkmen"
                },
                {
                    "languageCode": "uk",
                    "languageName": "Ukrainian"
                },
                {
                    "languageCode": "ur",
                    "languageName": "Urdu"
                },
                {
                    "languageCode": "ug",
                    "languageName": "Uyghur"
                },
                {
                    "languageCode": "uz",
                    "languageName": "Uzbek"
                },
                {
                    "languageCode": "ve",
                    "languageName": "Venda"
                },
                {
                    "languageCode": "vi",
                    "languageName": "Vietnamese"
                },
                {
                    "languageCode": "war",
                    "languageName": "Waray"
                },
                {
                    "languageCode": "cy",
                    "languageName": "Welsh"
                },
                {
                    "languageCode": "fy",
                    "languageName": "Western Frisian"
                },
                {
                    "languageCode": "wo",
                    "languageName": "Wolof"
                },
                {
                    "languageCode": "xh",
                    "languageName": "Xhosa"
                },
                {
                    "languageCode": "yi",
                    "languageName": "Yiddish"
                },
                {
                    "languageCode": "yo",
                    "languageName": "Yoruba"
                },
                {
                    "languageCode": "zu",
                    "languageName": "Zulu"
                }
            ]
        },
        "defaultVideoLanguage": "English (auto-generated)",
        "defaultVideoLanguageCode": "en",
        "expiresInSeconds": "21540",
        "formats": [
            {
                "itag": 18,
                "url": "https://redirector.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLOQNU8YlERrme6yc4mnLtQH2JcQwGqcHVApAcktP4fK5pErbtx-evzScWNgC6__mDIniPDYkXu6&spc=l3OVKRpNj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuFyPekA&vprv=1&svpuc=1&mime=video%2Fmp4&ns=U4kXL5TAuv1fIp_OprJt9QYQ&rqh=1&cnr=14&ratebypass=yes&dur=29.767&lmt=1747427360593937&mt=1751885090&fvip=3&fexp=51331020&c=MWEB&sefc=1&txp=4430534&n=2OvgygnwLh14lg&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIhAIMNORhIt6cm4zXX5RwgNRhVcGWSFlAC2JRWA7FIQmYOAiBtOmyq4jNtNZ7ZdSwaWXSZ20rmteoGGNEKvG07ROXMSg%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "video/mp4; codecs=\"avc1.42001E, mp4a.40.2\"",
                "bitrate": 386965,
                "width": 640,
                "height": 360,
                "lastModified": "1747427360593937",
                "quality": "medium",
                "fps": 30,
                "qualityLabel": "360p",
                "projectionType": "RECTANGULAR",
                "audioQuality": "AUDIO_QUALITY_LOW",
                "approxDurationMs": "29767",
                "audioSampleRate": "44100",
                "audioChannels": 2,
                "qualityOrdinal": "QUALITY_ORDINAL_360P_SAVER"
            }
        ],
        "isGCR": false,
        "adaptiveFormats": [
            {
                "itag": 313,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=313&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401%2C598%2C779%2C780&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&mime=video%2Fwebm&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=41188120&dur=29.600&lmt=1747428479230635&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=443C534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgR-yMjVcHCO0qFV9BwNeVyrzB07iDIolr-F_b9Pk1K_gCIQD3lqLwnS5vZBbvcg6otKagCsIDc42RlEsNDEazOY4PLA%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "video/webm; codecs=\"vp9\"",
                "bitrate": 16084949,
                "width": 3840,
                "height": 2160,
                "initRange": {
                    "start": "0",
                    "end": "219"
                },
                "indexRange": {
                    "start": "220",
                    "end": "305"
                },
                "lastModified": "1747428479230635",
                "contentLength": "41188120",
                "quality": "hd2160",
                "fps": 30,
                "qualityLabel": "2160p",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 11131924,
                "colorInfo": {
                    "primaries": "COLOR_PRIMARIES_BT709",
                    "transferCharacteristics": "COLOR_TRANSFER_CHARACTERISTICS_BT709",
                    "matrixCoefficients": "COLOR_MATRIX_COEFFICIENTS_BT709"
                },
                "approxDurationMs": "29600",
                "qualityOrdinal": "QUALITY_ORDINAL_2160P"
            },
            {
                "itag": 401,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=401&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401%2C598%2C779%2C780&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&mime=video%2Fmp4&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=19489692&dur=29.599&lmt=1747427932557431&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=443C534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgKit0fn3vY0ZcIAyNElwHyxPtsIBQcC0cubGPE_sT5o0CIQDkLc6jcc47LBlEfId1mDO8asl_1PEl2kp4LhkVl-tUbw%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "video/mp4; codecs=\"av01.0.12M.08\"",
                "bitrate": 7876854,
                "width": 3840,
                "height": 2160,
                "initRange": {
                    "start": "0",
                    "end": "700"
                },
                "indexRange": {
                    "start": "701",
                    "end": "792"
                },
                "lastModified": "1747427932557431",
                "contentLength": "19489692",
                "quality": "hd2160",
                "fps": 30,
                "qualityLabel": "2160p",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 5267662,
                "colorInfo": {
                    "primaries": "COLOR_PRIMARIES_BT709",
                    "transferCharacteristics": "COLOR_TRANSFER_CHARACTERISTICS_BT709",
                    "matrixCoefficients": "COLOR_MATRIX_COEFFICIENTS_BT709"
                },
                "approxDurationMs": "29599",
                "qualityOrdinal": "QUALITY_ORDINAL_2160P"
            },
            {
                "itag": 271,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=271&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401%2C598%2C779%2C780&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&mime=video%2Fwebm&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=14662699&dur=29.600&lmt=1747427344561329&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=443C534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAIJMbySPlTQmARNgDht3-zYYdQNJKh0l-glXVmcVEMflAiEAu6F99_rhzeUBceo9nIFq63SzTYIwL-hQ3-T4yJZoB4w%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "video/webm; codecs=\"vp9\"",
                "bitrate": 5921125,
                "width": 2560,
                "height": 1440,
                "initRange": {
                    "start": "0",
                    "end": "219"
                },
                "indexRange": {
                    "start": "220",
                    "end": "302"
                },
                "lastModified": "1747427344561329",
                "contentLength": "14662699",
                "quality": "hd1440",
                "fps": 30,
                "qualityLabel": "1440p",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 3962891,
                "colorInfo": {
                    "primaries": "COLOR_PRIMARIES_BT709",
                    "transferCharacteristics": "COLOR_TRANSFER_CHARACTERISTICS_BT709",
                    "matrixCoefficients": "COLOR_MATRIX_COEFFICIENTS_BT709"
                },
                "approxDurationMs": "29600",
                "qualityOrdinal": "QUALITY_ORDINAL_1440P"
            },
            {
                "itag": 400,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=400&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401%2C598%2C779%2C780&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&mime=video%2Fmp4&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=10090279&dur=29.599&lmt=1747427333990834&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=443C534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgWU4aG1kRDQfoC3OcumgALZ5PJwgT9E15cjbfRYmY8wECIQCFAd-72-jhhqlN1H4-4tS1Cnz8aVyc7lor5frrS0XnRw%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "video/mp4; codecs=\"av01.0.12M.08\"",
                "bitrate": 4092452,
                "width": 2560,
                "height": 1440,
                "initRange": {
                    "start": "0",
                    "end": "700"
                },
                "indexRange": {
                    "start": "701",
                    "end": "792"
                },
                "lastModified": "1747427333990834",
                "contentLength": "10090279",
                "quality": "hd1440",
                "fps": 30,
                "qualityLabel": "1440p",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 2727194,
                "colorInfo": {
                    "primaries": "COLOR_PRIMARIES_BT709",
                    "transferCharacteristics": "COLOR_TRANSFER_CHARACTERISTICS_BT709",
                    "matrixCoefficients": "COLOR_MATRIX_COEFFICIENTS_BT709"
                },
                "approxDurationMs": "29599",
                "qualityOrdinal": "QUALITY_ORDINAL_1440P"
            },
            {
                "itag": 137,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=137&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401%2C598%2C779%2C780&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&mime=video%2Fmp4&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=6447162&dur=29.599&lmt=1747427360322214&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=443C534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRAIgIX-lFDlpAyEkYaHDO-I2H7F3btiqOyYNqhBA71JDm20CIAylYpcm5R4gPOFxA8Tx1GJlHjIiES8u0Tft0eJ1jEDS&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "video/mp4; codecs=\"avc1.640028\"",
                "bitrate": 2043738,
                "width": 1920,
                "height": 1080,
                "initRange": {
                    "start": "0",
                    "end": "741"
                },
                "indexRange": {
                    "start": "742",
                    "end": "833"
                },
                "lastModified": "1747427360322214",
                "contentLength": "6447162",
                "quality": "hd1080",
                "fps": 30,
                "qualityLabel": "1080p",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 1742535,
                "approxDurationMs": "29599",
                "qualityOrdinal": "QUALITY_ORDINAL_1080P"
            },
            {
                "itag": 248,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=248&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401%2C598%2C779%2C780&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&mime=video%2Fwebm&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=4693874&dur=29.600&lmt=1747427395744767&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=443C534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRAIgFy8QirB8TNKjPxkHlCJGA0U1YohJvAt0vQwUdVDCr3YCIHrOMWRs7qiFgxdBaSiIqUEWGA5qAAD8dlrO8qXSmqgL&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "video/webm; codecs=\"vp9\"",
                "bitrate": 1915228,
                "width": 1920,
                "height": 1080,
                "initRange": {
                    "start": "0",
                    "end": "219"
                },
                "indexRange": {
                    "start": "220",
                    "end": "302"
                },
                "lastModified": "1747427395744767",
                "contentLength": "4693874",
                "quality": "hd1080",
                "fps": 30,
                "qualityLabel": "1080p",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 1268614,
                "colorInfo": {
                    "primaries": "COLOR_PRIMARIES_BT709",
                    "transferCharacteristics": "COLOR_TRANSFER_CHARACTERISTICS_BT709",
                    "matrixCoefficients": "COLOR_MATRIX_COEFFICIENTS_BT709"
                },
                "approxDurationMs": "29600",
                "qualityOrdinal": "QUALITY_ORDINAL_1080P"
            },
            {
                "itag": 399,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=399&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401%2C598%2C779%2C780&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&mime=video%2Fmp4&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=3270153&dur=29.599&lmt=1747427328689544&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=443C534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAIn3iYkFRG8_2OnYxr7sud_i_R0ugygzfwm7aDFc9oqZAiEAhYlRnEO9jtwspbUqBZns_IejmdH2bLljEeODPgaY8FA%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "video/mp4; codecs=\"av01.0.08M.08\"",
                "bitrate": 1206355,
                "width": 1920,
                "height": 1080,
                "initRange": {
                    "start": "0",
                    "end": "699"
                },
                "indexRange": {
                    "start": "700",
                    "end": "791"
                },
                "lastModified": "1747427328689544",
                "contentLength": "3270153",
                "quality": "hd1080",
                "fps": 30,
                "qualityLabel": "1080p",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 883854,
                "colorInfo": {
                    "primaries": "COLOR_PRIMARIES_BT709",
                    "transferCharacteristics": "COLOR_TRANSFER_CHARACTERISTICS_BT709",
                    "matrixCoefficients": "COLOR_MATRIX_COEFFICIENTS_BT709"
                },
                "approxDurationMs": "29599",
                "qualityOrdinal": "QUALITY_ORDINAL_1080P"
            },
            {
                "itag": 136,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=136&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401%2C598%2C779%2C780&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&mime=video%2Fmp4&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=3081699&dur=29.599&lmt=1747427354451784&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=443C534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAOo6lRI_GU8Zel1JXyyzyzbpoR2hG9X9JC1Q67QmMFG_AiEAiJ_Wmqu0oFQHgy1Yg0EIUK_v5UpNV8m-pFc0IhsqZWE%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "video/mp4; codecs=\"avc1.4d401f\"",
                "bitrate": 1005485,
                "width": 1280,
                "height": 720,
                "initRange": {
                    "start": "0",
                    "end": "739"
                },
                "indexRange": {
                    "start": "740",
                    "end": "831"
                },
                "lastModified": "1747427354451784",
                "contentLength": "3081699",
                "quality": "hd720",
                "fps": 30,
                "qualityLabel": "720p",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 832919,
                "approxDurationMs": "29599",
                "qualityOrdinal": "QUALITY_ORDINAL_720P"
            },
            {
                "itag": 247,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=247&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401%2C598%2C779%2C780&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&mime=video%2Fwebm&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=3954548&dur=29.600&lmt=1747427775888388&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=443C534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRAIgHlGMAlVPuA4iPoBK3ocz6k_i6clg4z_YqIeMuRnDtnYCIH3V4miU7OwhH94-Bwan6myLCT-N503dEU7bhE8FtLpH&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "video/webm; codecs=\"vp9\"",
                "bitrate": 1507032,
                "width": 1280,
                "height": 720,
                "initRange": {
                    "start": "0",
                    "end": "219"
                },
                "indexRange": {
                    "start": "220",
                    "end": "302"
                },
                "lastModified": "1747427775888388",
                "contentLength": "3954548",
                "quality": "hd720",
                "fps": 30,
                "qualityLabel": "720p",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 1068796,
                "colorInfo": {
                    "primaries": "COLOR_PRIMARIES_BT709",
                    "transferCharacteristics": "COLOR_TRANSFER_CHARACTERISTICS_BT709",
                    "matrixCoefficients": "COLOR_MATRIX_COEFFICIENTS_BT709"
                },
                "approxDurationMs": "29600",
                "qualityOrdinal": "QUALITY_ORDINAL_720P"
            },
            {
                "itag": 398,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=398&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401%2C598%2C779%2C780&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&mime=video%2Fmp4&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=2244395&dur=29.599&lmt=1747427286146014&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=443C534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgRNS_JqHJlNeN2JDkZrLrYUIkPL5fxE1ohgsRVJbCalYCIQCkhoUFWXNgt0dfl0rytuGSaZypgnWPuc9XLMMZA0sPoQ%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "video/mp4; codecs=\"av01.0.05M.08\"",
                "bitrate": 869130,
                "width": 1280,
                "height": 720,
                "initRange": {
                    "start": "0",
                    "end": "699"
                },
                "indexRange": {
                    "start": "700",
                    "end": "791"
                },
                "lastModified": "1747427286146014",
                "contentLength": "2244395",
                "quality": "hd720",
                "fps": 30,
                "qualityLabel": "720p",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 606613,
                "colorInfo": {
                    "primaries": "COLOR_PRIMARIES_BT709",
                    "transferCharacteristics": "COLOR_TRANSFER_CHARACTERISTICS_BT709",
                    "matrixCoefficients": "COLOR_MATRIX_COEFFICIENTS_BT709"
                },
                "approxDurationMs": "29599",
                "qualityOrdinal": "QUALITY_ORDINAL_720P"
            },
            {
                "itag": 779,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=779&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401%2C598%2C779%2C780&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&mime=video%2Fwebm&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=1368683&dur=29.600&lmt=1747427364738098&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=443C534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRAIgeTe8PAQbpPqxHkEYIsPYl6GapP_DjcdI1445_UiqK5MCIAeqQMUWUmVyxMrNY0vwESXQ3upCrcNRtHDdO8v2q2H3&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "video/webm; codecs=\"vp9\"",
                "bitrate": 461375,
                "width": 1080,
                "height": 608,
                "initRange": {
                    "start": "0",
                    "end": "218"
                },
                "indexRange": {
                    "start": "219",
                    "end": "301"
                },
                "lastModified": "1747427364738098",
                "contentLength": "1368683",
                "quality": "large",
                "fps": 30,
                "qualityLabel": "480p",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 369914,
                "colorInfo": {
                    "primaries": "COLOR_PRIMARIES_BT709",
                    "transferCharacteristics": "COLOR_TRANSFER_CHARACTERISTICS_BT709",
                    "matrixCoefficients": "COLOR_MATRIX_COEFFICIENTS_BT709"
                },
                "approxDurationMs": "29600",
                "qualityOrdinal": "QUALITY_ORDINAL_608P_SAVER"
            },
            {
                "itag": 780,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=780&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401%2C598%2C779%2C780&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&mime=video%2Fwebm&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=2353614&dur=29.600&lmt=1747427340121648&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=443C534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgeQhZCpuExCvKjMib2E8zqqWx6D6SrBBBurcldlqtYikCIQDZH_dhie9xS3dOqj15cduuVtcxnqdAZvuxoItgEB9fxw%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "video/webm; codecs=\"vp9\"",
                "bitrate": 862952,
                "width": 1080,
                "height": 608,
                "initRange": {
                    "start": "0",
                    "end": "219"
                },
                "indexRange": {
                    "start": "220",
                    "end": "302"
                },
                "lastModified": "1747427340121648",
                "contentLength": "2353614",
                "quality": "large",
                "fps": 30,
                "qualityLabel": "480p",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 636111,
                "colorInfo": {
                    "primaries": "COLOR_PRIMARIES_BT709",
                    "transferCharacteristics": "COLOR_TRANSFER_CHARACTERISTICS_BT709",
                    "matrixCoefficients": "COLOR_MATRIX_COEFFICIENTS_BT709"
                },
                "approxDurationMs": "29600",
                "qualityOrdinal": "QUALITY_ORDINAL_608P"
            },
            {
                "itag": 135,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=135&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401%2C598%2C779%2C780&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&mime=video%2Fmp4&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=1621600&dur=29.599&lmt=1747427337739957&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=443C534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAIMx3ctz5tywtzaYG8Ur9Z2wYQLuVN_14QHkYVInUYZVAiAoM8o_dSdb3D-ncQ9ydiYSPzN6SDtOOZ2TbRqHL2iQsw%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "video/mp4; codecs=\"avc1.4d401f\"",
                "bitrate": 501514,
                "width": 854,
                "height": 480,
                "initRange": {
                    "start": "0",
                    "end": "740"
                },
                "indexRange": {
                    "start": "741",
                    "end": "832"
                },
                "lastModified": "1747427337739957",
                "contentLength": "1621600",
                "quality": "large",
                "fps": 30,
                "qualityLabel": "480p",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 438285,
                "approxDurationMs": "29599",
                "qualityOrdinal": "QUALITY_ORDINAL_480P"
            },
            {
                "itag": 244,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=244&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401%2C598%2C779%2C780&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&mime=video%2Fwebm&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=2346058&dur=29.600&lmt=1747427761763130&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=443C534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRAIgVcG4oK2LIRaXgzkCVHUQ4lF2_8DrnROGraS_Um2hqu8CIBCKLQ21Z82vVVp70vtIJBGRu_tYygg0Od8N0g083m6-&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "video/webm; codecs=\"vp9\"",
                "bitrate": 865537,
                "width": 854,
                "height": 480,
                "initRange": {
                    "start": "0",
                    "end": "219"
                },
                "indexRange": {
                    "start": "220",
                    "end": "302"
                },
                "lastModified": "1747427761763130",
                "contentLength": "2346058",
                "quality": "large",
                "fps": 30,
                "qualityLabel": "480p",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 634069,
                "colorInfo": {
                    "primaries": "COLOR_PRIMARIES_BT709",
                    "transferCharacteristics": "COLOR_TRANSFER_CHARACTERISTICS_BT709",
                    "matrixCoefficients": "COLOR_MATRIX_COEFFICIENTS_BT709"
                },
                "approxDurationMs": "29600",
                "qualityOrdinal": "QUALITY_ORDINAL_480P"
            },
            {
                "itag": 397,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=397&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401%2C598%2C779%2C780&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&mime=video%2Fmp4&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=1272743&dur=29.599&lmt=1747427300242671&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=443C534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhANjYbaPjBN6Eti7IUzhjNaO4iSJJrrYUAIfcd4cb910_AiBat18_3JUq8zQ-1qyHmZA5qcpXHFnQ6tnUJTpFw8WCoA%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "video/mp4; codecs=\"av01.0.04M.08\"",
                "bitrate": 509340,
                "width": 854,
                "height": 480,
                "initRange": {
                    "start": "0",
                    "end": "699"
                },
                "indexRange": {
                    "start": "700",
                    "end": "791"
                },
                "lastModified": "1747427300242671",
                "contentLength": "1272743",
                "quality": "large",
                "fps": 30,
                "qualityLabel": "480p",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 343996,
                "colorInfo": {
                    "primaries": "COLOR_PRIMARIES_BT709",
                    "transferCharacteristics": "COLOR_TRANSFER_CHARACTERISTICS_BT709",
                    "matrixCoefficients": "COLOR_MATRIX_COEFFICIENTS_BT709"
                },
                "approxDurationMs": "29599",
                "qualityOrdinal": "QUALITY_ORDINAL_480P"
            },
            {
                "itag": 134,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=134&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401%2C598%2C779%2C780&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&mime=video%2Fmp4&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=950732&dur=29.599&lmt=1747427346823512&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=443C534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgK_kbU8P37RGazSqgeqxPOTLOu83QQXoolxUzmZs7JfoCIQCVy9CV11kC2aRIvW2kObLfmmU0MnSaNAVYY2Q3tyvZmw%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "video/mp4; codecs=\"avc1.4d401e\"",
                "bitrate": 313807,
                "width": 640,
                "height": 360,
                "initRange": {
                    "start": "0",
                    "end": "740"
                },
                "indexRange": {
                    "start": "741",
                    "end": "832"
                },
                "lastModified": "1747427346823512",
                "contentLength": "950732",
                "quality": "medium",
                "fps": 30,
                "qualityLabel": "360p",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 256963,
                "highReplication": true,
                "approxDurationMs": "29599",
                "qualityOrdinal": "QUALITY_ORDINAL_360P_SAVER"
            },
            {
                "itag": 243,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=243&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401%2C598%2C779%2C780&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&mime=video%2Fwebm&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=540431&dur=29.600&lmt=1747427857616125&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=443C534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRAIgDybh-LFcEbht3Ie9KtBWEBIh8lH57-BL3hUSsisA6LQCIAC6_ocKm0fii8uxv_cIFS1QVG05pGtu7ZDF51XBdFLJ&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "video/webm; codecs=\"vp9\"",
                "bitrate": 179677,
                "width": 640,
                "height": 360,
                "initRange": {
                    "start": "0",
                    "end": "218"
                },
                "indexRange": {
                    "start": "219",
                    "end": "301"
                },
                "lastModified": "1747427857616125",
                "contentLength": "540431",
                "quality": "medium",
                "fps": 30,
                "qualityLabel": "360p",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 146062,
                "colorInfo": {
                    "primaries": "COLOR_PRIMARIES_BT709",
                    "transferCharacteristics": "COLOR_TRANSFER_CHARACTERISTICS_BT709",
                    "matrixCoefficients": "COLOR_MATRIX_COEFFICIENTS_BT709"
                },
                "approxDurationMs": "29600",
                "qualityOrdinal": "QUALITY_ORDINAL_360P_SAVER"
            },
            {
                "itag": 396,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=396&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401%2C598%2C779%2C780&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&mime=video%2Fmp4&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=812630&dur=29.599&lmt=1747427272399418&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=443C534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAP-CEJZ79HnpktBdj9d-ijpY1KhYBWKATmM1V3hEIXKZAiEA-Zx4s4esdejq93G4MttJulWs0saEk9Hgnqtg2h5Uo5U%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "video/mp4; codecs=\"av01.0.01M.08\"",
                "bitrate": 312614,
                "width": 640,
                "height": 360,
                "initRange": {
                    "start": "0",
                    "end": "699"
                },
                "indexRange": {
                    "start": "700",
                    "end": "791"
                },
                "lastModified": "1747427272399418",
                "contentLength": "812630",
                "quality": "medium",
                "fps": 30,
                "qualityLabel": "360p",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 219637,
                "colorInfo": {
                    "primaries": "COLOR_PRIMARIES_BT709",
                    "transferCharacteristics": "COLOR_TRANSFER_CHARACTERISTICS_BT709",
                    "matrixCoefficients": "COLOR_MATRIX_COEFFICIENTS_BT709"
                },
                "approxDurationMs": "29599",
                "qualityOrdinal": "QUALITY_ORDINAL_360P_SAVER"
            },
            {
                "itag": 133,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=133&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401%2C598%2C779%2C780&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&mime=video%2Fmp4&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=456603&dur=29.599&lmt=1747427335484172&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=443C534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgErfncAfgmwb7fNTqWto7MY8yHSBP8zKXsTUNkt0a6TICIQCfFccBI_jHUxpJl-4BYDJALScJcxl_B9TKxVltMHpBuA%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "video/mp4; codecs=\"avc1.4d4015\"",
                "bitrate": 167776,
                "width": 426,
                "height": 240,
                "initRange": {
                    "start": "0",
                    "end": "739"
                },
                "indexRange": {
                    "start": "740",
                    "end": "831"
                },
                "lastModified": "1747427335484172",
                "contentLength": "456603",
                "quality": "small",
                "fps": 30,
                "qualityLabel": "240p",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 123410,
                "approxDurationMs": "29599",
                "qualityOrdinal": "QUALITY_ORDINAL_240P_SAVER"
            },
            {
                "itag": 242,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=242&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401%2C598%2C779%2C780&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&mime=video%2Fwebm&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=304479&dur=29.600&lmt=1747427760278120&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=443C534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRAIgLsuegl8x8edQHvIn3ptqmyMPCs1fyo9D5Jejbtq31EECIFVowWuy_kOt_z6a0fV_AkNHBYRZYfQKO9wO9DIzMrJp&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "video/webm; codecs=\"vp9\"",
                "bitrate": 100520,
                "width": 426,
                "height": 240,
                "initRange": {
                    "start": "0",
                    "end": "217"
                },
                "indexRange": {
                    "start": "218",
                    "end": "299"
                },
                "lastModified": "1747427760278120",
                "contentLength": "304479",
                "quality": "small",
                "fps": 30,
                "qualityLabel": "240p",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 82291,
                "colorInfo": {
                    "primaries": "COLOR_PRIMARIES_BT709",
                    "transferCharacteristics": "COLOR_TRANSFER_CHARACTERISTICS_BT709",
                    "matrixCoefficients": "COLOR_MATRIX_COEFFICIENTS_BT709"
                },
                "approxDurationMs": "29600",
                "qualityOrdinal": "QUALITY_ORDINAL_240P_SAVER"
            },
            {
                "itag": 395,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=395&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401%2C598%2C779%2C780&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&mime=video%2Fmp4&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=281736&dur=29.599&lmt=1747427356360468&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=443C534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAPcmQnoNjwSszDpbn9Y31wYGh6eIn7I5GBjLQgaDlqliAiEArus4KhNGZGRYwXJfMP1tgqP_N5k8abe-bMGaSYgEQn8%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "video/mp4; codecs=\"av01.0.00M.08\"",
                "bitrate": 100205,
                "width": 426,
                "height": 240,
                "initRange": {
                    "start": "0",
                    "end": "699"
                },
                "indexRange": {
                    "start": "700",
                    "end": "791"
                },
                "lastModified": "1747427356360468",
                "contentLength": "281736",
                "quality": "small",
                "fps": 30,
                "qualityLabel": "240p",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 76147,
                "colorInfo": {
                    "primaries": "COLOR_PRIMARIES_BT709",
                    "transferCharacteristics": "COLOR_TRANSFER_CHARACTERISTICS_BT709",
                    "matrixCoefficients": "COLOR_MATRIX_COEFFICIENTS_BT709"
                },
                "approxDurationMs": "29599",
                "qualityOrdinal": "QUALITY_ORDINAL_240P_SAVER"
            },
            {
                "itag": 160,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=160&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401%2C598%2C779%2C780&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&mime=video%2Fmp4&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=224905&dur=29.599&lmt=1747427341662438&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=443C534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRAIgNEZEuFCnabPlpgmL3jXH8rddLnBu2xlWQB9MzkQ7xGkCIBwXGg_3BQLprU-KJ62GSszZ9INaL9QG7Qe4V_aTQ036&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "video/mp4; codecs=\"avc1.4d400c\"",
                "bitrate": 80656,
                "width": 256,
                "height": 144,
                "initRange": {
                    "start": "0",
                    "end": "738"
                },
                "indexRange": {
                    "start": "739",
                    "end": "830"
                },
                "lastModified": "1747427341662438",
                "contentLength": "224905",
                "quality": "tiny",
                "fps": 30,
                "qualityLabel": "144p",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 60787,
                "approxDurationMs": "29599",
                "qualityOrdinal": "QUALITY_ORDINAL_144P"
            },
            {
                "itag": 278,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=278&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401%2C598%2C779%2C780&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&mime=video%2Fwebm&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=283047&dur=29.600&lmt=1747427760625958&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=443C534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAJXb4X-6eNUwQt1VVwVtq2Sy5AJOh4n5b28qQYThynRcAiAZ9uST9JhyCHCMOx0AoEeNWwGfT7KSdhz0dYxdbkuR_Q%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "video/webm; codecs=\"vp9\"",
                "bitrate": 87750,
                "width": 256,
                "height": 144,
                "initRange": {
                    "start": "0",
                    "end": "217"
                },
                "indexRange": {
                    "start": "218",
                    "end": "299"
                },
                "lastModified": "1747427760625958",
                "contentLength": "283047",
                "quality": "tiny",
                "fps": 30,
                "qualityLabel": "144p",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 76499,
                "colorInfo": {
                    "primaries": "COLOR_PRIMARIES_BT709",
                    "transferCharacteristics": "COLOR_TRANSFER_CHARACTERISTICS_BT709",
                    "matrixCoefficients": "COLOR_MATRIX_COEFFICIENTS_BT709"
                },
                "approxDurationMs": "29600",
                "qualityOrdinal": "QUALITY_ORDINAL_144P"
            },
            {
                "itag": 394,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=394&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401%2C598%2C779%2C780&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&mime=video%2Fmp4&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=232000&dur=29.599&lmt=1747427384434807&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=443C534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgZZNzMyVFIVNqNkbBzbXoDUsU9wzGa0MkGeb097qe13sCIQCzloDyFVM0qJ8_Po4mAauCAWh0CtYSYOPTKUefDkLUoA%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "video/mp4; codecs=\"av01.0.00M.08\"",
                "bitrate": 75576,
                "width": 256,
                "height": 144,
                "initRange": {
                    "start": "0",
                    "end": "699"
                },
                "indexRange": {
                    "start": "700",
                    "end": "791"
                },
                "lastModified": "1747427384434807",
                "contentLength": "232000",
                "quality": "tiny",
                "fps": 30,
                "qualityLabel": "144p",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 62704,
                "colorInfo": {
                    "primaries": "COLOR_PRIMARIES_BT709",
                    "transferCharacteristics": "COLOR_TRANSFER_CHARACTERISTICS_BT709",
                    "matrixCoefficients": "COLOR_MATRIX_COEFFICIENTS_BT709"
                },
                "approxDurationMs": "29599",
                "qualityOrdinal": "QUALITY_ORDINAL_144P"
            },
            {
                "itag": 598,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=598&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313%2C394%2C395%2C396%2C397%2C398%2C399%2C400%2C401%2C598%2C779%2C780&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&mime=video%2Fwebm&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=85967&dur=29.599&lmt=1747427398800791&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=443C534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgBMzyfoWU72mUc1cyGbJEXkSRNldpeqzfXVjrHjtN1vwCIQCc6jReSAU5n9Xz7hEpz0F2Y0uQKMyEpuK_BL8Io3-R1w%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "video/webm; codecs=\"vp9\"",
                "bitrate": 30208,
                "width": 256,
                "height": 144,
                "initRange": {
                    "start": "0",
                    "end": "217"
                },
                "indexRange": {
                    "start": "218",
                    "end": "296"
                },
                "lastModified": "1747427398800791",
                "contentLength": "85967",
                "quality": "tiny",
                "fps": 15,
                "qualityLabel": "144p",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 23235,
                "colorInfo": {
                    "primaries": "COLOR_PRIMARIES_BT709",
                    "transferCharacteristics": "COLOR_TRANSFER_CHARACTERISTICS_BT709",
                    "matrixCoefficients": "COLOR_MATRIX_COEFFICIENTS_BT709"
                },
                "approxDurationMs": "29599",
                "qualityOrdinal": "QUALITY_ORDINAL_144P_SAVER"
            },
            {
                "itag": 140,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&mime=audio%2Fmp4&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=482746&dur=29.767&lmt=1747426245684444&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=4432534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRAIgHr-d5tiZh5T6EfH0C-9kYT3L2nvy4-cv6V2AP0U7fvwCICrIujpRrWvceGQmLNkAbMi3UBjOi_Cahrcll1Ce-rFF&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "audio/mp4; codecs=\"mp4a.40.2\"",
                "bitrate": 130465,
                "initRange": {
                    "start": "0",
                    "end": "722"
                },
                "indexRange": {
                    "start": "723",
                    "end": "790"
                },
                "lastModified": "1747426245684444",
                "contentLength": "482746",
                "quality": "tiny",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 129739,
                "highReplication": true,
                "audioQuality": "AUDIO_QUALITY_MEDIUM",
                "approxDurationMs": "29767",
                "audioSampleRate": "44100",
                "audioChannels": 2,
                "loudnessDb": 0.14000034,
                "qualityOrdinal": "QUALITY_ORDINAL_UNKNOWN"
            },
            {
                "itag": 140,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=140&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&xtags=drc%3D1&mime=audio%2Fmp4&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=482747&dur=29.767&lmt=1747426254788239&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=4432534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cxtags%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAM_5PiI7VWVkscrncN7AR0Fr-v3WPbJBiaMsSen8LLxBAiB5QZKShTAgxMKl9QpyxOgkLLNjeYwIB5RWM5IOGUuoHg%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "audio/mp4; codecs=\"mp4a.40.2\"",
                "bitrate": 130466,
                "initRange": {
                    "start": "0",
                    "end": "722"
                },
                "indexRange": {
                    "start": "723",
                    "end": "790"
                },
                "lastModified": "1747426254788239",
                "contentLength": "482747",
                "quality": "tiny",
                "xtags": "CggKA2RyYxIBMQ",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 129740,
                "highReplication": true,
                "audioQuality": "AUDIO_QUALITY_MEDIUM",
                "approxDurationMs": "29767",
                "audioSampleRate": "44100",
                "audioChannels": 2,
                "loudnessDb": 0,
                "isDrc": true,
                "qualityOrdinal": "QUALITY_ORDINAL_UNKNOWN"
            },
            {
                "itag": 249,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=249&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&mime=audio%2Fwebm&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=196090&dur=29.721&lmt=1747426250139443&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=4432534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIgQhrTkl0lc3kbrKuB4puFLWfdVb7IpPjcDzpt0_hV1i8CIQDLqICpn0dVujxGtKSs9xxLlzXqtLmVc9IITkFEqLFoDw%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "audio/webm; codecs=\"opus\"",
                "bitrate": 53015,
                "initRange": {
                    "start": "0",
                    "end": "258"
                },
                "indexRange": {
                    "start": "259",
                    "end": "309"
                },
                "lastModified": "1747426250139443",
                "contentLength": "196090",
                "quality": "tiny",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 52781,
                "audioQuality": "AUDIO_QUALITY_LOW",
                "approxDurationMs": "29721",
                "audioSampleRate": "48000",
                "audioChannels": 2,
                "loudnessDb": 0.13000011,
                "qualityOrdinal": "QUALITY_ORDINAL_UNKNOWN"
            },
            {
                "itag": 249,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=249&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&xtags=drc%3D1&mime=audio%2Fwebm&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=196505&dur=29.721&lmt=1747426252773538&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=4432534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cxtags%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRAIgCb8XLvcXWf_A-0kpz9kCEfelJ37UxqbZWhups2o-T64CIHMIUxLYXY5oh4Ff7Ctf1uCEG78qk6TVkTOdrDpWsqWW&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "audio/webm; codecs=\"opus\"",
                "bitrate": 53220,
                "initRange": {
                    "start": "0",
                    "end": "258"
                },
                "indexRange": {
                    "start": "259",
                    "end": "309"
                },
                "lastModified": "1747426252773538",
                "contentLength": "196505",
                "quality": "tiny",
                "xtags": "CggKA2RyYxIBMQ",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 52893,
                "audioQuality": "AUDIO_QUALITY_LOW",
                "approxDurationMs": "29721",
                "audioSampleRate": "48000",
                "audioChannels": 2,
                "loudnessDb": 0,
                "isDrc": true,
                "qualityOrdinal": "QUALITY_ORDINAL_UNKNOWN"
            },
            {
                "itag": 250,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=250&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&mime=audio%2Fwebm&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=256175&dur=29.721&lmt=1747426250138798&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=4432534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAPtKY2OcTlJj2qOzY4fVe58WZdZi68co4G-g2t8ifMd7AiAVL82C3qzVvcEbTA2T-ZoELJEu0Lt7VFveZwEQ-Rik_Q%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "audio/webm; codecs=\"opus\"",
                "bitrate": 69281,
                "initRange": {
                    "start": "0",
                    "end": "258"
                },
                "indexRange": {
                    "start": "259",
                    "end": "309"
                },
                "lastModified": "1747426250138798",
                "contentLength": "256175",
                "quality": "tiny",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 68954,
                "audioQuality": "AUDIO_QUALITY_LOW",
                "approxDurationMs": "29721",
                "audioSampleRate": "48000",
                "audioChannels": 2,
                "loudnessDb": 0.13000011,
                "qualityOrdinal": "QUALITY_ORDINAL_UNKNOWN"
            },
            {
                "itag": 250,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=250&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&xtags=drc%3D1&mime=audio%2Fwebm&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=256624&dur=29.721&lmt=1747426253065830&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=4432534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cxtags%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAKMhJjzO-ChpjLrDUs4xiWnOXVI5yY09q8FuiuzIcLRuAiEA_7XblfEl-vP8XT2faA9rSm6j0PwGYOQy2H_jtPRPzjo%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "audio/webm; codecs=\"opus\"",
                "bitrate": 69490,
                "initRange": {
                    "start": "0",
                    "end": "258"
                },
                "indexRange": {
                    "start": "259",
                    "end": "309"
                },
                "lastModified": "1747426253065830",
                "contentLength": "256624",
                "quality": "tiny",
                "xtags": "CggKA2RyYxIBMQ",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 69075,
                "audioQuality": "AUDIO_QUALITY_LOW",
                "approxDurationMs": "29721",
                "audioSampleRate": "48000",
                "audioChannels": 2,
                "loudnessDb": 0,
                "isDrc": true,
                "qualityOrdinal": "QUALITY_ORDINAL_UNKNOWN"
            },
            {
                "itag": 251,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=251&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&mime=audio%2Fwebm&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=494321&dur=29.721&lmt=1747426250148138&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=4432534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAL1YsXDP-bwMWxFCUG0LTwPMHPr9zTfO3DvjZAVB2xqwAiEAufIJVVoIkROEwz5wWlVLcm4ltfDhRH536HUqtYHtLN0%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "audio/webm; codecs=\"opus\"",
                "bitrate": 135591,
                "initRange": {
                    "start": "0",
                    "end": "258"
                },
                "indexRange": {
                    "start": "259",
                    "end": "309"
                },
                "lastModified": "1747426250148138",
                "contentLength": "494321",
                "quality": "tiny",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 133056,
                "audioQuality": "AUDIO_QUALITY_MEDIUM",
                "approxDurationMs": "29721",
                "audioSampleRate": "48000",
                "audioChannels": 2,
                "loudnessDb": 0.13000011,
                "qualityOrdinal": "QUALITY_ORDINAL_UNKNOWN"
            },
            {
                "itag": 251,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=251&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&xtags=drc%3D1&mime=audio%2Fwebm&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=494631&dur=29.721&lmt=1747426252764101&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=4432534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cxtags%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRgIhAIgRhsD5TBDfvTLe-eDyCJu-eiThOjjcmR6JQPD0znhvAiEAjIBCiBh4yehXPlF9b5xqxJm2ok4SN6rd61JueVj7mzA%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "audio/webm; codecs=\"opus\"",
                "bitrate": 135705,
                "initRange": {
                    "start": "0",
                    "end": "258"
                },
                "indexRange": {
                    "start": "259",
                    "end": "309"
                },
                "lastModified": "1747426252764101",
                "contentLength": "494631",
                "quality": "tiny",
                "xtags": "CggKA2RyYxIBMQ",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 133139,
                "audioQuality": "AUDIO_QUALITY_MEDIUM",
                "approxDurationMs": "29721",
                "audioSampleRate": "48000",
                "audioChannels": 2,
                "loudnessDb": 0,
                "isDrc": true,
                "qualityOrdinal": "QUALITY_ORDINAL_UNKNOWN"
            },
            {
                "itag": 599,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=599&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&mime=audio%2Fmp4&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=116152&dur=29.814&lmt=1747426244456746&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=4432534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAK63KIDbSgYMYvFVpJq6cgyefrXJzzzhZ5ccoUDI_JFBAiBJ08oWG9XHbWYufgZEQ-3KlimHM6BqY6SwA7BM0iFUdQ%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "audio/mp4; codecs=\"mp4a.40.5\"",
                "bitrate": 32000,
                "initRange": {
                    "start": "0",
                    "end": "731"
                },
                "indexRange": {
                    "start": "732",
                    "end": "799"
                },
                "lastModified": "1747426244456746",
                "contentLength": "116152",
                "quality": "tiny",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 31167,
                "audioQuality": "AUDIO_QUALITY_ULTRALOW",
                "approxDurationMs": "29814",
                "audioSampleRate": "22050",
                "audioChannels": 2,
                "loudnessDb": 0.14000034,
                "qualityOrdinal": "QUALITY_ORDINAL_UNKNOWN"
            },
            {
                "itag": 599,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=599&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&xtags=drc%3D1&mime=audio%2Fmp4&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=116145&dur=29.814&lmt=1747426252337176&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=4432534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cxtags%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAOrhblJX66xiaZ2or5y1m3PfSRPjJWn470HnAwEQJLGYAiB2HCfrKFv7NzFe-RGRlYwQ3kWkIapu43HwhxofK2kGQw%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "audio/mp4; codecs=\"mp4a.40.5\"",
                "bitrate": 32014,
                "initRange": {
                    "start": "0",
                    "end": "731"
                },
                "indexRange": {
                    "start": "732",
                    "end": "799"
                },
                "lastModified": "1747426252337176",
                "contentLength": "116145",
                "quality": "tiny",
                "xtags": "CggKA2RyYxIBMQ",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 31165,
                "audioQuality": "AUDIO_QUALITY_ULTRALOW",
                "approxDurationMs": "29814",
                "audioSampleRate": "22050",
                "audioChannels": 2,
                "loudnessDb": 0,
                "isDrc": true,
                "qualityOrdinal": "QUALITY_ORDINAL_UNKNOWN"
            },
            {
                "itag": 600,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=600&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&mime=audio%2Fwebm&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=136859&dur=29.721&lmt=1747426250109180&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=4432534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAJgcpqmImPoEZTLxeRLfZQSlcoxLupNoJl0RwO1YeAziAiAyDV9uq1_pTTBzUAY2Sm1on868kSE4uZPruUTSYMqubw%3D%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "audio/webm; codecs=\"opus\"",
                "bitrate": 37767,
                "initRange": {
                    "start": "0",
                    "end": "258"
                },
                "indexRange": {
                    "start": "259",
                    "end": "308"
                },
                "lastModified": "1747426250109180",
                "contentLength": "136859",
                "quality": "tiny",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 36838,
                "audioQuality": "AUDIO_QUALITY_ULTRALOW",
                "approxDurationMs": "29721",
                "audioSampleRate": "48000",
                "audioChannels": 2,
                "loudnessDb": 0.13000011,
                "qualityOrdinal": "QUALITY_ORDINAL_UNKNOWN"
            },
            {
                "itag": 600,
                "url": "https://rr5---sn-uxax4vopj5qx-q0n6.googlevideo.com/videoplayback?expire=1751906920&ei=CKZraO7RA5Hs2fcPg6Xp2Q8&ip=176.1.149.17&id=o-ANTjOMNEq6oBtsgsoOTxBmazJeN2HAa0gdtSpmtFDkmk&itag=600&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1751885320%2C&mh=fi&mm=31%2C29&mn=sn-uxax4vopj5qx-q0n6%2Csn-4g5ednkl&ms=au%2Crdu&mv=m&mvi=5&pl=23&rms=au%2Cau&initcwndbps=1640000&bui=AY1jyLN6zVY3qntn3-oHrdOFBC_c-QAVW_ymgN6G8-xgOlbZfpcDzmiC0dpT5y66vxo3XobQ6YnljeZQ&spc=l3OVKRpOj5ur8l4xjFOvFp4R_ZISKx8SrjvvMTlmeqItbr4TuGyK&vprv=1&svpuc=1&xtags=drc%3D1&mime=audio%2Fwebm&ns=yKA6wi8OkAzam0U57D2IBYwQ&rqh=1&gir=yes&clen=137157&dur=29.721&lmt=1747426252762178&mt=1751885090&fvip=3&keepalive=yes&fexp=51331020&c=MWEB&sefc=1&txp=4432534&n=WBfmG-AYTN5W3w&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cxtags%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRAIgVgFGkcVi8UDWJ43TGGmeMSZh9-O0t0W9oP9TWulAp4wCIHdz_aDhRuBsSE3ec448wSUG8ET5TVvNnV8FkjKqf7x3&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIhAOq7ETyRUnRE6KyUS0JfmdosNaMaIaRoS7hgHIdvwUdAAiApbsLXog7P5WRmh5r0yVvirpXuiJypGW0Slfqq-2VPmw%3D%3D&pot=MnTS9US85O-gXdLJLrQp65jW2oEsWOGAd5K0_Zhm9m3HrHwenumiwTtheGF02kbl9pFiKv63F6RRjAN6GLwdIc-5s3psy1uisDqmx73MGHRJfu3JN_QJrra2LI32BZ3L6Bdkpy58_OxO9Lgyf2UJx6JfLwc9Zg==",
                "mimeType": "audio/webm; codecs=\"opus\"",
                "bitrate": 37829,
                "initRange": {
                    "start": "0",
                    "end": "258"
                },
                "indexRange": {
                    "start": "259",
                    "end": "308"
                },
                "lastModified": "1747426252762178",
                "contentLength": "137157",
                "quality": "tiny",
                "xtags": "CggKA2RyYxIBMQ",
                "projectionType": "RECTANGULAR",
                "averageBitrate": 36918,
                "audioQuality": "AUDIO_QUALITY_ULTRALOW",
                "approxDurationMs": "29721",
                "audioSampleRate": "48000",
                "audioChannels": 2,
                "loudnessDb": 0,
                "isDrc": true,
                "qualityOrdinal": "QUALITY_ORDINAL_UNKNOWN"
            }
        ],
        "pmReg": "DE",
        "isProxied": false
        };
        console.log('$yTResponse: ',yTResponse);
        $(".spinner-div").hide(); */

        var myHeaders = new Headers();
        myHeaders.append("x-rapidapi-key", "184006b1bdmsh4501251d96e9da5p14b599jsn00737e7f0378");//Acc1
        myHeaders.append("x-rapidapi-host", "yt-api.p.rapidapi.com");
        
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        $(".spinner-div").show();
        fetch("https://yt-api.p.rapidapi.com/dl?id=" + videoId, requestOptions).then(response => response.json()).then(result => {
            console.log('$API: ', result);
            $(".spinner-div").hide();
            if(result.error){
                showToast(result.error);
            }else{
                yTResponse = result;
                let thumbnail = yTResponse.thumbnail.reduce((max, img) => img.width > max.width ? img : max);
                console.log(thumbnail.url);

                let title = yTResponse.title;
                console.log('$title: ',title);

                $('.thumb_img').prop('src',thumbnail.url);
                
                let duration = yTResponse.lengthSeconds;
                console.log('$duration: ',duration);
                $('.title_dv').text(title + ' / ' + `Duration ${formatTime(duration)} Seconds`);

                let i = 0;
                let trs = '';
                while(i < yTResponse.adaptiveFormats.length){
                    let video = yTResponse.adaptiveFormats[i];
                    // console.log('$video: ',video);

                    let isAudio = video.audioQuality ?? false;
                    console.log('$isAudio: ',isAudio);
                    
                    let quality = `${video.qualityLabel} / ${video.fps} FPS`;

                    if(isAudio){
                        quality = isAudio;
                    }

                    let innerTable = `
                        <table class="inner_table">
                            <tr class="inner_tr">
                                <td class="inner_td">
                                    Quality
                                </td>
                                <td class="inner_td">
                                    ${quality}
                                </td>
                            </tr>
                            <tr class="inner_tr">
                                <td class="inner_td">
                                    Size
                                </td>
                                <td class="inner_td">
                                    ${formatBytes(video.contentLength)}
                                </td>
                            </tr>
                            <tr class="inner_tr">
                                <td class="inner_td">
                                    Type
                                </td>
                                <td class="inner_td">
                                    ${video.mimeType.split(';').at(0)}
                                </td>
                            </tr>
                            <tr class="inner_tr">
                                <td class="inner_td" colspan="2">
                                    <button class="btn_download" data-url="${video.url}">DOWNLOAD</button>
                                </td>
                            </tr>
                        </table>
                    `;
                    
                    trs += `<tr class="tr"><td class="td">${innerTable}</td></tr>`

                    i++;
                }
                $('.table').html(trs);
            }
        }).catch(error => {
            console.log('$API: error', error);
        });
   }
});

$(document).on('input', '.inp_video_id', function (e){
   let val = $(this).val().trim();
   if(val.includes('?si')){
        console.log('val: ',val);
        val = val.substring(val.lastIndexOf('/') + 1, val.indexOf('?si'));
        console.log('$val: ',val);
        $(this).val(val);
   }
});

$(document).on('click', '.btn_download', function (e){
   let url = $(this).data('url');
   console.log('$url: ',url);
   window.open(url, '_blank');
});

function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return [
        hrs.toString().padStart(2, '0'),
        mins.toString().padStart(2, '0'),
        secs.toString().padStart(2, '0')
    ].join(':');
}


function formatBytes(bytes) {
    if (bytes < 1024) {
        return bytes + ' B';
    } else if (bytes < 1024 * 1024) {
        return (bytes / 1024).toFixed(2) + ' KB';
    } else if (bytes < 1024 * 1024 * 1024) {
        return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
    } else {
        return (bytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
    }
}


function showToast(message) {
    if (!timeout) {
        timeout = true;
        $('.snackbar').addClass('show');
        $('.snackbar').text(message);
        setTimeout(function () {
            $('.snackbar').removeClass('show');
            timeout = false; 
        }, 2000);
    }
}