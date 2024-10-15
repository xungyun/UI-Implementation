// 성과 통계 차트 예시
const ctx = document.getElementById('performanceChart').getContext('2d');
const performanceChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['과제 1', '과제 2', '과제 3'],
        datasets: [{
            label: '완료 비율',
            data: [90, 75, 85],
            backgroundColor: 'rgba(76, 175, 80, 0.5',
            borderColor: 'rgba(76, 175, 80, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
