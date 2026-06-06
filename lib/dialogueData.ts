export interface TranscriptLine {
  speaker: 'agent' | 'customer'
  text: string
  duration: number
}

export const DIALOGUES: Record<string, Record<string, TranscriptLine[]>> = {
  receptionist: {
    English: [
      { speaker: 'agent', text: 'Thank you for calling QEVN Operations. This is Sarah, your AI receptionist. How can I direct your call today?', duration: 5 },
      { speaker: 'customer', text: 'Hi, I need to talk to someone regarding a custom CRM integration project.', duration: 4 },
      { speaker: 'agent', text: 'I can help with that. Let me look up our project engineering team. They are currently resolving a system deployment, but I can schedule a direct call back or create a support ticket. Which do you prefer?', duration: 8 },
      { speaker: 'customer', text: 'A direct call back is great. Sometime tomorrow afternoon would be perfect.', duration: 5 },
      { speaker: 'agent', text: 'Understood. I have logged your request. An integration strategist will call you back tomorrow, Tuesday, between 2 PM and 4 PM. Confirmation details have been sent to your mobile.', duration: 8 },
      { speaker: 'customer', text: 'Awesome, thanks Sarah. That was quick.', duration: 3 },
      { speaker: 'agent', text: 'My pleasure. Have a productive day ahead!', duration: 3 }
    ],
    Hinglish: [
      { speaker: 'agent', text: 'Hello, QEVN Operations me call karne ke liye thank you. Main Sarah hoon, aapki AI receptionist. Aaj main aapki kya help kar sakti hoon?', duration: 6 },
      { speaker: 'customer', text: 'Hi Sarah, mujhe integration project ke baare me team se baat karni thi.', duration: 4 },
      { speaker: 'agent', text: 'Sure, main check karti hoon. Humare system engineering experts abhi ek live deployment me hain. Kya main kal ke liye aapka call back schedule kar doon?', duration: 7 },
      { speaker: 'customer', text: 'Haan, kal afternoon ka time sahi rahega.', duration: 3 },
      { speaker: 'agent', text: 'Done! Maine call back schedule kar diya hai. Kal dopahar 2 se 4 baje ke beech humare manager aapko call karenge. Confirmation SMS aapko mil gaya hoga.', duration: 8 },
      { speaker: 'customer', text: 'Mil gaya, thank you. Kaafi smooth tha ye.', duration: 3 },
      { speaker: 'agent', text: 'You are welcome! Have a great day.', duration: 2 }
    ],
    Hindi: [
      { speaker: 'agent', text: 'QEVN ऑपरेशन्स में कॉल करने के लिए धन्यवाद। मैं सारा हूँ, आपकी AI रिसेप्शनिस्ट। आज मैं आपकी कॉल कहाँ ट्रांसफर कर सकती हूँ?', duration: 6 },
      { speaker: 'customer', text: 'नमस्ते, मुझे कस्टम CRM इंटीग्रेशन प्रोजेक्ट के बारे में किसी से बात करनी है।', duration: 4 },
      { speaker: 'agent', text: 'मैं इसमें मदद कर सकती हूँ। हमारी प्रोजेक्ट इंजीनियरिंग टीम अभी सिस्टम डिप्लॉयमेंट में व्यस्त है, लेकिन मैं आपकी कॉल बैक शेड्यूल कर सकती हूँ या सपोर्ट टिकट बना सकती हूँ। आप क्या पसंद करेंगे?', duration: 8 },
      { speaker: 'customer', text: 'कॉल बैक सही रहेगा। कल दोपहर के बाद का समय सबसे अच्छा रहेगा।', duration: 4 },
      { speaker: 'agent', text: 'ठीक है, मैंने आपकी रिक्वेस्ट नोट कर ली है। एक इंटीग्रेशन स्पेशलिस्ट कल मंगलवार दोपहर 2 से 4 बजे के बीच आपको कॉल करेंगे। डिटेल्स आपके मोबाइल पर भेज दी गई हैं।', duration: 8 },
      { speaker: 'customer', text: 'बहुत बढ़िया, धन्यवाद सारा। यह काफी तेज़ था।', duration: 3 },
      { speaker: 'agent', text: 'मेरा सौभाग्य है। आपका दिन शुभ हो!', duration: 3 }
    ],
    Gujarati: [
      { speaker: 'agent', text: 'QEVN ઓપરેશન્સમાં કોલ કરવા બદલ આભાર. હું સારાહ છું, તમારી AI રિસેપ્શનિસ્ટ. આજે હું તમારા કોલને ક્યાં ટ્રાન્સફર કરી શકું?', duration: 6 },
      { speaker: 'customer', text: 'નમસ્તે, મારે કસ્ટમ CRM ઇન્ટિગ્રેશન પ્રોજેક્ટ વિશે કોઈની સાથે વાત કરવી છે.', duration: 4 },
      { speaker: 'agent', text: 'હું તેમાં મદદ કરી શકું છું. અમારી પ્રોજેક્ટ એન્જિનિયરિંગ ટીમ હાલમાં સિસ્ટમ ડિપ્લોયમેન્ટમાં વ્યસ્ત છે, પણ હું તમારો કોલ બેક શેડ્યૂલ કરી શકું અથવા સપોર્ટ ટિકિટ બનાવી શકું. તમે શું પસંદ કરશો?', duration: 8 },
      { speaker: 'customer', text: 'કોલ બેક સારો રહેશે. આવતીકાલે બપોર પછીનો સમય યોગ્ય રહેશે.', duration: 4 },
      { speaker: 'agent', text: 'બરાબર છે, મેં તમારી વિનંતી નોંધી લીધી છે. અમારા ઇન્ટિગ્રેશન સ્પેશિયાલિસ્ટ આવતીકાલે મંગળવારે બપોરે ૨ થી ૪ વચ્ચે તમને કોલ કરશે. વિગતો તમારા મોબાઈલ પર મોકલી દેવામાં આવી છે.', duration: 8 },
      { speaker: 'customer', text: 'ખૂબ સરસ, આભાર સારાહ. આ તો ઘણું ઝડપી હતું.', duration: 3 },
      { speaker: 'agent', text: 'મને આનંદ થયો. તમારો દિવસ સારો રહે!', duration: 3 }
    ],
    Marathi: [
      { speaker: 'agent', text: 'QEVN ऑपरेशन्समध्ये कॉल केल्याबद्दल धन्यवाद. मी सारा आहे, तुमची AI रिसेप्शनिस्ट. आज मी आपला कॉल कुठे ट्रान्सफर करू शकते?', duration: 6 },
      { speaker: 'customer', text: 'नमस्ते, मला कस्टम CRM इंटिग्रेशन प्रोजेक्टबद्दल कोणाशीतरी बोलायचे आहे।', duration: 4 },
      { speaker: 'agent', text: 'मी यामध्ये मदत करू शकते. आमची प्रोजेक्ट इंजिनिअरिंग टीम सध्या सिस्टीम डिप्लॉयमेंटमध्ये व्यस्त आहे, पण मी आपला कॉल बॅक शेड्यूल करू शकते किंवा सपोर्ट तिकीट तयार करू शकते. तुम्हाला काय सोयीचे पडेल?', duration: 8 },
      { speaker: 'customer', text: 'कॉल बॅक योग्य राहील. उद्या दुपारनंतरची वेळ चांगली असेल।', duration: 4 },
      { speaker: 'agent', text: 'समजले. मी आपली विनंती नोंदवली आहे. आमचे इंटिग्रेशन स्पेशालिस्ट उद्या मंगळवारी दुपारी २ ते ४ दरम्यान तुम्हाला कॉल करतील. तपशील तुमच्या मोबाईलवर पाठवला आहे.', duration: 8 },
      { speaker: 'customer', text: 'खूप छान, धन्यवाद सारा. हे खूप जलद होते.', duration: 3 },
      { speaker: 'agent', text: 'मला आनंद झाला. आपला दिवस चांगला जावो!', duration: 3 }
    ],
    Tamil: [
      { speaker: 'agent', text: 'QEVN ஆபரேஷன்ஸ்ஸிற்கு அழைத்ததற்கு நன்றி. நான் சாரா, உங்கள் AI வரவேற்பாளர். இன்று உங்கள் அழைப்பை நான் எவ்வாறு உதவ முடியும்?', duration: 6 },
      { speaker: 'customer', text: 'வணக்கம், கஸ்டம் CRM ஒருங்கிணைப்பு திட்டம் குறித்து நான் ஒருவருடன் பேச வேண்டும்.', duration: 4 },
      { speaker: 'agent', text: 'நான் இதற்கு உதவ முடியும். எங்கள் பொறியியல் குழு இப்போது ஒரு சிஸ்டம் வரிசைப்படுத்தலில் உள்ளது, ஆனால் நான் திரும்ப அழைப்பை முன்பதிவு செய்யவோ அல்லது ஆதரவு டிக்கெட்டை உருவாக்கவோ முடியும். எது உங்களுக்கு வசதி?', duration: 8 },
      { speaker: 'customer', text: 'திரும்ப அழைப்பதே நல்லது. நாளை மதியம் சரியாக இருக்கும்.', duration: 4 },
      { speaker: 'agent', text: 'புரிந்தது. உங்கள் கோரிக்கையை பதிவு செய்துள்ளேன். ஒரு ஒருங்கிணைப்பு நிபுணர் நாளை செவ்வாய் மதியம் 2 முதல் 4 மணிக்குள் உங்களை அழைப்பார். விவரங்கள் உங்கள் மொபைலுக்கு அனுப்பப்பட்டுள்ளன.', duration: 8 },
      { speaker: 'customer', text: 'மிக்க நன்றி சாரா. இது மிகவும் வேகமாக இருந்தது.', duration: 3 },
      { speaker: 'agent', text: 'என் மகிழ்ச்சி. இனிய நாள் அமையட்டும்!', duration: 3 }
    ],
    Telugu: [
      { speaker: 'agent', text: 'QEVN ఆపరేషన్స్ కి కాల్ చేసినందుకు ధన్యవాదాలు. నేను సారా, మీ AI రిసెప్షనిస్ట్. ఈరోజు మీ కాల్ ని ఎవరికి బదిలీ చేయాలి?', duration: 6 },
      { speaker: 'customer', text: 'నమస్తే, నేను కస్టమ్ CRM ఇంటిగ్రేషన్ ప్రాజెక్ట్ గురించి మాట్లాడాలి.', duration: 4 },
      { speaker: 'agent', text: 'నేను సహాయం చేయగలను. మా ఇంజనీరింగ్ బృందం ప్రస్తుతం సిస్టమ్ డిప్లాయ్‌మెంట్‌లో బిజీగా ఉంది, కానీ నేను కాల్ బ్యాక్ షెడ్యూల్ చేయగలను లేదా సపోర్ట్ టికెట్ క్రియేట్ చేయగలను. మీకు ఏది కావాలి?', duration: 8 },
      { speaker: 'customer', text: 'కాల్ బ్యాక్ బాగుంటుంది. రేపు మధ్యాహ్నం సమయం సరిపోతుంది.', duration: 4 },
      { speaker: 'agent', text: 'అలాగే, మీ అభ్యర్థనను రికార్డ్ చేసాను. మా ఇంటిగ్రేషన్ నిపుణుడు రేపు మంగళవారం మధ్యాహ్నం 2 నుండి 4 గంటల మధ్య కాల్ చేస్తారు. వివరాలు మీ మొబైల్‌కు పంపబడ్డాయి.', duration: 8 },
      { speaker: 'customer', text: 'చాలా బాగుంది, ధన్యవాదాలు సారా. ఇది చాలా వేగంగా జరిగింది.', duration: 3 },
      { speaker: 'agent', text: 'నా సంతోషం. మీ రోజు శుభప్రదంగా సాగాలి!', duration: 3 }
    ],
    Bengali: [
      { speaker: 'agent', text: 'QEVN অপারেশনে কল করার জন্য ধন্যবাদ। আমি সারা, আপনার AI রিসেপশনিস্ট। আজ আমি কীভাবে আপনার কলটি পরিচালনা করতে পারি?', duration: 6 },
      { speaker: 'customer', text: 'হ্যালো, কাস্টম CRM ইন্টিগ্রেশন প্রজেক্ট সম্পর্কে কথা বলার জন্য আমার কারোর সাথে যোগাযোগ করা প্রয়োজন।', duration: 4 },
      { speaker: 'agent', text: 'আমি সাহায্য করতে পারি। আমাদের টিম এখন একটি সিস্টেম ডেপ্লয়মেন্টে ব্যস্ত আছে, তবে আমি একটি কল ব্যাক শিডিউল করতে পারি বা সাপোর্ট টিকিট তৈরি করতে পারি। আপনি কোনটি চান?', duration: 8 },
      { speaker: 'customer', text: 'একটি কল ব্যাক হলে ভালো হয়। আগামীকাল বিকেলে খুব ভালো হবে।', duration: 4 },
      { speaker: 'agent', text: 'বুঝতে পেরেছি। আমি আপনার অনুরোধ নথিভুক্ত করেছি। একজন ইন্টিগ্রেশন বিশেষজ্ঞ আগামীকাল মঙ্গলবার দুপুর ২টা থেকে ৪টার মধ্যে আপনাকে কল করবেন। কনফার্মেশন বিবরণ আপনার মোবাইলে পাঠানো হয়েছে।', duration: 8 },
      { speaker: 'customer', text: 'অসাধারণ, ধন্যবাদ সারা। এটি খুব দ্রুত ছিল।', duration: 3 },
      { speaker: 'agent', text: 'আমার আনন্দ। আপনার দিনটি ভালো কাটুক!', duration: 3 }
    ],
    Arabic: [
      { speaker: 'agent', text: 'شكراً لاتصالك بعمليات QEVN. أنا سارة، موظفة الاستقبال بنظام الذكاء الاصطناعي. كيف يمكنني توجيه مكالمتك اليوم؟', duration: 6 },
      { speaker: 'customer', text: 'مرحباً، أحتاج إلى التحدث مع شخص ما بخصوص مشروع تكامل نظام إدارة علاقات العملاء مخصص.', duration: 4 },
      { speaker: 'agent', text: 'يمكنني المساعدة في ذلك. فريق هندسة المشاريع لدينا مشغول حالياً، ولكن يمكنني جدولة مكالمة عائدة أو إنشاء تذكرة دعم. أيهما تفضل؟', duration: 8 },
      { speaker: 'customer', text: 'مكالمة عائدة جيدة. غداً بعد الظهر سيكون ممتازاً.', duration: 4 },
      { speaker: 'agent', text: 'مفهوم. قمت بتسجيل طلبك. سيتصل بك خبير تكامل غداً الثلاثاء بين الساعة 2 و 4 مساءً. تم إرسال التفاصيل إلى هاتفك المحمول.', duration: 8 },
      { speaker: 'customer', text: 'رائع، شكراً سارة. كان ذلك سريعاً.', duration: 3 },
      { speaker: 'agent', text: 'على الرحب والسعة. أتمنى لك يوماً سعيداً!', duration: 3 }
    ]
  },
  sales: {
    English: [
      { speaker: 'agent', text: 'Hi, this is James from QEVN. I noticed you requested an audit of your billing workflows. Am I speaking with the founder?', duration: 6 },
      { speaker: 'customer', text: 'Yes, this is David, the founder. We are spending too much time syncing invoice data manually.', duration: 5 },
      { speaker: 'agent', text: 'I completely understand, David. Most high-growth agencies lose about 12 hours a week on manual invoice syncing. Our custom AI billing agents automate this flow from invoice creation directly to CRM sync. What accounting software do you currently use?', duration: 10 },
      { speaker: 'customer', text: 'We use QuickBooks and HubSpot CRM.', duration: 3 },
      { speaker: 'agent', text: 'Perfect. We have pre-built secure adapters for both. We can build a workflow that automatically triggers QuickBooks entries, checks for payment clearance, and updates your HubSpot deal pipeline in real-time. Would you like to review a custom blueprint?', duration: 9 },
      { speaker: 'customer', text: 'Definitely. Send it over.', duration: 2 },
      { speaker: 'agent', text: 'Great. Sending the custom blueprint link to your email right now. Let\'s get your time back!', duration: 5 }
    ],
    Hinglish: [
      { speaker: 'agent', text: 'Hi, main QEVN se James baat kar raha hoon. Aapne billing process automated karne ke liye request kiya tha. Kya meri baat David ji se ho rahi hai?', duration: 7 },
      { speaker: 'customer', text: 'Haan, main David bol raha hoon. Humara kaafi time manual invoicing me waist hota hai.', duration: 4 },
      { speaker: 'agent', text: 'Bilkul samajh sakta hoon David ji. Custom billing agent se aapka QuickBooks aur HubSpot CRM automatically sync ho jayenge. Aapko manually ek entry bhi nahi karni padegi.', duration: 8 },
      { speaker: 'customer', text: 'Ye safe toh hai na? client data leak toh nahi hoga?', duration: 4 },
      { speaker: 'agent', text: 'Security humari top priority hai. System aapke local secure cloud instance par deploy hoga. Data complete safe rahega aur humara ispar koi access nahi hoga.', duration: 8 },
      { speaker: 'customer', text: 'Ok, please process share kijiye.', duration: 3 },
      { speaker: 'agent', text: 'Awesome. Maine details aur client case-study aapke WhatsApp par send kar di hai. Apan kal baat karte hain.', duration: 6 }
    ],
    Hindi: [
      { speaker: 'agent', text: 'नमस्ते, मैं QEVN से जेम्स हूँ। मैंने देखा कि आपने अपने बिलिंग वर्कफ़्लो के ऑडिट का अनुरोध किया था। क्या मेरी बात फाउंडर से हो रही है?', duration: 7 },
      { speaker: 'customer', text: 'हाँ, मैं डेविड बोल रहा हूँ। हम इनवॉइस डेटा को मैन्युअल रूप से सिंक करने में बहुत अधिक समय खर्च कर रहे हैं।', duration: 5 },
      { speaker: 'agent', text: 'मैं पूरी तरह से समझता हूँ, डेविड। अधिकांश तेजी से बढ़ने वाली एजेंसियां मैन्युअल इनवॉइस सिंक करने में सप्ताह में लगभग 12 घंटे खो देती हैं। हमारे कस्टम AI बिलिंग एजेंट्स इस फ्लो को सीधे इनवॉइस क्रिएशन से CRM सिंक तक ऑटोमेट करते हैं। आप वर्तमान में कौन सा अकाउंटिंग सॉफ़्टवेयर उपयोग करते हैं?', duration: 10 },
      { speaker: 'customer', text: 'हम QuickBooks और HubSpot CRM का उपयोग करते हैं।', duration: 3 },
      { speaker: 'agent', text: 'बढ़िया। हमारे पास दोनों के लिए प्री-बिल्ट सिक्योर एडेप्टर हैं। हम एक ऐसा वर्कफ़्लो बना सकते हैं जो स्वचालित रूप से QuickBooks प्रविष्टियों को ट्रिगर करता है, भुगतान निकासी की जाँच करता है, और वास्तविक समय में आपके HubSpot डील पाइपलाइन को अपडेट करता है। क्या आप एक कस्टम ब्लूप्रिंट देखना चाहेंगे?', duration: 9 },
      { speaker: 'customer', text: 'निश्चित रूप से। इसे भेज दीजिए।', duration: 2 },
      { speaker: 'agent', text: 'बहुत बढ़िया। कस्टम ब्लूप्रिंट लिंक अभी आपके ईमेल पर भेज रहा हूँ। आइए आपका समय बचाएं!', duration: 5 }
    ],
    Gujarati: [
      { speaker: 'agent', text: 'નમસ્તે, હું QEVN માંથી જેમ્સ છું. મેં નોંધ્યું કે તમે તમારા બિલિંગ વર્કફ્લોના ઓડિટ માટે વિનંતી કરી હતી. શું હું ફાઉન્ડર સાથે વાત કરી રહ્યો છું?', duration: 7 },
      { speaker: 'customer', text: 'હા, હું ડેવિડ બોલી રહ્યો છું. અમે ઇનવોઇસ ડેટા મેન્યુઅલી સિંક કરવામાં ઘણો સમય બગાડી રહ્યા છીએ.', duration: 5 },
      { speaker: 'agent', text: 'હું સમજી શકું છું, ડેવિડ. મોટાભાગની એજન્સીઓ અઠવાડિયામાં લગભગ ૧૨ કલાક મેન્યુઅલ ઇનવોઇસ સિંકિંગમાં ગુમાવે છે. અમારા કસ્ટમ AI બિલિંગ એજન્ટ્સ ઇનવોઇસ ક્રિએશનથી સીધા CRM સિંક સુધી આ ફ્લો ઓટોમેટ કરે છે. તમે કયો એકાઉન્ટિંગ સોફ્ટવેર વાપરો છો?', duration: 10 },
      { speaker: 'customer', text: 'અમે QuickBooks અને HubSpot CRM નો ઉપયોગ કરીએ છીએ.', duration: 3 },
      { speaker: 'agent', text: 'સરસ. અમારી પાસે બંને માટે પ્રી-બિલ્ટ સિક્યોર એડેપ્ટર્સ છે. અમે એવો વર્કફ્લો બનાવી શકીએ જે આપોઆપ QuickBooks એન્ટ્રી ટ્રિગર કરે અને રિયલ-ટાઇમમાં HubSpot અપડેટ કરે. શું તમે કસ્ટમ બ્લુપ્રિન્ટ જોવા માંગો છો?', duration: 9 },
      { speaker: 'customer', text: 'ચોક્કસ. મોકલી આપો.', duration: 2 },
      { speaker: 'agent', text: 'ખૂબ સરસ. કસ્ટમ બ્લુપ્રિન્ટ લિંક તમારા ઈમેલ પર મોકલી રહ્યો છું. ચાલો તમારો સમય બચાવીએ!', duration: 5 }
    ],
    Marathi: [
      { speaker: 'agent', text: 'नमस्ते, मी QEVN मधून जेम्स बोलतोय. तुम्ही तुमच्या बिलिंग वर्कफ्लोच्या ऑडिटची विनंती केली होती. माझी फाउंडरशी बोलणे चालू आहे का?', duration: 7 },
      { speaker: 'customer', text: 'होय, मी डेव्हिड बोलतोय. आम्ही मॅन्युअली इनव्हॉइस डेटा सिंक करण्यात खूप वेळ घालवत आहोत।', duration: 5 },
      { speaker: 'agent', text: 'मी पूर्णपणे समजू शकतो, डेव्हिड. मॅन्युअल इनव्हॉइस सिंक करण्यात एजन्सींचे आठवड्यातून सुमारे १२ तास वाया जातात. आमचे कस्टम AI बिलिंग एजंट्स इनव्हॉइस तयार करण्यापासून थेट CRM सिंकपर्यंत हा फ्लो स्वयंचलित करतात. तुम्ही कोणते अकाउंटिंग सॉफ्टवेअर वापरता?', duration: 10 },
      { speaker: 'customer', text: 'आम्ही QuickBooks आणि HubSpot CRM वापरतो।', duration: 3 },
      { speaker: 'agent', text: 'उत्कृष्ट. आमच्याकडे दोन्हीसाठी सुरक्षित अडॅप्टर आहेत. आम्ही असा वर्कफ्लो बनवू शकतो जो आपोआप QuickBooks नोंदी ट्रिगर करतो आणि HubSpot डील पाईपलाईन अपडेट करतो. तुम्ही कस्टमाइज्ड ब्ल्यूप्रिंट पाहू इच्छिता?', duration: 9 },
      { speaker: 'customer', text: 'नक्कीच, पाठवून द्या।', duration: 2 },
      { speaker: 'agent', text: 'ग्रेट. कस्टम ब्ल्यूप्रिंट लिंक आता तुमच्या ईमेलवर पाठवत आहे. चला तुमचा वेळ वाचवूया!', duration: 5 }
    ],
    Tamil: [
      { speaker: 'agent', text: 'வணக்கம், நான் QEVN இலிருந்து ஜேம்ஸ். உங்கள் பில்லிங் பணிப்பாய்வுகளை தணிக்கை செய்யக் கோரியதை கவனித்தேன். நான் நிறுவனரிடம் பேசுகிறேனா?', duration: 7 },
      { speaker: 'customer', text: 'ஆம், நான் டேவிட். இன்வாய்ஸ் தரவை கைமுறையாக ஒத்திசைக்க நாங்கள் அதிக நேரம் செலவிடுகிறோம்.', duration: 5 },
      { speaker: 'agent', text: 'எனக்கு புரிகிறது, டேவிட். வளர்ந்து வரும் ஏஜென்சிகள் கைமுறையாக ஒத்திசைக்க வாரத்திற்கு 12 மணிநேரம் வரை இழக்கின்றன. எங்கள் கஸ்டம் AI பில்லிங் ஏஜெண்டுகள் இன்வாய்ஸ் உருவாக்கம் முதல் CRM வரை தானியங்குபடுத்துகின்றனர். நீங்கள் என்ன கணக்கியல் மென்பொருளைப் பயன்படுத்துகிறீர்கள்?', duration: 10 },
      { speaker: 'customer', text: 'நாங்கள் QuickBooks மற்றும் HubSpot CRM ஐப் பயன்படுத்துகிறோம்.', duration: 3 },
      { speaker: 'agent', text: 'அருமை. இரண்டிற்கும் எங்களிடம் முன்பே கட்டமைக்கப்பட்ட அடாப்டர்கள் உள்ளன. QuickBooks உள்ளீடுகளை தானாக தூண்டி, HubSpot ஒப்பந்த பைப்லைனை நிகழ்நேரத்தில் புதுப்பிக்கும் பணிப்பாய்வை நாங்கள் உருவாக்க முடியும். தனிப்பயன் வரைபடத்தை மதிப்பாய்வு செய்ய விரும்புகிறீர்களா?', duration: 9 },
      { speaker: 'customer', text: 'நிச்சயமாக. அனுப்பி வையுங்கள்.', duration: 2 },
      { speaker: 'agent', text: 'சிறப்பு. தனிப்பயன் வரைபட இணைப்பை உங்கள் மின்னஞ்சலுக்கு இப்போது அனுப்புகிறேன். உங்கள் நேரத்தை மிச்சப்படுத்துவோம்!', duration: 5 }
    ],
    Telugu: [
      { speaker: 'agent', text: 'నమస్తే, నేను QEVN నుండి జేమ్స్. మీరు మీ బిల్లింగ్ వర్క్‌ఫ్లోల ఆడిట్‌ను అభ్యర్థించడం గమనించాను. నేను ఫౌండర్‌తో మాట్లాడుతున్నానా?', duration: 7 },
      { speaker: 'customer', text: 'అవును, నేను డేవిడ్, ఫౌండర్‌ను. ఇన్‌వాయిస్ డేటాను మాన్యువల్‌గా సింక్ చేయడానికి చాలా సమయం పడుతోంది.', duration: 5 },
      { speaker: 'agent', text: 'నేను అర్థం చేసుకోగలను, డేవిడ్. చాలా ఏజెన్సీలు మాన్యువల్ ఇన్‌వాయిస్ సింక్ కోసం వారానికి 12 గంటలు కోల్పోతాయి. మా కస్టమ్ AI బిల్లింగ్ ఏజెంట్లు దీనిని ఆటోమేట్ చేస్తారు. మీరు ఏ అకౌంటింగ్ సాఫ్ట్‌వేర్ ఉపయోగిస్తున్నారు?', duration: 10 },
      { speaker: 'customer', text: 'మేము QuickBooks మరియు HubSpot CRM ఉపయోగిస్తాము.', duration: 3 },
      { speaker: 'agent', text: 'అద్భుతం. రెండింటికీ మా దగ్గర సురక్షితమైన అడాప్టర్లు ఉన్నాయి. QuickBooks ఎంట్రీలను ఆటోమేటిక్‌గా ట్రిగ్గర్ చేసి, మీ HubSpot డీల్‌ను రియల్ టైమ్‌లో అప్‌డేట్ చేసే వర్క్‌фలోను మేము నిర్మిస్తాము. కస్టమ్ బ్లూప్రింట్ చూడాలనుకుంటున్నారా?', duration: 9 },
      { speaker: 'customer', text: 'తప్పకుండా. పంపించండి.', duration: 2 },
      { speaker: 'agent', text: 'మంచిది. కస్టమ్ బ్లూప్రింట్ లింక్‌ను ఇప్పుడే మీ ఈమెయిల్‌కు పంపుతున్నాను. మీ సమయాన్ని ఆదా చేద్దాం!', duration: 5 }
    ],
    Bengali: [
      { speaker: 'agent', text: 'হ্যালো, আমি QEVN থেকে জেমস। আমি দেখেছি যে আপনি আপনার বিলিং ওয়ার্কফ্লো অডিট করার অনুরোধ করেছিলেন। আমি কি ফাউন্ডারের সাথে কথা বলছি?', duration: 7 },
      { speaker: 'customer', text: 'হ্যাঁ, আমি ডেভিড। ইনভয়েস ডেটা ম্যানুয়ালি সিঙ্ক করতে আমাদের অনেক সময় নষ্ট হচ্ছে।', duration: 5 },
      { speaker: 'agent', text: 'আমি বুঝতে পারছি, ডেভিড। বেশিরভাগ এজেন্সি ম্যানুয়াল ইনভয়েস সিঙ্ক করতে সপ্তাহে প্রায় ১২ ঘণ্টা সময় নষ্ট করে। আমাদের কাস্টম AI বিলিং এজেন্ট এই সম্পূর্ণ প্রবাহকে স্বয়ংক্রিয় করে। আপনি কোন অ্যাকাউন্টিং সফটওয়্যার ব্যবহার করেন?', duration: 10 },
      { speaker: 'customer', text: 'আমরা QuickBooks এবং HubSpot CRM ব্যবহার করি।', duration: 3 },
      { speaker: 'agent', text: 'চমৎকার। আমাদের কাছে উভয়ের জন্যই নিরাপদ অ্যাডাপ্টার রয়েছে। আমরা এমন একটি ওয়ার্কফ্লো তৈরি করতে পারি যা QuickBooks এন্ট্রি ট্রিপার করবে এবং রিয়াল-টাইমে HubSpot আপডেট করবে। আপনি কি একটি কাস্টম ব্লুপ্রিন্ট দেখতে চান?', duration: 9 },
      { speaker: 'customer', text: 'অবশ্যই। পাঠিয়ে দিন।', duration: 2 },
      { speaker: 'agent', text: 'দারুণ। কাস্টম ব্লুপ্রিন্ট লিঙ্কটি আপনার ইমেলে এখনই পাঠাচ্ছি। চলুন আপনার সময় বাঁচাই!', duration: 5 }
    ],
    Arabic: [
      { speaker: 'agent', text: 'مرحباً، أنا جيمس من QEVN. لاحظت أنك طلبت تدقيقاً لسير عمل الفواتير الخاص بك. هل أتحدث مع المؤسس؟', duration: 7 },
      { speaker: 'customer', text: 'نعم، أنا ديفيد، المؤسس. نقضي وقتاً طويلاً في مزامنة بيانات الفواتير يدوياً.', duration: 5 },
      { speaker: 'agent', text: 'أفهم ذلك تماماً، ديفيد. تفقد معظم الوكالات السريعة النمو حوالي 12 ساعة أسبوعياً في المزامنة اليدوية. تعمل خوادم الفواتير الذكية المخصصة لدينا على أتمتة هذا التدفق بالكامل. ما هو برنامج المحاسبة الذي تستخدمه حالياً؟', duration: 10 },
      { speaker: 'customer', text: 'نستخدم QuickBooks و HubSpot CRM.', duration: 3 },
      { speaker: 'agent', text: 'ممتاز. لدينا محولات آمنة مسبقة الصنع لكليهما. يمكننا بناء سير عمل يقوم تلقائياً بتحديث صفقات HubSpot الخاصة بك في الوقت الفعلي. هل تود مراجعة مخطط مخصص؟', duration: 9 },
      { speaker: 'customer', text: 'بالتأكيد. أرسله لي.', duration: 2 },
      { speaker: 'agent', text: 'رائع. سأرسل رابط المخطط المخصص إلى بريدك الإلكتروني الآن. لنسترجع وقتك الثمين!', duration: 5 }
    ]
  },
  booking: {
    English: [
      { speaker: 'agent', text: 'Hello, this is QEVN scheduling team. I am calling to confirm your consultation scheduled for Wednesday at 10 AM. Will you be attending?', duration: 6 },
      { speaker: 'customer', text: 'Hi, actually I have a client conflict on Wednesday. Can we reschedule to Thursday?', duration: 5 },
      { speaker: 'agent', text: 'No problem at all. Let me check our availability for Thursday. I have open slots at 11:30 AM, 2 PM, and 4 PM. Do any of these work for you?', duration: 7 },
      { speaker: 'customer', text: 'Thursday at 2 PM works perfectly.', duration: 3 },
      { speaker: 'agent', text: 'Got it. I have rescheduled your strategy call to Thursday at 2 PM. You will receive an updated Calendar invite and confirmation email in a few seconds.', duration: 8 },
      { speaker: 'customer', text: 'Got the invite. Thank you so much.', duration: 3 },
      { speaker: 'agent', text: 'Excellent. Looking forward to our conversation. Goodbye!', duration: 3 }
    ],
    Hinglish: [
      { speaker: 'agent', text: 'Hello, QEVN scheduling team se confirmation call. Wednesday subah 10 baje aapka call scheduled hai. Kya aap confirm hain?', duration: 7 },
      { speaker: 'customer', text: 'Hi, Wednesday ko main thoda busy hoon. Thursday reschedule ho sakta hai?', duration: 4 },
      { speaker: 'agent', text: 'Bilkul ho sakta hai. Thursday ko subah 11:30, dopahar 2 baje ya shaam 4 baje ka slot khali hai. Kaunsa time change karoon?', duration: 7 },
      { speaker: 'customer', text: 'Thursday dopahar 2 baje confirm kar dijiye.', duration: 3 },
      { speaker: 'agent', text: 'Rescheduled! Thursday dopahar 2 baje confirm ho gaya hai. Google Calendar invite maine send kar diya hai aapko.', duration: 6 },
      { speaker: 'customer', text: 'Invite mil gaya. Thank you, bye.', duration: 3 },
      { speaker: 'agent', text: 'Thank you! Goodbye.', duration: 2 }
    ],
    Hindi: [
      { speaker: 'agent', text: 'नमस्ते, यह QEVN शेड्यूलिंग टीम है। मैं बुधवार को सुबह 10 बजे निर्धारित आपके परामर्श की पुष्टि करने के लिए कॉल कर रही हूँ। क्या आप शामिल होंगे?', duration: 6 },
      { speaker: 'customer', text: 'नमस्ते, वास्तव में बुधवार को मेरा एक क्लाइंट के साथ काम है। क्या हम गुरुवार को रीशेड्यूल कर सकते हैं?', duration: 5 },
      { speaker: 'agent', text: 'बिल्कुल कोई बात नहीं। मुझे गुरुवार की उपलब्धता देखने दीजिए। मेरे पास सुबह 11:30 बजे, दोपहर 2 बजे और शाम 4 बजे स्लॉट खाली हैं। क्या इनमें से कोई आपके लिए सही है?', duration: 7 },
      { speaker: 'customer', text: 'गुरुवार दोपहर 2 बजे का समय बिल्कुल सही रहेगा।', duration: 3 },
      { speaker: 'agent', text: 'समझ गई। मैंने आपकी रणनीति कॉल गुरुवार दोपहर 2 बजे रीशेड्यूल कर दी है। आपको कुछ ही सेकंड में अपडेटेड कैलेंडर आमंत्रण और पुष्टि ईमेल मिल जाएगा।', duration: 8 },
      { speaker: 'customer', text: 'इनविटेशन मिल गया। बहुत-बहुत धन्यवाद।', duration: 3 },
      { speaker: 'agent', text: 'बहुत बढ़िया। हमारी बातचीत की प्रतीक्षा रहेगी। अलविदा!', duration: 3 }
    ],
    Gujarati: [
      { speaker: 'agent', text: 'નમસ્તે, આ QEVN શેડ્યૂલિંગ ટીમ છે. હું બુધવારે સવારે ૧૦ વાગ્યે નક્કી કરેલ કન્સલ્ટેશન કન્ફર્મ કરવા કોલ કરી રહી છું. શું તમે ઉપસ્થિત રહેશો?', duration: 6 },
      { speaker: 'customer', text: 'નમસ્તે, ખરેખર બુધવારે મારે એક ક્લાયન્ટ મીટિંગ છે. શું આપણે ગુરુવારે રીશેડ્યૂલ કરી શકીએ?', duration: 5 },
      { speaker: 'agent', text: 'કોઈ વાંધો નથી. મને ગુરુવારની અવેલેબિલિટી જોવા દો. ગુરુવારે સવારે ૧૧:૩૦, બપોરે ૨ અને સાંજે ૪ વાગ્યાના સ્લોટ ખાલી છે. શું આમાંથી કોઈ તમારા માટે અનુકૂળ છે?', duration: 7 },
      { speaker: 'customer', text: 'ગુરુવારે બપોરે ૨ વાગ્યાનો સમય યોગ્ય રહેશે.', duration: 3 },
      { speaker: 'agent', text: 'બરાબર છે. મેં ગુરુવારે બપોરે ૨ વાગ્યે તમારી મીટિંગ રીશેડ્યૂલ કરી દીધી છે. તમને થોડી જ સેકન્ડોમાં અપડેટેડ કેલેન્ડર ઇન્વાઇટ મળી જશે.', duration: 8 },
      { speaker: 'customer', text: 'ઇન્વાઇટ મળી ગયું. ખુબ ખુબ આભાર.', duration: 3 },
      { speaker: 'agent', text: 'સરસ. આપણી વાતચીતની રાહ જોઈશું. આવજો!', duration: 3 }
    ],
    Marathi: [
      { speaker: 'agent', text: 'हॅलो, मी QEVN शेड्युलिंग टीममधून बोलतेय. बुधवारी सकाळी १० वाजता असलेल्या आपल्या कन्सल्टेशनची पुष्टी करण्यासाठी मी कॉल केला आहे. आपण उपस्थित राहणार का?', duration: 6 },
      { speaker: 'customer', text: 'हॅलो, बुधवारी मला एक क्लायंट मीटिंग आहे. आपण गुरुवारी रिशेड्युल करू शकतो का?', duration: 5 },
      { speaker: 'agent', text: 'काही हरकत नाही. मला गुरुवारची उपलब्धता तपासू द्या. आमच्याकडे सकाळी ११:३०, दुपारी २:०० आणि संध्याकाळी ४:०० चे स्लॉट मोकळे आहेत. यापैकी कोणती वेळ चालेल?', duration: 7 },
      { speaker: 'customer', text: 'गुरुवारी दुपारी २ वाजताची वेळ अगदी योग्य राहील.', duration: 3 },
      { speaker: 'agent', text: 'नक्कीच. मी आपली स्ट्रॅटेजी कॉल गुरुवारी दुपारी २ वाजता रिशेड्युल केली आहे. तुम्हाला अपडेटेड कॅलेंडर इनविटेशन आणि ई-मेल मिळून जाईल.', duration: 8 },
      { speaker: 'customer', text: 'इनविटेशन मिळाले. धन्यवाद.', duration: 3 },
      { speaker: 'agent', text: 'उत्कृष्ट. आपल्या भेटीची वाट पाहत आहोत. बाय!', duration: 3 }
    ],
    Tamil: [
      { speaker: 'agent', text: 'வணக்கம், இது QEVN திட்டமிடல் குழு. புதன்கிழமை காலை 10 மணிக்குத் திட்டமிடப்பட்ட உங்கள் ஆலோசனையை உறுதிப்படுத்த நான் அழைக்கிறேன். நீங்கள் கலந்துகொள்வீர்களா?', duration: 6 },
      { speaker: 'customer', text: 'வணக்கம், உண்மையில் புதன்கிழமை எனக்கு ஒரு வாடிக்கையாளர் சந்திப்பு உள்ளது. நாம் வியாழக்கிழமைக்கு மாற்றலாமா?', duration: 5 },
      { speaker: 'agent', text: 'நிச்சயமாக. வியாழக்கிழமை எங்களின் நேரத்தை சரிபார்க்கிறேன். காலை 11:30, மதியம் 2 மற்றும் மாலை 4 மணி ஆகிய நேரங்கள் உள்ளன. இதில் எது உங்களுக்கு வசதி?', duration: 7 },
      { speaker: 'customer', text: 'வியாழன் மதியம் 2 மணி எனக்கு சரியாக இருக்கும்.', duration: 3 },
      { speaker: 'agent', text: 'புரிந்தது. வியாழக்கிழமை மதியம் 2 மணிக்கு ஆலோசனையை மாற்றியுள்ளேன். புதுப்பிக்கப்பட்ட காலண்டர் அழைப்பும் உறுதிப்படுத்தல் மின்னஞ்சலும் உங்களுக்கு அனுப்பப்படும்.', duration: 8 },
      { speaker: 'customer', text: 'அழைப்பு கிடைத்தது. மிக்க நன்றி.', duration: 3 },
      { speaker: 'agent', text: 'அருமை. உங்களோடு பேசக் காத்திருக்கிறேன். விடைபெறுகிறேன்!', duration: 3 }
    ],
    Telugu: [
      { speaker: 'agent', text: 'QEVN ఆపరేషన్స్ కి కాల్ చేసినందుకు ధన్యవాదాలు. నేను సారా, మీ AI రిసెప్షనిస్ట్. ఈరోజు మీ కాల్ ని ఎవరికి బదిలీ చేయాలి?', duration: 6 },
      { speaker: 'customer', text: 'నమస్తే, నేను కస్టమ్ CRM ఇంటిగ్రేషన్ ప్రాజెక్ట్ గురించి మాట్లాడాలి.', duration: 5 },
      { speaker: 'agent', text: 'నేను సహాయం చేయగలను. మా ఇంజనీరింగ్ బృందం ప్రస్తుతం సిస్టమ్ డిప్లాయ్‌మెంట్‌లో బిజీగా ఉంది, కానీ నేను కాల్ బ్యాక్ షెడ్యూల్ చేయగలను లేదా సపోర్ట్ టికెట్ క్రియేట్ చేయగలను. మీకు ఏది కావాలి?', duration: 7 },
      { speaker: 'customer', text: 'కాల్ బ్యాక్ బాగుంటుంది. రేపు మధ్యాహ్నం సమయం సరిపోతుంది.', duration: 3 },
      { speaker: 'agent', text: 'అలాగే, మీ అభ్యర్థనను రికార్డ్ చేసాను. మా ఇంటిగ్రేషన్ నిపుణుడు రేపు మంగళవారం మధ్యాహ్నం 2 నుండి 4 గంటల మధ్య కాల్ చేస్తారు. వివరాలు మీ మొబైల్‌కు పంపబడ్డాయి.', duration: 8 },
      { speaker: 'customer', text: 'చాలా బాగుంది, ధన్యవాదాలు సారా. ఇది చాలా వేగంగా జరిగింది.', duration: 3 },
      { speaker: 'agent', text: 'నా సంతోషం. మీ రోజు శుభప్రదంగా సాగాలి!', duration: 3 }
    ],
    Bengali: [
      { speaker: 'agent', text: 'হ্যালো, আমি QEVN শিডিউলিং টিম থেকে বলছি। বুধবার সকাল ১০টায় নির্ধারিত আপনার কনসালটেশন নিশ্চিত করার জন্য আমি কল করছি। আপনি কি উপস্থিত থাকবেন?', duration: 6 },
      { speaker: 'customer', text: 'হ্যালো, বুধবার আসলে আমার একটি ক্লায়েন্ট মিটিং আছে। আমরা কি বৃহস্পতিবার রিশিডিউল করতে পারি?', duration: 5 },
      { speaker: 'agent', text: 'কোনো সমস্যা নেই। আমি বৃহস্পতিবারের সময় চেক করছি। সকাল ১১:৩০, দুপুর ২টা এবং বিকেল ৪টায় স্লট ফাঁকা আছে। কোনটি আপনার জন্য সুবিধা?', duration: 7 },
      { speaker: 'customer', text: 'বৃহস্পতিবার দুপুর ২টার সময়টি একদম ঠিক আছে।', duration: 3 },
      { speaker: 'agent', text: 'বুঝতে পেরেছি। আমি আপনার স্ট্র্যাটেজি কল বৃহস্পতিবার দুপুর ২টায় রিশিডিউল করে দিয়েছি। আপনি কয়েক সেকেন্ডের মধ্যে একটি কনফার্মেশন মেল পেয়ে যাবেন।', duration: 8 },
      { speaker: 'customer', text: 'ইনভাইট পেয়েছি। অনেক ধন্যবাদ।', duration: 3 },
      { speaker: 'agent', text: 'চমৎকার। আপনার সাথে কথা বলার অপেক্ষায় রইলাম। বিদায়!', duration: 3 }
    ],
    Arabic: [
      { speaker: 'agent', text: 'مرحباً، هذا فريق جدولة QEVN. أتصل لتأكيد استشارتك المقررة يوم الأربعاء في الساعة 10 صباحاً. هل ستحضر؟', duration: 6 },
      { speaker: 'customer', text: 'مرحباً، لدي تعارض مع أحد العملاء يوم الأربعاء. هل يمكننا إعادة الجدولة ليوم الخميس؟', duration: 5 },
      { speaker: 'agent', text: 'لا توجد مشكلة على الإطلاق. دعني أتحقق من توفرنا ليوم الخميس. لدي مواعيد متاحة في 11:30 صباحاً، و 2 ظهراً، و 4 مساءً. هل يناسبك أي منها؟', duration: 7 },
      { speaker: 'customer', text: 'الخميس الساعة 2 ظهراً يناسبني تماماً.', duration: 3 },
      { speaker: 'agent', text: 'تم الأمر. قمت بإعادة جدولة مكالمتنا الاستراتيجية إلى يوم الخميس الساعة 2 ظهراً. ستتلقى دعوة تقويم محدثة ورسالة تأكيد إلكترونية خلال ثوانٍ.', duration: 8 },
      { speaker: 'customer', text: 'تلقيت الدعوة. شكراً جزيلاً لك.', duration: 3 },
      { speaker: 'agent', text: 'ممتاز. نتطلع للتحدث معك. وداعاً!', duration: 3 }
    ]
  },
  support: {
    English: [
      { speaker: 'agent', text: 'Hi there, thank you for reaching out to customer care. This is your AI assistant. How can I help you check your current order?', duration: 6 },
      { speaker: 'customer', text: 'Hi, my shipment with ID 9942 was supposed to arrive today, but it is showing pending.', duration: 5 },
      { speaker: 'agent', text: 'Let me track shipment ID 9942 for you... I see that it reached the local transit hub this morning. However, there is a minor local dispatch delay due to heavy rain. Delivery is now scheduled for tomorrow before 12 PM. Is that alright?', duration: 9 },
      { speaker: 'customer', text: 'Yes, that is fine. Can you send me the delivery agent number when dispatched?', duration: 4 },
      { speaker: 'agent', text: 'Absolutely. As soon as the rider takes it out for delivery tomorrow morning, I will auto-trigger a WhatsApp message with their direct contact details.', duration: 7 },
      { speaker: 'customer', text: 'Perfect. Thanks for the help.', duration: 2 },
      { speaker: 'agent', text: 'Anytime! Let me know if you need anything else.', duration: 3 }
    ],
    Hinglish: [
      { speaker: 'agent', text: 'Hi, QEVN customer care hub me aapka swagat hai. Main order query assistant hoon. Delivery status check karne me help karoon?', duration: 6 },
      { speaker: 'customer', text: 'Haan, mera order ID 9942 aaj aana tha but abhi tak nahi aaya.', duration: 4 },
      { speaker: 'agent', text: 'Ek second rukiye, track karti hoon... order local hub me subah pahunch chuka hai. Baarish ki wajah se delivery thodi delay ho gayi hai. Kal dopahar 12 baje se pehle deliver ho jayega.', duration: 9 },
      { speaker: 'customer', text: 'Ok, delivery boy ka number mil jayega kal?', duration: 3 },
      { speaker: 'agent', text: 'Haan ji, jaise hi rider dispatch karega kal subah, aapse direct number WhatsApp par share ho jayega.', duration: 5 },
      { speaker: 'customer', text: 'Ok fine. Thank you so much.', duration: 3 },
      { speaker: 'agent', text: 'Khushi hui help karke! Bye.', duration: 2 }
    ],
    Hindi: [
      { speaker: 'agent', text: 'नमस्ते, कस्टमर केयर पर संपर्क करने के लिए धन्यवाद। मैं आपका AI सहायक हूँ। मैं आपके वर्तमान ऑर्डर की जांच कैसे कर सकता हूँ?', duration: 6 },
      { speaker: 'customer', text: 'नमस्ते, मेरी शिपमेंट आईडी 9942 आज आने वाली थी, लेकिन यह पेंडिंग दिखा रही है।', duration: 5 },
      { speaker: 'agent', text: 'मुझे आपके लिए शिपमेंट आईडी 9942 को ट्रैक करने दीजिए... मैं देख रहा हूँ कि यह आज सुबह स्थानीय हब पर पहुंच गई है। हालांकि, भारी बारिश के कारण स्थानीय डिलीवरी में थोड़ी देरी हुई है। डिलीवरी अब कल दोपहर 12 बजे से पहले निर्धारित है। क्या यह ठीक रहेगा?', duration: 9 },
      { speaker: 'customer', text: 'हाँ, ठीक है। क्या आप मुझे डिलीवरी एजेंट का नंबर भेज सकते हैं जब वह रवाना हो?', duration: 4 },
      { speaker: 'agent', text: 'बिल्कुल। जैसे ही राइडर कल सुबह डिलीवरी के लिए निकलेगा, मैं उनके सीधे संपर्क विवरण के साथ स्वचालित रूप से व्हाट्सएप मैसेज ट्रिगर कर दूँगा।', duration: 7 },
      { speaker: 'customer', text: 'बढ़िया। मदद के लिए धन्यवाद।', duration: 2 },
      { speaker: 'agent', text: 'कभी भी! मुझे बताएं कि क्या आपको किसी और चीज़ की आवश्यकता है।', duration: 3 }
    ],
    Gujarati: [
      { speaker: 'agent', text: 'નમસ્તે, કસ્ટમર કેરમાં સંપર્ક કરવા બદલ આભાર. હું તમારો AI આસિસ્ટન્ટ છું. હું તમારા ઓર્ડરની વિગતો જાણવામાં કેવી રીતે મદદ કરી શકું?', duration: 6 },
      { speaker: 'customer', text: 'નમસ્તે, મારો ઓર્ડર ID 9942 આજે આવવાનો હતો, પણ તે હજી પેન્ડિંગ બતાવે છે.', duration: 5 },
      { speaker: 'agent', text: 'મને ઓર્ડર ID 9942 ટ્રેક કરવા દો... હું જોઈ શકું છું કે તે આજે સવારે લોકલ હબ પર પહોંચી ગયો છે. જો કે, ભારે વરસાદને કારણે લોકલ ડિલિવરીમાં થોડો વિલંબ થયો છે. ઓર્ડર હવે આવતીકાલે બપોરે ૧૨ વાગ્યા પહેલા ડિલિવર થઈ જશે. શું તે ચાલશે?', duration: 9 },
      { speaker: 'customer', text: 'હા, વાંધો નહીં. ડિલિવરી બોયનો નંબર મોકલી આપશો?', duration: 4 },
      { speaker: 'agent', text: 'ચોક્કસ. આવતીકાલે સવારે જેમ જ ડિલિવરી બોય નીકળશે, હું સીધો નંબર વોટ્સએપ પર મોકલી આપીશ.', duration: 7 },
      { speaker: 'customer', text: 'યોગ્ય છે. મદદ માટે આભાર.', duration: 2 },
      { speaker: 'agent', text: 'ગમે ત્યારે! જો બીજી કોઈ મદદ જોઈતી હોય તો જણાવો.', duration: 3 }
    ],
    Marathi: [
      { speaker: 'agent', text: 'नमस्कार, ग्राहक सेवेशी संपर्क साधल्याबद्दल धन्यवाद. मी आपला AI सहाय्यक आहे. मी तुमच्या ऑर्डरची स्थिती तपासण्यास कशी मदत करू?', duration: 6 },
      { speaker: 'customer', text: 'हॅलो, माझी ऑर्डर आयडी 9942 आज पोहोचणार होती, पण ती प्रलंबित दाखवत आहे।', duration: 5 },
      { speaker: 'agent', text: 'मला आपल्यासाठी ऑर्डर आयडी 9942 ट्रॅक करू द्या... मी पाहतोय की ती आज सकाळी स्थानिक वितर केंद्रात पोहोचली आहे. तथापि, मुसळधार पावसामुळे डिलिव्हरीला थोडा उशीर झाला आहे. आता डिलिव्हरी उद्या दुपारी १२ च्या आधी होईल. चालेल का?', duration: 9 },
      { speaker: 'customer', text: 'होय, चालेल. डिलिव्हरी एजंटचा नंबर मिळेल का?', duration: 4 },
      { speaker: 'agent', text: 'नक्कीच. उद्या सकाळी जेव्हा एजंट डिलिव्हरीसाठी बाहेर पडेल, मी आपोआप व्हॉट्सॲपवर त्याचा थेट नंबर पाठवून देईन.', duration: 7 },
      { speaker: 'customer', text: 'खूप छान. मदतीबद्दल धन्यवाद.', duration: 2 },
      { speaker: 'agent', text: 'कधीही! अजून काही मदत हवी असल्यास नक्की सांगा.', duration: 3 }
    ],
    Tamil: [
      { speaker: 'agent', text: 'வணக்கம், வாடிக்கையாளர் சேவையைத் தொடர்பு கொண்டதற்கு நன்றி. நான் உங்கள் AI உதவியாளர். உங்கள் தற்போதைய ஆர்டரைச் சரிபார்க்க நான் எவ்வாறு உதவ முடியும்?', duration: 6 },
      { speaker: 'customer', text: 'வணக்கம், எனது ஆர்டர் ஐடி 9942 இன்று வர வேண்டியது, ஆனால் நிலுவையில் உள்ளது.', duration: 5 },
      { speaker: 'agent', text: 'நான் உங்களுக்காக 9942 ஐ சரிபார்க்கிறேன்... இன்று காலை அது உள்ளூர் மையத்தை வந்தடைந்தது. ஆனால் கனமழை காரணமாக விநியோகம் சற்று தாமதமாகியுள்ளது. ஆர்டர் நாளை மதியம் 12 மணிக்குள் விநியோகிக்கப்படும். இது பரவாயில்லையா?', duration: 9 },
      { speaker: 'customer', text: 'ஆம், பரவாயில்லை. விநியோகம் செய்யப்படும் போது ஏஜெண்டின் எண்ணை அனுப்ப முடியுமா?', duration: 4 },
      { speaker: 'agent', text: 'நிச்சயமாக. நாளை காலை விநியோகத்திற்குச் செல்லும் போது, அவரின் எண்ணை வாட்ஸ்அப் மூலம் உங்களுக்கு அனுப்பி வைக்கிறேன்.', duration: 7 },
      { speaker: 'customer', text: 'மிக்க நன்றி.', duration: 2 },
      { speaker: 'agent', text: 'எப்போது வேண்டுமானாலும் கேளுங்கள்! வேறு ஏதேனும் உதவி தேவைப்பட்டால் கூறவும்.', duration: 3 }
    ],
    Telugu: [
      { speaker: 'agent', text: 'నమస్తే, కస్టమర్ కేర్‌ను సంప్రదించినందుకు ధన్యవాదాలు. నేను మీ AI సహాయకుడిని. మీ ఆర్డర్ తనిఖీ చేయడంలో ఎలా సహాయపడగలను?', duration: 6 },
      { speaker: 'customer', text: 'నమస్తే, నా షిప్‌మెంట్ ఐడీ 9942 ఈరోజు రావాల్సి ఉంది, కానీ పెండింగ్‌లో ఉంది.', duration: 5 },
      { speaker: 'agent', text: 'మీ షిప్‌మెంట్ ఐడీ 9942 ను ట్రాక్ చేస్తాను... ఇది ఈరోజు ఉదయం లోకల్ హబ్‌కు చేరినట్లు ఉంది. అయితే, భారీ వర్షాల కారణంగా డెలివరీ ఆలస్యమైంది. రేపు మధ్యాహ్నం 12 గంటల లోపు డెలివరీ అవుతుంది. పర్వాలేదా?', duration: 9 },
      { speaker: 'customer', text: 'అవును, పర్వాలేదు. డెలివరీ ఏజెంట్ నంబర్ పంపగలరా?', duration: 4 },
      { speaker: 'agent', text: 'ఖచ్చితంగా. రేపు ఉదయం రైడర్ బయలుదేరగానే, అతని నంబర్‌ను వాట్సాప్ ద్వారా మీకు పంపుతాను.', duration: 7 },
      { speaker: 'customer', text: 'మంచిది. సహాయానికి ధన్యవాదాలు.', duration: 2 },
      { speaker: 'agent', text: 'ఎప్పుడైనా సంప్రదించవచ్చు! మీకు ఇంకేదైనా సహాయం కావాలా?', duration: 3 }
    ],
    Bengali: [
      { speaker: 'agent', text: 'হ্যালো, কাস্টমার কেয়ারে যোগাযোগ করার জন্য ধন্যবাদ। আমি আপনার AI অ্যাসিস্ট্যান্ট। আমি কীভাবে আপনার বর্তমান অর্ডার ট্র্যাক করতে সাহায্য করতে পারি?', duration: 6 },
      { speaker: 'customer', text: 'হ্যালো, আমার শিপমেন্ট আইডি 9942 আজ আসার কথা ছিল, কিন্তু এটি পেন্ডিং দেখাচ্ছে।', duration: 5 },
      { speaker: 'agent', text: 'আমি শিপমেন্ট আইডি 9942 ট্র্যাক করছি... এটি আজ সকালে লোকাল হাবে পৌঁছেছে। তবে ভারী বৃষ্টির কারণে স্থানীয় বিতরণে কিছুটা দেরি হচ্ছে। আগামীকাল দুপুর ১২টার আগে এটি বিতরণ করা হবে। কোনো অসুবিধা আছে?', duration: 9 },
      { speaker: 'customer', text: 'হ্যাঁ, ঠিক আছে। বিতরণ করার সময় ডেলিভারি এজেন্টের নম্বরটি পাঠাতে পারবেন?', duration: 4 },
      { speaker: 'agent', text: 'অবশ্যই। আগামীকাল সকালে যখন রাইডার ডেলিভারির জন্য বের হবে, আমি সরাসরি তার যোগাযোগ বিবরণ সহ একটি হোয়াটসঅ্যাপ মেসেজ পাঠিয়ে দেব।', duration: 7 },
      { speaker: 'customer', text: 'অসাধারণ। সাহায্যের জন্য ধন্যবাদ।', duration: 2 },
      { speaker: 'agent', text: 'যেকোনো সময়! আরও কিছু জানার থাকলে বলবেন।', duration: 3 }
    ],
    Arabic: [
      { speaker: 'agent', text: 'مرحباً بك، شكراً لتواصلك مع خدمة العملاء. أنا مساعدك الافتراضي بنظام الذكاء الاصطناعي. كيف يمكنني مساعدتك في التحقق من طلبك الحالي؟', duration: 6 },
      { speaker: 'customer', text: 'مرحباً، كان من المفترض أن تصل شحنتي ذات الرقم 9942 اليوم، لكنها تظهر كمعلقة.', duration: 5 },
      { speaker: 'agent', text: 'دعني أتتبع الشحنة 9942 من أجلك... أرى أنها وصلت إلى مركز التوزيع المحلي هذا الصباح. ومع ذلك، هناك تأخير طفيف في التوزيع المحلي بسبب الأمطار الغزيرة. تم تحديد موعد التوصيل غداً قبل الساعة 12 ظهراً. هل هذا مناسب؟', duration: 9 },
      { speaker: 'customer', text: 'نعم، هذا جيد. هل يمكنك إرسال رقم مندوب التوصيل عند خروجه للتوصيل؟', duration: 4 },
      { speaker: 'agent', text: 'بالتأكيد. بمجرد خروج المندوب للتوصيل صباح الغد، سأقوم تلقائياً بإرسال رسالة واتساب تحتوي على تفاصيل الاتصال المباشرة به.', duration: 7 },
      { speaker: 'customer', text: 'ممتاز. شكراً للمساعدة.', duration: 2 },
      { speaker: 'agent', text: 'في الخدمة دائماً! أعلمني إذا كنت بحاجة إلى أي شيء آخر.', duration: 3 }
    ]
  },
  leads: {
    English: [
      { speaker: 'agent', text: 'Hi, thank you for showing interest in QEVN AI calling systems. Are you looking to qualify inbound marketing leads or automate outbound cold outreach?', duration: 7 },
      { speaker: 'customer', text: 'We get about 500 inbound signups a month, and our sales reps take hours to reach out to them.', duration: 6 },
      { speaker: 'agent', text: 'That is exactly where we excel. With QEVN, when a lead submits a form, our AI agent calls them within 15 seconds, pre-qualifies their budget and needs, and directly books them into a sales rep\'s calendar. This can boost contact rates by up to 80%. What is the average size of your target client?', duration: 11 },
      { speaker: 'customer', text: 'Usually mid-market enterprise SaaS clients, average deal value is $10k.', duration: 5 },
      { speaker: 'agent', text: 'Understood. At a $10,000 deal value, even a 5% increase in contact speed could add significant monthly revenue. Let\'s build a custom mock-call scenario around your form. Would you like a demo call to your phone right now?', duration: 9 },
      { speaker: 'customer', text: 'Yes, that would be amazing. My number is on the form.', duration: 4 },
      { speaker: 'agent', text: 'Excellent. Initiating the demo call loop. Look at your phone in 5 seconds!', duration: 4 }
    ],
    Hinglish: [
      { speaker: 'agent', text: 'Hi, QEVN lead qualifying systems me interest dikhane ke liye thank you. Inbound forms ko check karne ke liye AI call call lagaye?', duration: 7 },
      { speaker: 'customer', text: 'Haan, monthly 500 leads aati hain, aur humari sales team unhe call karne me delay kar deti hai.', duration: 5 },
      { speaker: 'agent', text: 'QEVN AI agent automatic instant response deta hai. Lead form fill karega aur 15 seconds me AI call chali jayegi qualification check karne ke liye. Kya main abhi aapke number par ek live demo call lagau?', duration: 9 },
      { speaker: 'customer', text: 'Haan, lagaiye, main check karta hoon kaise sound karta hai.', duration: 4 },
      { speaker: 'agent', text: 'Done! Main live demo call pipeline start kar rahi hoon. Agle 5 seconds me aapke phone par call aane wali hai.', duration: 6 }
    ],
    Hindi: [
      { speaker: 'agent', text: 'नमस्ते, QEVN AI कॉलिंग सिस्टम में रुचि दिखाने के लिए धन्यवाद। क्या आप इनबाउंड मार्केटिंग लीड्स को क्वालीफाई करना चाहते हैं या आउटबाउंड कोल्ड आउटरीच को ऑटोमेट करना चाहते हैं?', duration: 7 },
      { speaker: 'customer', text: 'हमें महीने में लगभग 500 इनबाउंड साइनअप मिलते हैं, और हमारे सेल्स रिप्रेजेंटेटिव्स को उन तक पहुँचने में घंटों लग जाते हैं।', duration: 6 },
      { speaker: 'agent', text: 'हम इसी में विशेषज्ञ हैं। QEVN के साथ, जब कोई लीड फॉर्म सबमिट करती है, तो हमारा AI एजेंट उन्हें 15 सेकंड के भीतर कॉल करता है, उनके बजट और जरूरतों को प्री-क्वालीफाई करता है, और सीधे उन्हें सेल्स रिप्रेजेंटेटिव के कैलेंडर में बुक करता है। इससे संपर्क दर 80% तक बढ़ सकती है। आपके लक्षित ग्राहक का औसत आकार क्या है?', duration: 11 },
      { speaker: 'customer', text: 'आमतौर पर मिड-मार्केट एंटरप्राइज SaaS क्लाइंट्स, औसत डील वैल्यू $10k है।', duration: 5 },
      { speaker: 'agent', text: '$10,000 की डील वैल्यू पर, संपर्क गति में 5% की वृद्धि भी महत्वपूर्ण मासिक राजस्व जोड़ सकती है। आइए आपके फॉर्म के आसपास एक कस्टम मॉक-कॉल परिदृश्य बनाएं। क्या आप अभी अपने फोन पर एक डेमो कॉल चाहते हैं?', duration: 9 },
      { speaker: 'customer', text: 'हाँ, यह बहुत अच्छा होगा। मेरा नंबर फॉर्म पर है।', duration: 4 },
      { speaker: 'agent', text: 'शानदार। डेमो कॉल लूप शुरू कर रही हूँ। 5 सेकंड में अपना फोन देखें!', duration: 4 }
    ],
    Gujarati: [
      { speaker: 'agent', text: 'નમસ્તે, QEVN AI કોલિંગ સિસ્ટમમાં રસ દાખવવા બદલ આભાર. શું તમે ઇનબાઉન્ડ માર્કેટિંગ લીડ્સ ક્વોલિફાય કરવા માંગો છો કે આઉટબાઉન્ડ કોલ્ડ આઉટરીચ ઓટોમેટ કરવા માંગો છો?', duration: 7 },
      { speaker: 'customer', text: 'અમને મહિનામાં લગભગ ૫૦૦ ઇનબાઉન્ડ સાઇનઅપ મળે છે, અને અમારી સેલ્સ ટીમને તેમના સુધી પહોંચવામાં કલાકો લાગે છે.', duration: 6 },
      { speaker: 'agent', text: 'અમે એમાં જ નિષ્ણાત છીએ. QEVN સાથે, જ્યારે કોઈ લીડ ફોર્મ સબમિટ કરે છે, ત્યારે અમારો AI એજન્ટ ૧૫ સેકન્ડમાં તેમને કોલ કરે છે, અને રિયલ્ટાઇમમાં સેલ્સ રેપના કેલેન્ડરમાં બુક કરે છે. આનાથી કોન્ટેક્ટ રેટ ૮૦% સુધી વધી શકે છે. તમારા ટાર્ગેટ ક્લાયન્ટની સરેરાશ ડીલ વેલ્યુ કેટલી છે?', duration: 11 },
      { speaker: 'customer', text: 'સામાન્ય રીતે મિડ-માર્કેટ સેસ ક્લાયન્ટ્સ, સરેરાશ ડીલ વેલ્યુ $10k છે.', duration: 5 },
      { speaker: 'agent', text: '$10,000 ની ડીલ વેલ્યુ પર, કોન્ટેક્ટ સ્પીડમાં ૫% વધારો પણ મોટો નફો કરાવી શકે. શું તમે તમારા નંબર પર અત્યારે જ લાઈવ ડેમો કોલ મેળવવા માંગો છો?', duration: 9 },
      { speaker: 'customer', text: 'હા, એ અદ્ભુત રહેશે. મારો નંબર ફોર્મ પર છે.', duration: 4 },
      { speaker: 'agent', text: 'ખૂબ સરસ. લાઈવ ડેમો કોલ પાઇપલાઇન શરૂ કરી રહ્યો છું. ૫ સેકન્ડમાં તમારા ફોન પર કોલ આવશે!', duration: 4 }
    ],
    Marathi: [
      { speaker: 'agent', text: 'नमस्ते, QEVN AI कॉलिंग सिस्टीममध्ये रस दाखवल्याबद्दल धन्यवाद. आपण इनबाउंड लीड्सचे वर्गीकरण करू इच्छिता की आउटबाउंड कोल्ड आउटरीच स्वयंचलित करू इच्छिता?', duration: 7 },
      { speaker: 'customer', text: 'आम्हाला महिन्यातून सुमारे ५०० इनबाउंड साइनअप मिळतात, आणि आमच्या सेल्स टीमला त्यांच्याशी संपर्क साधायला खूप वेळ लागतो।', duration: 6 },
      { speaker: 'agent', text: 'आम्ही यातच तज्ञ आहोत. QEVN सह, जेव्हा एखादी लीड फॉर्म सबमिट करते, व आमचा AI एजंट १५ सेकंदात त्यांना कॉल करतो, त्यांची पात्रता तपासतो आणि त्यांना थेट सेल्स रेपच्या कॅलेंडरमध्ये बुक करतो. तुमच्या लक्ष्यित ग्राहकाचे सरासरी मूल्य काय आहे?', duration: 11 },
      { speaker: 'customer', text: 'साधारणपणे मिड-मार्केट एंटरप्राइझ SaaS क्लायंट, सरासरी डील मूल्य $10k आहे।', duration: 5 },
      { speaker: 'agent', text: '$10,000 च्या डील मूल्यावर, संपर्क वेगात ५% वाढ देखील मोठा मासिक महसूल जोडू शकते. काय आम्ही तुमच्या नंबरवर आताच एक डेमो कॉल लावू?', duration: 9 },
      { speaker: 'customer', text: 'होय, खूपच छान होईल. माझा नंबर फॉर्मवर आहे।', duration: 4 },
      { speaker: 'agent', text: 'उत्कृष्ट. मी डेमो कॉल सुरू करत आहे. पुढील ५ सेकंदात तुमच्या फोनकडे लक्ष ठेवा!', duration: 4 }
    ],
    Tamil: [
      { speaker: 'agent', text: 'வணக்கம், QEVN AI அழைப்பு அமைப்புகளில் ஆர்வம் காட்டியதற்கு நன்றி. உள்வரும் மார்க்கெட்டிங் லீட்களைத் தகுதிப்படுத்த விரும்புகிறீர்களா அல்லது வெளிச்செல்லும் தானியங்கி அழைப்புகளை செய்ய விரும்புகிறீர்களா?', duration: 7 },
      { speaker: 'customer', text: 'மாதத்திற்கு சுமார் 500 உள்வரும் பதிவுகள் வருகின்றன, எங்கள் விற்பனைப் பிரதிநிதிகள் அவர்களைத் தொடர்பு கொள்ள பல மணிநேரம் ஆகிறது.', duration: 6 },
      { speaker: 'agent', text: 'அங்குதான் நாங்கள் சிறந்து வருகிறோம். QEVN மூலம், ஒருவர் படிவத்தை சமர்ப்பிக்கும் போது, எங்கள் AI முகவர் 15 வினாடிகளுக்குள் அவர்களை அழைத்து, அவர்களின் பட்ஜெட் மற்றும் தேவைகளை உறுதிசெய்து, விற்பனைப் பிரதிநிதியின் காலண்டரில் நேரடியாகப் பதிவு செய்கிறார். உங்கள் இலக்கு வாடிக்கையாளரின் சராசரி மதிப்பு என்ன?', duration: 11 },
      { speaker: 'customer', text: 'பொதுவாக நடுத்தர நிறுவன SaaS வாடிக்கையாளர்கள், சராசரி ஒப்பந்த மதிப்பு $10k.', duration: 5 },
      { speaker: 'agent', text: '$10,000 ஒப்பந்த மதிப்பில், தொடர்பு வேகத்தில் 5% அதிகரிப்பு கூட கணிசமான மாதாந்திர வருவாயைச் சேர்க்கும். உங்கள் படிவத்தைச் சுற்றி ஒரு தனிப்பயன் போலி அழைப்பை உருவாக்குவோம். உங்கள் தொலைபேசிக்கு இப்போது ஒரு டெமோ அழைப்பு வேண்டுமா?', duration: 9 },
      { speaker: 'customer', text: 'ஆம், அது நன்றாக இருக்கும். எனது எண் படிவத்தில் உள்ளது.', duration: 4 },
      { speaker: 'agent', text: 'சிறப்பு. டெமோ அழைப்பைத் தொடங்குகிறேன். 5 வினாடிகளில் உங்கள் தொலைபேசியைப் பாருங்கள்!', duration: 4 }
    ],
    Telugu: [
      { speaker: 'agent', text: 'నమస్తే, QEVN AI కాలింగ్ సిస్టమ్స్‌పై ఆసక్తి చూపినందుకు ధన్యవాదాలు. మీరు ఇన్‌బౌండ్ మార్కెటింగ్ లీడ్స్‌ను అర్హత నిర్ధారించాలనుకుంటున్నారా లేదా అవుట్‌బౌండ్ కోల్డ్ అవుట్‌రీచ్‌ను ఆటోమేట్ చేయాలనుకుంటున్నారా?', duration: 7 },
      { speaker: 'customer', text: 'మాకు నెలకు దాదాపు 500 ఇన్‌బౌండ్ సైన్‌అప్‌లు వస్తాయి, మా సేల్స్ ప్రతినిధులు వారిని సంప్రదించడానికి చాలా సమయం తీసుకుంటున్నారు.', duration: 6 },
      { speaker: 'agent', text: 'మేము సరిగ్గా ఇక్కడే నైపుణ్యం కలిగి ఉన్నాము. QEVN తో, ఒక లీడ్ ఫారమ్‌ను సబ్మిట్ చేసినప్పుడు, మా AI ఏజెంట్ 15 సెకన్లలోపు వారిని పిలిచి, వారి బడ్జెట్ మరియు అవసరాలను అర్హత నిర్ధారించి, నేరుగా సేల్స్ ప్రతినిధి క్యాలెండర్‌లో బుక్ చేస్తుంది. మీ టార్గెట్ క్లయింట్ సగటు డీల్ విలువ ఎంత?', duration: 11 },
      { speaker: 'customer', text: 'సాధారణంగా మిడ్-మార్కెట్ ఎంటర్‌ప్రైజ్ SaaS క్లయింట్లు, సగటు డీల్ విలువ $10k.', duration: 5 },
      { speaker: 'agent', text: '$10,000 డీల్ విలువ వద్ద, డెలివరీ వేగంలో 5% పెరుగుదల కూడా గణనీయమైన నెలవారీ రాబడిని అందిస్తుంది. మీ నంబర్‌కు ఇప్పుడే ఒక డెమో కాల్ పంపమంటారా?', duration: 9 },
      { speaker: 'customer', text: 'అవును, అది బాగుంటుంది. నా నంబర్ ఫారమ్‌లోనే ఉంది.', duration: 4 },
      { speaker: 'agent', text: 'అద్భుతం. డెమో కాల్ ప్రక్రియను ప్రారంభిస్తున్నాను. 5 సెకన్లలో మీ ఫోన్‌ను చూడండి!', duration: 4 }
    ],
    Bengali: [
      { speaker: 'agent', text: 'হ্যালো, QEVN AI কলিং সিস্টেমে আগ্রহ দেখানোর জন্য ধন্যবাদ। আপনি কি ইনবাউন্ড মার্কেটিং লিড কোয়ালিফাই করতে চান নাকি আউটবাউন্ড কোল্ড আউটরিচ স্বয়ঙ্ক্রিয় করতে চান?', duration: 7 },
      { speaker: 'customer', text: 'আমরা মাসে প্রায় ৫০০টি ইনবাউন্ড সাইনআপ পাই, এবং আমাদের সেলস টিম তাদের সাথে যোগাযোগ করতে কয়েক ঘণ্টা সময় নেয়।', duration: 6 },
      { speaker: 'agent', text: 'আমরা ঠিক এখানেই বিশেষজ্ঞ। QEVN-এর মাধ্যমে যখন কোনো লিড ফর্ম সাবমিট করে, আমাদের AI এজেন্ট ১৫ সেকেন্ডের মধ্যে তাদের কল করে, তাদের বাজেট এবং প্রয়োজন যাচাই করে এবং সরাসরি তাদের সেলস রিপ্রেজেন্টেটিভের ক্যালেন্ডারে বুক করে। আপনার টার্গেট ক্লায়েন্টের গড় ডিল ভ্যালু কত?', duration: 11 },
      { speaker: 'customer', text: 'সাধারণত মিড-মার্কেট এন্টারপ্রাইজ SaaS ক্লায়েন্ট, গড় ডিল ভ্যালু $১০k।', duration: 5 },
      { speaker: 'agent', text: '$১০,০০০ ডিল ভ্যালুতে, যোগাযোগের গতি ৫% বৃদ্ধিও উল্লেখযোগ্য মাসিক আয় যোগ করতে পারে। আমি কি আপনার নম্বরে এখনই একটি লাইভ ডেমো কল শুরু করব?', duration: 9 },
      { speaker: 'customer', text: 'হ্যাঁ, এটি দারুণ হবে। আমার নম্বর ফর্মে দেওয়া আছে।', duration: 4 },
      { speaker: 'agent', text: 'চমৎকার। লাইভ ডেমো কল শুরু করছি। ৫ সেকেন্ডের মধ্যে আপনার ফোনটি দেখুন!', duration: 4 }
    ],
    Arabic: [
      { speaker: 'agent', text: 'مرحباً، شكراً لاهتمامك بنظم الاتصال الذكية من QEVN. هل تبحث عن تأهيل العملاء المحتملين الواردين أم أتمتة الاتصالات الخارجية الباردة؟', duration: 7 },
      { speaker: 'customer', text: 'نتلقى حوالي 500 تسجيل وارد شهرياً، ويستغرق ممثلو المبيعات ساعات للتواصل معهم.', duration: 6 },
      { speaker: 'agent', text: 'هذا هو بالضبط ما نتميز به. مع QEVN، عندما يقوم عميل بملء النموذج، يتصل به نظامنا في غضون 15 ثانية، ويقوم بتأهيله مسبقاً، ويقوم بجدولة موعد في تقويم المندوب مباشرة. ما هو متوسط حجم صفقتك المستهدفة؟', duration: 11 },
      { speaker: 'customer', text: 'عادةً عملاء البرمجيات الخدمية المتوسطة الحجم، بمتوسط قيمة صفقة يبلغ 10 آلاف دولار.', duration: 5 },
      { speaker: 'agent', text: 'مع قيمة صفقة تبلغ 10 آلاف دولار، فإن زيادة طفيفة بنسبة 5% في سرعة التواصل قد تضيف عوائد شهرية كبيرة. هل تود إجراء مكالمة تجريبية إلى هاتفك الآن؟', duration: 9 },
      { speaker: 'customer', text: 'نعم، سيكون ذلك رائعاً. رقمي موجود في النموذج.', duration: 4 },
      { speaker: 'agent', text: 'ممتاز. جاري بدء نظام المكالمة التجريبية. انظر إلى هاتفك خلال 5 ثوانٍ!', duration: 4 }
    ]
  },
  'real-estate': {
    English: [
      { speaker: 'agent', text: 'Hi, this is QEVN Property Desk. I am calling regarding your interest in the 3-bedroom villa listing in South Delhi. Are you looking for self-use or investment?', duration: 7 },
      { speaker: 'customer', text: 'Hi, looking for self-use. I wanted to check if there is a private garden space included.', duration: 6 },
      { speaker: 'agent', text: 'Yes, this particular villa has a 1,200 sq.ft private landscaped garden and deck area. It also comes with independent parking for two vehicles. Would you like to schedule an in-person site visit this weekend?', duration: 9 },
      { speaker: 'customer', text: 'Yes, Saturday morning would be great. Around 11 AM.', duration: 4 },
      { speaker: 'agent', text: 'Perfect. Saturday at 11 AM is locked in. Our area consultant will meet you at the site gate. I will send you the location coordinates and site map on WhatsApp now. Does that sound good?', duration: 9 },
      { speaker: 'customer', text: 'Yes, thank you very much.', duration: 3 },
      { speaker: 'agent', text: 'Wonderful. Have a great day!', duration: 2 }
    ],
    Hinglish: [
      { speaker: 'agent', text: 'Hi, main QEVN Property Desk se baat kar rahi hoon. Aapne South Delhi 3-bedroom villa me interest dikhaya tha. Self-use ke liye plan kar rahe hain ya investment?', duration: 8 },
      { speaker: 'customer', text: 'Self-use ke liye hai. Kya waha private garden area hai?', duration: 4 },
      { speaker: 'agent', text: 'Haan ji, is villa me 1,200 square feet ka landscaped garden hai aur open deck area bhi hai. Location details and video walkthrough WhatsApp par send doon?', duration: 8 },
      { speaker: 'customer', text: 'Haan, send kar dijiye aur Saturday morning site visit bhi book kar do.', duration: 4 },
      { speaker: 'agent', text: 'Sure! Saturday subah 11:30 baje site visit book kar di hai. Locations and coordinates WhatsApp par send kar diye hain. Milenge Saturday ko.', duration: 7 }
    ],
    Hindi: [
      { speaker: 'agent', text: 'नमस्ते, यह QEVN प्रॉपर्टी डेस्क है। मैं साउथ दिल्ली में 3-बेडरुम विला लिस्टिंग में आपकी रुचि के संबंध में कॉल कर रही हूँ। क्या आप इसे स्वयं रहने के लिए देख रहे हैं या निवेश के लिए?', duration: 7 },
      { speaker: 'customer', text: 'नमस्ते, खुद रहने के लिए देख रहा हूँ। मैं यह जांचना चाहता था कि क्या कोई निजी गार्डन स्पेस शामिल है।', duration: 6 },
      { speaker: 'agent', text: 'हाँ, इस विशेष विला में 1,200 वर्ग फुट का एक निजी लैंडस्केप गार्डन और डेक क्षेत्र है। इसमें दो वाहनों के लिए स्वतंत्र पार्किंग भी है। क्या आप इस सप्ताहांत व्यक्तिगत रूप से साइट विजिट शेड्यूल करना चाहेंगे?', duration: 9 },
      { speaker: 'customer', text: 'हाँ, शनिवार सुबह 11 बजे का समय बहुत अच्छा रहेगा।', duration: 4 },
      { speaker: 'agent', text: 'बढ़िया। शनिवार सुबह 11 बजे का समय लॉक कर दिया गया है। हमारे एरिया कंसल्टेंट आपसे साइट गेट पर मिलेंगे। मैं स्थान के निर्देशांक और साइट मैप अभी व्हाट्सएप पर भेज देती हूँ। क्या यह ठीक है?', duration: 9 },
      { speaker: 'customer', text: 'हाँ, बहुत-बहुत धन्यवाद।', duration: 3 },
      { speaker: 'agent', text: 'शानदार। आपका दिन शुभ हो!', duration: 2 }
    ],
    Gujarati: [
      { speaker: 'agent', text: 'નમસ્તે, આ QEVN પ્રોપર્ટી ડેસ્ક છે. હું સાઉથ દિલ્હીમાં ૩-બેડરૂમ વિલા લિસ્ટિંગમાં તમારા રસ અંગે કોલ કરી રહી છું. શું તમે સેલ્ફ-યુઝ માટે જોઈ રહ્યા છો કે ઇન્વેસ્ટમેન્ટ માટે?', duration: 7 },
      { speaker: 'customer', text: 'નમસ્તે, સેલ્ફ-યુઝ માટે જોઈ રહ્યો છું. મારે જાણવું હતું કે પ્રાઇવેટ ગાર્ડન એરિયા મળશે કે નહીં.', duration: 6 },
      { speaker: 'agent', text: 'હા, આ વિલામાં ૧,૨૦૦ સ્ક્વેર ફીટનો પ્રાઇવેટ ગાર્ડન અને ઓપન ડેક એરિયા છે. ૨ વાહનો માટે સ્વતંત્ર પાર્કિંગ પણ ઉપલબ્ધ છે. શું તમે આ વીકએન્ડ પર સાઇટ વિઝિટ બુક કરવા માંગો છો?', duration: 9 },
      { speaker: 'customer', text: 'હા, શનિવારે સવારે ૧૧ વાગ્યાનો સમય સારો રહેશે.', duration: 4 },
      { speaker: 'agent', text: 'બરાબર છે. શનિવારે સવારે ૧૧ વાગ્યે સાઇટ વિઝિટ કન્ફર્મ થઈ ગઈ છે. અમારા કન્સલ્ટન્ટ તમને સાઇટ ગેટ પર મળશે. લોકેશન અને મેપ હું વોટ્સએપ પર મોકલી આપું છું.', duration: 9 },
      { speaker: 'customer', text: 'હા, ખુબ ખુબ આભાર.', duration: 3 },
      { speaker: 'agent', text: 'સરસ. તમારો દિવસ સારો રહે!', duration: 2 }
    ],
    Marathi: [
      { speaker: 'agent', text: 'हॅलो, मी QEVN प्रॉपर्टी डेस्कवरून बोलत आहे. आपण दक्षिण दिल्लीमधील ३-बेडरूम व्हिला लिस्टिंगमध्ये रस दाखवला होता. आपण स्वतः राहण्यासाठी पाहत आहात की गुंतवणुकीसाठी?', duration: 7 },
      { speaker: 'customer', text: 'हॅलो, स्वतः राहण्यासाठी पाहत आहे. मला तिथे खाजगी गार्डन आहे का हे विचारायचे होते।', duration: 6 },
      { speaker: 'agent', text: 'होय, या व्हिलामध्ये १,२०० चौ. फूट खाजगी गार्डन आणि डेक क्षेत्र आहे. स्वतंत्र पार्किंग देखील आहे. आपण या वीकेंडला प्रत्यक्ष साईट व्हिजिट बुक करू इच्छिता का?', duration: 9 },
      { speaker: 'customer', text: 'होय, शनिवारी सकाळी ११ वाजता योग्य राहील।', duration: 4 },
      { speaker: 'agent', text: 'उत्कृष्ट. शनिवारी सकाळी ११ वाजता वेळ निश्चित झाली आहे. आमचे सल्लागार तुम्हाला साईट गेटवर भेटतील. मी गुगल लोकेशन आणि मॅप व्हॉट्सॲपवर पाठवत आहे.', duration: 9 },
      { speaker: 'customer', text: 'होय, खूप धन्यवाद।', duration: 3 },
      { speaker: 'agent', text: 'खूप छान, आपला दिवस चांगला जावो!', duration: 2 }
    ],
    Tamil: [
      { speaker: 'agent', text: 'வணக்கம், இது QEVN சொத்து பிரிவு. தெற்கு டெல்லியில் உள்ள 3 படுக்கையறை வில்லா விளம்பரம் குறித்த உங்கள் ஆர்வம் காரணமாக நான் அழைக்கிறேன். நீங்கள் சொந்தப் பயன்பாட்டிற்குப் பார்க்கிறீர்களா அல்லது முதலீட்டிற்கா?', duration: 7 },
      { speaker: 'customer', text: 'வணக்கம், சொந்தப் பயன்பாட்டிற்குப் பார்க்கிறேன். வில்லாவில் தனியார் தோட்டம் சேர்க்கப்பட்டுள்ளதா என்பதைச் சரிபார்க்க விரும்புகிறேன்.', duration: 6 },
      { speaker: 'agent', text: 'ஆம், இந்த வில்லாவில் 1,200 சதுர அடி தனியார் தோட்டம் மற்றும் தளம் உள்ளது. இரண்டு வாகனங்களுக்கான தனி வாகன நிறுத்துமிடமும் உள்ளது. இந்த வார இறுதியில் நேரில் பார்வையிட திட்டமிட விரும்புகிறீர்களா?', duration: 9 },
      { speaker: 'customer', text: 'ஆம், சனிக்கிழமை காலை 11 மணி நன்றாக இருக்கும்.', duration: 4 },
      { speaker: 'agent', text: 'சிறப்பு. சனிக்கிழமை காலை 11 மணிக்கு உறுதி செய்யப்பட்டுள்ளது. எங்கள் ஆலோசகர் உங்களை தளம் வாயிலில் சந்திப்பார். வரைபடத்தை வாட்ஸ்அப்பில் இப்போது அனுப்புகிறேன். அது சரியா?', duration: 9 },
      { speaker: 'customer', text: 'ஆம், மிக்க நன்றி.', duration: 3 },
      { speaker: 'agent', text: 'மகிழ்ச்சி. இனிய நாள் அமையட்டும்!', duration: 2 }
    ],
    Telugu: [
      { speaker: 'agent', text: 'నమస్తే, ఇది QEVN ప్రాపర్టీ డెస్క్. సౌత్ ఢిల్లీలోని 3-బెడ్‌రూమ్ విల్లా లిస్టింగ్ పట్ల మీ ఆసక్తికి సంబంధించి నేను కాల్ చేస్తున్నాను. మీరు సొంతంగా ఉండడానికి చూస్తున్నారా లేక పెట్టుబడి కోసమా?', duration: 7 },
      { speaker: 'customer', text: 'నమస్తే, సొంతంగా ఉండడానికి చూస్తున్నాను. అక్కడ ప్రైవేట్ గార్డెన్ స్పేస్ ఉందో లేదో తెలుసుకోవాలనుకుంటున్నాను.', duration: 6 },
      { speaker: 'agent', text: 'అవును, ఈ విల్లాలో 1,200 చదరపు అడుగుల ప్రైవేట్ గార్డెన్ మరియు డెక్ ఏరియా ఉన్నాయి. రెండు వాహనాల పార్కింగ్ కూడా ఉంది. ఈ వారాంతంలో సైట్ సందర్శనను షెడ్యూల్ చేయాలనుకుంటున్నారా?', duration: 9 },
      { speaker: 'customer', text: 'అవును, శనివారం ఉదయం 11 గంటల సమయం బాగుంటుంది.', duration: 4 },
      { speaker: 'agent', text: 'సరే. శనివారం ఉదయం 11 గంటల సమయం ఖరారైంది. మా ఏరియా కన్సల్టెంట్ మిమ్మల్ని సైట్ గేట్ వద్ద కలుస్తారు. లొకేషన్ వివరాలను వాట్సాప్ లో పంపుతాను.', duration: 9 },
      { speaker: 'customer', text: 'అవును, చాలా ధన్యవాదాలు.', duration: 3 },
      { speaker: 'agent', text: 'మంచిది. మీ రోజు శుభప్రదంగా साగాలి!', duration: 2 }
    ],
    Bengali: [
      { speaker: 'agent', text: 'হ্যালো, আমি QEVN প্রোপার্টি ডেস্ক থেকে বলছি। দক্ষিণ দিল্লির ৩-বেডরুম ভিলা লিস্টিংয়ে আপনার আগ্রহের বিষয়ে আমি কল করছি। আপনি কি নিজের বসবাসের জন্য খুঁজছেন নাকি বিনিয়োগের জন্য?', duration: 7 },
      { speaker: 'customer', text: 'হ্যালো, নিজের থাকার জন্যই খুঁজছি। আমি জানতে চেয়েছিলাম এর সাথে কোনো ব্যক্তিগত বাগান এলাকা আছে কিনা।', duration: 6 },
      { speaker: 'agent', text: 'হ্যাঁ, এই বিশেষ ভিলাটিতে ১,২০০ বর্গফুটের একটি ব্যক্তিগত বাগান এবং ডেক এরিয়া রয়েছে। এছাড়া দুটি গাড়ির জন্য পার্কিং রয়েছে। আপনি কি এই উইকেন্ডে সাইট ভিজিট শিডিউল করতে চান?', duration: 9 },
      { speaker: 'customer', text: 'হ্যাঁ, শনিবার সকাল ১১টা হলে ভালো হয়।', duration: 4 },
      { speaker: 'agent', text: 'ঠিক আছে। शनिवार সকাল ১১টা কনফার্ম করা হলো। আমাদের পরামর্শদাতা সাইট গেটে আপনার সাথে দেখা করবেন। আমি লোকেশন এবং ম্যাপ এখন হোয়াটসঅ্যাপে পাঠিয়ে দিচ্ছি।', duration: 9 },
      { speaker: 'customer', text: 'হ্যাঁ, অনেক ধন্যবাদ।', duration: 3 },
      { speaker: 'agent', text: 'চমৎকার। আপনার দিনটি ভালো কাটুক!', duration: 2 }
    ],
    Arabic: [
      { speaker: 'agent', text: 'مرحباً، هذا مكتب عقارات QEVN. أتصل بك بخصوص اهتمامك بفيلا ذات 3 غرف نوم في جنوب دلهي. هل تبحث عن السكن الخاص أم الاستثمار؟', duration: 7 },
      { speaker: 'customer', text: 'مرحباً، أبحث عن السكن الخاص. أردت التحقق مما إذا كانت هناك مساحة حديقة خاصة مدرجة.', duration: 6 },
      { speaker: 'agent', text: 'نعم، تحتوي هذه الفيلا على حديقة منسقة خاصة بمساحة 1,200 قدم مربع. كما تأتي مع موقف مستقل لسيارتين. هل تود جدولة زيارة للموقع في نهاية هذا الأسبوع؟', duration: 9 },
      { speaker: 'customer', text: 'نعم، صباح السبت سيكون رائعاً. حوالي الساعة 11 صباحاً.', duration: 4 },
      { speaker: 'agent', text: 'ممتاز. تم تأكيد السبت في الحادية عشرة صباحاً. سيلتقي بك مستشارنا عند بوابة الموقع. سأرسل إحداثيات الموقع وخارطته على الواتساب الآن.', duration: 9 },
      { speaker: 'customer', text: 'نعم، شكراً جزيلاً لك.', duration: 3 },
      { speaker: 'agent', text: 'رائع. أتمنى لك يوماً سعيداً!', duration: 2 }
    ]
  },
  healthcare: {
    English: [
      { speaker: 'agent', text: 'Hello, this is the healthcare scheduling desk. I see you requested a check-up appointment with Dr. Mehta. What date and time are you looking for?', duration: 7 },
      { speaker: 'customer', text: 'Hi, do you have anything available tomorrow afternoon?', duration: 4 },
      { speaker: 'agent', text: 'Dr. Mehta has slots open tomorrow at 3 PM and 4:30 PM. For check-ups, we request that you arrive 10 minutes early with your previous medical records. Which slot works?', duration: 8 },
      { speaker: 'customer', text: 'Let\'s go with 3 PM.', duration: 2 },
      { speaker: 'agent', text: 'Excellent, 3 PM is confirmed. I have updated the hospital portal. Please carry your government ID card for check-in. Confirmation details have been sent via SMS.', duration: 8 },
      { speaker: 'customer', text: 'Great, thank you.', duration: 2 },
      { speaker: 'agent', text: 'You are welcome. Take care!', duration: 2 }
    ],
    Hinglish: [
      { speaker: 'agent', text: 'Hello, Dr. Mehta ke booking portal se support desk. Aap checkup appointment schedule karna chahte hain. Kis date ko slot chahiye?', duration: 7 },
      { speaker: 'customer', text: 'Mujhe kal afternoon me appointment mil sakti hai?', duration: 3 },
      { speaker: 'agent', text: 'Mehta ji kal dopahar 3:00 baje aur 4:30 baje available hain. 3 baje book kar doon?', duration: 6 },
      { speaker: 'customer', text: 'Haan, 3 baje set kar dijiye.', duration: 2 },
      { speaker: 'agent', text: 'Done! Kal dopahar 3 baje ki booking ho gayi hai. Check-in ke liye prescription aur reports sath laiyega. SMS details send ho chuke hain.', duration: 8 }
    ],
    Hindi: [
      { speaker: 'agent', text: 'नमस्ते, यह डॉ. मेहता के अपॉइंटमेंट बुकिंग हेल्पडेस्क से कॉल है। मुझे दिखा रहा है कि आपने डॉ. मेहता के साथ चेक-अप अपॉइंटमेंट का अनुरोध किया था। आप किस तारीख और समय को देख रहे हैं?', duration: 7 },
      { speaker: 'customer', text: 'नमस्ते, क्या कल दोपहर के बाद कोई स्लॉट उपलब्ध है?', duration: 4 },
      { speaker: 'agent', text: 'डॉ. मेहता के पास कल दोपहर 3 बजे और शाम 4:30 बजे स्लॉट उपलब्ध हैं। चेक-अप के लिए, हम अनुरोध करते हैं कि आप अपने पिछले मेडिकल रिकॉर्ड के साथ 10 मिनट पहले पहुंचें। कौन सा समय सही रहेगा?', duration: 8 },
      { speaker: 'customer', text: 'आइए दोपहर 3 बजे का समय तय करते हैं।', duration: 2 },
      { speaker: 'agent', text: 'बहुत बढ़िया, दोपहर 3 बजे का समय पक्का हो गया है। मैंने अस्पताल के पोर्टल को अपडेट कर दिया है। कृपया चेक-इन के लिए अपना सरकारी पहचान पत्र साथ लाएं। पुष्टि की जानकारी एसएमएस द्वारा भेज दी गई है।', duration: 8 },
      { speaker: 'customer', text: 'बहुत बढ़िया, धन्यवाद।', duration: 2 },
      { speaker: 'agent', text: 'आपका स्वागत है। अपना ख्याल रखें!', duration: 2 }
    ],
    Gujarati: [
      { speaker: 'agent', text: 'નમસ્તે, આ ડૉ. મહેતાના બુકિંગ હેલ્પડેસ્કથી કોલ છે. તમે ડૉ. મહેતા સાથે ચેક-અપ માટે વિનંતી કરી હતી. તમે કઈ તારીખ અને સમય ઈચ્છો છો?', duration: 7 },
      { speaker: 'customer', text: 'નમસ્તે, શું આવતીકાલે બપોર પછી કોઈ સમય ખાલી છે?', duration: 4 },
      { speaker: 'agent', text: 'ડૉ. મહેતા પાસે આવતીકાલે બપોરે ૩ અને ૪:૩૦ વાગ્યે સમય ખાલી છે. ચેક-અપ માટે અમે વિનંતી કરીએ છીએ કે તમે જુના રિપોર્ટ્સ સાથે ૧૦ મિનિટ વહેલા આવો. કયો સમય બુક કરું?', duration: 8 },
      { speaker: 'customer', text: 'બપોરે ૩ વાગ્યાનો સમય બરાબર રહેશે.', duration: 2 },
      { speaker: 'agent', text: 'ખૂબ સરસ, બપોરે ૩ વાગ્યાનો સમય કન્ફર્મ થઈ ગયો છે. મેં પોર્ટલ અપડેટ કરી દીધું છે. ચેક-ઇન માટે સરકારી આઈડી સાથે રાખજો. એસએમએસ મોકલી આપ્યો છે.', duration: 8 },
      { speaker: 'customer', text: 'ખૂબ સરસ, આભાર.', duration: 2 },
      { speaker: 'agent', text: 'આભાર, કાળજી રાખજો!', duration: 2 }
    ],
    Marathi: [
      { speaker: 'agent', text: 'हॅलो, मी डॉ. मेहता यांच्या अपॉइंटमेंट डेस्कवरून बोलत आहे. आपण डॉ. मेहता यांच्यासोबत चेक-अप अपॉइंटमेंटसाठी विनंती केली होती. आपल्याला कोणती तारीख व वेळ हवी आहे?', duration: 7 },
      { speaker: 'customer', text: 'हॅलो, उद्या दुपारनंतरची वेळ उपलब्ध आहे का?', duration: 4 },
      { speaker: 'agent', text: 'डॉ. मेहता यांच्याकडे उद्या दुपारी ३:०० आणि ४:३० वाजताचे स्लॉट उपलब्ध आहेत. जुने वैद्यकीय अहवाल सोबत घेऊन १० मिनिटे आधी येण्याची विनंती आम्ही करतो. कोणता स्लॉट चालेल?', duration: 8 },
      { speaker: 'customer', text: 'दुपारी ३ वाजताचा स्लॉट निश्चित करा.', duration: 2 },
      { speaker: 'agent', text: 'उत्कृष्ट, दुपारी ३ वाजताची वेळ निश्चित केली आहे. मी हॉस्पिटलच्या पोर्टलवर अपडेट केले आहे. चेक-इनसाठी तुमचे आयडी कार्ड सोबत ठेवा. एसएमएसद्वारे तपशील पाठवला आहे.', duration: 8 },
      { speaker: 'customer', text: 'खूप छान, धन्यवाद.', duration: 2 },
      { speaker: 'agent', text: 'आपले स्वागत आहे. काळजी घ्या!', duration: 2 }
    ],
    Tamil: [
      { speaker: 'agent', text: 'வணக்கம், இது டாக்டர் மேத்தாவின் முன்பதிவு உதவி மையம். டாக்டர் மேத்தாவுடன் பரிசோதனை சந்திப்பைக் கோரியுள்ளதாகத் தெரிகிறது. எந்த தேதி மற்றும் நேரம் பார்க்கிறீர்கள்?', duration: 7 },
      { speaker: 'customer', text: 'வணக்கம், நாளை மதியம் ஏதேனும் நேரம் கிடைக்கிறதா?', duration: 4 },
      { speaker: 'agent', text: 'டாக்டர் மேத்தாவுக்கு நாளை மதியம் 3 மற்றும் 4:30 மணிக்கு நேரம் உள்ளது. பரிசோதனைக்கு முந்தைய மருத்துவ ஆவணங்களுடன் 10 நிமிடங்களுக்கு முன்னதாக வருமாறு கேட்டுக்கொள்கிறோம். எது உங்களுக்குச் சரி?', duration: 8 },
      { speaker: 'customer', text: 'மதியம் 3 மணி இருக்கட்டும்.', duration: 2 },
      { speaker: 'agent', text: 'அருமை, மதியம் 3 மணி உறுதி செய்யப்பட்டுள்ளது. மருத்துவமனை போர்ட்டலில் புதுப்பித்துள்ளேன். சரிபார்ப்பிற்கு அரசு அடையாள அட்டையைக் கொண்டு வரவும். விவரங்கள் எஸ்எம்எஸ் மூலம் அனுப்பப்பட்டுள்ளன.', duration: 8 },
      { speaker: 'customer', text: 'மிக்க நன்றி.', duration: 2 },
      { speaker: 'agent', text: 'வரவேற்கிறோம். உடலைக் கவனித்துக் கொள்ளுங்கள்!', duration: 2 }
    ],
    Telugu: [
      { speaker: 'agent', text: 'నమస్తే, ఇది డాక్టర్ మెహతా అపాయింట్‌మెంట్ హెల్ప్‌డెస్క్. డాక్టర్ మెహతాతో చెకప్ అపాయింట్‌మెంట్ కోసం మీరు అభ్యర్థించినట్లు చూపిస్తోంది. ఏ తేదీ మరియు సమయం కావాలి?', duration: 7 },
      { speaker: 'customer', text: 'నమస్తే, రేపు మధ్యాహ్నం ఏదైనా స్లాట్ ఖాళీగా ఉందా?', duration: 4 },
      { speaker: 'agent', text: 'డాక్టర్ మెహతా రేపు మధ్యాహ్నం 3 గంటలకు మరియు 4:30 గంటలకు అందుబాటులో ఉన్నారు. చెకప్ కోసం మీ పాత మెడికల్ రికార్డులతో 10 నిమిషాల ముందే రావాలని కోరుతున్నాము. ఏది ఖరారు చేయాలి?', duration: 8 },
      { speaker: 'customer', text: 'మధ్యాహ్నం 3 గంటల సమయం ఖరారు చేయండి.', duration: 2 },
      { speaker: 'agent', text: 'సరి, మధ్యాహ్నం 3 గంటలకు అపాయింట్‌మెంట్ ఖరారైంది. హాస్పిటల్ పోర్టల్ అప్‌డేట్ చేశాను. గుర్తింపు కార్డు తీసుకురావడం మర్చిపోవద్దు. వివరాలు ఎస్ఎంఎస్ ద్వారా పంపబడ్డాయి.', duration: 8 },
      { speaker: 'customer', text: 'చాలా ధన్యవాదాలు.', duration: 2 },
      { speaker: 'agent', text: 'నా సంతోషం. జాగ్రత్తగా ఉండండి!', duration: 2 }
    ],
    Bengali: [
      { speaker: 'agent', text: 'হ্যালো, আমি ডক্টর মেহতার অ্যাপয়েন্টমেন্ট বুকिंग হেল্পডেস্ক থেকে বলছি। আপনি ডক্টর মেহতার সাথে চেক-আপ অ্যাপয়েন্টমেন্টের অনুরোধ করেছিলেন। কোন তারিখ এবং সময়ে বুক করতে চান?', duration: 7 },
      { speaker: 'customer', text: 'হ্যালো, আগামীকাল বিকেলে কোনো স্লট খালি আছে কি?', duration: 4 },
      { speaker: 'agent', text: 'ডক্টর মেহতার আগামীকাল দুপুর ৩টে এবং বিকেল ৪:৩০টায় স্লট খালি আছে। চেক-আপের জন্য পূর্ববর্তী মেডিকেল রেকর্ডসহ ১০ মিনিট আগে আসার অনুরোধ করা হচ্ছে। কোনটি বুক করব?', duration: 8 },
      { speaker: 'customer', text: 'দুপুর ৩টের সময়টি দিন।', duration: 2 },
      { speaker: 'agent', text: 'চমৎকার, দুপুর ৩টের অ্যাপয়েন্টমেন্ট নিশ্চিত করা হয়েছে। আমি পোর্টাল আপডেট করেছি। চেক-ইনের জন্য অনুগ্রহ করে আপনার সরকারি আইডি কার্ড সাথে রাখবেন। বিস্তারিত এসএমএসে পাঠানো হয়েছে।', duration: 8 },
      { speaker: 'customer', text: 'অনেক ধন্যবাদ।', duration: 2 },
      { speaker: 'agent', text: 'আপনাকে স্বাগতম। নিজের যত্ন নেবেন!', duration: 2 }
    ],
    Arabic: [
      { speaker: 'agent', text: 'مرحباً، هذا مكتب جدولة المواعيد الطبية للدكتور ميهتا. أرى أنك طلبت موعداً للفحص الطبي. ما هو التاريخ والوقت المناسبان لك؟', duration: 7 },
      { speaker: 'customer', text: 'مرحباً، هل يتوفر أي موعد غداً بعد الظهر؟', duration: 4 },
      { speaker: 'agent', text: 'يتوفر لدى الدكتور ميهتا مواعيد غداً في الساعة 3 ظهراً و 4:30 مساءً. نرجو الحضور قبل الموعد بـ 10 دقائق مع تقاريرك الطبية السابقة. أي موعد تفضل؟', duration: 8 },
      { speaker: 'customer', text: 'لنختر الساعة 3 ظهراً.', duration: 2 },
      { speaker: 'agent', text: 'ممتاز، تم تأكيد الساعة 3 ظهراً. قمت بتحديث بوابة المستشفى. يرجى إحضار هويتك الحكومية لإتمام الدخول. تم إرسال تفاصيل التأكيد عبر رسالة نصية قصيرة.', duration: 8 },
      { speaker: 'customer', text: 'رائع، شكراً لك.', duration: 2 },
      { speaker: 'agent', text: 'على الرحب والسعة. اعتنِ بنفسك!', duration: 2 }
    ]
  },
  recruitment: {
    English: [
      { speaker: 'agent', text: 'Hello, this is the QEVN hiring assistant calling. I received your application for the Lead DevOps role. Do you have 3 minutes to confirm a few qualifying questions?', duration: 8 },
      { speaker: 'customer', text: 'Hi, yes, I am free to talk right now.', duration: 3 },
      { speaker: 'agent', text: 'Excellent. The role requires building and scaling Kubernetes clusters and handling multi-region deployments. How many years of experience do you have with AWS and Terraform?', duration: 9 },
      { speaker: 'customer', text: 'I have around 5 years of AWS and Terraform, mostly running high-availability setups.', duration: 5 },
      { speaker: 'agent', text: 'Perfect. That matches our criteria. What are your salary expectations, and how soon could you join?', duration: 6 },
      { speaker: 'customer', text: 'Looking for $120k, notice period is 2 weeks.', duration: 4 },
      { speaker: 'agent', text: 'Got it. I have updated your application status. Our engineering director will review this today. If approved, I will auto-trigger a schedule link for the technical round. Thank you for your time!', duration: 10 }
    ],
    Hinglish: [
      { speaker: 'agent', text: 'Hello, main QEVN Recruitment team se calling assistant hoon. Lead DevOps position ke liye aapki application check karni thi. 2 minutes baat ho sakti hai?', duration: 8 },
      { speaker: 'customer', text: 'Haan, bilkul, poochiye.', duration: 2 },
      { speaker: 'agent', text: 'Kubernetes aur cloud infrastructure scale karne ke liye hume AWS experts chahiye. Aapko AWS and Terraform me kitna experience hai?', duration: 8 },
      { speaker: 'customer', text: 'AWS me mujhe 4 saal ka production experience hai.', duration: 3 },
      { speaker: 'agent', text: 'Perfect. Expected salary package and notice period kya hai aapka?', duration: 5 },
      { speaker: 'customer', text: 'Looking for 15 LPA. Notice period 1 month hai.', duration: 4 },
      { speaker: 'agent', text: 'Noted. Details review ke liye manager ke paas chali gayi hain. Technical round schedule karne ke liye link short-listed hone par direct SMS par mil jayegi.', duration: 8 }
    ],
    Hindi: [
      { speaker: 'agent', text: 'नमस्ते, मैं QEVN भर्ती सहायक बोल रही हूँ। मुझे लीड डेवऑप्स (DevOps) भूमिका के लिए आपका आवेदन मिला है। क्या आपके पास कुछ योग्यता प्रश्नों की पुष्टि करने के लिए 3 मिनट हैं?', duration: 8 },
      { speaker: 'customer', text: 'नमस्ते, हाँ, मैं अभी बात करने के लिए फ्री हूँ।', duration: 3 },
      { speaker: 'agent', text: 'बहुत बढ़िया। इस भूमिका के लिए कुबेरनेट्स (Kubernetes) क्लस्टर के निर्माण और स्केलिंग और मल्टी-रीजन डिप्लॉयमेंट को संभालने की आवश्यकता होती है। आपके पास AWS और टेराफ़ॉर्म (Terraform) का कितने वर्षों का अनुभव है?', duration: 9 },
      { speaker: 'customer', text: 'मेरे पास AWS और टेराफ़ॉर्म का लगभग 5 वर्षों का अनुभव है, ज्यादातर उच्च-उपलब्धता (high-availability) सेटअप चलाने में।', duration: 5 },
      { speaker: 'agent', text: 'बढ़िया। यह हमारे मानदंडों से मेल खाता है। आपकी वेतन अपेक्षाएं क्या हैं, और आप कितनी जल्दी हमारे साथ जुड़ सकते हैं?', duration: 6 },
      { speaker: 'customer', text: 'मैं 120k की उम्मीद कर रहा हूँ, और मेरा नोटिस पीरियड 2 सप्ताह का है।', duration: 4 },
      { speaker: 'agent', text: 'समझ गई। मैंने आपके आवेदन की स्थिति अपडेट कर दी है। हमारे इंजीनियरिंग डायरेक्टर आज इसकी समीक्षा करेंगे। यदि स्वीकृत हो जाता है, तो मैं तकनीकी राउंड के लिए स्वचालित रूप से एक शेड्यूलिंग लिंक ट्रिगर कर दूँगी। समय देने के लिए धन्यवाद!', duration: 10 }
    ],
    Gujarati: [
      { speaker: 'agent', text: 'નમસ્તે, હું QEVN ભરતી આસિસ્ટન્ટ બોલી રહી છું. મને લીડ DevOps રોલ માટે તમારી એપ્લિકેશન મળી છે. શું ક્વોલિફાઇંગ પ્રશ્નોની ચર્ચા કરવા માટે તમારી પાસે ૩ મિનિટ છે?', duration: 8 },
      { speaker: 'customer', text: 'નમસ્તે, હા, હું અત્યારે મુક્ત છું.', duration: 3 },
      { speaker: 'agent', text: 'સરસ. આ રોલ માટે કુબરનેટીસ (Kubernetes) ક્લસ્ટર બનાવવા અને મલ્ટી-રીજન ડિપ્લોયમેન્ટ હેન્ડલ કરવાનો અનુભવ જરૂરી છે. AWS અને ટેરાફોર્મ (Terraform) માં તમને કેટલા વર્ષનો અનુભવ છે?', duration: 9 },
      { speaker: 'customer', text: 'મારી પાસે AWS અને ટેરાફોર્મમાં લગભગ ૫ વર્ષનો અનુભવ છે, ખાસ કરીને હાઈ-અવેલેબિલિટી સેટઅપ ચલાવવાનો.', duration: 5 },
      { speaker: 'agent', text: 'યોગ્ય છે. આ અમારા માપદંડ સાથે મેળ ખાય છે. તમારી સેલેરી અપેક્ષા કેટલી છે અને કેટલી જલ્દી જોડાઈ શકો?', duration: 6 },
      { speaker: 'customer', text: '$120k ની અપેક્ષા છે, અને નોટિસ પીરિયડ ૨ અઠવાડિયાનો છે.', duration: 4 },
      { speaker: 'agent', text: 'બરાબર. મેં તમારી વિગતો અપડેટ કરી દીધી છે. અમારા એન્જિનિયરિંગ ડિરેક્ટર આજે આ રિવ્યૂ કરશે. જો મંજૂર થશે, તો ટેકનિકલ રાઉન્ડ માટે શેડ્યૂલિંગ લિંક આપોઆપ મોકલી દેવામાં આવશે. સમય આપવા બદल આભાર!', duration: 10 }
    ],
    Marathi: [
      { speaker: 'agent', text: 'हॅलो, मी QEVN भर्ती सहाय्यक बोलत आहे. लीड DevOps भूमिकेसाठी मला तुमचा अर्ज मिळाला आहे. पात्रता प्रश्नांची उत्तरे देण्यासाठी तुमच्याकडे ३ मिनिटे आहेत का?', duration: 8 },
      { speaker: 'customer', text: 'हॅलो, होय, मी आता बोलण्यासाठी मोकळा आहे.', duration: 3 },
      { speaker: 'agent', text: 'उत्कृष्ट. या भूमिकेसाठी कुबर्नेटीस (Kubernetes) क्लस्टर्स तयार करणे आणि व मल्टी-रीजन डिप्लॉयमेंट हाताळणे आवश्यक आहे. तुम्हाला AWS आणि टेराफॉर्मचा (Terraform) किती वर्षांचा अनुभव आहे?', duration: 9 },
      { speaker: 'customer', text: 'मला AWS आणि टेराफॉर्मचा सुमारे ५ वर्षांचा अनुभव आहे, मुख्यत्वे हाय-अव्हेलेबिलिटी सेटअप हाताळण्याचा.', duration: 5 },
      { speaker: 'agent', text: 'खूप छान, हे आमच्या निकषांशी जुळते. तुमची पगार अपेक्षा काय आहे आणि तुम्ही कधी रुजू होऊ शकता?', duration: 6 },
      { speaker: 'customer', text: 'माझी अपेक्षा $120k आहे आणि २ आठवड्यांचा नोटीस पिरीयड आहे.', duration: 4 },
      { speaker: 'agent', text: 'समजले. मी तुमच्या अर्जाची स्थिती अपडेट केली आहे. आमचे अभियांत्रिकी संचालक आज याचे पुनरावलोकन करतील. जर अर्ज मंजूर झाला, तर मी टेक्निकल राऊंडसाठी आपोआप शेड्युलिंग लिंक पाठवून देईन. वेळ दिल्याबद्दल धन्यवाद!', duration: 10 }
    ],
    Tamil: [
      { speaker: 'agent', text: 'வணக்கம், நான் QEVN வேலைவாய்ப்பு உதவியாளர் பேசுகிறேன். லீட் DevOps பணிக்கான உங்கள் விண்ணப்பத்தைப் பெற்றேன். சில தகுதி வினாக்களை உறுதிப்படுத்த உங்களிடம் 3 நிமிடங்கள் உள்ளதா?', duration: 8 },
      { speaker: 'customer', text: 'வணக்கம், ஆம், நான் இப்போது பேசக் கிடைக்கிறேன்.', duration: 3 },
      { speaker: 'agent', text: 'அருமை. இந்தப் பணிக்கு குபெர்னெட்டஸ் (Kubernetes) கிளஸ்டர்களை உருவாக்குதல் மற்றும் பல பிராந்திய வரிசைப்படுத்தல்களைக் கையாளுதல் தேவைப்படுகிறது. AWS மற்றும் டெர்ராஃபார்ம் (Terraform) ஆகியவற்றில் உங்களுக்கு எத்தனை வருட அனுபவம் உள்ளது?', duration: 9 },
      { speaker: 'customer', text: 'என்னிடம் AWS மற்றும் டெர்ராஃபார்மில் சுமார் 5 வருட அனுபவம் உள்ளது, பெரும்பாலும் உயர்-கிடைப்பு அமைப்புகளை இயக்குகிறேன்.', duration: 5 },
      { speaker: 'agent', text: 'சிறப்பு. அது எங்கள் தகுதிகளுடன் ஒத்துப்போகிறது. உங்கள் சம்பள எதிர்பார்ப்பு என்ன, நீங்கள் எவ்வளவு விரைவில் சேர முடியும்?', duration: 6 },
      { speaker: 'customer', text: 'நான் $120k எதிர்பார்க்கிறேன், அறிவிப்பு காலம் 2 வாரங்கள்.', duration: 4 },
      { speaker: 'agent', text: 'புரிந்தது. உங்கள் விண்ணப்ப நிலையை நான் புதுப்பித்துள்ளேன். எங்கள் பொறியியல் இயக்குனர் இன்று இதை மதிப்பாய்வு செய்வார். அங்கீகரிக்கப்பட்டால், தொழில்நுட்ப சுற்றுக்கான திட்டமிடல் இணைப்பை நான் தானாகவே அனுப்புவேன். உங்கள் நேரத்திற்கு நன்றி!', duration: 10 }
    ],
    Telugu: [
      { speaker: 'agent', text: 'నమస్తే, నేను QEVN రిక్రూట్‌మెంట్ సహాయకుడిని. లీడ్ DevOps పాత్ర కోసం మీ దరఖాస్తును అందుకున్నాను. కొన్ని ప్రశ్నలను నిర్ధారించడానికి మీ వద్ద 3 నిమిషాల సమయం ఉందా?', duration: 8 },
      { speaker: 'customer', text: 'నమస్తే, అవును, నేను ఇప్పుడు మాట్లాడగలను.', duration: 3 },
      { speaker: 'agent', text: 'అద్భుతం. ఈ పాత్రకు కుబెర్నెటీస్ (Kubernetes) క్లస్టర్‌లను నిర్మించడం మరియు మల్టీ-రీజన్ డిప్లాయ్‌మెంట్‌లను నిర్వహించడం అవసరం. AWS మరియు టెర్రాఫామ్ (Terraform) లలలో మీకు ఎన్ని సంవత్సరాల అనుభవం ఉంది?', duration: 9 },
      { speaker: 'customer', text: 'నాకు AWS మరియు టెర్రాఫామ్ లలో దాదాపు 5 సంవత్సరాల అనుభవం ఉంది, ఎక్కువగా హై-అవైలబిలిటీ సెటప్‌లలో పని చేసాను.', duration: 5 },
      { speaker: 'agent', text: 'సరే. అది మా అవసరాలకు సరిపోతుంది. మీ శాలరీ అంచనాలు ఏమిటి, మరియు మీరు ఎంత త్వరగా చేరగలరు?', duration: 6 },
      { speaker: 'customer', text: 'నేను $120k ఆశిస్తున్నాను, నోటీసు పీరియడ్ 2 వారాలు.', duration: 4 },
      { speaker: 'agent', text: 'సరే. మీ దరఖాస్తు స్థితిని అప్‌డేట్ చేసాను. మా ఇంజనీరింగ్ డైరెక్టర్ ఈరోజు దీనిని సమీక్షిస్తారు. ఒకవేళ ఆమోదిస్తే, తదుపరి టెక్నికల్ రౌండ్ షெడ్యూలింగ్ లింక్‌ను పంపుతాను. సమయానికి ధನ್ಯవాదాలు!', duration: 10 }
    ],
    Bengali: [
      { speaker: 'agent', text: 'হ্যালো, আমি QEVN রিক্রুটিং অ্যাসিস্ট্যান্ট বলছি। আমি লিড DevOps ভূমিকার জন্য আপনার আবেদন পেয়েছি। কয়েকটি যোগ্যতা প্রশ্ন নিশ্চিত করার জন্য আপনার কি ৩ মিনিট সময় হবে?', duration: 8 },
      { speaker: 'customer', text: 'হ্যালো, হ্যাঁ, আমি এখনই কথা বলতে পারি।', duration: 3 },
      { speaker: 'agent', text: 'চমৎকার। এই ভূমিকার জন্য কুবারনেটিস (Kubernetes) ক্লাস্টার তৈরি ও স্কেলিং এবং মাল্টি-রিজিয়ন ডেপ্লয়মেন্ট পরিচালনা করা প্রয়োজন। AWS এবং টেরাফর্মে (Terraform) আপনার কত বছরের অভিজ্ঞতা আছে?', duration: 9 },
      { speaker: 'customer', text: 'আমার AWS এবং টেরাফর্মে প্রায় ৫ বছরের অভিজ্ঞতা আছে, যার বেশিরভাগই হাই-অ্যাভেলেবিলিটি সেটআপে।', duration: 5 },
      { speaker: 'agent', text: 'চমৎকার। এটি আমাদের যোগ্যতার সাথে মিলে যাচ্ছে। আপনার বেতন প্রত্যাশা কত এবং কত তাড়াতাড়ি যোগ দিতে পারবেন?', duration: 6 },
      { speaker: 'customer', text: '$১২০k আশা করছি, নোটিশ পিরিয়ড ২ সপ্তাহ।', duration: 4 },
      { speaker: 'agent', text: 'বুঝতে পেরেছি। আমি আপনার আবেদনের অবস্থা আপডেট করেছি। আমাদের ইঞ্জিনিয়ারিং ডিরেক্টর আজ এটি পর্যালোচনা করবেন। অনুমোদিত হলে, আমি টেকনিক্যাল রাউন্ডের জন্য স্বয়ংক্রিয়ভাবে শিডিউলিং লিঙ্ক ট্রিগার করব। সময় দেওয়ার জন্য ধন্যবাদ!', duration: 10 }
    ],
    Arabic: [
      { speaker: 'agent', text: 'مرحباً، أنا مساعدة التوظيف من QEVN. تلقيت طلبك للحصول على دور مسؤول عمليات مطور رئيسي (DevOps). هل لديك 3 دقائق للإجابة على بعض أسئلة التأهيل السريعة؟', duration: 8 },
      { speaker: 'customer', text: 'مرحباً، نعم، أنا متفرغ للتحدث الآن.', duration: 3 },
      { speaker: 'agent', text: 'ممتاز. يتطلب هذا الدور بناء وتوسيع مجموعات الكوبرنيتس (Kubernetes) والتعامل مع عمليات النشر متعددة المناطق. كم سنة من الخبرة لديك في خدمات ويب أمازون (AWS) والترا فورم (Terraform)؟', duration: 9 },
      { speaker: 'customer', text: 'لدي حوالي 5 سنوات من الخبرة في AWS و Terraform، معظمها تشغيل إعدادات عالية التوفر.', duration: 5 },
      { speaker: 'agent', text: 'جميل. هذا يطابق معاييرنا. ما هي توقعات راتبك، وما هي أقرب فرصة يمكنك الانضمام فيها إلينا؟', duration: 6 },
      { speaker: 'customer', text: 'أتوقع 120 ألف دولار، وفترة الإشعار أسبوعان.', duration: 4 },
      { speaker: 'agent', text: 'مفهوم. قمت بتحديث حالة طلبك. سيقوم مدير الهندسة لدينا بمراجعة الطلب اليوم. في حال الموافقة، سأرسل تلقائياً رابط جدولة الجولة الفنية. شكراً لوقتك الثمين!', duration: 10 }
    ]
  }
}
