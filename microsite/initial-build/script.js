document.getElementById('open-curtain-button').addEventListener('click', function() {
    document.getElementById('curtain-left').style.transform = 'translateX(-100%)';
    document.getElementById('curtain-right').style.transform = 'translateX(100%)';
    this.style.display = 'none';

    setTimeout(function() {
        var mainContent = document.getElementById('main-content');
        mainContent.style.display = 'flex'; 
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
    }, 1000); 
});
