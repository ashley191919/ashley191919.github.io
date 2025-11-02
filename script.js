$(document).ready(function() {
  // 頁面淡入動畫
  $(".container").delay(200).animate({ opacity: 1, top: "0" }, 800);

  // 導覽列 hover 特效：字母間距
  $("nav a").hover(
    function() { $(this).css("letter-spacing", "1px"); },
    function() { $(this).css("letter-spacing", "0"); }
  );

  // Email 複製按鈕
  $("#copyEmail").click(function() {
    const email = "your_email@example.com"; // 改成你的 Email
    navigator.clipboard.writeText(email).then(() => {
      alert("已複製 Email: " + email);
    });
  });

  // 夜間模式切換
  $("#toggleDark").click(function() {
    $("body").toggleClass("dark-mode");
    const mode = $("body").hasClass("dark-mode") ? "☀️" : "🌙";
    $(this).text(mode);
  });

  // 背景音樂播放控制
  const bgm = $("#bgm")[0];
  $("#toggleMusic").click(function() {
    if (bgm.paused) {
      bgm.play();
      $(this).text("🔈");
    } else {
      bgm.pause();
      $(this).text("🔇");
    }
  });

  // 首頁打字效果
  if ($("#typing").length) {
    const text = $("#typing").text();
    $("#typing").text("");
    let index = 0;
    function typeChar() {
      if (index < text.length) {
        $("#typing").append(text.charAt(index));
        index++;
        setTimeout(typeChar, 80);
      }
    }
    typeChar();
  }
});
