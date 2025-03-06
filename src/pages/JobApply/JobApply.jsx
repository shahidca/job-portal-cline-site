import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const JobApply = () => {
    const {user}=useAuth();
    const {id}=useParams();
    // console.log(user, id)
    const handleJobApply=(e)=>{
        e.preventDefault();
        const form=e.target;
        const facebook=form.facebook.value;
        const linkIn=form.linkIn.value;
        const instagram=form.instagram.value;
        const github=form.github.value;
        const whatsapp=form.whatsapp.value;
        // console.log([facebook, linkIn, instagram, github, whatsapp]);
        const jobApplication={
            job_id:id,
            applicant_email:user.email,
            applicant_name:user.name,
            linkIn,
            facebook,
            instagram,
            github,
            whatsapp
        }
    }
    return (
       <form  onSubmit={handleJobApply}>
         <div className="hero bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">FaceBook</label>
                            <input type="url"name="facebook" className="input" placeholder="facebook url" />
                            <label className="fieldset-label">GitHub</label>
                            <input type="url" name="github" className="input" placeholder="github url" />
                            <label className="fieldset-label">LinkIn</label>
                            <input type="url" name="linkIn" className="input" placeholder="linkIn url" />
                            <label className="fieldset-label">Instagram</label>
                            <input type="url" name="instagram" className="input" placeholder="instagram url" />
                            <label className="fieldset-label">WhatsApp</label>
                            <input type="url" name="whatsapp" className="input" placeholder="whatsapp url" />
                            
                            <button className="btn btn-neutral mt-4">Apply</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
       </form>
    );
};

export default JobApply;