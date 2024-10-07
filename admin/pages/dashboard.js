const dashboard = `

<div class="animate__animated animate__zoomIn grid md:grid-cols-4 gap-3 ">
    <div class="grid grid-cols-2 p-4 bg-white shadow-sm">
        <div class="flex flex-column items-center border-r gap-3">
            <button class="btn bg-red-600 text-white rounded-full w-11 h-11">
                <i class="fa-regular fa-user"></i>
            </button>
            <h5 class="text-xl font-semibold text-red-500">Students</h5>
        </div>
        <div class="flex flex-column items-center gap-2">
            <h5  class="text-5xl font-semibold text-red-400">36k</h5>
            <p class="text-lg text-gray-500">34,762</p>
        </div>
    </div>
    <div class="grid grid-cols-2 p-4 bg-white shadow-sm">
        <div class="flex flex-column items-center border-r gap-3">
            <button class="btn bg-green-600 text-white rounded-full w-11 h-11">
                <i class="fa-regular fa-user"></i>
            </button>
            <h5 class="text-xl font-semibold text-green-500">Courses</h5>
        </div>
        <div class="flex flex-column items-center gap-2">
            <h5  class="text-5xl font-semibold text-green-400">13k</h5>
            <p class="text-lg text-gray-500">124,570</p>
        </div>
    </div>
    <div class="grid grid-cols-2 p-4 bg-white shadow-sm">
        <div class="flex flex-column items-center border-r gap-3">
            <button class="btn bg-pink-600 text-white rounded-full w-11 h-11">
                <i class="fa-regular fa-user"></i>
            </button>
            <h5 class="text-xl font-semibold text-pink-500">Files</h5>
        </div>
        <div class="flex flex-column items-center gap-2">
            <h5  class="text-5xl font-semibold text-pink-400">16k</h5>
            <p class="text-lg text-gray-500">15,565</p>
        </div>
    </div>
    <div class="grid grid-cols-2 p-4 bg-white shadow-sm">
        <div class="flex flex-column items-center border-r gap-3">
            <button class="btn bg-blue-600 text-white rounded-full w-11 h-11">
                <i class="fa-regular fa-user"></i>
            </button>
            <h5 class="text-xl font-semibold text-blue-500">Sales</h5>
        </div>
        <div class="flex flex-column items-center gap-2">
            <h5  class="text-5xl font-semibold text-blue-400">65k</h5>
            <p class="text-lg text-gray-500">64,625</p>
        </div>
    </div>

    <div class="p-4 area-chart md:col-span-2 bg-white shadow-sm"></div>
    <div class="p-4 bg-white shadow-sm">
        <div class="border-b mb-3">
            <h5 class="mb-3 font-semibold">Recent Students</h5>
        </div>
        <div class="grid grid-cols-4 gap-2 border-b py-2">
            <img src="/assets/images/avatar-1.svg" class="w-8 h-8 rounded-full" alt="">
            <div class=" col-span-2">
                <h5 class="mb-1">Alok kumar</h5>
                <p class="text-sm text-gray-400">12-08-2024</p>
            </div>
            <div class="">
                <button class="btn bg-red-500 text-white rounded-full w-9 h-9 flex items-center justify-center">
                    <i class="fa-regular fa-circle-xmark"></i>
                </button>
            </div>
        </div>
        <div class="grid grid-cols-4 gap-2 border-b py-2">
            <img src="/assets/images/avatar-2.svg" class="w-8 h-8 rounded-full" alt="">
            <div class=" col-span-2">
                <h5 class="mb-1">Alok kumar</h5>
                <p class="text-sm text-gray-400">12-08-2024</p>
            </div>
            <div class="">
                <button class="btn bg-red-500 text-white rounded-full w-9 h-9 flex items-center justify-center">
                    <i class="fa-regular fa-circle-xmark"></i>
                </button>
            </div>
        </div>
        <div class="grid grid-cols-4 gap-2 border-b py-2">
            <img src="/assets/images/avatar-3.svg" class="w-8 h-8 rounded-full" alt="">
            <div class=" col-span-2">
                <h5 class="mb-1">Alok kumar</h5>
                <p class="text-sm text-gray-400">12-08-2024</p>
            </div>
            <div class="">
                <button class="btn bg-red-500 text-white rounded-full w-9 h-9 flex items-center justify-center">
                    <i class="fa-regular fa-circle-xmark"></i>
                </button>
            </div>
        </div>
        <div class="grid grid-cols-4 gap-2 border-b py-2">
            <img src="/assets/images/avatar-4.svg" class="w-8 h-8 rounded-full" alt="">
            <div class=" col-span-2">
                <h5 class="mb-1">Alok kumar</h5>
                <p class="text-sm text-gray-400">12-08-2024</p>
            </div>
            <div class="">
                <button class="btn bg-red-500 text-white rounded-full w-9 h-9 flex items-center justify-center">
                    <i class="fa-regular fa-circle-xmark"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="p-4 bg-white shadow-sm">
        <div class="border-b mb-3">
            <h5 class="mb-3 font-semibold">Recent Courses</h5>
        </div>
        <div class="grid grid-cols-4 gap-2 border-b py-2">
            <img src="/assets/images/avatar-1.svg" class="w-8 h-8 rounded-full" alt="">
            <div class=" col-span-2">
                <h5 class="mb-1">Alok kumar</h5>
                <p class="text-sm text-gray-400">12-08-2024</p>
            </div>
            <div class="">
                <button class="btn bg-red-500 text-white rounded-full w-9 h-9 flex items-center justify-center">
                    <i class="fa-regular fa-circle-xmark"></i>
                </button>
            </div>
        </div>
        <div class="grid grid-cols-4 gap-2 border-b py-2">
            <img src="/assets/images/avatar-2.svg" class="w-8 h-8 rounded-full" alt="">
            <div class=" col-span-2">
                <h5 class="mb-1">Alok kumar</h5>
                <p class="text-sm text-gray-400">12-08-2024</p>
            </div>
            <div class="">
                <button class="btn bg-red-500 text-white rounded-full w-9 h-9 flex items-center justify-center">
                    <i class="fa-regular fa-circle-xmark"></i>
                </button>
            </div>
        </div>
        <div class="grid grid-cols-4 gap-2 border-b py-2">
            <img src="/assets/images/avatar-3.svg" class="w-8 h-8 rounded-full" alt="">
            <div class=" col-span-2">
                <h5 class="mb-1">Alok kumar</h5>
                <p class="text-sm text-gray-400">12-08-2024</p>
            </div>
            <div class="">
                <button class="btn bg-red-500 text-white rounded-full w-9 h-9 flex items-center justify-center">
                    <i class="fa-regular fa-circle-xmark"></i>
                </button>
            </div>
        </div>
        <div class="grid grid-cols-4 gap-2 border-b py-2">
            <img src="/assets/images/avatar-4.svg" class="w-8 h-8 rounded-full" alt="">
            <div class=" col-span-2">
                <h5 class="mb-1">Alok kumar</h5>
                <p class="text-sm text-gray-400">12-08-2024</p>
            </div>
            <div class="">
                <button class="btn bg-red-500 text-white rounded-full w-9 h-9 flex items-center justify-center">
                    <i class="fa-regular fa-circle-xmark"></i>
                </button>
            </div>
        </div>
    </div>
</div>

`;

export default dashboard;
