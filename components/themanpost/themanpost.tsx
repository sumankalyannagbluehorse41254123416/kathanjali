"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";


export default function Themanpost() {
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
                src="/images/the man.jpeg"
                alt="Harishchandra family illustration"
                width={1200}
                height={600}
                className="w-full rounded-lg object-cover h-auto"
              />
            </div>

            {/* ---------------- STORY CONTENT ---------------- */}
            <div className="px-3 pb-3">
              <h3 className="text-[32px] font-[600] mt-4">
                The Man, the Monk, and the Monkey
              </h3>

              <div
                className="bg-[#293138] text-white p-8 rounded-lg mt-4"
                style={{ fontFamily: "'Roboto Mono', monospace" }}
              >
                <p className="font-base mb-5">KathaAnjali is my personal archive of stories that hit deeper than advice.</p>
                <p className="font-base mb-5">Short, real, and rooted in Indian mythology, history, sport, and everyday life — each one is picked to make you pause, feel, or see differently</p>
                <p className="font-base mb-5">Some teach. Some heal. All stay.</p>
              </div>



               <p className="text-base font-semibold text-gray-700 mb-4 mt-4">
                        Once upon a time, in South India, there lived a man with a restless ambition. He was not content
                        with wealth, family, or even the respect he enjoyed in his town. He wanted something far
                        greater—supernatural powers.
                    </p>
                    <p className="text-base font-semibold text-gray-700 mb-4">
                        “What are supernatural powers?” he would boast to friends.
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        “To walk on water, to fly without wings, to walk on the ceiling when everyone else walks on the
                        floor. To do what no one else can.”
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        It wasn’t about wisdom or peace. It was about circus tricks of the spirit.
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        The Search for Powers
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        So he went from guru to guru, knocking on doors, falling at feet, asking for mantras and
                        secrets. But every teacher dismissed him.
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        Finally, someone whispered,
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        “South Indian gurus won’t give you such things. But far away, in Tibet, lives a monk—an old
                        master who knows the secrets of every supernatural power. If you have the courage, go.”
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        At once, the man set out. From South India to Tibet, crossing plains, rivers, and finally the
                        icy Himalayas. His body ached, but his ambition burned brighter than his hunger or fatigue.
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        A Strange Monastery
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        At last, he reached a Buddhist monastery nestled in snow.
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        But life here was unlike anything he had ever known.
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        In South India, hospitality meant: “A guest is God.” Step into any home, and before you could
                        say no, a plate of steaming food would be in front of you.
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        Here, nobody even asked who he was.
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        Nobody asked him to eat.
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        Nobody asked him where he had come from.
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        Why? Because in their world, the questions “Who are you?” or “Where do you come from?” were too
                        big, too sacred, to throw around lightly. Better silence than shallow answers.
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        So the man wandered. Hungry, uncertain, ignored. Days turned into weeks. Nobody spoke to him.
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        The Old Monk’s Test
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        Finally, after three weeks, the head monk summoned him.
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4 italic">
                        “Why have you come?”
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        The man fell at his feet. “Master, I want supernatural powers. Please, teach me.”
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        The monk chuckled. <i>“What will you do walking on water? After three days, a boat is better.
                            Learn meditation instead—you will live a truly fruitful life.”</i>
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        But the man shook his head stubbornly.
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        “Meditation? We have plenty of that in India. Didn’t Buddha himself come from India? No, Master,
                        I want powers—nothing else.”
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        The monk sighed, but agreed.
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        “Very well. Tomorrow morning, take a dip in the river at 4 a.m., then come to me. I shall give
                        you the secret.”
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        The Secret Mantras
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        The next morning, in the freezing Tibetan river, the man dipped his body. His skin turned blue,
                        his teeth chattered, but his determination remained. He sat shivering before the monk.
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        The old master looked at him kindly and said:
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        “There are three sacred mantras. Repeat them thrice, and all supernatural powers will be yours.
                        But there is only one condition—while chanting, you must not think of a monkey.”
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        The man’s eyes lit up. He bowed deeply, took the mantras—
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4 font-[600]">
                        Buddham Sharanam Gachhami
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4 font-[600]">
                        Dhammam Sharanam Gachhami
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4 font-[600]">
                        Sangham Sharanam Gachhami
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        —and rushed out, laughing.
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        “A monkey? What nonsense! In ten years I’ve not even seen a monkey. Why would I think of one?
                        Foolish condition.”
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        The Monkey Arrives
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        He reached the Indian side of the Himalayas, bathed in the holy Ganga, and sat down to chant.
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        “Buddham Sharanam Gachhami…”
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        A monkey appeared in his mind.
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        “Dhammam Sharanam Gachhami…”
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        Another monkey, bigger this time.
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        By the third line, monkeys were everywhere—jumping, laughing, screaming, swinging.
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        The more he tried to push them away, the more they multiplied. Soon his entire mind was a circus
                        of monkeys.
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        For days he struggled. He tried sitting, standing, twisting in yoga postures.
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        But no escape.
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        He couldn’t eat, couldn’t sleep—monkeys in his head, monkeys in his dreams, monkeys even in the
                        spaces between his breaths.
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        Finally, broken and exhausted, he returned to Tibet. He fell at the monk’s feet, crying:
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        “Master, I don’t want supernatural powers anymore. Just relieve me from these monkeys!”
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        The Nature of the Mind
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        The monk smiled gently.
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        “This is the nature of your mind. Whatever you say, ‘I don’t want,’ that is what will grow
                        stronger. Whatever you try to suppress, will multiply. You cannot fight the mind head-on. You
                        must understand it, steady it, and then it will become your friend.”
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        He continued:
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        “The human mind is the sharpest tool on this planet. But in unsteady hands, it cuts its owner. With awareness and steadiness, the same mind can be bliss, can be ecstasy, can be liberation.”
                    </p>
                    <p className="text-base text-gray-900 leading-relaxed  mb-4">
                        And so the man learned—the greatest power is not walking on water, nor flying in the sky. It is mastering the restless monkey within.
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
