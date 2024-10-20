const settings = `
    <div class="settings">
        <div class="grid gap-4 animate__animated animate__zoomIn">
            <div class="grid">
                <div class="p-4 table-responsive md:col-span-2 bg-white shadow-sm">
                    <div class="flex border-b pb-2 justify-between items-center">
                        <h5 class="text-xl font-semibold">Page notification list</h5>
                        <button data-bs-toggle="modal" data-bs-target="#page-n-modal"
                            class="add-page-n-btn btn bg-red-400 rounded-full text-white">
                            <i class="fa fa-plus"></i>
                        </button>
                    </div>
                    <div class="">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th class="text-nowrap">Sr</th>
                                    <th class="text-nowrap">Notification</th>
                                    <th class="text-nowrap">Page</th>
                                    <th class="text-nowrap">Created At</th>
                                    <th class="text-nowrap">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="page-n-list">
                                
                            </tbody>
                        </table>
        
                    </div>
                </div>
            </div>
        </div>

        <form class="page-n-form">
            <div class="modal animate__animated animate__zoomIn" id="page-n-modal">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="text-xl font-semibold">Create new notification</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="page-n-preview flex justify-center items-center p-4 my-3">
                                <h1 class="text-xl font-semibold">Preview</h1>
                            </div>
                            <div class="form-group mb-3">
                                <textarea name="notification" placeholder="Notification" class="form-control"></textarea>
                            </div>
                            <div class="row">
                                <div class="col-4 mt-2">
                                    <input type="text" name="page" placeholder="Page name" class="form-control">
                                </div>
                                <div class="col-4">
                                    <label for="bgColor">Bg Color</label>
                                    <input type="color" name="bgColor" class="form-control">
                                </div>
                                <div class="col-4">
                                    <label for="textColor">Text Color</label>
                                    <input type="color" name="textColor" class="form-control">
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
    </div>
`;

export default settings;