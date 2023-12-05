import React from 'react'
import { useState } from 'react'
import { users } from './db';
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const navigate = useNavigate()
    console.log()
    function handleSubmit(e) {
        e.preventDefault();
        console.log(userName)
        console.log(userPassword)
        for (let i = 0; i < users.length; i++) {
            if (userName === users[i].username && userPassword === users[i].password) {
                console.log(1)
                navigate('/about')
            }
        }
    }
    function navigateToAbout() {
        for (let i = 0; i < users.length; i++) {

            if (userName === users[i].username && userPassword === users[i].password) {
                console.log(1)
                navigate('/about')

            } else {
                alert('Invalid Username & Password')
            }
        }
    }

    return (
        <div id="parentContainer">
            <div className='formContainer'>
                <div className='svgContainer'>
                    <svg viewBox="0 0 781 218" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M293.887 52.5231C263.024 52.9271 237.513 78.384 237.908 108.37C238.312 139.306 263.871 164.293 295.013 164.199C326.704 164.105 352.369 138.394 351.839 107.271C351.319 76.514 325.481 52.1002 293.887 52.5231ZM294.599 130.435C281.757 130.36 271.986 120.587 272.082 107.91C272.169 96.342 282.816 85.8078 294.493 85.742C307.489 85.6669 318.117 96.0319 317.925 108.605C317.742 121.122 307.701 130.52 294.599 130.444V130.435Z" fill="#2A7086">
                        </path>
                        <path d="M551.419 108.295C551.419 96.3514 551.419 84.4076 551.419 72.4638C551.419 71.5429 551.477 70.622 551.275 69.7105C550.967 68.3197 549.157 67.7653 546.953 67.7747C544.584 67.7747 542.361 68.2163 542.168 69.8232C541.956 71.5429 542.033 73.2626 542.033 74.9917C542.033 98.0711 542.004 121.16 542.091 144.239C542.091 145.734 540.541 147.895 545.682 148.073C549.59 148.214 551.564 147.782 551.516 145.16C551.304 132.878 551.419 120.587 551.419 108.295Z" fill="#96D4C8">
                        </path>
                        <path d="M517.986 108.004C517.986 95.9379 517.986 83.8626 517.986 71.7966C517.986 69.9924 518.689 67.8216 513.712 67.784C508.59 67.7465 508.773 69.8984 508.773 71.9094C508.773 96.1635 508.773 120.418 508.773 144.662C508.773 146.41 508.35 148.064 513.192 148.12C518.332 148.177 518.015 146.457 518.015 144.54C517.986 132.352 518.005 120.173 518.005 107.985L517.986 108.004Z" fill="#96D4C8">
                        </path>
                        <path d="M525.697 108.088C525.697 120.258 525.706 132.427 525.687 144.596C525.687 146.344 525.158 148.008 530.058 147.989C534.592 147.97 534.813 146.636 534.813 144.709C534.765 120.258 534.775 95.797 534.813 71.3456C534.813 69.4755 534.679 67.8122 530.308 67.784C525.456 67.7558 525.658 69.6447 525.668 71.5805C525.716 83.7498 525.697 95.9191 525.697 108.088Z" fill="#96D4C8">
                        </path>
                        <path d="M515.425 59.8434C517.562 61.892 520.219 63.7433 523.319 62.484C527.93 60.6234 532.262 60.4637 536.883 62.0894C539.915 63.1606 542.784 61.5913 544.652 59.8528C546.596 58.0486 543.91 55.9624 542.996 54.1863C539.896 48.1816 536.594 42.2801 533.292 36.3787C531.646 33.428 529.49 32.4507 527.574 36.0122C523.608 43.3514 519.892 50.8222 516.08 58.2459C515.897 58.5936 515.781 58.9789 515.425 59.8434Z" fill="#2A7086">
                        </path>
                        <path d="M530.395 167.92C536.084 167.92 541.773 167.732 547.443 167.986C551.227 168.146 551.804 166.313 551.718 163.287C551.641 160.487 551.564 158.204 547.646 158.241C536.074 158.354 524.493 158.354 512.922 158.241C508.985 158.204 508.889 160.459 508.917 163.297C508.956 166.276 509.572 168.155 513.327 167.986C518.997 167.732 524.696 167.92 530.375 167.92H530.395Z" fill="#2A7086">
                        </path>
                        <path d="M370.149 130.266C370.38 113.454 368.542 96.5112 377.206 80.6769C387.814 61.2906 412.497 49.1025 435.004 52.9647C459.311 57.137 478.632 75.9126 481.549 98.3248C484.042 117.457 482.348 136.675 482.849 155.854C482.954 159.895 481.202 161.568 477.111 161.511C469.766 161.408 462.402 161.267 455.066 161.587C449.55 161.831 448.048 159.519 448.106 154.463C448.289 138.413 448.289 122.353 447.962 106.303C447.779 97.5824 443.36 91.0608 435.033 87.4805C426.273 83.7028 418.36 85.6762 411.274 91.4555C405.883 95.8534 404.401 101.924 404.372 108.427C404.305 123.331 404.102 138.244 404.459 153.148C404.613 159.312 402.947 162.31 396.122 161.577C387.776 160.675 377.148 165.045 371.593 159.576C366.818 154.877 370.554 144.822 370.168 137.145C370.053 134.861 370.149 132.559 370.159 130.266H370.149Z" fill="#2A7086">
                        </path>
                        <path d="M640.601 52.3915C652.923 52.8801 666.747 59.9092 678.231 72.0316C681.293 75.2642 680.956 77.2658 677.529 79.4741C674.121 81.6731 670.713 83.872 667.344 86.1273C660.066 90.9856 654.232 97.1878 644.086 88.392C636.076 81.4475 622.012 86.2777 615.571 95.299C609.439 103.888 610.517 116.49 618.017 123.669C626.507 131.807 639.455 132.935 648.321 125.595C652.018 122.541 654.463 122.306 658.092 125.22C663.512 129.58 668.971 134.034 674.968 137.539C680.417 140.725 678.799 143.102 675.68 146.617C655.965 168.813 614.657 169.367 593.623 147.087C576.805 129.27 572.569 108.511 582.042 85.9112C590.696 65.2468 612.144 52.2411 640.601 52.3915Z" fill="#2A7086">
                        </path>
                        <path d="M737.705 52.3163C751.375 52.617 762.657 55.8872 773.064 62.5122C776.751 64.8615 778.127 66.6752 775.143 70.3025C773.863 71.853 772.967 73.6855 771.812 75.3394C768.693 79.8312 766.479 86.1179 762.137 88.2511C757.709 90.4218 754.07 83.0262 748.949 81.9362C748.67 81.8798 748.419 81.6824 748.14 81.5979C741.835 79.803 733.325 75.189 730.264 83.0168C727.26 90.7037 737.522 90.7507 742.422 93.3161C747.014 95.7218 752.289 96.8495 757.132 98.8511C774.171 105.918 782.305 117.448 780.804 132.126C779.234 147.378 768.712 158.57 751.481 162.197C732.199 166.248 714.274 162.141 697.523 152.302C692.248 149.201 691.988 146.156 696.07 141.589C700.103 137.079 702.202 129.956 707.044 127.39C712.522 124.487 716.796 132.587 722.658 133.827C728.069 134.974 733.19 137.652 738.937 136.75C742.095 136.252 745.57 135.585 746.359 131.816C747.226 127.691 743.702 126.319 740.853 125.107C732.805 121.705 724.18 119.826 716.209 116.076C702.577 109.677 695.569 99.2551 695.848 84.7177C696.108 70.8851 705.995 59.7589 720.906 54.9945C726.827 53.1057 732.834 52.0344 737.724 52.3351L737.705 52.3163Z" fill="#2A7086">
                        </path>
                        <path opacity="0.5" d="M302.483 87.0858C299.98 86.2119 297.295 85.7138 294.484 85.7326C294.195 85.7326 293.916 85.7702 293.627 85.789C294.484 86.5972 295.648 87.0952 296.929 87.0952H302.474L302.483 87.0858Z" fill="#96D4C8">
                        </path>
                        <path d="M349.134 52.7204H299.374C321.236 54.4401 339.594 68.0942 347.565 87.0952H349.134C351.782 87.0952 353.919 84.9996 353.919 82.4248V57.4002C353.919 54.816 351.772 52.7298 349.134 52.7298V52.7204Z" fill="#96D4C8">
                        </path>
                        <path opacity="0.5" d="M299.374 52.7204H296.938C294.291 52.7204 292.154 54.816 292.154 57.3908V82.4154C292.154 83.7404 292.722 84.9339 293.636 85.789C293.925 85.7796 294.204 85.742 294.493 85.7326C297.304 85.7138 299.99 86.2119 302.493 87.0858H347.575C339.604 68.0941 321.255 54.4401 299.384 52.711L299.374 52.7204Z" fill="#96D4C8">
                        </path>
                        <path d="M165.891 52.2975C135.028 52.7016 109.517 78.1585 109.912 108.145C110.316 139.08 135.875 164.067 167.017 163.973C198.708 163.879 224.373 138.169 223.843 107.045C223.323 76.2885 197.485 51.8747 165.891 52.2975ZM166.603 130.209C153.761 130.134 143.99 120.361 144.086 107.684C144.173 96.1165 154.82 85.5823 166.497 85.5165C179.493 85.4413 190.121 95.8064 189.928 108.38C189.745 120.897 179.705 130.294 166.603 130.219V130.209Z" fill="#2A7086">
                        </path>
                        <path d="M102.47 154.022C85.4117 140.396 68.5169 126.582 51.1792 113.313C45.8172 109.216 46.3081 106.82 51.1119 103.099C62.8275 94.0115 74.3506 84.6707 85.9123 75.3957C93.6906 69.156 101.411 62.8505 109.161 56.5826C108.91 55.8684 108.66 55.1543 108.41 54.4401C98.2536 54.4401 88.0879 54.7502 77.9606 54.3367C70.7214 54.036 65.0416 56.1691 59.5833 60.8395C54.0576 65.5663 42.3516 74.1929 42.3516 74.1929L34.8235 79.944V79.9628H34.8043L34.7273 80.0191V136.026C39.8005 140.208 52.0938 150.103 58.3993 154.539C61.7108 156.86 64.4737 160.778 68.6709 160.901C81.7535 161.295 94.8554 161.051 108.804 161.051C107.197 157.273 104.646 155.798 102.461 154.05L102.47 154.022Z" fill="#96D4C8">
                        </path>
                        <path d="M34.8329 79.9432V79.9252H34.8139L34.8329 79.9432Z" fill="#96D4C8">
                        </path>
                        <g opacity="0.5" style={{ mixBlendMode: 'screen' }}>
                            <path d="M34.5155 80.1695C34.1208 80.4044 33.7454 80.6675 33.4373 80.9964L0.947307 105.814C0.947307 105.814 -1.09354 107.863 0.889549 110.917L32.4265 134.062C32.4265 134.062 33.3218 134.852 34.7273 136.007V80.0004L34.5059 80.1695H34.5155Z" fill="#96D4C8">
                            </path>
                        </g>
                        <path d="M34.7272 57.5881V54.4307H34.7176C34.6695 44.8832 34.6021 35.345 34.5925 25.7975C34.554 -0.862227 34.5925 -0.73067 7.01207 0.434578C1.98695 0.650713 0.456303 2.24823 0.49481 6.9844C0.75473 39.9309 0.822127 72.8773 0.9569 105.824C0.9569 105.824 -1.08397 107.872 0.899128 110.926C0.793235 125.736 0.822126 140.556 0.504446 155.366C0.388926 160.449 2.76671 161.718 7.38751 161.568C14.1069 161.361 20.836 161.295 27.5457 161.587C32.6768 161.812 35.0257 160.28 34.6791 154.868C34.6599 154.529 34.6599 154.191 34.6406 153.853H34.7369V79.944H34.8139H34.8331C34.7946 72.492 34.7754 65.0495 34.7369 57.5975L34.7272 57.5881Z" fill="#2A7086">
                        </path>
                        <path opacity="0.5" d="M34.5155 80.1695C34.1208 80.4044 33.7454 80.6675 33.4373 80.9964L0.947307 105.814C0.947307 105.814 -1.09354 107.863 0.889549 110.917L32.4265 134.062C32.4265 134.062 33.3218 134.852 34.7273 136.007V80.0004L34.5059 80.1695H34.5155Z" fill="#96D4C8"></path>
                        <path d="M332.644 205.124C329.785 198.273 326.569 191.535 324.23 184.516C322.863 180.409 321.217 180.09 317.289 181.17C309.559 183.294 301.723 184.412 293.675 184.647C293.646 184.647 293.627 184.675 293.598 184.694C293.569 184.675 293.55 184.647 293.521 184.647C285.521 184.412 277.724 183.285 270.032 181.18C266.104 180.099 264.458 180.418 263.091 184.525C260.752 191.545 257.536 198.282 254.677 205.133C253.05 209.033 254.148 211.316 258.451 212.651C269.926 216.222 281.594 218.317 293.665 217.904C293.665 217.904 293.665 217.876 293.665 217.857C293.665 217.876 293.665 217.904 293.665 217.904C305.737 218.317 317.395 216.222 328.87 212.651C333.173 211.316 334.271 209.023 332.644 205.133V205.124Z" fill="#2A7086">
                        </path>
                    </svg>
                </div>
                <div>
                    <p>Let there be learning.<br></br>
                        <br></br>Welcome Back.
                        <br></br>Sign-In to continue
                    </p>
                </div>
                <form onSubmit={handleSubmit} >
                    <div className='inputInfo'>
                        <label>Username</label>
                        <input type='text' value={userName} onChange={(evt) => setUserName(evt.target.value)} ></input>
                        <label>Password</label>
                        <input type='text' value={userPassword} onChange={(evt) => setUserPassword(evt.target.value)}></input>
                        {/* <span id='passwordSvg'>

                            <svg viewBox="64 64 896 896" focusable="false" data-icon="eye-invisible" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z">
                                </path>
                                <path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z">
                                </path>
                            </svg>
                        </span> */}
                        <button className='btn' onClick={navigateToAbout} >Login</button>
                    </div>
                </form>

            </div>  
        </div>
    )
}