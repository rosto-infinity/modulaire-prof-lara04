
<template>
    <div>

        <!-- Contenu existant -->
        <div class="hero flex flex-col-reverse items-center justify-center">
            <div class="hero-content flex items-center justify-center">
                <div
                    class="z-10 w-full items-center p-6 text-center md:p-12 lg:w-1/2 lg:items-start lg:text-left">
                    <h1 class="mb-4 text-center text-3xl font-bold md:text-6xl">
                        <span class="text-[38px] text-[#00c06b] md:text-[61px]">Devinsto</span> <br>
                        Apprenez, Créez, Collaborez sans limites.
                    </h1>

                    <p class="mb-6 text-center text-base md:text-lg lg:pr-20">
                        La plateforme ultime pour apprendre, collaborer et construire des projets en développement web,
                        graphisme, et bien plus encore.
                    </p>
                    <div class="k text-center">
                        <Link href="/register" class="rounded-full bg-[#00c06b] px-4 py-2 font-semibold text-white hover:bg-[#00ba69]">
                            Créer votre compte
                        </Link>
                        <Link href="/courses" class="ml-5 rounded-full border-2 border-[#00c06b] px-4 py-2 font-semibold hover:bg-[#00ba69]">
                            Parcourir les cours
                        </Link>
                    </div>
                </div>
            </div>

            <div class="hero-logo-anime">
                <div class="svgBox">
                    <svg width="96.427" height="77.88" viewBox="0 0 96.427 77.88">
                        <defs>
                            <linearGradient id="rosto">
                                <stop offset="0%" stop-color="#d2305c" />
                                <stop offset="25%" stop-color="#ff5e00" />
                                <stop offset="50%" stop-color="#ffeb00" />
                                <stop offset="75%" stop-color="#00c06b" />
                                <stop offset="100%" stop-color="#00c06b" />
                            </linearGradient>
                        </defs>
                        <g id="Groupe_17" data-name="Groupe 17" transform="translate(0 0)">
                            <path
                                d="M16.114,73.261c32.627-3.8,8.355-55.2,32.712-65.018,15.829-6.383,27.6,3.977,32.915,9.854,4.978,5.587,21.029,40.331-16.254,53.944C28.374,79.95,27.188,50.2,11.746,55.585c-6.12,3.369-8.772,11.352-4.368,16.458,3.556,1.93,6.154,1.52,8.737,1.219"
                                fill="none" />
                        </g>
                    </svg>
                    <svg width="96.427" height="77.88" viewBox="0 0 96.427 77.88">
                        <defs>
                            <linearGradient id="rosto">
                                <stop offset="0%" stop-color="#d2305c" />
                                <stop offset="25%" stop-color="#ff5e00" />
                                <stop offset="50%" stop-color="#ffeb00" />
                                <stop offset="75%" stop-color="#00c06b" />
                                <stop offset="100%" stop-color="#00c06b" />
                            </linearGradient>
                        </defs>
                        <g id="Groupe_17" data-name="Groupe 17" transform="translate(0 0)">
                            <path
                                d="M16.114,73.261c32.627-3.8,8.355-55.2,32.712-65.018,15.829-6.383,27.6,3.977,32.915,9.854,4.978,5.587,21.029,40.331-16.254,53.944C28.374,79.95,27.188,50.2,11.746,55.585c-6.12,3.369-8.772,11.352-4.368,16.458,3.556,1.93,6.154,1.52,8.737,1.219"
                                fill="none" />
                        </g>
                    </svg>
                    <svg width="96.427" height="77.88" viewBox="0 0 96.427 77.88">
                        <defs>
                            <linearGradient id="rosto">
                                <stop offset="0%" stop-color="#d2305c" />
                                <stop offset="25%" stop-color="#ff5e00" />
                                <stop offset="50%" stop-color="#ffeb00" />
                                <stop offset="75%" stop-color="#00c06b" />
                                <stop offset="100%" stop-color="#00c06b" />
                            </linearGradient>
                        </defs>
                        <g id="Groupe_17" data-name="Groupe 17" transform="translate(0 0)">
                            <path
                                d="M16.114,73.261c32.627-3.8,8.355-55.2,32.712-65.018,15.829-6.383,27.6,3.977,32.915,9.854,4.978,5.587,21.029,40.331-16.254,53.944C28.374,79.95,27.188,50.2,11.746,55.585c-6.12,3.369-8.772,11.352-4.368,16.458,3.556,1.93,6.154,1.52,8.737,1.219"
                                fill="none" />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'

function toggleTheme() {
    // Logique pour changer le thème
    document.body.classList.toggle('dark-theme');
}
</script>

<style scoped>
/* Styles pour le menu de navigation */
nav {
    background-color: #2d3748;
}

nav a {
    color: #ffffff;
    text-decoration: none;
    margin-right: 15px;
}

nav a:hover {
    text-decoration: underline;
}

/* Styles existants */
.svgBox {
    margin-left: 120px;
    display: grid;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
}

.svgBox svg {
    fill: none;
    stroke: url(#rosto);
    stroke-width: 9;
    transform: scale(2.1);
    stroke-dasharray: 43 220;
    stroke-linecap: round;
    animation: devinsto 4s linear infinite;
    position: absolute;
}

@keyframes devinsto {
    0% {
        stroke-dashoffset: 0;
    }
    100% {
        stroke-dashoffset: 255;
    }
}

.svgBox svg:nth-of-type(1) {
    animation: none;
    stroke: #033503;
    stroke-dasharray: none;
}

.svgBox svg:nth-of-type(2) {
    filter: blur(1px);
}
</style>
