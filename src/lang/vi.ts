export const LanguageVietnamese = {
    "formating": {
      "main": "Lời nhắc chính",
      "jailbreak": "Lời nhắc bẻ khóa",
      "chats": "Cuộc trò chuyện trước đây",
      "lorebook": "Sách truyền thuyết",
      "globalNote": "Ghi chú chung",
      "authorNote": "Ghi chú của tác giả",
      "lastChat": "Cuộc trò chuyện cuối cùng",
      "description": "Mô tả nhân vật",
      "personaPrompt": "Lời nhắc của Persona",
      "plain": "Lời nhắc đơn giản",
      "memory": "Bộ nhớ Supa/Hypa"
    },
    "errors": {
      "toomuchtoken": "Lỗi: Mã thông báo bắt buộc tối thiểu lớn hơn Kích thước ngữ cảnh tối đa.",
      "unknownModel": "Lỗi: Đã chọn mô hình không xác định",
      "httpError": "Lỗi: lỗi trong yêu cầu:",
      "noData": "Không có dữ liệu trong tệp hoặc tệp bị hỏng",
      "onlyOneChat": "Phải có ít nhất một cuộc trò chuyện",
      "alreadyCharInGroup": "Đã có một nhân vật có cùng tên trong nhóm.",
      "noUserIcon": "Bạn phải đặt biểu tượng của mình trước."
    },
    "showHelp": "Hiển thị trợ giúp",
    "help": {
      "model": "Tùy chọn mô hình là mô hình chính được sử dụng trong trò chuyện.",
      "submodel": "Mô hình phụ trợ là mô hình được sử dụng để phân tích hình ảnh cảm xúc và đề xuất tự động, v.v. Nên sử dụng gpt3.5.",
      "oaiapikey": "Khóa Api cho OpenAI. bạn có thể lấy nó ở https://platform.openai.com/account/api-keys",
      "mainprompt": "Tùy chọn lời nhắc chính đặt hành vi mô hình mặc định.",
      "jailbreak": "Tùy chọn lời nhắc NSFW/jailbreak kích hoạt khi nút chuyển đổi NSFW/jailbreak được bật.",
      "globalNote": "một lưu ý có tác động mạnh mẽ đến hành vi của mô hình, còn được gọi là UJB. hoạt động ở tất cả các ký tự.",
      "autoSuggest": "Lời nhắc được sử dụng để tạo các tùy chọn khi tự động đề xuất phản hồi của người dùng.",
      "formatOrder": "thứ tự hình thành của lời nhắc. các khối thấp hơn sẽ có hiệu quả hơn đối với mô hình.",
      "forceUrl": "nếu nó không trống, yêu cầu sẽ chuyển đến url mà bạn đã nhập.",
      "tempature": "giá trị thấp hơn làm cho nhân vật tuân theo lời nhắc một cách chặt chẽ, nhưng nó sẽ có nhiều khả năng phản hồi giống như một cái máy hơn.\nGiá trị cao hơn sẽ dẫn đến hành vi sáng tạo, nhưng phản ứng của nhân vật có thể dễ dàng bị phá vỡ hơn.",
      "frequencyPenalty": "Giá trị cao hơn ngăn chặn việc sử dụng các từ trùng lặp trong phản hồi, nhưng phản hồi của nhân vật có thể dễ dàng bị hỏng hơn.",
      "presensePenalty": "Giá trị cao hơn sẽ ngăn chặn việc sử dụng các từ trùng lặp trong mọi ngữ cảnh, nhưng phản hồi của nhân vật có thể dễ bị phân tích hơn.",
      "sdProvider": "nhà cung cấp để tạo hình ảnh.",
      "msgSound": "Phát âm thanh *ding* khi nhân vật phản hồi",
      "charDesc": "Mô tả ngắn gọn về nhân vật. điều này ảnh hưởng đến phản ứng của nhân vật.",
      "charFirstMessage": "Tin nhắn đầu tiên của nhân vật. điều này ảnh hưởng lớn đến phản ứng của nhân vật.",
      "charNote": "một lưu ý có ảnh hưởng mạnh mẽ đến hành vi của mô hình. được nhúng vào ký tự hiện tại. còn được gọi là UJB.",
      "toggleNsfw": "bật và tắt lời nhắc NSFW/jailbreak.",
      "lorebook": "Lorebook là một từ điển do người dùng tạo ra cho AI. AI chỉ nhìn thấy nó khi khóa kích hoạt ở đâu trong ngữ cảnh.",
      "loreName": "tên của truyền thuyết. nó không ảnh hưởng đến Ai.",
      "loreActivationKey": "Nếu một trong các khóa kích hoạt tồn tại trong ngữ cảnh, truyền thuyết sẽ được kích hoạt và lời nhắc sẽ xuất hiện, được phân tách bằng dấu phẩy.",
      "loreorder": "Nếu chèn Thứ tự cao hơn, nó sẽ ảnh hưởng đến mô hình nhiều hơn và nó sẽ ít bị cắt hơn khi truyền thuyết được kích hoạt nhiều.",
      "bias": "thiên vị là dữ liệu khóa-giá trị sửa đổi khả năng xuất hiện của chuỗi.\nnó có thể là -100 đến 100, các giá trị cao hơn sẽ có nhiều khả năng xuất hiện hơn và các giá trị thấp hơn sẽ khó xuất hiện hơn\nCảnh báo: nếu mã thông báo sai, nó sẽ không hoạt động bình thường.",
      "emotion": "Tùy chọn Hình ảnh Cảm xúc hiển thị hình ảnh tùy theo cảm xúc của nhân vật và được phân tích theo phản ứng của nhân vật. bạn phải nhập tên cảm xúc dưới dạng các từ *(như niềm vui, hạnh phúc, sợ hãi, v.v.)* .cảm xúc có tên **trung tính** sẽ là cảm xúc mặc định nếu nó tồn tại. phải có nhiều hơn 3 hình ảnh để hoạt động bình thường.",
      "imggen": "Tùy chọn Tạo hình ảnh tạo và hiển thị hình ảnh từ chương trình bên ngoài. hình ảnh được tạo bởi dấu nhắc hình ảnh, được tạo bằng cách phân tích cuộc trò chuyện hiện tại.\n\n việc tạo hình ảnh được phân tích dựa trên các đối số khóa-giá trị, có thể định cấu hình ở bên dưới.\nPhím Zn**'always'** luôn được áp dụng và không thay đổi. Phím **'âm'** luôn áp dụng giá trị âm để tạo hình ảnh.\n\ncác đối tượng có giá trị của khóa khác sẽ thay đổi theo tên của khóa khi cuộc trò chuyện diễn ra.\n\nNếu một phím có ký tự đặc biệt ở phía trước tên của nó thì phím đó có tác dụng đặc biệt.\n- nếu khóa bắt đầu bằng **|**, giá trị của khóa sẽ không thay đổi.\n- nếu khóa bắt đầu bằng *******, giá trị của khóa sẽ có nhiều khả năng thay đổi hơn.\n\nkhi hình ảnh được tạo lần đầu tiên, bạn chỉ có thể thay đổi nó bằng cách sửa đổi 'Dữ liệu tạo hình ảnh hiện tại' ở bên dưới.",
      "regexScript": "Regex Script là tập lệnh tùy chỉnh thay thế chuỗi khớp IN với OUT.\n\nCó bốn lựa chọn loại.\n\n- **Sửa đổi đầu vào** sửa đổi đầu vào của người dùng\n\n- **Sửa đổi đầu ra** sửa đổi đầu ra của ký tự\n\n- **Sửa đổi dữ liệu yêu cầu** sửa đổi dữ liệu trò chuyện hiện tại khi được gửi.\n\n- **Sửa đổi hiển thị** chỉ sửa đổi văn bản khi được hiển thị mà không sửa đổi dữ liệu trò chuyện.\n\nIN phải là biểu thức chính quy không có cờ và không có dấu gạch chéo ở đầu và cuối.\n\nOUT là một chuỗi có thể bao gồm các mẫu thay thế. đây là những mẫu:\n\n- $$\n\n    - chèn $\n\n- $&\n\n    - chèn chuỗi con phù hợp.\n\n- $`\n\n    - chèn phần chuỗi đứng trước chuỗi con phù hợp.\n\n- 1$\n\n    - chèn nhóm phù hợp đầu tiên. làm việc với số khác như 2, 3...\n\n- $(tên)\n\n    - chèn nhóm được đặt tên\n\nNếu OUT bắt đầu bằng **@@**, nó không thay thế chuỗi mà thay vào đó tạo ra hiệu ứng đặc biệt nếu tìm thấy chuỗi trùng khớp.\n\n- @@emo (tên cảm xúc)\n\n    - nếu nhân vật ở chế độ Hình ảnh Cảm xúc, hãy đặt (tên cảm xúc) làm cảm xúc và ngăn mặc định.",
      "experimental": "Đây là một tính năng thử nghiệm. nó có thể không ổn định.",
      "oogaboogaURL": "Nếu WebUI của bạn hỗ trợ phiên bản api cũ hơn thì url của bạn sẽ trông *như https:.../run/textgen*\n\nNếu WebUI của bạn hỗ trợ Phiên bản mới của api thì url của bạn sẽ trông giống như *https://.../api/v1/generate* và sử dụng máy chủ api làm máy chủ lưu trữ, đồng thời thêm --api vào đối số.",
      "exampleMessage": "Các cuộc hội thoại ví dụ ảnh hưởng đến đầu ra của nhân vật. nó không sử dụng mã thông báo vĩnh viễn.\n\nĐịnh dạng ví dụ của cuộc hội thoại:\n\n```\n<BẮT ĐẦU>\n{{user}}: xin chào\n{{char}}: xin chào\n<BẮT ĐẦU>\n{{user}}: xin chào\nHaruhi: xin chào\n```\n\n```<START>``` Đánh dấu sự bắt đầu của một cuộc trò chuyện mới.",
      "creatorQuotes": "Lưu ý rằng xuất hiện trên đầu tin nhắn đầu tiên. Được sử dụng để thông báo cho người dùng về nhân vật này. Nó không đi vào dấu nhắc.",
      "systemPrompt": "Lời nhắc thay thế lời nhắc chính trong cài đặt nếu nó không trống.",
      "chatNote": "một lưu ý có ảnh hưởng mạnh mẽ đến hành vi của mô hình. được nhúng vào cuộc trò chuyện hiện tại. còn được gọi là bộ nhớ hoặc ujb.",
      "personality": "Mô tả ngắn gọn về tính cách nhân vật.\n\n**Không nên sử dụng tùy chọn này. Thay vào đó hãy mô tả nó bằng phần mô tả nhân vật.**",
      "scenario": "Một mô tả ngắn gọn về kịch bản của nhân vật.\n\n**Không nên sử dụng tùy chọn này. Thay vào đó hãy mô tả nó bằng phần mô tả nhân vật.**",
      "utilityBot": "Khi được kích hoạt, nó sẽ bỏ qua lời nhắc chính.\n\n**Không nên sử dụng tùy chọn này. Thay vào đó, hãy sửa đổi lời nhắc của hệ thống.**",
      "loreSelective": "Nếu chế độ Chọn lọc được bật, cả Khóa kích hoạt và Khóa phụ phải khớp nhau để kích hoạt truyền thuyết.",
      "loreRandomActivation": "Nếu Điều kiện Xác suất Sử dụng được kích hoạt, nếu tất cả các điều kiện khác của truyền thuyết đều được đáp ứng, truyền thuyết sẽ được kích hoạt với một xác suất đã đặt được đặt bởi 'Xác suất' mỗi lần trò chuyện được gửi.",
      "additionalAssets": "Nội dung bổ sung để hiển thị trong cuộc trò chuyện của bạn.\n\n - sử dụng `{{raw::<asset name>}}` để dùng làm đường dẫn.\n - sử dụng `{{img::<asset name>}}` để sử dụng làm hình ảnh\n - sử dụng `{{video::<asset name>}}` để sử dụng làm video\n - sử dụng `{{audio::<asset name>}}` để sử dụng làm âm thanh\n    - nên đặt HTML nền",
      "superMemory": "SuperMemory giúp nhân vật của bạn ghi nhớ nhiều hơn bằng cách cung cấp dữ liệu tóm tắt cho AI.\n\nMô hình SuperMemory là mô hình tóm tắt văn bản đó. davinci được khuyến nghị và các mô hình phụ trợ không được khuyến nghị trừ khi đó là mô hình chưa được lọc với hơn 2000 mã thông báo có kỹ năng tóm tắt tuyệt vời.\n\nLời nhắc SuperMemory quyết định lời nhắc nào sẽ được gửi để tóm tắt. nếu bạn để trống, nó sẽ sử dụng lời nhắc mặc định. nên để trống.\n\nSau khi thiết lập xong, bạn có thể sử dụng nó trong cài đặt của một nhân vật.",
      "replaceGlobalNote": "Nếu nó không trống, nó sẽ thay thế ghi chú chung hiện tại bằng ghi chú này.",
      "backgroundHTML": "Dữ liệu Markdown/HTML sẽ được đưa vào nền màn hình trò chuyện.\n\n bạn cũng có thể sử dụng tài sản bổ sung. ví dụ: bạn có thể sử dụng `{{audio::<asset name}}` cho nhạc nền.\n\n Ngoài ra, bạn có thể sử dụng những thứ này với các nội dung bổ sung:\n - `{{bg::<asset name>}}`: thêm nền làm nội dung"
    },
    "setup": {
      "chooseProvider": "Chọn nhà cung cấp AI",
      "openaikey": "OpenAI với Khóa API (Được khuyến nghị)",
      "openaiProxy": "Proxy ngược OpenAI",
      "setupmodelself": "Người khác/Tôi sẽ tự thiết lập",
      "inputApiKey": "Nhập khóa API tại đây",
      "apiKeyhelp": "Bạn có thể lấy khóa api từ:",
      "setupSelfHelp": "Tự thiết lập trong cài đặt, sau khi màn hình Chào mừng kết thúc.",
      "theme": "Chọn chủ đề của bạn",
      "themeDescWifulike": "Không phù hợp với di động",
      "themeDescWifuCut": "Thích hợp cho di động",
      "themeDescClassic": "Thích hợp cho mọi thiết bị",
      "texttheme": "Chọn màu văn bản của bạn",
      "inputName": "Cuối cùng, nhập Biệt hiệu của bạn."
    },
    "confirm": "Xác nhận",
    "goback": "Quay lại",
    "botSettings": "Cài đặt bot",
    "model": "Người mẫu",
    "apiKey": "Mã API",
    "providerURL": "URL yêu cầu",
    "providerJSON": "JSON nội dung yêu cầu",
    "mainPrompt": "Lời nhắc chính",
    "jailbreakPrompt": "Lời nhắc NSFW/Bẻ khóa",
    "globalNote": "Ghi chú chung",
    "autoSuggest": "Tự động đề xuất",
    "tokens": "Mã thông báo",
    "maxContextSize": "Kích thước ngữ cảnh tối đa",
    "maxResponseSize": "Kích thước phản hồi tối đa",
    "temperature": "Nhiệt độ",
    "frequencyPenalty": "Hình phạt tần số",
    "presensePenalty": "Hình phạt có mặt",
    "advancedSettings": "Cài đặt nâng cao",
    "advancedSettingsWarn": "Cảnh báo: Nếu bạn không biết tùy chọn này làm gì, đừng thay đổi nó!",
    "formatingOrder": "Thứ tự hình thành",
    "authorNote": "Ghi chú của tác giả",
    "firstMessage": "tin nhắn đầu tiên",
    "description": "Sự miêu tả",
    "jailbreakToggle": "Chuyển đổi NSFW/Bẻ khóa",
    "charIcon": "Biểu tượng nhân vật",
    "characterDisplay": "Hiển thị ký tự",
    "viewScreen": "Màn hình nhân vật bổ sung",
    "none": "Không có",
    "emotionImage": "Hình ảnh cảm xúc",
    "noImages": "Không có hình ảnh",
    "noBias": "Không thiên vị",
    "image": "Hình ảnh",
    "name": "Tên",
    "emotion": "Tên cảm xúc",
    "value": "Giá trị",
    "reroll": "tái sinh",
    "chatList": "Danh sách trò chuyện",
    "removeChat": "Xóa tin nhắn này?",
    "loreBook": "Sách truyền thuyết",
    "character": "Tính cách",
    "Chat": "Trò chuyện",
    "globalLoreInfo": "Lorebook nhân vật áp dụng cho tất cả các cuộc trò chuyện trong nhân vật.",
    "group": "Nhóm",
    "groupLoreInfo": "Group Lorebook áp dụng cho tất cả các cuộc trò chuyện trong nhóm.",
    "localLoreInfo": "Chat Lorebook chỉ áp dụng cho cuộc trò chuyện hiện tại.",
    "removeConfirm": "Bạn có thực sự muốn xóa:",
    "removeConfirm2": "Bạn có THỰC SỰ muốn loại bỏ:",
    "exportConfirm": "Bạn có muốn xuất cái này không?",
    "insertOrder": "Thứ tự chèn",
    "activationKeys": "Phím kích hoạt",
    "activationKeysInfo": "Được phân tách bằng dấu phẩy",
    "prompt": "Lời nhắc",
    "loreBookDepth": "Độ sâu tìm kiếm Lorebook",
    "loreBookToken": "Token tối đa của Lorebook",
    "removeCharacter": "Xóa ký tự",
    "removeGroup": "Xóa nhóm",
    "exportCharacter": "Xuất ký tự",
    "userSetting": "Thiết lập người dùng",
    "username": "Tên của bạn",
    "userIcon": "Biểu tượng của bạn",
    "successExport": "Đã xuất thành công và tải xuống thư mục tải xuống của bạn",
    "successImport": "Đã nhập thành công",
    "importedCharacter": "Ký tự đã nhập",
    "alwaysActive": "Luôn luôn hoạt động",
    "additionalPrompt": "Lời nhắc bổ sung",
    "descriptionPrefix": "Tiền tố mô tả",
    "forceReplaceUrl": "Proxy ngược",
    "emotionWarn": "Mô hình phụ trợ được sử dụng.",
    "plugin": "Cắm vào",
    "language": "Ngôn ngữ",
    "UiLanguage": "Ngôn ngữ giao diện người dùng",
    "createfromScratch": "Tạo từ đầu",
    "importCharacter": "Nhập ký tự",
    "translator": "Người phiên dịch",
    "disabled": "Tàn tật",
    "noPluginSelected": "Mô hình được chọn làm plugin nhưng không có plugin nào được chọn.",
    "text": "Chữ",
    "UISize": "Kích thước văn bản trò chuyện",
    "newVersion": "Đã tìm thấy bản cập nhật, bạn có muốn cài đặt không?",
    "display": "Màn hình & Âm thanh",
    "useCustomBackground": "Tùy chỉnh nền",
    "translateInput": "Dịch đầu vào",
    "autoTranslation": "Dịch tự động",
    "fullscreen": "Toàn màn hình",
    "playMessage": "Phát âm thanh tin nhắn",
    "iconSize": "Kích cỡ biểu tượng",
    "createGroup": "Tạo trò chuyện nhóm",
    "groupIcon": "Biểu tượng nhóm",
    "single": "Đơn",
    "multiple": "Nhiều",
    "useCharLorebook": "Sử dụng truyền thuyết trong nhân vật",
    "selectChar": "Chọn nhân vật",
    "askLoadFirstMsg": "Chúng ta tải tin nhắn đầu tiên nhé?",
    "theme": "chủ đề",
    "editOrder": "Chỉnh sửa đơn hàng",
    "autoMode": "Chế độ tự động",
    "submodel": "Mô hình phụ trợ",
    "timeOutinSec": "Thời gian chờ (tính bằng giây)",
    "emotionPrompt": "Nhắc nhở cảm xúc",
    "singleView": "Chế độ xem đơn",
    "SpacedView": "Xem nhiều ký tự",
    "emphasizedView": "Chế độ xem nhân vật đôi",
    "pluginWarn": "Các plugin chạy trong môi trường biệt lập nhưng việc cài đặt các plugin độc hại có thể gây ra sự cố.",
    "createGroupImg": "Tạo biểu tượng nhóm",
    "waifuWidth": "Chiều rộng trò chuyện Waifu",
    "savebackup": "Lưu Sao lưu vào google",
    "loadbackup": "Tải bản sao lưu từ google",
    "files": "Các tập tin",
    "backupConfirm": "Bạn có thực sự muốn lưu bản sao lưu?",
    "backupLoadConfirm": "Bạn có thực sự muốn tải bản sao lưu? Tất cả dữ liệu sẽ bị mất!",
    "backupLoadConfirm2": "Bạn có thực sự muốn tải bản sao lưu không? Tất cả dữ liệu sẽ bị mất!",
    "pasteAuthCode": "Vui lòng sao chép mã xác thực từ cửa sổ bật lên và dán vào đây:",
    "others": "Người khác",
    "presets": "cài đặt trước",
    "imageGeneration": "Tạo hình ảnh",
    "provider": "Các nhà cung cấp",
    "key": "chìa khóa",
    "noData": "Không có dữ liệu",
    "currentImageGeneration": "Dữ liệu tạo hình ảnh hiện tại",
    "promptPreprocess": "Sử dụng tiền xử lý nhanh chóng",
    "SwipeRegenerate": "Sử dụng Vuốt để tái tạo",
    "instantRemove": "Xóa tiếp theo khi xóa tin nhắn",
    "instantRemoveConfirm": "Bạn có muốn xóa chỉ một tin nhắn không? Nếu bạn chọn Không thì tin nhắn sau đó cũng sẽ bị xóa.",
    "textColor": "Văn bản màu",
    "classicRisu": "Risu cổ điển",
    "highcontrast": "Độ tương phản cao",
    "quickPreset": "Bạn có thể nhanh chóng thay đổi cài đặt trước bằng Ctrl + (Chỉ mục cài sẵn)",
    "requestretrys": "Yêu cầu thử lại khi thất bại",
    "utilityBot": "Bot tiện ích",
    "ShowLog": "Hiển thị nhật ký yêu cầu",
    "waifuWidth2": "Kích thước ký tự Waifu",
    "sayNothing": "Nhập 'không nói gì' khi không nhập chuỗi",
    "regexScript": "Tập lệnh Regex",
    "type": "Kiểu",
    "editInput": "Sửa đổi đầu vào",
    "editOutput": "Sửa đổi đầu ra",
    "editProcess": "Sửa đổi dữ liệu yêu cầu",
    "loadLatest": "Tải bản sao lưu mới nhất",
    "loadOthers": "Tải các bản sao lưu khác",
    "exampleMessage": "Tin nhắn mẫu",
    "creatorNotes": "Bình luận của người sáng tạo",
    "systemPrompt": "Lời nhắc hệ thống",
    "characterNotes": "Ghi chú nhân vật",
    "personality": "Nhân cách",
    "scenario": "Kịch bản",
    "alternateGreetings": "Lời chào thay thế",
    "unrecommended": "Không được khuyến khích",
    "chatNotes": "Ghi chú trò chuyện",
    "showUnrecommended": "Hiển thị cài đặt không được đề xuất",
    "altGreet": "Tin nhắn đầu tiên thay thế",
    "scripts": "Tập lệnh",
    "settings": "Cài đặt",
    "selective": "chọn lọc",
    "SecondaryKeys": "Phím phụ",
    "useGlobalSettings": "Sử dụng Cài đặt chung",
    "recursiveScanning": "Quét đệ quy",
    "creator": "Người sáng tạo",
    "CharVersion": "Phiên bản nhân vật",
    "Speech": "Lời nói",
    "ToggleSuperMemory": "Chuyển đổi SupaBộ nhớ",
    "SuperMemory": "SupaBộ Nhớ",
    "useExperimental": "Có thể thực hiện các tính năng thử nghiệm",
    "showMemoryLimit": "Hiển thị giới hạn bộ nhớ",
    "roundIcons": "Biểu tượng tròn",
    "streaming": "Truyền phát",
    "chatBot": "Bot trò chuyện",
    "otherBots": "Bot khác",
    "user": "Người dùng",
    "additionalAssets": "Tài sản bổ sung",
    "editDisplay": "Sửa đổi hiển thị",
    "community": "Cộng đồng",
    "textBackgrounds": "Màu màn hình văn bản tùy chỉnh",
    "textBorder": "Đề cương văn bản",
    "textScreenRound": "Màn hình văn bản tròn",
    "textScreenBorder": "Viền màn hình văn bản",
    "ttsReadOnlyQuoted": "Chỉ đọc trích dẫn",
    "ttsStop": "Dừng TTS",
    "askRemoval": "Yêu cầu xóa",
    "replaceGlobalNote": "Thay thế ghi chú toàn cầu",
    "charLoreBook": "Truyện nhân vật",
    "globalLoreBook": "Sách truyền thuyết toàn cầu",
    "globalRegexScript": "Regex toàn cầu",
    "accessibility": "Khả năng tiếp cận",
    "sendWithEnter": "Gửi bằng phím Enter",
    "clickToEdit": "Bấm vào văn bản để chỉnh sửa",
    "setNodePassword": "Đặt mật khẩu của bạn để bảo mật",
    "inputNodePassword": "Nhập mật khẩu của bạn. nếu bạn không nhớ, hãy xóa save/__password.txt trong tệp máy chủ của bạn và khởi động lại máy chủ.",
    "simple": "Đơn giản",
    "advanced": "Trình độ cao",
    "askReRollAutoSuggestions": "Đề xuất tự động cuộn lại",
    "creatingSuggestions": "Đang tạo đề xuất...",
    "orderByOrder": "Nói chuyện theo thứ tự",
    "removeFromGroup": "Bạn có thực sự muốn xóa {{char}} khỏi nhóm không?",
    "talkness": "tính nói nhiều",
    "active": "Tích cực",
    "loreRandomActivation": "Sử dụng điều kiện xác suất",
    "activationProbability": "Xác suất",
    "shareCloud": "Chia sẻ lên RisuRealm",
    "hub": "RisuRealm",
    "tags": "Thẻ",
    "backgroundHTML": "Nhúng nền",
    "copied": "Đã sao chép",
    "useChatCopy": "Sử dụng Sao chép tin nhắn trò chuyện",
    "useChatSticker": "Sử dụng nhãn dán trò chuyện",
    "useAdditionalAssetsPreview": "Sử dụng bản xem trước nội dung bổ sung",
    "autoTranslateInput": "Đầu vào dịch tự động",
    "enterMessageForTranslateToEnglish": "Nhập tin nhắn để dịch sang tiếng Anh",
    "recent": "Gần đây",
    "downloads": "Tải xuống",
    "trending": "Đang thịnh hành",
    "imageCompression": "Nén hình ảnh",
    "notLoggedIn": "Chưa đăng nhập vào tài khoản Risu",
    "googleDriveInfo": "Kết nối với Google Drive để đồng bộ dữ liệu của bạn.",
    "googleDriveConnection": "Kết nối Google Drive",
    "googleDriveConnected": "Đã kết nối Google Drive",
    "SaveDataInAccount": "Lưu dữ liệu trong tài khoản",
    "dataSavingInAccount": "Lưu dữ liệu trong tài khoản",
    "logout": "Đăng xuất",
    "loadDataFromAccount": "Tải dữ liệu từ tài khoản",
    "saveCurrentDataToAccount": "Lưu dữ liệu hiện tại vào tài khoản",
    "chatAssumed": "--",
    "proxyAPIKey": "Khóa proxy/Mật khẩu",
    "proxyRequestModel": "Mô hình yêu cầu proxy",
    "officialWiki": "Wiki chính thức",
    "officialWikiDesc": "Wiki chính thức của RisuAI. cứ thoải mái xem nhé.",
    "officialDiscord": "Bất hòa chính thức",
    "officialDiscordDesc": "Discord chính thức nói về RisuAI",
    "confirmRecommendedPreset": "Có một cài đặt được đề xuất cho mô hình này. bạn có muốn thay đổi cài đặt đó không? (bạn có thể tắt tính năng hỏi trong phần cài đặt khả năng truy cập)",
    "toggleConfirmRecommendedPreset": "Yêu cầu cài đặt được đề xuất khi thay đổi kiểu máy",
    "recommendedPreset": "Đặt thành Cài đặt được đề xuất",
    "persona": "nhân cách",
    "icon": "Biểu tượng",
    "account": "Tài khoản",
    "remove": "Di dời",
    "creationSuccess": "Sáng tạo thành công",
    "noweb": "Tính năng này không thể sử dụng được trên phiên bản web.",
    "createBotInternet": "Tạo Bot từ Internet bằng AI",
    "createBotInternetAlert": "Vui lòng cung cấp tên nhân vật và bộ truyện/trò chơi tương ứng.",
    "able": "Có thể",
    "assetWidth": "Chiều rộng tối đa của hình ảnh nội dung",
    "animationSpeed": "Tốc độ hoạt ảnh",
    "screenshot": "Ảnh chụp màn hình",
    "screenshotSaved": "Đã lưu ảnh chụp màn hình",
    "inputBotGenerationPrompt": "Nhập lời nhắc tạo Bot",
    "createBotAI": "Tạo OC Bot từ AI",
    "createBotwithAI": "Tạo Bot từ AI",
    "changeFolderName": "Nhập tên thư mục mới (để trống để hủy)",
    "cancel": "Hủy bỏ",
    "renameFolder": "Đổi tên thư mục",
    "changeFolderColor": "Thay đổi màu thư mục",
    "fullWordMatching": "So khớp từ đầy đủ",
    "botSettingAtStart": "Menu Bot khi khởi chạy",
    "triggerStart": "Đang trò chuyện Gửi",
    "triggerInput": "Trên đầu ra của người dùng",
    "triggerOutput": "Trên đầu ra của nhân vật",
    "triggerManual": "Chỉ kích hoạt thủ công",
    "triggerCondVar": "Nếu có thể thay đổi",
    "triggerCondExists": "Nếu văn bản tồn tại trên trò chuyện",
    "triggerScript": "Tập lệnh kích hoạt",
    "triggerMatchRegex": "Phù hợp với Regex",
    "triggerMatchLoose": "Trận đấu lỏng lẻo",
    "triggerMatchStrict": "Trận đấu nghiêm ngặt",
    "searchDepth": "Độ sâu tìm kiếm",
    "equal": "Tương đương với",
    "notEqual": "Không bằng",
    "greater": "Lớn hơn",
    "less": "Ít hơn",
    "greaterEqual": "Lớn hơn hoặc bằng",
    "lessEqual": "Nhỏ hơn hoặc bằng",
    "triggerEffSysPrompt": "Thêm lời nhắc hệ thống",
    "triggerEffSetVar": "Sửa đổi biến",
    "triggerEffImperson": "Gửi trò chuyện",
    "varableName": "Tên biến",
    "role": "Vai trò",
    "location": "Vị trí",
    "promptstart": "Bắt đầu lời nhắc",
    "promptend": "Kết thúc lời nhắc",
    "historyend": "Kết thúc lịch sử",
    "always": "Luôn luôn",
    "noEffect": "không có hiệu lực",
    "invaildTriggerEffect": "Hiệu ứng này không hoạt động đối với loại kích hoạt này.",
    "operator": "Nhà điều hành",
    "TriggerSetToVar": "Đặt thành Biến",
    "TriggerAddToVar": "Thêm vào biến",
    "TriggerSubToVar": "Trừ từ biến",
    "TriggerMulToVar": "Nhân với biến",
    "TriggerDivToVar": "Chia từ biến",
    "isNull": "chưa được thiết lập",
    "ifChatIndex": "Nếu chỉ mục trò chuyện",
    "ifRandom": "Nếu ngẫu nhiên",
    "hideRealm": "Ẩn RisuRealm",
    "popularityLevel": "{} Mức độ phổ biến",
    "colorScheme": "Bảng màu",
    "rangeStart": "Phạm vi bắt đầu",
    "rangeEnd": "Cuối phạm vi",
    "untilChatEnd": "Cho đến khi kết thúc cuộc trò chuyện",
    "usePromptTemplate": "Sử dụng mẫu nhắc nhở",
    "specialType": "Loại đặc biệt",
    "noSpecialType": "Không có loại đặc biệt",
    "forceProxyAsOpenAI": "Buộc định dạng proxy là OpenAI",
    "promptTemplate": "Mẫu nhắc nhở",
    "customInnerFormat": "Định dạng bên trong tùy chỉnh",
    "innerFormat": "Định dạng bên trong",
    "HypaMemory": "HypaBộ nhớ",
    "ToggleHypaMemory": "Chuyển đổi HypaMemory",
    "resetPromptTemplateConfirm": "Bạn có thực sự muốn đặt lại mẫu lời nhắc không?",
    "emotionMethod": "Phương pháp cảm xúc",
    "continueResponse": "Tiếp tục phản hồi",
    "showMenuChatList": "Hiển thị Menu Danh sách Trò chuyện",
    "translatorLanguage": "Ngôn ngữ dịch",
    "translatorType": "Loại dịch giả",
    "deeplKey": "Khóa API deepL",
    "deeplFreeKey": "Khóa API miễn phí deepL",
    "exportPersona": "Xuất khẩu nhân vật",
    "importPersona": "Nhập khẩu nhân vật",
    "export": "Xuất khẩu",
    "import": "Nhập khẩu",
    "supporterThanks": "Người ủng hộ Cảm ơn",
    "supporterThanksDesc": "Cảm ơn sự hỗ trợ của bạn!",
    "donatorPatreonDesc": "Theo mặc định, nó sẽ không được hiển thị trong danh sách bảo mật. nếu bạn muốn hiển thị biệt danh của mình, hãy truy cập trang patreon của RisuAI và nhấn nút liên kết.",
    "useNamePrefix": "Sử dụng tiền tố tên",
    "textAdventureNAI": "Chạy dưới dạng cuộc phiêu lưu văn bản",
    "appendNameNAI": "Nối tên vào NAI",
    "customStopWords": "Từ dừng tùy chỉnh",
    "defaultPrompt": "Lời nhắc mặc định"
}