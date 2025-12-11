"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";


export default function Theworldpost() {
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
                                src="/images/world.jpeg"
                                alt="Harishchandra family illustration"
                                width={1200}
                                height={600}
                                className="w-full rounded-lg object-cover h-auto"
                            />
                        </div>

                        {/* ---------------- STORY CONTENT ---------------- */}
                        <div className="px-3 pb-3">
                            <h3 className="text-[32px] font-[600] mt-4">
                                When the World Went Still
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
                                In the golden court of Akbar the Great—emperor of Hindustan, lover of the arts, and patron of genius—there stood a man whose voice could summon rain and set lamps alight.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                His name was Tansen.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                A master of melody.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                A jewel among the nine gems of Akbar’s court.
                            </p>

                            <p className="text-base text-gray-900 leading-relaxed  mb-4">If
                                A singer whose ragas didn’t just echo—they breathed.
                            </p>

                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                One evening, after a divine rendition of Raag Megh Malhar, as the last note dissolved into silence, Akbar sat still—eyes closed, soul adrift.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                And then, with the softness of wonder, he asked,
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                “Tansen… who taught you to sing like this?”
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                Tansen bowed his head, voice quiet.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                “My Ustaad, Haridas. Swami Haridas. The best musician by far.”
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                Akbar raised an eyebrow. “Better than you?”
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                Tansen smiled gently. “I am but a shadow. He is the sunrise.”
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                The emperor frowned. “I must hear him. Invite him to my court.”
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                Tansen shook his head. “He won’t come, Badshah. He sings for no man. If you truly wish to hear him… we must go to him.”
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                Akbar smiled. “So be it,” he said. “If the mountain won’t come to Muhammad… then Muhammad shall go to the mountain.”
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                “And where is this Haridas?” Akbar asked, intrigued.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                “In the jungle. In a small cottage by the Yamuna. He sings at dawn—around the hour of Brahmamuhurta.”
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                Akbar, never one to be denied a mystery, agreed.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                That very night, disguised as humble travellers, Akbar and Tansen slipped out of the palace and journeyed into the dense forest, the moonlight their only companion. They reached Haridas’s quiet ashram well before dawn and waited beneath the shadows of peepal trees. Tansen warned, “Do not make any noise. He should not know of our presence. Just listen.”
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                They waited. And waited.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                But the air remained still. No sound. No sitar. No voice.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">

                                Daylight broke over the forest floor like gold over stone.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                Akbar turned, puzzled. “What happened?”
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                Tansen bowed his head again. “Perhaps… he didn’t feel the music today.”
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                Akbar was silent for a moment. “What next?”
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                Tansen replied, unsure, “Tomorrow. Again.”
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                And so, the next night, they returned—silently, reverently.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                This time, just as the stars began to fade, the air shifted. The leaves rustled. And a soft drone from the tanpura emerged.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                Then came the sitar—fragile, fierce, fluid.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                Then silence. A breath.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                And then—his voice.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                Swami Haridas sang.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                It was not music. It was meditation.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                Not sound—but soul.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                Notes rose like prayer, fell like dew.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                The world went still. Even the birds seemed to pause mid-flight.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                Akbar sat motionless. His eyes wide. Then slowly—closed.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                For that one hour, he did not breathe. He did not blink.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                The world vanished.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                When the music faded, and the forest returned to its hush, the emperor remained still.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                Tears clung to his lashes.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                He had heard something beyond humans.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                On the way back, through the winding paths of the silent jungle, he whispered to Tansen,
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                “You were right. You are nothing when compared to him. You are just brass. He is pure gold.”
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                Tansen smiled—not with pride, but with peace.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                “I sing for the king of Hindustan,” he said.
                            </p>
                            <p className="text-base text-gray-900 leading-relaxed  mb-4">
                                “He sings for no court… but for the King of all Kings. The Almighty.”
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
