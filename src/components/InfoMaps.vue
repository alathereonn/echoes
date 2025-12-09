<template>
    <section class="bg-gray-100">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div class="mt-16 lg:-mt-15">
            <nav class="text-xs text-slate-500 mb-6">
                <RouterLink to="/" class="hover:text-pink-500">Home</RouterLink>
                <span class="mx-1">&gt;</span>
                <span class="text-pink-500 font-semibold">Contact</span>
            </nav>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0147631987993!2d116.85960867599707!3d-1.1499441354944406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df149298f826ab5%3A0x8489d5309f45c0db!2sInstitut%20Teknologi%20Kalimantan!5e0!3m2!1sid!2sid!4v1763053046861!5m2!1sid!2sid"
                        width="100%" height="480" style="border:0;" loading="lazy"></iframe>
                </div>
                <div>
                    <div class="max-w-full mx-auto rounded-lg overflow-hidden">
                        <div class="px-6 py-4">
                            <h3 class="text-lg font-medium text-pink-500">Our Address</h3>
                            <p class="mt-1 text-gray-600">Kalimantan Institute of Technology, North Balikpapan</p>
                        </div>
                        <div class="border-t border-gray-200 px-6 py-4">
                            <h3 class="text-lg font-medium text-pink-500">Hours</h3>
                            <p class="mt-1 text-gray-600">Monday - Friday: 8am - 6pm</p>
                            <p class="mt-1 text-gray-600">Saturday - Sunday: Closed</p>
                        </div>
                        <div class="border-t border-gray-200 px-6 py-4">
                            <h3 class="text-lg font-medium text-pink-500">Contact</h3>
                            <p class="mt-1 text-gray-600">Email: 11231092@student.itk.ac.id</p>
                            <p class="mt-1 text-gray-600">Phone: +62 85651149430</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>