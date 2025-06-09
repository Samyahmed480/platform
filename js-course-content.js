// js-course-content.js
window.onload = function () {
    document.getElementById('modal-course-code').focus();
    // لا تخفي الدروس عند تحميل الصفحة
    // document.getElementById('lessonsContainer').style.display = 'none';
};
// منع إغلاق المودال إلا بالكود الصحيح
function handleModalSubmit(e) {
    e.preventDefault();
    const code = document.getElementById('modal-course-code').value.trim();
    if (code === "TSH2007") {
        document.getElementById('codeModal').style.display = 'none';
        document.getElementById('lessonsContainer').style.display = 'block';
        document.activeElement.blur();
        // إزالة مستمع الحدث بعد الدخول الصحيح
        document.getElementById('modalCodeForm').removeEventListener('submit', handleModalSubmit);
        // تعطيل جميع أحداث keydown المتعلقة بالمودال
        window.modalEntered = true;
    } else {
        alert("الكود غير صحيح، حاول مرة أخرى.");
    }
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('modalCodeForm').addEventListener('submit', handleModalSubmit);
    // منع إغلاق المودال بالضغط خارجها أو بالهروب
    document.getElementById('codeModal').addEventListener('click', function (e) {
        e.stopPropagation();
    });
    document.addEventListener('keydown', function (e) {
        // إذا لم يتم إدخال الكود بعد
        if (document.getElementById('codeModal').style.display === 'flex') {
            if (e.key === 'Escape') {
                e.preventDefault();
            }
        }
        // منع فتح أداة الفحص (الانسبكتر) من الكيبورد
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }
        if ((e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i') ||
            (e.metaKey && e.altKey && e.key.toLowerCase() === 'i')) {
            e.preventDefault();
            return false;
        }
        if ((e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'c') ||
            (e.metaKey && e.altKey && e.key.toLowerCase() === 'c')) {
            e.preventDefault();
            return false;
        }
        if ((e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'j') ||
            (e.metaKey && e.altKey && e.key.toLowerCase() === 'j')) {
            e.preventDefault();
            return false;
        }
        // بعد الدخول، تجاهل أي ضغط Enter حتى لا يعيد إخفاء الدروس
        if (window.modalEntered && e.key === 'Enter') {
            e.stopPropagation();
        }
    });
    // منع كليك يمين
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        return false;
    });
 
    } ;
});
