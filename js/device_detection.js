export default function userDiveceInfo(id) {
    const d = document;
    const n = navigator;
    const ua = n.userAgent;
    const $userDevice = d.getElementById(id);

    const isMobile = {
        android: () => ua.match(/android/i),
        ios: () => ua.match(/iPhone|iPad|iPod/i),
        windowsPhone: () => ua.match(/windows phone/i),
        any: function() {
            return this.android() || this.ios() || this.windowsPhone()
        }
    };
    const isDesktop = {
        linux: () => ua.match(/linux/i),
        macOS: () => ua.match(/mac os/i),
        windows: () => ua.match(/windows nt/i),
        any: function() {
            return this.windows() || this.linux() || this.macOS()
        }
    };
    const isBrowser = {
        chrome: () => ua.match(/chrome/i),
        safari: () => ua.match(/safari/i),
        firefox: () => ua.match(/firefox/i),
        opera: () => ua.match(/opera|opera mini/i),
        ie: () => ua.match(/msie|iemobile/i),
        edge: () => ua.match(/edge/i),
        any: function() {
            return (
            this.chrome() || 
            this.safari() || 
            this.firefox() || 
            this.ie() || 
            this.edge()
            );
        }
    };

    $userDevice.innerHTML = `<h4>${ua}</h4>`;

    $userDevice.insertAdjacentHTML("beforeend", `<br><p>Sistema Operativo: ${(isMobile.any())? isMobile.any() : isDesktop.any()}</p>`);
    $userDevice.insertAdjacentHTML("beforeend", `<br><p>Browser: ${isBrowser.any()}</p>`);

}