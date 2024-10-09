const courses = `
<div class="animate__animated animate__zoomIn grid md:grid-cols-5 gap-4">
    <div class="p-4 table-responsive md:col-span-3 bg-white shadow-sm">
        <div class="flex border-b pb-2 justify-between items-center">
            <h5 class="text-xl font-semibold">Course list</h5>
            <button data-bs-toggle="modal" data-bs-target="#course-modal"
                class="btn bg-red-400 rounded-full text-white">
                <i class="fa fa-plus"></i>
            </button>
        </div>
        <div class="">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th class="text-nowrap">Sr</th>
                        <th class="text-nowrap">Thubnail</th>
                        <th class="text-nowrap">Category</th>
                        <th class="text-nowrap">Course Name</th>
                        <th class="text-nowrap">Course Link</th>
                        <th class="text-nowrap">Price</th>
                        <th class="text-nowrap">Duration</th>
                        <th class="text-nowrap">Created At</th>
                        <th class="text-nowrap">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="text-nowrap">1</td>
                        <td class="text-nowrap"><img src="/assets/images/javascript.png" width="40px" alt=""></td>
                        <td class="text-nowrap">Front-End</td>
                        <td class="text-nowrap">Javascript</td>
                        <td class="text-nowrap"><a href="#">Link</a></td>
                        <td class="text-nowrap">3000</td>
                        <td class="text-nowrap">4 months</td>
                        <td class="text-nowrap">12-08-2024</td>
                        <td class="text-nowrap">
                            <button class="text-green-300">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                            <button class="text-red-300">
                                <i class="fa-regular fa-trash-can"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
    <div class="p-4 table-responsive md:col-span-2 bg-white shadow-sm">
        <div class="flex border-b pb-2 justify-between items-center">
            <h5 class="text-xl font-semibold">Category list</h5>
            <button data-bs-toggle="modal" data-bs-target="#category-modal"
                class="btn bg-red-400 rounded-full text-white">
                <i class="fa fa-plus"></i>
            </button>
        </div>
        <div class="">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th class="text-nowrap">Sr</th>
                        <th class="text-nowrap">Category</th>
                        <th class="text-nowrap">Created At</th>
                        <th class="text-nowrap">Actions</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="text-nowrap">1</td>
                        <td class="text-nowrap">Front-End</td>
                        <td class="text-nowrap">12-08-2024</td>
                        <td class="text-nowrap">
                            <button class="text-green-300">
                                <i class="fa-regular fa-pen-to-square"></i>
                            </button>
                            <button class="text-red-300">
                                <i class="fa-regular fa-trash-can"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
</div>

<form class="course-form">
<div class="modal animate__animated animate__zoomIn" id="course-modal">
    <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="text-xl font-semibold">Create new course</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form-group mb-3">
                        <label for="thub">
                            Thumbnail
                        </label>
                        <input type="file" class="form-control">
                    </div>
                    <div class="form-group mb-3">
                        <select class="form-select">
                            <option value="choose category">choose-category</option>
                            <option value="Front-End">Front-End</option>
                            <option value="Back-end">Back-end</option>
                        </select>
                    </div>
                    <div class="form-group mb-3">
                        <label for="name">
                            Course name
                        </label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="form-group mb-3">
                        <label for="link">
                            Course link
                        </label>
                        <input type="url" class="form-control">
                    </div>
                    <div class="form-group mb-3">
                        <label for="price">
                            Course Price
                        </label>
                        <input type="number" class="form-control">
                    </div>
                    <div class="form-group mb-3">
                        <select class="form-select">
                            <option value="choose duration">choose-duration</option>
                            <option value="4 month">4 month</option>
                            <option value="6 month">6 month</option>
                        </select>
                    </div>
                    <div class="form-group mb-3">
                        <label for="desc">
                            Course description
                        </label>
                        <textarea class="form-control"></textarea>
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


<form class="course-form">
<div class="modal animate__animated animate__zoomIn" id="category-modal">
    <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="text-xl font-semibold">Create new category</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form-group mb-3">
                        <label for="name">
                            Category name
                        </label>
                        <input type="text" class="form-control">
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
`;

export default courses;