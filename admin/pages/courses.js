const courses = `
<div class="courses">
    <div class="grid gap-4 animate__animated animate__zoomIn">
        <div class="grid">
            <div class="p-4 table-responsive md:col-span-2 bg-white shadow-sm">
                <div class="flex border-b pb-2 justify-between items-center">
                    <h5 class="text-xl font-semibold">Category list</h5>
                    <button data-bs-toggle="modal" data-bs-target="#category-modal"
                        class="add-category-btn btn bg-red-400 rounded-full text-white">
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
                        <tbody class="category-list">
                            
                        </tbody>
                    </table>
    
                </div>
            </div>
        </div>
        <div class="grid">
            <div class="p-4 table-responsive md:col-span-3 bg-white shadow-sm">
                <div class="grid md:grid-cols-3 border-b pb-3 justify-between items-center">
                    <h5 class="text-xl font-semibold">Course list</h5>
                    <select class="course-cat-select form-select">
                        <option value="choose category">Choose category</option>
                    </select>
                    <div class="text-right">
                        <button data-bs-toggle="modal" data-bs-target="#course-modal"
                            class="add-course-btn btn bg-red-400 rounded-full text-white">
                            <i class="fa fa-plus"></i>
                        </button>
                    </div>
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
                        <tbody class="course-list">
                            
                        </tbody>
                    </table>
    
                </div>
            </div>
        </div>
    </div>

    <form class="course-form">
        <div class="modal animate__animated animate__zoomIn" id="course-modal">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="text-xl font-semibold">Create new course</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row mb-3">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="thub">
                                        Thumbnail
                                    </label>
                                    <input name="profile" type="file" class="form-control">
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="name">
                                        Course name
                                    </label>
                                    <input type="text" name="name" class="form-control">
                                </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-6">
                                <div class="form-group">
                                    <select name="category" class="course-category form-select">
                                        <option value="choose category">choose-category</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <input type="text" placeholder="Enter Duration" name="duration" class="form-control">
                                </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="link">
                                        Course link
                                    </label>
                                    <input type="url" name="link" class="form-control">
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="price">
                                        Course Price
                                    </label>
                                    <input type="number" name="price" class="form-control">
                                </div>
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="desc">
                                Course description
                            </label>
                            <textarea name="desc" class="form-control"></textarea>
                        </div>

                        <div class="row">
                            <div class="col-12 flex gap-3">
                                <div class="form-group">
                                    <input type="checkbox" name="live">
                                    <label for="live">Is live</label>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" name="free">
                                    <label for="free">Is free</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn w-full bg-blue-600 font-semibold text-white">Submit</button>
                        <button type="button" class="d-none btn w-full bg-red-400 font-semibold text-white">Update</button>
                    </div>
                </div>
            </div>
        </div>
    </form>

    <form class="category-form">
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
                            <input name="category" type="text" class="form-control">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn w-full bg-blue-600 font-semibold text-white">Submit</button>
                        <button type="button" class="d-none btn w-full bg-red-400 font-semibold text-white">Update</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>

`;

export default courses;