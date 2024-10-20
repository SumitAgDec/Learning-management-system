const login = `
<div class="login">
    <form class="login-form">
        <div class="animate__animated animate__zoomIn ">
            <div class="modal-dialog modal-lg modal-dialog-centered shadow">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="text-xl font-semibold">Login now</h5>
                        <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                    </div>
                    <div class="modal-body">
                        <div class="row mb-3">
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="name">
                                        Email <sup class="text-red-500">*</sup>
                                    </label>
                                    <input type="email" name="email" class="form-control">
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="name">
                                        Password <sup class="text-red-500">*</sup>
                                    </label>
                                    <div class="input-group">
                                        <input type="password" name="password" class="form-control">
                                        <span class="input-group-text toggle-p-btn cursor-pointer">
                                            <i class="fa fa-eye-slash"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button class="btn w-full bg-blue-600 font-semibold text-white">Submit</button>

                    </div>
                </div>
            </div>
        </div>
    </form>
    <div class="text-center">
        <a href="#/register">Don't have an account ?</a>
    </div>
</div>
`

export default login;