import {SignIn} from "@clerk/clerk-react";

function SignInPage() {
    return <div className={"auth-container"}>
        <SignIn routing={"path"} path={"/signin"} signUpUrl={"/signup"}/>
    </div>
}

export default SignInPage