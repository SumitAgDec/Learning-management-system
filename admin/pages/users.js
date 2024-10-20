const users = `
<div class="users">
    <div class="users-list animate__animated animate__zoomIn grid md:grid-cols-3 gap-4">
    </div>
    <button  data-bs-toggle="modal" data-bs-target="#users-modal"
        class="open-modal position-fixed bottom-0 right-0 m-16 bg-red-500 text-white btn w-11 h-11 rounded-full">
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
                            <div class="col-12">
                                <div class="form-group">
                                    <label for="name">
                                        Profile <sup class="text-red-500">*</sup>
                                    </label>
                                    <input type="file" name="profile"  class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="name">
                                        Name <sup class="text-red-500">*</sup>
                                    </label>
                                    <input type="text" name="name"  class="form-control">
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="name">
                                        Mobile <sup class="text-red-500">*</sup>
                                    </label>
                                    <input type="number" name="mobile"  class="form-control">
                                </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="name">
                                        Email <sup class="text-red-500">*</sup>
                                    </label>
                                    <input type="email" name="email"  class="form-control">
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="name">
                                        Password <sup class="text-red-500">*</sup>
                                    </label>
                                    <div class="input-group">
                                        <input type="password" name="password"  class="form-control">
                                        <span class="input-group-text toggle-p-btn cursor-pointer">
                                            <i class="fa fa-eye-slash"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="name">
                                        Father's name <sup class="text-red-500">*</sup>
                                    </label>
                                    <input type="text" name="father"  class="form-control">
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

                        <div class="row mb-3 items-center">
                            <div class="col-6 flex gap-3">
                                <div class="form-group">
                                    <input type="checkbox" name="status">
                                    <label for="name">
                                        Is active
                                    </label>
                                </div>
                                <div class="form-group">
                                    <input type="radio" name="type" value="admin">
                                    <label for="name">
                                        Admin 
                                    </label>
                                </div>
                                <div class="form-group">
                                    <input type="radio" name="type" value="teacher">
                                    <label for="name">
                                        Teacher 
                                    </label>
                                </div>
                                <div class="form-group">
                                    <input type="radio" name="type" value="user">
                                    <label for="name">
                                        User 
                                    </label>
                                </div>
                            </div>
                            <div class="col-6 ">
                                <input type="number" name="price" placeholder="Price" class="form-control">
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
                        <button type="button" class="d-none btn w-full bg-red-400 text-white font-semibold">Update</button>
                    </div>
                </div>
            </div>
        </div>
    </form>

    <form class="user-m-form">
        <div class="modal animate__animated animate__zoomIn" id="user-m-modal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="text-xl font-semibold">Create new message</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group mb-3">
                            <label for="type">
                                From
                            </label>
                            <input name="type" type="text" readonly value="admin" class="form-control">
                        </div>

                        <div class="form-group mb-3">
                            <label for="name">
                                User name
                            </label>
                            <input name="name" type="text" readonly class="form-control">
                        </div>

                        <div class="form-group mb-3">
                            <label for="email">
                                User email
                            </label>
                            <input name="email" readonly type="email" class="form-control">
                        </div>

                        <div class="form-group mb-3">
                            <label for="title">
                                Title
                            </label>
                            <input name="title" type="text" class="form-control">
                        </div>

                        <div class="form-group mb-3">
                            <label for="message">
                                Message
                            </label>
                            <textarea name="message" class="form-control"></textarea>
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

export default users;