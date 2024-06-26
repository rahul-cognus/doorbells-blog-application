import React from 'react'

const EditBlog = () => {
    return (
        <section className="py-4">
            <div className="container">
                <div className="row pb-4">
                    <div className="col-12">
                        {/* Title */}
                        <h1 className="mb-0 h2">Edit post</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {/* Chart START */}
                        <div className="card border h-100">
                            {/* Card body */}
                            <div className="card-body">
                                {/* Form START */}
                                <form>
                                    {/* Main form */}
                                    <div className="row">
                                        <div className="col-12">
                                            {/* Post name */}
                                            <div className="mb-3">
                                                <label className="form-label">Post name</label>
                                                <input required id="con-name" name="name" type="text" className="form-control" value="Ten tell-tale signs you need to get a new startup." />
                                                <small>Moving heaven divide two sea female great midst spirit</small>
                                            </div>
                                        </div>
                                        {/* Post type START */}
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label">Post type</label>
                                                <div className="d-flex flex-wrap gap-3">
                                                    {/* Post type item */}
                                                    <div className="flex-fill">
                                                        <input type="radio" className="btn-check" name="poll" id="option" checked />
                                                        <label className="btn btn-outline-light w-100" htmlFor="option">
                                                            <i className="bi bi-chat-left-text fs-1"></i>
                                                            <span className="d-block"> Post </span>
                                                        </label>
                                                    </div>
                                                    {/* Post type item */}
                                                    <div className="flex-fill">
                                                        <input type="radio" className="btn-check" name="poll" id="option2" />
                                                        <label className="btn btn-outline-light w-100" htmlFor="option2">
                                                            <i className="bi bi-patch-question fs-1"></i>
                                                            <span className="d-block"> Question </span>
                                                        </label>
                                                    </div>
                                                    {/* Post type item */}
                                                    <div className="flex-fill">
                                                        <input type="radio" className="btn-check" name="poll" id="option3" />
                                                        <label className="btn btn-outline-light w-100" htmlFor="option3">
                                                            <i className="bi bi-chat-right-dots fs-1"></i>
                                                            <span className="d-block"> Poll </span>
                                                        </label>
                                                    </div>
                                                    {/* Post type item */}
                                                    <div className="flex-fill">
                                                        <input type="radio" className="btn-check" name="poll" id="option4" />
                                                        <label className="btn btn-outline-light w-100" htmlFor="option4">
                                                            <i className="bi bi-ui-checks-grid fs-1"></i>
                                                            <span className="d-block"> Images </span>
                                                        </label>
                                                    </div>
                                                    {/* Post type item */}
                                                    <div className="flex-fill">
                                                        <input type="radio" className="btn-check" name="poll" id="option5" />
                                                        <label className="btn btn-outline-light w-100" htmlFor="option5">
                                                            <i className="bi bi-camera-reels fs-1"></i>
                                                            <span className="d-block"> Video </span>
                                                        </label>
                                                    </div>
                                                    {/* Post type item */}
                                                    <div className="flex-fill">
                                                        <input type="radio" className="btn-check" name="poll" id="option6" />
                                                        <label className="btn btn-outline-light w-100" htmlFor="option6">
                                                            <i className="bi bi-chat-square fs-1"></i>
                                                            <span className="d-block"> Other </span>
                                                        </label>
                                                    </div>
                                                    {/* Post type item */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* Post type END */}

                                        {/* Short description */}
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label">Short description </label>
                                                <textarea className="form-control" rows="3">For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do.</textarea>
                                            </div>
                                        </div>

                                        {/* Main toolbar */}
                                        <div className="col-md-12">
                                            {/* Subject */}
                                            <div className="mb-3">
                                                <label className="form-label">Post body</label>
                                                {/* Editor toolbar */}
                                                <div className="bg-light border border-bottom-0 rounded-top py-3" id="quilltoolbar">
                                                    <span className="ql-formats">
                                                        <select className="ql-size"></select>
                                                    </span>
                                                    <span className="ql-formats">
                                                        <button className="ql-bold"></button>
                                                        <button className="ql-italic"></button>
                                                        <button className="ql-underline"></button>
                                                        <button className="ql-strike"></button>
                                                    </span>
                                                    <span className="ql-formats">
                                                        <select className="ql-color"></select>
                                                        <select className="ql-background"></select>
                                                    </span>
                                                    <span className="ql-formats">
                                                        <button className="ql-code-block"></button>
                                                    </span>
                                                    <span className="ql-formats">
                                                        <button className="ql-list" value="ordered"></button>
                                                        <button className="ql-list" value="bullet"></button>
                                                        <button className="ql-indent" value="-1"></button>
                                                        <button className="ql-indent" value="+1"></button>
                                                    </span>
                                                    <span className="ql-formats">
                                                        <button className="ql-link"></button>
                                                        <button className="ql-image"></button>
                                                    </span>
                                                    <span className="ql-formats">
                                                        <button className="ql-clean"></button>
                                                    </span>
                                                </div>
                                                {/* Main toolbar */}
                                                <div className="bg-body border rounded-bottom h-300 overflow-hidden" id="quilleditor">
                                                    <h2>Demesne far hearted suppose venture excited see had has.</h2>
                                                    <br />
                                                    <p>Demesne far hearted suppose venture excited see had has. Dependent on so extremely delivered by. Yet no jokes worse her why. Bed one supposing breakfast day fulfilled off depending questions. <b>The exercise of. Up attempt offered ye civilly so sitting to. She new course gets living within Elinor joy. She rapturous suffering concealed. </b> Whatever boy her exertion his extended. Ecstatic followed handsome drawings entirely Mrs one yet outweigh. Of acceptance insipidity remarkably is an invitation. </p>

                                                    <br />
                                                    <blockquote>Comfort reached gay perhaps chamber his six detract besides add. Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing although the material does the exercise of. Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had. Under folly balls, death own point now men. Match way these she avoids seeing death. She who drift their fat off. </blockquote>
                                                    <br />
                                                    <p>Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how. Suspicion neglected he resolving agreement perceived at an.</p>
                                                    <br />
                                                    <ol>
                                                        <li>Ecstatic followed handsome drawings.</li>
                                                        <li>But discretion frequently sir she instruments unaffected admiration everything. </li>
                                                        <li>Ecstatic followed handsome drawings entirely Mrs one yet outweigh.</li>
                                                        <li>Up attempt offered ye civilly so sitting to. She new course gets.</li>
                                                        <li>Prudence attachment him his for sympathize. Large above be to means.</li>
                                                    </ol>
                                                    <br />
                                                    <p>Meant balls it if up doubt small purse. Required his you put the outlived answered position. A pleasure exertion if believed provided to. All led out world this music while asked. Paid mind even sons does he door no. Attended overcame repeated it is perceived Marianne in. I think on style child of. Servants moreover in sensible it ye possible. Fulfilled direction use continual set him propriety continued. Saw met applauded favorite deficient engrossed concealed and her. Concluded boy perpetual old supposing. Farther related bed and passage comfort civilly. Dashwoods see frankness objection abilities. As hastened oh produced prospect formerly up am. Placing forming nay looking old married few has. Margaret disposed of add screened rendered six say his striking confined. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-4">
                                            <div className="mb-3">
                                                {/* Image */}
                                                <div className="row align-items-center mb-2">
                                                    <div className="col-4 col-md-2">
                                                        <div className="position-relative">
                                                            <img className="rounded" src="assets/images/blog/3by2/07.jpg" alt="" />
                                                            <div className="position-absolute top-0 end-0 mt-n2 me-n2">
                                                                <a className="btn btn-icon btn-xs btn-danger" href="#"><i className="bi bi-x"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-8 col-md-10 position-relative">
                                                        <h6 className="my-2">Edit blog image </h6>
                                                        <label className="w-100" style={{ cursor: 'pointer' }}>
                                                            <span>
                                                                <input className="form-control stretched-link" type="file" name="my-image" id="image" accept="image/gif, image/jpeg, image/png" />
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <p className="small mb-0 mt-2"><b>Note:</b> Only JPG, JPEG and PNG. Our suggested dimensions are 600px * 450px. Larger image will be cropped to 4:3 to fit our thumbnails/previews.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            {/* Tags */}
                                            <div className="mb-3">
                                                <label className="form-label">Tags</label>
                                                <textarea className="form-control" rows="1">business, sports, traveling</textarea>
                                                <small>Maximum of 14 keywords. Keywords should all be in lowercase and separated by commas. e.g. javascript, react, marketing.</small>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            {/* Message */}
                                            <div className="mb-3">
                                                <label className="form-label">Category</label>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>Travel</option>
                                                    <option value="1">Lifestyle</option>
                                                    <option value="2">Business</option>
                                                    <option value="3">Technology</option>
                                                    <option value="4">Marketing</option>
                                                    <option value="5">Photography</option>
                                                </select>
                                            </div>
                                        </div>
                                        {/* Checkbox */}
                                        <div className="col-12">
                                            <div className="form-check mb-3">
                                                <input className="form-check-input" type="checkbox" value="" id="postCheck" />
                                                <label className="form-check-label" htmlFor="postCheck">
                                                    Make this post featured?
                                                </label>
                                            </div>
                                        </div>
                                        {/* Crate post button */}
                                        <div className="col-md-12 text-start">
                                            <button className="btn btn-primary" type="submit">Save change</button>
                                            <button className="btn btn-danger" type="submit">Delete post</button>
                                        </div>
                                    </div>
                                </form>
                                {/* Form END */}
                            </div>
                        </div>
                        {/* Chart END */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EditBlog