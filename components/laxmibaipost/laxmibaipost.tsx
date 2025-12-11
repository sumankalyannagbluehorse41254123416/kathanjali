"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";


export default function Laxmibaipost() {
    /* ----------------------------
        STATE MANAGEMENT
    -----------------------------*/

    // 3-dot menu state
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    // Comment box state
    const [showCommentBox, setShowCommentBox] = useState(false);

    // Send popup state
    const [showSendPopup, setShowSendPopup] = useState(false);

    // Like button
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(523);

    /* ----------------------------
        OUTSIDE CLICK FOR MENU
    -----------------------------*/
    const menuRef = useRef<HTMLDivElement | null>(null);
    const menuBtnRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target as Node) &&
                menuBtnRef.current &&
                !menuBtnRef.current.contains(e.target as Node)
            ) {
                setOpenMenu(false);
            }
        }

        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    /* ----------------------------
        LIKE HANDLER
    -----------------------------*/
    const toggleLike = () => {
        if (liked) {
            setLikeCount(likeCount - 1);
        } else {
            setLikeCount(likeCount + 1);
        }
        setLiked(!liked);
    };

    return (
        <div className="max-w-3xl mx-auto ml-0">
            <div className="flex items-center justify-between">
                <div className="max-w-2xl mx-auto mb-4 post-card">
                    <div className="bg-white rounded-lg">

                        {/* ---------------- PROFILE SECTION ---------------- */}
                        <div className="p-3">
                            <div className="flex items-start space-x-3">

                                <Image
                                    src="/images/vineet.jpg"
                                    alt="Vineet Agrawal"
                                    width={48}
                                    height={48}
                                    className="w-12 h-12 rounded-full"
                                />

                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-gray-900 text-sm truncate">
                                        Vineet Agrawal
                                    </h3>
                                    <p className="text-xs text-gray-600 truncate">
                                        Healthcare Innovation Leader • 1st
                                    </p>
                                    <p className="text-xs text-gray-500 flex items-center">
                                        1/14/2025 • 4 min read
                                    </p>
                                </div>

                                {/* ---------------- 3 DOT MENU ---------------- */}
                                <div className="relative">
                                    <button
                                        ref={menuBtnRef}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setOpenMenu(!openMenu);
                                        }}
                                        className="p-1 rounded hover:bg-gray-100"
                                    >
                                        <svg
                                            className="w-5 h-5 text-gray-700"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                        </svg>
                                    </button>

                                    {/* MENU BOX */}
                                    <div
                                        ref={menuRef}
                                        className={`absolute top-8 right-0 bg-white w-52 shadow-lg border border-gray-200 rounded-lg p-2 z-50 ${openMenu ? "block" : "hidden"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
                                            <i className="fa-regular fa-bookmark"></i>
                                            Save
                                        </div>
                                        <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
                                            <i className="fa-solid fa-link"></i>
                                            Copy link to post
                                        </div>
                                        <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
                                            <i className="fa-solid fa-code"></i>
                                            Embed this post
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ---------------- MAIN IMAGE ---------------- */}
                        <div className="mt-3 relative">
                            <Image
                                src="/images/laxmibai.jpeg"
                                alt="Harishchandra family illustration"
                                width={1200}
                                height={600}
                                className="w-full rounded-lg object-cover h-auto"
                            />
                        </div>

                        {/* ---------------- STORY CONTENT ---------------- */}
                        <div className="px-3 pb-3">
                            <h3 className="text-[32px] font-[600] mt-4">
                                Rani Shiromani – The Laxmibai of Bengal
                            </h3>

                            <div
                                className="bg-[#293138] text-white p-8 rounded-lg mt-4"
                                style={{ fontFamily: "'Roboto Mono', monospace" }}
                            >
                                <p className="font-base mb-5">KathaAnjali is my personal archive of stories that hit deeper than advice.</p>
                                <p className="font-base mb-5">Short, real, and rooted in Indian mythology, history, sport, and everyday life — each one is picked to make you pause, feel, or see differently</p>
                                <p className="font-base mb-5">Some teach. Some heal. All stay.</p>
                            </div>


                            <p className="text-base text-gray-900 leading-relaxed  mb-4 mt-4">
                                The forests of Jungle Mahal were restless. The wind carried whispers of revolt, and in the heart
                                of Midnapore, the earth seemed to tremble under the weight of injustice. In that age of despair,
                                when the East India Company bled farmers and tribals with merciless taxes, a queen rose—not from
                                legend, but from flesh and blood. Her name was Rani Shiromani of Karnagarh.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                She was not born to be a warrior. Born in 1728, Shiromani stepped into power when her husband,
                                Raja Ajit Singh, died without an heir. Along with co-ruler Rani Bhabani, she was thrust into
                                rulership of a fragile kingdom. Most expected her to retreat into the safety of silence. But
                                destiny had other plans
                            </p>
                            <p className="text-[20px] text-gray-900 leading-relaxed  mb-4 font-[600]">
                                A Queen Turns Rebel

                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                The British were tightening their grip on Bengal. Fields once lush with paddy turned barren as
                                taxes climbed higher than harvests. The Adivasis of Jungle Mahal—farmers, paiks, zamindars—could
                                no longer bear it. Out of their pain rose the Chuar Rebellion.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                And at its center stood a queen.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                It was 1799. While most rulers bargained with the Company, Rani Shiromani chose to stand with
                                her people. She was not a monarch cloaked in luxury—she was a mother to her land, and the cries
                                of her farmers were her own. Gathering three hundred rebels armed with nothing more than bows,
                                arrows, and courage, she led them into battle.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                One March morning, she struck the Karnagarh fort itself. Company soldiers fell back as the
                                rebels seized weapons, a queen at their helm, her voice ringing through the chaos.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4 italic">
                                “This land belongs not to the Company, but to its children!”
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                For months, her guerrilla warfare rattled British power across Midnapore, Salboni, and
                                Bahadurpur. She was no longer just a queen. She had become the heartbeat of a rebellion.
                            </p>
                            <p className="text-[20px] text-gray-900 leading-relaxed  mb-4 font-[600]">
                                Chains Could Not Break Her
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                But empires do not forgive defiance. By the year’s end, the British retaliated. Rani Shiromani
                                was captured and dragged away, not to a palace but to the cold stone walls of the Hijli
                                Detention Camp—today remembered as the grounds of IIT Kharagpur.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                The Company even offered her a way out: to return as ruler of Karnagarh, but only as their
                                puppet. Rani Shiromani refused. She chose the silence of prison over the shame of surrender.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                For nearly twelve years, she remained imprisoned. Alone, stripped of her kingdom, she bore her
                                chains with the same quiet dignity with which she had worn her crown. The British thought they
                                had silenced her, but in truth, they had turned her into a martyr.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                In 1812, she breathed her last behind bars—her body broken, her spirit unbroken.
                            </p>
                            <p className="text-[20px] text-gray-900 leading-relaxed  mb-4 font-[600]">
                                The Legacy We Almost Forgot
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                Today, only ruins remain of the Karnagarh fort. Moss grows on its stones, and the wind rustles
                                through broken walls. The State Government has made small attempts to turn it into a heritage
                                resort, but little has been done to restore the grandeur of the fort. And so, the walls
                                wait—silent witnesses to a queen’s courage.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                Rani Shiromani was called the “Rani Laxmibai of Bengal” long before Laxmibai herself took arms.
                                She was one of India’s earliest queens to fight the East India Company, decades before 1857 lit
                                the nation’s flame.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                Yet, history chose to forget her.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                And that is why we retell her tale. Because hidden in the soil of Medinipur is the story of a queen who fought not for glory, but for her people—a queen who reminds us that India’s freedom was sown by countless unsung heroes.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                ✨ This is Rani Shiromani’s story. A story almost forgotten, but worth remembering—and retelling.
                            </p>

                            {/* ---------------- BOTTOM BOX ---------------- */}
                            <div
                                className="bg-[#293138] text-white p-8 rounded-lg mt-4"
                                style={{ fontFamily: "'Roboto Mono', monospace" }}
                            >
                                <p className="font-base mb-5">If this story stirred something in you — drop a note.</p>
                                <p className="font-base mb-5">Need your encouragement...</p>
                                <p className="font-base mb-5">If you have a story, share it…</p>
                            </div>

                            {/* TAGS */}
                            <div className="flex flex-wrap gap-2 mb-4 mt-4">
                                <span className="text-base text-blue-600">#KathaNjali</span>
                                <span className="text-base text-blue-600">#Tech</span>
                                <span className="text-base text-blue-600">#VentureCapital</span>
                                <span className="text-base text-blue-600">#RemoteMonitoring</span>
                                <span className="text-base text-blue-600">#AI</span>
                            </div>
                        </div>

                        {/* ---------------- REACTIONS ROW ---------------- */}
                        <div className="px-4 py-3">

                            <div className="flex justify-between text-xs text-gray-600 border-b border-gray-200 pb-3">
                                <div>{likeCount}</div>
                                <div>0 comments • 89 reposts</div>
                            </div>

                            <div className="flex justify-between items-center mt-1">
                                {/* LIKE BUTTON */}
                                <button
                                    onClick={toggleLike}
                                    className="flex-1 flex items-center justify-center gap-2 mt-4 hover:bg-gray-50 p-1"
                                >
                                    <i className={`fa-regular fa-thumbs-up ${liked ? "text-blue-600" : ""}`}></i>
                                    <span className="text-sm">{liked ? "Liked" : "Like"}</span>
                                </button>

                                {/* COMMENT BUTTON */}
                                <button
                                    onClick={() => setShowCommentBox(!showCommentBox)}
                                    className="flex-1 flex items-center justify-center gap-2 mt-4 hover:bg-gray-50 p-1"
                                >
                                    <i className="fa-regular fa-comment"></i>
                                    <span className="text-sm">Comment</span>
                                </button>

                                {/* SEND BUTTON */}
                                <button
                                    onClick={() => setShowSendPopup(true)}
                                    className="flex-1 flex items-center justify-center gap-2 mt-4 hover:bg-gray-50 p-1"
                                >
                                    <i className="fa-regular fa-paper-plane"></i>
                                    <span className="text-sm">Send</span>
                                </button>
                            </div>

                            {/* ---------------- SEND POPUP ---------------- */}
                            {showSendPopup && (
                                            <div className="fixed inset-0 flex justify-center items-center z-50">
                                              <div className="bg-white w-96 rounded-lg shadow-lg p-4">
                                                <div className="flex justify-between items-center">
                                                  <h2 className="text-lg font-semibold">Send to...</h2>
                                                  <button
                                                    onClick={() => setShowSendPopup(false)}
                                                    className="text-gray-500 hover:text-black text-xl"
                                                  >
                                                    ×
                                                  </button>
                                                </div>
                            
                                                <input type="text" placeholder="Search people" className="border w-full p-2 rounded mt-3" />
                            
                                                <div className="mt-4 space-y-3">
                                                  <div className="flex items-center gap-3">
                                                    <Image src="/images/vineet.jpg" width={40} height={40} className="w-10 h-10 rounded-full" alt="" />
                                                    <div>
                                                      <p className="font-medium">John Doe</p>
                                                      <p className="text-xs text-gray-500">Software Engineer</p>
                                                    </div>
                                                    <button className="ml-auto px-3 py-1 text-sm border rounded hover:bg-gray-100">Send</button>
                                                  </div>
                            
                                                  <div className="flex items-center gap-3">
                                                    <Image src="/images/vineet.jpg" width={40} height={40} className="w-10 h-10 rounded-full" alt="" />
                                                    <div>
                                                      <p className="font-medium">Sarah Parker</p>
                                                      <p className="text-xs text-gray-500">Designer</p>
                                                    </div>
                                                    <button className="ml-auto px-3 py-1 text-sm border rounded hover:bg-gray-100">Send</button>
                                                  </div>
                                                </div>
                            
                                                {/* SOCIAL SHARE ICONS */}
                                          <div className="flex items-center justify-center gap-6 border-t pt-4 pb-2 text-gray-700 mt-7">
                            
                                            <a href="#" className="hover:opacity-75">
                                              <i className="fa-solid fa-link text-xl"></i>
                                            </a>
                            
                                            <a href="#" className="hover:opacity-75">
                                              <i className="fa-brands fa-instagram text-xl"></i>
                                            </a>
                            
                                            <a href="#" className="hover:opacity-75">
                                              <i className="fa-brands fa-linkedin text-xl"></i>
                                            </a>
                            
                                            <a href="#" className="hover:opacity-75">
                                              <i className="fa-brands fa-x-twitter text-xl"></i>
                                            </a>
                            
                                            <a href="#" className="hover:opacity-75">
                                              <i className="fa-brands fa-facebook text-xl"></i>
                                            </a>
                            
                                          </div>
                            
                            
                                              </div>
                                            </div>
                                          )}

                            {/* ---------------- COMMENT BOX ---------------- */}
                            {showCommentBox && (
                                <div className="mt-3">
                                    <div className="flex items-start gap-3">
                                        <Image
                                            src="/images/vineet.jpg"
                                            alt="you"
                                            className="w-9 h-9 rounded-full mt-1"
                                            width={36}
                                            height={36}
                                        />

                                        <div className="flex-1">
                                            <textarea
                                                className="w-full p-3 border rounded-lg text-sm focus:ring-blue-500 focus:outline-none resize-none"
                                                rows={3}
                                                placeholder="Write a comment..."
                                            ></textarea>

                                            <div className="flex justify-end gap-2 mt-2">
                                                <button
                                                    onClick={() => setShowCommentBox(false)}
                                                    className="px-3 py-1.5 rounded border text-sm hover:bg-gray-100"
                                                >
                                                    Cancel
                                                </button>
                                                <button className="px-3 py-1.5 rounded bg-blue-600 text-white text-sm">
                                                    Post
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
