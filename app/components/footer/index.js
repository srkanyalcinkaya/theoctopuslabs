import { FaGithub, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";

export default function Footer({ intl }) {
    const year = new Date().getFullYear()
    return (
        <footer>
            <div className="flex flex-col   bg-white rounded-lg">
                <div className="w-full draggable">
                    <div className="container flex flex-col mx-auto">
                        <div className="flex flex-col items-center w-full my-20">
                            <div className="mb-8">
                                <img src="/images/theoctopuslabslogo.svg" className="w-auto" />
                            </div>
                            <div className="flex flex-col items-center gap-6 mb-8">
                                <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap text-dark-grey-900">
                                    <a href="/blogs" className="text-gray-600 hover:text-gray-900">{intl["header"].blogs}</a>
                                    <a href="/#team" className="text-gray-600 hover:text-gray-900">{intl["header"].team}</a>
                                    <a href="/#clients" className="text-gray-600 hover:text-gray-900">{intl["header"].clients}</a>
                                    <a href="/#contact" className="text-gray-600 hover:text-gray-900">{intl["header"].contact}</a>
                                </div>
                                <div className="flex items-center gap-8">

                                    <a href="https://x.com/TheOctopusLabs" className="text-grey-700 hover:text-grey-900">
                                        <FaTwitter />
                                    </a>
                                    <a href="https://github.com/TheOctopusLabs" className="text-grey-700 hover:text-grey-900">
                                        <FaGithub />
                                    </a>
                                    <a href="t.me/theoctopuslabs" className="text-grey-700 hover:text-grey-900">
                                        <FaTelegram />
                                    </a>
                                    <a href="https://www.linkedin.com/company/the-octopus-labs" className="text-grey-700 hover:text-grey-900">
                                        <FaLinkedin />
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <p className="text-sm font-normal leading-7 text-center text-grey-700">
                                    {year} The Octopus Labs. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap  my-5">
                <div className="w-full max-w-full sm:w-3/4 mx-auto text-center">
                    <p className="text-xs text-slate-500 py-1">
                        Made with ❤️ by  <a href="https://github.com/srkanyalcinkaya" className="text-slate-700 hover:text-slate-900" target="_blank">srkanyalcinkaya</a>
                    </p>
                </div>
            </div>
        </footer>

    )
}