document.addEventListener("DOMContentLoaded", function () {
    // プロフィールの表示・非表示
    const profileSection = document.querySelector(".profile");
    const toggleButton = document.getElementById("toggleProfile");

    toggleButton.addEventListener("click", function () {
        profileSection.classList.toggle("hidden");
        toggleButton.innerHTML = profileSection.classList.contains("hidden")
            ? '<i class="fas fa-eye"></i> プロフィールを表示'
            : '<i class="fas fa-eye-slash"></i> プロフィールを隠す';
    });

    // スクロール時にスキルリストをフェードイン
    const skillsSection = document.querySelector(".skills");

    function fadeInSkills() {
        const sectionTop = skillsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 50) {
            skillsSection.classList.add("show");
        }
    }

    window.addEventListener("scroll", fadeInSkills);
    fadeInSkills(); // 初回チェック

    // お問い合わせボタンをクリックしたらアラートを表示
    const contactButton = document.getElementById("contactBtn");

    contactButton.addEventListener("click", function () {
        alert("お問い合わせありがとうございます！近日中にご返信いたします。");
    });
});
