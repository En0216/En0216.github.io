
// 等待網頁載入完成
$(document).ready(function() {

    // 功能一：點擊 Read More 顯示或隱藏更多介紹
    $("#moreBtn").click(function() {
        $("#moreText").slideToggle();

        if ($("#moreBtn").text() === "Read More") {
            $("#moreBtn").text("Read Less");
        } else {
            $("#moreBtn").text("Read More");
        }
    });

    // 功能二：點擊興趣按鈕，顯示對應內容
    $(".interestBtn").click(function() {
        let interest = $(this).data("interest");

        $("#interestText").hide().text(interest).fadeIn(500);
    });

    // 功能三：點擊導覽列，平滑移動到指定區塊
    $("nav a").click(function(event) {
        let target = $(this).attr("href");

        if (target && $(target).length) {
            event.preventDefault();

            $("html, body").animate({
                scrollTop: $(target).offset().top
            }, 600);
        }
    });

        // 功能四：使用 Ajax 取得外部資料
    $("#ajaxBtn").click(function() {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts/1",
            method: "GET",

            success: function(data) {
                $("#ajaxResult").html(
                    "<h4>" + data.title + "</h4>" +
                    "<p>" + data.body + "</p>"
                );
            },

            error: function() {
                $("#ajaxResult").text("資料取得失敗，請稍後再試。");
            }
        });
    });

});
