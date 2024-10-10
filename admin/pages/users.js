const users = `
<div class="users">
    <div class="animate__animated animate__zoomIn grid md:grid-cols-3 gap-4">
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
            <div class="flex justify-between items-center">
                <div class="border-b w-full"></div>
                <div class="w-full flex justify-between items-center">
                    <button class="btn bg-blue-50 text-blue-600 rounded-full">
                        <i class="fa-regular fa-envelope"></i>
                    </button>
                    <div class="border-b w-full"></div>
                    <button class="btn bg-red-50 text-red-600 rounded-full">
                        <i class="fa-solid fa-ban"></i>
                    </button>
                    <button class="btn d-none bg-green-50 text-green-600 rounded-full">
                        <i class="fa-solid fa-check"></i>
                    </button>
                </div>
                <div class="border-b w-full"></div>
            </div>
        </div>
    </div>
    <button data-bs-toggle="modal" data-bs-target="#users-modal" class="position-fixed bottom-0 right-0 m-16 bg-red-500 text-white btn w-11 h-11 rounded-full">
        <i class="fa fa-add"></i>
    </button>

    <form class="users-form">
        <div class="modal animate__animated animate__zoomIn" id="users-modal">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="text-xl font-semibold">Create new user</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row mb-3">
                            <div class="col-6">
                                <div class="form-group">
                            <label for="name">
                                Name <sup class="text-red-500">*</sup>
                            </label>
                            <input type="text" name="name" required class="form-control">
                        </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                            <label for="name">
                                Mobile <sup class="text-red-500">*</sup>
                            </label>
                            <input type="number" name="mobile" required class="form-control">
                        </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-6">
                                <div class="form-group">
                            <label for="name">
                                Email <sup class="text-red-500">*</sup>
                            </label>
                            <input type="email" name="email" required class="form-control">
                        </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                            <label for="name">
                                Password <sup class="text-red-500">*</sup>
                            </label>
                            <input type="password" name="password" required class="form-control">
                        </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-6">
                                <div class="form-group">
                            <label for="name">
                                Father's name <sup class="text-red-500">*</sup>
                            </label>
                            <input type="text" name="father" required class="form-control">
                        </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                            <label for="name">
                                Qualifications <sup class="text-red-500">*</sup>
                            </label>
                            <select class="form-select" name="qualification">
                                <option value="select qualification">Select Qualification</option>
                                <option value="heigh school">Heigh School</option>
                                <option value="inter">Inter</option>
                                <option value="ug">UG</option>
                                <option value="pg">PG</option>
                            </select>
                        </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-6">
                                <div class="form-group">
                            <label for="name">
                                Status <sup class="text-red-500">*</sup>
                            </label>
                            <select name="status" class="form-select">
                                <option value="select status">Select Status</option>
                                <option value="true">Active</option>
                                <option value="false">Pending</option>
                            </select>
                        </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                            <label for="name">
                                User type <sup class="text-red-500">*</sup>
                            </label>
                            <select name="type" class="form-select">
                                <option value="select user type">Select user type</option>
                                <option value="admin">Admin</option>
                                <option value="teacher">Teacher</option>
                                <option value="user">user</option>
                            </select>
                        </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-12">
                                <div class="form-group">
                            <label for="name">
                                Select Courses <sup class="text-red-500">*</sup>
                            </label>
                            <select class="form-select" name="course" multiple>
                                <option value="nodejs">Node js</option>
                                <option value="reactjs">React js</option>
                                <option value="php">Php</option>
                                <option value="javascript">Javascript</option>
                            </select>
                        </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-12">
                                <div class="form-group">
                            <label for="name">
                                Address <sup class="text-red-500">*</sup>
                            </label>
                            <textarea name="address" class="form-control"></textarea>
                        </div>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button class="btn w-full bg-blue-600 font-semibold text-white">Submit</button>
                        <button type="button" class="d-none btn w-full bg-red-400 font-semibold">Update</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>
`;

export default users;