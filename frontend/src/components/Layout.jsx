import {Outlet, Link} from "react-router-dom"
import {SignedIn, SignedOut, UserButton, OrganizationSwitcher, useOrganization} from "@clerk/clerk-react";

function Layout() {
    const {organization} = useOrganization()

    return <div className={"layout"}>
        <div className={"nav"}>
            <div className={"nav-container"}>
                <Link to={"/"} className={"nav-logo"}>
                    Tikki Flow
                </Link>

                <div className={"nav-links"}>
                    <Link to={"/pricing"} className={"nav-link"}>
                        Pricing
                    </Link>
                    <SignedOut>
                    <Link to={"/signin"} className={"nav-link"}>
                        Sign In
                    </Link>
                    <Link to={"/signup"} className={"btn btn-primary"}>
                        Sign Up
                    </Link>
                    </SignedOut>
                    <SignedIn>
                        <OrganizationSwitcher
                            hidePersonal
                            afterCreateOrganizationUrl={"dashboard"}
                            afterSelectOrganizationUrl={"dashboard"}
                            createOrganizationMode={"modal"}
                            apperance={{
                                elements: {
                                    userPreviewMainIdentifierText__personalWorkspace: {color: "white"},
                                    organizationPreviewMainIdentifier__organizationSwitcherTrigger: {color: "white"}
                                }
                            }}
                        />
                        {organization &&
                        <Link to={"/dashboard"} className={"nav-link"}>
                            Dashboard
                        </Link>}
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </div>

        <main>
            <Outlet />
        </main>
    </div>
}

export default Layout