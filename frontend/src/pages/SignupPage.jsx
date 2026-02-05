import {SignUp} from "@clerk/clerk-react"

function SignUpPage() {
    return <div className={"auth-container"}>
        <SignUp routing={"path"} path={"/signup"} signInUrl={"/signin"}/>
    </div>
}

export default SignUpPage