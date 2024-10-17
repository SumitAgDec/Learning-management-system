const topics = `
    <div class="topics">
        <div class="grid gap-4 animate__animated animate__zoomIn">
            <div class="grid">
                <div class="p-4 table-responsive md:col-span-2 bg-white shadow-sm">
                    <div class="grid md:grid-cols-4 gap-4 border-b pb-4 justify-between items-center">
                        <h5 class="text-xl font-semibold">Topics list</h5>
                        <select name="" id="" class="form-select topic-cat-select">
                            <option hidden value="choose cateogry">Choose category</option>
                        </select>
                        <select name="" id="" class="form-select topic-course-select">
                            <option hidden value="choose course">Choose coourse</option>
                        </select>
                        <div class="text-right">
                            <button data-bs-toggle="modal" data-bs-target="#topics-modal"
                                class="add-topic-btn btn bg-red-400 rounded-full text-white">
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
                                    <th class="text-nowrap">Topic name</th>
                                    <th class="text-nowrap">Created At</th>
                                    <th class="text-nowrap">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="topics-list">

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>

        <form class="topic-form">
            <div class="modal animate__animated animate__zoomIn" id="topics-modal">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="text-xl font-semibold">Create new topic</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row mb-3">
                                <div class="col-6">
                                    <div class="form-group">
                                        <select name="category" class="topic-category form-select">
                                            <option value="choose category" hidden >choose-category</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <select name="course" class="topic-course form-select">
                                            <option value="choose course" hidden >choose-course</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <input type="text" name="name" class="form-control" placeholder="Topic name">
                            
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

export default topics;