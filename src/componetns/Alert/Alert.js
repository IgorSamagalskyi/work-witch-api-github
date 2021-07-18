export default function Alert({alert}){

return(

        <div className={`alert alert-${alert.type || 'alert-secondary'} alert-dismissible fade show`} role="alert">
            <strong>{alert.text}</strong>
            <button type="button" className="close"  aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
);
}