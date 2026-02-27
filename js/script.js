document.addEventListener('DOMContentLoaded', function() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    const title = document.querySelector('.title');
    let hue = 0;
    function animateTitle() {
        hue = (hue + 1) % 360;
        title.style.textShadow = `0 0 20px hsla(${hue}, 70%, 60%, 0.5)`;
    }
    setInterval(animateTitle, 50);
});

const contactData = {
    email: {
        title: '📧 邮箱',
        text: 'xiaoyanlala123456@outlook.com',
        link: 'mailto:xiaoyanlala123456@outlook.com'
    },
    github: {
        title: '🐱 GitHub',
        text: 'github.com/HTPS-CDY',
        link: 'https://github.com/HTPS-CDY'
    },
    douyin: {
        title: '📱 抖音',
        text: 'v.douyin.com/jqMHA7Qd7Ic',
        link: 'https://v.douyin.com/jqMHA7Qd7Ic/'
    }
};

function showContactDialog(type) {
    const data = contactData[type];
    if (!data) return;
    
    const overlay = document.createElement('div');
    overlay.className = 'dialog-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: fadeIn 0.2s ease-out;
    `;
    
    const dialog = document.createElement('div');
    dialog.className = 'dialog';
    dialog.style.cssText = `
        background: linear-gradient(135deg, #1e293b, #0f172a);
        border: 2px solid #6366f1;
        border-radius: 20px;
        padding: 30px;
        max-width: 400px;
        width: 90%;
        text-align: center;
        box-shadow: 0 20px 60px rgba(99, 102, 241, 0.4);
        animation: scaleIn 0.3s ease-out;
    `;
    
    dialog.innerHTML = `
        <h3 style="font-size: 1.5rem; margin-bottom: 15px; color: #f8fafc;">${data.title}</h3>
        <a href="${data.link}" target="_blank" style="
            display: inline-block;
            padding: 15px 30px;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            color: white;
            text-decoration: none;
            border-radius: 10px;
            font-size: 1rem;
            margin-bottom: 20px;
            transition: transform 0.2s, box-shadow 0.2s;
        " onmouseover="this.style.transform='scale(1.05)';this.style.boxShadow='0 10px 30px rgba(99,102,241,0.5)'" 
           onmouseout="this.style.transform='scale(1)';this.style.boxShadow='none'">${data.text}</a>
        <button class="dialog-close" style="
            display: block;
            width: 100%;
            padding: 12px;
            background: transparent;
            border: 1px solid #6366f1;
            color: #94a3b8;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1rem;
            transition: all 0.2s;
        " onmouseover="this.style.background='#6366f1';this.style.color='white'" 
           onmouseout="this.style.background='transparent';this.style.color='#94a3b8'">关闭</button>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes scaleIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(overlay);
    document.body.appendChild(dialog);
    
    const closeBtn = dialog.querySelector('.dialog-close');
    closeBtn.addEventListener('click', () => {
        overlay.remove();
        dialog.remove();
        style.remove();
    });
    
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.remove();
            dialog.remove();
            style.remove();
        }
    });
}
