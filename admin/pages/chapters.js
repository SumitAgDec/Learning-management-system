const chapters = `
    <div class="topics">
        <div class="grid gap-4 animate__animated animate__zoomIn">
            <div class="grid">
                <div class="p-4 table-responsive md:col-span-2 bg-white shadow-sm">
                    <div class="grid md:grid-cols-10 gap-4 border-b pb-4 justify-between items-center">
                        <h5 class="text-xl font-semibold ">CH list</h5>
                        <select name="" id="" class="form-select md:col-span-2 chapter-cat-select">
                            <option hidden value="choose cateogry">Choose category</option>
                        </select>
                        <select name="" id="" class="form-select md:col-span-2 chapter-course-select">
                            <option hidden value="choose course">Choose coourse</option>
                        </select>
                        <select name="" id="" class="form-select md:col-span-4 chapter-topic-select">
                            <option hidden value="choose topic">Choose topic</option>
                        </select>
                        <div class="text-right">
                            <button data-bs-toggle="modal" data-bs-target="#topics-modal"
                                class="add-chapter-btn btn bg-red-400 rounded-full text-white">
                                <i class="fa fa-plus"></i>
                            </button>
                        </div>

                    </div>
                    <div class="">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th class="text-nowrap">Sr</th>
                                    <th class="text-nowrap">Category</th>
                                    <th class="text-nowrap">Course</th>
                                    <th class="text-nowrap">Topic</th>
                                    <th class="text-nowrap">Ch name</th>
                                    <th class="text-nowrap">Notes url</th>
                                    <th class="text-nowrap">Video url</th>
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
        </div>

        <form class="chapter-form">
            <div class="modal animate__animated animate__zoomIn" id="topics-modal">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="text-xl font-semibold">Create new chapter</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row mb-3">
                                <div class="col-6">
                                    <div class="form-group">
                                        <select name="category" class="chapter-category form-select">
                                            <option value="choose category" hidden>choose-category</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <select name="course" class="chapter-course form-select">
                                            <option value="choose course" hidden>choose-course</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <div class="form-group">
                                    <select name="topic" class="chapter-topic form-select">
                                        <option value="choose topic" hidden>choose topic</option>
                                    </select>
                                </div>
                            </div>

                            <input type="text" name="name" class="form-control mb-3" placeholder="Chapte name">

                            <input type="url" name="notes" class="form-control mb-3" placeholder="Notes URL">

                            <input type="url" name="video" class="form-control" placeholder="Video URL">

                        </div>
                        <div class="modal-footer">
                            <button class="btn w-full bg-blue-600 font-semibold text-white">Submit</button>
                            <button type="button"
                                class="d-none btn w-full bg-red-400 font-semibold text-white">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    </div>
`
export default chapters