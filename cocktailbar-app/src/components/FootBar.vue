<template>
    <footer v-if="isVisible"  :class="{ 'is-visible': isVisible }" class="app-footer">
        <div class="horizontal-line"></div>
        <div class="footer-content">
            <div class="column">
                <h3>INFORMACJE</h3>
                <ul>
                    <li>Regulamin</li>
                    <li>Polityka Prywatności</li>
                    <li>O nas</li>
                    <li>Kontakt</li>
                    <li>Organizacja Eventów</li>
                </ul>
            </div>
            <div class="vertical-line"></div>
            <div class="column">
                <div class="social-icons">
                    <a href="https://www.facebook.com/profile.php?id=61559974028659" target="_blank">
                        <img :src="logofb" alt="Logo facebook" />
                    </a>
                    <a href="https://www.instagram.com/cocktailservice.pl/" target="_blank">
                        <img :src="logoinst" alt="Logo instagram" />
                    </a>
                </div>
                <p>biuro@cocktailservice.pl</p>
            </div>
            <div class="vertical-line"></div>
            <div class="column">
                <h3>NASZE BIURO I MAGAZYN</h3>
                <p class="adress">
                    COCKTAIL SERVICE SP. Z O.O.<br>
                    Jagiellońska 82C Bud. 109<br>
                    03-301, Warszawa
                </p>
                <p class="nip">NIP: 5252996326</p>
            </div>
        </div>
        <div class="horizontal-line"></div>
        <p class="copy">COPYRIGHT BY COCKTAIL SERVICE</p>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter',
    data() {
        return {
            isVisible: false,
            logofb: require('@/assets/images/contact/fb.png'),
            logoinst: require('@/assets/images/contact/instagram.png'),
        };
    },
    methods: {
        handleScroll() {
            const bottomOfWindow = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
            this.isVisible = bottomOfWindow;
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
};
</script>

<style scoped>
.app-footer {
    background-color: var(--dark-color-font);
    /* Jasny kolor tła, zgodnie z obrazkiem */
    color: var(--dark-color-background);
    /* Kolor tekstu */
    text-align: center;
    padding: 20px 0;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    transition: opacity 0.3s ease;
    opacity: 0;
    z-index: 1000;
}

.is-visible {
    opacity: 1;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 50px;

    font-size: 12px;

}

.column {
    flex: 1;
    padding: 0 20px;
    text-align: left;
}

.column h3 {
    /* font-size: 16px;
    font-weight: bold; */
    margin-bottom: 10px;
}

.column ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.column ul li {
    margin-bottom: 5px;
}

.column p {
    margin: 10px 0;
}

.column .adress {
    margin-bottom: 35px;
}

.social-icons {
    display: flex;
    /* justify-content: space-around; */
    margin-top: 10px;
    margin-bottom: 80px;
}

.social-icons a img {
    width: 30px;
    height: 30px;
}

.horizontal-line {
    width: calc(100% - 100px);
    height: 1px;
    background-color: var(--dark-color-background);
    margin: 20px auto;
}

.vertical-line {
    width: 1px;
    height: auto;
    /* Dostosowanie wysokości do rodzica */
    background-color: var(--dark-color-background);
    padding: 0;
    /* margin: 40px 0px 30px 0px; */
    /* Upewnienie się, że nie ma marginesów */
}

.copy {
    font-size: 11px;
}
</style>