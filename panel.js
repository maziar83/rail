function openSection(id) {
  document.querySelectorAll('.panel-section').forEach(el => el.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function goBack() {
  document.querySelectorAll('.panel-section').forEach(el => el.style.display = 'none');
}

document.getElementById("profileForm").onsubmit = (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  localStorage.setItem("profileData", JSON.stringify(data));
  alert("اطلاعات ذخیره شد.");
};

// --- گزارش کار ---
function openReportForm() {
  const date = prompt("📅 تاریخ گزارش؟");
  if (!date) return;
  const report = prompt("✍️ محتوای گزارش؟ مثلاً: زیست، 2 ساعت، 50 تست، ...");
  if (!report) return;

  let allReports = JSON.parse(localStorage.getItem("dailyReports") || "{}");
  if (!allReports[date]) allReports[date] = [];
  allReports[date].push(report);
  localStorage.setItem("dailyReports", JSON.stringify(allReports));
  alert("📌 گزارش ذخیره شد.");
}

function showReports() {
  const area = document.getElementById("reportArea");
  area.innerHTML = "";
  let reports = JSON.parse(localStorage.getItem("dailyReports") || "{}");
  for (let date in reports) {
    const box = document.createElement("div");
    box.innerHTML = `<b>${date}</b><ul>` + reports[date].map(r => `<li>${r}</li>`).join('') + "</ul>";
    area.appendChild(box);
  }
}
