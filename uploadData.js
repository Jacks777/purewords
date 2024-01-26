const admin = require("firebase-admin");

const serviceAccount = require("./id-development-d88b1-firebase-adminsdk-tbukn-e2c1b2525a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firestore = admin.firestore();

const bibleData = {
  book: "Acts",
  chapters: [
    {
      chapter: "1",
      verses: [
        {
          verse: "1",
          text: "The former treatise have I made, O Theophilus, of all that Jesus began both to do and teach,",
        },
        {
          verse: "2",
          text: "Until the day in which he was taken up, after that he through the Holy Ghost had given commandments unto the apostles whom he had chosen:",
        },
        {
          verse: "3",
          text: "To whom also he shewed himself alive after his passion by many infallible proofs, being seen of them forty days, and speaking of the things pertaining to the kingdom of God:",
        },
        {
          verse: "4",
          text: "And, being assembled together with them, commanded them that they should not depart from Jerusalem, but wait for the promise of the Father, which, saith he, ye have heard of me.",
        },
        {
          verse: "5",
          text: "For John truly baptized with water; but ye shall be baptized with the Holy Ghost not many days hence.",
        },
        {
          verse: "6",
          text: "When they therefore were come together, they asked of him, saying, Lord, wilt thou at this time restore again the kingdom to Israel?",
        },
        {
          verse: "7",
          text: "And he said unto them, It is not for you to know the times or the seasons, which the Father hath put in his own power.",
        },
        {
          verse: "8",
          text: "But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth.",
        },
        {
          verse: "9",
          text: "And when he had spoken these things, while they beheld, he was taken up; and a cloud received him out of their sight.",
        },
        {
          verse: "10",
          text: "And while they looked stedfastly toward heaven as he went up, behold, two men stood by them in white apparel;",
        },
        {
          verse: "11",
          text: "Which also said, Ye men of Galilee, why stand ye gazing up into heaven? this same Jesus, which is taken up from you into heaven, shall so come in like manner as ye have seen him go into heaven.",
        },
        {
          verse: "12",
          text: "Then returned they unto Jerusalem from the mount called Olivet, which is from Jerusalem a sabbath day\u2019s journey.",
        },
        {
          verse: "13",
          text: "And when they were come in, they went up into an upper room, where abode both Peter, and James, and John, and Andrew, Philip, and Thomas, Bartholomew, and Matthew, James the son of Alphaeus, and Simon Zelotes, and Judas the brother of James.",
        },
        {
          verse: "14",
          text: "These all continued with one accord in prayer and supplication, with the women, and Mary the mother of Jesus, and with his brethren.",
        },
        {
          verse: "15",
          text: "And in those days Peter stood up in the midst of the disciples, and said, (the number of names together were about an hundred and twenty,)",
        },
        {
          verse: "16",
          text: "Men and brethren, this scripture must needs have been fulfilled, which the Holy Ghost by the mouth of David spake before concerning Judas, which was guide to them that took Jesus.",
        },
        {
          verse: "17",
          text: "For he was numbered with us, and had obtained part of this ministry.",
        },
        {
          verse: "18",
          text: "Now this man purchased a field with the reward of iniquity; and falling headlong, he burst asunder in the midst, and all his bowels gushed out.",
        },
        {
          verse: "19",
          text: "And it was known unto all the dwellers at Jerusalem; insomuch as that field is called in their proper tongue, Aceldama, that is to say, The field of blood.",
        },
        {
          verse: "20",
          text: "For it is written in the book of Psalms, Let his habitation be desolate, and let no man dwell therein: and his bishoprick let another take.",
        },
        {
          verse: "21",
          text: "Wherefore of these men which have companied with us all the time that the Lord Jesus went in and out among us,",
        },
        {
          verse: "22",
          text: "Beginning from the baptism of John, unto that same day that he was taken up from us, must one be ordained to be a witness with us of his resurrection.",
        },
        {
          verse: "23",
          text: "And they appointed two, Joseph called Barsabas, who was surnamed Justus, and Matthias.",
        },
        {
          verse: "24",
          text: "And they prayed, and said, Thou, Lord, which knowest the hearts of all men, shew whether of these two thou hast chosen,",
        },
        {
          verse: "25",
          text: "That he may take part of this ministry and apostleship, from which Judas by transgression fell, that he might go to his own place.",
        },
        {
          verse: "26",
          text: "And they gave forth their lots; and the lot fell upon Matthias; and he was numbered with the eleven apostles.",
        },
      ],
    },
    {
      chapter: "2",
      verses: [
        {
          verse: "1",
          text: "And when the day of Pentecost was fully come, they were all with one accord in one place.",
        },
        {
          verse: "2",
          text: "And suddenly there came a sound from heaven as of a rushing mighty wind, and it filled all the house where they were sitting.",
        },
        {
          verse: "3",
          text: "And there appeared unto them cloven tongues like as of fire, and it sat upon each of them.",
        },
        {
          verse: "4",
          text: "And they were all filled with the Holy Ghost, and began to speak with other tongues, as the Spirit gave them utterance.",
        },
        {
          verse: "5",
          text: "And there were dwelling at Jerusalem Jews, devout men, out of every nation under heaven.",
        },
        {
          verse: "6",
          text: "Now when this was noised abroad, the multitude came together, and were confounded, because that every man heard them speak in his own language.",
        },
        {
          verse: "7",
          text: "And they were all amazed and marvelled, saying one to another, Behold, are not all these which speak Galilaeans?",
        },
        {
          verse: "8",
          text: "And how hear we every man in our own tongue, wherein we were born?",
        },
        {
          verse: "9",
          text: "Parthians, and Medes, and Elamites, and the dwellers in Mesopotamia, and in Judaea, and Cappadocia, in Pontus, and Asia,",
        },
        {
          verse: "10",
          text: "Phrygia, and Pamphylia, in Egypt, and in the parts of Libya about Cyrene, and strangers of Rome, Jews and proselytes,",
        },
        {
          verse: "11",
          text: "Cretes and Arabians, we do hear them speak in our tongues the wonderful works of God.",
        },
        {
          verse: "12",
          text: "And they were all amazed, and were in doubt, saying one to another, What meaneth this?",
        },
        {
          verse: "13",
          text: "Others mocking said, These men are full of new wine.",
        },
        {
          verse: "14",
          text: "But Peter, standing up with the eleven, lifted up his voice, and said unto them, Ye men of Judaea, and all ye that dwell at Jerusalem, be this known unto you, and hearken to my words:",
        },
        {
          verse: "15",
          text: "For these are not drunken, as ye suppose, seeing it is but the third hour of the day.",
        },
        {
          verse: "16",
          text: "But this is that which was spoken by the prophet Joel;",
        },
        {
          verse: "17",
          text: "And it shall come to pass in the last days, saith God, I will pour out of my Spirit upon all flesh: and your sons and your daughters shall prophesy, and your young men shall see visions, and your old men shall dream dreams:",
        },
        {
          verse: "18",
          text: "And on my servants and on my handmaidens I will pour out in those days of my Spirit; and they shall prophesy:",
        },
        {
          verse: "19",
          text: "And I will shew wonders in heaven above, and signs in the earth beneath; blood, and fire, and vapour of smoke:",
        },
        {
          verse: "20",
          text: "The sun shall be turned into darkness, and the moon into blood, before that great and notable day of the Lord come:",
        },
        {
          verse: "21",
          text: "And it shall come to pass, that whosoever shall call on the name of the Lord shall be saved.",
        },
        {
          verse: "22",
          text: "Ye men of Israel, hear these words; Jesus of Nazareth, a man approved of God among you by miracles and wonders and signs, which God did by him in the midst of you, as ye yourselves also know:",
        },
        {
          verse: "23",
          text: "Him, being delivered by the determinate counsel and foreknowledge of God, ye have taken, and by wicked hands have crucified and slain:",
        },
        {
          verse: "24",
          text: "Whom God hath raised up, having loosed the pains of death: because it was not possible that he should be holden of it.",
        },
        {
          verse: "25",
          text: "For David speaketh concerning him, I foresaw the Lord always before my face, for he is on my right hand, that I should not be moved:",
        },
        {
          verse: "26",
          text: "Therefore did my heart rejoice, and my tongue was glad; moreover also my flesh shall rest in hope:",
        },
        {
          verse: "27",
          text: "Because thou wilt not leave my soul in hell, neither wilt thou suffer thine Holy One to see corruption.",
        },
        {
          verse: "28",
          text: "Thou hast made known to me the ways of life; thou shalt make me full of joy with thy countenance.",
        },
        {
          verse: "29",
          text: "Men and brethren, let me freely speak unto you of the patriarch David, that he is both dead and buried, and his sepulchre is with us unto this day.",
        },
        {
          verse: "30",
          text: "Therefore being a prophet, and knowing that God had sworn with an oath to him, that of the fruit of his loins, according to the flesh, he would raise up Christ to sit on his throne;",
        },
        {
          verse: "31",
          text: "He seeing this before spake of the resurrection of Christ, that his soul was not left in hell, neither his flesh did see corruption.",
        },
        {
          verse: "32",
          text: "This Jesus hath God raised up, whereof we all are witnesses.",
        },
        {
          verse: "33",
          text: "Therefore being by the right hand of God exalted, and having received of the Father the promise of the Holy Ghost, he hath shed forth this, which ye now see and hear.",
        },
        {
          verse: "34",
          text: "For David is not ascended into the heavens: but he saith himself, The Lord said unto my Lord, Sit thou on my right hand,",
        },
        { verse: "35", text: "Until I make thy foes thy footstool." },
        {
          verse: "36",
          text: "Therefore let all the house of Israel know assuredly, that God hath made that same Jesus, whom ye have crucified, both Lord and Christ.",
        },
        {
          verse: "37",
          text: "Now when they heard this, they were pricked in their heart, and said unto Peter and to the rest of the apostles, Men and brethren, what shall we do?",
        },
        {
          verse: "38",
          text: "Then Peter said unto them, Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost.",
        },
        {
          verse: "39",
          text: "For the promise is unto you, and to your children, and to all that are afar off, even as many as the LORD our God shall call.",
        },
        {
          verse: "40",
          text: "And with many other words did he testify and exhort, saying, Save yourselves from this untoward generation.",
        },
        {
          verse: "41",
          text: "Then they that gladly received his word were baptized: and the same day there were added unto them about three thousand souls.",
        },
        {
          verse: "42",
          text: "And they continued stedfastly in the apostles\u2019 doctrine and fellowship, and in breaking of bread, and in prayers.",
        },
        {
          verse: "43",
          text: "And fear came upon every soul: and many wonders and signs were done by the apostles.",
        },
        {
          verse: "44",
          text: "And all that believed were together, and had all things common;",
        },
        {
          verse: "45",
          text: "And sold their possessions and goods, and parted them to all men, as every man had need.",
        },
        {
          verse: "46",
          text: "And they, continuing daily with one accord in the temple, and breaking bread from house to house, did eat their meat with gladness and singleness of heart,",
        },
        {
          verse: "47",
          text: "Praising God, and having favour with all the people. And the Lord added to the church daily such as should be saved.",
        },
      ],
    },
    {
      chapter: "3",
      verses: [
        {
          verse: "1",
          text: "Now Peter and John went up together into the temple at the hour of prayer, being the ninth hour.",
        },
        {
          verse: "2",
          text: "And a certain man lame from his mother\u2019s womb was carried, whom they laid daily at the gate of the temple which is called Beautiful, to ask alms of them that entered into the temple;",
        },
        {
          verse: "3",
          text: "Who seeing Peter and John about to go into the temple asked an alms.",
        },
        {
          verse: "4",
          text: "And Peter, fastening his eyes upon him with John, said, Look on us.",
        },
        {
          verse: "5",
          text: "And he gave heed unto them, expecting to receive something of them.",
        },
        {
          verse: "6",
          text: "Then Peter said, Silver and gold have I none; but such as I have give I thee: In the name of Jesus Christ of Nazareth rise up and walk.",
        },
        {
          verse: "7",
          text: "And he took him by the right hand, and lifted him up: and immediately his feet and ankle bones received strength.",
        },
        {
          verse: "8",
          text: "And he leaping up stood, and walked, and entered with them into the temple, walking, and leaping, and praising God.",
        },
        {
          verse: "9",
          text: "And all the people saw him walking and praising God:",
        },
        {
          verse: "10",
          text: "And they knew that it was he which sat for alms at the Beautiful gate of the temple: and they were filled with wonder and amazement at that which had happened unto him.",
        },
        {
          verse: "11",
          text: "And as the lame man which was healed held Peter and John, all the people ran together unto them in the porch that is called Solomon\u2019s, greatly wondering.",
        },
        {
          verse: "12",
          text: "And when Peter saw it, he answered unto the people, Ye men of Israel, why marvel ye at this? or why look ye so earnestly on us, as though by our own power or holiness we had made this man to walk?",
        },
        {
          verse: "13",
          text: "The God of Abraham, and of Isaac, and of Jacob, the God of our fathers, hath glorified his Son Jesus; whom ye delivered up, and denied him in the presence of Pilate, when he was determined to let him go.",
        },
        {
          verse: "14",
          text: "But ye denied the Holy One and the Just, and desired a murderer to be granted unto you;",
        },
        {
          verse: "15",
          text: "And killed the Prince of life, whom God hath raised from the dead; whereof we are witnesses.",
        },
        {
          verse: "16",
          text: "And his name through faith in his name hath made this man strong, whom ye see and know: yea, the faith which is by him hath given him this perfect soundness in the presence of you all.",
        },
        {
          verse: "17",
          text: "And now, brethren, I wot that through ignorance ye did it, as did also your rulers.",
        },
        {
          verse: "18",
          text: "But those things, which God before had shewed by the mouth of all his prophets, that Christ should suffer, he hath so fulfilled.",
        },
        {
          verse: "19",
          text: "Repent ye therefore, and be converted, that your sins may be blotted out, when the times of refreshing shall come from the presence of the Lord;",
        },
        {
          verse: "20",
          text: "And he shall send Jesus Christ, which before was preached unto you:",
        },
        {
          verse: "21",
          text: "Whom the heaven must receive until the times of restitution of all things, which God hath spoken by the mouth of all his holy prophets since the world began.",
        },
        {
          verse: "22",
          text: "For Moses truly said unto the fathers, A prophet shall the Lord your God raise up unto you of your brethren, like unto me; him shall ye hear in all things whatsoever he shall say unto you.",
        },
        {
          verse: "23",
          text: "And it shall come to pass, that every soul, which will not hear that prophet, shall be destroyed from among the people.",
        },
        {
          verse: "24",
          text: "Yea, and all the prophets from Samuel and those that follow after, as many as have spoken, have likewise foretold of these days.",
        },
        {
          verse: "25",
          text: "Ye are the children of the prophets, and of the covenant which God made with our fathers, saying unto Abraham, And in thy seed shall all the kindreds of the earth be blessed.",
        },
        {
          verse: "26",
          text: "Unto you first God, having raised up his Son Jesus, sent him to bless you, in turning away every one of you from his iniquities.",
        },
      ],
    },
    {
      chapter: "4",
      verses: [
        {
          verse: "1",
          text: "And as they spake unto the people, the priests, and the captain of the temple, and the Sadducees, came upon them,",
        },
        {
          verse: "2",
          text: "Being grieved that they taught the people, and preached through Jesus the resurrection from the dead.",
        },
        {
          verse: "3",
          text: "And they laid hands on them, and put them in hold unto the next day: for it was now eventide.",
        },
        {
          verse: "4",
          text: "Howbeit many of them which heard the word believed; and the number of the men was about five thousand.",
        },
        {
          verse: "5",
          text: "And it came to pass on the morrow, that their rulers, and elders, and scribes,",
        },
        {
          verse: "6",
          text: "And Annas the high priest, and Caiaphas, and John, and Alexander, and as many as were of the kindred of the high priest, were gathered together at Jerusalem.",
        },
        {
          verse: "7",
          text: "And when they had set them in the midst, they asked, By what power, or by what name, have ye done this?",
        },
        {
          verse: "8",
          text: "Then Peter, filled with the Holy Ghost, said unto them, Ye rulers of the people, and elders of Israel,",
        },
        {
          verse: "9",
          text: "If we this day be examined of the good deed done to the impotent man, by what means he is made whole;",
        },
        {
          verse: "10",
          text: "Be it known unto you all, and to all the people of Israel, that by the name of Jesus Christ of Nazareth, whom ye crucified, whom God raised from the dead, even by him doth this man stand here before you whole.",
        },
        {
          verse: "11",
          text: "This is the stone which was set at nought of you builders, which is become the head of the corner.",
        },
        {
          verse: "12",
          text: "Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.",
        },
        {
          verse: "13",
          text: "Now when they saw the boldness of Peter and John, and perceived that they were unlearned and ignorant men, they marvelled; and they took knowledge of them, that they had been with Jesus.",
        },
        {
          verse: "14",
          text: "And beholding the man which was healed standing with them, they could say nothing against it.",
        },
        {
          verse: "15",
          text: "But when they had commanded them to go aside out of the council, they conferred among themselves,",
        },
        {
          verse: "16",
          text: "Saying, What shall we do to these men? for that indeed a notable miracle hath been done by them is manifest to all them that dwell in Jerusalem; and we cannot deny it.",
        },
        {
          verse: "17",
          text: "But that it spread no further among the people, let us straitly threaten them, that they speak henceforth to no man in this name.",
        },
        {
          verse: "18",
          text: "And they called them, and commanded them not to speak at all nor teach in the name of Jesus.",
        },
        {
          verse: "19",
          text: "But Peter and John answered and said unto them, Whether it be right in the sight of God to hearken unto you more than unto God, judge ye.",
        },
        {
          verse: "20",
          text: "For we cannot but speak the things which we have seen and heard.",
        },
        {
          verse: "21",
          text: "So when they had further threatened them, they let them go, finding nothing how they might punish them, because of the people: for all men glorified God for that which was done.",
        },
        {
          verse: "22",
          text: "For the man was above forty years old, on whom this miracle of healing was shewed.",
        },
        {
          verse: "23",
          text: "And being let go, they went to their own company, and reported all that the chief priests and elders had said unto them.",
        },
        {
          verse: "24",
          text: "And when they heard that, they lifted up their voice to God with one accord, and said, Lord, thou art God, which hast made heaven, and earth, and the sea, and all that in them is:",
        },
        {
          verse: "25",
          text: "Who by the mouth of thy servant David hast said, Why did the heathen rage, and the people imagine vain things?",
        },
        {
          verse: "26",
          text: "The kings of the earth stood up, and the rulers were gathered together against the Lord, and against his Christ.",
        },
        {
          verse: "27",
          text: "For of a truth against thy holy child Jesus, whom thou hast anointed, both Herod, and Pontius Pilate, with the Gentiles, and the people of Israel, were gathered together,",
        },
        {
          verse: "28",
          text: "For to do whatsoever thy hand and thy counsel determined before to be done.",
        },
        {
          verse: "29",
          text: "And now, Lord, behold their threatenings: and grant unto thy servants, that with all boldness they may speak thy word,",
        },
        {
          verse: "30",
          text: "By stretching forth thine hand to heal; and that signs and wonders may be done by the name of thy holy child Jesus.",
        },
        {
          verse: "31",
          text: "And when they had prayed, the place was shaken where they were assembled together; and they were all filled with the Holy Ghost, and they spake the word of God with boldness.",
        },
        {
          verse: "32",
          text: "And the multitude of them that believed were of one heart and of one soul: neither said any of them that ought of the things which he possessed was his own; but they had all things common.",
        },
        {
          verse: "33",
          text: "And with great power gave the apostles witness of the resurrection of the Lord Jesus: and great grace was upon them all.",
        },
        {
          verse: "34",
          text: "Neither was there any among them that lacked: for as many as were possessors of lands or houses sold them, and brought the prices of the things that were sold,",
        },
        {
          verse: "35",
          text: "And laid them down at the apostles\u2019 feet: and distribution was made unto every man according as he had need.",
        },
        {
          verse: "36",
          text: "And Joses, who by the apostles was surnamed Barnabas, (which is, being interpreted, The son of consolation,) a Levite, and of the country of Cyprus,",
        },
        {
          verse: "37",
          text: "Having land, sold it, and brought the money, and laid it at the apostles\u2019 feet.",
        },
      ],
    },
    {
      chapter: "5",
      verses: [
        {
          verse: "1",
          text: "But a certain man named Ananias, with Sapphira his wife, sold a possession,",
        },
        {
          verse: "2",
          text: "And kept back part of the price, his wife also being privy to it, and brought a certain part, and laid it at the apostles\u2019 feet.",
        },
        {
          verse: "3",
          text: "But Peter said, Ananias, why hath Satan filled thine heart to lie to the Holy Ghost, and to keep back part of the price of the land?",
        },
        {
          verse: "4",
          text: "Whiles it remained, was it not thine own? and after it was sold, was it not in thine own power? why hast thou conceived this thing in thine heart? thou hast not lied unto men, but unto God.",
        },
        {
          verse: "5",
          text: "And Ananias hearing these words fell down, and gave up the ghost: and great fear came on all them that heard these things.",
        },
        {
          verse: "6",
          text: "And the young men arose, wound him up, and carried him out, and buried him.",
        },
        {
          verse: "7",
          text: "And it was about the space of three hours after, when his wife, not knowing what was done, came in.",
        },
        {
          verse: "8",
          text: "And Peter answered unto her, Tell me whether ye sold the land for so much? And she said, Yea, for so much.",
        },
        {
          verse: "9",
          text: "Then Peter said unto her, How is it that ye have agreed together to tempt the Spirit of the Lord? behold, the feet of them which have buried thy husband are at the door, and shall carry thee out.",
        },
        {
          verse: "10",
          text: "Then fell she down straightway at his feet, and yielded up the ghost: and the young men came in, and found her dead, and, carrying her forth, buried her by her husband.",
        },
        {
          verse: "11",
          text: "And great fear came upon all the church, and upon as many as heard these things.",
        },
        {
          verse: "12",
          text: "And by the hands of the apostles were many signs and wonders wrought among the people; (and they were all with one accord in Solomon\u2019s porch.",
        },
        {
          verse: "13",
          text: "And of the rest durst no man join himself to them: but the people magnified them.",
        },
        {
          verse: "14",
          text: "And believers were the more added to the Lord, multitudes both of men and women.)",
        },
        {
          verse: "15",
          text: "Insomuch that they brought forth the sick into the streets, and laid them on beds and couches, that at the least the shadow of Peter passing by might overshadow some of them.",
        },
        {
          verse: "16",
          text: "There came also a multitude out of the cities round about unto Jerusalem, bringing sick folks, and them which were vexed with unclean spirits: and they were healed every one.",
        },
        {
          verse: "17",
          text: "Then the high priest rose up, and all they that were with him, (which is the sect of the Sadducees,) and were filled with indignation,",
        },
        {
          verse: "18",
          text: "And laid their hands on the apostles, and put them in the common prison.",
        },
        {
          verse: "19",
          text: "But the angel of the Lord by night opened the prison doors, and brought them forth, and said,",
        },
        {
          verse: "20",
          text: "Go, stand and speak in the temple to the people all the words of this life.",
        },
        {
          verse: "21",
          text: "And when they heard that, they entered into the temple early in the morning, and taught. But the high priest came, and they that were with him, and called the council together, and all the senate of the children of Israel, and sent to the prison to have them brought.",
        },
        {
          verse: "22",
          text: "But when the officers came, and found them not in the prison, they returned, and told,",
        },
        {
          verse: "23",
          text: "Saying, The prison truly found we shut with all safety, and the keepers standing without before the doors: but when we had opened, we found no man within.",
        },
        {
          verse: "24",
          text: "Now when the high priest and the captain of the temple and the chief priests heard these things, they doubted of them whereunto this would grow.",
        },
        {
          verse: "25",
          text: "Then came one and told them, saying, Behold, the men whom ye put in prison are standing in the temple, and teaching the people.",
        },
        {
          verse: "26",
          text: "Then went the captain with the officers, and brought them without violence: for they feared the people, lest they should have been stoned.",
        },
        {
          verse: "27",
          text: "And when they had brought them, they set them before the council: and the high priest asked them,",
        },
        {
          verse: "28",
          text: "Saying, Did not we straitly command you that ye should not teach in this name? and, behold, ye have filled Jerusalem with your doctrine, and intend to bring this man\u2019s blood upon us.",
        },
        {
          verse: "29",
          text: "Then Peter and the other apostles answered and said, We ought to obey God rather than men.",
        },
        {
          verse: "30",
          text: "The God of our fathers raised up Jesus, whom ye slew and hanged on a tree.",
        },
        {
          verse: "31",
          text: "Him hath God exalted with his right hand to be a Prince and a Saviour, for to give repentance to Israel, and forgiveness of sins.",
        },
        {
          verse: "32",
          text: "And we are his witnesses of these things; and so is also the Holy Ghost, whom God hath given to them that obey him.",
        },
        {
          verse: "33",
          text: "When they heard that, they were cut to the heart, and took counsel to slay them.",
        },
        {
          verse: "34",
          text: "Then stood there up one in the council, a Pharisee, named Gamaliel, a doctor of the law, had in reputation among all the people, and commanded to put the apostles forth a little space;",
        },
        {
          verse: "35",
          text: "And said unto them, Ye men of Israel, take heed to yourselves what ye intend to do as touching these men.",
        },
        {
          verse: "36",
          text: "For before these days rose up Theudas, boasting himself to be somebody; to whom a number of men, about four hundred, joined themselves: who was slain; and all, as many as obeyed him, were scattered, and brought to nought.",
        },
        {
          verse: "37",
          text: "After this man rose up Judas of Galilee in the days of the taxing, and drew away much people after him: he also perished; and all, even as many as obeyed him, were dispersed.",
        },
        {
          verse: "38",
          text: "And now I say unto you, Refrain from these men, and let them alone: for if this counsel or this work be of men, it will come to nought:",
        },
        {
          verse: "39",
          text: "But if it be of God, ye cannot overthrow it; lest haply ye be found even to fight against God.",
        },
        {
          verse: "40",
          text: "And to him they agreed: and when they had called the apostles, and beaten them, they commanded that they should not speak in the name of Jesus, and let them go.",
        },
        {
          verse: "41",
          text: "And they departed from the presence of the council, rejoicing that they were counted worthy to suffer shame for his name.",
        },
        {
          verse: "42",
          text: "And daily in the temple, and in every house, they ceased not to teach and preach Jesus Christ.",
        },
      ],
    },
    {
      chapter: "6",
      verses: [
        {
          verse: "1",
          text: "And in those days, when the number of the disciples was multiplied, there arose a murmuring of the Grecians against the Hebrews, because their widows were neglected in the daily ministration.",
        },
        {
          verse: "2",
          text: "Then the twelve called the multitude of the disciples unto them, and said, It is not reason that we should leave the word of God, and serve tables.",
        },
        {
          verse: "3",
          text: "Wherefore, brethren, look ye out among you seven men of honest report, full of the Holy Ghost and wisdom, whom we may appoint over this business.",
        },
        {
          verse: "4",
          text: "But we will give ourselves continually to prayer, and to the ministry of the word.",
        },
        {
          verse: "5",
          text: "And the saying pleased the whole multitude: and they chose Stephen, a man full of faith and of the Holy Ghost, and Philip, and Prochorus, and Nicanor, and Timon, and Parmenas, and Nicolas a proselyte of Antioch:",
        },
        {
          verse: "6",
          text: "Whom they set before the apostles: and when they had prayed, they laid their hands on them.",
        },
        {
          verse: "7",
          text: "And the word of God increased; and the number of the disciples multiplied in Jerusalem greatly; and a great company of the priests were obedient to the faith.",
        },
        {
          verse: "8",
          text: "And Stephen, full of faith and power, did great wonders and miracles among the people.",
        },
        {
          verse: "9",
          text: "Then there arose certain of the synagogue, which is called the synagogue of the Libertines, and Cyrenians, and Alexandrians, and of them of Cilicia and of Asia, disputing with Stephen.",
        },
        {
          verse: "10",
          text: "And they were not able to resist the wisdom and the spirit by which he spake.",
        },
        {
          verse: "11",
          text: "Then they suborned men, which said, We have heard him speak blasphemous words against Moses, and against God.",
        },
        {
          verse: "12",
          text: "And they stirred up the people, and the elders, and the scribes, and came upon him, and caught him, and brought him to the council,",
        },
        {
          verse: "13",
          text: "And set up false witnesses, which said, This man ceaseth not to speak blasphemous words against this holy place, and the law:",
        },
        {
          verse: "14",
          text: "For we have heard him say, that this Jesus of Nazareth shall destroy this place, and shall change the customs which Moses delivered us.",
        },
        {
          verse: "15",
          text: "And all that sat in the council, looking stedfastly on him, saw his face as it had been the face of an angel.",
        },
      ],
    },
    {
      chapter: "7",
      verses: [
        { verse: "1", text: "Then said the high priest, Are these things so?" },
        {
          verse: "2",
          text: "And he said, Men, brethren, and fathers, hearken; The God of glory appeared unto our father Abraham, when he was in Mesopotamia, before he dwelt in Charran,",
        },
        {
          verse: "3",
          text: "And said unto him, Get thee out of thy country, and from thy kindred, and come into the land which I shall shew thee.",
        },
        {
          verse: "4",
          text: "Then came he out of the land of the Chaldaeans, and dwelt in Charran: and from thence, when his father was dead, he removed him into this land, wherein ye now dwell.",
        },
        {
          verse: "5",
          text: "And he gave him none inheritance in it, no, not so much as to set his foot on: yet he promised that he would give it to him for a possession, and to his seed after him, when as yet he had no child.",
        },
        {
          verse: "6",
          text: "And God spake on this wise, That his seed should sojourn in a strange land; and that they should bring them into bondage, and entreat them evil four hundred years.",
        },
        {
          verse: "7",
          text: "And the nation to whom they shall be in bondage will I judge, said God: and after that shall they come forth, and serve me in this place.",
        },
        {
          verse: "8",
          text: "And he gave him the covenant of circumcision: and so Abraham begat Isaac, and circumcised him the eighth day; and Isaac begat Jacob; and Jacob begat the twelve patriarchs.",
        },
        {
          verse: "9",
          text: "And the patriarchs, moved with envy, sold Joseph into Egypt: but God was with him,",
        },
        {
          verse: "10",
          text: "And delivered him out of all his afflictions, and gave him favour and wisdom in the sight of Pharaoh king of Egypt; and he made him governor over Egypt and all his house.",
        },
        {
          verse: "11",
          text: "Now there came a dearth over all the land of Egypt and Chanaan, and great affliction: and our fathers found no sustenance.",
        },
        {
          verse: "12",
          text: "But when Jacob heard that there was corn in Egypt, he sent out our fathers first.",
        },
        {
          verse: "13",
          text: "And at the second time Joseph was made known to his brethren; and Joseph\u2019s kindred was made known unto Pharaoh.",
        },
        {
          verse: "14",
          text: "Then sent Joseph, and called his father Jacob to him, and all his kindred, threescore and fifteen souls.",
        },
        {
          verse: "15",
          text: "So Jacob went down into Egypt, and died, he, and our fathers,",
        },
        {
          verse: "16",
          text: "And were carried over into Sychem, and laid in the sepulchre that Abraham bought for a sum of money of the sons of Emmor the father of Sychem.",
        },
        {
          verse: "17",
          text: "But when the time of the promise drew nigh, which God had sworn to Abraham, the people grew and multiplied in Egypt,",
        },
        {
          verse: "18",
          text: "Till another king arose, which knew not Joseph.",
        },
        {
          verse: "19",
          text: "The same dealt subtilly with our kindred, and evil entreated our fathers, so that they cast out their young children, to the end they might not live.",
        },
        {
          verse: "20",
          text: "In which time Moses was born, and was exceeding fair, and nourished up in his father\u2019s house three months:",
        },
        {
          verse: "21",
          text: "And when he was cast out, Pharaoh\u2019s daughter took him up, and nourished him for her own son.",
        },
        {
          verse: "22",
          text: "And Moses was learned in all the wisdom of the Egyptians, and was mighty in words and in deeds.",
        },
        {
          verse: "23",
          text: "And when he was full forty years old, it came into his heart to visit his brethren the children of Israel.",
        },
        {
          verse: "24",
          text: "And seeing one of them suffer wrong, he defended him, and avenged him that was oppressed, and smote the Egyptian:",
        },
        {
          verse: "25",
          text: "For he supposed his brethren would have understood how that God by his hand would deliver them: but they understood not.",
        },
        {
          verse: "26",
          text: "And the next day he shewed himself unto them as they strove, and would have set them at one again, saying, Sirs, ye are brethren; why do ye wrong one to another?",
        },
        {
          verse: "27",
          text: "But he that did his neighbour wrong thrust him away, saying, Who made thee a ruler and a judge over us?",
        },
        {
          verse: "28",
          text: "Wilt thou kill me, as thou diddest the Egyptian yesterday?",
        },
        {
          verse: "29",
          text: "Then fled Moses at this saying, and was a stranger in the land of Madian, where he begat two sons.",
        },
        {
          verse: "30",
          text: "And when forty years were expired, there appeared to him in the wilderness of mount Sina an angel of the Lord in a flame of fire in a bush.",
        },
        {
          verse: "31",
          text: "When Moses saw it, he wondered at the sight: and as he drew near to behold it, the voice of the LORD came unto him,",
        },
        {
          verse: "32",
          text: "Saying, I am the God of thy fathers, the God of Abraham, and the God of Isaac, and the God of Jacob. Then Moses trembled, and durst not behold.",
        },
        {
          verse: "33",
          text: "Then said the Lord to him, Put off thy shoes from thy feet: for the place where thou standest is holy ground.",
        },
        {
          verse: "34",
          text: "I have seen, I have seen the affliction of my people which is in Egypt, and I have heard their groaning, and am come down to deliver them. And now come, I will send thee into Egypt.",
        },
        {
          verse: "35",
          text: "This Moses whom they refused, saying, Who made thee a ruler and a judge? the same did God send to be a ruler and a deliverer by the hand of the angel which appeared to him in the bush.",
        },
        {
          verse: "36",
          text: "He brought them out, after that he had shewed wonders and signs in the land of Egypt, and in the Red sea, and in the wilderness forty years.",
        },
        {
          verse: "37",
          text: "This is that Moses, which said unto the children of Israel, A prophet shall the Lord your God raise up unto you of your brethren, like unto me; him shall ye hear.",
        },
        {
          verse: "38",
          text: "This is he, that was in the church in the wilderness with the angel which spake to him in the mount Sina, and with our fathers: who received the lively oracles to give unto us:",
        },
        {
          verse: "39",
          text: "To whom our fathers would not obey, but thrust him from them, and in their hearts turned back again into Egypt,",
        },
        {
          verse: "40",
          text: "Saying unto Aaron, Make us gods to go before us: for as for this Moses, which brought us out of the land of Egypt, we wot not what is become of him.",
        },
        {
          verse: "41",
          text: "And they made a calf in those days, and offered sacrifice unto the idol, and rejoiced in the works of their own hands.",
        },
        {
          verse: "42",
          text: "Then God turned, and gave them up to worship the host of heaven; as it is written in the book of the prophets, O ye house of Israel, have ye offered to me slain beasts and sacrifices by the space of forty years in the wilderness?",
        },
        {
          verse: "43",
          text: "Yea, ye took up the tabernacle of Moloch, and the star of your god Remphan, figures which ye made to worship them: and I will carry you away beyond Babylon.",
        },
        {
          verse: "44",
          text: "Our fathers had the tabernacle of witness in the wilderness, as he had appointed, speaking unto Moses, that he should make it according to the fashion that he had seen.",
        },
        {
          verse: "45",
          text: "Which also our fathers that came after brought in with Jesus into the possession of the Gentiles, whom God drave out before the face of our fathers, unto the days of David;",
        },
        {
          verse: "46",
          text: "Who found favour before God, and desired to find a tabernacle for the God of Jacob.",
        },
        { verse: "47", text: "But Solomon built him an house." },
        {
          verse: "48",
          text: "Howbeit the most High dwelleth not in temples made with hands; as saith the prophet,",
        },
        {
          verse: "49",
          text: "Heaven is my throne, and earth is my footstool: what house will ye build me? saith the Lord: or what is the place of my rest?",
        },
        { verse: "50", text: "Hath not my hand made all these things?" },
        {
          verse: "51",
          text: "Ye stiffnecked and uncircumcised in heart and ears, ye do always resist the Holy Ghost: as your fathers did, so do ye.",
        },
        {
          verse: "52",
          text: "Which of the prophets have not your fathers persecuted? and they have slain them which shewed before of the coming of the Just One; of whom ye have been now the betrayers and murderers:",
        },
        {
          verse: "53",
          text: "Who have received the law by the disposition of angels, and have not kept it.",
        },
        {
          verse: "54",
          text: "When they heard these things, they were cut to the heart, and they gnashed on him with their teeth.",
        },
        {
          verse: "55",
          text: "But he, being full of the Holy Ghost, looked up stedfastly into heaven, and saw the glory of God, and Jesus standing on the right hand of God,",
        },
        {
          verse: "56",
          text: "And said, Behold, I see the heavens opened, and the Son of man standing on the right hand of God.",
        },
        {
          verse: "57",
          text: "Then they cried out with a loud voice, and stopped their ears, and ran upon him with one accord,",
        },
        {
          verse: "58",
          text: "And cast him out of the city, and stoned him: and the witnesses laid down their clothes at a young man\u2019s feet, whose name was Saul.",
        },
        {
          verse: "59",
          text: "And they stoned Stephen, calling upon God, and saying, Lord Jesus, receive my spirit.",
        },
        {
          verse: "60",
          text: "And he kneeled down, and cried with a loud voice, Lord, lay not this sin to their charge. And when he had said this, he fell asleep.",
        },
      ],
    },
    {
      chapter: "8",
      verses: [
        {
          verse: "1",
          text: "And Saul was consenting unto his death. And at that time there was a great persecution against the church which was at Jerusalem; and they were all scattered abroad throughout the regions of Judaea and Samaria, except the apostles.",
        },
        {
          verse: "2",
          text: "And devout men carried Stephen to his burial, and made great lamentation over him.",
        },
        {
          verse: "3",
          text: "As for Saul, he made havock of the church, entering into every house, and haling men and women committed them to prison.",
        },
        {
          verse: "4",
          text: "Therefore they that were scattered abroad went every where preaching the word.",
        },
        {
          verse: "5",
          text: "Then Philip went down to the city of Samaria, and preached Christ unto them.",
        },
        {
          verse: "6",
          text: "And the people with one accord gave heed unto those things which Philip spake, hearing and seeing the miracles which he did.",
        },
        {
          verse: "7",
          text: "For unclean spirits, crying with loud voice, came out of many that were possessed with them: and many taken with palsies, and that were lame, were healed.",
        },
        { verse: "8", text: "And there was great joy in that city." },
        {
          verse: "9",
          text: "But there was a certain man, called Simon, which beforetime in the same city used sorcery, and bewitched the people of Samaria, giving out that himself was some great one:",
        },
        {
          verse: "10",
          text: "To whom they all gave heed, from the least to the greatest, saying, This man is the great power of God.",
        },
        {
          verse: "11",
          text: "And to him they had regard, because that of long time he had bewitched them with sorceries.",
        },
        {
          verse: "12",
          text: "But when they believed Philip preaching the things concerning the kingdom of God, and the name of Jesus Christ, they were baptized, both men and women.",
        },
        {
          verse: "13",
          text: "Then Simon himself believed also: and when he was baptized, he continued with Philip, and wondered, beholding the miracles and signs which were done.",
        },
        {
          verse: "14",
          text: "Now when the apostles which were at Jerusalem heard that Samaria had received the word of God, they sent unto them Peter and John:",
        },
        {
          verse: "15",
          text: "Who, when they were come down, prayed for them, that they might receive the Holy Ghost:",
        },
        {
          verse: "16",
          text: "(For as yet he was fallen upon none of them: only they were baptized in the name of the Lord Jesus.)",
        },
        {
          verse: "17",
          text: "Then laid they their hands on them, and they received the Holy Ghost.",
        },
        {
          verse: "18",
          text: "And when Simon saw that through laying on of the apostles\u2019 hands the Holy Ghost was given, he offered them money,",
        },
        {
          verse: "19",
          text: "Saying, Give me also this power, that on whomsoever I lay hands, he may receive the Holy Ghost.",
        },
        {
          verse: "20",
          text: "But Peter said unto him, Thy money perish with thee, because thou hast thought that the gift of God may be purchased with money.",
        },
        {
          verse: "21",
          text: "Thou hast neither part nor lot in this matter: for thy heart is not right in the sight of God.",
        },
        {
          verse: "22",
          text: "Repent therefore of this thy wickedness, and pray God, if perhaps the thought of thine heart may be forgiven thee.",
        },
        {
          verse: "23",
          text: "For I perceive that thou art in the gall of bitterness, and in the bond of iniquity.",
        },
        {
          verse: "24",
          text: "Then answered Simon, and said, Pray ye to the LORD for me, that none of these things which ye have spoken come upon me.",
        },
        {
          verse: "25",
          text: "And they, when they had testified and preached the word of the Lord, returned to Jerusalem, and preached the gospel in many villages of the Samaritans.",
        },
        {
          verse: "26",
          text: "And the angel of the Lord spake unto Philip, saying, Arise, and go toward the south unto the way that goeth down from Jerusalem unto Gaza, which is desert.",
        },
        {
          verse: "27",
          text: "And he arose and went: and, behold, a man of Ethiopia, an eunuch of great authority under Candace queen of the Ethiopians, who had the charge of all her treasure, and had come to Jerusalem for to worship,",
        },
        {
          verse: "28",
          text: "Was returning, and sitting in his chariot read Esaias the prophet.",
        },
        {
          verse: "29",
          text: "Then the Spirit said unto Philip, Go near, and join thyself to this chariot.",
        },
        {
          verse: "30",
          text: "And Philip ran thither to him, and heard him read the prophet Esaias, and said, Understandest thou what thou readest?",
        },
        {
          verse: "31",
          text: "And he said, How can I, except some man should guide me? And he desired Philip that he would come up and sit with him.",
        },
        {
          verse: "32",
          text: "The place of the scripture which he read was this, He was led as a sheep to the slaughter; and like a lamb dumb before his shearer, so opened he not his mouth:",
        },
        {
          verse: "33",
          text: "In his humiliation his judgment was taken away: and who shall declare his generation? for his life is taken from the earth.",
        },
        {
          verse: "34",
          text: "And the eunuch answered Philip, and said, I pray thee, of whom speaketh the prophet this? of himself, or of some other man?",
        },
        {
          verse: "35",
          text: "Then Philip opened his mouth, and began at the same scripture, and preached unto him Jesus.",
        },
        {
          verse: "36",
          text: "And as they went on their way, they came unto a certain water: and the eunuch said, See, here is water; what doth hinder me to be baptized?",
        },
        {
          verse: "37",
          text: "And Philip said, If thou believest with all thine heart, thou mayest. And he answered and said, I believe that Jesus Christ is the Son of God.",
        },
        {
          verse: "38",
          text: "And he commanded the chariot to stand still: and they went down both into the water, both Philip and the eunuch; and he baptized him.",
        },
        {
          verse: "39",
          text: "And when they were come up out of the water, the Spirit of the Lord caught away Philip, that the eunuch saw him no more: and he went on his way rejoicing.",
        },
        {
          verse: "40",
          text: "But Philip was found at Azotus: and passing through he preached in all the cities, till he came to Caesarea.",
        },
      ],
    },
    {
      chapter: "9",
      verses: [
        {
          verse: "1",
          text: "And Saul, yet breathing out threatenings and slaughter against the disciples of the Lord, went unto the high priest,",
        },
        {
          verse: "2",
          text: "And desired of him letters to Damascus to the synagogues, that if he found any of this way, whether they were men or women, he might bring them bound unto Jerusalem.",
        },
        {
          verse: "3",
          text: "And as he journeyed, he came near Damascus: and suddenly there shined round about him a light from heaven:",
        },
        {
          verse: "4",
          text: "And he fell to the earth, and heard a voice saying unto him, Saul, Saul, why persecutest thou me?",
        },
        {
          verse: "5",
          text: "And he said, Who art thou, Lord? And the Lord said, I am Jesus whom thou persecutest: it is hard for thee to kick against the pricks.",
        },
        {
          verse: "6",
          text: "And he trembling and astonished said, Lord, what wilt thou have me to do? And the Lord said unto him, Arise, and go into the city, and it shall be told thee what thou must do.",
        },
        {
          verse: "7",
          text: "And the men which journeyed with him stood speechless, hearing a voice, but seeing no man.",
        },
        {
          verse: "8",
          text: "And Saul arose from the earth; and when his eyes were opened, he saw no man: but they led him by the hand, and brought him into Damascus.",
        },
        {
          verse: "9",
          text: "And he was three days without sight, and neither did eat nor drink.",
        },
        {
          verse: "10",
          text: "And there was a certain disciple at Damascus, named Ananias; and to him said the Lord in a vision, Ananias. And he said, Behold, I am here, Lord.",
        },
        {
          verse: "11",
          text: "And the Lord said unto him, Arise, and go into the street which is called Straight, and enquire in the house of Judas for one called Saul, of Tarsus: for, behold, he prayeth,",
        },
        {
          verse: "12",
          text: "And hath seen in a vision a man named Ananias coming in, and putting his hand on him, that he might receive his sight.",
        },
        {
          verse: "13",
          text: "Then Ananias answered, Lord, I have heard by many of this man, how much evil he hath done to thy saints at Jerusalem:",
        },
        {
          verse: "14",
          text: "And here he hath authority from the chief priests to bind all that call on thy name.",
        },
        {
          verse: "15",
          text: "But the Lord said unto him, Go thy way: for he is a chosen vessel unto me, to bear my name before the Gentiles, and kings, and the children of Israel:",
        },
        {
          verse: "16",
          text: "For I will shew him how great things he must suffer for my name\u2019s sake.",
        },
        {
          verse: "17",
          text: "And Ananias went his way, and entered into the house; and putting his hands on him said, Brother Saul, the Lord, even Jesus, that appeared unto thee in the way as thou camest, hath sent me, that thou mightest receive thy sight, and be filled with the Holy Ghost.",
        },
        {
          verse: "18",
          text: "And immediately there fell from his eyes as it had been scales: and he received sight forthwith, and arose, and was baptized.",
        },
        {
          verse: "19",
          text: "And when he had received meat, he was strengthened. Then was Saul certain days with the disciples which were at Damascus.",
        },
        {
          verse: "20",
          text: "And straightway he preached Christ in the synagogues, that he is the Son of God.",
        },
        {
          verse: "21",
          text: "But all that heard him were amazed, and said; Is not this he that destroyed them which called on this name in Jerusalem, and came hither for that intent, that he might bring them bound unto the chief priests?",
        },
        {
          verse: "22",
          text: "But Saul increased the more in strength, and confounded the Jews which dwelt at Damascus, proving that this is very Christ.",
        },
        {
          verse: "23",
          text: "And after that many days were fulfilled, the Jews took counsel to kill him:",
        },
        {
          verse: "24",
          text: "But their laying await was known of Saul. And they watched the gates day and night to kill him.",
        },
        {
          verse: "25",
          text: "Then the disciples took him by night, and let him down by the wall in a basket.",
        },
        {
          verse: "26",
          text: "And when Saul was come to Jerusalem, he assayed to join himself to the disciples: but they were all afraid of him, and believed not that he was a disciple.",
        },
        {
          verse: "27",
          text: "But Barnabas took him, and brought him to the apostles, and declared unto them how he had seen the Lord in the way, and that he had spoken to him, and how he had preached boldly at Damascus in the name of Jesus.",
        },
        {
          verse: "28",
          text: "And he was with them coming in and going out at Jerusalem.",
        },
        {
          verse: "29",
          text: "And he spake boldly in the name of the Lord Jesus, and disputed against the Grecians: but they went about to slay him.",
        },
        {
          verse: "30",
          text: "Which when the brethren knew, they brought him down to Caesarea, and sent him forth to Tarsus.",
        },
        {
          verse: "31",
          text: "Then had the churches rest throughout all Judaea and Galilee and Samaria, and were edified; and walking in the fear of the Lord, and in the comfort of the Holy Ghost, were multiplied.",
        },
        {
          verse: "32",
          text: "And it came to pass, as Peter passed throughout all quarters, he came down also to the saints which dwelt at Lydda.",
        },
        {
          verse: "33",
          text: "And there he found a certain man named Aeneas, which had kept his bed eight years, and was sick of the palsy.",
        },
        {
          verse: "34",
          text: "And Peter said unto him, Aeneas, Jesus Christ maketh thee whole: arise, and make thy bed. And he arose immediately.",
        },
        {
          verse: "35",
          text: "And all that dwelt at Lydda and Saron saw him, and turned to the Lord.",
        },
        {
          verse: "36",
          text: "Now there was at Joppa a certain disciple named Tabitha, which by interpretation is called Dorcas: this woman was full of good works and almsdeeds which she did.",
        },
        {
          verse: "37",
          text: "And it came to pass in those days, that she was sick, and died: whom when they had washed, they laid her in an upper chamber.",
        },
        {
          verse: "38",
          text: "And forasmuch as Lydda was nigh to Joppa, and the disciples had heard that Peter was there, they sent unto him two men, desiring him that he would not delay to come to them.",
        },
        {
          verse: "39",
          text: "Then Peter arose and went with them. When he was come, they brought him into the upper chamber: and all the widows stood by him weeping, and shewing the coats and garments which Dorcas made, while she was with them.",
        },
        {
          verse: "40",
          text: "But Peter put them all forth, and kneeled down, and prayed; and turning him to the body said, Tabitha, arise. And she opened her eyes: and when she saw Peter, she sat up.",
        },
        {
          verse: "41",
          text: "And he gave her his hand, and lifted her up, and when he had called the saints and widows, presented her alive.",
        },
        {
          verse: "42",
          text: "And it was known throughout all Joppa; and many believed in the Lord.",
        },
        {
          verse: "43",
          text: "And it came to pass, that he tarried many days in Joppa with one Simon a tanner.",
        },
      ],
    },
    {
      chapter: "10",
      verses: [
        {
          verse: "1",
          text: "There was a certain man in Caesarea called Cornelius, a centurion of the band called the Italian band,",
        },
        {
          verse: "2",
          text: "A devout man, and one that feared God with all his house, which gave much alms to the people, and prayed to God alway.",
        },
        {
          verse: "3",
          text: "He saw in a vision evidently about the ninth hour of the day an angel of God coming in to him, and saying unto him, Cornelius.",
        },
        {
          verse: "4",
          text: "And when he looked on him, he was afraid, and said, What is it, Lord? And he said unto him, Thy prayers and thine alms are come up for a memorial before God.",
        },
        {
          verse: "5",
          text: "And now send men to Joppa, and call for one Simon, whose surname is Peter:",
        },
        {
          verse: "6",
          text: "He lodgeth with one Simon a tanner, whose house is by the sea side: he shall tell thee what thou oughtest to do.",
        },
        {
          verse: "7",
          text: "And when the angel which spake unto Cornelius was departed, he called two of his household servants, and a devout soldier of them that waited on him continually;",
        },
        {
          verse: "8",
          text: "And when he had declared all these things unto them, he sent them to Joppa.",
        },
        {
          verse: "9",
          text: "On the morrow, as they went on their journey, and drew nigh unto the city, Peter went up upon the housetop to pray about the sixth hour:",
        },
        {
          verse: "10",
          text: "And he became very hungry, and would have eaten: but while they made ready, he fell into a trance,",
        },
        {
          verse: "11",
          text: "And saw heaven opened, and a certain vessel descending unto him, as it had been a great sheet knit at the four corners, and let down to the earth:",
        },
        {
          verse: "12",
          text: "Wherein were all manner of fourfooted beasts of the earth, and wild beasts, and creeping things, and fowls of the air.",
        },
        {
          verse: "13",
          text: "And there came a voice to him, Rise, Peter; kill, and eat.",
        },
        {
          verse: "14",
          text: "But Peter said, Not so, Lord; for I have never eaten any thing that is common or unclean.",
        },
        {
          verse: "15",
          text: "And the voice spake unto him again the second time, What God hath cleansed, that call not thou common.",
        },
        {
          verse: "16",
          text: "This was done thrice: and the vessel was received up again into heaven.",
        },
        {
          verse: "17",
          text: "Now while Peter doubted in himself what this vision which he had seen should mean, behold, the men which were sent from Cornelius had made enquiry for Simon\u2019s house, and stood before the gate,",
        },
        {
          verse: "18",
          text: "And called, and asked whether Simon, which was surnamed Peter, were lodged there.",
        },
        {
          verse: "19",
          text: "While Peter thought on the vision, the Spirit said unto him, Behold, three men seek thee.",
        },
        {
          verse: "20",
          text: "Arise therefore, and get thee down, and go with them, doubting nothing: for I have sent them.",
        },
        {
          verse: "21",
          text: "Then Peter went down to the men which were sent unto him from Cornelius; and said, Behold, I am he whom ye seek: what is the cause wherefore ye are come?",
        },
        {
          verse: "22",
          text: "And they said, Cornelius the centurion, a just man, and one that feareth God, and of good report among all the nation of the Jews, was warned from God by an holy angel to send for thee into his house, and to hear words of thee.",
        },
        {
          verse: "23",
          text: "Then called he them in, and lodged them. And on the morrow Peter went away with them, and certain brethren from Joppa accompanied him.",
        },
        {
          verse: "24",
          text: "And the morrow after they entered into Caesarea. And Cornelius waited for them, and had called together his kinsmen and near friends.",
        },
        {
          verse: "25",
          text: "And as Peter was coming in, Cornelius met him, and fell down at his feet, and worshipped him.",
        },
        {
          verse: "26",
          text: "But Peter took him up, saying, Stand up; I myself also am a man.",
        },
        {
          verse: "27",
          text: "And as he talked with him, he went in, and found many that were come together.",
        },
        {
          verse: "28",
          text: "And he said unto them, Ye know how that it is an unlawful thing for a man that is a Jew to keep company, or come unto one of another nation; but God hath shewed me that I should not call any man common or unclean.",
        },
        {
          verse: "29",
          text: "Therefore came I unto you without gainsaying, as soon as I was sent for: I ask therefore for what intent ye have sent for me?",
        },
        {
          verse: "30",
          text: "And Cornelius said, Four days ago I was fasting until this hour; and at the ninth hour I prayed in my house, and, behold, a man stood before me in bright clothing,",
        },
        {
          verse: "31",
          text: "And said, Cornelius, thy prayer is heard, and thine alms are had in remembrance in the sight of God.",
        },
        {
          verse: "32",
          text: "Send therefore to Joppa, and call hither Simon, whose surname is Peter; he is lodged in the house of one Simon a tanner by the sea side: who, when he cometh, shall speak unto thee.",
        },
        {
          verse: "33",
          text: "Immediately therefore I sent to thee; and thou hast well done that thou art come. Now therefore are we all here present before God, to hear all things that are commanded thee of God.",
        },
        {
          verse: "34",
          text: "Then Peter opened his mouth, and said, Of a truth I perceive that God is no respecter of persons:",
        },
        {
          verse: "35",
          text: "But in every nation he that feareth him, and worketh righteousness, is accepted with him.",
        },
        {
          verse: "36",
          text: "The word which God sent unto the children of Israel, preaching peace by Jesus Christ: (he is Lord of all:)",
        },
        {
          verse: "37",
          text: "That word, I say, ye know, which was published throughout all Judaea, and began from Galilee, after the baptism which John preached;",
        },
        {
          verse: "38",
          text: "How God anointed Jesus of Nazareth with the Holy Ghost and with power: who went about doing good, and healing all that were oppressed of the devil; for God was with him.",
        },
        {
          verse: "39",
          text: "And we are witnesses of all things which he did both in the land of the Jews, and in Jerusalem; whom they slew and hanged on a tree:",
        },
        {
          verse: "40",
          text: "Him God raised up the third day, and shewed him openly;",
        },
        {
          verse: "41",
          text: "Not to all the people, but unto witnesses chosen before of God, even to us, who did eat and drink with him after he rose from the dead.",
        },
        {
          verse: "42",
          text: "And he commanded us to preach unto the people, and to testify that it is he which was ordained of God to be the Judge of quick and dead.",
        },
        {
          verse: "43",
          text: "To him give all the prophets witness, that through his name whosoever believeth in him shall receive remission of sins.",
        },
        {
          verse: "44",
          text: "While Peter yet spake these words, the Holy Ghost fell on all them which heard the word.",
        },
        {
          verse: "45",
          text: "And they of the circumcision which believed were astonished, as many as came with Peter, because that on the Gentiles also was poured out the gift of the Holy Ghost.",
        },
        {
          verse: "46",
          text: "For they heard them speak with tongues, and magnify God. Then answered Peter,",
        },
        {
          verse: "47",
          text: "Can any man forbid water, that these should not be baptized, which have received the Holy Ghost as well as we?",
        },
        {
          verse: "48",
          text: "And he commanded them to be baptized in the name of the Lord. Then prayed they him to tarry certain days.",
        },
      ],
    },
    {
      chapter: "11",
      verses: [
        {
          verse: "1",
          text: "And the apostles and brethren that were in Judaea heard that the Gentiles had also received the word of God.",
        },
        {
          verse: "2",
          text: "And when Peter was come up to Jerusalem, they that were of the circumcision contended with him,",
        },
        {
          verse: "3",
          text: "Saying, Thou wentest in to men uncircumcised, and didst eat with them.",
        },
        {
          verse: "4",
          text: "But Peter rehearsed the matter from the beginning, and expounded it by order unto them, saying,",
        },
        {
          verse: "5",
          text: "I was in the city of Joppa praying: and in a trance I saw a vision, A certain vessel descend, as it had been a great sheet, let down from heaven by four corners; and it came even to me:",
        },
        {
          verse: "6",
          text: "Upon the which when I had fastened mine eyes, I considered, and saw fourfooted beasts of the earth, and wild beasts, and creeping things, and fowls of the air.",
        },
        {
          verse: "7",
          text: "And I heard a voice saying unto me, Arise, Peter; slay and eat.",
        },
        {
          verse: "8",
          text: "But I said, Not so, Lord: for nothing common or unclean hath at any time entered into my mouth.",
        },
        {
          verse: "9",
          text: "But the voice answered me again from heaven, What God hath cleansed, that call not thou common.",
        },
        {
          verse: "10",
          text: "And this was done three times: and all were drawn up again into heaven.",
        },
        {
          verse: "11",
          text: "And, behold, immediately there were three men already come unto the house where I was, sent from Caesarea unto me.",
        },
        {
          verse: "12",
          text: "And the Spirit bade me go with them, nothing doubting. Moreover these six brethren accompanied me, and we entered into the man\u2019s house:",
        },
        {
          verse: "13",
          text: "And he shewed us how he had seen an angel in his house, which stood and said unto him, Send men to Joppa, and call for Simon, whose surname is Peter;",
        },
        {
          verse: "14",
          text: "Who shall tell thee words, whereby thou and all thy house shall be saved.",
        },
        {
          verse: "15",
          text: "And as I began to speak, the Holy Ghost fell on them, as on us at the beginning.",
        },
        {
          verse: "16",
          text: "Then remembered I the word of the Lord, how that he said, John indeed baptized with water; but ye shall be baptized with the Holy Ghost.",
        },
        {
          verse: "17",
          text: "Forasmuch then as God gave them the like gift as he did unto us, who believed on the Lord Jesus Christ; what was I, that I could withstand God?",
        },
        {
          verse: "18",
          text: "When they heard these things, they held their peace, and glorified God, saying, Then hath God also to the Gentiles granted repentance unto life.",
        },
        {
          verse: "19",
          text: "Now they which were scattered abroad upon the persecution that arose about Stephen travelled as far as Phenice, and Cyprus, and Antioch, preaching the word to none but unto the Jews only.",
        },
        {
          verse: "20",
          text: "And some of them were men of Cyprus and Cyrene, which, when they were come to Antioch, spake unto the Grecians, preaching the LORD Jesus.",
        },
        {
          verse: "21",
          text: "And the hand of the Lord was with them: and a great number believed, and turned unto the Lord.",
        },
        {
          verse: "22",
          text: "Then tidings of these things came unto the ears of the church which was in Jerusalem: and they sent forth Barnabas, that he should go as far as Antioch.",
        },
        {
          verse: "23",
          text: "Who, when he came, and had seen the grace of God, was glad, and exhorted them all, that with purpose of heart they would cleave unto the Lord.",
        },
        {
          verse: "24",
          text: "For he was a good man, and full of the Holy Ghost and of faith: and much people was added unto the Lord.",
        },
        {
          verse: "25",
          text: "Then departed Barnabas to Tarsus, for to seek Saul:",
        },
        {
          verse: "26",
          text: "And when he had found him, he brought him unto Antioch. And it came to pass, that a whole year they assembled themselves with the church, and taught much people. And the disciples were called Christians first in Antioch.",
        },
        {
          verse: "27",
          text: "And in these days came prophets from Jerusalem unto Antioch.",
        },
        {
          verse: "28",
          text: "And there stood up one of them named Agabus, and signified by the Spirit that there should be great dearth throughout all the world: which came to pass in the days of Claudius Caesar.",
        },
        {
          verse: "29",
          text: "Then the disciples, every man according to his ability, determined to send relief unto the brethren which dwelt in Judaea:",
        },
        {
          verse: "30",
          text: "Which also they did, and sent it to the elders by the hands of Barnabas and Saul.",
        },
      ],
    },
    {
      chapter: "12",
      verses: [
        {
          verse: "1",
          text: "Now about that time Herod the king stretched forth his hands to vex certain of the church.",
        },
        {
          verse: "2",
          text: "And he killed James the brother of John with the sword.",
        },
        {
          verse: "3",
          text: "And because he saw it pleased the Jews, he proceeded further to take Peter also. (Then were the days of unleavened bread.)",
        },
        {
          verse: "4",
          text: "And when he had apprehended him, he put him in prison, and delivered him to four quaternions of soldiers to keep him; intending after Easter to bring him forth to the people.",
        },
        {
          verse: "5",
          text: "Peter therefore was kept in prison: but prayer was made without ceasing of the church unto God for him.",
        },
        {
          verse: "6",
          text: "And when Herod would have brought him forth, the same night Peter was sleeping between two soldiers, bound with two chains: and the keepers before the door kept the prison.",
        },
        {
          verse: "7",
          text: "And, behold, the angel of the Lord came upon him, and a light shined in the prison: and he smote Peter on the side, and raised him up, saying, Arise up quickly. And his chains fell off from his hands.",
        },
        {
          verse: "8",
          text: "And the angel said unto him, Gird thyself, and bind on thy sandals. And so he did. And he saith unto him, Cast thy garment about thee, and follow me.",
        },
        {
          verse: "9",
          text: "And he went out, and followed him; and wist not that it was true which was done by the angel; but thought he saw a vision.",
        },
        {
          verse: "10",
          text: "When they were past the first and the second ward, they came unto the iron gate that leadeth unto the city; which opened to them of his own accord: and they went out, and passed on through one street; and forthwith the angel departed from him.",
        },
        {
          verse: "11",
          text: "And when Peter was come to himself, he said, Now I know of a surety, that the LORD hath sent his angel, and hath delivered me out of the hand of Herod, and from all the expectation of the people of the Jews.",
        },
        {
          verse: "12",
          text: "And when he had considered the thing, he came to the house of Mary the mother of John, whose surname was Mark; where many were gathered together praying.",
        },
        {
          verse: "13",
          text: "And as Peter knocked at the door of the gate, a damsel came to hearken, named Rhoda.",
        },
        {
          verse: "14",
          text: "And when she knew Peter\u2019s voice, she opened not the gate for gladness, but ran in, and told how Peter stood before the gate.",
        },
        {
          verse: "15",
          text: "And they said unto her, Thou art mad. But she constantly affirmed that it was even so. Then said they, It is his angel.",
        },
        {
          verse: "16",
          text: "But Peter continued knocking: and when they had opened the door, and saw him, they were astonished.",
        },
        {
          verse: "17",
          text: "But he, beckoning unto them with the hand to hold their peace, declared unto them how the Lord had brought him out of the prison. And he said, Go shew these things unto James, and to the brethren. And he departed, and went into another place.",
        },
        {
          verse: "18",
          text: "Now as soon as it was day, there was no small stir among the soldiers, what was become of Peter.",
        },
        {
          verse: "19",
          text: "And when Herod had sought for him, and found him not, he examined the keepers, and commanded that they should be put to death. And he went down from Judaea to Caesarea, and there abode.",
        },
        {
          verse: "20",
          text: "And Herod was highly displeased with them of Tyre and Sidon: but they came with one accord to him, and, having made Blastus the king\u2019s chamberlain their friend, desired peace; because their country was nourished by the king\u2019s country.",
        },
        {
          verse: "21",
          text: "And upon a set day Herod, arrayed in royal apparel, sat upon his throne, and made an oration unto them.",
        },
        {
          verse: "22",
          text: "And the people gave a shout, saying, It is the voice of a god, and not of a man.",
        },
        {
          verse: "23",
          text: "And immediately the angel of the Lord smote him, because he gave not God the glory: and he was eaten of worms, and gave up the ghost.",
        },
        { verse: "24", text: "But the word of God grew and multiplied." },
        {
          verse: "25",
          text: "And Barnabas and Saul returned from Jerusalem, when they had fulfilled their ministry, and took with them John, whose surname was Mark.",
        },
      ],
    },
    {
      chapter: "13",
      verses: [
        {
          verse: "1",
          text: "Now there were in the church that was at Antioch certain prophets and teachers; as Barnabas, and Simeon that was called Niger, and Lucius of Cyrene, and Manaen, which had been brought up with Herod the tetrarch, and Saul.",
        },
        {
          verse: "2",
          text: "As they ministered to the Lord, and fasted, the Holy Ghost said, Separate me Barnabas and Saul for the work whereunto I have called them.",
        },
        {
          verse: "3",
          text: "And when they had fasted and prayed, and laid their hands on them, they sent them away.",
        },
        {
          verse: "4",
          text: "So they, being sent forth by the Holy Ghost, departed unto Seleucia; and from thence they sailed to Cyprus.",
        },
        {
          verse: "5",
          text: "And when they were at Salamis, they preached the word of God in the synagogues of the Jews: and they had also John to their minister.",
        },
        {
          verse: "6",
          text: "And when they had gone through the isle unto Paphos, they found a certain sorcerer, a false prophet, a Jew, whose name was Barjesus:",
        },
        {
          verse: "7",
          text: "Which was with the deputy of the country, Sergius Paulus, a prudent man; who called for Barnabas and Saul, and desired to hear the word of God.",
        },
        {
          verse: "8",
          text: "But Elymas the sorcerer (for so is his name by interpretation) withstood them, seeking to turn away the deputy from the faith.",
        },
        {
          verse: "9",
          text: "Then Saul, (who also is called Paul,) filled with the Holy Ghost, set his eyes on him,",
        },
        {
          verse: "10",
          text: "And said, O full of all subtilty and all mischief, thou child of the devil, thou enemy of all righteousness, wilt thou not cease to pervert the right ways of the Lord?",
        },
        {
          verse: "11",
          text: "And now, behold, the hand of the Lord is upon thee, and thou shalt be blind, not seeing the sun for a season. And immediately there fell on him a mist and a darkness; and he went about seeking some to lead him by the hand.",
        },
        {
          verse: "12",
          text: "Then the deputy, when he saw what was done, believed, being astonished at the doctrine of the Lord.",
        },
        {
          verse: "13",
          text: "Now when Paul and his company loosed from Paphos, they came to Perga in Pamphylia: and John departing from them returned to Jerusalem.",
        },
        {
          verse: "14",
          text: "But when they departed from Perga, they came to Antioch in Pisidia, and went into the synagogue on the sabbath day, and sat down.",
        },
        {
          verse: "15",
          text: "And after the reading of the law and the prophets the rulers of the synagogue sent unto them, saying, Ye men and brethren, if ye have any word of exhortation for the people, say on.",
        },
        {
          verse: "16",
          text: "Then Paul stood up, and beckoning with his hand said, Men of Israel, and ye that fear God, give audience.",
        },
        {
          verse: "17",
          text: "The God of this people of Israel chose our fathers, and exalted the people when they dwelt as strangers in the land of Egypt, and with an high arm brought he them out of it.",
        },
        {
          verse: "18",
          text: "And about the time of forty years suffered he their manners in the wilderness.",
        },
        {
          verse: "19",
          text: "And when he had destroyed seven nations in the land of Chanaan, he divided their land to them by lot.",
        },
        {
          verse: "20",
          text: "And after that he gave unto them judges about the space of four hundred and fifty years, until Samuel the prophet.",
        },
        {
          verse: "21",
          text: "And afterward they desired a king: and God gave unto them Saul the son of Cis, a man of the tribe of Benjamin, by the space of forty years.",
        },
        {
          verse: "22",
          text: "And when he had removed him, he raised up unto them David to be their king; to whom also he gave testimony, and said, I have found David the son of Jesse, a man after mine own heart, which shall fulfil all my will.",
        },
        {
          verse: "23",
          text: "Of this man\u2019s seed hath God according to his promise raised unto Israel a Saviour, Jesus:",
        },
        {
          verse: "24",
          text: "When John had first preached before his coming the baptism of repentance to all the people of Israel.",
        },
        {
          verse: "25",
          text: "And as John fulfilled his course, he said, Whom think ye that I am? I am not he. But, behold, there cometh one after me, whose shoes of his feet I am not worthy to loose.",
        },
        {
          verse: "26",
          text: "Men and brethren, children of the stock of Abraham, and whosoever among you feareth God, to you is the word of this salvation sent.",
        },
        {
          verse: "27",
          text: "For they that dwell at Jerusalem, and their rulers, because they knew him not, nor yet the voices of the prophets which are read every sabbath day, they have fulfilled them in condemning him.",
        },
        {
          verse: "28",
          text: "And though they found no cause of death in him, yet desired they Pilate that he should be slain.",
        },
        {
          verse: "29",
          text: "And when they had fulfilled all that was written of him, they took him down from the tree, and laid him in a sepulchre.",
        },
        { verse: "30", text: "But God raised him from the dead:" },
        {
          verse: "31",
          text: "And he was seen many days of them which came up with him from Galilee to Jerusalem, who are his witnesses unto the people.",
        },
        {
          verse: "32",
          text: "And we declare unto you glad tidings, how that the promise which was made unto the fathers,",
        },
        {
          verse: "33",
          text: "God hath fulfilled the same unto us their children, in that he hath raised up Jesus again; as it is also written in the second psalm, Thou art my Son, this day have I begotten thee.",
        },
        {
          verse: "34",
          text: "And as concerning that he raised him up from the dead, now no more to return to corruption, he said on this wise, I will give you the sure mercies of David.",
        },
        {
          verse: "35",
          text: "Wherefore he saith also in another psalm, Thou shalt not suffer thine Holy One to see corruption.",
        },
        {
          verse: "36",
          text: "For David, after he had served his own generation by the will of God, fell on sleep, and was laid unto his fathers, and saw corruption:",
        },
        {
          verse: "37",
          text: "But he, whom God raised again, saw no corruption.",
        },
        {
          verse: "38",
          text: "Be it known unto you therefore, men and brethren, that through this man is preached unto you the forgiveness of sins:",
        },
        {
          verse: "39",
          text: "And by him all that believe are justified from all things, from which ye could not be justified by the law of Moses.",
        },
        {
          verse: "40",
          text: "Beware therefore, lest that come upon you, which is spoken of in the prophets;",
        },
        {
          verse: "41",
          text: "Behold, ye despisers, and wonder, and perish: for I work a work in your days, a work which ye shall in no wise believe, though a man declare it unto you.",
        },
        {
          verse: "42",
          text: "And when the Jews were gone out of the synagogue, the Gentiles besought that these words might be preached to them the next sabbath.",
        },
        {
          verse: "43",
          text: "Now when the congregation was broken up, many of the Jews and religious proselytes followed Paul and Barnabas: who, speaking to them, persuaded them to continue in the grace of God.",
        },
        {
          verse: "44",
          text: "And the next sabbath day came almost the whole city together to hear the word of God.",
        },
        {
          verse: "45",
          text: "But when the Jews saw the multitudes, they were filled with envy, and spake against those things which were spoken by Paul, contradicting and blaspheming.",
        },
        {
          verse: "46",
          text: "Then Paul and Barnabas waxed bold, and said, It was necessary that the word of God should first have been spoken to you: but seeing ye put it from you, and judge yourselves unworthy of everlasting life, lo, we turn to the Gentiles.",
        },
        {
          verse: "47",
          text: "For so hath the Lord commanded us, saying, I have set thee to be a light of the Gentiles, that thou shouldest be for salvation unto the ends of the earth.",
        },
        {
          verse: "48",
          text: "And when the Gentiles heard this, they were glad, and glorified the word of the Lord: and as many as were ordained to eternal life believed.",
        },
        {
          verse: "49",
          text: "And the word of the Lord was published throughout all the region.",
        },
        {
          verse: "50",
          text: "But the Jews stirred up the devout and honourable women, and the chief men of the city, and raised persecution against Paul and Barnabas, and expelled them out of their coasts.",
        },
        {
          verse: "51",
          text: "But they shook off the dust of their feet against them, and came unto Iconium.",
        },
        {
          verse: "52",
          text: "And the disciples were filled with joy, and with the Holy Ghost.",
        },
      ],
    },
    {
      chapter: "14",
      verses: [
        {
          verse: "1",
          text: "And it came to pass in Iconium, that they went both together into the synagogue of the Jews, and so spake, that a great multitude both of the Jews and also of the Greeks believed.",
        },
        {
          verse: "2",
          text: "But the unbelieving Jews stirred up the Gentiles, and made their minds evil affected against the brethren.",
        },
        {
          verse: "3",
          text: "Long time therefore abode they speaking boldly in the Lord, which gave testimony unto the word of his grace, and granted signs and wonders to be done by their hands.",
        },
        {
          verse: "4",
          text: "But the multitude of the city was divided: and part held with the Jews, and part with the apostles.",
        },
        {
          verse: "5",
          text: "And when there was an assault made both of the Gentiles, and also of the Jews with their rulers, to use them despitefully, and to stone them,",
        },
        {
          verse: "6",
          text: "They were ware of it, and fled unto Lystra and Derbe, cities of Lycaonia, and unto the region that lieth round about:",
        },
        { verse: "7", text: "And there they preached the gospel." },
        {
          verse: "8",
          text: "And there sat a certain man at Lystra, impotent in his feet, being a cripple from his mother\u2019s womb, who never had walked:",
        },
        {
          verse: "9",
          text: "The same heard Paul speak: who stedfastly beholding him, and perceiving that he had faith to be healed,",
        },
        {
          verse: "10",
          text: "Said with a loud voice, Stand upright on thy feet. And he leaped and walked.",
        },
        {
          verse: "11",
          text: "And when the people saw what Paul had done, they lifted up their voices, saying in the speech of Lycaonia, The gods are come down to us in the likeness of men.",
        },
        {
          verse: "12",
          text: "And they called Barnabas, Jupiter; and Paul, Mercurius, because he was the chief speaker.",
        },
        {
          verse: "13",
          text: "Then the priest of Jupiter, which was before their city, brought oxen and garlands unto the gates, and would have done sacrifice with the people.",
        },
        {
          verse: "14",
          text: "Which when the apostles, Barnabas and Paul, heard of, they rent their clothes, and ran in among the people, crying out,",
        },
        {
          verse: "15",
          text: "And saying, Sirs, why do ye these things? We also are men of like passions with you, and preach unto you that ye should turn from these vanities unto the living God, which made heaven, and earth, and the sea, and all things that are therein:",
        },
        {
          verse: "16",
          text: "Who in times past suffered all nations to walk in their own ways.",
        },
        {
          verse: "17",
          text: "Nevertheless he left not himself without witness, in that he did good, and gave us rain from heaven, and fruitful seasons, filling our hearts with food and gladness.",
        },
        {
          verse: "18",
          text: "And with these sayings scarce restrained they the people, that they had not done sacrifice unto them.",
        },
        {
          verse: "19",
          text: "And there came thither certain Jews from Antioch and Iconium, who persuaded the people, and, having stoned Paul, drew him out of the city, supposing he had been dead.",
        },
        {
          verse: "20",
          text: "Howbeit, as the disciples stood round about him, he rose up, and came into the city: and the next day he departed with Barnabas to Derbe.",
        },
        {
          verse: "21",
          text: "And when they had preached the gospel to that city, and had taught many, they returned again to Lystra, and to Iconium, and Antioch,",
        },
        {
          verse: "22",
          text: "Confirming the souls of the disciples, and exhorting them to continue in the faith, and that we must through much tribulation enter into the kingdom of God.",
        },
        {
          verse: "23",
          text: "And when they had ordained them elders in every church, and had prayed with fasting, they commended them to the Lord, on whom they believed.",
        },
        {
          verse: "24",
          text: "And after they had passed throughout Pisidia, they came to Pamphylia.",
        },
        {
          verse: "25",
          text: "And when they had preached the word in Perga, they went down into Attalia:",
        },
        {
          verse: "26",
          text: "And thence sailed to Antioch, from whence they had been recommended to the grace of God for the work which they fulfilled.",
        },
        {
          verse: "27",
          text: "And when they were come, and had gathered the church together, they rehearsed all that God had done with them, and how he had opened the door of faith unto the Gentiles.",
        },
        {
          verse: "28",
          text: "And there they abode long time with the disciples.",
        },
      ],
    },
    {
      chapter: "15",
      verses: [
        {
          verse: "1",
          text: "And certain men which came down from Judaea taught the brethren, and said, Except ye be circumcised after the manner of Moses, ye cannot be saved.",
        },
        {
          verse: "2",
          text: "When therefore Paul and Barnabas had no small dissension and disputation with them, they determined that Paul and Barnabas, and certain other of them, should go up to Jerusalem unto the apostles and elders about this question.",
        },
        {
          verse: "3",
          text: "And being brought on their way by the church, they passed through Phenice and Samaria, declaring the conversion of the Gentiles: and they caused great joy unto all the brethren.",
        },
        {
          verse: "4",
          text: "And when they were come to Jerusalem, they were received of the church, and of the apostles and elders, and they declared all things that God had done with them.",
        },
        {
          verse: "5",
          text: "But there rose up certain of the sect of the Pharisees which believed, saying, That it was needful to circumcise them, and to command them to keep the law of Moses.",
        },
        {
          verse: "6",
          text: "And the apostles and elders came together for to consider of this matter.",
        },
        {
          verse: "7",
          text: "And when there had been much disputing, Peter rose up, and said unto them, Men and brethren, ye know how that a good while ago God made choice among us, that the Gentiles by my mouth should hear the word of the gospel, and believe.",
        },
        {
          verse: "8",
          text: "And God, which knoweth the hearts, bare them witness, giving them the Holy Ghost, even as he did unto us;",
        },
        {
          verse: "9",
          text: "And put no difference between us and them, purifying their hearts by faith.",
        },
        {
          verse: "10",
          text: "Now therefore why tempt ye God, to put a yoke upon the neck of the disciples, which neither our fathers nor we were able to bear?",
        },
        {
          verse: "11",
          text: "But we believe that through the grace of the LORD Jesus Christ we shall be saved, even as they.",
        },
        {
          verse: "12",
          text: "Then all the multitude kept silence, and gave audience to Barnabas and Paul, declaring what miracles and wonders God had wrought among the Gentiles by them.",
        },
        {
          verse: "13",
          text: "And after they had held their peace, James answered, saying, Men and brethren, hearken unto me:",
        },
        {
          verse: "14",
          text: "Simeon hath declared how God at the first did visit the Gentiles, to take out of them a people for his name.",
        },
        {
          verse: "15",
          text: "And to this agree the words of the prophets; as it is written,",
        },
        {
          verse: "16",
          text: "After this I will return, and will build again the tabernacle of David, which is fallen down; and I will build again the ruins thereof, and I will set it up:",
        },
        {
          verse: "17",
          text: "That the residue of men might seek after the Lord, and all the Gentiles, upon whom my name is called, saith the Lord, who doeth all these things.",
        },
        {
          verse: "18",
          text: "Known unto God are all his works from the beginning of the world.",
        },
        {
          verse: "19",
          text: "Wherefore my sentence is, that we trouble not them, which from among the Gentiles are turned to God:",
        },
        {
          verse: "20",
          text: "But that we write unto them, that they abstain from pollutions of idols, and from fornication, and from things strangled, and from blood.",
        },
        {
          verse: "21",
          text: "For Moses of old time hath in every city them that preach him, being read in the synagogues every sabbath day.",
        },
        {
          verse: "22",
          text: "Then pleased it the apostles and elders, with the whole church, to send chosen men of their own company to Antioch with Paul and Barnabas; namely, Judas surnamed Barsabas, and Silas, chief men among the brethren:",
        },
        {
          verse: "23",
          text: "And they wrote letters by them after this manner; The apostles and elders and brethren send greeting unto the brethren which are of the Gentiles in Antioch and Syria and Cilicia:",
        },
        {
          verse: "24",
          text: "Forasmuch as we have heard, that certain which went out from us have troubled you with words, subverting your souls, saying, Ye must be circumcised, and keep the law: to whom we gave no such commandment:",
        },
        {
          verse: "25",
          text: "It seemed good unto us, being assembled with one accord, to send chosen men unto you with our beloved Barnabas and Paul,",
        },
        {
          verse: "26",
          text: "Men that have hazarded their lives for the name of our Lord Jesus Christ.",
        },
        {
          verse: "27",
          text: "We have sent therefore Judas and Silas, who shall also tell you the same things by mouth.",
        },
        {
          verse: "28",
          text: "For it seemed good to the Holy Ghost, and to us, to lay upon you no greater burden than these necessary things;",
        },
        {
          verse: "29",
          text: "That ye abstain from meats offered to idols, and from blood, and from things strangled, and from fornication: from which if ye keep yourselves, ye shall do well. Fare ye well.",
        },
        {
          verse: "30",
          text: "So when they were dismissed, they came to Antioch: and when they had gathered the multitude together, they delivered the epistle:",
        },
        {
          verse: "31",
          text: "Which when they had read, they rejoiced for the consolation.",
        },
        {
          verse: "32",
          text: "And Judas and Silas, being prophets also themselves, exhorted the brethren with many words, and confirmed them.",
        },
        {
          verse: "33",
          text: "And after they had tarried there a space, they were let go in peace from the brethren unto the apostles.",
        },
        {
          verse: "34",
          text: "Notwithstanding it pleased Silas to abide there still.",
        },
        {
          verse: "35",
          text: "Paul also and Barnabas continued in Antioch, teaching and preaching the word of the Lord, with many others also.",
        },
        {
          verse: "36",
          text: "And some days after Paul said unto Barnabas, Let us go again and visit our brethren in every city where we have preached the word of the LORD, and see how they do.",
        },
        {
          verse: "37",
          text: "And Barnabas determined to take with them John, whose surname was Mark.",
        },
        {
          verse: "38",
          text: "But Paul thought not good to take him with them, who departed from them from Pamphylia, and went not with them to the work.",
        },
        {
          verse: "39",
          text: "And the contention was so sharp between them, that they departed asunder one from the other: and so Barnabas took Mark, and sailed unto Cyprus;",
        },
        {
          verse: "40",
          text: "And Paul chose Silas, and departed, being recommended by the brethren unto the grace of God.",
        },
        {
          verse: "41",
          text: "And he went through Syria and Cilicia, confirming the churches.",
        },
      ],
    },
    {
      chapter: "16",
      verses: [
        {
          verse: "1",
          text: "Then came he to Derbe and Lystra: and, behold, a certain disciple was there, named Timotheus, the son of a certain woman, which was a Jewess, and believed; but his father was a Greek:",
        },
        {
          verse: "2",
          text: "Which was well reported of by the brethren that were at Lystra and Iconium.",
        },
        {
          verse: "3",
          text: "Him would Paul have to go forth with him; and took and circumcised him because of the Jews which were in those quarters: for they knew all that his father was a Greek.",
        },
        {
          verse: "4",
          text: "And as they went through the cities, they delivered them the decrees for to keep, that were ordained of the apostles and elders which were at Jerusalem.",
        },
        {
          verse: "5",
          text: "And so were the churches established in the faith, and increased in number daily.",
        },
        {
          verse: "6",
          text: "Now when they had gone throughout Phrygia and the region of Galatia, and were forbidden of the Holy Ghost to preach the word in Asia,",
        },
        {
          verse: "7",
          text: "After they were come to Mysia, they assayed to go into Bithynia: but the Spirit suffered them not.",
        },
        { verse: "8", text: "And they passing by Mysia came down to Troas." },
        {
          verse: "9",
          text: "And a vision appeared to Paul in the night; There stood a man of Macedonia, and prayed him, saying, Come over into Macedonia, and help us.",
        },
        {
          verse: "10",
          text: "And after he had seen the vision, immediately we endeavoured to go into Macedonia, assuredly gathering that the Lord had called us for to preach the gospel unto them.",
        },
        {
          verse: "11",
          text: "Therefore loosing from Troas, we came with a straight course to Samothracia, and the next day to Neapolis;",
        },
        {
          verse: "12",
          text: "And from thence to Philippi, which is the chief city of that part of Macedonia, and a colony: and we were in that city abiding certain days.",
        },
        {
          verse: "13",
          text: "And on the sabbath we went out of the city by a river side, where prayer was wont to be made; and we sat down, and spake unto the women which resorted thither.",
        },
        {
          verse: "14",
          text: "And a certain woman named Lydia, a seller of purple, of the city of Thyatira, which worshipped God, heard us: whose heart the Lord opened, that she attended unto the things which were spoken of Paul.",
        },
        {
          verse: "15",
          text: "And when she was baptized, and her household, she besought us, saying, If ye have judged me to be faithful to the Lord, come into my house, and abide there. And she constrained us.",
        },
        {
          verse: "16",
          text: "And it came to pass, as we went to prayer, a certain damsel possessed with a spirit of divination met us, which brought her masters much gain by soothsaying:",
        },
        {
          verse: "17",
          text: "The same followed Paul and us, and cried, saying, These men are the servants of the most high God, which shew unto us the way of salvation.",
        },
        {
          verse: "18",
          text: "And this did she many days. But Paul, being grieved, turned and said to the spirit, I command thee in the name of Jesus Christ to come out of her. And he came out the same hour.",
        },
        {
          verse: "19",
          text: "And when her masters saw that the hope of their gains was gone, they caught Paul and Silas, and drew them into the marketplace unto the rulers,",
        },
        {
          verse: "20",
          text: "And brought them to the magistrates, saying, These men, being Jews, do exceedingly trouble our city,",
        },
        {
          verse: "21",
          text: "And teach customs, which are not lawful for us to receive, neither to observe, being Romans.",
        },
        {
          verse: "22",
          text: "And the multitude rose up together against them: and the magistrates rent off their clothes, and commanded to beat them.",
        },
        {
          verse: "23",
          text: "And when they had laid many stripes upon them, they cast them into prison, charging the jailor to keep them safely:",
        },
        {
          verse: "24",
          text: "Who, having received such a charge, thrust them into the inner prison, and made their feet fast in the stocks.",
        },
        {
          verse: "25",
          text: "And at midnight Paul and Silas prayed, and sang praises unto God: and the prisoners heard them.",
        },
        {
          verse: "26",
          text: "And suddenly there was a great earthquake, so that the foundations of the prison were shaken: and immediately all the doors were opened, and every one\u2019s bands were loosed.",
        },
        {
          verse: "27",
          text: "And the keeper of the prison awaking out of his sleep, and seeing the prison doors open, he drew out his sword, and would have killed himself, supposing that the prisoners had been fled.",
        },
        {
          verse: "28",
          text: "But Paul cried with a loud voice, saying, Do thyself no harm: for we are all here.",
        },
        {
          verse: "29",
          text: "Then he called for a light, and sprang in, and came trembling, and fell down before Paul and Silas,",
        },
        {
          verse: "30",
          text: "And brought them out, and said, Sirs, what must I do to be saved?",
        },
        {
          verse: "31",
          text: "And they said, Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house.",
        },
        {
          verse: "32",
          text: "And they spake unto him the word of the Lord, and to all that were in his house.",
        },
        {
          verse: "33",
          text: "And he took them the same hour of the night, and washed their stripes; and was baptized, he and all his, straightway.",
        },
        {
          verse: "34",
          text: "And when he had brought them into his house, he set meat before them, and rejoiced, believing in God with all his house.",
        },
        {
          verse: "35",
          text: "And when it was day, the magistrates sent the serjeants, saying, Let those men go.",
        },
        {
          verse: "36",
          text: "And the keeper of the prison told this saying to Paul, The magistrates have sent to let you go: now therefore depart, and go in peace.",
        },
        {
          verse: "37",
          text: "But Paul said unto them, They have beaten us openly uncondemned, being Romans, and have cast us into prison; and now do they thrust us out privily? nay verily; but let them come themselves and fetch us out.",
        },
        {
          verse: "38",
          text: "And the serjeants told these words unto the magistrates: and they feared, when they heard that they were Romans.",
        },
        {
          verse: "39",
          text: "And they came and besought them, and brought them out, and desired them to depart out of the city.",
        },
        {
          verse: "40",
          text: "And they went out of the prison, and entered into the house of Lydia: and when they had seen the brethren, they comforted them, and departed.",
        },
      ],
    },
    {
      chapter: "17",
      verses: [
        {
          verse: "1",
          text: "Now when they had passed through Amphipolis and Apollonia, they came to Thessalonica, where was a synagogue of the Jews:",
        },
        {
          verse: "2",
          text: "And Paul, as his manner was, went in unto them, and three sabbath days reasoned with them out of the scriptures,",
        },
        {
          verse: "3",
          text: "Opening and alleging, that Christ must needs have suffered, and risen again from the dead; and that this Jesus, whom I preach unto you, is Christ.",
        },
        {
          verse: "4",
          text: "And some of them believed, and consorted with Paul and Silas; and of the devout Greeks a great multitude, and of the chief women not a few.",
        },
        {
          verse: "5",
          text: "But the Jews which believed not, moved with envy, took unto them certain lewd fellows of the baser sort, and gathered a company, and set all the city on an uproar, and assaulted the house of Jason, and sought to bring them out to the people.",
        },
        {
          verse: "6",
          text: "And when they found them not, they drew Jason and certain brethren unto the rulers of the city, crying, These that have turned the world upside down are come hither also;",
        },
        {
          verse: "7",
          text: "Whom Jason hath received: and these all do contrary to the decrees of Caesar, saying that there is another king, one Jesus.",
        },
        {
          verse: "8",
          text: "And they troubled the people and the rulers of the city, when they heard these things.",
        },
        {
          verse: "9",
          text: "And when they had taken security of Jason, and of the other, they let them go.",
        },
        {
          verse: "10",
          text: "And the brethren immediately sent away Paul and Silas by night unto Berea: who coming thither went into the synagogue of the Jews.",
        },
        {
          verse: "11",
          text: "These were more noble than those in Thessalonica, in that they received the word with all readiness of mind, and searched the scriptures daily, whether those things were so.",
        },
        {
          verse: "12",
          text: "Therefore many of them believed; also of honourable women which were Greeks, and of men, not a few.",
        },
        {
          verse: "13",
          text: "But when the Jews of Thessalonica had knowledge that the word of God was preached of Paul at Berea, they came thither also, and stirred up the people.",
        },
        {
          verse: "14",
          text: "And then immediately the brethren sent away Paul to go as it were to the sea: but Silas and Timotheus abode there still.",
        },
        {
          verse: "15",
          text: "And they that conducted Paul brought him unto Athens: and receiving a commandment unto Silas and Timotheus for to come to him with all speed, they departed.",
        },
        {
          verse: "16",
          text: "Now while Paul waited for them at Athens, his spirit was stirred in him, when he saw the city wholly given to idolatry.",
        },
        {
          verse: "17",
          text: "Therefore disputed he in the synagogue with the Jews, and with the devout persons, and in the market daily with them that met with him.",
        },
        {
          verse: "18",
          text: "Then certain philosophers of the Epicureans, and of the Stoicks, encountered him. And some said, What will this babbler say? other some, He seemeth to be a setter forth of strange gods: because he preached unto them Jesus, and the resurrection.",
        },
        {
          verse: "19",
          text: "And they took him, and brought him unto Areopagus, saying, May we know what this new doctrine, whereof thou speakest, is?",
        },
        {
          verse: "20",
          text: "For thou bringest certain strange things to our ears: we would know therefore what these things mean.",
        },
        {
          verse: "21",
          text: "(For all the Athenians and strangers which were there spent their time in nothing else, but either to tell, or to hear some new thing.)",
        },
        {
          verse: "22",
          text: "Then Paul stood in the midst of Mars\u2019 hill, and said, Ye men of Athens, I perceive that in all things ye are too superstitious.",
        },
        {
          verse: "23",
          text: "For as I passed by, and beheld your devotions, I found an altar with this inscription, TO THE UNKNOWN GOD. Whom therefore ye ignorantly worship, him declare I unto you.",
        },
        {
          verse: "24",
          text: "God that made the world and all things therein, seeing that he is Lord of heaven and earth, dwelleth not in temples made with hands;",
        },
        {
          verse: "25",
          text: "Neither is worshipped with men\u2019s hands, as though he needed any thing, seeing he giveth to all life, and breath, and all things;",
        },
        {
          verse: "26",
          text: "And hath made of one blood all nations of men for to dwell on all the face of the earth, and hath determined the times before appointed, and the bounds of their habitation;",
        },
        {
          verse: "27",
          text: "That they should seek the Lord, if haply they might feel after him, and find him, though he be not far from every one of us:",
        },
        {
          verse: "28",
          text: "For in him we live, and move, and have our being; as certain also of your own poets have said, For we are also his offspring.",
        },
        {
          verse: "29",
          text: "Forasmuch then as we are the offspring of God, we ought not to think that the Godhead is like unto gold, or silver, or stone, graven by art and man\u2019s device.",
        },
        {
          verse: "30",
          text: "And the times of this ignorance God winked at; but now commandeth all men every where to repent:",
        },
        {
          verse: "31",
          text: "Because he hath appointed a day, in the which he will judge the world in righteousness by that man whom he hath ordained; whereof he hath given assurance unto all men, in that he hath raised him from the dead.",
        },
        {
          verse: "32",
          text: "And when they heard of the resurrection of the dead, some mocked: and others said, We will hear thee again of this matter.",
        },
        { verse: "33", text: "So Paul departed from among them." },
        {
          verse: "34",
          text: "Howbeit certain men clave unto him, and believed: among the which was Dionysius the Areopagite, and a woman named Damaris, and others with them.",
        },
      ],
    },
    {
      chapter: "18",
      verses: [
        {
          verse: "1",
          text: "After these things Paul departed from Athens, and came to Corinth;",
        },
        {
          verse: "2",
          text: "And found a certain Jew named Aquila, born in Pontus, lately come from Italy, with his wife Priscilla; (because that Claudius had commanded all Jews to depart from Rome:) and came unto them.",
        },
        {
          verse: "3",
          text: "And because he was of the same craft, he abode with them, and wrought: for by their occupation they were tentmakers.",
        },
        {
          verse: "4",
          text: "And he reasoned in the synagogue every sabbath, and persuaded the Jews and the Greeks.",
        },
        {
          verse: "5",
          text: "And when Silas and Timotheus were come from Macedonia, Paul was pressed in the spirit, and testified to the Jews that Jesus was Christ.",
        },
        {
          verse: "6",
          text: "And when they opposed themselves, and blasphemed, he shook his raiment, and said unto them, Your blood be upon your own heads; I am clean: from henceforth I will go unto the Gentiles.",
        },
        {
          verse: "7",
          text: "And he departed thence, and entered into a certain man\u2019s house, named Justus, one that worshipped God, whose house joined hard to the synagogue.",
        },
        {
          verse: "8",
          text: "And Crispus, the chief ruler of the synagogue, believed on the Lord with all his house; and many of the Corinthians hearing believed, and were baptized.",
        },
        {
          verse: "9",
          text: "Then spake the Lord to Paul in the night by a vision, Be not afraid, but speak, and hold not thy peace:",
        },
        {
          verse: "10",
          text: "For I am with thee, and no man shall set on thee to hurt thee: for I have much people in this city.",
        },
        {
          verse: "11",
          text: "And he continued there a year and six months, teaching the word of God among them.",
        },
        {
          verse: "12",
          text: "And when Gallio was the deputy of Achaia, the Jews made insurrection with one accord against Paul, and brought him to the judgment seat,",
        },
        {
          verse: "13",
          text: "Saying, This fellow persuadeth men to worship God contrary to the law.",
        },
        {
          verse: "14",
          text: "And when Paul was now about to open his mouth, Gallio said unto the Jews, If it were a matter of wrong or wicked lewdness, O ye Jews, reason would that I should bear with you:",
        },
        {
          verse: "15",
          text: "But if it be a question of words and names, and of your law, look ye to it; for I will be no judge of such matters.",
        },
        { verse: "16", text: "And he drave them from the judgment seat." },
        {
          verse: "17",
          text: "Then all the Greeks took Sosthenes, the chief ruler of the synagogue, and beat him before the judgment seat. And Gallio cared for none of those things.",
        },
        {
          verse: "18",
          text: "And Paul after this tarried there yet a good while, and then took his leave of the brethren, and sailed thence into Syria, and with him Priscilla and Aquila; having shorn his head in Cenchrea: for he had a vow.",
        },
        {
          verse: "19",
          text: "And he came to Ephesus, and left them there: but he himself entered into the synagogue, and reasoned with the Jews.",
        },
        {
          verse: "20",
          text: "When they desired him to tarry longer time with them, he consented not;",
        },
        {
          verse: "21",
          text: "But bade them farewell, saying, I must by all means keep this feast that cometh in Jerusalem: but I will return again unto you, if God will. And he sailed from Ephesus.",
        },
        {
          verse: "22",
          text: "And when he had landed at Caesarea, and gone up, and saluted the church, he went down to Antioch.",
        },
        {
          verse: "23",
          text: "And after he had spent some time there, he departed, and went over all the country of Galatia and Phrygia in order, strengthening all the disciples.",
        },
        {
          verse: "24",
          text: "And a certain Jew named Apollos, born at Alexandria, an eloquent man, and mighty in the scriptures, came to Ephesus.",
        },
        {
          verse: "25",
          text: "This man was instructed in the way of the Lord; and being fervent in the spirit, he spake and taught diligently the things of the Lord, knowing only the baptism of John.",
        },
        {
          verse: "26",
          text: "And he began to speak boldly in the synagogue: whom when Aquila and Priscilla had heard, they took him unto them, and expounded unto him the way of God more perfectly.",
        },
        {
          verse: "27",
          text: "And when he was disposed to pass into Achaia, the brethren wrote, exhorting the disciples to receive him: who, when he was come, helped them much which had believed through grace:",
        },
        {
          verse: "28",
          text: "For he mightily convinced the Jews, and that publickly, shewing by the scriptures that Jesus was Christ.",
        },
      ],
    },
    {
      chapter: "19",
      verses: [
        {
          verse: "1",
          text: "And it came to pass, that, while Apollos was at Corinth, Paul having passed through the upper coasts came to Ephesus: and finding certain disciples,",
        },
        {
          verse: "2",
          text: "He said unto them, Have ye received the Holy Ghost since ye believed? And they said unto him, We have not so much as heard whether there be any Holy Ghost.",
        },
        {
          verse: "3",
          text: "And he said unto them, Unto what then were ye baptized? And they said, Unto John\u2019s baptism.",
        },
        {
          verse: "4",
          text: "Then said Paul, John verily baptized with the baptism of repentance, saying unto the people, that they should believe on him which should come after him, that is, on Christ Jesus.",
        },
        {
          verse: "5",
          text: "When they heard this, they were baptized in the name of the Lord Jesus.",
        },
        {
          verse: "6",
          text: "And when Paul had laid his hands upon them, the Holy Ghost came on them; and they spake with tongues, and prophesied.",
        },
        { verse: "7", text: "And all the men were about twelve." },
        {
          verse: "8",
          text: "And he went into the synagogue, and spake boldly for the space of three months, disputing and persuading the things concerning the kingdom of God.",
        },
        {
          verse: "9",
          text: "But when divers were hardened, and believed not, but spake evil of that way before the multitude, he departed from them, and separated the disciples, disputing daily in the school of one Tyrannus.",
        },
        {
          verse: "10",
          text: "And this continued by the space of two years; so that all they which dwelt in Asia heard the word of the Lord Jesus, both Jews and Greeks.",
        },
        {
          verse: "11",
          text: "And God wrought special miracles by the hands of Paul:",
        },
        {
          verse: "12",
          text: "So that from his body were brought unto the sick handkerchiefs or aprons, and the diseases departed from them, and the evil spirits went out of them.",
        },
        {
          verse: "13",
          text: "Then certain of the vagabond Jews, exorcists, took upon them to call over them which had evil spirits the name of the LORD Jesus, saying, We adjure you by Jesus whom Paul preacheth.",
        },
        {
          verse: "14",
          text: "And there were seven sons of one Sceva, a Jew, and chief of the priests, which did so.",
        },
        {
          verse: "15",
          text: "And the evil spirit answered and said, Jesus I know, and Paul I know; but who are ye?",
        },
        {
          verse: "16",
          text: "And the man in whom the evil spirit was leaped on them, and overcame them, and prevailed against them, so that they fled out of that house naked and wounded.",
        },
        {
          verse: "17",
          text: "And this was known to all the Jews and Greeks also dwelling at Ephesus; and fear fell on them all, and the name of the Lord Jesus was magnified.",
        },
        {
          verse: "18",
          text: "And many that believed came, and confessed, and shewed their deeds.",
        },
        {
          verse: "19",
          text: "Many of them also which used curious arts brought their books together, and burned them before all men: and they counted the price of them, and found it fifty thousand pieces of silver.",
        },
        {
          verse: "20",
          text: "So mightily grew the word of God and prevailed.",
        },
        {
          verse: "21",
          text: "After these things were ended, Paul purposed in the spirit, when he had passed through Macedonia and Achaia, to go to Jerusalem, saying, After I have been there, I must also see Rome.",
        },
        {
          verse: "22",
          text: "So he sent into Macedonia two of them that ministered unto him, Timotheus and Erastus; but he himself stayed in Asia for a season.",
        },
        {
          verse: "23",
          text: "And the same time there arose no small stir about that way.",
        },
        {
          verse: "24",
          text: "For a certain man named Demetrius, a silversmith, which made silver shrines for Diana, brought no small gain unto the craftsmen;",
        },
        {
          verse: "25",
          text: "Whom he called together with the workmen of like occupation, and said, Sirs, ye know that by this craft we have our wealth.",
        },
        {
          verse: "26",
          text: "Moreover ye see and hear, that not alone at Ephesus, but almost throughout all Asia, this Paul hath persuaded and turned away much people, saying that they be no gods, which are made with hands:",
        },
        {
          verse: "27",
          text: "So that not only this our craft is in danger to be set at nought; but also that the temple of the great goddess Diana should be despised, and her magnificence should be destroyed, whom all Asia and the world worshippeth.",
        },
        {
          verse: "28",
          text: "And when they heard these sayings, they were full of wrath, and cried out, saying, Great is Diana of the Ephesians.",
        },
        {
          verse: "29",
          text: "And the whole city was filled with confusion: and having caught Gaius and Aristarchus, men of Macedonia, Paul\u2019s companions in travel, they rushed with one accord into the theatre.",
        },
        {
          verse: "30",
          text: "And when Paul would have entered in unto the people, the disciples suffered him not.",
        },
        {
          verse: "31",
          text: "And certain of the chief of Asia, which were his friends, sent unto him, desiring him that he would not adventure himself into the theatre.",
        },
        {
          verse: "32",
          text: "Some therefore cried one thing, and some another: for the assembly was confused; and the more part knew not wherefore they were come together.",
        },
        {
          verse: "33",
          text: "And they drew Alexander out of the multitude, the Jews putting him forward. And Alexander beckoned with the hand, and would have made his defence unto the people.",
        },
        {
          verse: "34",
          text: "But when they knew that he was a Jew, all with one voice about the space of two hours cried out, Great is Diana of the Ephesians.",
        },
        {
          verse: "35",
          text: "And when the townclerk had appeased the people, he said, Ye men of Ephesus, what man is there that knoweth not how that the city of the Ephesians is a worshipper of the great goddess Diana, and of the image which fell down from Jupiter?",
        },
        {
          verse: "36",
          text: "Seeing then that these things cannot be spoken against, ye ought to be quiet, and to do nothing rashly.",
        },
        {
          verse: "37",
          text: "For ye have brought hither these men, which are neither robbers of churches, nor yet blasphemers of your goddess.",
        },
        {
          verse: "38",
          text: "Wherefore if Demetrius, and the craftsmen which are with him, have a matter against any man, the law is open, and there are deputies: let them implead one another.",
        },
        {
          verse: "39",
          text: "But if ye enquire any thing concerning other matters, it shall be determined in a lawful assembly.",
        },
        {
          verse: "40",
          text: "For we are in danger to be called in question for this day\u2019s uproar, there being no cause whereby we may give an account of this concourse.",
        },
        {
          verse: "41",
          text: "And when he had thus spoken, he dismissed the assembly.",
        },
      ],
    },
    {
      chapter: "20",
      verses: [
        {
          verse: "1",
          text: "And after the uproar was ceased, Paul called unto him the disciples, and embraced them, and departed for to go into Macedonia.",
        },
        {
          verse: "2",
          text: "And when he had gone over those parts, and had given them much exhortation, he came into Greece,",
        },
        {
          verse: "3",
          text: "And there abode three months. And when the Jews laid wait for him, as he was about to sail into Syria, he purposed to return through Macedonia.",
        },
        {
          verse: "4",
          text: "And there accompanied him into Asia Sopater of Berea; and of the Thessalonians, Aristarchus and Secundus; and Gaius of Derbe, and Timotheus; and of Asia, Tychicus and Trophimus.",
        },
        { verse: "5", text: "These going before tarried for us at Troas." },
        {
          verse: "6",
          text: "And we sailed away from Philippi after the days of unleavened bread, and came unto them to Troas in five days; where we abode seven days.",
        },
        {
          verse: "7",
          text: "And upon the first day of the week, when the disciples came together to break bread, Paul preached unto them, ready to depart on the morrow; and continued his speech until midnight.",
        },
        {
          verse: "8",
          text: "And there were many lights in the upper chamber, where they were gathered together.",
        },
        {
          verse: "9",
          text: "And there sat in a window a certain young man named Eutychus, being fallen into a deep sleep: and as Paul was long preaching, he sunk down with sleep, and fell down from the third loft, and was taken up dead.",
        },
        {
          verse: "10",
          text: "And Paul went down, and fell on him, and embracing him said, Trouble not yourselves; for his life is in him.",
        },
        {
          verse: "11",
          text: "When he therefore was come up again, and had broken bread, and eaten, and talked a long while, even till break of day, so he departed.",
        },
        {
          verse: "12",
          text: "And they brought the young man alive, and were not a little comforted.",
        },
        {
          verse: "13",
          text: "And we went before to ship, and sailed unto Assos, there intending to take in Paul: for so had he appointed, minding himself to go afoot.",
        },
        {
          verse: "14",
          text: "And when he met with us at Assos, we took him in, and came to Mitylene.",
        },
        {
          verse: "15",
          text: "And we sailed thence, and came the next day over against Chios; and the next day we arrived at Samos, and tarried at Trogyllium; and the next day we came to Miletus.",
        },
        {
          verse: "16",
          text: "For Paul had determined to sail by Ephesus, because he would not spend the time in Asia: for he hasted, if it were possible for him, to be at Jerusalem the day of Pentecost.",
        },
        {
          verse: "17",
          text: "And from Miletus he sent to Ephesus, and called the elders of the church.",
        },
        {
          verse: "18",
          text: "And when they were come to him, he said unto them, Ye know, from the first day that I came into Asia, after what manner I have been with you at all seasons,",
        },
        {
          verse: "19",
          text: "Serving the LORD with all humility of mind, and with many tears, and temptations, which befell me by the lying in wait of the Jews:",
        },
        {
          verse: "20",
          text: "And how I kept back nothing that was profitable unto you, but have shewed you, and have taught you publickly, and from house to house,",
        },
        {
          verse: "21",
          text: "Testifying both to the Jews, and also to the Greeks, repentance toward God, and faith toward our Lord Jesus Christ.",
        },
        {
          verse: "22",
          text: "And now, behold, I go bound in the spirit unto Jerusalem, not knowing the things that shall befall me there:",
        },
        {
          verse: "23",
          text: "Save that the Holy Ghost witnesseth in every city, saying that bonds and afflictions abide me.",
        },
        {
          verse: "24",
          text: "But none of these things move me, neither count I my life dear unto myself, so that I might finish my course with joy, and the ministry, which I have received of the Lord Jesus, to testify the gospel of the grace of God.",
        },
        {
          verse: "25",
          text: "And now, behold, I know that ye all, among whom I have gone preaching the kingdom of God, shall see my face no more.",
        },
        {
          verse: "26",
          text: "Wherefore I take you to record this day, that I am pure from the blood of all men.",
        },
        {
          verse: "27",
          text: "For I have not shunned to declare unto you all the counsel of God.",
        },
        {
          verse: "28",
          text: "Take heed therefore unto yourselves, and to all the flock, over the which the Holy Ghost hath made you overseers, to feed the church of God, which he hath purchased with his own blood.",
        },
        {
          verse: "29",
          text: "For I know this, that after my departing shall grievous wolves enter in among you, not sparing the flock.",
        },
        {
          verse: "30",
          text: "Also of your own selves shall men arise, speaking perverse things, to draw away disciples after them.",
        },
        {
          verse: "31",
          text: "Therefore watch, and remember, that by the space of three years I ceased not to warn every one night and day with tears.",
        },
        {
          verse: "32",
          text: "And now, brethren, I commend you to God, and to the word of his grace, which is able to build you up, and to give you an inheritance among all them which are sanctified.",
        },
        {
          verse: "33",
          text: "I have coveted no man\u2019s silver, or gold, or apparel.",
        },
        {
          verse: "34",
          text: "Yea, ye yourselves know, that these hands have ministered unto my necessities, and to them that were with me.",
        },
        {
          verse: "35",
          text: "I have shewed you all things, how that so labouring ye ought to support the weak, and to remember the words of the Lord Jesus, how he said, It is more blessed to give than to receive.",
        },
        {
          verse: "36",
          text: "And when he had thus spoken, he kneeled down, and prayed with them all.",
        },
        {
          verse: "37",
          text: "And they all wept sore, and fell on Paul\u2019s neck, and kissed him,",
        },
        {
          verse: "38",
          text: "Sorrowing most of all for the words which he spake, that they should see his face no more. And they accompanied him unto the ship.",
        },
      ],
    },
    {
      chapter: "21",
      verses: [
        {
          verse: "1",
          text: "And it came to pass, that after we were gotten from them, and had launched, we came with a straight course unto Coos, and the day following unto Rhodes, and from thence unto Patara:",
        },
        {
          verse: "2",
          text: "And finding a ship sailing over unto Phenicia, we went aboard, and set forth.",
        },
        {
          verse: "3",
          text: "Now when we had discovered Cyprus, we left it on the left hand, and sailed into Syria, and landed at Tyre: for there the ship was to unlade her burden.",
        },
        {
          verse: "4",
          text: "And finding disciples, we tarried there seven days: who said to Paul through the Spirit, that he should not go up to Jerusalem.",
        },
        {
          verse: "5",
          text: "And when we had accomplished those days, we departed and went our way; and they all brought us on our way, with wives and children, till we were out of the city: and we kneeled down on the shore, and prayed.",
        },
        {
          verse: "6",
          text: "And when we had taken our leave one of another, we took ship; and they returned home again.",
        },
        {
          verse: "7",
          text: "And when we had finished our course from Tyre, we came to Ptolemais, and saluted the brethren, and abode with them one day.",
        },
        {
          verse: "8",
          text: "And the next day we that were of Paul\u2019s company departed, and came unto Caesarea: and we entered into the house of Philip the evangelist, which was one of the seven; and abode with him.",
        },
        {
          verse: "9",
          text: "And the same man had four daughters, virgins, which did prophesy.",
        },
        {
          verse: "10",
          text: "And as we tarried there many days, there came down from Judaea a certain prophet, named Agabus.",
        },
        {
          verse: "11",
          text: "And when he was come unto us, he took Paul\u2019s girdle, and bound his own hands and feet, and said, Thus saith the Holy Ghost, So shall the Jews at Jerusalem bind the man that owneth this girdle, and shall deliver him into the hands of the Gentiles.",
        },
        {
          verse: "12",
          text: "And when we heard these things, both we, and they of that place, besought him not to go up to Jerusalem.",
        },
        {
          verse: "13",
          text: "Then Paul answered, What mean ye to weep and to break mine heart? for I am ready not to be bound only, but also to die at Jerusalem for the name of the Lord Jesus.",
        },
        {
          verse: "14",
          text: "And when he would not be persuaded, we ceased, saying, The will of the Lord be done.",
        },
        {
          verse: "15",
          text: "And after those days we took up our carriages, and went up to Jerusalem.",
        },
        {
          verse: "16",
          text: "There went with us also certain of the disciples of Caesarea, and brought with them one Mnason of Cyprus, an old disciple, with whom we should lodge.",
        },
        {
          verse: "17",
          text: "And when we were come to Jerusalem, the brethren received us gladly.",
        },
        {
          verse: "18",
          text: "And the day following Paul went in with us unto James; and all the elders were present.",
        },
        {
          verse: "19",
          text: "And when he had saluted them, he declared particularly what things God had wrought among the Gentiles by his ministry.",
        },
        {
          verse: "20",
          text: "And when they heard it, they glorified the Lord, and said unto him, Thou seest, brother, how many thousands of Jews there are which believe; and they are all zealous of the law:",
        },
        {
          verse: "21",
          text: "And they are informed of thee, that thou teachest all the Jews which are among the Gentiles to forsake Moses, saying that they ought not to circumcise their children, neither to walk after the customs.",
        },
        {
          verse: "22",
          text: "What is it therefore? the multitude must needs come together: for they will hear that thou art come.",
        },
        {
          verse: "23",
          text: "Do therefore this that we say to thee: We have four men which have a vow on them;",
        },
        {
          verse: "24",
          text: "Them take, and purify thyself with them, and be at charges with them, that they may shave their heads: and all may know that those things, whereof they were informed concerning thee, are nothing; but that thou thyself also walkest orderly, and keepest the law.",
        },
        {
          verse: "25",
          text: "As touching the Gentiles which believe, we have written and concluded that they observe no such thing, save only that they keep themselves from things offered to idols, and from blood, and from strangled, and from fornication.",
        },
        {
          verse: "26",
          text: "Then Paul took the men, and the next day purifying himself with them entered into the temple, to signify the accomplishment of the days of purification, until that an offering should be offered for every one of them.",
        },
        {
          verse: "27",
          text: "And when the seven days were almost ended, the Jews which were of Asia, when they saw him in the temple, stirred up all the people, and laid hands on him,",
        },
        {
          verse: "28",
          text: "Crying out, Men of Israel, help: This is the man, that teacheth all men every where against the people, and the law, and this place: and further brought Greeks also into the temple, and hath polluted this holy place.",
        },
        {
          verse: "29",
          text: "(For they had seen before with him in the city Trophimus an Ephesian, whom they supposed that Paul had brought into the temple.)",
        },
        {
          verse: "30",
          text: "And all the city was moved, and the people ran together: and they took Paul, and drew him out of the temple: and forthwith the doors were shut.",
        },
        {
          verse: "31",
          text: "And as they went about to kill him, tidings came unto the chief captain of the band, that all Jerusalem was in an uproar.",
        },
        {
          verse: "32",
          text: "Who immediately took soldiers and centurions, and ran down unto them: and when they saw the chief captain and the soldiers, they left beating of Paul.",
        },
        {
          verse: "33",
          text: "Then the chief captain came near, and took him, and commanded him to be bound with two chains; and demanded who he was, and what he had done.",
        },
        {
          verse: "34",
          text: "And some cried one thing, some another, among the multitude: and when he could not know the certainty for the tumult, he commanded him to be carried into the castle.",
        },
        {
          verse: "35",
          text: "And when he came upon the stairs, so it was, that he was borne of the soldiers for the violence of the people.",
        },
        {
          verse: "36",
          text: "For the multitude of the people followed after, crying, Away with him.",
        },
        {
          verse: "37",
          text: "And as Paul was to be led into the castle, he said unto the chief captain, May I speak unto thee? Who said, Canst thou speak Greek?",
        },
        {
          verse: "38",
          text: "Art not thou that Egyptian, which before these days madest an uproar, and leddest out into the wilderness four thousand men that were murderers?",
        },
        {
          verse: "39",
          text: "But Paul said, I am a man which am a Jew of Tarsus, a city in Cilicia, a citizen of no mean city: and, I beseech thee, suffer me to speak unto the people.",
        },
        {
          verse: "40",
          text: "And when he had given him licence, Paul stood on the stairs, and beckoned with the hand unto the people. And when there was made a great silence, he spake unto them in the Hebrew tongue, saying,",
        },
      ],
    },
    {
      chapter: "22",
      verses: [
        {
          verse: "1",
          text: "Men, brethren, and fathers, hear ye my defence which I make now unto you.",
        },
        {
          verse: "2",
          text: "(And when they heard that he spake in the Hebrew tongue to them, they kept the more silence: and he saith,)",
        },
        {
          verse: "3",
          text: "I am verily a man which am a Jew, born in Tarsus, a city in Cilicia, yet brought up in this city at the feet of Gamaliel, and taught according to the perfect manner of the law of the fathers, and was zealous toward God, as ye all are this day.",
        },
        {
          verse: "4",
          text: "And I persecuted this way unto the death, binding and delivering into prisons both men and women.",
        },
        {
          verse: "5",
          text: "As also the high priest doth bear me witness, and all the estate of the elders: from whom also I received letters unto the brethren, and went to Damascus, to bring them which were there bound unto Jerusalem, for to be punished.",
        },
        {
          verse: "6",
          text: "And it came to pass, that, as I made my journey, and was come nigh unto Damascus about noon, suddenly there shone from heaven a great light round about me.",
        },
        {
          verse: "7",
          text: "And I fell unto the ground, and heard a voice saying unto me, Saul, Saul, why persecutest thou me?",
        },
        {
          verse: "8",
          text: "And I answered, Who art thou, Lord? And he said unto me, I am Jesus of Nazareth, whom thou persecutest.",
        },
        {
          verse: "9",
          text: "And they that were with me saw indeed the light, and were afraid; but they heard not the voice of him that spake to me.",
        },
        {
          verse: "10",
          text: "And I said, What shall I do, LORD? And the Lord said unto me, Arise, and go into Damascus; and there it shall be told thee of all things which are appointed for thee to do.",
        },
        {
          verse: "11",
          text: "And when I could not see for the glory of that light, being led by the hand of them that were with me, I came into Damascus.",
        },
        {
          verse: "12",
          text: "And one Ananias, a devout man according to the law, having a good report of all the Jews which dwelt there,",
        },
        {
          verse: "13",
          text: "Came unto me, and stood, and said unto me, Brother Saul, receive thy sight. And the same hour I looked up upon him.",
        },
        {
          verse: "14",
          text: "And he said, The God of our fathers hath chosen thee, that thou shouldest know his will, and see that Just One, and shouldest hear the voice of his mouth.",
        },
        {
          verse: "15",
          text: "For thou shalt be his witness unto all men of what thou hast seen and heard.",
        },
        {
          verse: "16",
          text: "And now why tarriest thou? arise, and be baptized, and wash away thy sins, calling on the name of the Lord.",
        },
        {
          verse: "17",
          text: "And it came to pass, that, when I was come again to Jerusalem, even while I prayed in the temple, I was in a trance;",
        },
        {
          verse: "18",
          text: "And saw him saying unto me, Make haste, and get thee quickly out of Jerusalem: for they will not receive thy testimony concerning me.",
        },
        {
          verse: "19",
          text: "And I said, Lord, they know that I imprisoned and beat in every synagogue them that believed on thee:",
        },
        {
          verse: "20",
          text: "And when the blood of thy martyr Stephen was shed, I also was standing by, and consenting unto his death, and kept the raiment of them that slew him.",
        },
        {
          verse: "21",
          text: "And he said unto me, Depart: for I will send thee far hence unto the Gentiles.",
        },
        {
          verse: "22",
          text: "And they gave him audience unto this word, and then lifted up their voices, and said, Away with such a fellow from the earth: for it is not fit that he should live.",
        },
        {
          verse: "23",
          text: "And as they cried out, and cast off their clothes, and threw dust into the air,",
        },
        {
          verse: "24",
          text: "The chief captain commanded him to be brought into the castle, and bade that he should be examined by scourging; that he might know wherefore they cried so against him.",
        },
        {
          verse: "25",
          text: "And as they bound him with thongs, Paul said unto the centurion that stood by, Is it lawful for you to scourge a man that is a Roman, and uncondemned?",
        },
        {
          verse: "26",
          text: "When the centurion heard that, he went and told the chief captain, saying, Take heed what thou doest: for this man is a Roman.",
        },
        {
          verse: "27",
          text: "Then the chief captain came, and said unto him, Tell me, art thou a Roman? He said, Yea.",
        },
        {
          verse: "28",
          text: "And the chief captain answered, With a great sum obtained I this freedom. And Paul said, But I was free born.",
        },
        {
          verse: "29",
          text: "Then straightway they departed from him which should have examined him: and the chief captain also was afraid, after he knew that he was a Roman, and because he had bound him.",
        },
        {
          verse: "30",
          text: "On the morrow, because he would have known the certainty wherefore he was accused of the Jews, he loosed him from his bands, and commanded the chief priests and all their council to appear, and brought Paul down, and set him before them.",
        },
      ],
    },
    {
      chapter: "23",
      verses: [
        {
          verse: "1",
          text: "And Paul, earnestly beholding the council, said, Men and brethren, I have lived in all good conscience before God until this day.",
        },
        {
          verse: "2",
          text: "And the high priest Ananias commanded them that stood by him to smite him on the mouth.",
        },
        {
          verse: "3",
          text: "Then said Paul unto him, God shall smite thee, thou whited wall: for sittest thou to judge me after the law, and commandest me to be smitten contrary to the law?",
        },
        {
          verse: "4",
          text: "And they that stood by said, Revilest thou God\u2019s high priest?",
        },
        {
          verse: "5",
          text: "Then said Paul, I wist not, brethren, that he was the high priest: for it is written, Thou shalt not speak evil of the ruler of thy people.",
        },
        {
          verse: "6",
          text: "But when Paul perceived that the one part were Sadducees, and the other Pharisees, he cried out in the council, Men and brethren, I am a Pharisee, the son of a Pharisee: of the hope and resurrection of the dead I am called in question.",
        },
        {
          verse: "7",
          text: "And when he had so said, there arose a dissension between the Pharisees and the Sadducees: and the multitude was divided.",
        },
        {
          verse: "8",
          text: "For the Sadducees say that there is no resurrection, neither angel, nor spirit: but the Pharisees confess both.",
        },
        {
          verse: "9",
          text: "And there arose a great cry: and the scribes that were of the Pharisees\u2019 part arose, and strove, saying, We find no evil in this man: but if a spirit or an angel hath spoken to him, let us not fight against God.",
        },
        {
          verse: "10",
          text: "And when there arose a great dissension, the chief captain, fearing lest Paul should have been pulled in pieces of them, commanded the soldiers to go down, and to take him by force from among them, and to bring him into the castle.",
        },
        {
          verse: "11",
          text: "And the night following the Lord stood by him, and said, Be of good cheer, Paul: for as thou hast testified of me in Jerusalem, so must thou bear witness also at Rome.",
        },
        {
          verse: "12",
          text: "And when it was day, certain of the Jews banded together, and bound themselves under a curse, saying that they would neither eat nor drink till they had killed Paul.",
        },
        {
          verse: "13",
          text: "And they were more than forty which had made this conspiracy.",
        },
        {
          verse: "14",
          text: "And they came to the chief priests and elders, and said, We have bound ourselves under a great curse, that we will eat nothing until we have slain Paul.",
        },
        {
          verse: "15",
          text: "Now therefore ye with the council signify to the chief captain that he bring him down unto you to morrow, as though ye would enquire something more perfectly concerning him: and we, or ever he come near, are ready to kill him.",
        },
        {
          verse: "16",
          text: "And when Paul\u2019s sister\u2019s son heard of their lying in wait, he went and entered into the castle, and told Paul.",
        },
        {
          verse: "17",
          text: "Then Paul called one of the centurions unto him, and said, Bring this young man unto the chief captain: for he hath a certain thing to tell him.",
        },
        {
          verse: "18",
          text: "So he took him, and brought him to the chief captain, and said, Paul the prisoner called me unto him, and prayed me to bring this young man unto thee, who hath something to say unto thee.",
        },
        {
          verse: "19",
          text: "Then the chief captain took him by the hand, and went with him aside privately, and asked him, What is that thou hast to tell me?",
        },
        {
          verse: "20",
          text: "And he said, The Jews have agreed to desire thee that thou wouldest bring down Paul to morrow into the council, as though they would enquire somewhat of him more perfectly.",
        },
        {
          verse: "21",
          text: "But do not thou yield unto them: for there lie in wait for him of them more than forty men, which have bound themselves with an oath, that they will neither eat nor drink till they have killed him: and now are they ready, looking for a promise from thee.",
        },
        {
          verse: "22",
          text: "So the chief captain then let the young man depart, and charged him, See thou tell no man that thou hast shewed these things to me.",
        },
        {
          verse: "23",
          text: "And he called unto him two centurions, saying, Make ready two hundred soldiers to go to Caesarea, and horsemen threescore and ten, and spearmen two hundred, at the third hour of the night;",
        },
        {
          verse: "24",
          text: "And provide them beasts, that they may set Paul on, and bring him safe unto Felix the governor.",
        },
        { verse: "25", text: "And he wrote a letter after this manner:" },
        {
          verse: "26",
          text: "Claudius Lysias unto the most excellent governor Felix sendeth greeting.",
        },
        {
          verse: "27",
          text: "This man was taken of the Jews, and should have been killed of them: then came I with an army, and rescued him, having understood that he was a Roman.",
        },
        {
          verse: "28",
          text: "And when I would have known the cause wherefore they accused him, I brought him forth into their council:",
        },
        {
          verse: "29",
          text: "Whom I perceived to be accused of questions of their law, but to have nothing laid to his charge worthy of death or of bonds.",
        },
        {
          verse: "30",
          text: "And when it was told me how that the Jews laid wait for the man, I sent straightway to thee, and gave commandment to his accusers also to say before thee what they had against him. Farewell.",
        },
        {
          verse: "31",
          text: "Then the soldiers, as it was commanded them, took Paul, and brought him by night to Antipatris.",
        },
        {
          verse: "32",
          text: "On the morrow they left the horsemen to go with him, and returned to the castle:",
        },
        {
          verse: "33",
          text: "Who, when they came to Caesarea, and delivered the epistle to the governor, presented Paul also before him.",
        },
        {
          verse: "34",
          text: "And when the governor had read the letter, he asked of what province he was. And when he understood that he was of Cilicia;",
        },
        {
          verse: "35",
          text: "I will hear thee, said he, when thine accusers are also come. And he commanded him to be kept in Herod\u2019s judgment hall.",
        },
      ],
    },
    {
      chapter: "24",
      verses: [
        {
          verse: "1",
          text: "And after five days Ananias the high priest descended with the elders, and with a certain orator named Tertullus, who informed the governor against Paul.",
        },
        {
          verse: "2",
          text: "And when he was called forth, Tertullus began to accuse him, saying, Seeing that by thee we enjoy great quietness, and that very worthy deeds are done unto this nation by thy providence,",
        },
        {
          verse: "3",
          text: "We accept it always, and in all places, most noble Felix, with all thankfulness.",
        },
        {
          verse: "4",
          text: "Notwithstanding, that I be not further tedious unto thee, I pray thee that thou wouldest hear us of thy clemency a few words.",
        },
        {
          verse: "5",
          text: "For we have found this man a pestilent fellow, and a mover of sedition among all the Jews throughout the world, and a ringleader of the sect of the Nazarenes:",
        },
        {
          verse: "6",
          text: "Who also hath gone about to profane the temple: whom we took, and would have judged according to our law.",
        },
        {
          verse: "7",
          text: "But the chief captain Lysias came upon us, and with great violence took him away out of our hands,",
        },
        {
          verse: "8",
          text: "Commanding his accusers to come unto thee: by examining of whom thyself mayest take knowledge of all these things, whereof we accuse him.",
        },
        {
          verse: "9",
          text: "And the Jews also assented, saying that these things were so.",
        },
        {
          verse: "10",
          text: "Then Paul, after that the governor had beckoned unto him to speak, answered, Forasmuch as I know that thou hast been of many years a judge unto this nation, I do the more cheerfully answer for myself:",
        },
        {
          verse: "11",
          text: "Because that thou mayest understand, that there are yet but twelve days since I went up to Jerusalem for to worship.",
        },
        {
          verse: "12",
          text: "And they neither found me in the temple disputing with any man, neither raising up the people, neither in the synagogues, nor in the city:",
        },
        {
          verse: "13",
          text: "Neither can they prove the things whereof they now accuse me.",
        },
        {
          verse: "14",
          text: "But this I confess unto thee, that after the way which they call heresy, so worship I the God of my fathers, believing all things which are written in the law and in the prophets:",
        },
        {
          verse: "15",
          text: "And have hope toward God, which they themselves also allow, that there shall be a resurrection of the dead, both of the just and unjust.",
        },
        {
          verse: "16",
          text: "And herein do I exercise myself, to have always a conscience void of offence toward God, and toward men.",
        },
        {
          verse: "17",
          text: "Now after many years I came to bring alms to my nation, and offerings.",
        },
        {
          verse: "18",
          text: "Whereupon certain Jews from Asia found me purified in the temple, neither with multitude, nor with tumult.",
        },
        {
          verse: "19",
          text: "Who ought to have been here before thee, and object, if they had ought against me.",
        },
        {
          verse: "20",
          text: "Or else let these same here say, if they have found any evil doing in me, while I stood before the council,",
        },
        {
          verse: "21",
          text: "Except it be for this one voice, that I cried standing among them, Touching the resurrection of the dead I am called in question by you this day.",
        },
        {
          verse: "22",
          text: "And when Felix heard these things, having more perfect knowledge of that way, he deferred them, and said, When Lysias the chief captain shall come down, I will know the uttermost of your matter.",
        },
        {
          verse: "23",
          text: "And he commanded a centurion to keep Paul, and to let him have liberty, and that he should forbid none of his acquaintance to minister or come unto him.",
        },
        {
          verse: "24",
          text: "And after certain days, when Felix came with his wife Drusilla, which was a Jewess, he sent for Paul, and heard him concerning the faith in Christ.",
        },
        {
          verse: "25",
          text: "And as he reasoned of righteousness, temperance, and judgment to come, Felix trembled, and answered, Go thy way for this time; when I have a convenient season, I will call for thee.",
        },
        {
          verse: "26",
          text: "He hoped also that money should have been given him of Paul, that he might loose him: wherefore he sent for him the oftener, and communed with him.",
        },
        {
          verse: "27",
          text: "But after two years Porcius Festus came into Felix\u2019 room: and Felix, willing to shew the Jews a pleasure, left Paul bound.",
        },
      ],
    },
    {
      chapter: "25",
      verses: [
        {
          verse: "1",
          text: "Now when Festus was come into the province, after three days he ascended from Caesarea to Jerusalem.",
        },
        {
          verse: "2",
          text: "Then the high priest and the chief of the Jews informed him against Paul, and besought him,",
        },
        {
          verse: "3",
          text: "And desired favour against him, that he would send for him to Jerusalem, laying wait in the way to kill him.",
        },
        {
          verse: "4",
          text: "But Festus answered, that Paul should be kept at Caesarea, and that he himself would depart shortly thither.",
        },
        {
          verse: "5",
          text: "Let them therefore, said he, which among you are able, go down with me, and accuse this man, if there be any wickedness in him.",
        },
        {
          verse: "6",
          text: "And when he had tarried among them more than ten days, he went down unto Caesarea; and the next day sitting on the judgment seat commanded Paul to be brought.",
        },
        {
          verse: "7",
          text: "And when he was come, the Jews which came down from Jerusalem stood round about, and laid many and grievous complaints against Paul, which they could not prove.",
        },
        {
          verse: "8",
          text: "While he answered for himself, Neither against the law of the Jews, neither against the temple, nor yet against Caesar, have I offended any thing at all.",
        },
        {
          verse: "9",
          text: "But Festus, willing to do the Jews a pleasure, answered Paul, and said, Wilt thou go up to Jerusalem, and there be judged of these things before me?",
        },
        {
          verse: "10",
          text: "Then said Paul, I stand at Caesar\u2019s judgment seat, where I ought to be judged: to the Jews have I done no wrong, as thou very well knowest.",
        },
        {
          verse: "11",
          text: "For if I be an offender, or have committed any thing worthy of death, I refuse not to die: but if there be none of these things whereof these accuse me, no man may deliver me unto them. I appeal unto Caesar.",
        },
        {
          verse: "12",
          text: "Then Festus, when he had conferred with the council, answered, Hast thou appealed unto Caesar? unto Caesar shalt thou go.",
        },
        {
          verse: "13",
          text: "And after certain days king Agrippa and Bernice came unto Caesarea to salute Festus.",
        },
        {
          verse: "14",
          text: "And when they had been there many days, Festus declared Paul\u2019s cause unto the king, saying, There is a certain man left in bonds by Felix:",
        },
        {
          verse: "15",
          text: "About whom, when I was at Jerusalem, the chief priests and the elders of the Jews informed me, desiring to have judgment against him.",
        },
        {
          verse: "16",
          text: "To whom I answered, It is not the manner of the Romans to deliver any man to die, before that he which is accused have the accusers face to face, and have licence to answer for himself concerning the crime laid against him.",
        },
        {
          verse: "17",
          text: "Therefore, when they were come hither, without any delay on the morrow I sat on the judgment seat, and commanded the man to be brought forth.",
        },
        {
          verse: "18",
          text: "Against whom when the accusers stood up, they brought none accusation of such things as I supposed:",
        },
        {
          verse: "19",
          text: "But had certain questions against him of their own superstition, and of one Jesus, which was dead, whom Paul affirmed to be alive.",
        },
        {
          verse: "20",
          text: "And because I doubted of such manner of questions, I asked him whether he would go to Jerusalem, and there be judged of these matters.",
        },
        {
          verse: "21",
          text: "But when Paul had appealed to be reserved unto the hearing of Augustus, I commanded him to be kept till I might send him to Caesar.",
        },
        {
          verse: "22",
          text: "Then Agrippa said unto Festus, I would also hear the man myself. To morrow, said he, thou shalt hear him.",
        },
        {
          verse: "23",
          text: "And on the morrow, when Agrippa was come, and Bernice, with great pomp, and was entered into the place of hearing, with the chief captains, and principal men of the city, at Festus\u2019 commandment Paul was brought forth.",
        },
        {
          verse: "24",
          text: "And Festus said, King Agrippa, and all men which are here present with us, ye see this man, about whom all the multitude of the Jews have dealt with me, both at Jerusalem, and also here, crying that he ought not to live any longer.",
        },
        {
          verse: "25",
          text: "But when I found that he had committed nothing worthy of death, and that he himself hath appealed to Augustus, I have determined to send him.",
        },
        {
          verse: "26",
          text: "Of whom I have no certain thing to write unto my lord. Wherefore I have brought him forth before you, and specially before thee, O king Agrippa, that, after examination had, I might have somewhat to write.",
        },
        {
          verse: "27",
          text: "For it seemeth to me unreasonable to send a prisoner, and not withal to signify the crimes laid against him.",
        },
      ],
    },
    {
      chapter: "26",
      verses: [
        {
          verse: "1",
          text: "Then Agrippa said unto Paul, Thou art permitted to speak for thyself. Then Paul stretched forth the hand, and answered for himself:",
        },
        {
          verse: "2",
          text: "I think myself happy, king Agrippa, because I shall answer for myself this day before thee touching all the things whereof I am accused of the Jews:",
        },
        {
          verse: "3",
          text: "Especially because I know thee to be expert in all customs and questions which are among the Jews: wherefore I beseech thee to hear me patiently.",
        },
        {
          verse: "4",
          text: "My manner of life from my youth, which was at the first among mine own nation at Jerusalem, know all the Jews;",
        },
        {
          verse: "5",
          text: "Which knew me from the beginning, if they would testify, that after the most straitest sect of our religion I lived a Pharisee.",
        },
        {
          verse: "6",
          text: "And now I stand and am judged for the hope of the promise made of God unto our fathers:",
        },
        {
          verse: "7",
          text: "Unto which promise our twelve tribes, instantly serving God day and night, hope to come. For which hope\u2019s sake, king Agrippa, I am accused of the Jews.",
        },
        {
          verse: "8",
          text: "Why should it be thought a thing incredible with you, that God should raise the dead?",
        },
        {
          verse: "9",
          text: "I verily thought with myself, that I ought to do many things contrary to the name of Jesus of Nazareth.",
        },
        {
          verse: "10",
          text: "Which thing I also did in Jerusalem: and many of the saints did I shut up in prison, having received authority from the chief priests; and when they were put to death, I gave my voice against them.",
        },
        {
          verse: "11",
          text: "And I punished them oft in every synagogue, and compelled them to blaspheme; and being exceedingly mad against them, I persecuted them even unto strange cities.",
        },
        {
          verse: "12",
          text: "Whereupon as I went to Damascus with authority and commission from the chief priests,",
        },
        {
          verse: "13",
          text: "At midday, O king, I saw in the way a light from heaven, above the brightness of the sun, shining round about me and them which journeyed with me.",
        },
        {
          verse: "14",
          text: "And when we were all fallen to the earth, I heard a voice speaking unto me, and saying in the Hebrew tongue, Saul, Saul, why persecutest thou me? it is hard for thee to kick against the pricks.",
        },
        {
          verse: "15",
          text: "And I said, Who art thou, Lord? And he said, I am Jesus whom thou persecutest.",
        },
        {
          verse: "16",
          text: "But rise, and stand upon thy feet: for I have appeared unto thee for this purpose, to make thee a minister and a witness both of these things which thou hast seen, and of those things in the which I will appear unto thee;",
        },
        {
          verse: "17",
          text: "Delivering thee from the people, and from the Gentiles, unto whom now I send thee,",
        },
        {
          verse: "18",
          text: "To open their eyes, and to turn them from darkness to light, and from the power of Satan unto God, that they may receive forgiveness of sins, and inheritance among them which are sanctified by faith that is in me.",
        },
        {
          verse: "19",
          text: "Whereupon, O king Agrippa, I was not disobedient unto the heavenly vision:",
        },
        {
          verse: "20",
          text: "But shewed first unto them of Damascus, and at Jerusalem, and throughout all the coasts of Judaea, and then to the Gentiles, that they should repent and turn to God, and do works meet for repentance.",
        },
        {
          verse: "21",
          text: "For these causes the Jews caught me in the temple, and went about to kill me.",
        },
        {
          verse: "22",
          text: "Having therefore obtained help of God, I continue unto this day, witnessing both to small and great, saying none other things than those which the prophets and Moses did say should come:",
        },
        {
          verse: "23",
          text: "That Christ should suffer, and that he should be the first that should rise from the dead, and should shew light unto the people, and to the Gentiles.",
        },
        {
          verse: "24",
          text: "And as he thus spake for himself, Festus said with a loud voice, Paul, thou art beside thyself; much learning doth make thee mad.",
        },
        {
          verse: "25",
          text: "But he said, I am not mad, most noble Festus; but speak forth the words of truth and soberness.",
        },
        {
          verse: "26",
          text: "For the king knoweth of these things, before whom also I speak freely: for I am persuaded that none of these things are hidden from him; for this thing was not done in a corner.",
        },
        {
          verse: "27",
          text: "King Agrippa, believest thou the prophets? I know that thou believest.",
        },
        {
          verse: "28",
          text: "Then Agrippa said unto Paul, Almost thou persuadest me to be a Christian.",
        },
        {
          verse: "29",
          text: "And Paul said, I would to God, that not only thou, but also all that hear me this day, were both almost, and altogether such as I am, except these bonds.",
        },
        {
          verse: "30",
          text: "And when he had thus spoken, the king rose up, and the governor, and Bernice, and they that sat with them:",
        },
        {
          verse: "31",
          text: "And when they were gone aside, they talked between themselves, saying, This man doeth nothing worthy of death or of bonds.",
        },
        {
          verse: "32",
          text: "Then said Agrippa unto Festus, This man might have been set at liberty, if he had not appealed unto Caesar.",
        },
      ],
    },
    {
      chapter: "27",
      verses: [
        {
          verse: "1",
          text: "And when it was determined that we should sail into Italy, they delivered Paul and certain other prisoners unto one named Julius, a centurion of Augustus\u2019 band.",
        },
        {
          verse: "2",
          text: "And entering into a ship of Adramyttium, we launched, meaning to sail by the coasts of Asia; one Aristarchus, a Macedonian of Thessalonica, being with us.",
        },
        {
          verse: "3",
          text: "And the next day we touched at Sidon. And Julius courteously entreated Paul, and gave him liberty to go unto his friends to refresh himself.",
        },
        {
          verse: "4",
          text: "And when we had launched from thence, we sailed under Cyprus, because the winds were contrary.",
        },
        {
          verse: "5",
          text: "And when we had sailed over the sea of Cilicia and Pamphylia, we came to Myra, a city of Lycia.",
        },
        {
          verse: "6",
          text: "And there the centurion found a ship of Alexandria sailing into Italy; and he put us therein.",
        },
        {
          verse: "7",
          text: "And when we had sailed slowly many days, and scarce were come over against Cnidus, the wind not suffering us, we sailed under Crete, over against Salmone;",
        },
        {
          verse: "8",
          text: "And, hardly passing it, came unto a place which is called The fair havens; nigh whereunto was the city of Lasea.",
        },
        {
          verse: "9",
          text: "Now when much time was spent, and when sailing was now dangerous, because the fast was now already past, Paul admonished them,",
        },
        {
          verse: "10",
          text: "And said unto them, Sirs, I perceive that this voyage will be with hurt and much damage, not only of the lading and ship, but also of our lives.",
        },
        {
          verse: "11",
          text: "Nevertheless the centurion believed the master and the owner of the ship, more than those things which were spoken by Paul.",
        },
        {
          verse: "12",
          text: "And because the haven was not commodious to winter in, the more part advised to depart thence also, if by any means they might attain to Phenice, and there to winter; which is an haven of Crete, and lieth toward the south west and north west.",
        },
        {
          verse: "13",
          text: "And when the south wind blew softly, supposing that they had obtained their purpose, loosing thence, they sailed close by Crete.",
        },
        {
          verse: "14",
          text: "But not long after there arose against it a tempestuous wind, called Euroclydon.",
        },
        {
          verse: "15",
          text: "And when the ship was caught, and could not bear up into the wind, we let her drive.",
        },
        {
          verse: "16",
          text: "And running under a certain island which is called Clauda, we had much work to come by the boat:",
        },
        {
          verse: "17",
          text: "Which when they had taken up, they used helps, undergirding the ship; and, fearing lest they should fall into the quicksands, strake sail, and so were driven.",
        },
        {
          verse: "18",
          text: "And we being exceedingly tossed with a tempest, the next day they lightened the ship;",
        },
        {
          verse: "19",
          text: "And the third day we cast out with our own hands the tackling of the ship.",
        },
        {
          verse: "20",
          text: "And when neither sun nor stars in many days appeared, and no small tempest lay on us, all hope that we should be saved was then taken away.",
        },
        {
          verse: "21",
          text: "But after long abstinence Paul stood forth in the midst of them, and said, Sirs, ye should have hearkened unto me, and not have loosed from Crete, and to have gained this harm and loss.",
        },
        {
          verse: "22",
          text: "And now I exhort you to be of good cheer: for there shall be no loss of any man\u2019s life among you, but of the ship.",
        },
        {
          verse: "23",
          text: "For there stood by me this night the angel of God, whose I am, and whom I serve,",
        },
        {
          verse: "24",
          text: "Saying, Fear not, Paul; thou must be brought before Caesar: and, lo, God hath given thee all them that sail with thee.",
        },
        {
          verse: "25",
          text: "Wherefore, sirs, be of good cheer: for I believe God, that it shall be even as it was told me.",
        },
        { verse: "26", text: "Howbeit we must be cast upon a certain island." },
        {
          verse: "27",
          text: "But when the fourteenth night was come, as we were driven up and down in Adria, about midnight the shipmen deemed that they drew near to some country;",
        },
        {
          verse: "28",
          text: "And sounded, and found it twenty fathoms: and when they had gone a little further, they sounded again, and found it fifteen fathoms.",
        },
        {
          verse: "29",
          text: "Then fearing lest we should have fallen upon rocks, they cast four anchors out of the stern, and wished for the day.",
        },
        {
          verse: "30",
          text: "And as the shipmen were about to flee out of the ship, when they had let down the boat into the sea, under colour as though they would have cast anchors out of the foreship,",
        },
        {
          verse: "31",
          text: "Paul said to the centurion and to the soldiers, Except these abide in the ship, ye cannot be saved.",
        },
        {
          verse: "32",
          text: "Then the soldiers cut off the ropes of the boat, and let her fall off.",
        },
        {
          verse: "33",
          text: "And while the day was coming on, Paul besought them all to take meat, saying, This day is the fourteenth day that ye have tarried and continued fasting, having taken nothing.",
        },
        {
          verse: "34",
          text: "Wherefore I pray you to take some meat: for this is for your health: for there shall not an hair fall from the head of any of you.",
        },
        {
          verse: "35",
          text: "And when he had thus spoken, he took bread, and gave thanks to God in presence of them all: and when he had broken it, he began to eat.",
        },
        {
          verse: "36",
          text: "Then were they all of good cheer, and they also took some meat.",
        },
        {
          verse: "37",
          text: "And we were in all in the ship two hundred threescore and sixteen souls.",
        },
        {
          verse: "38",
          text: "And when they had eaten enough, they lightened the ship, and cast out the wheat into the sea.",
        },
        {
          verse: "39",
          text: "And when it was day, they knew not the land: but they discovered a certain creek with a shore, into the which they were minded, if it were possible, to thrust in the ship.",
        },
        {
          verse: "40",
          text: "And when they had taken up the anchors, they committed themselves unto the sea, and loosed the rudder bands, and hoised up the mainsail to the wind, and made toward shore.",
        },
        {
          verse: "41",
          text: "And falling into a place where two seas met, they ran the ship aground; and the forepart stuck fast, and remained unmoveable, but the hinder part was broken with the violence of the waves.",
        },
        {
          verse: "42",
          text: "And the soldiers\u2019 counsel was to kill the prisoners, lest any of them should swim out, and escape.",
        },
        {
          verse: "43",
          text: "But the centurion, willing to save Paul, kept them from their purpose; and commanded that they which could swim should cast themselves first into the sea, and get to land:",
        },
        {
          verse: "44",
          text: "And the rest, some on boards, and some on broken pieces of the ship. And so it came to pass, that they escaped all safe to land.",
        },
      ],
    },
    {
      chapter: "28",
      verses: [
        {
          verse: "1",
          text: "And when they were escaped, then they knew that the island was called Melita.",
        },
        {
          verse: "2",
          text: "And the barbarous people shewed us no little kindness: for they kindled a fire, and received us every one, because of the present rain, and because of the cold.",
        },
        {
          verse: "3",
          text: "And when Paul had gathered a bundle of sticks, and laid them on the fire, there came a viper out of the heat, and fastened on his hand.",
        },
        {
          verse: "4",
          text: "And when the barbarians saw the venomous beast hang on his hand, they said among themselves, No doubt this man is a murderer, whom, though he hath escaped the sea, yet vengeance suffereth not to live.",
        },
        {
          verse: "5",
          text: "And he shook off the beast into the fire, and felt no harm.",
        },
        {
          verse: "6",
          text: "Howbeit they looked when he should have swollen, or fallen down dead suddenly: but after they had looked a great while, and saw no harm come to him, they changed their minds, and said that he was a god.",
        },
        {
          verse: "7",
          text: "In the same quarters were possessions of the chief man of the island, whose name was Publius; who received us, and lodged us three days courteously.",
        },
        {
          verse: "8",
          text: "And it came to pass, that the father of Publius lay sick of a fever and of a bloody flux: to whom Paul entered in, and prayed, and laid his hands on him, and healed him.",
        },
        {
          verse: "9",
          text: "So when this was done, others also, which had diseases in the island, came, and were healed:",
        },
        {
          verse: "10",
          text: "Who also honoured us with many honours; and when we departed, they laded us with such things as were necessary.",
        },
        {
          verse: "11",
          text: "And after three months we departed in a ship of Alexandria, which had wintered in the isle, whose sign was Castor and Pollux.",
        },
        {
          verse: "12",
          text: "And landing at Syracuse, we tarried there three days.",
        },
        {
          verse: "13",
          text: "And from thence we fetched a compass, and came to Rhegium: and after one day the south wind blew, and we came the next day to Puteoli:",
        },
        {
          verse: "14",
          text: "Where we found brethren, and were desired to tarry with them seven days: and so we went toward Rome.",
        },
        {
          verse: "15",
          text: "And from thence, when the brethren heard of us, they came to meet us as far as Appii forum, and The three taverns: whom when Paul saw, he thanked God, and took courage.",
        },
        {
          verse: "16",
          text: "And when we came to Rome, the centurion delivered the prisoners to the captain of the guard: but Paul was suffered to dwell by himself with a soldier that kept him.",
        },
        {
          verse: "17",
          text: "And it came to pass, that after three days Paul called the chief of the Jews together: and when they were come together, he said unto them, Men and brethren, though I have committed nothing against the people, or customs of our fathers, yet was I delivered prisoner from Jerusalem into the hands of the Romans.",
        },
        {
          verse: "18",
          text: "Who, when they had examined me, would have let me go, because there was no cause of death in me.",
        },
        {
          verse: "19",
          text: "But when the Jews spake against it, I was constrained to appeal unto Caesar; not that I had ought to accuse my nation of.",
        },
        {
          verse: "20",
          text: "For this cause therefore have I called for you, to see you, and to speak with you: because that for the hope of Israel I am bound with this chain.",
        },
        {
          verse: "21",
          text: "And they said unto him, We neither received letters out of Judaea concerning thee, neither any of the brethren that came shewed or spake any harm of thee.",
        },
        {
          verse: "22",
          text: "But we desire to hear of thee what thou thinkest: for as concerning this sect, we know that every where it is spoken against.",
        },
        {
          verse: "23",
          text: "And when they had appointed him a day, there came many to him into his lodging; to whom he expounded and testified the kingdom of God, persuading them concerning Jesus, both out of the law of Moses, and out of the prophets, from morning till evening.",
        },
        {
          verse: "24",
          text: "And some believed the things which were spoken, and some believed not.",
        },
        {
          verse: "25",
          text: "And when they agreed not among themselves, they departed, after that Paul had spoken one word, Well spake the Holy Ghost by Esaias the prophet unto our fathers,",
        },
        {
          verse: "26",
          text: "Saying, Go unto this people, and say, Hearing ye shall hear, and shall not understand; and seeing ye shall see, and not perceive:",
        },
        {
          verse: "27",
          text: "For the heart of this people is waxed gross, and their ears are dull of hearing, and their eyes have they closed; lest they should see with their eyes, and hear with their ears, and understand with their heart, and should be converted, and I should heal them.",
        },
        {
          verse: "28",
          text: "Be it known therefore unto you, that the salvation of God is sent unto the Gentiles, and that they will hear it.",
        },
        {
          verse: "29",
          text: "And when he had said these words, the Jews departed, and had great reasoning among themselves.",
        },
        {
          verse: "30",
          text: "And Paul dwelt two whole years in his own hired house, and received all that came in unto him,",
        },
        {
          verse: "31",
          text: "Preaching the kingdom of God, and teaching those things which concern the Lord Jesus Christ, with all confidence, no man forbidding him.",
        },
      ],
    },
  ],
};

const promises = [];

bibleData.forEach((bookData) => {
  const { book, chapters } = bookData;

  console.log("Adding document for book:", book);

  promises.push(
    admin.firestore().collection("bible-master").doc(book).set({
      book,
      chapters,
    })
  );
});

Promise.all(promises)
  .then(() => {
    console.log("Bible books added to Firestore successfully!");
    process.exit();
  })
  .catch((error) => {
    console.error("Error adding Bible books to Firestore:", error);
    process.exit(1);
  });
