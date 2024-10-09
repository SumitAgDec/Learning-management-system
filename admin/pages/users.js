const users = `
<div class="users">
    <div class="grid md:grid-cols-3 gap-4">
        <div class="p-4 bg-white shadow-sm">
            <div class="flex border-b py-3 justify-between items-center">
                <div class="flex justify-center items-center gap-3">
                    <div class="bg-red-100 rounded-full">
                        <img src="/assets/images/avatar-1.svg" width="50" class="rounded-full" alt="">
                    </div>
                    <div>
                        <h5 class="font-semibold">sumit</h5>
                        <p class="text-sm text-gray-500">
                            <i class="fa fa-location"></i>
                            canada
                        </p>
                    </div>
                </div>
                <div class="dropdown dropstart">
                    <button role="btn" data-bs-toggle='dropdown' class="btn bg-gray-100 rounded-full w-11 h-11">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                    <div class="dropdown-menu">
                        <button class="flex items-center justify-between dropdown-item text-blue-600">
                            Edit
                            <i class="fa fa-edit"></i>
                        </button>
                        <button class="flex items-center justify-between dropdown-item text-red-600">
                            Delete
                            <i class="fa fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex justify-between items-center mt-4">
                <div class="flex items-center gap-2">
                    <button class="btn rounded-full bg-green-100 text-green-600">
                        <i class="fa-solid fa-indian-rupee-sign"></i>
                    </button>
                    <h5>Payments</h5>
                </div>
                <div>
                    <h5 class="text-gray-500 font-semibold">12000</h5>
                </div>
            </div>
            <div class="flex justify-between items-center mt-4">
                <div class="flex items-center gap-2">
                    <button class="btn rounded-full w-9 h-9 flex items-center justify-center bg-red-100 text-red-600">
                        <i class="fa-solid fa-video"></i>
                    </button>
                    <h5>Total course</h5>
                </div>
                <div>
                    <h5 class="text-gray-500 font-semibold">14</h5>
                </div>
            </div>
            <div class="flex justify-between items-center mt-4">
                <div class="flex items-center gap-2">
                    <button class="btn rounded-full bg-blue-100 text-blue-600">
                        <i class="fa-regular fa-calendar-days"></i>
                    </button>
                    <h5>Joined</h5>
                </div>
                <div>
                    <h5 class="text-gray-500 font-semibold">July 13, 2024</h5>
                </div>
            </div>
            <div class="flex justify-between items-center mt-4">
                <div class="flex items-center gap-2">
                    <button class="btn rounded-full bg-pink-100 text-pink-600">
                        <i class="fa fa-user"></i>
                    </button>
                    <h5>Type</h5>
                </div>
                <div>
                    <h5 class="text-gray-500 font-semibold">Admin</h5>
                </div>
            </div>
        </div>
        <div class="p-4 bg-white shadow-sm"></div>
        <div class="p-4 bg-white shadow-sm"></div>
    </div>
</div>
`;

export default users;