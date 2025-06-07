document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const code = document.getElementById('course-code').value.trim();
    // غيّر الكود الصحيح حسب الحاجة
    if (code === "TSH2007") {
        window.location.href = "course-content.html";
    } else {
        alert("الكود غير صحيح، حاول مرة أخرى.");
    }
});